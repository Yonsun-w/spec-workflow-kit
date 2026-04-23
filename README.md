# spec-workflow-kit 🛠️🤖📚

一个面向 `Cursor`、`Claude Code`、`Codex` 的开源通用 workflow skills 工具包。  
它把一套偏工程化、可复用、可落地的开发流程固化成统一的 workspace、slash commands 和 skills。⚙️

> 本项目的设计理念来自 [doccompiler](https://github.com/Yonsun-w/doccompiler)，可以理解为基于 `doccompiler` 范式抽出来的一套更通用、更轻量、可直接分发的 skills/workflow kit。🧠📖

## ✨ 它解决什么问题

很多 AI 编码流的问题不是“不会写代码”，而是：

- 需求没有沉淀，聊完就散了 💭
- 提案没有结构，风险点没人显式记录 ⚠️
- 开发任务和验证任务混在一起，执行容易失焦 🧩
- 改完代码后，项目文档没有同步，知识继续漂移 📉

`spec-workflow-kit` 的目标，就是把这几个阶段固定下来：

- `/pro-init`：从当前代码库初始化项目文档，完成“代码 -> 文档”的第一步 🏗️
- `/explore`：围绕需求做探索和澄清，把问题聊清楚 🔍
- `/propose`：生成正式提案，明确需求变更、风险点、开发任务、验证任务 📝
- `/apply`：按照提案进入实施阶段，推动代码改动真正落地 🧪
- `/sync`：强制对齐项目代码和文档语义，处理双向漂移 🔄
- `/done`：完成最终提交、清理工作区，并触发最后一次 sync ✅

## 🧠 设计理念

这个包不是单纯的 prompt 集合，而是一套稳定的 workflow 约束层：

- 代码是初始化阶段的重要事实来源
- 需求探索、提案、任务、验证都有明确落盘位置
- “完成”不只是代码写完，还包括最终 sync、提交与工作区清理
- 开发任务与验证任务显式拆分，避免只做实现、不做验证
- `sync` 是一个独立阶段，不是附属动作

你可以把它看成是一个轻量版的“文档对齐开发循环”：

```text
代码现状 -> /pro-init -> 项目基线文档
需求讨论 -> /explore  -> 需求澄清
方案设计 -> /propose  -> 提案/风险/任务/验证
进入实施 -> /apply    -> 按提案执行代码改动
强制对齐 -> /sync     -> 代码/文档语义双向绑定
最终收尾 -> /done     -> 提交、清理工作区、最终 sync
```

## 📁 默认目录结构

安装后会生成统一的 `.ai-flow/` 工作区：

```text
.ai-flow/
  project/
    overview.md
    architecture.md
    conventions.md
  changes/
    active/
      brief.md
      proposal.md
      tasks.md
      validation.md
      sync.md
```

含义如下：

- `project/overview.md`：项目概览、产品背景、范围边界
- `project/architecture.md`：系统结构、关键模块、改动热点
- `project/conventions.md`：代码约定、交付约定、文档约定
- `changes/active/brief.md`：当前需求的澄清结果
- `changes/active/proposal.md`：当前需求的方案提案与风险说明
- `changes/active/tasks.md`：开发任务和验证任务
- `changes/active/validation.md`：验证计划、验证结果、残余风险
- `changes/active/sync.md`：代码与文档的语义对齐状态、漂移记录与同步结果

## 🚀 安装

```bash
npm install -D spec-workflow-kit
npx spec-workflow-kit init
```

执行后会写入：

- `.ai-flow/`：共享 workflow 文档工作区
- `.cursor/commands/` 和 `.cursor/skills/`
- `.claude/commands/` 和 `.claude/skills/`
- `.agents/skills/`：给 Codex 使用的项目级 skill

## 🧩 CLI

```bash
spec-workflow-kit init [path] [--targets=cursor,claude,codex,shared] [--force] [--dry-run]
```

示例：

```bash
npx spec-workflow-kit init
npx spec-workflow-kit init . --targets=shared,cursor,claude
npx spec-workflow-kit init . --dry-run
```

## 🖥️ 平台适配

- `Cursor`：安装 slash commands + 对应 skill
- `Claude Code`：安装 slash commands + 对应 skill
- `Codex`：安装项目级 `pro-workflow` skill

其中 `Codex` 这里默认不依赖 slash command 文件，而是通过 `pro-workflow` 这个 skill 以及阶段语义 `pro-init / explore / propose / apply / sync / done` 来承接同一套流程。🤝

## 🧪 适合什么项目

这套东西比较适合：

- 想把 AI 开发过程标准化的个人项目 👨‍💻
- 想把“需求澄清 -> 提案 -> 开发 -> 对齐”固定成套路的小团队 👥
- 多代理、多 IDE、多入口混合协作的仓库 🕸️
- 希望项目文档不要继续失真的工程仓库 🧱

## 📦 发布

常见 npm 发布流程：

```bash
npm login
npm version patch
npm publish --access public
```

如果无 scope 包名被占用，可以改成 scoped package，例如：

```bash
npm publish --access public
```

配合 `@your-scope/spec-workflow-kit` 使用即可。🚢

## 🌌 后续方向

后面适合继续增强的方向包括：

- 多 change 并行，而不是只有 `active/`
- proposal 模板自定义
- 校验任务自动生成
- GitHub / GitLab PR 模板联动
- CI 中检查文档与任务状态是否对齐

如果你认同 `doccompiler` 的方向，但又想先从一个更通用、可安装、可直接接入现有项目的形态开始，这个包就是为这个场景准备的。🧬
