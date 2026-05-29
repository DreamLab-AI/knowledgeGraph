public:: true

# Agent-Based Models
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agent-based-models",
  "@type": "Page",
  "vc:slug": "agent-based-models",
  "title": "Agent-Based Models",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-based-models",
  "@type": "Class",
  "label": "Agent-Based Models",
  "definition": "Agent-Based Models (ABMs) are computational simulation frameworks that represent systems as collections of autonomous, heterogeneous agents that interact with one another and their environment according to local rules, allowing complex global behaviours and emergent phenomena to arise from the bottom up without being explicitly programmed at the system level. They are a primary tool in complexity science for studying social, biological, economic, and technical systems.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:computational-intelligence", "label": "Computational Intelligence"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"},
      {"@id": "urn:ngm:class:behavioral-modeling", "label": "Behavioral Modeling"},
      {"@id": "urn:ngm:class:scientific-computing", "label": "Scientific Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:emergence", "label": "Emergence"},
      {"@id": "urn:ngm:class:collective-intelligence", "label": "Collective Intelligence"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Agent-Based Models]] are simulation frameworks in which a system is represented as a population of discrete [[Autonomous Agent]] entities, each governed by its own state variables, decision rules, and interaction protocols. Agents perceive their local environment and neighbourhood, update their state, and generate actions; the aggregate of these micro-level interactions produces macro-level patterns through [[Emergence]]. Unlike equation-based models (differential equations, system dynamics), ABMs preserve agent heterogeneity and stochastic variation, making them well suited to modelling non-linear dynamics, phase transitions, and path-dependent outcomes. The approach draws on [[Behavioral Modeling]] for agent rule specification and on [[Scientific Computing]] for execution.

- ### Relationships
  - [[Agent-Based Models]] are a subclass of [[Computational Intelligence]] methods. They require definitions of [[Autonomous Agent]] entities with internal state and behavioural rules. They produce [[Emergence]] and [[Collective Intelligence]] phenomena at the population level, driven by local interaction and [[Feedback Loop]] mechanisms. [[Behavioral Modeling]] informs the agent decision rules, and [[Scientific Computing]] infrastructure scales simulations to millions of agents.

- ### Content
  - ABMs trace their origins to Thomas Schelling's segregation model (1969) and John Conway's Game of Life, followed by Craig Reynolds' Boids flocking algorithm (1987). The framework was formalised in the 1990s through work at the Santa Fe Institute on complex adaptive systems, with platforms such as StarLogo and later NetLogo (Uri Wilensky, 1999) democratising agent-based simulation. The field coalesced around the SWARM toolkit and, academically, around the Journal of Artificial Societies and Social Simulation.

  - An ABM consists of four core components: (1) agents with attributes and behavioural rules (conditionals, utility functions, or learned policies); (2) an environment (grid, network, continuous space, or GIS layer) that agents inhabit and modify; (3) a scheduler that determines the order of agent activation (synchronous or asynchronous); and (4) an output layer that records aggregate statistics and micro-trajectories. Modern implementations in Mesa (Python), Agents.jl (Julia), or MASON (Java) support parallel execution and GPU acceleration for large-scale runs, with sensitivity analysis via tools such as OpenMOLE.

  - ABMs are applied extensively in epidemiology (SARS-CoV-2 transmission models by Imperial College, CDC, and WHO informed pandemic policy), economics (agent-based macro models at Banca d'Italia and OECD challenge DSGE orthodoxy), ecology (predator-prey dynamics and conservation planning), urban planning (pedestrian flow and evacuation simulation), and supply chain resilience analysis. Military and defence planners use ABMs for conflict escalation and logistics modelling, while AI researchers use them to study emergent communication and coordination in multi-agent reinforcement learning environments.

  - In 2024–2025, LLM-driven agents are being integrated into ABMs as behavioural engines, replacing hand-coded rules with generative language models capable of nuanced, context-sensitive reasoning — a direction termed "generative agent" simulation following work by Park et al. (Stanford, 2023). This opens new possibilities for social science simulation but introduces challenges of computational cost, calibration, and interpretability. Digital twin platforms are increasingly incorporating ABM layers for real-time operational simulation of smart cities, factory floors, and financial markets.