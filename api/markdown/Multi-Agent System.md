public:: true
alias:: MultiAgentSystem

# Multi-Agent System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multi-agent-system",
  "@type": "Page",
  "vc:slug": "multi-agent-system",
  "title": "Multi-Agent System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-agent-system",
  "@type": "Class",
  "label": "Multi-Agent System",
  "definition": "A Multi-Agent System (MAS) is a computational architecture in which multiple autonomous agents — each equipped with local perception, internal state, and independent decision-making capability — interact within a shared environment to accomplish individual or collective objectives. Coordination emerges from direct communication, environmental signalling, stigmergy, or market-like auction mechanisms, without requiring any single agent to hold global knowledge or exert centralised control. MAS formalises distributed problem-solving by composing heterogeneous or homogeneous agent populations whose aggregate behaviour frequently exhibits emergence — properties absent in any individual agent. The paradigm spans robotics swarms, AI orchestration pipelines, financial market simulation, smart-grid balancing, and autonomous software engineering.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:mas",
      "label": "MAS"
    },
    {
      "@id": "urn:ngm:class:agent-based-system",
      "label": "Agent-Based System"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      },
      {
        "@id": "urn:ngm:class:inter-agent-communication",
        "label": "Inter-Agent Communication"
      },
      {
        "@id": "urn:ngm:class:coordination-protocol",
        "label": "Coordination Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:agent-communication-language",
        "label": "Agent Communication Language"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:swarm-robotics",
        "label": "Swarm Robotics"
      },
      {
        "@id": "urn:ngm:class:collective-decision-making",
        "label": "Collective Decision Making"
      },
      {
        "@id": "urn:ngm:class:software-engineering-agents",
        "label": "Autonomous Software Engineering"
      },
      {
        "@id": "urn:ngm:class:emergent-behavior",
        "label": "Emergent Behaviour"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:multi-agent-reinforcement-learning",
        "label": "Multi-Agent Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:concurrency",
        "label": "Concurrency"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:contract-net-protocol",
        "label": "Contract Net Protocol"
      },
      {
        "@id": "urn:ngm:class:fipa-acl",
        "label": "FIPA-ACL"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:warehouse-automation",
        "label": "Warehouse Automation"
      },
      {
        "@id": "urn:ngm:class:smart-grid",
        "label": "Smart Grid"
      },
      {
        "@id": "urn:ngm:class:algorithmic-trading",
        "label": "Algorithmic Trading"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fipa",
        "label": "FIPA"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-ai",
        "label": "Centralised AI"
      },
      {
        "@id": "urn:ngm:class:agent",
        "label": "Monolithic Agent"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:emergence",
        "label": "Emergence"
      },
      {
        "@id": "urn:ngm:class:swarm-intelligence",
        "label": "Swarm Intelligence"
      },
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent-Based Modelling"
      }
    ]
  },
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A [[Multi-Agent System]] (MAS) is a distributed computational architecture in which multiple [[Autonomous Agent]] entities — each with local perception, internal state, and independent decision-making — interact within a shared [[Agent Environment]] to accomplish individual or collective goals. Coordination arises from [[Inter-Agent Communication]], [[Stigmergy]], or market mechanisms such as the [[Contract Net Protocol]], without any agent requiring global knowledge. The aggregate behaviour of the agent population typically exhibits [[Emergence|emergent]] properties that transcend what any individual agent could achieve, placing MAS at the intersection of [[Distributed Artificial Intelligence]], [[Game Theory]], and [[Complex Systems]].

- ### Overview
  - Multi-agent systems formalise the insight that intelligence can be distributed across populations of simpler components rather than concentrated in a monolithic controller. Each agent in a MAS operates autonomously: it perceives its local environment, reasons over its observations, selects actions according to a policy, and communicates with peers. The system-level behaviour emerges from this local interaction.
  - MAS are valuable because they offer scalability (adding agents increases capacity without redesigning the whole), fault tolerance (losing one agent does not collapse the system), and the ability to model inherently distributed phenomena such as markets, ecosystems, and supply chains.
  - The paradigm is distinguished from a single [[Centralised AI]] controller by the absence of a global scheduler or omniscient oracle. This decentralisation introduces challenges including partial observability, non-stationarity (agents co-adapt simultaneously), credit assignment (attributing collective outcomes to individual contributions), and convergence under competing incentives.
  - Modern MAS increasingly use [[Large Language Model]] cores as the reasoning engine for individual agents, with tool APIs, memory stores, and structured [[Message Passing]] enabling long-horizon collaborative tasks such as autonomous research synthesis and software engineering.

- ### Key Components
  - **Agents** — [[Autonomous Agent]] entities with perception, state, reasoning, and actuation. May be homogeneous (identical architecture) or heterogeneous (specialised roles).
  - **Environment** — The [[Agent Environment]] agents inhabit; may be fully or partially observable, static or dynamic, deterministic or stochastic, discrete or continuous.
  - **Interaction Topology** — The graph structure of who can communicate with whom; ranges from fully-connected to sparse proximity networks or hierarchical trees.
  - **[[Inter-Agent Communication]]** — The exchange of messages, beliefs, intentions, and commitments using a standardised [[Agent Communication Language]] such as [[FIPA-ACL]] or KQML.
  - **[[Coordination Protocol]]** — Rules that govern joint action: auction-based allocation (e.g. [[Contract Net Protocol]]), voting, negotiation, or emergent [[Stigmergy]].
  - **[[Ontology]]** — A shared semantic vocabulary enabling agents to interpret messages consistently despite heterogeneous internal representations.
  - **Agent Policy** — The decision function mapping observations to actions; may be rule-based, planning-based, or learned via [[Multi-Agent Reinforcement Learning]] (MARL).

- ### Mechanisms & Coordination Strategies
  - **Auction and Market Mechanisms** — Agents bid for tasks or resources; the [[Contract Net Protocol]] is the canonical example, used in logistics and manufacturing scheduling.
  - **Voting and Social Choice** — Agents aggregate preferences to reach collective decisions; relevant in [[Collective Decision Making]] and democratic simulations.
  - **[[Stigmergy]]** — Indirect coordination through environmental modification, as in ant-colony path optimisation; underpins many [[Swarm Intelligence]] algorithms.
  - **Negotiation and Argumentation** — Agents exchange proposals and counter-proposals using formal argumentation frameworks to reach mutually acceptable agreements.
  - **[[Multi-Agent Reinforcement Learning]]** — Each agent learns a policy while other agents are simultaneously learning, creating a non-stationary, game-theoretic training landscape. Key algorithms include QMIX, MADDPG, and MAPPO.
  - **Centralised Training with Decentralised Execution (CTDE)** — A dominant MARL paradigm where a central critic with global state supervises training, but agents execute using only local observations.
  - **LLM-Based Orchestration** — Frameworks such as AutoGen, LangGraph, and CrewAI use [[Large Language Model]] agents that communicate via structured prompts; a [[Task Planner]] decomposes goals and assigns sub-tasks to specialist agents.

- ### Applications & Use Cases
  - **[[Warehouse Automation]]** — Hundreds of mobile robots negotiate path priorities, manage inventory, and coordinate pick-and-place operations in real time without a central traffic controller.
  - **[[Algorithmic Trading]]** — Electronic market agents submit orders, respond to price signals, and adapt strategies in sub-millisecond windows, collectively determining price discovery in modern exchanges.
  - **[[Smart Grid]] Management** — Prosumer agents balance local supply and demand, negotiate energy contracts, and respond to grid frequency deviations, enabling decentralised demand response.
  - **[[Autonomous Software Engineering]]** — LLM-agent networks decompose software specifications into sub-tasks (coding, testing, review), execute them concurrently, and merge outputs — demonstrated in systems like Devin, SWE-Agent, and AutoGen-based pipelines.
  - **[[Swarm Robotics]]** — Physically embodied MAS where miniaturised robots coordinate via local sensing and communication to achieve mapping, search-and-rescue, or construction tasks.
  - **[[Agent-Based Modelling]]** — MAS used as simulation tools to model complex social, ecological, and economic phenomena; platforms include NetLogo, Mesa, and Repast.
  - **Cybersecurity** — Cooperative intrusion-detection agents monitor network segments and share threat intelligence, enabling faster collective response than centralised security information and event management (SIEM) alone.
  - **Healthcare** — Agent-based patient-flow simulations in hospitals optimise bed allocation, staff scheduling, and emergency routing.
  - **[[Decentralised Autonomous Organisation]] (DAO) Parallels** — Governance token holders in DAOs function analogously to agents in a MAS, voting and delegating autonomously; [[bridgesTo]] [[Blockchain]] coordination research.

- ### Relationships
  - hasPart:: [[Autonomous Agent]]
  - hasPart:: [[Inter-Agent Communication]]
  - hasPart:: [[Coordination Protocol]]
  - hasPart:: [[Agent Environment]]
  - requires:: [[Agent Communication Language]]
  - requires:: [[Ontology]]
  - requires:: [[Message Passing]]
  - enables:: [[Swarm Robotics]]
  - enables:: [[Collective Decision Making]]
  - enables:: [[Autonomous Software Engineering]]
  - enables:: [[Emergent Behaviour]]
  - uses:: [[Reinforcement Learning]]
  - uses:: [[Multi-Agent Reinforcement Learning]]
  - uses:: [[Large Language Model]]
  - uses:: [[Game Theory]]
  - dependsOn:: [[Distributed Systems]]
  - dependsOn:: [[Concurrency]]
  - implements:: [[Contract Net Protocol]]
  - implements:: [[FIPA-ACL]]
  - supports:: [[Warehouse Automation]]
  - supports:: [[Smart Grid]]
  - supports:: [[Algorithmic Trading]]
  - standardizedBy:: [[FIPA]]
  - contrastsWith:: [[Centralised AI]]
  - contrastsWith:: [[Monolithic Agent]]
  - bridgesTo:: [[Decentralised Autonomous Organisation]]
  - bridgesTo:: [[Peer-to-Peer Network]]
  - relatedTo:: [[Emergence]]
  - relatedTo:: [[Swarm Intelligence]]
  - relatedTo:: [[Agent-Based Modelling]]

- ### Standards & Context
  - **[[FIPA]]** (Foundation for Intelligent Physical Agents) — The principal standards body for MAS interoperability. Produced [[FIPA-ACL]] (Agent Communication Language), FIPA-SL (Semantic Language), and interaction protocol specifications covering request, query, contract-net, subscribe, and English-auction patterns.
  - **KQML** (Knowledge Query and Manipulation Language) — An earlier ACL precursor that influenced FIPA-ACL design; largely superseded.
  - **JADE** (Java Agent DEvelopment Framework) — A widely deployed open-source MAS middleware implementing FIPA standards; used in academic and industrial deployments since 1999.
  - **IEEE P7001 / IEEE 7010** — Broader AI transparency and well-being standards that apply to MAS deployments, particularly where agent collectives affect human outcomes.
  - **EU AI Act** (2024) — Classifies some autonomous agent systems as high-risk AI, requiring conformity assessment, human oversight provisions, and robustness testing — directly applicable to MAS in healthcare, critical infrastructure, and finance.
  - **W3C Web of Things (WoT)** — Provides semantic descriptions for IoT devices that act as agents in distributed physical-cyber MAS.
  - **OpenAI Agents SDK / Anthropic Claude Tool Use API** — De-facto industry standards for LLM-based agent frameworks, shaping how modern MAS orchestrate language model agents.

- ### Historical Development
  - The theoretical roots of MAS lie in **Distributed Artificial Intelligence** (DAI) research from the 1980s, including early work on the Hearsay-II speech-understanding system (1970s), which decomposed recognition into competing knowledge-source agents.
  - The [[Contract Net Protocol]] (Reid Smith, 1980) provided the first formal task-allocation mechanism for heterogeneous agent networks.
  - The early 1990s saw the emergence of BDI (Belief-Desire-Intention) architectures (Bratman, Rao & Georgeff) offering a cognitive model for individual agent reasoning that remains influential.
  - **FIPA** standardisation efforts (1996–2002) produced interoperability specifications that enabled heterogeneous MAS across vendor platforms.
  - The introduction of [[Reinforcement Learning]]-trained agent policies in the late 1990s — and the explosion of [[Deep Learning]] from 2012 — shifted MAS research toward learned, data-driven policies, culminating in [[Multi-Agent Reinforcement Learning]] breakthroughs such as OpenAI Five (2019) and AlphaStar (2019).
  - From 2023 onwards, LLM-based MAS frameworks proliferated rapidly, bringing MAS concepts into mainstream software engineering under labels such as "agentic AI" and "AI orchestration".

- ### Current Landscape (2026)
  - Multi-agent systems have converged on a layered open-protocol stack: Anthropic's Model Context Protocol (MCP, launched November 2024) standardises the vertical agent-to-tool layer, while Google's Agent2Agent (A2A) protocol, announced April 2025, handles horizontal agent-to-agent discovery and delegation via Agent Cards published at /.well-known/agent-card.json over JSON-RPC 2.0.
  - A2A was donated to the Linux Foundation in June 2025 and reached version 1.0 in early 2026, introducing cryptographically signed Agent Cards for verifiable identity; by its one-year mark (April 2026) it had 150-plus production organisations, over 22,000 GitHub stars, and SDKs across five languages (Python, JavaScript, Java, Go, .NET).
  - MCP has effectively won the tool layer with roughly 97 million downloads and 10,000-plus published servers (PulseMCP directory), native support in VS Code (GA July 2025), Cursor, Claude Code and JetBrains, and in December 2025 governance moved to the new Linux Foundation Agentic AI Foundation.
  - Adoption spans Google, Microsoft, AWS, Salesforce, SAP, ServiceNow, Workday, IBM and Cisco, with native integration in Azure AI Foundry, Amazon Bedrock AgentCore and Google Cloud; complementary protocols have also emerged, including IBM's ACP, the community ANP, CopilotKit's AG-UI (agent-to-frontend, May 2025) and commerce-oriented ACP/UCP.
  - Orchestration frameworks consolidated in 2026: LangGraph leads enterprise production (an estimated ~38% of multi-agent deployments, paired with LangSmith observability), custom orchestration is ~28%, CrewAI (~35k stars) dominates prototyping, and Microsoft's Agent Framework (October 2025) merged AutoGen with Semantic Kernel while OpenAI's Agents SDK (March 2025) replaced the experimental Swarm.
  - Reliability remains the frontier rather than framework choice: a January 2026 arXiv large-scale study of 42K commits and 4.7K issues across eight leading MAS found agent-coordination challenges account for ~10% of issues, with recurring emergent failure modes (agents disagreeing, corrupted shared state, runaway loops) driving emphasis on eval pipelines, budget caps, replayable traces and human-in-the-loop checkpoints.

- ### References
  - 1. Iceberg Lakehouse (2026). The State of Agentic AI Standards in 2026: MCP, A2A and the Protocol Stack. https://iceberglakehouse.com/posts/state-of-agentic-ai-standards-2026/
  - 2. Zylos Research (2026). A2A, MCP, and Multi-Agent Orchestration. https://zylos.ai/research/2026-05-16-agent-to-agent-communication-protocols-a2a-mcp/
  - 3. 47Billion (2026). AI Agents in Production: What Actually Works in 2026 — Frameworks, Protocols. https://47billion.com/blog/ai-agents-in-production-frameworks-protocols-and-what-actually-works-in-2026/
  - 4. Presenc AI (2026). Multi-Agent Orchestration Frameworks 2026. https://presenc.ai/research/multi-agent-orchestration-frameworks-2026
  - 5. arXiv (2026). A Large-Scale Study on the Development and Issues of Multi-Agent AI Systems. https://arxiv.org/abs/2601.07136
  - 6. Digital Applied (2026). AI Agent Protocol Ecosystem Map 2026: MCP, A2A, ACP, UCP. https://www.digitalapplied.com/blog/ai-agent-protocol-ecosystem-map-2026-mcp-a2a-acp-ucp

- ### Provenance
  - sources:: Wooldridge & Jennings (1995) "Intelligent Agents: Theory and Practice"; Shoham & Leyton-Brown (2009) "Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations"; FIPA specifications; Russell & Norvig "Artificial Intelligence: A Modern Approach" (4th ed.)
  - updated:: 2026-06-13
