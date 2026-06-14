public:: true

# Agent-Based Modelling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9c31a8b7c1310d72810b758ce9008b46d461d79166dcf458ce805467a02176eb",
  "@type": "Page",
  "vc:slug": "agent-based-modelling",
  "title": "Agent-Based Modelling",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:simulation",
      "vc:label": "Simulation"
    },
    {
      "@id": "urn:visionflow:linked:innovation-diffusion",
      "vc:label": "Innovation Diffusion"
    },
    {
      "@id": "urn:visionflow:linked:economic-model",
      "vc:label": "Economic Model"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-systems",
      "vc:label": "Multi-Agent Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Agent-Based Modelling"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-based-modelling",
  "@type": "Class",
  "label": "Agent-Based Modelling",
  "definition": "Agent-based modelling (ABM) is a computational simulation methodology in which a system is represented as a collection of autonomous, heterogeneous agents that each follow local behavioural rules and interact with one another and with their environment. The global dynamics of interest — such as market prices, epidemic spread, or traffic congestion — emerge from these micro-level interactions rather than being specified analytically. ABM bridges individual behaviour and system-level phenomena, making it particularly powerful for studying complex adaptive systems where aggregate equations cannot capture heterogeneity or non-linear feedback loops. The approach is distinct from equation-based modelling in that agents are discrete, can differ individually, and can adapt their strategies through reinforcement or learning mechanisms.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:simulation",
      "label": "Simulation"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:agent-based-simulation",
      "label": "Agent-Based Simulation"
    },
    {
      "@id": "urn:ngm:class:individual-based-modelling",
      "label": "Individual-Based Modelling"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      },
      {
        "@id": "urn:ngm:class:environment-model",
        "label": "Environment Model"
      },
      {
        "@id": "urn:ngm:class:emergence",
        "label": "Emergence"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:complex-systems-science",
        "label": "Complex Systems Science"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      },
      {
        "@id": "urn:ngm:class:discrete-event-simulation",
        "label": "Discrete Event Simulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:innovation-diffusion",
        "label": "Innovation Diffusion"
      },
      {
        "@id": "urn:ngm:class:epidemiological-modelling",
        "label": "Epidemiological Modelling"
      },
      {
        "@id": "urn:ngm:class:crowd-simulation",
        "label": "Crowd Simulation"
      },
      {
        "@id": "urn:ngm:class:supply-chain-optimisation",
        "label": "Supply Chain Optimisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:computational-modelling",
        "label": "Computational Modelling"
      },
      {
        "@id": "urn:ngm:class:stochastic-process",
        "label": "Stochastic Process"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:complex-adaptive-systems",
        "label": "Complex Adaptive Systems"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:cellular-automata",
        "label": "Cellular Automata"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-simulation",
        "label": "Monte Carlo Simulation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:economic-model",
        "label": "Economic Model"
      },
      {
        "@id": "urn:ngm:class:policy-simulation",
        "label": "Policy Simulation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:equation-based-modelling",
        "label": "Equation-Based Modelling"
      },
      {
        "@id": "urn:ngm:class:system-dynamics",
        "label": "System Dynamics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      },
      {
        "@id": "urn:ngm:class:swarm-intelligence",
        "label": "Swarm Intelligence"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:network-science",
        "label": "Network Science"
      },
      {
        "@id": "urn:ngm:class:social-simulation",
        "label": "Social Simulation"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:agent-based-modelling:65e478a94f98",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9c31a8b7c1310d72810b758ce9008b46d461d79166dcf458ce805467a02176eb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Simulation]]",
      "resolved": "urn:visionflow:linked:simulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Innovation Diffusion]]",
      "resolved": "urn:visionflow:linked:innovation-diffusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Economic Model]]",
      "resolved": "urn:visionflow:linked:economic-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Agent Systems]]",
      "resolved": "urn:visionflow:linked:multi-agent-systems",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Agent-based modelling (ABM) is a [[Computational Modelling]] methodology that represents a system as a population of autonomous, heterogeneous agents, each obeying local behavioural rules and interacting within a shared environment. Macro-level patterns — such as price dynamics in a [[Economic Model]], the spread of disease in [[Epidemiological Modelling]], or segregation in social systems — emerge from these micro-level interactions rather than being specified analytically. ABM is closely related to [[Multi-Agent Systems]] and shares conceptual grounding with [[Complex Adaptive Systems]] and [[Swarm Intelligence]], distinguishing itself from [[System Dynamics]] and [[Equation-Based Modelling]] by preserving agent heterogeneity and discrete individuality throughout the [[Simulation]].

- ### Overview
  - Agent-based modelling emerged in the 1970s–1990s from work in artificial life, complex systems, and computational social science, reaching widespread adoption in epidemiology, ecology, economics, and defence planning.
  - The core insight is bottom-up causation: global phenomena need not be specified top-down; instead they arise from repeated local interactions among individual entities. This makes ABM uniquely suited to:
    - Studying [[Emergence]] — where the whole is qualitatively different from the sum of its parts.
    - Capturing heterogeneity — agents may differ in state, strategy, information, or capability.
    - Modelling non-equilibrium and path-dependent dynamics that equilibrium models cannot represent.
    - Performing counterfactual and policy experiments in silico before real-world deployment.
  - ABM lies at the intersection of computer science, [[Complex Systems Science]], statistical physics, and social science. It is considered an established methodology with mature tooling and a substantial body of validated applications.

- ### Key Components
  - #### Agents
    - Discrete, identifiable entities that perceive their local environment and act according to behavioural rules.
    - Agents may be homogeneous (identical rules) or heterogeneous (individually varied parameters, strategies, or histories).
    - Each [[Autonomous Agent]] carries its own state vector (e.g. wealth, health status, location, memory).
  - #### Environment
    - The shared space in which agents operate — may be spatial (grid, continuous plane, GIS landscape), topological ([[Network Science]] graph), or abstract.
    - Agents interact with the [[Environment Model]] directly (foraging, moving) and indirectly (leaving signals, competing for resources).
  - #### Interaction Rules
    - Local rules governing how agents respond to neighbours, resources, and signals.
    - Rules can encode economics (bidding, bargaining), biology (infection transmission), or social behaviour (opinion adoption).
    - Rules may be adaptive: agents can learn via [[Reinforcement Learning]] or evolutionary mechanisms.
  - #### Emergence
    - [[Emergence]] is the defining output: aggregate patterns (price formation, wave dynamics, clustering) that arise without being hard-coded.
    - Emergent behaviour is validated against real-world data — a key calibration challenge.
  - #### Scheduler / Time-Stepping
    - ABMs step through discrete time ticks or use event queues (similar to [[Discrete Event Simulation]]).
    - Activation order (synchronous vs. asynchronous) can affect outcomes, so scheduling discipline is part of model design.
  - #### [[Stochastic Process]]
    - Most ABMs incorporate randomness — via [[Monte Carlo Simulation]] draws or stochastic rules — to reflect real-world variability and explore sensitivity.

- ### Mechanisms
  - **Local interaction**: Agents only perceive a neighbourhood, producing global order through iterated local computation. This mirrors [[Cellular Automata]] logic.
  - **Adaptation and learning**: Agents may update rules based on outcomes — e.g. strategy evolution via genetic algorithms, or policy updating via [[Reinforcement Learning]].
  - **Spatial dynamics**: Movement, territory, and proximity can be modelled explicitly, enabling spatial diffusion and clustering studies (links to [[Innovation Diffusion]] and [[Crowd Simulation]]).
  - **Network-mediated interaction**: When agents are connected by a social or trade network, ABM on graphs combines with [[Network Science]] to study cascades and contagion.
  - **Calibration and validation**: Model parameters are fitted to observed data; outputs compared to empirical distributions or stylised facts, linking ABM to statistical inference and sensitivity analysis.

- ### Applications and Use Cases
  - #### Economics and Finance
    - Simulating market microstructure, order-book dynamics, and price formation in [[Economic Model]] frameworks — the Santa Fe artificial stock market was an early landmark.
    - Modelling systemic risk propagation across banking networks and [[Supply Chain Optimisation]] disruptions.
    - Studying [[Innovation Diffusion]] and technology adoption curves.
  - #### Epidemiology and Public Health
    - [[Epidemiological Modelling]] of infectious disease spread (COVID-19, influenza) at the individual level, capturing heterogeneous contact patterns and intervention efficacy.
    - Evaluating vaccination strategies, quarantine policies, and spatial containment measures through [[Policy Simulation]].
  - #### Ecology and Environment
    - Modelling predator-prey dynamics, species competition, and habitat fragmentation with individual-based population models.
    - Studying collective animal behaviour ([[Swarm Intelligence]]: flocking, schooling) and [[Emergence]] of group patterns.
  - #### Social Science and Urban Planning
    - Thomas Schelling's segregation model — one of the earliest ABMs — showed how mild individual preferences produce strong residential segregation.
    - [[Social Simulation]] of opinion dynamics, social norm emergence, and rumour propagation.
    - Urban traffic simulation and [[Crowd Simulation]] for evacuation planning and infrastructure design.
  - #### Defence and Security
    - Wargaming, logistics planning, and scenario analysis using ABM to simulate adversarial behaviour and friction.
  - #### Digital Twins
    - ABM engines are core components of operational [[Digital Twin]] systems, where real-time sensor data drives live agent behaviour in aerospace, manufacturing, and smart cities.

- ### Relationships
  - partOf:: [[Complex Systems Science]]
  - requires:: [[Simulation]]
  - requires:: [[Discrete Event Simulation]]
  - dependsOn:: [[Computational Modelling]]
  - dependsOn:: [[Stochastic Process]]
  - implements:: [[Complex Adaptive Systems]]
  - uses:: [[Reinforcement Learning]]
  - uses:: [[Cellular Automata]]
  - uses:: [[Monte Carlo Simulation]]
  - enables:: [[Innovation Diffusion]]
  - enables:: [[Epidemiological Modelling]]
  - enables:: [[Crowd Simulation]]
  - enables:: [[Supply Chain Optimisation]]
  - supports:: [[Economic Model]]
  - supports:: [[Policy Simulation]]
  - contrastsWith:: [[Equation-Based Modelling]]
  - contrastsWith:: [[System Dynamics]]
  - bridges-to:: [[Multi-Agent Systems]]
  - bridges-to:: [[Swarm Intelligence]]
  - bridges-to:: [[Digital Twin]]
  - relatedTo:: [[Game Theory]]
  - relatedTo:: [[Network Science]]
  - relatedTo:: [[Social Simulation]]

- ### Notable Platforms and Tools
  - **NetLogo** — the most widely used ABM environment in academic research and education; pioneered by Uri Wilensky at Northwestern University.
  - **Repast** (Recursive Porous Agent Simulation Toolkit) — Java-based, high-performance; used extensively in social science and defence.
  - **MASON** — fast discrete-event multi-agent library in Java.
  - **Mesa** — Python framework for ABM, integrating with NumPy and network analysis libraries; popular in data science communities.
  - **AnyLogic** — commercial platform combining ABM, [[System Dynamics]], and [[Discrete Event Simulation]] in a single environment; dominant in industrial logistics and supply chain.
  - **Gama Platform** — spatially explicit ABM platform with GIS integration; used in epidemiology and urban modelling.
  - **FLAME / FLAME GPU** — GPU-accelerated ABM for very large agent populations, relevant to [[Digital Twin]] and large-scale simulation.

- ### Standards and Context
  - The **ODD Protocol** (Overview, Design concepts, Details) is the de facto standard description protocol for ABMs, enabling reproducibility and peer review (Grimm et al., 2006 and updated 2020). It is analogous to a methods section enforced by community convention.
  - The **JASSS** (Journal of Artificial Societies and Social Simulation) is the primary peer-reviewed venue for social ABM research.
  - IEEE and ACM have working groups on agent systems that overlap with ABM methodology standardisation (links to [[Multi-Agent Systems]] standards).
  - FAIR data principles (Findable, Accessible, Interoperable, Reusable) are increasingly applied to ABM model archives such as CoMSES/OpenABM.

- ### Contrast With Related Paradigms
  - **vs. [[System Dynamics]]**: System dynamics uses aggregate stock-and-flow differential equations — fast and analytically tractable but unable to capture individual heterogeneity or spatial structure.
  - **vs. [[Equation-Based Modelling]]**: Mathematical models (ODEs/PDEs) assume homogeneous populations and continuous state spaces; ABM relaxes both assumptions at the cost of computational expense.
  - **vs. [[Discrete Event Simulation]]**: DES models process-level logic (queues, resources) rather than autonomous agents; the two are complementary and often hybridised in commercial tools.
  - **vs. [[Multi-Agent Systems]]** (AI engineering): MAS focuses on designing intelligent agents for real deployment (robotics, coordination protocols), while ABM focuses on using agents as a scientific modelling instrument.

- ### Provenance
  - sources:: Grimm et al. (2006, 2020) ODD Protocol; Epstein & Axtell "Growing Artificial Societies" (1996); Wilensky & Rand "An Introduction to Agent-Based Modeling" (2015); JASSS; NetLogo documentation
  - updated:: 2026-06-13
