public:: true

# MAS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mas",
  "@type": "Page",
  "vc:slug": "mas",
  "title": "MAS",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mas",
  "@type": "Class",
  "label": "MAS",
  "definition": "A Multi-Agent System (MAS) is a computational framework composed of multiple interacting autonomous agents that perceive their environment and act to achieve individual or collective goals. Each agent maintains local knowledge, reasoning capabilities, and the ability to communicate with peers, enabling emergent collective intelligence without centralised control. MAS architectures address problems that are too complex, distributed, or dynamic for monolithic solutions, drawing on distributed AI, game theory, and coordination theory. The paradigm spans reactive swarm systems, deliberative BDI agents, and modern LLM-orchestrated agentic pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "sameAs": [
    {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"},
    {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"},
      {"@id": "urn:ngm:class:agent-communication-language", "label": "Agent Communication Language"},
      {"@id": "urn:ngm:class:coordination-mechanism", "label": "Coordination Mechanism"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"},
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralized-swarm-control", "label": "Decentralized Swarm Control"},
      {"@id": "urn:ngm:class:participant-coordination", "label": "Participant Coordination"},
      {"@id": "urn:ngm:class:emergent-behaviour", "label": "Emergent Behaviour"},
      {"@id": "urn:ngm:class:collective-intelligence", "label": "Collective Intelligence"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:belief-desire-intention", "label": "Belief-Desire-Intention"},
      {"@id": "urn:ngm:class:contract-net-protocol", "label": "Contract Net Protocol"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:fipa-standard", "label": "FIPA Standard"},
      {"@id": "urn:ngm:class:game-theory", "label": "Game Theory"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:multi-agent-reinforcement-learning", "label": "Multi-Agent Reinforcement Learning"},
      {"@id": "urn:ngm:class:agentic-pipeline", "label": "Agentic Pipeline"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:centralised-control-system", "label": "Centralised Control System"},
      {"@id": "urn:ngm:class:monolithic-ai", "label": "Monolithic AI"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:swarm-robotics", "label": "Swarm Robotics"},
      {"@id": "urn:ngm:class:distributed-artificial-intelligence", "label": "Distributed Artificial Intelligence"},
      {"@id": "urn:ngm:class:agent-based-modelling", "label": "Agent-Based Modelling"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:decentralised-autonomous-organisation", "label": "Decentralised Autonomous Organisation"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A [[MAS]] (Multi-Agent System) is a distributed computational paradigm in which multiple [[Autonomous Agent]] entities interact within a shared environment, coordinating through [[Communication Protocol]] to solve problems that exceed the capability of any single agent. MAS draws on [[Distributed Artificial Intelligence]], [[Game Theory]], and coordination theory to model systems where no single controller has global oversight. The paradigm is foundational to [[Swarm Robotics]], [[Multi-Agent Reinforcement Learning]], and modern [[Agentic Pipeline]] architectures.

- ### Overview
  - Multi-Agent Systems arose from the limitations of single-agent AI: many real-world problems are inherently distributed, too large for one processor, or require concurrent specialised expertise. By decomposing a task across cooperating [[Autonomous Agent]] entities, a MAS achieves parallelism, robustness through redundancy, and scalability that monolithic systems cannot match.
  - The formal study of MAS emerged from distributed AI research in the 1980s at MIT, SRI, and CMU. Key milestones include the Contract Net Protocol (Reid Smith, 1980) for distributed task allocation, the Belief-Desire-Intention (BDI) model (Rao and Georgeff, 1991) giving agents explicit mental-state representations, and the FIPA agent communication standards (1997–2002) that defined interoperability at the platform level.
  - Today MAS spans a spectrum from lightweight reactive swarms (no internal state) to deliberative BDI agents running full planning loops, to hybrid designs. The most recent wave — LLM-native MAS — treats [[Large Language Model]] instances as agents within orchestration frameworks such as AutoGen, CrewAI, and LangGraph.
  - Why it matters: MAS can exhibit [[Emergent Behaviour]] — global patterns arising from local interactions — enabling solutions to adaptive, dynamic problems in robotics, supply chains, financial markets, and autonomous infrastructure management.

- ### Key Components
  - **Agent** — the atomic unit; an entity with perception, reasoning, and action capabilities that operates autonomously within the environment. See [[Autonomous Agent]].
  - **Environment** — the shared or distributed state space that agents perceive and modify; may be fully or partially observable, static or dynamic.
  - **Agent Communication Language (ACL)** — the syntax and semantics of inter-agent messages. [[Agent Communication Language]] defines performatives (inform, request, propose, accept) used in negotiation and coordination.
  - **Coordination Mechanism** — protocols governing how agents align actions to avoid conflict and exploit complementarity. Types include:
    - *Market-based*: agents bid on tasks; the [[Contract Net Protocol]] is the canonical example.
    - *Negotiation*: bilateral or multi-lateral bargaining using [[Game Theory]] payoff structures.
    - *Stigmergy*: indirect coordination via environment modification (e.g., ant-colony pheromone trails). See [[Emergent Behaviour]].
    - *Voting and consensus*: agents reach shared decisions via [[Consensus Mechanism]].
  - **Belief-Desire-Intention (BDI) Architecture** — agents maintain a belief base (world model), desires (goals), and intentions (committed plans). The [[Belief-Desire-Intention]] model underpins AgentSpeak and JADE-based systems.
  - **Ontology / Shared Vocabulary** — a common [[Knowledge Representation]] schema enabling semantic interoperability across heterogeneous agents.
  - **Platform / Middleware** — runtime infrastructure (JADE, SPADE, Mesa) providing agent lifecycle management, messaging, and yellow-pages services. Implements [[FIPA Standard]] specifications.

- ### Agent Architectures
  - **Reactive agents** — pure stimulus-response; no internal state. Fast and robust but limited in deliberative capacity. Associated with subsumption architecture ([[Behaviour-Based Robotics]]).
  - **Deliberative agents** — maintain explicit world models and perform planning. Higher reasoning overhead but capable of long-horizon goal pursuit. BDI is the dominant model.
  - **Hybrid agents** — reactive layer for immediate response; deliberative layer for planning. Most production MAS deployments use hybrid designs.
  - **Learning agents** — adapt behaviour through [[Reinforcement Learning]] or supervised updates. In multi-agent settings this becomes [[Multi-Agent Reinforcement Learning]] (MARL), where agents learn jointly and equilibria may be non-stationary.
  - **LLM-powered agents** — use [[Large Language Model]] inference as the reasoning engine, enabling natural-language task decomposition, code generation, and tool use within a MAS harness (AutoGen, CrewAI, OpenAI Swarm SDK, LangGraph).

- ### Coordination Patterns
  - **Task decomposition and allocation** — a decomposer agent breaks a composite task into subtasks, which are allocated to specialist agents via market mechanisms or direct assignment.
  - **Negotiation** — agents exchange proposals and counter-proposals, converging on mutually acceptable plans. Rooted in classical [[Game Theory]] solution concepts (Nash equilibrium, Pareto optimality).
  - **Coalition formation** — subsets of agents form temporary alliances to tackle tasks requiring combined resources. Coalition value is modelled with cooperative game theory.
  - **Stigmergic coordination** — agents leave traces in the shared environment that influence subsequent agent behaviour, enabling [[Emergent Behaviour]] without direct communication.
  - **Shared plan / joint intention** — agents explicitly commit to a shared plan, tracked through distributed joint-commitment protocols.

- ### Applications and Use Cases
  - **Autonomous logistics and warehousing** — fleets of mobile robots coordinate picking, packing, and routing in large fulfilment centres. Commercial deployments (e.g., Amazon Robotics) use MAS-style coordination at scale.
  - **Air-traffic management** — distributed agent systems resolve conflicts between aircraft, balancing throughput and safety constraints in real time.
  - **Power-grid balancing** — smart-grid architectures deploy MAS to negotiate load shedding, renewable dispatch, and demand response across prosumers.
  - **Swarm robotics** — see [[Swarm Robotics]]. Large numbers of simple robots achieve collective tasks (mapping, construction, search-and-rescue) through stigmergic and local communication protocols.
  - **Financial algorithmic trading** — competing and cooperating trading agents execute strategies across fragmented markets; emergent market microstructure arises from agent interactions.
  - **Multi-agent reinforcement learning research** — competitive and cooperative MARL benchmarks (StarCraft Multi-Agent Challenge, Hanabi Challenge, OpenAI Five) drive capability advances. See [[Multi-Agent Reinforcement Learning]].
  - **Agent-based modelling and simulation** — social scientists, epidemiologists, and urban planners use MAS frameworks (Mesa, NetLogo) to simulate population-level phenomena. See [[Agent-Based Modelling]].
  - **LLM orchestration pipelines** — modern agentic AI products decompose complex user tasks across specialised LLM agents (planner, coder, critic, retriever). See [[Agentic Pipeline]] and [[Large Language Model]].
  - **Decentralised Autonomous Organisations** — blockchain-anchored governance systems where smart contracts and algorithmic agents collectively manage treasuries and protocols. Bridging MAS with [[Decentralised Autonomous Organisation]].

- ### Relationships
  - hasPart:: [[Autonomous Agent]]
  - hasPart:: [[Agent Communication Language]]
  - hasPart:: [[Coordination Mechanism]]
  - requires:: [[Communication Protocol]]
  - requires:: [[Distributed Computing]]
  - enables:: [[Decentralized Swarm Control]]
  - enables:: [[Participant Coordination]]
  - enables:: [[Emergent Behaviour]]
  - enables:: [[Collective Intelligence]]
  - uses:: [[Consensus Mechanism]]
  - uses:: [[Reinforcement Learning]]
  - uses:: [[Belief-Desire-Intention]]
  - uses:: [[Contract Net Protocol]]
  - implements:: [[FIPA Standard]]
  - implements:: [[Game Theory]]
  - supports:: [[Multi-Agent Reinforcement Learning]]
  - supports:: [[Agentic Pipeline]]
  - contrastsWith:: [[Centralised Control System]]
  - relatedTo:: [[Swarm Robotics]]
  - relatedTo:: [[Distributed Artificial Intelligence]]
  - relatedTo:: [[Agent-Based Modelling]]
  - bridges-to:: [[Large Language Model]]
  - bridges-to:: [[Decentralised Autonomous Organisation]]

- ### Standards and Context
  - **FIPA** (Foundation for Intelligent Physical Agents) — the primary standards body for MAS interoperability, active from 1996 to ~2005. FIPA ACL and FIPA agent management specifications remain the de facto reference for platform-level interoperability. See [[FIPA Standard]].
  - **IEEE P1872** — ontology standard for robotics and automation that intersects with MAS in multi-robot coordination contexts.
  - **JADE** (Java Agent DEvelopment Framework) — the most widely used open-source FIPA-compliant MAS platform; used in research and enterprise deployments.
  - **KQML** (Knowledge Query and Manipulation Language) — predecessor to FIPA ACL; established the performative-based message model. See [[Knowledge Representation]].
  - **AgentSpeak / Jason** — BDI-oriented agent programming language used to specify deliberative agent behaviour formally.
  - **OpenAI Swarm, AutoGen, CrewAI, LangGraph** — post-2023 LLM-native MAS frameworks that adopt agent orchestration without formal FIPA compliance, reflecting a practical rather than standards-driven evolution.
  - Regulatory context is emerging: the EU AI Act classifies autonomous agentic systems under high-risk categories when deployed in critical infrastructure, requiring logging, human oversight, and explainability — directly relevant to production MAS deployments.

- ### Challenges and Open Problems
  - **Formal verification** — proving correctness properties (liveness, safety, fairness) for systems with emergent, non-deterministic agent interactions remains an open research problem.
  - **Scalability of coordination** — communication overhead grows with agent count; scalable protocols (gossip, hierarchical coordination) are active research areas.
  - **Trust and reputation** — agents may be self-interested or malicious; trust models and reputation systems are required for open MAS where agent identities are not pre-certified.
  - **Alignment of collective goals** — ensuring that individually rational agent strategies produce collectively desirable outcomes (avoiding tragedy-of-the-commons dynamics) links MAS to AI alignment research.
  - **Non-stationarity in MARL** — when multiple agents learn simultaneously, the environment appears non-stationary from each agent's perspective, destabilising convergence. See [[Multi-Agent Reinforcement Learning]].
  - **Semantic heterogeneity** — agents built by different developers may use incompatible ontologies; shared [[Knowledge Representation]] standards mitigate but do not eliminate this.

- ### Provenance
  - sources:: Weiss, G. (ed.) *Multiagent Systems*, MIT Press (1999, 2013 ed.); Wooldridge, M. *An Introduction to MultiAgent Systems*, Wiley (2009); Russell & Norvig *Artificial Intelligence: A Modern Approach* (4th ed., 2021); FIPA specifications (fipa.org); Lowe et al. *Multi-Agent Actor-Critic for Mixed Cooperative-Competitive Environments* (NeurIPS 2017)
  - updated:: 2026-06-13
