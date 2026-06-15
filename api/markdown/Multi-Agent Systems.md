public:: true
alias:: Multi Agent Systems

# multi-agent systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4dde014a50f64498cd0a8fd2844a65a650ef6d22fd036848700061a84063ea48",
  "@type": "Page",
  "vc:slug": "multi-agent-systems",
  "title": "multi-agent systems",
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
  "@id": "urn:ngm:class:multi-agent-systems",
  "@type": "Class",
  "label": "Multi-Agent Systems",
  "definition": "Multi-agent systems (MAS) are computational architectures in which multiple autonomous agents—each with their own perception, memory, reasoning, and action capabilities—interact within a shared environment to accomplish tasks that benefit from parallelisation, specialisation, or distributed coordination. Each agent operates according to local decision logic (reactive, deliberative, or hybrid) while collectively producing emergent global behaviour through communication, negotiation, and coordination protocols. In contemporary AI, MAS are realised through networks of LLM-backed agents orchestrated by frameworks that manage inter-agent messaging, tool invocation, and task decomposition. Mechanism-design principles, game theory, and classical distributed-AI theory inform how modern agentic systems handle conflict, incentive alignment, and safety in open-ended agent populations.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      },
      {
        "@id": "urn:ngm:class:agent-communication-language",
        "label": "Agent Communication Language"
      },
      {
        "@id": "urn:ngm:class:coordination-protocol",
        "label": "Coordination Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:agent-frameworks",
        "label": "Agent Frameworks"
      },
      {
        "@id": "urn:ngm:class:orchestration",
        "label": "Orchestration"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agentic-ai",
        "label": "Agentic AI"
      },
      {
        "@id": "urn:ngm:class:task-planning",
        "label": "Task Planning"
      },
      {
        "@id": "urn:ngm:class:emergent-behavior",
        "label": "Emergent Behaviour"
      },
      {
        "@id": "urn:ngm:class:collective-intelligence",
        "label": "Collective Intelligence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      },
      {
        "@id": "urn:ngm:class:concurrency",
        "label": "Concurrency"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:mechanism-design",
        "label": "Mechanism Design"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:belief-desire-intention",
        "label": "Belief-Desire-Intention"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:swarm-intelligence",
        "label": "Swarm Intelligence"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
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
        "@id": "urn:ngm:class:single-agent-systems",
        "label": "Single-Agent Systems"
      },
      {
        "@id": "urn:ngm:class:monolithic-ai",
        "label": "Monolithic AI"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisations"
      },
      {
        "@id": "urn:ngm:class:digital-twins",
        "label": "Digital Twins"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:mas",
      "label": "MAS"
    },
    {
      "@id": "urn:ngm:class:agent-based-systems",
      "label": "Agent-Based Systems"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Multi-agent systems (MAS) are computational architectures in which multiple [[Autonomous Agent]]s—each with their own perception, memory, reasoning, and action capabilities—interact within a shared environment to accomplish tasks that benefit from parallelisation, specialisation, or distributed coordination. Each agent operates according to local decision logic (reactive, deliberative, or hybrid) while collectively producing emergent global behaviour through [[Coordination Protocol]]s and negotiation. In contemporary AI, MAS are realised through networks of [[Large Language Models]]-backed agents orchestrated by [[Agent Frameworks]] that manage inter-agent messaging, tool invocation, and [[Task Planning]]. Mechanism-design principles from [[Game Theory]] inform how modern agentic systems handle conflict, incentive alignment, and safety in open-ended agent populations.

- ### Overview
  - Multi-agent systems represent a foundational paradigm in [[Distributed Artificial Intelligence]] where the collective emerges from the interaction of individual, autonomous decision-makers.
  - The field synthesises ideas from [[Distributed Computing]], [[Game Theory]], economics, social science, and cognitive science into a single engineering discipline.
  - The core insight is that many real-world problems—from resource allocation to scientific discovery—are inherently distributed: no single agent has complete information or sufficient computational capacity to solve them alone.
  - MAS architectures provide principled approaches for decomposing complex tasks, maintaining partial autonomy, tolerating failures, and scaling horizontally across agent populations.
  - Contemporary relevance has surged with the emergence of [[Agentic AI]]: large-scale deployments of LLM-backed agents cooperating on software engineering, research synthesis, customer service, and scientific workflows.

- ### Key Components
  - #### Agent Architecture
    - **[[Autonomous Agent]]**: the fundamental unit; perceives its environment via sensors or API calls, maintains internal state, reasons over it, and acts through effectors or tool calls.
    - **[[Belief-Desire-Intention]] (BDI) agents**: deliberative agents whose cognition is modelled as beliefs (world state), desires (goals), and intentions (committed plans). Prominent in classical MAS (PRS, JACK, Jadex).
    - **[[Reactive Agents]]**: stimulus-response agents without internal symbolic state; suited to fast, resource-constrained environments (Brooks' subsumption architecture).
    - **Hybrid architectures**: layered designs combining a reactive layer for real-time response with a deliberative layer for strategic planning.
    - **LLM-based agents**: modern instantiation using [[Large Language Models]] as the reasoning core, augmented with tool use, [[Memory]], and reflection loops (ReAct, Reflexion, Tree-of-Thought).
  - #### Communication & Coordination
    - **[[Agent Communication Language]] (ACL)**: standardised message formats—FIPA-ACL and KQML—provide semantic primitives (inform, request, propose, accept, reject) that allow heterogeneous agents to exchange intentions.
    - **[[Message Passing]]**: the substrate for inter-agent communication; may be synchronous (RPC-style), asynchronous (queue-backed), or broadcast (blackboard).
    - **[[Coordination Protocol]]s**: negotiation protocols (Contract Net Protocol, auction mechanisms, consensus algorithms) that produce acceptable joint plans without centralised control.
    - **Blackboard architecture**: shared data store that agents read from and write to; decouples producers from consumers and supports opportunistic coordination.
  - #### Orchestration Layer
    - **[[Orchestration]]**: the supervisor process or meta-agent responsible for task decomposition, agent assignment, context window management, and result aggregation.
    - **[[Agent Frameworks]]**: software libraries providing abstractions for defining agent roles, communication topologies, and retry/fallback logic—including LangGraph, AutoGen, CrewAI, MetaGPT, and OpenAI Swarm.
    - **Topology**: agents may be organised hierarchically (manager → worker), as peer-to-peer networks, in pipeline chains, or in market-inspired architectures where agents bid for tasks.
  - #### Environment & Perception
    - **Environment**: may be physical (robotics arena), simulated (game engine, digital twin), or virtual (shared API/database). Characterised by observability, determinism, dynamism, and continuity.
    - **Tool use**: LLM agents extend perception via tool calls—web search, code execution, database queries, image generation—effectively expanding the agent's action space.
    - **[[Memory]]**: agents maintain episodic (conversation history), semantic (knowledge base), procedural (cached skill programs), and working memory (context window) to sustain coherent behaviour across turns.

- ### Mechanisms
  - #### Task Decomposition & Planning
    - A planner agent (or orchestrator) receives a high-level goal and decomposes it into subtasks using hierarchical task network planning, prompt-based chain-of-thought, or LLM-generated execution plans.
    - Subtasks are dispatched to specialist agents (coders, researchers, critics, summarisers) whose outputs are aggregated by a synthesis agent.
    - [[Task Planning]] strategies include sequential pipelines, parallel fan-out, and iterative refinement loops with critic agents providing quality signals.
  - #### Negotiation & Incentive Alignment
    - [[Mechanism Design]] provides the theoretical basis for designing protocols where rational, self-interested agents nevertheless produce socially desirable outcomes.
    - Auction mechanisms (Vickrey, combinatorial) and the Contract Net Protocol are classical solutions for task allocation in competitive or resource-constrained settings.
    - In LLM-based MAS, alignment is less formal: system prompts, role definitions, and critic-agent feedback loops substitute for explicit utility functions.
  - #### Learning in MAS
    - [[Reinforcement Learning]] extended to multi-agent settings (MARL) addresses credit assignment—determining each agent's contribution to a joint reward—and non-stationarity introduced by simultaneously learning agents.
    - Self-play (AlphaGo, AlphaStar, OpenAI Five) uses agents as their own training partners to bootstrap strong policies in two-player or team games.
    - [[Swarm Intelligence]] techniques (ant colony optimisation, particle swarm) derive from the observation that simple local rules among many agents produce sophisticated global behaviour without centralised coordination.
  - #### Safety & Governance
    - Open-ended MAS populations can develop emergent communication, deceptive strategies, or reward-hacking behaviours not anticipated by designers.
    - [[AI Safety]] research in MAS focuses on safe exploration, corrigibility, and preventing coordinated failures across agent networks.
    - [[Explainability]] is challenged by the distributed nature of decisions—no single agent holds the full causal chain of a multi-agent outcome.

- ### Applications
  - #### Software Engineering & Development
    - MAS pipelines (MetaGPT, ChatDev, SWE-Agent, Devin) assign planner, coder, reviewer, and tester roles to distinct LLM agents, collaborating on complete software projects.
    - Automated code review, test generation, and CI/CD pipeline management are implemented as specialised sub-agents within larger orchestration graphs.
  - #### Scientific Research Assistance
    - Multi-agent workflows decompose literature review, hypothesis generation, experiment design, and result interpretation across specialist agents, accelerating research cycles in biology, chemistry, and materials science.
  - #### Robotics & Physical Systems
    - [[Robotics]] fleets (warehouse robots, drone swarms, autonomous vehicles in traffic) coordinate using MAS principles to allocate tasks, avoid collisions, and share sensor data in real time.
    - Formation control, coverage planning, and search-and-rescue missions rely on decentralised coordination protocols that remain robust to individual agent failures.
  - #### Simulation & Digital Twins
    - [[Digital Twins]] of cities, supply chains, and industrial plants use agent-based models (ABM) to simulate emergent system behaviour from individual actor decisions.
    - MAS simulations are used in epidemiology, economics, and urban planning to evaluate policy interventions.
  - #### IoT & Edge Computing
    - [[IoT Networks]] deploy lightweight reactive agents on edge devices that coordinate locally, reducing latency and bandwidth to cloud services.
    - Smart grid management, traffic optimisation, and building automation use MAS for real-time distributed control.
  - #### Decentralised Finance & Governance
    - [[Decentralised Autonomous Organisations]] (DAOs) can be modelled as MAS where on-chain agents execute governance proposals and manage treasury allocation.
    - Algorithmic market-making, liquidation bots, and arbitrage agents in DeFi are practical MAS deployments on blockchain.

- ### Relationships
  - hasPart:: [[Autonomous Agent]]
  - hasPart:: [[Agent Communication Language]]
  - hasPart:: [[Coordination Protocol]]
  - uses:: [[Agent Frameworks]]
  - uses:: [[Orchestration]]
  - uses:: [[Large Language Models]]
  - uses:: [[Message Passing]]
  - enables:: [[Agentic AI]]
  - enables:: [[Task Planning]]
  - enables:: [[Emergent Behaviour]]
  - enables:: [[Collective Intelligence]]
  - requires:: [[Distributed Computing]]
  - requires:: [[Concurrency]]
  - dependsOn:: [[Game Theory]]
  - dependsOn:: [[Mechanism Design]]
  - implements:: [[Belief-Desire-Intention]]
  - implements:: [[Reactive Agents]]
  - supports:: [[Reinforcement Learning]]
  - supports:: [[Swarm Intelligence]]
  - supports:: [[Robotics]]
  - standardizedBy:: [[FIPA]]
  - contrastsWith:: [[Single-Agent Systems]]
  - contrastsWith:: [[Monolithic AI]]
  - bridges-to:: [[Decentralised Autonomous Organisations]]
  - bridges-to:: [[Digital Twins]]
  - bridges-to:: [[IoT Networks]]
  - relatedTo:: [[AI Safety]]
  - relatedTo:: [[Explainability]]

- ### Standards & Context
  - **FIPA (Foundation for Intelligent Physical Agents)**: produced the canonical standards for [[Agent Communication Language]] (FIPA-ACL), interaction protocols (Contract Net, Subscribe, Request), and agent management infrastructure. Now largely maintained as a legacy reference.
  - **IEEE P7001 (Transparency of Autonomous Systems)**: addresses observability and explainability requirements relevant to MAS deployments.
  - **W3C Web of Things (WoT)**: provides Thing Description specifications that dovetail with MAS agent interfaces for [[IoT Networks]] deployments.
  - **OpenAI Assistants API / Responses API**: de-facto industrial standard for deploying LLM-backed agents with tool use and persistent threads, widely used in MAS compositions.
  - **Model Context Protocol (MCP)**: Anthropic-initiated open specification standardising how LLM agents discover and invoke external tools—an emerging inter-agent integration standard.
  - **AgentOps / OpenTelemetry**: emerging observability standards for tracing agent execution chains, monitoring token budgets, and auditing inter-agent communication logs.
  - Academic canonical venues: AAMAS (Autonomous Agents and Multi-Agent Systems), AAAI, IJCAI, and the journal Autonomous Agents and Multi-Agent Systems (Springer).

- ### Provenance
  - sources:: FIPA specifications; Wooldridge & Jennings "Intelligent Agents" (1995); Russell & Norvig AIMA; Shoham & Leyton-Brown "Multiagent Systems" (2009); Liang et al. "Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate" (2023)
  - updated:: 2026-06-13
