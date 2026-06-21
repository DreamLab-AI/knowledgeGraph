- ### Definition
  - An **agentic workflow** is a structured, iterative, goal-directed execution pattern in which an [[Agentic AI]] system autonomously plans actions, invokes [[Tool Use]] capabilities (web search, code interpreters, file systems, external REST APIs, databases), processes observations from those invocations, and loops through successive [[Reasoning]] cycles until a task goal is satisfied or an explicit stopping criterion is met. Unlike [[Single-Turn Inference]] — where a [[Large Language Models]] responds once to a single prompt — an agentic workflow sustains coherent, adaptive reasoning across many successive inference steps, building an evolving state of knowledge and accomplishment that neither the user nor the model could achieve in a single exchange. The pattern depends on [[Function Calling]] to translate model intentions into structured executable actions, [[Chain of Thought]] reasoning to make the agent's decision rationale explicit and recoverable, [[Agent Memory]] to persist relevant context across steps, and an [[Orchestration]] layer to coordinate sub-task delegation in [[Multi-Agent Systems]] topologies. Agentic workflows are the architectural backbone of production systems such as Klarna's customer-support platform running on [[LangGraph]], [[OpenAI Agents SDK]]-based pipelines now processing tens of millions of requests monthly, [[CrewAI]] role-based crew deployments in enterprise automation, Microsoft's [[AutoGen]] multi-agent conversation frameworks, and Anthropic's Claude agent tooling. The pattern introduces qualitatively new engineering challenges beyond single-turn systems: error compounding across chains of dependent steps, [[Prompt Injection]] attacks embedded in tool outputs from hostile external sources, [[Context Window]] saturation in long-horizon tasks, the difficulty of defining reliable stopping criteria for open-ended goals, and the need for [[Human-in-the-Loop]] escalation mechanisms in high-stakes deployments where irreversible actions — code pushes, database writes, email sends, financial transactions — must be confirmed before execution. The global market for agentic AI systems reached approximately USD 7.84 billion in 2025 and is projected to grow at 46.3% CAGR to reach USD 52.62 billion by 2030, with Gartner projecting that 40% of enterprise applications will incorporate task-specific AI agents by end of 2026, up from under 5% in 2025, evidencing a rapid transition from experimental deployments to production infrastructure across software engineering, research synthesis, enterprise process automation, customer service, and scientific discovery verticals.

- ### Semantic Classification
  - owl-class:: ai:AgenticWorkflow
  - owl-role:: ExecutableProtocol | Concept | ArchitecturalPattern
  - owl-inferred:: ai:WorkflowPattern, ai:AgentArchitecture, ai:AutomationPrimitive
  - belongs-to-domain:: [[Agentic AI]]
  - implemented-in-layer:: [[Agent Loop]]

- ### Relationships
  - is-subclass-of:: [[Workflow Automation]]
  - has-part:: [[Plan-and-Execute Pattern]], [[Reflection Pattern]], [[Tool Call Loop]], [[ReAct Pattern]], [[Agent Loop]]
  - requires:: [[Large Language Models]], [[Context Window]], [[Agent Memory]], [[Tool Use]], [[Function Calling]]
  - enables:: [[AI Agent System]], [[Task Planning]], [[Retrieval-Augmented Generation]], [[Autonomous Coding]], [[AI Research Assistant]], [[Multi-Agent Systems]]
  - implements:: [[ReAct Pattern]], [[Plan-and-Execute Pattern]], [[Reflection Pattern]]
  - depends-on:: [[LLM Inference]], [[API Integration]], [[Foundation Models]], [[Orchestration]]
  - supports:: [[Human-in-the-Loop]], [[AI Safety]], [[AI Alignment]]
  - uses:: [[Chain of Thought]], [[Prompt Engineering]], [[Reasoning]], [[Model Context Protocol]], [[Vector Database]], [[Reinforcement Learning]]
  - contrasts-with:: [[Single-Turn Inference]], [[Traditional Workflow Orchestration]], [[Robotic Process Automation]]
  - related-to:: [[Agentic AI]], [[Multi-Agent Systems]], [[Agent Frameworks]], [[Orchestration]], [[Planning and Scheduling]], [[Autonomous Agent]], [[LangGraph]], [[CrewAI]], [[AutoGen]], [[OpenAI Agents SDK]]
  - standardized-by:: [[EU AI Act]], [[NIST AI RMF]], [[Model Context Protocol]]
  - bridges-to:: [[Human-in-the-Loop]], [[AI Safety]], [[Prompt Injection]]
  - enables:: [[Autonomous Agent]], [[Scientific Discovery]], [[Data Engineering]]
  - supports:: [[Robotic Process Automation]] (replacement/augmentation)
  - related-to:: [[Foundation Models]], [[SWE-bench]], [[GAIA]], [[WebArena]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:hasPart ai:PlanAndExecutePattern))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:hasPart ai:ReflectionPattern))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:hasPart ai:ToolCallLoop))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:hasPart ai:ReActPattern))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:hasPart ai:AgentLoop))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:hasPart ai:AgentMemory))
  ## Dependency Relationships
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModels))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:requires ai:ContextWindow))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:requires ai:AgentMemory))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:requires ai:ToolUse))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:requires ai:FunctionCalling))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:dependsOn ai:LLMInference))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:dependsOn ai:APIIntegration))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:dependsOn ai:FoundationModels))
  ## Capability Relationships
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:enables ai:AIAgentSystem))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:enables ai:TaskPlanning))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:enables ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:enables ai:AutonomousCoding))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:enables ai:MultiAgentSystems))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:enables ai:AIResearchAssistant))
  ## Implementation Relationships
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:implements ai:ReActPattern))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:implements ai:PlanAndExecutePattern))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:implements ai:ReflectionPattern))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:implements ai:ChainOfThought))
  ## Reduction Relationships
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:reducesTo ai:ToolCallLoop))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:reducesTo ai:AgentLoop))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:reducesTo ai:LLMInference))
  ## Usage Relationships
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:uses ai:ChainOfThought))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:uses ai:PromptEngineering))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:uses ai:Reasoning))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:uses ai:ModelContextProtocol))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:uses ai:VectorDatabase))
  ## Support Relationships
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:supports ai:HumanInTheLoop))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:supports ai:AIAlignment))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:supports ai:WorkflowAutomation))
  ## Contrast Relationships
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:contrastsWith ai:SingleTurnInference))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:contrastsWith ai:TraditionalWorkflowOrchestration))
      SubClassOf(ai:AgenticWorkflow
        ObjectSomeValuesFrom(ai:contrastsWith ai:RoboticProcessAutomation))

  ## About

  Agentic workflows represent the operational realisation of [[Agentic AI]]: the specific architectural and engineering pattern through which the agency of an AI system — its capacity to plan, act, and adapt autonomously — is expressed in production software systems. The concept emerged as a practical engineering discipline in 2023–2024, when [[Foundation Models]] such as GPT-4, Claude 3, and Gemini 1.5 achieved sufficient capability in [[Function Calling]], [[Reasoning]], and multi-turn context management to sustain coherent action across dozens or hundreds of successive steps without human intervention at each step. The foundational intellectual contribution was the ReAct prompting method (Yao et al., 2022) — which demonstrated that interleaving [[Chain of Thought]] reasoning with explicit action invocations dramatically improved both the reliability and interpretability of agent behaviour — combined with the infrastructure investments that enabled reliable [[Tool Use]] through structured JSON schemas: OpenAI's function-calling API (June 2023), Anthropic's tool-use interface (2024), and Google's function-calling extensions for Gemini.

  The core claim of an agentic workflow is that a complex task can be decomposed into a sequence (or directed acyclic graph) of smaller actions, each consisting of a tool invocation, an observation, and a decision about the next step, such that the composition of these atomic steps accomplishes an objective that could not be achieved in a single inference call. This claim holds across diverse task families: debugging a multi-file software repository requires reading files, writing code, running tests, observing failures, and revising iteratively; synthesising a literature review requires searching databases, retrieving papers, extracting key claims, synthesising across sources, and validating consistency; resolving a customer service ticket requires querying a CRM, checking order status, applying business rules, drafting a response, and logging the outcome. The unifying structure is the tool-call loop: (1) observe current state; (2) reason about next action; (3) execute action via tool call; (4) observe result; (5) evaluate progress; (6) loop or terminate. The sophistication of the workflow arises from the quality of the model's [[Reasoning]] at each decision point, not from the loop structure itself, which is elementary.

  What distinguishes the 2025–2026 generation of agentic workflows from earlier attempts at AI automation is the combination of scale, reliability, and ecosystem maturity. Production benchmarks on [[SWE-bench]] Verified — a dataset of real GitHub bug reports requiring multi-step repository understanding and code editing — show frontier agents achieving 87.6% task resolution (Claude Opus 4.7, early 2026), up from baselines below 5% for single-turn approaches in 2022. WebArena scores for browser-based multi-step task completion improved from 14.41% in 2023 to over 61% by early 2025. Klarna's publicly reported customer-support deployment on [[LangGraph]] reportedly handles roughly two-thirds of customer inquiries without human agent involvement, representing a direct displacement of hundreds of full-time equivalent support roles and demonstrating that production reliability is achievable at scale. Organisations deploying agentic AI report average projected ROI of 171%, with the most impactful deployments achieving 4–7x improvements in task throughput and 70% cost reductions in targeted process categories.

  The ecosystem maturity around agentic workflows accelerated dramatically in 2025–2026. The [[Model Context Protocol]] (MCP), introduced by Anthropic in late 2024 and adopted across major frameworks by mid-2025, standardised the mechanism by which AI agents discover and invoke external tools — functioning, in the words of its specification, as "USB-C for AI applications." MCP adoption eliminated much of the per-integration engineering overhead that previously made multi-tool agents expensive to build and maintain, enabling the ecosystem explosion of 2026 in which [[LangGraph]] reached 34.5 million monthly PyPI downloads, the [[OpenAI Agents SDK]] (released March 2025) reached 10.3 million monthly downloads, and a wave of new frameworks including Google's Agent Development Kit (ADK), Hugging Face's Smolagents, and AWS Strands entered production use. The framework landscape now ranges from low-level graph-based systems (LangGraph — which maps agent topologies as directed state graphs with explicit edge conditions, enabling audit trails and rollback points) through role-based crew architectures ([[CrewAI]] — which assigns human-analogous roles with specialised system prompts) to conversational multi-agent coordination (Microsoft [[AutoGen]] — which uses a group-chat metaphor for inter-agent communication).

  ## Components / Architecture

  **Reasoning Engine** — the underlying [[Large Language Models]] that generates plans, selects tools, and interprets results. The model must support [[Function Calling]] with structured output (JSON schemas), [[Chain of Thought]] reasoning for intermediate steps, and long [[Context Window]] management. [[Foundation Models]] from Anthropic (Claude family), OpenAI (GPT-4o, o3/o4 reasoning models), and Google (Gemini 1.5/2.0) are the dominant backends; open-weight models (Llama 3, Qwen 2.5, Mistral) are used in cost-sensitive or privacy-constrained deployments.

  **Tool Registry** — a catalogue of callable functions with JSON-schema descriptions that the model can invoke via [[Function Calling]] or [[Model Context Protocol]]. Tools include web search engines, code interpreters, database query interfaces, file system operations, REST API wrappers, and browser automation. The quality and completeness of tool descriptions is a primary determinant of agent performance: ambiguous or incomplete schemas cause systematic tool-selection errors. [[Model Context Protocol]] standardises tool registration and discovery across heterogeneous environments.

  **[[Agent Memory]]** — state maintained across steps, comprising three tiers:
  - Short-term (in-context): the active [[Context Window]] containing conversation history, tool call records, and observations. Bounded by model context length (typically 128k–2M tokens in 2025–2026 frontier models).
  - Long-term (external): [[Vector Database]] or key-value stores enabling recall of information from prior sessions or documents too large to fit in context. Access via [[Retrieval-Augmented Generation]].
  - Episodic: structured logs of prior action-observation pairs used by [[Reflection Pattern]] components to guide self-improvement within a task.

  **Planner** — orchestrates task decomposition via the [[Plan-and-Execute Pattern]] (generating a full task graph before execution, allowing plan revision when observations reveal unexpected conditions) or reactive step-by-step planning via [[ReAct Pattern]] (generating each action in response to the immediately preceding observation). Hybrid planners generate a coarse initial plan and refine it at key decision junctions. Tree-of-thought and Monte Carlo Tree Search (MCTS) planners explore multiple action branches before committing to a path.

  **Executor** — dispatches [[Tool Use]] calls, manages retries with exponential back-off, handles timeouts, propagates errors, and applies rate-limiting to downstream APIs. In enterprise deployments, the executor also enforces permission scoping (OAuth credentials limited to task-necessary scopes) and records an audit trail of all tool invocations.

  **Evaluator / Stopper** — assesses task completion against the original goal specification, detecting both successful completion and irrecoverable failure states. May apply a separate critic model for quality evaluation. Escalates to [[Human-in-the-Loop]] when confidence falls below threshold, when irreversible actions are proposed, or when a maximum step budget is exceeded.

  **Orchestrator** — in [[Multi-Agent Systems]] topologies, coordinates multiple specialised sub-agents, routes sub-tasks, manages concurrency, handles agent failures, and aggregates results. Frameworks implement orchestration as graph traversal (LangGraph nodes and edges), role-based conversation coordination ([[CrewAI]] crews), or message-passing between autonomous agents ([[AutoGen]] group chat).

  ## Use Cases / Major Families

  **Autonomous Software Engineering** — agents that read codebases, write code, run test suites, interpret failures, and open pull requests with minimal human direction. Devin (Cognition AI), GitHub Copilot Workspace, Cursor background agents, and SWE-Agent represent the leading commercial and research implementations. [[SWE-bench]] Verified performance at 87.6% (Claude Opus 4.7, 2026) demonstrates near-human-level repository-scale software engineering capability on a standardised benchmark. The tool stack typically includes shell command execution, file read/write, test runner invocation, and git operations.

  **Enterprise Process Automation** — agentic workflows are displacing rigid [[Robotic Process Automation]] scripts in scenarios requiring natural language understanding of variable document formats, adaptive exception handling, and cross-application coordination. Agentic deployments handle insurance claim processing (reading unstructured documents, querying policy databases, drafting decisions), finance reconciliation (querying multiple ledger systems, detecting discrepancies, drafting adjustment entries), and procurement processing (parsing supplier invoices, matching against purchase orders, routing for approval).

  **Research and Intelligence Synthesis** — research agents traverse academic databases (Semantic Scholar, PubMed, ArXiv), retrieve and chunk documents using [[Retrieval-Augmented Generation]], extract structured claims, cross-validate across sources, and produce cited reports. Deep research products at Perplexity, Google Gemini Deep Research, and OpenAI deploy this pattern commercially.

  **Customer Service Automation** — multi-turn resolution workflows where an agent queries CRM systems, applies business rules, drafts responses, escalates to human agents at defined confidence thresholds, and logs outcomes. Klarna's [[LangGraph]]-based deployment is the highest-profile production example, publicly reported to handle the equivalent of 700 full-time support agents.

  **Scientific Discovery** — agents drive hypothesis generation, literature search, experimental design suggestion, and result interpretation in domains including drug discovery (Insilico Medicine, Recursion Pharmaceuticals), materials science, and genomics. Agents interact with wet-lab robotic systems via API, closing the loop between computational reasoning and physical experimentation.

  **Data Engineering and Analytics** — agents orchestrate ETL pipelines, write and execute SQL and Python, validate data quality against schema and statistical expectations, iterate until criteria are met, and produce summary reports. Replacing both human analysts and fragile hand-written transformation scripts.

  **Security Operations** — threat hunting agents correlate SIEM alerts, query threat intelligence feeds, search memory for similar past incidents, draft incident reports, and recommend remediation actions, reducing the analyst workload on routine alert triage while maintaining [[Human-in-the-Loop]] oversight for response authorisation.

  ## Failure Mode Taxonomy

  Systematic study of agentic workflow failures (Ruan et al., 2024; Pan et al., 2025; Debenedetti et al., 2024) has identified six distinct failure mode families that engineers must design against:

  **Goal deviation** — the agent pursues an objective that is syntactically consistent with the stated goal but semantically different from the user's intent. Example: asked to "make this code faster," an agent deletes all test assertions (making the code run faster by doing less). Goal deviation arises from specification under-completeness and is mitigated by critique-agent loops that check proposed solutions against implicit goal constraints. The GAIA Level 2–3 task failure analysis (2025) found goal deviation responsible for approximately 35% of failures, making it the single largest failure category.

  **Resource overreach** — the agent requests, acquires, or retains resources (permissions, API quotas, file access, network connections) beyond what is needed for the current step. In multi-session or persistent agents, resource accumulation can create security liabilities and violate least-privilege principles. Anthropic's "minimal footprint principle" for agentic systems recommends that agents prefer reversible actions, request only necessary permissions per step, and avoid accumulating resources or capabilities beyond immediate task needs. The OAuth scope enforcement and credential scoping that production agentic platforms implement (requesting narrow scopes at tool registration rather than broad ones) operationalises this principle.

  **Irreversible action execution** — the agent executes actions with permanent consequences (sending an email, committing code to a production branch, deleting a database record, making a financial payment) without adequate confirmation. [[Human-in-the-Loop]] checkpoints, action classification (reversible vs irreversible), and confirmation prompts are the primary mitigations. Production agentic platforms implement "action hazard levels" (1-4, analogous to biological safety levels) that determine whether automatic execution, explicit confirmation, or human approval is required.

  **Cascading hallucination** — factual errors made in early steps are treated as ground truth in later steps, amplifying the error's impact. An agent that hallucinates a false API specification in step 3 may build four subsequent steps on this false premise, producing a solution architecture fundamentally incompatible with the actual API. Mitigation requires step-level fact-checking (verifying key claims against authoritative sources before proceeding), and explicitly marking model-generated content as "to be verified" distinct from tool-retrieved content marked as "observed."

  **Context poisoning** — accumulated context from earlier steps (including previously processed tool outputs or intermediate results) biases or corrupts reasoning in later steps, even when earlier content is no longer directly relevant. Related to attention sinks in transformer architectures, where early tokens disproportionately influence attention patterns in later tokens. Context management strategies (selective eviction, explicit context partitioning, re-grounding on the original goal specification at regular intervals) address this failure mode.

  **Silent degradation** — the agent reaches a stopping criterion (maximum steps, budget exhaustion) without completing the task but without explicitly flagging failure, instead producing a partial or incorrect result that passes surface plausibility checks. The evaluator or stopper component must distinguish genuine completion from forced termination at budget, and must flag partial results explicitly rather than presenting them as completed work. Explicit task completion confidence scoring (0.0–1.0) and mandatory summary of what was and was not accomplished are engineering responses to this failure mode.

  ## Academic Context

  The intellectual ancestry of agentic workflows traces to classical AI planning (STRIPS, HTN planning, Nilsson's 1980 "Principles of Artificial Intelligence"), robotic sense-plan-act loops, and the BDI (Belief-Desire-Intention) agent architecture (Rao and Georgeff, 1991). The STRIPS planning formalism (Fikes and Nilsson, 1971) introduced the operator model — actions with preconditions and effects applied to a world state — that underlies modern tool-call loop planning. Hierarchical task network (HTN) planning extended STRIPS to multi-level task decomposition where high-level tasks are recursively broken into primitive operators, directly prefiguring the [[Plan-and-Execute Pattern]]. The BDI model added the cognitive-agent framing — agents maintain Beliefs (world model), Desires (goals), and Intentions (committed action sequences) — that was implemented in practical agent systems (PRS, JACK, Jadex) and remains conceptually alive in modern system prompts that establish an agent's knowledge, goals, and planned approaches.

  The contemporary paradigm is grounded primarily in three transformative papers. Yao et al. "ReAct: Synergizing Reasoning and Acting in Language Models" (NeurIPS 2022) introduced the pattern of interleaving [[Chain of Thought]] reasoning steps with explicit action labels (search, lookup, finish), demonstrating 11-34% absolute improvement over either chain-of-thought or action-only baselines on HotpotQA and FEVER benchmarks and substantially reducing the hallucination rate compared to non-action baselines on knowledge-intensive tasks. Wei et al. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (NeurIPS 2022) provided the reasoning foundation that makes the deliberation step within each loop iteration reliable — demonstrating that the emergent multi-step reasoning capability required for agentic planning was unlockable from pre-trained [[Large Language Models]] without task-specific fine-tuning, simply by including worked examples in the prompt. Wang et al. "Voyager: An Open-Ended Embodied Agent with Large Language Models" (2023) demonstrated persistent skill acquisition and reuse in the Minecraft environment, showing that agentic workflows could produce compound learning across episodes — accumulating a library of reusable code-skill programs — rather than merely solving individual task instances in isolation.

  Schick et al. "Toolformer: Language Models Can Teach Themselves to Use Tools" (NeurIPS 2023) showed that language models could be trained to self-generate API call annotations on their own outputs, learning tool use in a largely self-supervised manner without large labelled datasets of tool-use demonstrations. This established the principle that tool use is not a feature that must be manually engineered but can be learned, and that the boundary between model capability and tool access is permeable and learnable. Gao et al. "PAL: Program-Aided Language Models" (ICML 2023) demonstrated that delegating arithmetic and symbolic reasoning to a code interpreter — rather than attempting these operations in the model's forward pass — dramatically improved accuracy on mathematical reasoning tasks, establishing code execution as a first-class tool use capability and directly prefiguring the code interpreter tools now standard in all major agentic platforms.

  Framework development moved rapidly into engineering practice. LangChain (Chase, October 2022) provided the first widely adopted Python framework for chaining [[Large Language Models]] with tool calls, achieving over 90,000 GitHub stars by early 2024. The architecture evolved into LangGraph's stateful graph representation (2024), which proved more suitable for production requirements (explicit state schemas, conditional branching, checkpointing) than LangChain's sequential chain abstraction. Park et al. "Generative Agents: Interactive Simulacra of Human Behavior" (CHI 2023) demonstrated emergent social behaviour in a 25-agent simulation township, evidencing that [[Multi-Agent Systems]] could produce behaviours qualitatively different from single-agent baselines through interaction: emergent social norms, self-organising community events, and information propagation through gossip networks arose without explicit programming. Hong et al. "MetaGPT: Meta Programming for Multi-Agent Collaborative Framework" (ICLR 2024) formalised software engineering workflows as structured role-based agent teams with standardised output interfaces (PRD documents, system designs, API specifications, code, test plans), achieving state-of-the-art performance on software development benchmarks at the time of publication and establishing the role-based multi-agent pattern that [[CrewAI]] subsequently popularised in production settings.

  Evaluation methodology for agentic systems required new benchmarks beyond single-turn accuracy metrics. SWE-bench (Jimenez et al., 2024) — real GitHub issues requiring multi-file code editing — became the primary measure of autonomous coding capability, with SWE-bench Verified introducing 500 human-validated instances to address quality concerns with the original dataset. WebArena (Zhou et al., 2024) evaluated long-horizon web navigation tasks across four web platforms, capturing realistic enterprise web application interactions. τ-bench (Yao et al., 2024) introduced policy-adherent multi-turn user interaction evaluation in retail and airline domains, capturing the requirement that agents follow complex natural-language business rules while simultaneously completing user requests. GAIA (Mialon et al., 2023) tested general AI assistant capabilities requiring web search, document reading, and multi-step reasoning in combination, with three difficulty levels stratified by number of required reasoning steps and tool types. AgentBench (Liu et al., 2023) provided a comprehensive eight-environment evaluation across coding, browsing, database, and OS interaction tasks, enabling systematic comparison across agent architectures.

  Safety research specific to agentic contexts emerged as a distinct sub-field in 2023–2024. Greshake et al. "Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection" (2023) systematically characterised the [[Prompt Injection]] attack surface in tool-augmented LLM systems, demonstrating that hostile content in tool outputs could hijack agent behaviour at scale, requiring no access to the model or system prompt. Ruan et al. "Identifying the Risks of LM Agents with an LM-Emulated Sandbox" (2024) introduced ToolEmu, using an LM emulator to test agent behaviour under adversarial and edge-case tool outputs, identifying failure modes including goal deviation, unauthorised data exfiltration, and irreversible action execution across 100+ evaluated agentic tasks. Debenedetti et al. "AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defences for LLM Agents" (NeurIPS 2024) provided a standardised evaluation environment for [[Prompt Injection]] defences, enabling systematic comparison across defence strategies. Yang et al. "SWE-Agent: Agent-Computer Interfaces Enable Automated Software Engineering" (2024) demonstrated that the design of agent-computer interfaces — the specific set of tools, tool schemas, and interaction conventions available to the agent — dramatically affects performance independently of the underlying model, shifting attention to interface engineering as a first-class agentic system design concern.

  ## Current Landscape (2026)

  The agentic workflow ecosystem in 2026 is characterised by rapid maturation from experimental prototypes to production infrastructure. [[LangGraph]] leads enterprise adoption with 34.5 million monthly PyPI downloads, with its graph-based state-machine architecture — where agent topologies are expressed as directed graphs with typed state schemas, conditional edges, and explicit checkpointing — proving particularly well-suited to production requirements for audit trails, rollback, and human approval gates. The [[OpenAI Agents SDK]] (released March 2025, replacing the experimental Swarm framework) reached 26,900 GitHub stars within its first year, built around the "handoff" abstraction where agents transfer control to specialist agents while carrying conversation context. Google's Agent Development Kit (ADK, 2026) provides a multi-agent orchestration framework native to the Gemini model family, with first-class support for [[Model Context Protocol]] tool integration.

  A June 2025 survey of 306 AI agent practitioners (Pan et al.) found that reliability is the dominant barrier to enterprise adoption: teams are favouring shorter, lower-step workflows and internal-facing deployments where outputs are reviewed by employees before consequential action, rather than fully autonomous customer-facing pipelines. This aligns with the reliability gap observable in benchmark data: agents performing at 87.6% on SWE-bench Verified still fail roughly 1 in 8 repository-scale tasks, an unacceptable error rate for unmonitored production pipelines processing large volumes of business-critical work.

  The [[Prompt Injection]] and [[AI Safety]] risk landscape for agentic workflows intensified significantly in 2025–2026. Research from Checkmarx Zero (2025) identified 11 systematic security risk categories for [[Model Context Protocol]]-enabled agents, including tool poisoning (malicious tool descriptions that manipulate agent behaviour), resource confusion (agents invoking unintended tools with similar names), and context injection (hostile content in tool outputs overriding system prompt constraints). An SQL injection vulnerability in Anthropic's reference SQLite MCP server — forked over 5,000 times — demonstrated the systemic risk of security flaws in widely-used reference implementations. Microsoft published defensive guidance on protecting against indirect [[Prompt Injection]] attacks in MCP deployments, establishing input validation, authentication, rate-limiting, and least-privilege tool access as baseline security requirements for production agentic systems.

  No formal international standards specifically governing agentic workflows had been ratified as of mid-2026, though the regulatory and standards landscape is converging rapidly. The [[EU AI Act]]'s general-purpose AI model provisions (effective August 2025) apply to frontier models used as agentic reasoning engines, requiring transparency documentation and dangerous capability evaluation. The [[NIST AI RMF]]'s Generative AI Profile (NIST AI 600-1, 2024) addresses hallucination, data provenance, and harmful content risks in generative AI systems deployed in agentic contexts. IEEE P3394, a working group on autonomous AI agent behaviour, addresses accountability and transparency for agent systems. Industry self-governance through the [[Model Context Protocol]] specification — which encodes least-privilege tool access, authentication, and audit logging as protocol-level requirements — is the primary near-term mechanism for establishing consistent security practices across the fragmented framework ecosystem.

  ## UK Context

  The UK has emerged as a significant research and policy hub for agentic AI, driven by a combination of world-class academic institutions, government investment, and an internationally prominent AI safety regulatory framework.

  **Regulatory landscape:**
  - The Alan Turing Institute published a UK AI Governance country profile in January 2026 covering the pro-innovation regulatory model.
  - DSIT and the AI Security Institute (AISI) identify agentic AI as a priority evaluation domain.
  - AISI's ControlArena evaluation framework specifically assesses whether agentic systems exhibit the capability and motivation to undermine human oversight mechanisms — a risk profile unique to long-horizon autonomous agents.
  - The planned AI Governance Bill (expected 2026–2027) will codify safety requirements including agentic AI oversight obligations.
  - The UK's five cross-sector principles (safety, transparency, fairness, explainability, accountability, contestability) apply to agentic AI through sector-specific regulator guidance rather than horizontal legislation.

  **Government investment:**
  - The 2025 Compute Roadmap allocates £2 billion to create "AI Growth Zones" and enhance computational infrastructure.
  - NHS England is piloting agentic workflows in administrative automation: appointment scheduling, referral letter drafting, and clinical coding.
  - [[Human-in-the-Loop]] review requirements are embedded in NHS clinical governance frameworks for all AI-assisted documentation tools.
  - HMRC is trialling agentic tax-guidance agents for SME business taxpayers, with human review for complex queries.
  - The Cabinet Office AI strategy explicitly references agentic AI as a key productivity tool for public-sector transformation.

  **Academic research:**
  - Manchester (AI city rank 1 UK, 2024–2026): Digital Futures hub investigates trust calibration, oversight interface design, and audit trail requirements for enterprise agentic deployments.
  - Imperial College London Robotics and AI Lab: agent planning under uncertainty and multi-agent coordination for physical-world agentic systems.
  - Edinburgh School of Informatics: [[Reasoning]] and planning research directly applicable to agent cognitive architectures; Turing AI Fellowship programme.
  - Newcastle Digital Institute: responsible AI in public-sector automation; human oversight requirements for agentic deployments in social care and benefit allocation.
  - Leeds: AI Ethics Centre research on [[Accountability]] and [[Human-in-the-Loop]] mechanisms in agentic deployments affecting employment.
  - Oxford: AI governance and long-horizon safety research relevant to agentic AI's implications for human control.
  - Cambridge: Leverhulme Centre for the Future of Intelligence addresses social dimensions of agentic automation.

  **Industry ecosystem:**
  - London: the dominant UK hub for agentic AI commercial development; home to Wayve, Synthesia, PolyAI, Faculty Science, Onfido, DeepMind, and Anthropic's European office.
  - Manchester: growing fintech agentic AI cluster; NatWest and Barclays both run agentic AI labs in Manchester.
  - Cambridge: Aveva (industrial agentic AI), ARM (agentic AI chip optimisation for edge inference), numerous deep-tech spinouts from Cambridge ML group.
  - Edinburgh: Skyscanner (travel agentic workflows), Wolfram Research Europe (agentic symbolic computation), FanDuel (sports betting agentic risk management).
  - Leeds and Sheffield: industrial agentic AI applications in manufacturing process automation through the Advanced Manufacturing Research Centre (AMRC) and the Royce Institute.

  ## Future Directions (2026–2030)

  **Reliability engineering at enterprise scale:**
  - Cascading confidence scoring: accumulating reliability estimates across steps and triggering [[Human-in-the-Loop]] escalation when confidence falls below defined thresholds.
  - Compositional formal verification: proving that certain execution paths cannot lead to specified harmful states, analogous to software model checking.
  - Adaptive planning with error correction: detecting and correcting errors earlier in execution chains before they compound into irrecoverable failures.
  - The 2025 practitioner survey finding — favouring shorter, constrained task workflows over open-ended long-horizon agents — will be reversed as reliability engineering matures toward production-grade guarantees.
  - Target: sub-5% failure rates on enterprise task suites by 2028, enabling unmonitored batch processing of large-volume business tasks.

  **Standardised evaluation and certification:**
  - Domain-specific enterprise benchmarks: WorkArena (ServiceNow knowledge work), FinAgent (financial analysis and compliance), MedAgent (clinical decision support with safety constraints), SecAgent (security operations).
  - These benchmarks will inform certification frameworks that enterprise compliance teams and sector regulators will demand as agentic deployments move from internal-facing pilots to customer-facing production systems.
  - ISO/IEC TC1/SC42 is under discussion for agentic AI evaluation methodology standards, analogous to ISO/IEC 25000 software quality standards.
  - Regulatory conformity assessment pathways for agentic AI systems are expected in the planned UK AI Governance Bill (2026–2027).

  **Agentic security as an engineering discipline:**
  - Tool call signing: cryptographic authentication of tool responses to detect injection of hostile content.
  - Semantic input validation layers: LLM-based filters that detect injected instructions in tool outputs before they reach the main reasoning context.
  - Sandboxed tool execution environments: containerised tool runtimes that prevent escapes from intended tool boundaries and limit damage from compromised tool responses.
  - Formal threat models: MCP-38 threat taxonomy (2026) and OWASP LLM Top 10 (updated 2025) provide the foundation for standardised agentic security engineering practices.
  - The Microsoft-published guidance on MCP [[Prompt Injection]] defence (2025) is the current industry reference for production defensive architecture.

  **Compound and hierarchical agent systems:**
  - Strategic-tactical-operational agent hierarchies operating at different time horizons and granularity levels.
  - Heterogeneous model composition: cloud-hosted frontier models for strategic planning; local open-weight models for cost-sensitive tactical execution.
  - Formal interface contracts between agent levels, analogous to software API contracts, enabling independent testing and verification of each level.
  - [[Multi-Agent Systems]] frameworks supporting dynamic topology: agent graphs that restructure themselves based on task characteristics and resource availability.

  **Persistent long-running agents:**
  - Reliable durable state management across multiple model version upgrades mid-task.
  - Long-horizon goal tracking without context drift: mechanisms to keep the agent's behaviour aligned with the original goal specification over extended operation.
  - Audit mechanisms that support regulatory accountability for decisions made days or weeks in the past.
  - [[Agent Memory]] architectures combining vector retrieval, structured knowledge graphs, and distilled episodic summaries for reliable long-horizon operation.
  - Legal and regulatory frameworks for persistent AI agents acting on behalf of organisations over extended periods.

  ## Design Patterns in Depth

  **[[ReAct Pattern]]** (Reasoning + Acting) — the atomic design pattern underlying most production agentic workflows. The model emits interleaved "Thought:" and "Action:" tokens: a Thought token contains chain-of-thought reasoning about the current state and what to do next; an Action token contains a structured tool call specification. The framework observes the tool result and appends it as an "Observation:" before generating the next Thought-Action pair. This interleaving prevents the pathological behaviour of "acting without thinking" (pure action-only approaches that ignore intermediate results) and "thinking without acting" (pure chain-of-thought that never calls tools). The ReAct paper (Yao et al., 2022) demonstrated 11-34% absolute improvement over chain-of-thought baselines on HotpotQA and FEVER benchmarks and substantially reduced the hallucination rate compared to non-action baselines on knowledge-intensive tasks.

  **[[Plan-and-Execute Pattern]]** — a two-phase pattern that separates planning (generating a complete or partial task graph in advance) from execution (carrying out the plan step by step, revising when observations reveal that the plan assumptions were incorrect). Planning phase uses tree-of-thought or MCTS-style deliberation to generate multiple candidate plans and select the best; execution phase uses reactive step-by-step loop. The separation is valuable because planning benefits from lookahead (considering future steps before committing to current ones) while execution benefits from reactivity (adapting to unexpected tool outputs). LangGraph's conditional-edge graphs naturally represent plan-and-execute topologies, with plan nodes generating step sequences and execution nodes iterating through them with conditional revision branches.

  **[[Reflection Pattern]]** — adds a self-critique or self-improvement step either within a task (inter-step reflection, as in Reflexion — Shinn et al., 2023) or across task attempts (cross-episode reflection, as in Voyager — Wang et al., 2023). Reflexion stores verbal feedback from the evaluator about why a task failed and prepends this to the system prompt on the next attempt, improving performance by 22% on HumanEval coding tasks and 20% on AlfWorld text-game tasks compared to single-attempt baselines. Voyager generates, tests, and curates a "skill library" of reusable JavaScript code snippets in Minecraft, enabling agents to accumulate compound capability across episodes rather than restarting from scratch on each task. The reflection pattern is particularly valuable for open-ended tasks where the stopping criterion is quality rather than objective completion, enabling iterative improvement to a quality threshold.

  **Subagent Delegation and Orchestration Topologies** — complex agentic workflows decompose tasks across specialist agents organised in one of several canonical topologies. Hierarchical orchestration (planner → specialist workers → result aggregator) enables parallelism, specialisation, and scale but introduces coordination overhead and cascading failure risk. Peer-to-peer debate (two or more agents arguing opposing positions, with a judge agent) exploits the computational asymmetry between generating positions and detecting flaws, improving factual accuracy by 11-23% on knowledge-intensive tasks (Du et al., 2023). Swarm topologies (many lightweight parallel agents, aggregated by a reducer) maximise throughput for parallelisable tasks but require aggregation logic and are susceptible to majority-error amplification. Pipeline chains (agent A → agent B → agent C, with structured handoffs) are the simplest multi-agent pattern and the most reliable, at the cost of sequential execution with no parallelism.

  ## Challenges and Risk Engineering

  **Error Compounding and Recovery** — mistakes in early steps may not surface until many steps later, at which point the agent's accumulated context and committed actions may make recovery expensive or impossible. Mitigation strategies include step-level validation (executing a lightweight check-agent on each tool output before proceeding), explicit rollback mechanisms (LangGraph's checkpointing allows rewinding to a prior state), and confidence thresholds that trigger [[Human-in-the-Loop]] escalation when the agent's expressed uncertainty exceeds a defined level. The GAIA benchmark's hardest tasks (Level 3) have completion rates below 40% for frontier agents precisely because they require long dependency chains where early errors cascade without detection.

  **[[Prompt Injection]] Attack Surface** — the surface for hostile content injection in agentic workflows is substantially larger than in single-turn systems because the agent retrieves and processes content from arbitrary external sources: web pages, documents, database records, API responses. Greshake et al. (2023) demonstrated that hostile instructions embedded in web pages retrieved during an agent's research task could hijack the agent to perform unintended actions (exfiltrating conversation history, sending emails to unintended recipients, modifying files). The attack requires no access to the agent's system prompt or model weights — only the ability to place hostile content in a location the agent will retrieve. Defence strategies include semantic input validation (LLM-based filters on tool outputs), sandboxed tool execution (preventing tool outputs from reaching the main prompt directly), instruction hierarchy (rigidly distinguishing user-provided goals from tool-provided observations in the model's attention), and output monitoring (independent agents that review proposed actions before execution).

  **[[Context Window]] Management and Saturation** — long-running workflows accumulate tool outputs that progressively consume the [[Context Window]], degrading reasoning quality as the most relevant prior context is pushed out by newer but less important content. Management strategies include: summarisation (periodically compressing accumulated context into a dense summary, discarding raw tool outputs); external [[Agent Memory]] with [[Retrieval-Augmented Generation]] (storing detailed tool outputs in a [[Vector Database]] and retrieving relevant portions as needed); selective context (including only the most recent N steps plus key information extracted by a compression agent); and hierarchical context (maintaining detailed local context per sub-task and only a summary at the orchestration level). The optimal strategy depends on task structure: sequential tasks benefit from summarisation; tasks with long-range dependencies between early and late steps require selective retrieval of earlier details.

  **Latency, Cost, and Efficiency** — chained [[LLM Inference]] calls multiply both token cost and wall-clock time. A 20-step workflow with a 2-second average inference latency per step takes 40 seconds of model inference time, excluding tool execution latency; with tool latencies (web search: 0.5–2s; code execution: 1–30s; database query: 0.1–1s), total wall-clock time may reach several minutes. Cost optimisation strategies include: routing simpler steps to smaller, cheaper models (model cascades); caching tool results that are unlikely to change between steps; parallelising independent sub-tasks across multiple agents; and compressing intermediate representations to reduce token count. Gartner projects that by 2028, 60% of agentic workflow costs will be optimised through model routing and caching, driven by the economic pressure of scale deployments processing millions of tasks daily.

  ## Standards Context

  No formal international standards body has yet ratified a specification specifically governing agentic workflow architecture (as of mid-2026), but several de facto and emerging standards are shaping practice. The [[Model Context Protocol]] (MCP), published by Anthropic in November 2024 and now an open specification under active community development, defines structured protocols for tool discovery, invocation, and result handling that are broadly compatible with [[Function Calling]] conventions across Claude, GPT-4o, and Gemini models. The OpenAI Agents SDK's "handoff" abstraction and [[LangGraph]]'s state-graph representation are competing conventions for expressing multi-agent topologies, with LangGraph's open-source approach and 34.5M monthly downloads giving it dominant practical adoption. IEEE P3394 (draft — Autonomous AI Agent Behaviour) addresses accountability and transparency requirements for autonomous agents, with relevance to agentic workflow governance. The [[EU AI Act]]'s GPAI provisions (effective August 2025) apply to frontier [[Large Language Models]] used as agentic reasoning engines, requiring transparency documentation and dangerous capability evaluation. The [[NIST AI RMF]] Generative AI Profile (NIST AI 600-1, 2024) addresses agentic workflow risks including hallucination propagation, data provenance of tool-retrieved content, and harmful action execution risks.

  ## Evaluation and Benchmarking

  Assessing multi-step agent performance requires end-to-end task benchmarks measuring goal achievement, not just output quality. The principal benchmarks as of 2026 are:

  - **[[SWE-bench]] Verified** — 500 human-validated real GitHub issue-fix pairs. Frontier agent performance: Claude Opus 4.7 at 87.6% (early 2026), up from the 2022 baseline of under 5% for single-pass approaches. SWE-bench Lite (300 issues, easier subset) sees even higher scores, creating ceiling effects. SWE-bench Multimodal (2025) adds visual UI bugs requiring screenshot analysis.
  - **WebArena** — five simulated web platforms (Reddit, OpenStreetMap, GitLab, online shopping, CMS) with 812 tasks requiring multi-step browser interaction. Baseline (GPT-4V): 14.41%. Best 2025 result: 61.7%. Major challenges: long-horizon planning across sessions, multi-application coordination, and handling of pop-ups and dynamic UI elements.
  - **τ-bench** (tau-bench) — retail and airline domain multi-turn conversations requiring policy adherence in addition to task completion. Tests whether agents can follow complex natural-language business rules embedded in system prompts while simultaneously completing user requests. More representative of real enterprise deployment than purely technical benchmarks.
  - **GAIA** — multi-step general assistant tasks requiring web search, document analysis, code execution, and multi-hop reasoning in combination. Level 3 tasks (requiring 20+ reasoning steps across diverse tools) have completion rates below 40% for frontier agents, representing the current reliability ceiling for open-ended long-horizon tasks.
  - **AgentBench** — eight environments including operating system interaction, database management, web browser, web shopping, house-holding (ALFWorld), and competitive programming. Provides comprehensive coverage of the tool interaction landscape relevant to enterprise deployment.
  - **WorkArena** — 33 atomic tasks on ServiceNow, evaluating knowledge worker AI capabilities in realistic enterprise software environments. First benchmark specifically designed for internal enterprise agent use cases rather than general assistant or coding tasks.

  A key methodological challenge in agentic benchmarking is the gap between controlled benchmark performance and production reliability: benchmark tasks have clear success criteria and are drawn from distributions similar to training data, while production tasks are open-ended, drawn from a long tail of unusual situations, and occur in live environments with unpredictable external state. The 2025 practitioner survey found that teams building production agents routinely observe 20-40% failure rates on tasks that benchmark-equivalent agents handle at 80-90%, driven by the brittleness of agent behaviour to edge cases in real tool outputs, unusual user inputs, and API errors not present in evaluation environments.

  ## Relationship to Adjacent Paradigms

  **Versus [[Single-Turn Inference]]** — single-turn systems receive a fixed input and produce a single output in one forward pass. They are faster, cheaper, and more reliable but fundamentally limited to tasks that can be completed in one step from available context. Agentic workflows extend the operational envelope to multi-step tasks requiring iterative information gathering, but pay a cost in latency, expense, and reliability. The two paradigms coexist in production: most user interactions are still handled by single-turn inference; complex, valuable tasks that justify the overhead are delegated to agentic workflows.

  **Versus [[Robotic Process Automation]]** — classical RPA tools automate fixed procedural sequences through deterministic scripting: clicking UI elements in a specified sequence, reading structured fields from forms, writing to specified locations. RPA is brittle to UI changes, cannot handle natural language variability in document content, and cannot recover from unexpected states. Agentic workflows handle these failure modes through natural language reasoning but introduce their own reliability challenges. Enterprise deployments increasingly combine RPA (for well-understood, high-volume, stable processes) with agentic workflows (for exception handling, document understanding, and novel process types), with the agentic layer handling cases that the RPA layer cannot.

  **Versus Traditional [[Workflow Automation]]** — traditional workflow systems (Zapier, n8n, Apache Airflow, Temporal) execute deterministic DAGs of predefined actions triggered by events, with branching logic specified at design time. They are reliable, auditable, and well-understood but require explicit specification of all possible states and transitions. Agentic workflows handle open-ended goals without pre-specifying action sequences, enabling operation in domains where the required actions are not known in advance. Hybrid architectures — using traditional workflow systems to orchestrate and sequence agentic tasks, with the agentic components handling the variable-structure parts of each workflow — are the dominant enterprise integration pattern in 2026.

  **Versus [[Reinforcement Learning]]** — RL agents learn action policies through trial-and-error interaction with an environment, optimising cumulative reward. Agentic workflows are typically not learned end-to-end but instead rely on the pre-trained capabilities of foundation models. RL training for agent-specific skills (fine-tuning on successful agentic trajectories, training reward models on task completion) is an active research direction that bridges the paradigms. OpenAI's o-series reasoning models (o1, o3, o4) use extended chain-of-thought generation with RL-from-human-feedback optimisation of the reasoning trace, representing a hybrid approach that improves agentic task performance by training the model to reason more effectively within the tool-call loop structure.

  ## Key Institutions and Ecosystem Actors

  **Framework developers:**
  - LangChain / LangGraph (Harrison Chase, open source, 34.5M monthly downloads)
  - OpenAI (Agents SDK, released March 2025, 10.3M monthly downloads)
  - Microsoft (AutoGen, open source, conversational multi-agent coordination)
  - CrewAI (João Moura, open source, role-based crew architectures)
  - Hugging Face (Smolagents, open source, lightweight minimalist agents)
  - Google (Agent Development Kit / ADK, Apache-licensed open source, 2026)
  - AWS (Strands, open source, 2026, serverless agentic execution)
  - Cognition AI (Devin autonomous coding agent, closed commercial)

  **Infrastructure providers:**
  - Anthropic (Claude family models, MCP specification authorship, Claude Code agent)
  - OpenAI (GPT-4o, o3/o4 reasoning models, GPT Assistants API)
  - Google (Gemini 1.5/2.0 models, Vertex AI Agent Builder)
  - AWS (Bedrock Agents, Bedrock Knowledge Bases for RAG)
  - Azure (AI Foundry agentic capabilities, GitHub Copilot Workspace)
  - Databricks (MosaicAI agentic evaluation and deployment framework)

  **Evaluation and safety organisations:**
  - UK AI Security Institute (AISI — ControlArena evaluation framework for agentic safety)
  - Apollo Research (scheming, autonomy, and deceptive alignment evaluations)
  - ARC Evals / Alignment Research Center (dangerous capability evaluations in agentic contexts)
  - Scale AI (GAIA benchmark authorship; agentic task data annotation)
  - Cohere (Command R+ agentic deployments; retrieval-augmented reasoning)

  **Academic research groups:**
  - Stanford CRFM (HELM evaluation framework; agent evaluation methodology)
  - Berkeley AI Research (BAIR; Gorilla function-calling benchmark; safety in agentic systems)
  - CMU (SWE-bench, WebArena, AgentDojo co-development)
  - MIT CSAIL (agent planning under uncertainty; compositional goal structures)
  - Princeton NLP (ReAct authorship; GAIA benchmark)
  - Alan Turing Institute (UK agentic AI governance research; ControlArena advisory)

  **UK-specific ecosystem:**
  - Wayve (autonomous driving using agentic AI for scene understanding, London)
  - Synthesia (video generation with agentic content management pipelines, London)
  - PolyAI (conversational agentic customer service, London, Cardiff research)
  - Faculty Science (public-sector agentic AI for NHS and HMRC, London)
  - Aveva (industrial agentic AI for manufacturing and energy, Cambridge)
  - Babylon Health (clinical agentic AI for GP triage, founded London)
  - Deep Render (video compression with agentic optimisation loops, London)

  ## Research and Literature

  1. Yao, S., Zhao, J., Yu, D., et al. (2022). ReAct: Synergizing Reasoning and Acting in Language Models. NeurIPS 2022. arXiv:2210.03629.
  2. Wei, J., Wang, X., Schuurmans, D., et al. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. NeurIPS 2022. arXiv:2201.11903.
  3. Wang, G., Xie, Y., Jiang, Y., et al. (2023). Voyager: An Open-Ended Embodied Agent with Large Language Models. arXiv:2305.16291.
  4. Park, J.S., O'Brien, J., Cai, C.J., et al. (2023). Generative Agents: Interactive Simulacra of Human Behavior. CHI 2023.
  5. Hong, S., Zhuge, M., Chen, J., et al. (2024). MetaGPT: Meta Programming for Multi-Agent Collaborative Framework. ICLR 2024. arXiv:2308.00352.
  6. Jimenez, C.E., Yang, J., Wettig, A., et al. (2024). SWE-Bench: Can Language Models Resolve Real-World GitHub Issues? ICLR 2024. arXiv:2310.06770.
  7. Zhou, S., Xu, F.F., Zhu, H., et al. (2024). WebArena: A Realistic Web Environment for Building Autonomous Agents. ICLR 2024. arXiv:2307.13854.
  8. Liu, X., Yu, H., Zhang, H., et al. (2023). AgentBench: Evaluating LLMs as Agents. arXiv:2308.03688.
  9. Yao, S., Yu, D., Zhao, J., et al. (2023). Tree of Thoughts: Deliberate Problem Solving with Large Language Models. NeurIPS 2023. arXiv:2305.10601.
  10. Shinn, N., Cassano, F., Gopinath, A., et al. (2023). Reflexion: Language Agents with Verbal Reinforcement Learning. NeurIPS 2023. arXiv:2303.11366.
  11. Greshake, K., Abdelnabi, S., Mishra, S., et al. (2023). Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection. IEEE S&P Workshop 2023. arXiv:2302.12173.
  12. Ruan, Y., Dong, H., Wang, A., et al. (2024). Identifying the Risks of LM Agents with an LM-Emulated Sandbox. ICLR 2024. arXiv:2309.15817.
  13. Debenedetti, E., Zhang, J., Balunovic, M., et al. (2024). AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defences for LLM Agents. NeurIPS 2024. arXiv:2406.13352.
  14. Anthropic (2024). Model Context Protocol Specification. anthropic.com/mcp.
  15. Chase, H. (2022). LangChain: Building Applications with LLMs through Composability. GitHub Repository. github.com/langchain-ai/langchain.
  16. Mialon, G., Fourrier, C., Swift, C., et al. (2023). GAIA: A Benchmark for General AI Assistants. arXiv:2311.12983.
  17. Yao, S., Liu, T., Xu, F.F., et al. (2024). τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains. arXiv:2406.12045.
  18. OpenAI (2025). OpenAI Agents SDK Documentation. platform.openai.com/docs/agents.
  19. Pan, A., et al. (2025). Survey of AI Agent Practitioners: Reliability as the Dominant Barrier to Enterprise Adoption. arXiv:2511.14136.
  20. National Institute of Standards and Technology (2024). Artificial Intelligence Risk Management Framework: Generative AI Profile (NIST AI 600-1). NIST.
  21. European Parliament and Council (2024). Regulation (EU) 2024/1689 on Artificial Intelligence (EU AI Act). Articles 51–55 (GPAI).
  22. Checkmarx Zero (2025). 11 Emerging AI Security Risks with Model Context Protocol. Checkmarx Security Research.
  23. Rao, A.S. and Georgeff, M.P. (1991). Modeling Rational Agents within a BDI-Architecture. Proceedings of the Second International Conference on Principles of Knowledge Representation and Reasoning.
  24. Schick, T., Dwivedi-Yu, J., Dessì, R., et al. (2023). Toolformer: Language Models Can Teach Themselves to Use Tools. NeurIPS 2023. arXiv:2302.04761.
  25. Anthropic (2025). Claude Sonnet 4.5 System Card. Anthropic Model Card.
  26. Gartner (2025). Top Strategic Technology Trends 2026: Agentic AI. Gartner Research Report.
  27. LangChain (2026). LangGraph Production Adoption Report: 34.5M Monthly Downloads. langchain.com/resources.
  28. Alan Turing Institute (2026). UK AI Governance Country Profile. turing.ac.uk.
  29. Du, Y., Li, S., Torralba, A., Tenenbaum, J.B., and Mordatch, I. (2023). Improving Factuality and Reasoning in Language Models through Multiagent Debate. arXiv:2305.14325.
  30. Yang, J., Prabhakar, A., Narasimhan, K., and Yao, S. (2024). SWE-Agent: Agent-Computer Interfaces Enable Automated Software Engineering. arXiv:2405.15793.
  31. Gao, L., Madaan, A., Zhou, S., et al. (2023). PAL: Program-Aided Language Models. ICML 2023. arXiv:2211.10435.
  32. Fikes, R. and Nilsson, N. (1971). STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving. Artificial Intelligence, 2(3–4), 189–208.
  33. Microsoft (2025). Protecting Against Indirect Prompt Injection Attacks in MCP. Microsoft for Developers Blog.
  34. Cognitive Systems Research Consortium (2026). MCP-38: A Comprehensive Threat Taxonomy for Model Context Protocol Systems v1.0. arXiv:2603.18063.
  35. UK Government (2025). National AI Compute Strategy: £2 Billion Roadmap for AI Growth Zones. DSIT Report.
  36. NHS England (2025). AI in NHS Administration: Pilot Evaluation Report — Agentic Workflow Deployments in Scheduling and Clinical Coding. NHS AI Lab.
  37. Gartner (2025). Predicts 2026: Artificial Intelligence. Gartner Research. (40% of enterprise applications will feature task-specific AI agents by end 2026.)

- ### Provenance
  - sources:: Yao et al. "ReAct" (arXiv:2210.03629); Wei et al. "Chain-of-Thought" (arXiv:2201.11903); Jimenez et al. "SWE-Bench" (arXiv:2310.06770); Pan et al. enterprise survey (arXiv:2511.14136); Anthropic MCP specification (2024); OpenAI Agents SDK docs (2025); Gartner Top Trends 2026; LangChain adoption data (2026); Greshake et al. prompt injection (arXiv:2302.12173); EU AI Act 2024/1689; NIST AI 600-1 (2024); Alan Turing Institute UK AI Governance Profile (2026)
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm