import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const TEMPLATE_DIR = path.join(ROOT_DIR, "templates");
const DEFAULT_TARGETS = ["shared", "cursor", "claude", "codex"];

const TARGET_PATHS = {
  shared: {
    from: path.join(TEMPLATE_DIR, "shared", "ai-flow"),
    to: ".ai-flow"
  },
  cursor: [
    {
      from: path.join(TEMPLATE_DIR, "cursor", "commands"),
      to: path.join(".cursor", "commands")
    },
    {
      from: path.join(TEMPLATE_DIR, "cursor", "skills", "pro-workflow"),
      to: path.join(".cursor", "skills", "pro-workflow")
    }
  ],
  claude: [
    {
      from: path.join(TEMPLATE_DIR, "claude", "commands"),
      to: path.join(".claude", "commands")
    },
    {
      from: path.join(TEMPLATE_DIR, "claude", "skills", "pro-workflow"),
      to: path.join(".claude", "skills", "pro-workflow")
    }
  ],
  codex: [
    {
      from: path.join(TEMPLATE_DIR, "codex", "skills", "pro-workflow"),
      to: path.join(".agents", "skills", "pro-workflow")
    }
  ]
};

function printHelp() {
  console.log(`spec-workflow-kit

Usage:
  spec-workflow-kit init [path] [--targets=cursor,claude,codex,shared] [--force] [--dry-run]

Examples:
  spec-workflow-kit init
  spec-workflow-kit init ./my-app --targets=shared,cursor,claude
  npx spec-workflow-kit init --force
`);
}

function parseArgs(args) {
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    return { command: "help" };
  }

  const [command, maybePath, ...rest] = args;
  let projectPath = ".";
  const flags = [];

  if (maybePath && !maybePath.startsWith("-")) {
    projectPath = maybePath;
    flags.push(...rest);
  } else {
    flags.push(...args.slice(1));
  }

  const options = {
    command,
    projectPath: path.resolve(process.cwd(), projectPath),
    force: false,
    dryRun: false,
    targets: DEFAULT_TARGETS
  };

  for (const flag of flags) {
    if (flag === "--force") {
      options.force = true;
      continue;
    }
    if (flag === "--dry-run") {
      options.dryRun = true;
      continue;
    }
    if (flag.startsWith("--targets=")) {
      options.targets = flag
        .slice("--targets=".length)
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);
      continue;
    }
    throw new Error(`Unknown flag: ${flag}`);
  }

  return options;
}

function ensureKnownTargets(targets) {
  for (const target of targets) {
    if (!(target in TARGET_PATHS)) {
      throw new Error(`Unknown target "${target}". Allowed: ${Object.keys(TARGET_PATHS).join(", ")}`);
    }
  }
}

function listFilesRecursive(dir) {
  const output = [];
  for (const entry of readdirSync(dir)) {
    const entryPath = path.join(dir, entry);
    const stats = statSync(entryPath);
    if (stats.isDirectory()) {
      output.push(...listFilesRecursive(entryPath));
    } else {
      output.push(entryPath);
    }
  }
  return output;
}

function copyTemplate(from, to, { force, dryRun }) {
  const files = listFilesRecursive(from);

  for (const file of files) {
    const relativePath = path.relative(from, file);
    const destination = path.join(to, relativePath);

    if (existsSync(destination) && !force) {
      throw new Error(`Refusing to overwrite existing file: ${destination}. Re-run with --force if intended.`);
    }
  }

  if (dryRun) {
    for (const file of files) {
      const relativePath = path.relative(from, file);
      console.log(`[dry-run] ${path.join(to, relativePath)}`);
    }
    return;
  }

  mkdirSync(to, { recursive: true });
  cpSync(from, to, { recursive: true, force });
}

function installTarget(target, projectPath, options) {
  const mappings = Array.isArray(TARGET_PATHS[target]) ? TARGET_PATHS[target] : [TARGET_PATHS[target]];
  for (const mapping of mappings) {
    copyTemplate(mapping.from, path.join(projectPath, mapping.to), options);
  }
}

function runInit(options) {
  ensureKnownTargets(options.targets);

  if (!existsSync(options.projectPath)) {
    if (!options.dryRun) {
      mkdirSync(options.projectPath, { recursive: true });
    }
  }

  for (const target of options.targets) {
    installTarget(target, options.projectPath, options);
  }

  console.log(`Installed targets: ${options.targets.join(", ")}`);
  console.log(`Project: ${options.projectPath}`);
  console.log(options.dryRun ? "Mode: dry-run" : "Mode: applied");
}

export async function runCli(argv) {
  const options = parseArgs(argv);

  if (options.command === "help") {
    printHelp();
    return;
  }

  if (options.command !== "init") {
    throw new Error(`Unknown command: ${options.command}`);
  }

  runInit(options);
}
