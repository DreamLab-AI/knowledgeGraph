public:: true

# react
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5c27b8c96beeb510cc07992997b76e72daa26170383984b364be7766668e3c33",
  "@type": "Page",
  "vc:slug": "re-act",
  "title": "react",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:re-act",
  "@type": "Class",
  "label": "ReAct",
  "definition": "ReAct (Reasoning and Acting) is a prompting paradigm for large language models that interleaves free-form reasoning traces (Thought steps) with structured external action calls in a single output sequence, enabling models to dynamically plan multi-step tasks, observe the results of tool invocations, and revise their reasoning accordingly. The framework produces an alternating Thought–Action–Observation loop that grounds model inference in real-world feedback, contrasting with pure chain-of-thought prompting (reasoning without action) and pure action-only agents (action without transparent reasoning). Originally demonstrated by Yao et al. (2022) on knowledge-intensive QA and interactive decision benchmarks, ReAct has become the foundational interaction primitive underpinning modern agentic AI systems, tool-augmented LLMs, and multi-agent orchestration frameworks.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:reasoning-and-acting", "label": "Reasoning and Acting"},
    {"@id": "urn:ngm:class:react-agent", "label": "ReAct Agent"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain of Thought"},
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"},
      {"@id": "urn:ngm:class:tool-augmented-language-model", "label": "Tool-Augmented Language Model"},
      {"@id": "urn:ngm:class:human-in-the-loop", "label": "Human in the Loop"},
      {"@id": "urn:ngm:class:interpretable-ai", "label": "Interpretable AI"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:external-knowledge-retrieval", "label": "External Knowledge Retrieval"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:agent-loop", "label": "Agent Loop"},
      {"@id": "urn:ngm:class:grounded-reasoning", "label": "Grounded Reasoning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:in-context-learning", "label": "In-Context Learning"},
      {"@id": "urn:ngm:class:scratchpad-reasoning", "label": "Scratchpad Reasoning"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain of Thought"},
      {"@id": "urn:ngm:class:act-only-agent", "label": "Act-Only Agent"},
      {"@id": "urn:ngm:class:reflexion", "label": "Reflexion"},
      {"@id": "urn:ngm:class:tree-of-thoughts", "label": "Tree of Thoughts"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"},
      {"@id": "urn:ngm:class:planning-and-scheduling", "label": "Planning and Scheduling"},
      {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:prompting-technique", "label": "Prompting Technique"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:robotic-process-automation", "label": "Robotic Process Automation"}
    ]
  },
  "qualityScore": 0.76,
  "maturity": "established",
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - **ReAct** (Reasoning and Acting) is a [[Prompting Technique]] for [[Large Language Model]]s that interleaves free-form *Thought* traces with structured *Action* calls in a single output sequence, grounding model inference in real-world feedback via an observation loop. By unifying the transparency of [[Chain of Thought]] prompting with the real-world grounding of [[Tool Use]], ReAct enables [[Agentic AI]] systems to plan, execute, observe, and revise across multi-step tasks in a principled, interpretable manner. The paradigm was introduced by Yao et al. (2022) and rapidly became the foundational interaction primitive for tool-augmented LLMs, [[Multi-Agent System]]s, and orchestration frameworks such as [[LangChain]], [[LangGraph]], and [[AutoGen]].

- ### Overview
  - ReAct solves a core limitation shared by two earlier paradigms: pure [[Chain of Thought]] prompting produces coherent reasoning but cannot interact with the world, while pure action-based agents (Act-only) can invoke tools but cannot explain their decision process. ReAct combines both into a closed feedback loop.
  - **Why it matters**: task completion on knowledge-intensive and interactive benchmarks improved substantially over both baselines (CoT-only and Act-only) in the original paper, while also producing interpretable reasoning traces that support debugging and safety monitoring.
  - **Core loop structure** — each step of inference produces one or more of:
    - *Thought* — free-form natural language reasoning about the current situation, progress, and next intended action.
    - *Action* — a structured call to an external resource: search engine, code interpreter, calculator, database, API, or file system.
    - *Observation* — the returned result of the action, appended to the context window for the next reasoning step.
  - The loop continues until the model emits a *Final Answer* or a terminal action, or until a step limit is reached.
  - ReAct is typically instantiated via [[Few-Shot Prompting]] or [[In-Context Learning]], supplying example Thought/Action/Observation traces in the prompt so the model learns the output format without weight updates.

- ### Key Mechanisms
  - **Thought generation**: at each step the model writes a scratchpad sentence (or paragraph) explaining its reasoning. This is analogous to [[Scratchpad Reasoning]] and provides the internal monologue used for planning.
  - **Action invocation**: actions follow a structured syntax (e.g. `Search[query]`, `Lookup[term]`, `Finish[answer]`) that a parser or router maps to concrete tool calls. Modern implementations map these to [[Function Calling]] APIs exposed by the model provider.
  - **Observation injection**: tool results are appended to the prompt context as an `Observation:` line. This is a form of [[Retrieval Augmented Generation]] where retrieved content is dynamically fetched per-step rather than retrieved once.
  - **Iterative refinement**: because observations update the context, the model can self-correct — abandoning unproductive search branches and redirecting to new strategies — a primitive form of [[Grounded Reasoning]].
  - **Termination**: a designated terminal action (`Finish`) or a maximum step budget halts the loop. Step budgets prevent infinite loops when tools return unhelpful results.
  - **Few-shot scaffold**: original ReAct used 3–6 hand-crafted Thought/Action/Observation demonstration examples in the prompt. Later fine-tuned and instruction-tuned variants embed this behaviour in model weights, reducing the need for long few-shot prompts.

- ### Architectural Variants
  - **ReAct + Retrieval**: pairs the Thought–Action loop with a [[Retrieval Augmented Generation]] backend (e.g. vector search over a [[Knowledge Graph]] or document corpus), providing fresh factual grounding.
  - **Reflexion**: extends ReAct by adding a verbal self-reflection step after task failure — the model critiques its own trajectory and stores the critique in an episodic memory buffer. This contrasts with [[Reflexion]] as an evolutionary descendant.
  - **Tree of Thoughts (ToT)**: expands the linear Thought–Action sequence into a search tree over multiple reasoning branches, evaluated and pruned by a verifier. Contrasts with [[Tree of Thoughts]] as a branching generalisation.
  - **Plan-and-Execute**: separates planning (one-shot generation of a full action plan) from execution (sequentially executing plan steps with ReAct). Used in LangChain's Plan-and-Execute agent.
  - **CodeAct / Tool-Augmented Code Agents**: specialises the Action space to code generation and execution, replacing natural-language action strings with Python function calls evaluated in a sandbox.
  - **Multi-agent ReAct**: distributes the loop across multiple specialised agents communicating via message passing, as in [[LangGraph]] and [[AutoGen]] orchestration patterns. Enables parallel tool execution and agent specialisation (search, code, critic roles).

- ### Applications
  - **Open-domain question answering**: using Wikipedia search as the action space (the original HotpotQA and FEVER benchmarks), the model searches, reads snippets, and reasons towards a factual answer.
  - **Interactive decision tasks**: navigating simulated household environments (AlfWorld) or e-commerce workflows (WebShop) by grounding natural language plans in environment state transitions.
  - **Code generation and execution**: paired with a code interpreter action, a ReAct agent can write code, run it, observe the output or error, and iterate — the pattern used in OpenAI's Code Interpreter (Advanced Data Analysis).
  - **Database and API querying**: translating natural language requests into SQL, GraphQL, or REST API calls; inspecting results; and refining queries based on returned data schemas.
  - **Document analysis and extraction**: retrieving document chunks via [[Retrieval Augmented Generation]], reading targeted sections, and constructing structured summaries across multi-hop evidence chains.
  - **Software engineering agents**: driving agentic coding assistants such as Devin-class systems and SWE-bench solutions that read files, edit code, run tests, and observe CI feedback.
  - **Robotic task planning**: adapting the paradigm to [[Robotic Process Automation]] scenarios where actions correspond to UI interactions or physical effectors with sensor-based observations.

- ### Evaluation and Benchmarks
  - **HotpotQA** — multi-hop question answering over Wikipedia; ReAct outperformed CoT-only prompting by reducing hallucination on bridging questions.
  - **FEVER** — fact verification requiring evidence retrieval; ReAct improved evidence coverage and reduced unsupported claims.
  - **AlfWorld** — text-based household task completion; ReAct outperformed imitation-learning and Act-only baselines on multi-step object manipulation tasks.
  - **WebShop** — simulated e-commerce navigation requiring product search and purchase; ReAct outperformed human shoppers and prior agents in reward terms.
  - **SWE-bench** — software engineering tasks; ReAct-style agents with code execution are top-performing approaches.

- ### Relationships
  - requires:: [[Chain of Thought]]
  - requires:: [[Tool Use]]
  - requires:: [[Large Language Model]]
  - requires:: [[Prompt Engineering]]
  - enables:: [[Agentic AI]]
  - enables:: [[Autonomous Agent]]
  - enables:: [[Tool-Augmented Language Model]]
  - enables:: [[Human-in-the-Loop]]
  - enables:: [[Interpretable AI]]
  - dependsOn:: [[External Knowledge Retrieval]]
  - dependsOn:: [[Function Calling]]
  - implements:: [[Agent Loop]]
  - implements:: [[Grounded Reasoning]]
  - uses:: [[Retrieval Augmented Generation]]
  - uses:: [[In-Context Learning]]
  - uses:: [[Scratchpad Reasoning]]
  - contrastsWith:: [[Reflexion]]
  - contrastsWith:: [[Tree of Thoughts]]
  - contrastsWith:: [[Act-Only Agent]]
  - relatedTo:: [[Reasoning]]
  - relatedTo:: [[Planning and Scheduling]]
  - relatedTo:: [[Multi-Agent System]]
  - relatedTo:: [[Reinforcement Learning]]
  - bridges-to:: [[Knowledge Graph]]
  - bridges-to:: [[Robotic Process Automation]]

- ### Standards & Context
  - ReAct is not governed by a formal standards body; its canonical specification is the original paper by Yao et al. (2022): "ReAct: Synergizing Reasoning and Acting in Language Models" (arXiv 2210.03629).
  - Major [[Large Language Model]] providers have operationalised ReAct semantics via [[Function Calling]] APIs (OpenAI, Anthropic, Google Gemini), which provide structured action dispatch as a first-class model capability.
  - [[LangChain]] and [[LangGraph]] implement ReAct as their default single-agent and multi-agent loop patterns. LangGraph adds stateful graph execution with checkpointing and human-in-the-loop interrupts.
  - The [[AutoGen]] framework from Microsoft Research extends ReAct to conversational multi-agent networks, enabling group-chat-style coordination among ReAct agents.
  - [[OpenAI Assistants API]] and [[OpenAI Responses API]] expose the Thought–Action–Observation loop via built-in tool execution (code interpreter, file search, function calling), abstracting the low-level loop management from the developer.
  - The [[Agent Protocol]] initiative (AI Engineer Foundation) aims to standardise message schemas and agent loop interfaces to enable interoperability between ReAct-style agents from different frameworks.
  - In the context of [[Responsible AI]], ReAct's explicit reasoning traces are increasingly seen as a mechanism for explainability compliance, providing an audit trail of why an agent took a given action — relevant to emerging AI governance frameworks (EU AI Act transparency requirements, NIST AI RMF).

- ### Limitations and Open Challenges
  - **Context window pressure**: long Thought/Action/Observation traces consume context rapidly, eventually exceeding model context limits on extended tasks. Compression and summarisation strategies are active research areas.
  - **Hallucinated actions**: models may generate syntactically valid but semantically incorrect actions (wrong tool name, malformed query), degrading tool call success rates. Fine-tuning on tool trajectories mitigates this.
  - **Error propagation**: incorrect observations (tool failures, noisy retrieval) can derail subsequent reasoning if the model does not self-correct, leading to compounding errors across steps.
  - **Step budget sensitivity**: performance degrades sharply when the step budget is too tight; overshooting budgets wastes compute and can loop. Adaptive early stopping remains an open problem.
  - **Reproducibility**: stochastic decoding means identical prompts may follow different reasoning paths, complicating benchmarking and regression testing.

- ### Current Landscape (2026)
  - ReAct (Yao et al., 2022) has become the default backbone of production agent frameworks: AgentScope 1.0 (arXiv:2508.16279, Aug 2025) adopts the reason-act-observe loop as its primary recommended architecture, and it underpins tool-calling stacks such as Red Hat's Llama Stack agents (2025).
  - A wave of 2025 successor architectures targets ReAct's next-action myopia: ReflAct (EMNLP 2025) reorients reasoning to continual goal-state reflection and reports a 27.7% average success-rate gain over ReAct (93.3% on ALFWorld), while REBACT (Zeng et al., Sep 2025) inserts a reflect-before-act step reaching 98.51% on ALFWorld.
  - Plan-first variants are displacing purely reactive loops on complex multi-tool tasks: Pre-Act (arXiv:2505.09970, May 2025) builds a multi-step plan and improves Action Recall over ReAct by ~70-102%, with a fine-tuned Llama 3.1 70B surpassing GPT-4; Planner-centric plan-execute paradigms similarly set state-of-the-art on StableToolBench.
  - Hierarchical decoupling is a clear 2025 frontier: RP-ReAct (arXiv:2512.03560, Dec 2025) supervises a ReAct executor with a separate Reasoner-Planner and adds context-saving external storage to stop large tool outputs overflowing small open-weight context windows.
  - Empirical scrutiny has grown sharper: "On the Brittle Foundations of ReAct Prompting" (arXiv:2405.13966) argues gains stem largely from exemplar-query similarity rather than genuine interleaved reasoning, and a 2025 enterprise benchmark (arXiv:2509.10769) found multi-agent ReAct consistently underperforms, with top models reaching only ~35% success on complex workflows.
  - Security and reliability remain open challenges: Agent Security Bench (ICLR 2025) recorded prompt-injection/memory-poisoning attack success rates exceeding 84% against ReAct-style agents with largely ineffective defences, and pass^k consistency across repeated trials on tau-bench still typically falls below 50%.
  - Reasoning models (Gemma, Qwen, o-series) are reshaping the loop by emitting native chain-of-thought before each action, making agentic workloads decode-dominated and heavily dependent on long-lived KV-cache state (arXiv tool-call characterisation, 2025-26), shifting optimisation toward context caching rather than prompt engineering.

- ### References
  - 1. Yao, S. et al. (2022/2023). ReAct: Synergising Reasoning and Acting in Language Models. https://www.semanticscholar.org/paper/ReAct:-Synergizing-Reasoning-and-Acting-in-Language-Yao-Zhao/99832586d55f540f603637e458a292406a0ed75d
  - 2. Kim, J. et al. (2025). ReflAct: World-Grounded Decision Making in LLM Agents via Goal-State Reflection (EMNLP 2025). https://aclanthology.org/anthology-files/anthology-files/pdf/emnlp/2025.emnlp-main.1697.pdf
  - 3. Mishra, S. et al. (2025). Pre-Act: Multi-Step Planning and Reasoning Improves Acting in LLM Agents. https://arxiv.org/pdf/2505.09970.pdf
  - 4. AgentScope Team (2025). AgentScope 1.0: A Developer-Centric Framework for Building Agentic Applications. https://arxiv.org/pdf/2508.16279
  - 5. Molinari, A. et al. (2025). RP-ReAct: A Reasoner-Planner Supervising a ReAct Executor for Complex Tasks. https://arxiv.org/html/2512.03560v1
  - 6. Verma, M. et al. (2024). On the Brittle Foundations of ReAct Prompting for Agentic LLMs. https://arxiv.org/html/2405.13966v1

- ### Provenance
  - sources:: Yao et al. (2022), arXiv:2210.03629; LangChain docs; LangGraph docs; OpenAI Assistants docs
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
