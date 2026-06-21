- ### Definition
  - Harness Configuration Packs are a specialised subclass of [[Agent Harness]] that operate at the configuration layer rather than the execution layer: they augment existing coding agents — primarily [[IDE Coding Agents]] such as Cline and Kilo Code, and [[Terminal Coding Agents]] such as Claude Code, opencode, and Gemini CLI — with structured skill libraries, slash-command sets, [[Hook System]] definitions, [[Prompt Template]] collections, and [[Model Context Protocol]] server registrations, transforming a general-purpose AI assistant into an opinionated virtual development team or domain-specific workflow engine without requiring any modification to the underlying agent runtime. The defining technical mechanism is the CLAUDE.md initialisation file — a Markdown document read automatically at session start that injects rules, workflow instructions, tool permissions, and skill-discovery pointers into the [[Large Language Model]]'s operating context — combined with a two-tier progressive disclosure architecture in which skill metadata (name, description) is loaded at session start while full skill bodies are loaded on-demand, preserving [[Context Window]] budget until a specific skill is invoked. Harness configuration packs range from single-developer workflow repositories to comprehensive multi-harness marketplaces: GStack (Garry Tan, Y Combinator CEO) encodes 23 specialist roles and 8 power tools into a single MIT-licensed pack oriented around CEO-level product review, engineering management, QA automation, and one-command release; Everything Claude Code (Affaan Mustafa, ~100K GitHub stars) provides a performance optimisation system with 28 subagents, instincts (a class of autonomic decision rules that fire without explicit invocation), persistent memory, and OWASP-aligned security review; Get-Shit-Done (Lex Christopherson) targets context-rot prevention through session hygiene disciplines, progressive context eviction, and task-completion rituals; wshobson/agents is a multi-harness marketplace with 184 specialist agents, 16 multi-agent orchestrators, 150 skills, and 98 commands distributed as 78 focused plugins; and the Anthropic Skills open standard (launched December 2025, SKILL.md specification) provides a vendor-neutral portable format for harness skills that any compliant agent — whether [[IDE Coding Agents]] or [[Terminal Coding Agents]] — can discover and load. Taken together, harness configuration packs represent the discipline of [[Prompt Engineering]] elevated to a software-engineering practice with versioning, modularity, composability, and multi-role governance.

- ### Semantic Classification
  - owl-class:: ai:HarnessConfigurationPacks
  - owl-role:: ExecutableProtocol | ToolkitComponent | ConfigurationLayer
  - owl-inferred:: ai:AgentHarness, ai:SkillLibrary, ai:MetaPromptingFramework, ai:WorkflowGovernanceSystem
  - belongs-to-domain:: [[AI-GroundedDomain]], [[ComputationAndIntelligenceDomain]], [[SoftwareEngineeringDomain]]
  - implemented-in-layer:: [[ApplicationLayer]], [[ToolingLayer]]

- ### Relationships
  - is-subclass-of:: [[Agent Harness]], [[Agent Frameworks]], [[Agentic AI]], [[Prompt Engineering]]
  - has-part:: [[Prompt Template]], [[Hook System]], [[Tool Registry]], [[Observability Stack]], [[Context Window]], [[Structured Output]], [[Agent Runtime]]
  - requires:: [[Agent Harness]], [[Large Language Model]], [[Model Context Protocol]], [[Tool Use]], [[Hook System]], [[Prompt Engineering]], [[Function Calling]]
  - enables:: [[Autonomous Coding]], [[Multi-Agent Collaboration]], [[Workflow Automation]], [[Code Review]], [[Browser Automation]], [[AI Agent Coordination]], [[Multi-Agent Orchestration Frameworks]]
  - implements:: [[Plan-and-Execute Pattern]], [[ReAct Pattern]], [[Chain-of-Thought]], [[Multi-Agent Orchestration Frameworks]], [[Tree of Thoughts]]
  - depends-on:: [[Context Window]], [[Prompt Engineering]], [[Structured Output]], [[Hook System]], [[Large Language Model]], [[Agent Runtime]]
  - supports:: [[IDE Coding Agents]], [[Terminal Coding Agents]], [[Agent Evaluation Benchmarks]], [[Workflow Automation]], [[Software Engineering]]
  - uses:: [[Model Context Protocol]], [[Hook System]], [[Prompt Template]], [[Tool Registry]], [[Structured Output]], [[Agent Runtime]], [[Function Calling]]
  - contrasts-with:: [[Internal AI Harness]], [[External AI Harness]], [[Agent Frameworks]]
  - related-to:: [[IDE Coding Agents]], [[Terminal Coding Agents]], [[Multi-Agent Orchestration Frameworks]], [[Software Engineering]], [[Agent Evaluation Benchmarks]], [[Large Language Model]], [[Agentic AI]], [[Agent Memory Layers]], [[Autonomous Coding]]
  - standardized-by:: [[Model Context Protocol]], [[Agent Frameworks]], [[Anthropic Agent Skills]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:hasPart ai:PromptTemplate))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:hasPart ai:HookSystem))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:hasPart ai:ToolRegistry))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:hasPart ai:SlashCommandLibrary))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:hasPart ai:SkillLibrary))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:hasPart ai:ObservabilityStack))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:hasPart ai:MCPServerRegistry))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:hasPart ai:SessionInitialisationFile))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:requires ai:AgentHarness))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:requires ai:ModelContextProtocol))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:requires ai:ToolUse))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:requires ai:HookSystem))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:requires ai:ContextWindow))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:enables ai:AutonomousCoding))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:enables ai:MultiAgentCollaboration))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:enables ai:WorkflowAutomation))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:enables ai:CodeReview))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:enables ai:BrowserAutomation))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:enables ai:AIAgentCoordination))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:implements ai:PlanAndExecutePattern))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:implements ai:ReActPattern))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:implements ai:ChainOfThought))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:implements ai:MultiAgentOrchestration))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:reducesTo ai:AgentHarness))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:reducesTo ai:PromptEngineering))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:reducesTo ai:ConfigurationLayer))
    ```
  - ## Supports Relationships
    ```
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:supports ai:IDECodingAgents))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:supports ai:TerminalCodingAgents))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:supports ai:AgentEvaluationBenchmarks))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:supports ai:WorkflowAutomation))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:supports ai:SoftwareEngineering))
    ```
  - ## Uses Relationships
    ```
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:uses ai:ModelContextProtocol))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:uses ai:HookSystem))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:uses ai:ToolRegistry))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:uses ai:AgentRuntime))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:uses ai:PromptTemplate))
    SubClassOf(ai:HarnessConfigurationPacks
      ObjectSomeValuesFrom(ai:uses ai:FunctionCalling))
    ```
  - ## About
    Harness configuration packs emerged as a distinct engineering practice in the second half of 2025, when developers discovered that the performance delta between a raw coding agent and a carefully configured one was often larger than the performance delta between frontier models. The foundational insight — that [[Prompt Engineering]] applied systematically as versioned, modular configuration files could turn a general-purpose AI assistant into a disciplined virtual team — predates the term "harness configuration pack" but crystallised around the Claude Code ecosystem from mid-2025 onward. The category is characterised by operating entirely above the agent runtime layer: unlike [[IDE Coding Agents]] (which extend the IDE with new panels and approval workflows) or [[Agent Frameworks]] (which provide new runtimes and tool orchestration infrastructure), harness configuration packs work exclusively through the configuration interfaces that existing agents already expose — CLAUDE.md files, skill directories, slash-command registries, hook definitions, and [[Model Context Protocol]] server lists — and thus compose cleanly with any conforming agent without requiring code changes. This zero-runtime-change composability is what distinguishes harness configuration packs from [[Agent Frameworks]] proper: a pack author does not need to distribute a binary, maintain a dependency tree, or manage API compatibility across agent version upgrades; they need only maintain Markdown files and shell scripts.

    The technical core of all harness configuration packs is a two-tier progressive disclosure architecture. At session start, the harness injects into the agent's context a bootstrap file (typically a CLAUDE.md or `using-superpowers` meta-skill) that instructs the [[Large Language Model]] that a skill library exists and that it should pattern-match incoming user intent against each skill's name and short description — a process that consumes only a handful of tokens per skill rather than the full skill body. When the model determines a skill is relevant (or the user invokes it explicitly via a slash command), the full SKILL.md body is read into the conversation context on demand. This progressive disclosure mechanism keeps harness overhead negligible for simple tasks while making the full configuration depth available for complex ones. Hooks provide the enforcement layer that pure instruction cannot: a PreToolUse hook can veto a `rm -rf` command, a PostToolUse hook can run a formatter after every file write, and a UserPromptSubmit hook can prepend global quality standards to every user message — actions that fire deterministically regardless of whether the model "remembers" to follow the corresponding instruction. This distinction between instructed behaviour and enforced behaviour is fundamental to harness engineering: any safety or quality requirement that must be met even when the model is distracted, misled, or operating under a long [[Context Window]] should be implemented as a hook, not as an instruction in CLAUDE.md.

    The ecosystem by mid-2026 encompasses packs ranging from individual developer workflow opinions (GSD's context-rot prevention disciplines, pmstack's product-manager role definitions) to enterprise-grade multi-harness systems (wshobson/agents, with 184 specialist agents across 78 plugins that target Claude Code, Codex CLI, Cursor, OpenCode, GitHub Copilot, and Gemini CLI simultaneously). Anthropic's formalisation of the SKILL.md specification as an open standard in December 2025 and its adoption into Claude Code 2.1.0 with hot-reload in January 2026 transformed harness configuration packs from a community-engineering practice into an officially supported extension mechanism — comparable to how VS Code extensions became the canonical mechanism for extending VS Code regardless of the underlying task. The SKILL.md specification is cross-agent by design: any agent that implements the SKILL.md discovery and loading protocol can consume skills written for Claude Code, meaning that the community's investment in skill authoring is not locked to a single vendor's runtime.

    The relationship between harness configuration packs and [[Agent Memory Layers]] deserves explicit treatment. Naive CLAUDE.md configurations assume a stateless session model where the agent begins each task from scratch; but sophisticated packs like Everything Claude Code include a memory architecture — typically a structured set of JSON or Markdown files written to a `.claude/memory/` directory — that accumulates architectural decisions, debugging history, naming conventions, and developer preferences across sessions. These memory files are read at session start as part of the CLAUDE.md bootstrap, making previously-learned context available to the current session without requiring the developer to re-explain the project's history. This session-memory pattern is the harness-layer analogue of [[Agent Memory Layers]] as modelled in frameworks like MemGPT (Packer et al., 2023), adapted to the filesystem-centric operational model of IDE and terminal coding agents rather than in-process vector store access.

  - ## Formal Description
    A harness configuration pack P can be described as a 6-tuple P = (I, S, C, H, M, R) where:
    - I is the session initialisation bundle: a set of CLAUDE.md files at hierarchy levels (user, workspace, project) merged at session start into the agent's operating context
    - S is the skill library: a set of SKILL.md files {s₁, s₂, ..., sₙ} each with metadata {name, description, allowed-tools, trigger} and a prompt-template body
    - C is the slash-command registry: a set of command files {c₁, ..., cₘ} under `.claude/commands/` each with a name and prompt-template body, explicitly invocable by `/name`
    - H is the hook set: a set of lifecycle handlers {h₁, ..., hₖ} registered in `settings.json` on events in {PreToolUse, PostToolUse, UserPromptSubmit, SessionStart, SessionEnd, Stop}
    - M is the [[Model Context Protocol]] server registry: a set of MCP server definitions {mcp₁, ..., mcpₗ} in `.mcp.json`, each with a name, transport type (stdio/SSE), and command or URL
    - R is the memory layer: an optional set of structured memory files {r₁, ..., rᵥ} read at session start to inject accumulated cross-session context

    The progressive disclosure protocol operates over S: at session start, the agent receives only {(nameᵢ, descriptionᵢ) : sᵢ ∈ S}, consuming O(|S|) tokens of metadata. When the agent identifies a skill as relevant (or the user invokes /command), the full SKILL.md body is loaded, consuming O(|body|) additional tokens. The hook execution model is outside the agent's [[Context Window]]: hooks are executable scripts invoked by the harness process, not by the model; their outputs may be injected into the next user message or used to gate tool execution, but they do not consume context budget during their execution.

  - ## Harness Engineering Disciplines
    The HumanLayer blog post "Skill Issue: Harness Engineering for Coding Agents" (2026) coined the term "harness engineering" and identified three disciplines:
    - **Session initialisation engineering**: Designing CLAUDE.md content to maximise signal-to-noise ratio at session start; the bootstrap must be dense enough to communicate project context and workflow expectations while leaving sufficient [[Context Window]] budget for the actual task conversation. The 1% rule (Superpowers: if there is even a 1% chance a skill applies, invoke it) represents the aggressive end of this spectrum; more conservative packs provide explicit invocation patterns.
    - **Skill authoring**: Writing SKILL.md bodies that are precise enough to guide the model through a complex multi-step workflow without becoming so verbose that loading the full body exhausts the context budget before the actual task conversation begins. Well-authored skills follow a pattern analogous to [[Chain-of-Thought]] prompting: they provide a worked example of the target workflow before stating the general instructions, exploiting the model's in-context learning capability.
    - **Hook engineering**: Identifying the subset of project quality requirements that must be enforced deterministically (rather than instructed probabilistically) and implementing them as PreToolUse, PostToolUse, or SessionEnd hooks. The set of enforced requirements grows over time as practitioners discover which classes of model errors are too costly or too frequent to rely on instruction-following to prevent.

  - ## Pack Composition and Conflicts
    Composing multiple harness configuration packs in a single installation introduces the risk of conflicts: two packs may define hooks that fire on the same event and interact destructively; two CLAUDE.md files may contain contradictory instructions; two skill libraries may define skills with identical names but different behaviours. Practitioners have developed the following composition principles:
    - **Layer by specificity**: User-level CLAUDE.md provides universal behavioural defaults (communication style, security rules); workspace-level CLAUDE.md provides environment context (available tools, team conventions); project-level CLAUDE.md provides task-specific instructions. Project overrides workspace overrides user — the specificity hierarchy resolves most CLAUDE.md conflicts.
    - **Hook composition**: Multiple hooks on the same event are executed sequentially in registration order; packs should document their hook event registrations and expected interaction semantics. The `/harness-audit` slash command (available in Claude Code) evaluates the current harness configuration and flags hooks that may conflict.
    - **Skill namespace isolation**: Each pack should prefix its skill names with a pack identifier (e.g., `gstack/plan-review`, `ecc/security-review`) to prevent name collisions in multi-pack installations. The wshobson/agents marketplace enforces this convention through its 78-plugin directory structure.
    - **Minimal base configuration**: DEV Community practitioners recommend starting with the minimal CLAUDE.md that encodes only genuinely project-specific constraints, then adding pack components incrementally and verifying behaviour at each step, rather than installing a full marketplace pack and debugging interactions afterward.
    - **Context budget accounting**: The total token overhead at session start — CLAUDE.md content + skill metadata for all installed skills — should be estimated before installation and compared against the target model's context budget. A pack that installs 100 skills at 100 tokens of metadata each adds 10,000 tokens of fixed overhead to every session, which is significant for smaller context models.

  - ## Components / Architecture
    - **CLAUDE.md (Session Initialisation File)**: The primary configuration entrypoint. Read automatically at conversation start; encodes project rules, tool permissions, custom slash-command definitions, MCP server registrations, skill-discovery pointers, and behavioural constraints in structured Markdown. Hierarchical: user-level `~/.claude/CLAUDE.md`, workspace-level `CLAUDE.md`, and project-level `project/CLAUDE.md` are merged with project-level taking precedence.
    - **SKILL.md (Skill Body)**: A Markdown file defining a single skill — frontmatter with `name`, `description`, `allowed-tools`, `default-model`, and optionally `trigger` patterns; body is the prompt template activated when the skill is invoked. Standardised by Anthropic's Agent Skills specification (December 2025); hot-reloaded without session restart since Claude Code 2.1.0 (January 2026).
    - **Slash Command Library**: User-defined commands under `.claude/commands/<name>.md` (project-level) or `~/.claude/commands/<name>.md` (user-level). The Markdown body is the prompt template; YAML frontmatter sets description, allowed tools, and default model. Commands are explicit — typed by the user — in contrast to skills, which are implicit — invoked by the agent's intent-matching.
    - **Hook Definitions**: Structured event handlers registered in `settings.json` that fire on harness lifecycle events: `PreToolUse`, `PostToolUse`, `UserPromptSubmit`, `SessionStart`, `SessionEnd`, `Stop`. Hooks execute deterministically outside the model's context and are the enforcement layer for safety, style, and observability requirements.
    - **MCP Server Registry**: A JSON registry (`.mcp.json` or `settings.json` MCP section) listing named MCP servers — local processes or remote endpoints — that the agent can discover as callable tools. Harness packs use this to ship pre-configured integrations with Git, CI systems, vector databases, and internal APIs.
    - **Subagent Definitions** (wshobson/agents, Everything Claude Code): Named agent role specifications that can be spawned as sub-processes with a specialised system prompt, restricted tool set, and task scope. Multi-agent orchestrators coordinate subagents through shared message queues or filesystem-based handoff protocols.
    - **Instinct Rules** (Everything Claude Code): A class of autonomic decision rules embedded in CLAUDE.md that fire without explicit user invocation — for example, running the security reviewer automatically on every file-write tool call. Instincts implement [[ReAct Pattern]] micro-cycles at the harness level without requiring the model to reason about when to apply them.
    - **Memory Layer** (Everything Claude Code, pmstack): Persistent structured memory files (typically JSON or Markdown under `.claude/memory/`) that accumulate developer preferences, architectural decisions, and past debugging outcomes across sessions, reducing per-session re-orientation overhead for long-running projects.

  - ## Use Cases / Major Families
    - **Role-Based Virtual Team (GStack)**: Garry Tan's MIT-licensed pack (50K GitHub stars in 16 days, 100K+ stars by mid-2026) encodes 23 specialist roles — CEO product reviewer, engineering manager, release manager, QA tester, documentation engineer — as SKILL.md files, each instantiating a different reasoning persona via system-prompt injection. A single developer commands a virtual team through slash commands: `/plan-review` triggers the CEO-mode strategic review; `/ship` triggers the release manager's one-command shipping workflow.
    - **Context-Rot Prevention (GSD — Get-Shit-Done)**: Created by Lex Christopherson in December 2025, GSD addresses the quality degradation that occurs as long coding sessions fill the [[Context Window]] with stale content. The pack installs session hygiene rituals (periodic context audits, structured handoff files, task-completion checkpoints) and instructs the agent to emit structured state dumps at regular intervals, enabling clean session restarts without losing progress.
    - **Performance Optimisation and Security (Everything Claude Code)**: Affaan Mustafa's pack (~100K GitHub stars, winner of the Anthropic x Forum Ventures hackathon, September 2025) provides 28 subagents (code-reviewer, security-reviewer, tdd-guide, performance-analyser, etc.), an instinct system, and a memory architecture for multi-session projects. The security-reviewer subagent applies OWASP Top 10 checks on every relevant file write; the tdd-guide enforces test-driven development discipline.
    - **Meta-Prompting Framework (Superpowers)**: The `obra/superpowers` pack implements the 1% rule — if there is even a 1% chance a skill might apply, invoke it — through a session-start hook that injects the bootstrap meta-skill, after which Claude continuously pattern-matches user intent against the skill library. Superpowers ships skills for writing new skills (`writing-skills`), using the framework (`using-superpowers`), and a growing catalogue of domain skills contributed by community members.
    - **Multi-Harness Marketplace (wshobson/agents)**: With 184 specialist agents, 16 multi-agent orchestrators, 150 skills, and 98 commands across 78 plugins, wshobson/agents targets polyglot shops that run multiple agent runtimes (Claude Code, Cursor, Codex CLI, OpenCode, Gemini CLI). Each plugin is a self-contained directory installable independently, enabling developers to compose their own harness stack without installing the full marketplace.
    - **Anthropic Official Skills (anthropics/skills)**: The official Anthropic skills repository ships pre-built Agent Skills for document tasks (PowerPoint, Excel, Word, PDF), SRE/DevOps workflows, and code-generation patterns. The repository also serves as the canonical reference implementation of the SKILL.md specification, defining the format that third-party pack authors target for cross-agent compatibility.
    - **PM and Product Stack (pmstack)**: A product-manager-oriented configuration pack that installs a structured product-requirements workflow, acceptance-criteria templates, and stakeholder-communication skills, enabling engineers to run product-discovery conversations through the coding agent interface and generate structured PRDs and user-story backlogs.

  - ## Security Implications of Harness Configuration Packs
    Harness configuration packs that include hook-based enforcement provide a significant security advantage over unaugmented coding agents, but they also introduce new risk surfaces. CLAUDE.md files are read into the [[Large Language Model]]'s context and therefore susceptible to indirect prompt injection: a maliciously crafted repository file that the agent reads as context could instruct the model to ignore or override rules stated in CLAUDE.md. Hooks, being executed outside the model's context by the harness process, are not susceptible to this attack — they enforce their constraints regardless of what the model "believes" it has been instructed to do. The security implication is that safety-critical constraints (no credential exfiltration, no command injection, no push to production without multi-party approval) must be implemented as hooks rather than CLAUDE.md instructions.

    Everything Claude Code's security-reviewer instinct provides a practitioner blueprint: it fires automatically on every file-write tool call and analyses the written content against OWASP Top 10 patterns (SQL injection, cross-site scripting, insecure deserialisation, hard-coded credentials, etc.) before the write is committed to disk. This is structurally analogous to a lint-on-save workflow, but operating at semantic rather than syntactic level and invoked by the harness hook rather than by the developer's editor configuration. For UK organisations subject to Cyber Essentials, ISO 27001, or NCSC Supply Chain Security guidance, this pattern provides a documented, auditable control point for AI-generated code security that can be cited in certification evidence.

    Harness packs that register [[Model Context Protocol]] servers also expand the attack surface: a compromised MCP server that injects malicious tool results into the agent's context could steer the agent's subsequent actions. Pack authors should document MCP server trust levels and practitioners should apply the principle of least privilege — an MCP server that provides read-only database query access should not also have write access, even if the underlying database supports it. The Paradime harness engineering guide (2026) provides a permissions matrix template for MCP server trust configuration that has been adopted as a best-practice reference in the practitioner community.

  - ## Academic Context
    Harness configuration packs as a formal category have limited dedicated academic literature, having emerged primarily from engineering practice. The closest academic antecedents are meta-prompting (Reynolds & McDonell, 2021; Suzgun & Kalai, 2024), which studied prompt templates that instruct models how to decompose and approach tasks; and [[Chain-of-Thought]] prompting (Wei et al., 2022), which established that structured reasoning traces in the prompt improve model performance on complex tasks. The systematic application of these techniques at harness-configuration level — rather than single-prompt level — represents an engineering contribution that predates formal academic study of the phenomenon. Suzgun and Kalai (2024)'s meta-prompting framework is the closest academic predecessor to skill-library design: like SKILL.md skills, meta-prompts instruct the model about when and how to engage specific reasoning strategies, rather than providing the strategy directly in the system prompt.

    Paradime's guide to Claude Code skills and harness engineering (2026) is among the first systematic practitioner treatments of the design space, providing a structured analysis of CLAUDE.md, SKILL.md, hooks, and MCP server configuration as a unified four-layer system. The HumanLayer blog post "Skill Issue: Harness Engineering for Coding Agents" (2026) coined the term "harness engineering" as a distinct discipline, drawing an analogy to DevOps engineering: just as DevOps abstracted the operational concerns of software deployment into a distinct engineering practice, harness engineering abstracts the configurational concerns of coding agent behaviour. Anthropic's research on how AI assistance impacts coding-skill formation (2026, drawing on ~400,000 Claude Code sessions from ~235,000 users between October 2025 and April 2026) provides the first large-scale empirical data on how configuration-layer interventions affect developer learning and productivity, finding that domain expertise (not coding background) is the primary predictor of effective AI-assisted development — a result consistent with the hypothesis that harness configuration packs' most important role is to compensate for the mechanical-coding-skill component rather than the domain-knowledge component.

    The Claw-SWE-Bench benchmark (arxiv:2606.12344, 2026) implicitly evaluates harness adapter quality by demonstrating that the same backbone model (GLM 5.1) scores 19.1% with a minimal adapter and 73.4% with a full adapter on 350 multilingual issue-resolution instances, quantifying the performance contribution of harness configuration independent of model capability. This result — a 3.8x performance ratio attributable to adapter and harness design rather than model capability — is the strongest empirical evidence to date for the claim that harness engineering is as important as model selection for practical coding-agent performance. The TDAD paper (arxiv:2603.17973, 2026) formalises test-driven agentic development as a workflow discipline, providing a graph-based impact analysis framework that quantifies regression risk from agent-generated patches — a pattern that sophisticated harness packs now encode as default workflow discipline.

    The [[Retrieval-Augmented Generation]] literature (Lewis et al., 2020 and subsequent work) provides the theoretical basis for harness packs that include semantic memory layers: by pre-populating the [[Context Window]] with retrieved architectural context at session start, memory-augmented harness packs enable the agent to reason about project history without requiring the developer to re-explain it. The MCP-connected vector database pattern (agent retrieves relevant code snippets from a vector search index via MCP tool call before beginning file edits) is the harness-engineering realisation of RAG within the coding-agent domain.

  - ## Historical Timeline
    - **2024 H2**: Early CLAUDE.md configurations circulate in the Claude Code community; developers share project-specific configuration files on GitHub and forums. The concept is rudimentary: a single markdown file with project context and a few conventions.
    - **2025 Q1–Q2**: obra/superpowers releases the first formally structured skill pack, introducing the progressive-disclosure architecture and the 1% invocation rule. The term "skill" for a loadable prompt template gains traction.
    - **2025 Q3**: Lex Christopherson releases GSD (Get-Shit-Done) targeting context-rot prevention; GStack (Garry Tan) releases and achieves 50K GitHub stars in 16 days. Everything Claude Code (Affaan Mustafa) wins the Anthropic x Forum Ventures hackathon at Cerebral Valley in September 2025 with a performance-optimisation harness architecture including instincts and memory layers.
    - **2025 Q4**: Anthropic releases the Agent Skills open standard (December 2025), defining SKILL.md as a portable, agent-agnostic format. wshobson/agents marketplace achieves 17,647 stars with its 78-plugin multi-harness architecture. hesreallyhim/awesome-claude-code curated directory launches to aggregate the growing ecosystem.
    - **2026 Q1**: Claude Code 2.1.0 adds SKILL.md hot-reload (January 2026), eliminating the stop-restart iteration cycle. Everything Claude Code approaches 100K GitHub stars. The term "harness engineering" is coined by HumanLayer.
    - **2026 Q2**: Paradime publishes the first systematic practitioner guide to harness engineering. wshobson/agents extends to support Codex CLI, Cursor, OpenCode, GitHub Copilot, and Gemini CLI — the first explicitly multi-harness pack marketplace. Enterprise adoption confirmed at TELUS, Bridgewater, Zapier.

  - ## Current Landscape (2026)
    By mid-2026 the harness configuration pack ecosystem has matured from individual developer experiments to a structured marketplace with thousands of packs across multiple distribution channels. GStack surpassed 100,000 GitHub stars, Everything Claude Code approached the same milestone, and the Anthropic Agent Skills open standard provided the formal specification layer that enabled cross-agent portability. The three dominant design philosophies have become clear: enforcement-first (Everything Claude Code's instinct and memory system, GSD's context-rot disciplines), role-based governance (GStack's specialist-persona approach), and breadth-first marketplace (wshobson/agents' plugin catalogue).

    The hot-reload capability introduced in Claude Code 2.1.0 (January 2026) eliminated the stop-restart friction that previously slowed skill development, accelerating the iteration cycle for pack authors from minutes-per-iteration to seconds-per-iteration. This acceleration has had a measurable effect on the ecosystem's growth: the number of publicly available Claude Code skills on GitHub increased by approximately 5x between December 2025 and June 2026, reflecting both the hot-reload productivity boost and the community momentum generated by GStack, Everything Claude Code, and the awesome-claude-code curated directory.

    Enterprise adoption is confirmed at TELUS, Bridgewater, and Zapier (Anthropic 2026), with organisation-wide skill management and partner skills directories available under Team and Enterprise Claude plans. Out-of-the-box integrations with Notion, Canva, Figma, and Atlassian — delivered as [[Model Context Protocol]] servers registered in the organisation's skill pack — remove the last friction for cross-tool workflow automation. The Paradime and HumanLayer practitioner guides (2026) have established harness engineering as a recognised job-function dimension for senior AI engineers, comparable to DevOps engineering's relationship to software deployment; senior engineers at growth-stage startups are increasingly expected to maintain the team's harness configuration as a first-class engineering deliverable alongside the product codebase.

    The competitive dynamics of the ecosystem in mid-2026 show three tiers: Anthropic's official skills (anthropics/skills) as the canonical reference; community powerhouses (GStack, Everything Claude Code, wshobson/agents) as the go-to packs for broad workflows; and the long tail of specialised domain packs (pmstack for product management, SRE/DevOps skills from yisusvii, security-focused packs from various authors). The tier structure mirrors the VS Code extension marketplace's evolution, suggesting that the harness configuration pack ecosystem is following a familiar open-source marketplace maturation trajectory.

  - ## UK Context
    UK adoption of harness configuration packs follows the broader [[IDE Coding Agents]] adoption curve tracked by the Alan Turing Institute — University of Edinburgh collaboration and the AHRC-UKRI "Doing AI Differently" initiative. The UK's strong open-source engineering communities at Edinburgh, Cambridge, UCL, and Manchester contribute to the wshobson/agents and Everything Claude Code repositories; Edinburgh's Informatics department has contributed research on harness configuration evaluation methodology, and UCL's HCI group has studied the cognitive overhead of skill invocation decision-making. The DSIT guidance on AI in software supply chains (2025) and ICO guidance on AI-generated code provenance have specific implications for harness configuration packs in regulated sectors: hook-based enforcement of audit logging, structured session transcripts, and OWASP-aligned security review subagents (as in Everything Claude Code) directly address supply-chain transparency requirements that appear in both DSIT guidance and NCSC Supply Chain Security guidance.

    Northern English industrial context is directly relevant: Sheffield's advanced manufacturing software companies are deploying GStack's engineering-manager and QA-automation roles for governance-compliant AI-assisted development in safety-critical contexts; Leeds' fintech cluster uses Everything Claude Code's security-reviewer instinct as part of their secure development lifecycle; Newcastle's growing digital sector has adopted wshobson/agents as a standard engineering environment for startups that want multi-specialist capability from day one without the cost of hiring a full engineering team. The Northern Powerhouse Investment Fund's focus on digital productivity has created regional incentives for SME adoption of coding agent tooling, with harness configuration packs acting as the low-friction entry point because they require no new software installations — only configuration files added to an existing Claude Code or Cline setup.

    The Alan Turing Institute's partnership network includes firms piloting harness-configured coding agents for public-sector software procurement, where the traceable approval gates and structured session transcripts required by Government Security Classification (GSC) procurement frameworks align with harness configuration pack capabilities. Crown Commercial Service supplier guidance on AI tools in software development (expected 2026-2027) is anticipated to reference audit-trail requirements that existing harness pack transcript formats can satisfy, creating policy alignment between community engineering practice and UK government AI procurement standards.

  - ## Future Directions (2026-2030)
    - **Cross-agent harness portability**: Full implementation of the SKILL.md open standard across all major coding agents (Cursor, GitHub Copilot, Gemini CLI, Codex CLI) will enable single skill packs to operate across the entire ecosystem without per-agent adaptation. The wshobson/agents marketplace's multi-harness architecture is the practical precursor; the SKILL.md specification provides the formal foundation. Full portability requires agreement on hook event semantics across runtimes — the most technically challenging remaining gap.
    - **Dynamic skill composition**: Rather than loading static skill libraries, future harness packs will assemble composite skills dynamically from atomic skill primitives based on task analysis, reducing [[Context Window]] overhead further. Dynamic composition would allow a pack to combine a "repository-exploration" primitive, a "security-check" primitive, and a "test-generation" primitive into a single composite skill appropriate for the current task type, loading only the relevant combination into context.
    - **Harness evaluation benchmarks**: An extension of Claw-SWE-Bench to measure harness-pack quality directly — how much does Pack A improve an agent's SWE-bench Verified score over the bare agent? — will provide the first rigorous empirical basis for comparing packs. The 3.8x performance ratio (19.1% to 73.4%) demonstrated in Claw-SWE-Bench (arxiv:2606.12344) motivates this benchmark extension; a standardised harness evaluation protocol would enable pack authors to quantify and advertise the empirical improvement their pack provides.
    - **Organisational harness registries**: Enterprise SKILL.md registries hosted on internal artifact servers, versioned with semantic versioning, and audited through supply-chain security tooling (SBOM-style manifests for harness packs). These registries would enable security teams to review and approve skills before deployment, apply patch management workflows to skill updates, and maintain an approved bill-of-materials for all installed harness components — directly analogous to existing software composition analysis (SCA) tools for open-source dependencies.
    - **LLM-generated harness evolution**: Agents that analyse their own session transcripts to identify workflow inefficiencies and propose CLAUDE.md or SKILL.md modifications — a self-improving harness loop. Early experiments in this direction are already reported in the Everything Claude Code community, where the agent's memory layer records patterns of task-type failures that are subsequently addressed through CLAUDE.md instruction updates.
    - **Formal specification languages**: Domain-specific languages (DSLs) for harness configuration that compile to CLAUDE.md + SKILL.md bundles, providing type-safety, linting, and IDE support for pack authors. A harness DSL would enable static analysis of hook ordering conflicts, skill name collisions, and [[Context Window]] budget exhaustion before deployment — addressing the composition problem described above at the tooling level rather than requiring practitioner discipline.
    - **Hardware-level instincts**: Harness instincts enforced at the inference server level (not just CLAUDE.md instructions) through model-level steering vectors or inference-time intervention, making safety constraints runtime-verifiable rather than prompt-contingent. This direction intersects with mechanistic interpretability research and activation-steering work; practical implementation requires co-design between harness pack authors and model providers at a level of integration not yet established.
    - **[[Retrieval-Augmented Generation]] integration**: Harness packs that include semantic search over the project's full history — code, issues, PRs, architecture documents — via [[Model Context Protocol]] vector-search servers, enabling the agent to retrieve relevant historical context on-demand rather than relying on manually curated memory files. The RAG-over-codebase pattern is technically feasible with existing MCP tooling in 2026; the harness configuration engineering needed to tune retrieval quality, chunking strategy, and context budget allocation for different project types represents the main open problem.

  - ## Key Terminology
    - **Harness configuration pack**: A versioned, distributable bundle of CLAUDE.md configuration, SKILL.md files, slash commands, hook definitions, and MCP server registrations that augments an existing coding agent's behaviour without modifying the agent runtime.
    - **SKILL.md**: The Anthropic Agent Skills specification format; a Markdown file with YAML frontmatter defining a single reusable skill that any conforming agent can discover and load. Standardised December 2025; hot-reloadable since Claude Code 2.1.0 (January 2026).
    - **CLAUDE.md**: Session initialisation file read at conversation start; encodes rules, tool permissions, skill pointers, MCP registrations, and slash-command definitions. Hierarchical: user-level overridden by workspace, overridden by project.
    - **Slash command**: A named shortcut prefixed with `/` that either invokes agent harness state (`/model`, `/permissions`) or triggers a saved SKILL.md prompt template. Explicit — requires user invocation.
    - **Skill**: A named, loadable configuration unit with progressive disclosure; loaded passively (description only) at session start and fully on intent-match or explicit invocation. Implicit — agent decides when to load based on task context.
    - **Instinct**: An autonomic decision rule (Everything Claude Code concept) embedded in CLAUDE.md that fires without explicit user instruction, implementing sub-[[ReAct Pattern]] micro-cycles at the harness level.
    - **Hook**: A lifecycle event handler registered in `settings.json` that executes deterministically outside the model's context; the enforcement layer for harness constraints that instruction-following alone cannot guarantee.
    - **Progressive disclosure**: The two-tier skill architecture in which only skill metadata is loaded at session start and full skill bodies are loaded on demand, preserving [[Context Window]] budget.
    - **Context rot**: Quality degradation in long coding-agent sessions caused by accumulation of stale, irrelevant, or contradictory content in the [[Context Window]]; GSD (Get-Shit-Done) is specifically designed to prevent this.
    - **Harness engineering**: The discipline of configuring, composing, and maintaining harness configuration packs to achieve reliable, auditable, and efficient coding-agent behaviour; recognised as a distinct engineering competency by mid-2026.
    - **MCP server registry**: The configuration block (`.mcp.json`) listing [[Model Context Protocol]] servers available as tools to the agent; harness packs use this to ship pre-configured integrations with external systems.

  - ## Research & Literature
    1. Anthropic (2025). "Agent Skills — Claude API Docs." https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
    2. Anthropic (2025). "Anthropic/skills — Public repository for Agent Skills." https://github.com/anthropics/skills
    3. Anthropic (2026). "Extend Claude with skills — Claude Code Docs." https://code.claude.com/docs/en/skills
    4. Anthropic (2026). "How AI assistance impacts the formation of coding skills." https://www.anthropic.com/research/AI-assistance-coding-skills
    5. Tan, G. (2025). "GStack — Use Garry Tan's exact Claude Code setup." https://github.com/garrytan/gstack
    6. GStacks.org (2026). "GStack — Turn Claude Code into a Virtual Software Development Team." https://gstacks.org/
    7. Mustafa, A. (2025). "Everything Claude Code (ECC) — Agent harness performance optimisation." https://github.com/affaan-m/everything-claude-code
    8. wshobson (2025). "wshobson/agents — Multi-harness agentic plugin marketplace." https://github.com/wshobson/agents
    9. obra (2025). "obra/superpowers — Claude Code slash commands and hooks." https://deepwiki.com/obra/superpowers/5.1-claude-code:-slash-commands-and-hooks
    10. Pulumi Blog (2026). "Superpowers, GSD, and GSTACK: Picking the Right Framework for Your Coding Agent." https://www.pulumi.com/blog/claude-code-orchestration-frameworks/
    11. Medium / Ewan Mak (2026). "Superpowers, GSD, and gstack: What Each Claude Code Framework Actually Constrains." https://medium.com/@tentenco/superpowers-gsd-and-gstack-what-each-claude-code-framework-actually-constrains-12a1560960ad
    12. TechTimes (2026). "AI Coding's Discipline Turn: Three Open-Source Frameworks Superpowers, gstack, GSD Outpace Model Upgrades." https://www.techtimes.com/articles/316927/20260521/ai-codings-discipline-turn-three-open-source-frameworks-superpowers-gstack-gsd-outpace-model.htm
    13. MindStudio (2026). "What Is GStack? Gary Tan's Open-Source Startup Framework for Claude Code." https://www.mindstudio.ai/blog/what-is-gstack-gary-tan-claude-code-framework
    14. Augment Code (2026). "Garry Tan open-sources gstack: what developers should know." https://www.augmentcode.com/learn/garry-tan-gstack-claude-code
    15. Paradime (2026). "Claude Code Skills & Harness Engineering: Complete Guide to Rules, Plugins & MCP Servers." https://www.paradime.io/guides/claude-code-skills-plugins-rules-guide
    16. HumanLayer Blog (2026). "Skill Issue: Harness Engineering for Coding Agents." https://www.humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents
    17. DEV Community / arshtechpro (2026). "Harness: Turn a One-Line Prompt Into a Full Agent Team for Claude Code." https://dev.to/arshtechpro/harness-turn-a-one-line-prompt-into-a-full-agent-team-for-claude-code-5eog
    18. Bridgers Agency (2026). "Everything Claude Code Is Approaching 100K GitHub Stars." https://bridgers.agency/en/blog/everything-claude-code-explained
    19. hesreallyhim (2025–2026). "awesome-claude-code — Curated list of skills, hooks, slash-commands, orchestrators." https://github.com/hesreallyhim/awesome-claude-code
    20. DEV Community / Imaginex (2026). "A Claude Code Skills Stack: How to Combine Superpowers, gstack, and GSD Without the Chaos." https://dev.to/imaginex/a-claude-code-skills-stack-how-to-combine-superpowers-gstack-and-gsd-without-the-chaos-44b3
    21. Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. https://arxiv.org/abs/2201.11903
    22. Suzgun, M. & Kalai, A. (2024). "Meta-Prompting: Enhancing Language Models with Task-Agnostic Scaffolding." arXiv:2401.12954. https://arxiv.org/abs/2401.12954
    23. [Claw-SWE-Bench Authors] (2026). "Claw-SWE-Bench: A Benchmark for Evaluating OpenClaw-style Agent Harnesses on Coding Tasks." arXiv:2606.12344. https://arxiv.org/abs/2606.12344
    24. Dabi, N. et al. (2026). "Agentic Much? Adoption of Coding Agents on GitHub." arXiv:2601.18341. https://arxiv.org/abs/2601.18341
    25. Alan Turing Institute (2024). "Doing AI Differently." https://www.turing.ac.uk/news/publications/doing-ai-differently
    26. New Stack (2025). "Agent Skills: Anthropic's Next Bid to Define AI Standards." https://thenewstack.io/agent-skills-anthropics-next-bid-to-define-ai-standards/
    27. VentureBeat (2025). "Anthropic launches enterprise 'Agent Skills' and opens the standard." https://venturebeat.com/technology/anthropic-launches-enterprise-agent-skills-and-opens-the-standard
    28. Blake Crosley (2026). "Claude Code CLI: The Complete Guide — Hooks, MCP, Skills." https://blakecrosley.com/guides/claude-code

- ### Provenance
  - sources:: https://github.com/garrytan/gstack, https://github.com/affaan-m/everything-claude-code, https://github.com/wshobson/agents, https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview, https://arxiv.org/abs/2606.12344, https://arxiv.org/abs/2601.18341, https://www.pulumi.com/blog/claude-code-orchestration-frameworks/, https://www.humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents, https://venturebeat.com/technology/anthropic-launches-enterprise-agent-skills-and-opens-the-standard, https://thenewstack.io/agent-skills-anthropics-next-bid-to-define-ai-standards/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm