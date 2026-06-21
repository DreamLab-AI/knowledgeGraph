- ### Definition
  - Agentic AI refers to AI systems characterised by autonomy, goal-directedness, and the capacity to take sustained sequences of actions — including calling external tools, spawning sub-agents, and modifying their own environment — in pursuit of high-level objectives specified by a user or orchestrator, without requiring per-step human instruction. The architectural backbone is typically a [[Large Language Models]] serving as a cognitive core inside a closed sense-plan-act loop, augmented by [[Memory Management]] stores, [[Tool Use]] registries, and inter-agent communication protocols. Agentic systems differ fundamentally from [[Conversational AI]] and [[Reactive System]] architectures in that they maintain persistent state across arbitrarily long task horizons, initiate actions proactively, plan and re-plan in response to environmental feedback, and may interact with external services, file systems, APIs, databases, and other agents. The concept encompasses both single-agent pipelines — one [[Foundation Models]] instance with many tools — and heterogeneous [[Multi-Agent Systems]] architectures in which agentic components collaborate, critique, or are hierarchically orchestrated under a planner model. Agentic systems rely on [[Agent Memory]] to accumulate episodic, semantic, and procedural knowledge across steps; on [[Task Planning]] for goal decomposition; on [[Chain of Thought]] or extended reasoning traces for transparent intermediate cognition; on [[Orchestration]] for coordinating concurrent sub-agent threads; and on the [[ReAct Pattern]] (Reasoning + Acting) for interleaving thought and action within a single generation pass. The architectural emergence of agentic AI during 2024–2026 marked a pivotal transition in applied artificial intelligence: from systems that answer questions to systems that complete work, fundamentally reshaping productivity in software engineering, research, data analysis, legal services, and enterprise process automation.

- ### Semantic Classification
  - owl-class:: ai:AgenticAI
  - owl-role:: ExecutableProtocol | Concept | LearningParadigm
  - owl-inferred:: ai:AutonomousSystem, ai:GoalDirectedAgent, ai:LLMOrchestrationPattern, ai:MultiStepReasoningSystem
  - belongs-to-domain:: [[AI-GroundedDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[AI Agents]], [[Cognitive Architecture]], [[Agent-Based Modelling]], [[AI Application]]
  - has-part:: [[Agent Loop]], [[Tool Registry]], [[Working Memory]], [[Agent Orchestrator]], [[Agent Runtime]], [[Agent Memory]], [[Task Planning]]
  - requires:: [[Large Language Models]], [[Tool Use]], [[Memory Management]], [[Task Planning]], [[Foundation Models]]
  - enables:: [[Autonomous Agent]], [[Multi-Agent System]], [[Workflow Automation]], [[Software Engineering Automation]], [[Agentic RAG]], [[Agentic Workflow]], [[AI Agent Payments]]
  - implements:: [[ReAct Pattern]], [[Chain of Thought]], [[Function Calling]], [[Model Context Protocol]], [[Reflexion]]
  - depends-on:: [[Foundation Models]], [[Vector Database]], [[Retrieval-Augmented Generation]], [[Embedding Model]], [[Transformer Architecture]]
  - supports:: [[Human-in-the-Loop]], [[AI Safety]], [[AI Alignment]], [[Prompt Injection]] prevention
  - uses:: [[Function Calling]], [[Chain of Thought]], [[Reinforcement Learning]], [[Model Context Protocol]], [[Prompt Engineering]], [[Knowledge Graph]], [[Agent Communication Protocol]]
  - contrasts-with:: [[Conversational AI]], [[Reactive System]], [[Robotic Process Automation]], [[Single-Turn Inference]]
  - related-to:: [[AI Agents]], [[Orchestration]], [[AI Alignment]], [[Agent Communication Protocol]], [[Agent Identity]], [[Natural Language Processing]], [[Computer Vision]], [[AI Agent Payments]], [[Prompt Injection]], [[Agent-to-Agent Protocol]]
  - bridges-to:: [[Robotic Process Automation]], [[Digital Twin]], [[Agent-Based Modelling]], [[Internet of Agents]]
  - standardized-by:: [[Model Context Protocol]], [[EU AI Act]], [[Agent Frameworks]], [[NIST AI RMF]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:hasPart ai:AgentLoop))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:hasPart ai:ToolRegistry))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:hasPart ai:WorkingMemory))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:hasPart ai:AgentOrchestrator))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:hasPart ai:AgentRuntime))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:hasPart ai:AgentMemory))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:hasPart ai:TaskPlanner))
  ## Dependency Relationships
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:requires ai:ToolUse))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:requires ai:MemoryManagement))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:requires ai:TaskPlanning))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:dependsOn ai:FoundationModel))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:dependsOn ai:VectorDatabase))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:dependsOn ai:RetrievalAugmentedGeneration))
  ## Capability Relationships
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:enables ai:AutonomousAgent))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:enables ai:MultiAgentSystem))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:enables ai:WorkflowAutomation))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:enables ai:SoftwareEngineeringAutomation))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:enables ai:AgenticRAG))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:enables ai:AgenticWorkflow))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:enables ai:AIAgentPayments))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:supports ai:HumanInTheLoop))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
  ## Implementation Relationships
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:implements ai:ReActPattern))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:implements ai:ChainOfThought))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:implements ai:FunctionCalling))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:implements ai:ModelContextProtocol))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:uses ai:ReinforcementLearning))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:uses ai:PromptEngineering))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:uses ai:KnowledgeGraph))
  ## Reduction Relationships
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:reducesTo ai:ConversationalAI))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:reducesTo ai:ReactiveSystem))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:contrastsWith ai:RoboticProcessAutomation))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:contrastsWith ai:SingleTurnInference))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:bridgesTo ai:DigitalTwin))
      SubClassOf(ai:AgenticAI
        ObjectSomeValuesFrom(ai:bridgesTo ai:AgentBasedModelling))

  ## About
    Agentic AI represents the third major inflection point in applied artificial intelligence, following the expert-systems era of the 1980s–90s and the deep-learning revolution of 2012–2022. Where earlier AI paradigms focused on single-step prediction or conversational response, agentic systems close the loop between perception, reasoning, and action, allowing a [[Foundation Models]] to pursue multi-step objectives across time horizons that were previously tractable only for human workers. The core architectural insight is the **sense-plan-act loop**: the agent observes the current state of the environment (through tool outputs, retrieved documents, or external API responses), reasons about the best next action using the language model's parametric knowledge plus retrieved context, executes that action, and then iterates until a goal criterion is satisfied or a step budget is exhausted. This loop is implemented in frameworks such as LangGraph, AutoGen, CrewAI, and the OpenAI Agents SDK, each of which provides state management, tool-calling conventions, error recovery, and inter-agent messaging primitives.

    The shift to agentic paradigms is grounded in the emergent capabilities of frontier [[Foundation Models]] — specifically their capacity for few-shot instruction following, structured [[Chain of Thought]] reasoning, and reliable [[Function Calling]]. Prior to the GPT-4 era, language models lacked the consistency needed to drive reliable tool-use loops over many steps; errors would compound and the agent would drift from its goal. The reliability threshold was crossed somewhere in 2023–2024, enabling the first production-ready agentic deployments. This threshold is not binary: different tasks require different reliability levels, and agent architectures are typically designed with task complexity in mind. Simple retrieval-and-answer agents can tolerate modest per-step error rates; software engineering agents operating on production codebases require substantially higher reliability because code compilation failures give deterministic negative signal. The iterative nature of the agentic loop — try, observe feedback, revise — provides a natural error-correction mechanism that single-shot inference cannot exploit, which is why agentic systems outperform their backbone models on long-horizon tasks by wide margins.

    The empirical evidence for agentic AI's productivity impact has become compelling by 2026. On the SWE-Bench Verified benchmark — which tests end-to-end software issue resolution on real GitHub repositories — the leading agentic systems reached 80.9% success rates by mid-2026 (Claude Opus 4.5 with agentic scaffolding), compared to under 4% for the best non-agentic models in 2023. This represents roughly a 20x improvement in three years, driven equally by stronger backbone models and better agentic scaffolding — the distinction being that architecture improvements (better tool-use prompting, explicit planning, reflection loops) are often reusable across model generations. McKinsey's 2025 global survey found that enterprises deploying agentic AI reported 23–40% productivity gains in knowledge-work tasks, though only one in nine organisations that had adopted agents at all was running them in production at scale — the gap between exploration and production remaining the defining challenge of the field. Deloitte's 2025 projection estimated that 50% of enterprises using generative AI would deploy autonomous agents by 2027, doubling from 25% in 2025. Gartner's concurrent projection estimated 40% of enterprise applications would include task-specific AI agents by end-2026, up from less than 5% in 2025, while cautioning that over 40% of agentic AI projects would be cancelled by 2027 due to unclear value definition and poor risk management.

    The economics of agentic AI deployment are more complex than single-inference deployments because each agent step incurs inference costs, tool-call costs, and orchestration overhead. A typical software engineering agent solving a medium-complexity GitHub issue consumes 50,000–200,000 tokens across 20–80 reasoning and tool-call steps, compared to 2,000–5,000 tokens for a single-turn response to a simpler question. This cost profile means agentic AI is economically viable only when the task has sufficient value — which is true for software engineering (where a successfully resolved issue might save 2–8 hours of engineer time) but requires careful cost-benefit analysis for lower-value automation targets. Token costs have fallen approximately 10-fold between 2023 and 2026 across frontier model providers, substantially widening the set of economically viable agentic use cases.

    The safety profile of agentic AI diverges sharply from earlier AI modalities because agents can take real-world actions with irreversible consequences: sending emails, committing code, executing financial transactions, or deleting files. Key risk categories include **prompt injection** (malicious content in tool outputs — web pages, database records, email bodies — hijacking the agent's objective or exfiltrating data), **cascading failures** in multi-agent topologies (an error in one agent propagating to downstream agents before error-recovery logic triggers), **excessive agency** (the agent acquiring resources or capabilities beyond task scope, analogous to privilege escalation), and **goal misalignment over long horizons** (the agent pursuing a misspecified proxy objective that diverges from the user's intent as task steps accumulate). Anthropic's model specification establishes the **minimal-footprint principle** as a central agentic safety norm: agents should request the minimum permissions needed for the current step, prefer reversible actions over irreversible ones, and pause to seek [[Human-in-the-Loop]] confirmation when uncertainty is high or stakes are irreversible. The **EU AI Act** (2024) subjects agentic systems operating in high-risk domains — employment, credit, education, law enforcement, critical infrastructure — to mandatory conformity assessment, audit trail requirements, and controlled autonomy constraints. NIST's AI 100-2 E2025 (March 2025) explicitly catalogued agentic attack vectors including prompt injection and multi-agent RAG attacks, and NIST's AI Agent Standards Initiative (February 2026) is developing formal security standards expected to become the US regulatory baseline by 2027–2028. The [[AI Alignment]] dimension of agentic AI is qualitatively different from alignment in conversational systems: in a conversational setting, a misaligned response is immediately visible to a human; in an agentic setting, a misaligned action may have already modified the environment before any human reviews it, making detection and recovery substantially harder.

  ## Components / Architecture
    **Agent Loop (sense-plan-act cycle)**

    The agent loop is the fundamental architectural unit of any agentic system. Unlike a single LLM inference call, which maps one input prompt to one output, the agent loop is a stateful process that persists across many inference calls, maintaining a running representation of task state and environment observations. The loop has four logical phases that may execute many times before task completion:

    The **perception layer** reads environment state from tool outputs, retrieved documents, user messages, and event streams, then converts raw observations into structured prompt context. This is more complex than it appears: tool outputs vary in format (JSON, text, code, images), length (from a brief status code to a thousand-line document), and reliability (web search results may contain contradictory information; code execution outputs may include multi-page stack traces). Effective perception involves parsing, filtering, and summarising observations to extract what is signal vs. noise before it enters the reasoning context. Frameworks differ in how they handle this: some append raw tool outputs verbatim; others apply a separate summarisation step to prevent context window overflow.

    The **reasoning layer** is the [[Large Language Models]] backbone, which processes the current context — including task goal, prior steps, current observations, and available tools — to produce a next-action decision. The quality of this reasoning determines agent reliability. Critically, the reasoning layer may emit a chain-of-thought trace before the action decision, externalising intermediate reasoning steps that can later be inspected for debugging, auditing, or distillation into future model training data. When [[Chain of Thought]] is enabled and well-prompted, the model's reasoning trace reveals which parts of the task it found ambiguous, which tool outputs it found conflicting, and how it resolved uncertainty — providing interpretability that single-step predictions do not.

    The **action execution layer** dispatches the selected action — a tool call via [[Function Calling]], an API request, a code execution command, a message to another agent, or a final answer generation — and captures the result as the next observation. Action execution is where irreversibility is introduced: writing a file, sending an email, or committing code are actions with real-world consequences that cannot easily be undone. The minimal-footprint principle mandates that agents prefer reversible intermediaries (e.g., writing to a draft folder rather than sending directly) and use sandboxed execution environments for code unless explicitly granted production access.

    The **memory subsystem** has four layers with different persistence characteristics and retrieval costs. *In-context working memory* is the current context window — bounded by the model's maximum context length (typically 128k–1M tokens in 2026 frontier models) and subject to performance degradation when heavily populated (the "lost in the middle" phenomenon, where models poorly attend to content in the middle of very long contexts). *Episodic memory* stores past steps and observations in a [[Vector Database]] indexed by [[Embedding Model]], retrieved via [[Retrieval-Augmented Generation]] into the context window when relevant — allowing agents to recall earlier steps without maintaining a full transcript. *Semantic memory* stores distilled factual knowledge in structured stores or [[Knowledge Graph]] formats that can be queried by entity or relationship rather than by semantic similarity. *Procedural memory* encodes distilled patterns, preferences, and task-specific heuristics in fine-tuned model weights or in the system prompt, making frequently used behaviours fast and reliable without consuming working memory budget.

    **[[Task Planning]]** decomposes the user's high-level goal into a structured plan — typically a sequence of sub-tasks or a DAG where some sub-tasks can be parallelised. Planning quality is the dominant determinant of agent reliability on novel tasks: a well-decomposed plan breaks the task into steps each of which is within the model's reliable capability, while a poor plan produces steps that require capabilities the model does not reliably have. Techniques include chain-of-thought prompting (the model produces the plan as part of its reasoning trace), tree-of-thoughts search (exploring multiple plan branches and selecting the most promising), MCTS-based planners (Monte Carlo Tree Search guided by a value function), and explicit hierarchical task network (HTN) decomposition using structured planning prompts.

    The **[[Tool Registry]]** is the catalogue of available tools with JSON schemas describing their parameters, human-readable descriptions used by the model to select the appropriate tool, and access credentials managed by the framework. The registry is the interface through which the agent's abstract action space maps onto concrete executable capabilities. [[Model Context Protocol]] standardises registry discovery and tool invocation, allowing agents to dynamically discover newly available tools at runtime without requiring a code change to the agent itself.

    The **[[Agent Orchestrator]]** coordinates multi-agent topologies: it routes sub-tasks to appropriate specialist agents, manages concurrency (spawning parallel worker agents and collecting their results), handles failures (detecting when a worker agent has failed or exceeded its budget and triggering fallback strategies), aggregates results from multiple agents, and enforces the [[Human-in-the-Loop]] checkpoints required for high-stakes actions.

    **Architectural patterns — detailed comparison**

    *Single-agent loop* deploys one model instance with access to many tools in a flat tool registry. It offers the highest coherence (the agent has full context of all prior steps) and the simplest debugging story, but is bounded by the sequential nature of tool calls and the context window limit on episodic memory. Suitable for complex but sequential tasks like writing and debugging a medium-complexity program.

    *Hierarchical orchestration* uses a planner (orchestrator) model that decomposes the task and delegates sub-tasks to specialist worker agents, each of which operates in a narrower scope with a more focused tool registry. The orchestrator sees only the summaries of worker outputs, not full transcripts, enabling scaling to tasks too large for a single context window. Used in AutoGen's GroupChat with manager, CrewAI's role-based crews, and LangGraph's supervisor patterns.

    *Peer-to-peer multi-agent* systems have agents negotiate, critique, or verify each other's outputs without a central orchestrator. Used in debate architectures (two agents argue opposing positions, a judge synthesises), reflection architectures (a critic agent reviews the primary agent's output and suggests improvements), and red-team architectures (an adversarial agent attempts to find flaws in the primary agent's plan). This pattern improves output quality but requires careful inter-agent communication protocol design to prevent deadlock or infinite negotiation loops.

    *Swarm* architectures deploy large numbers (dozens to thousands) of lightweight agents operating in parallel on independent sub-tasks, with a reducer agent aggregating results. This pattern maximises throughput for highly parallelisable tasks (e.g., analysing thousands of documents simultaneously) but requires robust reducer logic and incurs high coordination overhead. Claude Flow's swarm mode is a representative implementation.

    *[[Human-in-the-Loop]] checkpoints* are deliberate pauses inserted before irreversible or high-stakes actions, where the agent presents its intended action and awaits human confirmation before proceeding. These checkpoints are mandatory for high-risk [[EU AI Act]] classifications and recommended by Anthropic's minimal-footprint principle for any action with significant real-world consequences. LangGraph's interrupt mechanism provides native support for HITL checkpoints in stateful agent graphs.

    *[[ReAct Pattern]]* (Reasoning + Acting) is the dominant single-agent prompting strategy, interleaving explicit reasoning traces ("Thought: I need to search for the latest filing...") with action calls ("Action: search(query='HMRC 2026 corporation tax guidance')") and observations in a single generation pass. ReAct's advantage is that the reasoning trace before each action allows the model to plan the action using its full knowledge, rather than acting on a reflexive pattern match.

    *Reflexion / self-critique* patterns have the agent evaluate its own outputs against success criteria — either specified in the system prompt or inferred from the task — and self-revise before committing results. Implemented as a second generation pass where the model critiques its first draft, or as a separate critic agent in a peer-to-peer topology. Shinn et al. (2023) demonstrated that Reflexion improved agent success rates on diverse tasks by 22% relative to baseline without any gradient updates, purely through verbal self-reinforcement.

  ## Use Cases / Major Families
    **Software engineering automation** is the most benchmarked and commercially mature agentic AI application domain. Agents are given access to a code repository, a terminal for executing commands, and optionally a browser for reading documentation; they receive a task description (e.g., a GitHub issue) and are expected to produce a working code fix with passing tests. GitHub Copilot Workspace, Devin (Cognition Labs, first AI software engineer with a paid waitlist by Q3 2024), SWE-Agent (Princeton NLP), and Claude Code (Anthropic, integrated into the Claude API) represent the major production deployments. SWE-Bench Verified scores reached 80.9% by June 2026, though the harder SWE-Bench Pro variant shows scores dropping to 45.9%, reflecting the gap between curated benchmark tasks and real-world complexity. The economic case is clear: a successfully resolved GitHub issue saves 2–8 hours of engineer time at a cost of $0.50–$5.00 in API fees, making software engineering agents among the most economically compelling agentic deployments.

    **Research assistance** agents conduct autonomous literature review, hypothesis generation, experimental design, and results summarisation using web search, code execution, and document retrieval tools. Google's Gemini Deep Research synthesises long-form research reports from multiple web sources with citation; OpenAI's Deep Research (based on o3 model) provides similar functionality with stronger code execution; Perplexity Pro's research mode offers a lighter-weight variant. Academic research automation is also advancing: agents can autonomously run computational experiments, analyse results, and draft paper sections — raising significant questions about authorship attribution and peer-review integrity that the academic community is actively debating as of 2026.

    **Enterprise data analysis** deploys agents that query databases via natural language, generate and execute Python or SQL analytical code, interpret results, iterate when analysis reveals unexpected patterns, and produce formatted reports. Salesforce Agentforce's Analytics Cloud integration and Microsoft Copilot Studio's Power BI connector represent the major commercial platforms. The defining capability is iteration: where a single-shot code generation approach produces one analysis attempt that may not answer the business question, an agentic approach runs the analysis, interprets the output, identifies what additional analysis is needed, and continues until the analytical objective is met.

    **Customer support automation** replaces linear chatbot flows with adaptive agents that retrieve customer records from CRM systems, query knowledge bases for relevant policies and procedures, execute refund or rebooking actions via API calls, escalate to human agents when confidence is low, and summarise the resolution for the customer record. Zendesk, Intercom, and Freshworks have integrated agentic capabilities by 2026; Salesforce's Einstein Service Cloud and ServiceNow CSM integrate agentic AI at the platform level. The key metric is CSAT (customer satisfaction score) vs. human escalation rate — the best deployments achieve human-level CSAT on well-defined query types while reserving human agents for complex, high-emotion interactions.

    **Enterprise [[Workflow Automation]]** represents the displacement of rigid [[Robotic Process Automation]] scripts by adaptive agents. Where RPA bots are brittle — any change to a web interface or document format breaks the automation — agentic systems can interpret interface changes, handle exceptions via natural language reasoning, and adapt their approach based on observed outcomes. ServiceNow's Now Assist, UiPath's Autopilot, and Automation Anywhere's CoE AARI exemplify this transition. The addressable market is massive: the global RPA market was approximately $4 billion in 2024, and the agentic AI approach potentially captures this plus the much larger market of processes that were too complex or variable for RPA.

    **Scientific discovery** with agentic AI encompasses wet-lab robot control, autonomous experimental design, data analysis pipeline execution, and hypothesis generation from literature synthesis. Recursion Pharmaceuticals and Inceptive Nucleics deploy agent-driven drug discovery pipelines where agents propose molecular candidates, design assays, analyse results, and update the experimental plan — compressing months of human research into days. The [[Digital Twin]] connection is particularly strong here: agents that can interact with simulated environments as well as physical labs can explore a vastly larger experimental space than physical-only approaches.

    **Cybersecurity** red-team agents enumerate attack surfaces by scanning network topology and service configurations, exploit identified vulnerabilities in sandboxed environments, pivot across systems following realistic attacker paths, and generate structured remediation reports with CVSS-scored findings. Palo Alto Cortex XSIAM and CrowdStrike Charlotte AI represent production deployments; HackerOne and Bugcrowd have integrated AI-augmented penetration testing workflows. The defensive complement — agents that continuously monitor for anomalous behaviour patterns and autonomously isolate compromised systems — is advancing in parallel.

    **Legal and compliance** agents review contracts for obligation identification, risk flagging, and anomalous clause detection; analyse regulatory filings for compliance gaps; monitor regulatory update feeds for changes relevant to specific product or service profiles; and generate compliance summaries with mandatory citation to source documents. Harvey AI (founded 2022, valuation over $3 billion by 2026) and Spellbook (Rally Legal) serve the legal drafting market; Relativity's RelativityOne AI serves e-discovery; Squire Patton Boggs and Clifford Chance deployed Agentic RAG-based contract analysis tools in 2025.

  ## Academic Context
    The theoretical foundations of agentic AI draw from several intellectual traditions spanning five decades. **Classical AI planning** — STRIPS (Fikes and Nilsson 1971), PDDL (McDermott et al. 1998), Hierarchical Task Networks (Erol et al. 1994) — established the formal vocabulary of goals, states, operators, and plan-space search that modern LLM-based planners implicitly recapitulate in natural language. The BDI (Belief-Desire-Intention) agent architecture (Rao and Georgeff 1995) provided the philosophical grounding for distinguishing an agent's model of the world from its motivational and deliberative states — a distinction that maps onto the perception, planning, and action components of the modern agentic loop. **Multi-agent systems** research (FIPA standards 2001, auction-based coordination, Nash equilibria in agent interaction) provides the theoretical basis for inter-agent communication, role assignment, and incentive compatibility that is directly relevant to multi-agent [[AI Agents]] topologies. **Reinforcement learning** (Sutton and Barto 1998; Mnih et al. 2015 DQN; Schulman et al. 2017 PPO) underpins agents that improve from environmental feedback, and is increasingly applied to fine-tune the reasoning and action-selection components of LLM agents through techniques like RLHF, RLAIF, and model-based RL over agent trajectories. **Cognitive science** — in particular the ACT-R (Anderson et al.) and SOAR (Laird) cognitive architectures — informs the four-layer memory model (working/episodic/semantic/procedural) that has become standard in agentic AI design, with explicit analogies between cognitive science memory systems and their LLM implementation counterparts.

    The modern era of LLM-based agentic AI opened with the **ReAct paper** (Yao et al., ICLR 2023), which demonstrated that interleaving chain-of-thought reasoning traces with tool-call actions produced dramatically better multi-step task completion — 34% relative gain on HotpotQA, 64% relative gain on FEVER — than either reasoning or acting alone. The central insight was that externalising reasoning steps in the prompt (chain-of-thought) gave the model the ability to plan the next action using its full parametric knowledge, while tool calls grounded that reasoning in external state that the model's parametric knowledge could not reliably retrieve. The simultaneous release of AutoGPT (Significant Gravitas, March 2023) demonstrated that GPT-4 could, with suitable scaffolding, pursue goals autonomously over many steps — triggering explosive research and engineering interest, and establishing the open-source agentic AI ecosystem. Subsequent landmark papers establish the field's empirical breadth: Reflexion (Shinn et al., NeurIPS 2023) demonstrated verbal reinforcement through self-critique without gradient updates; Toolformer (Schick et al., NeurIPS 2023) showed that models could be trained via self-supervised objectives to invoke tools only when beneficial; Generative Agents (Park et al., UIST 2023) demonstrated that populations of LLM agents in a simulated social environment exhibited emergent behaviours analogous to human social dynamics; MetaGPT (Hong et al., arXiv 2023) organised multi-agent teams around software engineering role assignments. The comprehensive evaluation frameworks WebArena (Zhou et al., ICLR 2024, 812 tasks on self-hosted websites) and AgentBench (Liu et al., ICLR 2024, 8 environments including OS, database, knowledge graphs, and embodied AI) established standardised measurement of agentic capability. SWE-Bench (Jimenez et al., ICLR 2024) specifically targets real-world software engineering, becoming the de facto benchmark for coding agents by 2025. By 2025–2026, agentic AI had become the dominant research direction in applied ML, with multiple large-scale survey papers cataloguing hundreds of distinct architectures, the first textbooks appearing in draft form, and dedicated workshops at NeurIPS, ICML, and ICLR attracting hundreds of submissions.

    The **evaluation challenge** for agentic systems is qualitatively harder than for single-inference systems. Standard NLP benchmarks (GLUE, SuperGLUE, MMLU) measure single-step response quality; agentic benchmarks must measure multi-step goal achievement, side-effect avoidance, efficiency (steps and tokens to completion), and robustness to environmental perturbation. The community is still converging on evaluation methodology: WebArena and AgentBench use deterministic task-completion scoring, but this misses nuanced failures like correct final answers via incorrect reasoning paths, or agents that succeed on the benchmark by exploiting shortcuts that would not generalise to real deployment. The AURA (Agent Autonomy Risk Assessment Framework, arXiv 2510.15739) proposes a risk-orthogonal evaluation dimension — measuring not just task success but the safety characteristics of the trajectory taken — which is increasingly demanded by enterprise procurement and regulatory frameworks.

  ## Current Landscape (2026)
    As of mid-2026, the agentic AI market is defined by three major commercial platforms competing for enterprise deployment: **Salesforce Agentforce** (launched in 2024 Q4, with Atlas Reasoning Engine released 2025 Q2 enabling multi-step autonomous CRM task completion); **Microsoft Copilot Studio** (with Semantic Kernel as the underlying orchestration framework and deep Azure infrastructure integration); and **Anthropic's Claude API with the Claude Agents SDK** (providing first-class tool definitions, computer use, and multi-turn context management). OpenAI's Assistants API and the GPT-4o and o3 model families with their native tool-calling and function-calling capabilities remain a significant platform. Google's Vertex AI Agent Builder and the Gemini model family, particularly with Project Astra's multi-modal persistent memory, represent the fourth major commercial platform. The open-source ecosystem is led by **LangGraph** (LangChain), which provides production-grade stateful agent graphs with durable execution and native support for human-in-the-loop interrupts; **AutoGen 0.4** (Microsoft Research), rebuilt in 2025 with an async-first event-driven architecture for production deployments; **CrewAI** for role-based multi-agent crews with task delegation primitives; and **PydanticAI** for type-safe, testable agent construction in Python. **Dify** and **Flowise** serve the visual agent-builder market. **Bee Agent Framework** (IBM Research) and **Agent Zero** serve enterprise and open-source communities respectively.

    The **[[Model Context Protocol]]** (MCP), open-sourced by Anthropic in November 2024, achieved broad ecosystem adoption by mid-2026 as the standard for agent–tool integration, displacing the fragmented per-framework conventions that preceded it. Over 2,500 MCP server implementations were publicly available by June 2026, spanning databases (PostgreSQL, MongoDB, Snowflake), enterprise SaaS (Salesforce, Jira, GitHub, Slack), code execution environments (E2B, Modal), and specialised scientific tools (PubMed, arXiv). The MCP inspector tooling and reference server SDK made the protocol accessible to the long tail of API providers, driving rapid ecosystem expansion. The **Agent-to-Agent Protocol** (A2A, Google, 2025) proposed inter-agent communication standards complementary to MCP's agent-tool model, enabling agents built on different frameworks to collaborate — a prerequisite for the multi-agent economy.

    Benchmark performance on SWE-Bench Verified grew from 4.4% (GPT-4, zero-shot) in 2023 to 80.9% (Claude Opus 4.5 with agentic scaffolding) by June 2026, though the gap between benchmark and production performance remains significant — a 37% divergence across multiple evaluation dimensions was documented in a 2026 enterprise study. The **SWE-Bench Pro** variant, using 1,865 multi-language tasks requiring modifications averaging 107 lines of code across 4.1 files, with a 250-turn limit and identical tooling for all models, provides more realistic difficulty: Claude Opus 4.5 scores 45.9% on SEAL (the SWE-Bench Pro evaluation method) vs. 80.9% on Verified, a 35-percentage-point gap that reflects the difference between curated benchmark difficulty and real-world software engineering complexity. The **BrowserGym** ecosystem provides analogous benchmarking for web navigation agents, with 812 tasks on self-hosted websites and over 40 agents evaluated by 2026. Across benchmarks, the pattern is consistent: agentic scaffolding contributes 15–25 percentage points of performance gain beyond what the backbone model achieves with one-shot prompting, affirming that architecture — not just model capability — is a primary determinant of agentic task performance.

    Industry adoption is characterised by a 25-fold gap between enterprises that have adopted agents in some form (approximately 80%) and those running agents in production at scale (approximately one in nine, or roughly 9%). The primary production blockers are: (1) integration complexity with enterprise data systems and access controls; (2) evaluation difficulty — it is hard to know when an agent is performing well enough to trust in production; (3) cost management, particularly for high-step workflows; and (4) security concerns, specifically around prompt injection and data exfiltration via tool calls. UK-specific data from the 2025 GOV.UK AI Adoption Research found that only 7% of surveyed UK organisations had adopted agentic AI, reflecting the relatively early stage of deployment in the public and mid-market private sectors.

    Manchester was named the UK's most AI-ready city for the second consecutive year by the SAS AI Cities Index 2025, with Leeds climbing to second place driven by strong academic AI provision and over 130 AI-related university courses across three institutions. ANS (Greater Manchester) committed £3 million to AI adoption programmes in the region. Nationally, 57% of UK business leaders reported a growing productivity gap between AI adopters and non-adopters, while 50%+ of UK organisations still lacked a formal AI strategy as of mid-2026. The UK ICO published guidance in 2026 on data protection obligations for organisations deploying agentic AI, emphasising that controller responsibility extends to the full scope of agent actions including any personal data accessed or processed via tool calls — a significant compliance clarification for enterprises deploying agents with access to customer systems.

  ## Standards and Governance
    The governance landscape for agentic AI is evolving rapidly as regulators respond to the novel risk profile of autonomous systems. The primary standards-setting and regulatory activities as of mid-2026 are:

    **Model Context Protocol (MCP)** — open protocol published by Anthropic in November 2024, defining a JSON-RPC 2.0-based interface for agent–tool integration. MCP specifies how tools are discovered (via a resources/list or tools/list RPC), how they declare their input schemas (via JSON Schema), and how the agent invokes them (via a tools/call RPC with typed arguments and result handling). MCP's design prioritises simplicity and security over performance: all tool interactions are synchronous request-response, and tool servers declare their capability scope, enabling the orchestration framework to enforce least-privilege access controls. By June 2026, MCP had been adopted as the primary tool-integration standard by LangChain, LlamaIndex, Cursor, Zed, and hundreds of enterprise software vendors.

    **OpenAI Assistants API** — a hosted agentic runtime providing thread management (persistent conversation state), tool registration (code interpreter, file search, custom function calling), and file access for building agents on GPT-4-class models. The Assistants API abstracts away the low-level loop management, making it accessible to application developers without deep ML expertise, at the cost of reduced flexibility relative to custom agent orchestrators.

    **Agent-to-Agent Protocol (A2A)** — proposed by Google (2025) as a complementary standard to MCP for inter-agent communication. Where MCP handles agent-to-tool communication, A2A handles agent-to-agent communication, including capability advertisement (agents publish an Agent Card describing their skills and interfaces), task delegation (structured request-response with optional streaming), and authentication (OAuth 2.0 / OpenID Connect). A2A positions agentic AI as an interoperability standard for a future internet of agents.

    **NIST AI Risk Management Framework (AI RMF 1.0, 2023)** — provides a voluntary framework for managing AI risks across the Govern, Map, Measure, and Manage functions. NIST AI 100-2 E2025 (March 2025) explicitly addressed agentic AI attack vectors, cataloguing prompt injection, RAG poisoning, and multi-agent trust attacks. The NIST AI Agent Standards Initiative (February 2026) is developing formal technical standards expected to inform both US regulatory guidance and international standards bodies.

    **EU AI Act (Regulation 2024/1689)** — the world's first comprehensive AI regulation, in force from August 2024 with phased implementation. GPAI obligations (general purpose AI models) took effect August 2025, covering documentation, transparency, and evaluation requirements for foundation models used as agentic AI backends. High-risk system obligations — including mandatory human oversight, audit trail requirements, conformity assessment, and registration — apply from August 2026 for AI agents deployed in Annex III high-risk domains. Agentic systems specifically face scrutiny under the autonomy dimension: the degree to which an agent makes decisions without per-step human oversight is a primary factor in high-risk classification.

    **UK AI regulation** — as of 2026, the UK has not enacted primary AI legislation, instead pursuing a principles-based, sector-led regulatory approach through existing regulators (ICO for data protection, FCA for financial services AI, MHRA for medical AI, CMA for AI-driven market competition). The UK ICO's 2026 guidance on agentic AI clarifies that GDPR controller responsibility extends to all data processing performed by the agent, regardless of how many steps removed from human direction — creating strong incentives for audit trail and access-control infrastructure in UK enterprise deployments. The government's AI Opportunities Action Plan (January 2025) commits £14 billion in private investment and establishes AI Growth Zones to accelerate infrastructure deployment.

  ## UK Context
    UK universities are at the forefront of agentic AI research and skills development. **UCL** leads the UKRI-funded national generative AI research hub, a consortium spanning Imperial College London, Cambridge, Oxford, Manchester, Edinburgh, and Surrey, with industry partners including IBM, BT, Google DeepMind, and Cisco Systems. UCL's Centre for Artificial Intelligence appointed a Google DeepMind Academic Fellow in March 2026, deepening the link between academic research and production AI development. A UCL News commentary from April 2026 flagged that agentic AI threatens to distort the academic research funding system by enabling mass production of low-quality grant applications — agents can autonomously survey a research landscape, identify funding opportunities, and draft tailored applications at scale — a concern that generated policy debate at UKRI level and prompted UKRI to explore AI-authentication requirements for grant applications. UCL also hosts the **Responsible Technology Institute**, which contributes to the governance and safety dimension of agentic AI deployment, including work on [[AI Alignment]], [[AI Safety]] evaluation, and the societal implications of autonomous AI systems.

    **Imperial College London** partnered with Lenovo in early 2026 to establish the London AI Technology Centre at its White City Deep Tech Campus, with agentic AI, intelligent systems coordination, and foundation model deployment as primary research and commercialisation foci. Imperial's **Data Science Institute** and **Department of Computing** contribute fundamental work on agent planning algorithms, formal verification of agent behaviour, and robustness evaluation. The White City campus positions Imperial at the intersection of academic research and the London tech ecosystem, including the Hammersmith and Shepherd's Bush AI cluster.

    **The University of Edinburgh Business School** and CodeClan jointly launched what is thought to be the UK's first applied agentic AI practitioner programme for senior engineers in early 2026, developed in collaboration with Qwasar Silicon Valley — signalling the emergence of a formal professional certification pathway for agentic AI practitioners. Edinburgh's **School of Informatics** (home of the Centre for Intelligent Systems and their Applications, CISA, and the Bayes Centre for data science) has longstanding expertise in classical AI planning, automated reasoning, and constraint satisfaction that directly supports modern agentic AI research. The Informatics department also hosts the **ILCC (Institute for Language, Cognition and Computation)**, which contributes NLP and knowledge representation research central to [[Retrieval-Augmented Generation]] and [[Agentic RAG]] architectures.

    **Cambridge** University's Computer Science and Technology department (including the former Language Technology Group, now part of the NLP and ML groups) has contributed foundational work in language model pre-training, dense retrieval, and multi-document reading comprehension. The Cambridge Machine Learning Group has ongoing collaborations with Huawei, Microsoft, and Google DeepMind on foundation model research. **Oxford**'s Future of Humanity Institute (rebranded as the Existential Risk Research Centre in 2024) contributes the existential risk and [[AI Alignment]] dimension of agentic AI safety research, with specific concern about power-seeking and goal-preserving behaviours in long-horizon agents.

    In Northern England, **Manchester** has been named the UK's most AI-ready city for two consecutive years by the SAS AI Cities Index. The **University of Manchester**'s School of Computer Science hosts research on symbolic AI, knowledge representation, and neuro-symbolic integration — research traditions directly relevant to tool use, planning, and reasoning in agentic systems. ANS (Greater Manchester) committed £3 million to AI adoption programmes in the region. **Manchester** hosts Aleph Insights, SigmoidAI, and DSP Group (dsp.co.uk, which brands itself as an agentic AI specialist) among the leading UK agentic AI consultancies. **Sheffield** houses the **GATE Platform** (General Architecture for Text Engineering), originally developed by Sheffield's NLP group and now widely deployed in public-sector text analytics, including agent tool integrations. **Leeds** houses BJSS (now part of CGI, with 555 partners based in Leeds) and The Data City (founded 2017, uses ML and data science to map AI company ecosystems), which are prominent in agentic AI professional services. The Northern England technology cluster also benefits from the **Digital Catapult**'s regional offices and the emerging **AI Opportunities Zone** designations that are expected to concentrate compute infrastructure and talent in Northern cities under the January 2025 Action Plan.

    UK corporate adoption is led by financial services, professional services, and media. **HSBC**, **Barclays**, and **Lloyds Banking Group** have deployed agentic AI for compliance automation, fraud detection, and customer communication workflows. **Deloitte UK**, **KPMG UK**, and **PwC UK** are deploying agentic AI for audit, tax, and advisory workflows. **The BBC** and **Guardian Media Group** are exploring agentic AI for journalism assistance and content personalisation. The UK defence sector — through DSTL (Defence Science and Technology Laboratory) and BAE Systems Applied Intelligence — is investing in agentic AI for intelligence analysis and autonomous systems coordination, subject to separate procurement and governance frameworks.

  ## Future Directions (2026-2030)
    By 2027, single-step inference will be relegated to simple Q&A; complex enterprise workflows will default to multi-agent systems where specialist agents handle different aspects of knowledge work in parallel. The **multi-agent economy** — agents discovering, evaluating, and compensating other agents for services via micropayments — is already being prototyped on the A2A Protocol (Google, 2025) and x402 payment channels; research papers from 2026 (arXiv:2507.19550) describe ledger-anchored identity and micropayment protocols for fully autonomous agent economies where AI systems contract with each other without human intermediation. The AI Agents market is projected to grow from USD 7.84 billion in 2025 to USD 52.62 billion by 2030 at a CAGR of 46.3%, with economic modelling suggesting that generative and agentic AI combined could add USD 2.6–4.4 trillion annually to global productivity by 2030.

    **Computer-use agents** — systems that control graphical interfaces directly via screenshot analysis and mouse/keyboard actions rather than via structured API calls — are moving from research to production; Anthropic's Computer Use capability and OpenAI's Operator (launched December 2024) exemplify this trajectory, enabling agents to work with legacy software systems that lack APIs. By 2028, computer-use agents are projected to reach sufficient reliability for unattended enterprise deployment on well-defined task classes, substantially expanding the addressable market for automation beyond API-accessible systems. **Long-context memory** innovations — A-Mem (arXiv:2502.12110), TeleMem, and AMIE-style persistent state management — will reduce the cost of cross-session agent continuity, allowing agents to maintain coherent task state over days or weeks without expensive full-context reconstruction at each session start. **Multimodal agency** — agents that perceive images, audio, video, and structured data as well as text — will expand the task space to [[Computer Vision]]-intensive domains such as medical imaging analysis, industrial quality inspection, and autonomous laboratory operation by 2028; Google's Project Astra (multi-modal, always-on personal assistant) is the consumer-facing vanguard of this trajectory. **[[AI Agent Payments]]** — agents that can autonomously hold, spend, and receive digital currency for task completion — will enable the fully autonomous subcontracting chains that constitute the agentic economy; this requires identity infrastructure ([[Agent Identity]]), payment rails, and legal frameworks that are still emerging.

    Regulatory development will be a critical shaping force. NIST's AI Agent Standards Initiative (launched February 2026) will produce formal security and governance standards for agentic systems by 2027, likely covering authentication, audit trail requirements, capability disclosure, and minimal-footprint principles. The EU AI Act's agentic provisions — still interpretive as of 2026 — will be clarified through guidance documents expected from the European AI Office in 2027. UK government AI regulation, following the AI Opportunities Action Plan (January 2025), is likely to adopt principles-based regulation for agentic systems in most domains while imposing sector-specific rules for high-risk deployments (healthcare, financial services, critical infrastructure). Gartner projects 40%+ of agentic AI projects will fail by 2027 without clearer value frameworks and evaluation discipline, signalling that project management, architecture, and governance maturity — not just model capability — will determine adoption outcomes. By 2030, AI agents are projected to handle 10% of knowledge-worker workflows, with the distribution heavily skewed toward well-defined, repetitive knowledge tasks (report generation, code review, compliance checking) rather than open-ended creative or strategic work.

  ## Theoretical Distinctions and Taxonomy
    Agentic AI is a genus with multiple species, and the field suffers from terminological inconsistency. Key distinctions that practitioners must understand:

    **AI Agent vs. Agentic AI**
    - *AI Agent* (narrower): any software entity that perceives its environment and takes actions to achieve goals; includes classical GOFAI agents, rule-based bots, and RPA scripts.
    - *Agentic AI* (narrower within LLM context): specifically an LLM-based system exhibiting extended autonomy, tool use, and multi-step planning; distinguishes from both classical agents and simple LLM chatbots.
    - *LLM Agent*: synonym for Agentic AI with explicit reference to the LLM backbone; emphasises the model's role as the cognitive engine.

    **Single-turn vs. Multi-turn vs. Agentic**
    - *Single-turn inference*: one prompt → one response; the model sees no prior context; stateless.
    - *Multi-turn conversation* ([[Conversational AI]]): multiple turns in a session; the model sees prior conversation; reactive (responds to user, doesn't initiate).
    - *Agentic*: the model takes initiative, plans sequences of actions, uses tools, and maintains state across an arbitrarily long task horizon; may go many steps without user input.

    **Agentic AI vs. Robotic Process Automation**
    - *RPA*: deterministic script that automates a fixed sequence of UI interactions; brittle to interface changes; no natural language understanding; no exception handling beyond predefined rules.
    - *Agentic AI*: adaptive; reasons about exceptions; can handle novel situations by decomposing them into known sub-tasks; uses natural language for task specification and inter-component communication; can update its own approach based on observed outcomes.

    **Planner vs. Executor vs. Verifier**
    - *Planner*: decomposes the task into sub-tasks; selects tools; tracks progress.
    - *Executor*: carries out specific actions (tool calls, code execution, API requests).
    - *Verifier*: checks whether the output of an execution step is correct before proceeding; implements Reflexion-style self-critique.
    - In simple single-agent architectures, all three roles are played by the same LLM instance in sequential reasoning steps; in complex multi-agent architectures, these roles are split across specialist models optimised for each function.

    **Deterministic vs. Non-deterministic agents**
    - *Deterministic*: given the same initial state and goal, always produces the same sequence of actions; achievable with temperature=0 and fixed tool call ordering; preferred for auditable, compliance-critical workflows.
    - *Non-deterministic*: sampling temperature > 0 or stochastic tool outputs lead to different trajectories on repeated runs; useful when exploration is beneficial (creative tasks, research) but problematic for reproducible process automation.

    **Synchronous vs. Asynchronous agents**
    - *Synchronous*: agent waits for each tool call to complete before proceeding; simpler state management; higher latency for I/O-bound tasks.
    - *Asynchronous*: agent issues multiple tool calls in parallel and processes results as they arrive; lower latency; requires concurrent state management.
    - *Durable execution*: agent state is persisted to durable storage (database, distributed log) between steps, enabling long-running tasks that span hours or days and that can survive infrastructure failures; implemented by Temporal.io, LangGraph's persistence layer, and OpenAI Assistants' thread storage.

  ## Key Benchmarks and Performance Data (2023–2026)
    Performance of agentic AI systems on major benchmarks, illustrating the rapid capability improvement from 2023 to mid-2026:

    **SWE-Bench Verified** (software engineering, resolve GitHub issues):
    - GPT-4 (zero-shot, 2023): 4.4%
    - Claude 2 (SWE-Agent scaffold, 2024): 26.1%
    - GPT-4 Turbo (Devin-style agent, 2024): 38.0%
    - Claude 3.5 Sonnet (agent, 2025 Q1): 49.0%
    - GPT-4o (SWE-Agent v2, 2025 Q2): 55.0%
    - Claude Opus 4 (agent, 2025 Q4): 72.5%
    - Claude Opus 4.5 (agent, 2026 Q2): 80.9%

    **WebArena** (web navigation, 812 tasks):
    - Best model zero-shot (2023): 14.9%
    - Best agentic system (2024): 35.8%
    - Best agentic system (2025): 58.2%
    - Best agentic system (2026 est.): ~72%

    **AgentBench** (8-environment cross-domain, 2024 release):
    - Best open-source model: 10.9 (out of 100)
    - Best commercial model (GPT-4): 37.8
    - Best agentic system (2025): 61.2
    - Gap between commercial and open-source: narrowing from 27 points (2024) to 12 points (2025) due to improved open-source foundation models

    **SWE-Bench Pro** (1,865 multi-language tasks, 250-turn limit):
    - Claude Opus 4.5 Verified score: 80.9%
    - Claude Opus 4.5 SEAL score: 45.9% (35-point gap reflects real-world difficulty)
    - GPT-4o SEAL score: 38.2%

    **GAIA benchmark** (real-world general assistant tasks):
    - Best system (2025): 67.3% on GAIA-Level 1
    - Human baseline: 92%
    - Remaining gap reflects multi-step reasoning and tool orchestration limitations

  ## Design Mechanisms and Implementation Patterns
    Successful agentic AI deployment requires disciplined application of several implementation mechanisms beyond the core LLM and tool infrastructure:

    **Context management strategies** — managing what goes into the context window at each step is critical for agent reliability:
    - *Sliding window* — maintain only the most recent N turns of conversation and tool outputs; simple but loses long-range context.
    - *Episodic retrieval* — store past steps in a [[Vector Database]] and retrieve the most relevant ones into the current context; enables long-horizon recall at bounded context cost.
    - *Summarisation* — periodically compress older context into a shorter summary; loses detail but enables unlimited horizon.
    - *Hierarchical memory* — maintain both a working memory (recent context) and a long-term store (summarised past), with tiered retrieval.
    - *[[Agent Memory]] management* — specialised memory systems (A-Mem, TeleMem, MemGPT) automate context management for long-running agents.

    **Error handling and recovery** — agents must handle both tool errors and reasoning errors gracefully:
    - *Retry with backoff* — on transient tool failures, retry with exponential backoff; prevent infinite retry loops with maximum attempt limits.
    - *Alternative tool selection* — if the primary tool fails, attempt an alternative; e.g., if web search returns no results, try a knowledge base query.
    - *Graceful degradation* — if an essential tool is unavailable, communicate this limitation to the user rather than proceeding with incomplete information.
    - *Checkpointing* — persist task state at each completed step to enable restart from the last verified state rather than from scratch on failure.
    - *Dead-letter handling* — route unrecoverable failures to a human escalation queue rather than terminating the task silently.

    **Security and access control** — agentic systems require explicit security architecture:
    - *Principle of least privilege* — tools are scoped to the minimum permissions required for the current task step; broader permissions require explicit user grant.
    - *OAuth 2.0 scoping* — API tool calls use narrowly scoped OAuth tokens that expire after task completion; long-lived credentials are never held by the agent.
    - *Input sanitisation* — tool inputs generated by the agent are sanitised before execution to prevent prompt injection from propagating into tool outputs.
    - *Sandboxed code execution* — code execution tools run in isolated containers (E2B, Modal, Docker) with network access restricted to approved external services.
    - *Audit logging* — all tool calls, their inputs and outputs, and the agent's reasoning trace are logged with timestamps for post-hoc audit.

    **Performance optimisation** — reducing latency and cost without sacrificing reliability:
    - *Tool call parallelisation* — independent tool calls (e.g., multiple web searches for different sub-questions) are issued in parallel rather than sequentially.
    - *Caching* — deterministic tool calls (e.g., retrieval of unchanged documentation pages) are cached with TTL to avoid redundant API calls.
    - *Prompt compression* — system prompts and tool schemas are compressed to reduce per-step token consumption; RECOMP and similar approaches compress retrieved context.
    - *Small model routing* — simple sub-tasks (e.g., query rewriting, format extraction) are routed to smaller, faster models; complex reasoning uses the larger backbone.
    - *Speculative execution* — in predictable pipelines, begin executing the anticipated next step before the current step completes; abort and discard if the prediction was wrong.

  ## Safety, Reliability and Evaluation
    The safety and reliability challenges of agentic AI are qualitatively different from those of conversational or discriminative AI systems, because agents take actions in the world rather than merely producing text for human review. Five categories of safety concern dominate the field as of 2026:

    **Prompt injection** is the most prevalent attack vector in deployed agentic systems. When an agent retrieves a web page, reads a document, processes an email body, or calls an API, the returned content may contain adversarially crafted instructions designed to override the agent's system prompt or redirect its actions. Unlike SQL injection, which exploits a clear boundary between code and data, prompt injection exploits the fundamental ambiguity of natural language: the agent cannot reliably distinguish between its authorised instructions (in the system prompt) and injected instructions embedded in retrieved content. Mitigations include: structural prompt hardening (marking system instructions with special delimiters and instructing the model to ignore instructions in other contexts); sandboxed tool execution environments (preventing injected instructions from reaching tool executors even if the model parses them); and separate validation agents that review proposed tool calls before execution. NIST AI 100-2 E2025 explicitly catalogued prompt injection as a primary agentic attack vector, and OWASP's Top 10 for LLM Applications (2025 edition) lists it as the top risk.

    **Cascading failures** occur in multi-agent topologies when an error in one agent propagates to downstream agents before error-recovery logic triggers. A worker agent that produces incorrect output may cause an orchestrator to issue incorrect sub-tasks to other workers, which may cause them to take incorrect actions — all before any human oversight layer detects the failure. Robust orchestrators implement circuit-breaker patterns (automatically pausing a sub-task pipeline when error rates exceed a threshold), idempotency requirements (all agent actions must be safely retryable without side effects), and checkpointing (persisting intermediate results so a failing pipeline can be restarted from the last verified state rather than from scratch).

    **Excessive agency** (analogous to privilege escalation in security terminology) occurs when an agent acquires resources, capabilities, or influence beyond what is necessary for its assigned task — whether because of goal misspecification, model error, or deliberate manipulation. Examples include an agent tasked with drafting an email instead sending it; an agent tasked with reading a file instead modifying it; or an agent tasked with a limited research task acquiring persistent API credentials for future use. The minimal-footprint principle directly addresses this: agents should request only the permissions needed for the current step, not anticipated future steps, and should release permissions when no longer needed.

    **Goal misalignment over long horizons** arises because the user's intent is specified in natural language at the start of the task, but the agent's goal representation is implicit in its context — and natural language goal specifications are frequently ambiguous or underspecified. Over many steps, the agent may converge on a technically correct interpretation of the goal that diverges from the user's actual intent. This is the agentic manifestation of [[AI Alignment]]: ensuring that what the agent optimises for matches what the user actually wants, not just what they said. Techniques include explicit goal-state verification (asking the model to restate the goal and verify its current trajectory against it periodically), minimal-assumption planning (preferring actions that are consistent with multiple interpretations of an ambiguous goal), and [[Human-in-the-Loop]] checkpoints at key decision points.

    **Evaluation** of agentic systems is substantially harder than evaluation of single-inference systems. Standard NLP metrics (BLEU, ROUGE, accuracy on held-out test sets) are inapplicable to multi-step goal-completion tasks with heterogeneous actions and variable-length trajectories. The agentic evaluation ecosystem as of 2026 includes: **SWE-Bench Verified** and **SWE-Bench Pro** for software engineering agents; **WebArena** (812 tasks, 4 website types) and **BrowserGym** for web navigation agents; **AgentBench** (8 environments, 29 models evaluated) for cross-domain agent evaluation; **GAIA** (General AI Assistant benchmark) for real-world task assistance; and the **AURA** framework (Agent Autonomy Risk Assessment) for safety-orthogonal evaluation of agent behaviour. A critical emerging concern is benchmark contamination: as agentic benchmarks become public, model providers may train on them, inflating benchmark scores without corresponding real-world capability improvements. SWE-Bench Pro's 1,865-task multi-language design with a 250-turn limit and continuous task rotation is a direct response to this concern.

  ## Commercial Ecosystem Summary (2026)
    Key commercial platforms and their capabilities as of mid-2026:

    **Enterprise platforms**:
    - *Salesforce Agentforce* — Atlas Reasoning Engine; deep Salesforce CRM integration; low-code agent builder; 12,000+ enterprise customers deploying agents by Q2 2026.
    - *Microsoft Copilot Studio* — Semantic Kernel orchestration; Azure infrastructure; connectors to Microsoft 365, Dynamics 365, and 1,000+ third-party services; HITL via Power Automate approvals.
    - *ServiceNow Now Assist* — enterprise IT and employee service automation; native ITSM data access; AI agent with ticket routing, resolution, and escalation.
    - *Google Vertex AI Agent Builder* — multimodal agents; Gemini backbone; Dialogflow integration; Search-as-a-tool grounding; strong enterprise compliance with Google Cloud security.
    - *IBM watsonx Orchestrate* — enterprise-grade orchestration; pre-built skill library for HR, finance, and procurement; enterprise data governance features.

    **Open-source and developer platforms**:
    - *LangGraph* — production-grade stateful agent graphs; human-in-the-loop; durable execution via LangSmith persistence.
    - *AutoGen 0.4* — async-first event-driven multi-agent; Microsoft Research; supports GPT-4o, Claude, Gemini, and local models.
    - *CrewAI* — role-based multi-agent crews; declarative task assignment; popular in RAG and research automation use cases.
    - *PydanticAI* — type-safe, testable agent construction; strong IDE integration; preferred by Python backend engineers.
    - *Semantic Kernel (Microsoft)* — polyglot (Python, C#, Java); plugin-based tool registry; underlying runtime for Copilot Studio.

    **Coding agents**:
    - *Claude Code* (Anthropic) — first-party agentic coding assistant; integrated with Claude API; achieves 80.9% on SWE-Bench Verified.
    - *Devin* (Cognition Labs) — general software engineering agent; persistent workspace; multi-day task execution.
    - *GitHub Copilot Workspace* — agent workspace within GitHub; issue-to-PR automation; integrated CI/CD feedback loop.
    - *Cursor AI* — agent-augmented IDE; codebase-aware multi-file editing; Codebase RAG for context retrieval.

  ## Research & Literature
    1. Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2023). ReAct: Synergizing reasoning and acting in language models. *ICLR 2023*.
    2. Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). Reflexion: Language agents with verbal reinforcement learning. *NeurIPS 2023*.
    3. Schick, T., Dwivedi-Yu, J., Dessì, R., Raileanu, R., Lomeli, M., Zettlemoyer, L., Cancedda, N., & Scialom, T. (2023). Toolformer: Language models can teach themselves to use tools. *NeurIPS 2023*.
    4. Zhou, S., Xu, F. F., Zhu, H., Zhou, X., Lo, R., Sridhar, A., Cheng, X., Ou, T., Bisk, Y., Fried, D., Alon, U., & Neubig, G. (2024). WebArena: A realistic web environment for building autonomous agents. *ICLR 2024*.
    5. Liu, X., Yu, H., Zhang, H., Xu, Y., Lei, X., Lai, H., Gu, Y., Ding, H., Men, K., Yang, K., Zhang, S., Deng, X., Zeng, A., Du, Z., Zhang, C., Shen, S., Fu, T., Liu, Z., Tam, W., ... & Tang, J. (2024). AgentBench: Evaluating LLMs as agents. *ICLR 2024*.
    6. Wang, L., Ma, C., Feng, X., Zhang, Z., Yang, H., Zhang, J., Chen, Z., Tang, J., Chen, X., Lin, Y., Zhao, W. X., Wei, Z., & Wen, J.-R. (2024). A survey on large language model based autonomous agents. *Frontiers of Computer Science, 18*(6), 186345.
    7. Xi, Z., Chen, W., Guo, X., He, W., Ding, Y., Hong, B., Zhang, M., Wang, J., Jin, S., Zhou, E., Zheng, R., Fan, X., Wang, X., Xiong, L., Liu, Y., Gao, Z., Liu, Q., Gui, T., Zhang, Q., & Huang, X. (2023). The rise and potential of large language model based agents: A survey. *arXiv:2309.07864*.
    8. Park, J. S., O'Brien, J. C., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative agents: Interactive simulacra of human behavior. *UIST 2023*.
    9. Chen, X., Lin, M., Schärli, N., & Zhou, D. (2023). Teaching large language models to self-debug. *arXiv:2304.05128*.
    10. Significant Gravitas. (2023). *AutoGPT: An autonomous GPT-4 experiment*. GitHub. https://github.com/Significant-Gravitas/AutoGPT
    11. Nakano, R., Hilton, J., Balwit, A., Wu, J., Ouyang, L., Kim, C., Hesse, C., Jain, S., Kosaraju, V., Saunders, W., Jiang, X., Koddenbrock, K., Slama, K., & Schulman, J. (2022). WebGPT: Browser-assisted question-answering with human feedback. *arXiv:2112.09332*.
    12. Kinniment, M., Sato, L. J. K., Chan, H., Wills, L., Matheson, M., Jensen, A., ... & Stuhlmüller, A. (2023). Evaluating language-model agents on realistic autonomous tasks. *arXiv:2312.11671*.
    13. Yang, J., Prabhakar, A., Narasimhan, K., & Yao, S. (2023). Intercode: Standardizing and benchmarking interactive coding with execution feedback. *NeurIPS 2023*.
    14. Jimenez, C. E., Yang, J., Wettig, A., Yao, S., Pei, K., Press, O., & Narasimhan, K. (2024). SWE-bench: Can language models resolve real-world GitHub issues? *ICLR 2024*.
    15. Wu, Q., Bansal, G., Zhang, J., Wu, Y., Li, B., Zhu, E., Jiang, L., Zhang, X., Zhang, S., Liu, J., Awadallah, A. H., White, R. W., Burger, D., & Wang, C. (2023). AutoGen: Enabling next-gen LLM applications via multi-agent conversation. *arXiv:2308.08155*.
    16. Chase, H. (2023). *LangChain: Building applications with LLMs through composability*. GitHub. https://github.com/langchain-ai/langchain
    17. Hong, S., Zhuge, M., Chen, J., Zheng, X., Cheng, Y., Zhang, C., Wang, J., Wang, Z., Yau, S. K. S., Lin, Z., Zhou, L., Ran, C., Xiao, L., Wu, C., & Schmidhuber, J. (2023). MetaGPT: Meta programming for a multi-agent collaborative framework. *arXiv:2308.00352*.
    18. Shen, Y., Song, K., Tan, X., Li, D., Lu, W., & Zhuang, Y. (2023). HuggingGPT: Solving AI tasks with ChatGPT and its friends in Hugging Face. *NeurIPS 2023*.
    19. Anthropic. (2024). *Model Context Protocol specification*. https://spec.modelcontextprotocol.io
    20. Abuelsaad, T., Akkus, I. E., Canim, M., Demir, C., Dey, G., Garg, S., ... & Xu, J. (2024). Agent-E: From autonomous web navigation to foundational design principles in agentic systems. *arXiv:2407.13032*.
    21. Sutton, R. S., & Barto, A. G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press.
    22. Laird, J. E. (2012). *The Soar Cognitive Architecture*. MIT Press.
    23. NIST. (2023). *AI Risk Management Framework (AI RMF 1.0)*. National Institute of Standards and Technology. https://doi.org/10.6028/NIST.AI.100-1
    24. European Parliament. (2024). *Regulation (EU) 2024/1689 of the European Parliament and of the Council (AI Act)*. Official Journal of the European Union.
    25. Gartner. (2025). *Hype Cycle for Emerging Technologies, 2025*. Gartner Research.
    26. McKinsey Global Institute. (2025). *The state of AI in 2025: Agentic AI enters the enterprise*. McKinsey & Company.
    27. Wang, Z., Mao, S., Wu, W., Ge, T., Wei, F., & Ji, H. (2024). Unleashing cognitive synergy in large language models: A task-solving agent through multi-persona self-collaboration. *NAACL 2024*.

- ### Provenance
  - sources:: Yao et al. 2023 (ReAct ICLR); Shinn et al. 2023 (Reflexion NeurIPS); Jimenez et al. 2024 (SWE-Bench ICLR); Liu et al. 2024 (AgentBench ICLR); Zhou et al. 2024 (WebArena ICLR); Wu et al. 2023 (AutoGen); Anthropic MCP Specification 2024; NIST AI RMF 2023; EU AI Act 2024; Gartner Hype Cycle 2025; McKinsey State of AI 2025; SAS AI Cities Index 2025; UCL news Apr 2026; Imperial-Lenovo AI Technology Centre 2026; University of Edinburgh Business School CodeClan Agentic AI Programme 2026; onereach.ai Agentic AI Adoption 2026; nevermined.io Enterprise Adoption 2026; NIST AI Agent Standards Initiative Feb 2026
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm