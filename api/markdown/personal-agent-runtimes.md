- ### Definition
  - A Personal Agent Runtime is a category of [[Agent Harness]] infrastructure characterised by persistent, always-on daemon processes that run continuously on behalf of a single user or household, providing a persistent [[AI Agent System]] capable of autonomous action across [[Natural Language Processing]] interfaces, [[Browser Automation]] pipelines, file systems, [[Code Execution]] environments, and third-party APIs — representing a fundamentally different execution model from stateless chatbot sessions by maintaining long-lived [[Event Loop]] architectures, cross-session [[Agent Memory Layers]], and a persistent [[Agent Identity]] that accumulates knowledge and capability over time. These runtimes typically bundle a configurable [[Large Language Model]] backend (supporting both cloud-hosted models such as GPT-4o, Claude, and Gemini, and locally-running [[Local Language Model]] instances via Ollama, llama.cpp, or similar inference servers), a [[Vector Database]]-backed [[Retrieval-Augmented Generation]] memory layer that indexes the user's personal documents, email, notes, and web history for contextual recall, a [[Tool Use]] subsystem exposing shell commands, web search, calendar access, and file I/O, and a [[Permission Governance]] mechanism that gates destructive or irreversible actions behind human approval. Representative implementations include Khoj (Python, self-hostable personal AI second brain), ElizaOS (TypeScript, social media and Web3 agent operating system), Agent Zero (Docker-sandboxed full-computer-use agent), AIlice (IACT-architecture fully autonomous general agent), and OpenHarness (research-grade transparent harness with 43+ built-in tools). Personal Agent Runtimes are distinguished from [[Multi-Agent Orchestration Frameworks]] by their single-user, long-lived, always-on orientation; they often delegate specialised subtasks to ephemeral sub-agents via [[Agent Orchestrator]] coordination patterns, and they contrast with [[Terminal Coding Agents]] such as Claude Code or Cursor which are task-scoped and session-bounded rather than continuously operating. As [[Agentic AI]] deployment matures through 2025–2026, personal runtimes are converging on the [[Model Context Protocol]] as the standard integration layer and adopting [[Agent Execution Sandboxes]] for safe code and process execution, making them foundational units of individual [[AI Infrastructure]] in the emerging personal computing paradigm.

- ### Semantic Classification
  - owl-class:: ai:PersonalAgentRuntimes
  - owl-role:: AgentRuntime | AutonomousSystem | PersonalComputing
  - owl-inferred:: ai:AgentHarness, ai:PersistentDaemon, ai:SelfHostedSystem, ai:PrivacyPreservingAI
  - belongs-to-domain:: [[AI-GroundedDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[AgentLayer]]

- ### Relationships
  - is-subclass-of:: [[Agent Harness]], [[Agent Frameworks]], [[AI Agent System]], [[Agent Runtime]]
  - has-part:: [[Agent Memory Layers]], [[Event Loop]], [[Permission Governance]], [[Tool Use]], [[Agent Identity]], [[Knowledge Base]], [[Agent Event Stream]]
  - implements:: [[Retrieval-Augmented Generation]], [[Model Context Protocol]], [[Agentic AI]], [[Autonomous Operation]]
  - uses:: [[Large Language Model]], [[Local Language Model]], [[Vector Database]], [[LLM Inference]], [[Docker Container]], [[Browser Automation]], [[Code Execution]]
  - enables:: [[Autonomous Operation]], [[Self-Improvement]], [[Privacy-Preserving AI]], [[Multi-Agent Coordination]], [[Agent Orchestrator]]
  - supports:: [[Natural Language Processing]], [[Agent Evaluation Benchmarks]], [[Progressive Disclosure Harnesses]], [[Terminal Coding Agents]]
  - requires:: [[Large Language Model]], [[Vector Database]], [[Agent Execution Sandboxes]], [[Permission Governance]], [[Event Loop]]
  - depends-on:: [[Agent Memory Layers]], [[Tool Use]], [[LLM Inference]], [[Agent Event Stream]]
  - contrasts-with:: [[Terminal Coding Agents]], [[Multi-Agent Orchestration Frameworks]], [[Internal AI Harness]], [[External AI Harness]]
  - related-to:: [[Agent Development SDKs]], [[Agent Orchestrator]], [[Multi-Agent Orchestration Frameworks]], [[Progressive Disclosure Harnesses]], [[AI Infrastructure]]
  - standardized-by:: [[Model Context Protocol]]

- ### Content

  ## Compositional Relationships (Components)
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:hasPart ai:AgentMemoryLayers))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:hasPart ai:EventLoop))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:hasPart ai:PermissionGovernance))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:hasPart ai:ToolUse))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:hasPart ai:AgentIdentity))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:hasPart ai:KnowledgeBase))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:hasPart ai:AgentEventStream))

  ## Dependency Relationships
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:requires ai:VectorDatabase))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:requires ai:AgentExecutionSandboxes))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:dependsOn ai:AgentMemoryLayers))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:dependsOn ai:ToolUse))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:dependsOn ai:LLMInference))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:dependsOn ai:AgentEventStream))

  ## Capability Relationships
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:enables ai:AutonomousOperation))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:enables ai:SelfImprovement))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:enables ai:PrivacyPreservingAI))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:enables ai:MultiAgentCoordination))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:supports ai:NaturalLanguageProcessing))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:supports ai:AgentEvaluationBenchmarks))

  ## Implementation Relationships
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:implements ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:implements ai:ModelContextProtocol))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:implements ai:AgenticAI))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:uses ai:LargeLanguageModel))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:uses ai:VectorDatabase))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:uses ai:DockerContainer))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:uses ai:BrowserAutomation))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:uses ai:CodeExecution))

  ## Reduction Relationships
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:reducesTo ai:AgentHarness))
      SubClassOf(ai:PersonalAgentRuntimes
        ObjectSomeValuesFrom(ai:reducesTo ai:AIAgentSystem))

  ## About
  **Personal Agent Runtimes** represent the convergence of [[Large Language Model]] capabilities, [[Retrieval-Augmented Generation]] memory architectures, and [[Agentic AI]] orchestration patterns into systems designed for continuous, autonomous operation on behalf of an individual user. Where conventional AI assistants are stateless — each conversation begins fresh from the model's training weights — personal runtimes maintain persistent state across sessions: they remember what you told them last week, they have already read all your Obsidian notes and email archives, they are monitoring your calendar, and they can take autonomous action in the background without requiring your active participation in a chat session. This always-on orientation distinguishes the category sharply from task-bounded [[Terminal Coding Agents]] such as Claude Code or GitHub Copilot Workspace, which are designed for discrete, supervised coding tasks rather than continuous life management.

  The conceptual lineage of personal agent runtimes traces to two traditions. The first is the personal information management (PIM) tradition: systems like Memex (Vannevar Bush, 1945), Knowledge Navigator (Apple, 1987), and Microsoft's MyLifeBits project (Bell and Gemmell, 2007) envisioned a persistent computational system that accumulates and retrieves everything its user knows. The second is the autonomous software agent tradition from multi-agent systems research (Wooldridge and Jennings, 1995), which formalised the architecture of reactive agents operating within [[Event Loop]] perception-action cycles. Personal runtimes fuse both traditions: they accumulate personal knowledge via [[Vector Database]] indexing of documents, email, and browser history, and they act autonomously via [[Tool Use]] subsystems that can invoke shell commands, browser sessions, APIs, and sub-agents. The arrival of GPT-4 class [[Large Language Model]] quality in 2023 made these systems viable for general users, catalysing a wave of open-source personal runtime projects through 2024–2025.

  The [[Agent Harness]] architecture of a personal runtime divides responsibility between the model and the harness in a principled way: the [[Large Language Model]] provides language understanding, instruction following, and general reasoning; the harness provides persistence, tool routing, [[Permission Governance]], loop management, and failure recovery. This division means personal runtimes are model-agnostic — Khoj, for instance, supports GPT-4o, Claude 3.x, Gemini 1.5 Pro, and local Ollama instances interchangeably. The [[Model Context Protocol]] (MCP), donated to the Agentic AI Foundation in December 2025 and endorsed by Anthropic, OpenAI, Google DeepMind, Microsoft, and AWS, has emerged as the standard integration layer for connecting personal runtimes to external tools and data sources, replacing the prior era of framework-specific plugin systems with a universal server-client protocol that any MCP-compliant runtime can consume.

  ## Components and Architecture

  **Persistent Event Loop**
  - The core runtime loop polls for user messages, scheduled tasks, webhook triggers, and background monitoring jobs; it dispatches each event to the LLM inference layer, processes tool-call responses, and records outcomes to the [[Agent Memory Layers]] store before returning control to the loop. Unlike a request-response web server, the personal runtime maintains in-flight state across multiple tool invocations within a single task turn.
  - Concurrency models vary: Khoj uses Python asyncio with task queues; ElizaOS uses a Node.js event-driven runtime with World/Room context isolation; Agent Zero uses Docker-sandboxed sub-process execution; AIlice uses a hierarchical IACT (Interactive Agents Call Tree) for recursive agent spawning.

  **Memory Architecture**
  - **Working memory**: the LLM context window, populated by the harness with retrieved document chunks, recent conversation history, and injected tool results. Context management is the most critical harness responsibility: models with 128k–1M token windows still benefit from intelligent retrieval to keep costs and latency acceptable.
  - **Episodic memory**: a [[Vector Database]] (typically ChromaDB, Qdrant, or pgvector) storing embedding-indexed chunks of the user's documents, conversations, and agent outputs. On each query, the harness performs ANN (approximate nearest neighbour) retrieval to inject the most relevant context snippets into the working memory window — the [[Retrieval-Augmented Generation]] pattern.
  - **Semantic / [[Knowledge Base]] memory**: structured facts extracted from conversations and documents, stored in a graph or relational layer for precise lookup (dates, names, preferences, recurring commitments).
  - **Procedural memory**: learned tool sequences and task routines. Agent Zero and AIlice support storing successful tool sequences as reusable procedures; OpenHarness uses MEMORY.md files as human-readable persistent state.

  **Tool Use Subsystem**
  - Core tools common to all runtimes: web search (Tavily, SearXNG, or native browser), file I/O (read/write local files and cloud storage), calendar/email access, code execution (Python REPL, Bash shell), and API calling via HTTP requests.
  - [[Browser Automation]]: Playwright or Selenium-backed browser control for web scraping, form filling, and login-gated services — critical for tasks that require UI navigation rather than API access.
  - [[Code Execution]] sandboxes: most runtimes now provide isolated execution environments (Docker containers, E2B sandboxes, Daytona workspaces) to prevent malicious code from affecting the host system.
  - Sub-agent delegation: personal runtimes can spawn ephemeral specialised agents for subtasks (research, code review, translation) and collect their results — a lightweight version of [[Multi-Agent Orchestration Frameworks]].

  **Permission Governance**
  - Three-tier permission model common across runtimes: (1) always-allowed read-only operations (search, read local files, retrieve memories); (2) human-in-the-loop operations requiring approval (send email, make purchases, delete files); (3) never-allowed destructive or privacy-violating operations (exfiltrate data, bypass OS security). OpenHarness implements multi-level permission modes with explicit whitelist/blacklist configuration per tool.

  ## Major Implementations (2024–2026)

  **Khoj** (Python, MIT licence; khoj-ai/khoj, 30k+ GitHub stars as of 2025)
  Khoj is the most mature general-purpose personal runtime: it indexes Obsidian vaults, Notion, GitHub repos, PDFs, and email into a persistent [[Vector Database]]; supports any Ollama-compatible or API-accessible [[Large Language Model]]; provides custom agent building with scheduled automations; and offers deep research workflows using multi-step web search and synthesis. Self-hostable via Docker Compose; also available as a managed cloud service. Native Obsidian and Emacs plugins route knowledge-graph queries directly through Khoj's [[Retrieval-Augmented Generation]] pipeline.

  **ElizaOS** (TypeScript, MIT licence; elizaOS/eliza, 16k+ stars)
  ElizaOS is an agent operating system designed for social media, Web3, and creative applications. Its architecture centres on character files (JSON personality definitions), a plugin system with 90+ official connectors (Discord, Telegram, X, Farcaster, Ethereum, Solana), and a World/Room context model for multi-agent coordination. ElizaOS v2 (launched April 2025) adopted an event-driven architecture and Hierarchical Task Networks for dynamic replanning. By January 2025, Web3 projects built on ElizaOS exceeded $20B combined market capitalisation, making it the dominant framework for on-chain AI agents.

  **Agent Zero** (Python/Docker, MIT licence; agent0ai/agent-zero)
  Agent Zero provides a fully autonomous system within a Docker-sandboxed Linux environment: the agent can write and execute arbitrary Python, Bash, and Node.js code; install packages; manage files; browse the web; and spawn subordinate agents. Founded in March 2024 by Jan Tomášek, it represents the full-computer-use paradigm — treating the operating system as the tool surface rather than defining a fixed tool API. Safety is enforced by Docker isolation rather than permission whitelists.

  **AIlice** (Python, Apache 2.0; myshell-ai/AIlice)
  AIlice uses the Interactive Agents Call Tree (IACT) architecture to decompose tasks into dynamically constructed sub-agent trees, each spawned with specialised instructions. Demonstrates proficiency in thematic research, coding, system management, and complex hybrid tasks requiring coordination between research, code generation, and file management phases. AIlice supports multiple LLM backends including local models via llama.cpp and remote API models.

  **OpenHarness** (Python, MIT licence; HKUDS/OpenHarness)
  OpenHarness is a research-grade transparent runtime designed to expose the internal mechanics of agent harnesses for study and extension. With 43+ built-in tools, streaming tool-call cycles, multi-level permission modes, MEMORY.md persistence, and background task management, it serves educational and research purposes alongside production deployment. Its companion personal agent Ohmo is built directly on the OpenHarness runtime.

  ## Use Cases

  - **Personal knowledge management**: indexing and querying personal note archives, research papers, email threads, and browser bookmarks with conversational natural-language queries, producing synthesised answers that link back to source documents.
  - **Autonomous research workflows**: multi-step deep research pipelines that search the web, retrieve and synthesise academic papers, generate structured reports, and deliver them to email or Obsidian notes — all triggered by a single natural-language request and executing over hours without supervision.
  - **Calendar and task management**: reading calendar events, suggesting time-blocking, drafting replies to meeting invitations, and maintaining to-do lists that incorporate context from conversations and documents.
  - **Code assistance and automation**: personal runtimes such as Agent Zero can autonomously write scripts, run them in Docker sandboxes, debug failures, and iterate until the task completes — extending [[Terminal Coding Agents]] capabilities into longer-horizon autonomous engineering tasks.
  - **Web3 and on-chain operations**: ElizaOS-based agents manage social media posting, on-chain trading, liquidity provision, and DAO governance participation autonomously, with blockchain wallet integration as a first-class capability.
  - **Scheduled automations**: digest emails, summarise news, monitor RSS feeds, check health metrics — recurring tasks that execute on cron schedules without user initiation.

  ## Academic Context

  The theoretical foundations of Personal Agent Runtimes draw on four decades of multi-agent systems research. Wooldridge and Jennings' 1995 paper "Intelligent Agents: Theory and Practice" in The Knowledge Engineering Review established the BDI (Belief-Desire-Intention) agent architecture that underlies much of modern agent runtime design: beliefs correspond to the runtime's [[Knowledge Base]] and [[Retrieval-Augmented Generation]] layer; desires correspond to persistent goals; intentions correspond to the active plan being executed by the [[Event Loop]]. The reactive-deliberative hybrid architecture (Maes, 1991; Brooks, 1986) informs modern runtimes that must balance reactive tool-call response with deliberative multi-step planning.

  The emergence of LLM-grounded agents was theoretically anticipated in the ReAct paper (Yao et al., 2022, "ReAct: Synergizing Reasoning and Acting in Language Models"), which demonstrated that interleaving reasoning traces with tool-call actions significantly improves agent performance on knowledge-intensive tasks. The Toolformer paper (Schick et al., 2023) showed LLMs could learn to invoke external [[Tool Use]] APIs through self-supervised training. The Generative Agents paper (Park et al., 2023, Stanford) demonstrated persistent personal identity and social memory in simulated agents, directly informing memory architecture in Khoj and similar runtimes. The AlphaCode/SWE-bench literature established [[Code Execution]] environments as essential agent infrastructure.

  Key venues for personal agent runtime research include NeurIPS, ICLR, ACL, EMNLP (for language-grounded agent papers), and AAMAS (Autonomous Agents and Multi-Agent Systems) for broader agent architecture contributions.

  ## Current Landscape (2026)

  As of 2026, Personal Agent Runtimes have transitioned from experimental weekend projects to production systems with significant user bases. Khoj has achieved 30,000+ GitHub stars and offers a managed cloud tier alongside its self-hosted option. ElizaOS's ecosystem exceeded $20B in associated Web3 project market capitalisation by January 2025. The convergence on [[Model Context Protocol]] as the universal tool integration standard (adopted by Anthropic, OpenAI, Google DeepMind, Microsoft, AWS, and Cloudflare through 2025) has dramatically reduced the per-runtime cost of building tool integrations, allowing runtimes to concentrate on memory, orchestration, and user experience differentiation.

  Key 2025–2026 developments include: the release of LangGraph 1.0 (October 2025) providing a shared checkpointing and state-persistence substrate that personal runtimes are beginning to adopt; OpenAI's AgentKit (DevDay October 2025) with visual agent builder and Sandbox agents for isolated code execution; Google's ADK (April 2025) with native Agent-to-Agent (A2A) protocol support; and Anthropic's donation of MCP to the Agentic AI Foundation under Linux Foundation governance (December 2025). Gartner's 2025 AI Hype Cycle found that 45% of enterprise AI projects now use multi-agent orchestration frameworks, with significant spillover into personal and prosumer-grade personal runtimes.

  The [[Privacy-Preserving AI]] dimension is becoming a primary differentiator: users are increasingly choosing self-hosted runtimes (Khoj local mode, Agent Zero, OpenHarness) to avoid sending personal documents and calendar data to cloud AI providers, driving adoption of [[Local Language Model]] backends via Ollama that enable fully air-gapped personal AI operation.

  ## UK Context

  The UK has a significant academic footprint in the multi-agent systems and personal AI research spaces underpinning Personal Agent Runtimes. The Alan Turing Institute hosted the UK Multi-Agent Systems Symposium 2025 (UK-MAS) in March 2025 at King's College London, in collaboration with KCL's Institute for Artificial Intelligence, featuring research from University of Edinburgh (Prof. Subramanian Ramamoorthy), University of Southampton (long-standing AAMAS research group), and Imperial College London. A Special Issue on Multi-Agent Systems Research in the United Kingdom published in AI Communications (2025) collects 14 contributed articles from UK labs, demonstrating the breadth of UK academic engagement with agent architectures that underpin personal runtimes.

  From an industry perspective, UK-based AI companies including DeepMind (London), Wayve (London), and Graphcore (Bristol) contribute infrastructure and reasoning model capabilities that personal runtimes leverage. The Northern England technology corridor (Manchester, Leeds, Sheffield, Newcastle) hosts a growing base of [[Agentic AI]] practitioners and SME developers building personal runtime applications for healthcare scheduling, legal document management, and academic research assistance — use cases particularly suited to privacy-preserving self-hosted deployments given GDPR compliance requirements in the UK post-Brexit regulatory environment.

  ## Future Directions (2026–2030)

  - **On-device personal runtimes**: as edge inference improves (Apple Silicon, Qualcomm NPUs, NVIDIA Jetson), personal runtimes will run fully on consumer hardware without any cloud dependency, enabling zero-data-egress personal AI. Khoj's local mode and Agent Zero's Docker architecture position them well for this transition.
  - **Proactive agency**: current runtimes are primarily reactive (user initiates a task). Next-generation runtimes will monitor event streams (email, calendar, news, health sensors) and proactively surface relevant information or take preprogrammed autonomous actions without explicit user prompting.
  - **Continuous [[Self-Improvement]]**: runtimes will learn from user corrections, building personalised tool-use strategies and communication styles via lightweight [[Reinforcement Learning]] from human feedback loops operating over weeks and months of interaction.
  - **Multi-runtime federation**: personal runtimes will communicate peer-to-peer via A2A and MCP protocols, enabling collaborative tasks between users' agents (e.g., two people's runtimes negotiating a meeting time or co-authoring a document).
  - **Regulatory compliance by design**: EU AI Act and UK AI regulation will require personal runtimes to maintain explainable action logs, provide opt-out mechanisms, and implement data minimisation — driving architectures where the [[Agent Event Stream]] is a first-class, auditable record of all autonomous actions.
  - **Embodied personal agents**: integration of personal runtimes with smart-home IoT infrastructure, robotics platforms, and AR/VR interfaces will extend agency from the digital to the physical domain.

  ## Research and Literature

  1. Wooldridge, M., & Jennings, N.R. (1995). "Intelligent Agents: Theory and Practice." *The Knowledge Engineering Review*, 10(2), 115–152. https://doi.org/10.1017/S0269888900008122
  2. Park, J.S., O'Brien, J.C., Cai, C.J., Morris, M.R., Liang, P., & Bernstein, M.S. (2023). "Generative Agents: Interactive Simulacra of Human Behavior." *UIST 2023*. https://arxiv.org/abs/2304.03442
  3. Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2022). "ReAct: Synergizing Reasoning and Acting in Language Models." *ICLR 2023*. https://arxiv.org/abs/2210.03629
  4. Schick, T., Dwivedi-Yu, J., Dessì, R., Raileanu, R., Lomeli, M., Zettlemoyer, L., Cancedda, N., & Scialom, T. (2023). "Toolformer: Language Models Can Teach Themselves to Use Tools." *NeurIPS 2023*. https://arxiv.org/abs/2302.04761
  5. Wang, L., Ma, C., Feng, X., Zhang, Z., Yang, H., Zhang, J., Chen, Z., Tang, J., Chen, X., Lin, Y., Zhao, W.X., Wei, Z., & Wen, J.-R. (2024). "A Survey on Large Language Model based Autonomous Agents." *Frontiers of Computer Science*, 18(6). https://arxiv.org/abs/2308.11432
  6. Xi, Z., Chen, W., Guo, X., He, W., Ding, Y., Hong, B., Zhang, M., Wang, J., Jin, S., Zhou, E., Zheng, R., Fan, X., Wang, X., Xiong, L., Zhou, Y., Wang, W., Jiang, C., Zou, Y., Liu, X., ... & Gui, T. (2023). "The Rise and Potential of Large Language Model Based Agents: A Survey." https://arxiv.org/abs/2309.07864
  7. Significant Gravitas (2024). AutoGPT: The First Autonomous AI Agent. https://github.com/Significant-Gravitas/AutoGPT
  8. Khoj AI (2024–2026). Khoj: Your AI Second Brain. Self-hostable personal AI runtime. https://github.com/khoj-ai/khoj
  9. elizaOS team (2025). "Eliza: A Web3-Friendly AI Agent Operating System." *arXiv*. https://arxiv.org/abs/2501.06781
  10. HKUDS Lab (2025). "OpenHarness: Open Agent Harness with Built-in Personal Agent Ohmo." https://github.com/HKUDS/OpenHarness
  11. Tomášek, J. (2024–2026). Agent Zero: Next-Generation Autonomous AI in Docker. https://github.com/agent0ai/agent-zero
  12. MyShell AI (2024–2026). AIlice: Fully Autonomous General-Purpose AI Agent with IACT Architecture. https://github.com/myshell-ai/AIlice
  13. Anthropic (2024). "Model Context Protocol: Open Standard for AI Tool Integration." https://www.anthropic.com/news/model-context-protocol
  14. Agentic AI Foundation / Linux Foundation (2025). MCP Governance Transfer. https://www.anthropic.com
  15. Zhao, Y., Kabbara, J., & Iyengar, R. (2023). "MemoryBank: Enhancing Large Language Models with Long-Term Memory." *AAAI 2024*. https://arxiv.org/abs/2305.10250
  16. Bell, G., & Gemmell, J. (2007). "A Digital Life." *Scientific American*, 296(3), 58–65. https://doi.org/10.1038/scientificamerican0307-58
  17. Nakano, R., Hilton, J., Balwit, A., Wu, J., Ouyang, L., Kim, C., Hesse, C., Jain, S., Kosaraju, V., Saunders, W., Jiang, X., Cobbe, K., Eloundou, T., Krueger, G., Button, K., Knight, M., Chess, B., & Schulman, J. (2021). "WebGPT: Browser-Assisted Question-Answering with Human Feedback." https://arxiv.org/abs/2112.09332
  18. OpenAI (2025). "OpenAI Agents SDK: Production-Ready Multi-Agent Orchestration." https://openai.github.io/openai-agents-python/
  19. Maes, P. (1991). "The Agent Network Architecture (ANA)." *SIGART Bulletin*, 2(4), 115–120.
  20. Brooks, R.A. (1986). "A Robust Layered Control System for a Mobile Robot." *IEEE Journal of Robotics and Automation*, 2(1), 14–23.
  21. The Alan Turing Institute (2025). "UK Multi-Agent Systems Symposium 2025." https://www.turing.ac.uk/events/uk-multi-agent-systems-symposium-2025-uk-mas
  22. Gartner (2025). Gartner AI Hype Cycle 2025: 45% of Enterprise AI Projects Use Multi-Agent Orchestration. Gartner Research Note.
  23. Weng, L. (2023). "LLM-Powered Autonomous Agents." *Lil'Log Blog*, Lilian Weng. https://lilianweng.github.io/posts/2023-06-23-agent/
  24. Zhou, Y., Muresanu, A.I., Han, Z., Paster, K., Pitis, S., Chan, H., & Ba, J. (2023). "Large Language Models are Human-Level Prompt Engineers." *ICLR 2023*. https://arxiv.org/abs/2211.01910
  25. Sumers, T.R., Yao, S., Narasimhan, K., & Griffiths, T.L. (2023). "Cognitive Architectures for Language Agents." *Transactions on Machine Learning Research*. https://arxiv.org/abs/2309.02427
  26. Wang, G., Xie, Y., Jiang, Y., Mandlekar, A., Xiao, C., Zhu, Y., Fan, L., & Anandkumar, A. (2024). "Voyager: An Open-Ended Embodied Agent with Large Language Models." *Transactions on Machine Learning Research*. https://arxiv.org/abs/2305.16291
  27. AI Communications (2025). "Special Issue: Multi-Agent Systems Research in the United Kingdom." https://www.turing.ac.uk/research/research-programmes/artificial-intelligence-ai/special-issue-multi-agent-systems-research-uk

- ### Provenance
  - sources:: https://github.com/khoj-ai/khoj, https://arxiv.org/abs/2501.06781, https://github.com/HKUDS/OpenHarness, https://github.com/agent0ai/agent-zero, https://github.com/myshell-ai/AIlice, https://www.anthropic.com/news/model-context-protocol, https://www.turing.ac.uk/events/uk-multi-agent-systems-symposium-2025-uk-mas, https://lilianweng.github.io/posts/2023-06-23-agent/, https://arxiv.org/abs/2308.11432, https://arxiv.org/abs/2210.03629
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm