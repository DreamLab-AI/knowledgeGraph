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
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:autonomous-agent", "vc:label": "Autonomous Agent" },
    { "@id": "urn:visionflow:linked:behavioural-modelling", "vc:label": "Behavioral Modeling" },
    { "@id": "urn:visionflow:linked:scientific-computing", "vc:label": "Scientific Computing" },
    { "@id": "urn:visionflow:linked:emergence", "vc:label": "Emergence" },
    { "@id": "urn:visionflow:linked:collective-intelligence", "vc:label": "Collective Intelligence" },
    { "@id": "urn:visionflow:linked:feedback-loop", "vc:label": "Feedback Loop" },
    { "@id": "urn:visionflow:linked:computational-intelligence", "vc:label": "Computational Intelligence" },
    { "@id": "urn:visionflow:linked:agent-based-modelling", "vc:label": "Agent-Based Modelling" },
    { "@id": "urn:visionflow:linked:multi-agent-reinforcement-learning", "vc:label": "Multi-Agent Reinforcement Learning" },
    { "@id": "urn:visionflow:linked:simulation", "vc:label": "Simulation" },
    { "@id": "urn:visionflow:linked:complex-adaptive-systems", "vc:label": "Complex Adaptive Systems" },
    { "@id": "urn:visionflow:linked:stochastic-process", "vc:label": "Stochastic Process" },
    { "@id": "urn:visionflow:linked:network-science", "vc:label": "Network Science" },
    { "@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning" },
    { "@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models" },
    { "@id": "urn:visionflow:linked:monte-carlo-simulation", "vc:label": "Monte Carlo Simulation" },
    { "@id": "urn:visionflow:linked:cellular-automata", "vc:label": "Cellular Automata" },
    { "@id": "urn:visionflow:linked:multi-agent-systems", "vc:label": "Multi-Agent Systems" },
    { "@id": "urn:visionflow:linked:epidemiological-modelling", "vc:label": "Epidemiological Modelling" },
    { "@id": "urn:visionflow:linked:economic-model", "vc:label": "Economic Model" },
    { "@id": "urn:visionflow:linked:digital-twin", "vc:label": "Digital Twin" },
    { "@id": "urn:visionflow:linked:swarm-intelligence", "vc:label": "Swarm Intelligence" },
    { "@id": "urn:visionflow:linked:social-simulation", "vc:label": "Social Simulation" },
    { "@id": "urn:visionflow:linked:complex-systems-science", "vc:label": "Complex Systems Science" },
    { "@id": "urn:visionflow:linked:sensitivity-analysis", "vc:label": "Sensitivity Analysis" },
    { "@id": "urn:visionflow:linked:uncertainty-quantification", "vc:label": "Uncertainty Quantification" },
    { "@id": "urn:visionflow:linked:policy-simulation", "vc:label": "Policy Simulation" },
    { "@id": "urn:visionflow:linked:supply-chain-optimisation", "vc:label": "Supply Chain Optimisation" },
    { "@id": "urn:visionflow:linked:game-theory", "vc:label": "Game Theory" },
    { "@id": "urn:visionflow:linked:discrete-event-simulation", "vc:label": "Discrete Event Simulation" },
    { "@id": "urn:visionflow:linked:parallel-computing", "vc:label": "Parallel Computing" },
    { "@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning" },
    { "@id": "urn:visionflow:linked:genetic-algorithm", "vc:label": "Genetic Algorithm" },
    { "@id": "urn:visionflow:linked:urban-computing", "vc:label": "Urban Computing" },
    { "@id": "urn:visionflow:linked:crowd-simulation", "vc:label": "Crowd Simulation" },
    { "@id": "urn:visionflow:linked:innovation-diffusion", "vc:label": "Innovation Diffusion" },
    { "@id": "urn:visionflow:linked:system-dynamics", "vc:label": "System Dynamics" },
    { "@id": "urn:visionflow:linked:equation-based-modelling", "vc:label": "Equation-Based Modelling" },
    { "@id": "urn:visionflow:linked:artificial-life", "vc:label": "Artificial Life" },
    { "@id": "urn:visionflow:linked:environment-model", "vc:label": "Environment Model" }
  ],
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
  "qualityScore": 0.87,
  "subClassOf": [
    { "@id": "urn:ngm:class:computational-intelligence", "label": "Computational Intelligence" },
    { "@id": "urn:ngm:class:simulation", "label": "Simulation" }
  ],
  "sameAs": [
    { "@id": "urn:ngm:class:agent-based-modelling", "label": "Agent-Based Modelling" },
    { "@id": "urn:ngm:class:individual-based-models", "label": "Individual-Based Models" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent" },
      { "@id": "urn:ngm:class:environment-model", "label": "Environment Model" },
      { "@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process" },
      { "@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:complexity-science", "label": "Complexity Science" },
      { "@id": "urn:ngm:class:computational-intelligence", "label": "Computational Intelligence" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent" },
      { "@id": "urn:ngm:class:behavioural-modelling", "label": "Behavioral Modeling" },
      { "@id": "urn:ngm:class:scientific-computing", "label": "Scientific Computing" },
      { "@id": "urn:ngm:class:monte-carlo-simulation", "label": "Monte Carlo Simulation" },
      { "@id": "urn:ngm:class:cellular-automata", "label": "Cellular Automata" },
      { "@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning" },
      { "@id": "urn:ngm:class:genetic-algorithm", "label": "Genetic Algorithm" },
      { "@id": "urn:ngm:class:parallel-computing", "label": "Parallel Computing" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:emergence", "label": "Emergence" },
      { "@id": "urn:ngm:class:collective-intelligence", "label": "Collective Intelligence" },
      { "@id": "urn:ngm:class:policy-simulation", "label": "Policy Simulation" },
      { "@id": "urn:ngm:class:epidemiological-modelling", "label": "Epidemiological Modelling" },
      { "@id": "urn:ngm:class:supply-chain-optimisation", "label": "Supply Chain Optimisation" },
      { "@id": "urn:ngm:class:social-simulation", "label": "Social Simulation" },
      { "@id": "urn:ngm:class:uncertainty-quantification", "label": "Uncertainty Quantification" },
      { "@id": "urn:ngm:class:innovation-diffusion", "label": "Innovation Diffusion" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:simulation", "label": "Simulation" },
      { "@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process" },
      { "@id": "urn:ngm:class:scientific-computing", "label": "Scientific Computing" }
    ],
    "dependsOn": [
      { "@id": "urn:ngm:class:complex-adaptive-systems", "label": "Complex Adaptive Systems" },
      { "@id": "urn:ngm:class:behavioural-modelling", "label": "Behavioral Modeling" },
      { "@id": "urn:ngm:class:network-science", "label": "Network Science" }
    ],
    "implements": [
      { "@id": "urn:ngm:class:complex-adaptive-systems", "label": "Complex Adaptive Systems" },
      { "@id": "urn:ngm:class:artificial-life", "label": "Artificial Life" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:system-dynamics", "label": "System Dynamics" },
      { "@id": "urn:ngm:class:equation-based-modelling", "label": "Equation-Based Modelling" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:digital-twin", "label": "Digital Twin" },
      { "@id": "urn:ngm:class:multi-agent-reinforcement-learning", "label": "Multi-Agent Reinforcement Learning" },
      { "@id": "urn:ngm:class:large-language-models", "label": "Large Language Models" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:economic-model", "label": "Economic Model" },
      { "@id": "urn:ngm:class:urban-computing", "label": "Urban Computing" },
      { "@id": "urn:ngm:class:crowd-simulation", "label": "Crowd Simulation" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop" },
      { "@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems" },
      { "@id": "urn:ngm:class:swarm-intelligence", "label": "Swarm Intelligence" },
      { "@id": "urn:ngm:class:game-theory", "label": "Game Theory" },
      { "@id": "urn:ngm:class:machine-learning", "label": "Machine Learning" }
    ]
  },
  "quality": 0.87,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Agent-Based Models]] (ABMs) are computational [[Simulation]] frameworks in which a system is represented as a population of discrete [[Autonomous Agent]] entities, each governed by its own state variables, decision rules, and interaction protocols within a shared [[Environment Model]]. Each agent perceives its local neighbourhood, updates its internal state, and generates actions according to programmed conditionals, utility functions, learned policies from [[Reinforcement Learning]], or — in the generative AI era — contextual reasoning by [[Large Language Models]]; the aggregate of these micro-level interactions produces macro-level [[Emergence]] and [[Collective Intelligence]] phenomena without those patterns being explicitly programmed at the system level. ABMs are the primary computational realisation of [[Complex Adaptive Systems]] theory and a foundational instrument of [[Complex Systems Science]]. They differ fundamentally from [[Equation-Based Modelling]] and [[System Dynamics]] (which compress populations into aggregate flows governed by differential equations) by preserving agent heterogeneity, discrete identity, and stochastic variation; this makes ABMs uniquely suited to studying non-linear dynamics, phase transitions, path-dependent outcomes, and populations where the distribution of individual properties — not just the mean — materially shapes collective behaviour. The framework draws on [[Behavioral Modeling]] for agent rule specification, [[Stochastic Process]] theory for randomisation, [[Monte Carlo Simulation]] for parameter-space exploration, [[Cellular Automata]] logic for spatial neighbourhood computation, [[Genetic Algorithm]] techniques for adaptive strategy evolution, [[Network Science]] for topology-embedded interaction structures, [[Sensitivity Analysis]] and [[Uncertainty Quantification]] for robustness testing, and [[Parallel Computing]] and [[Scientific Computing]] infrastructure to scale simulations to millions or billions of agents. When integrated with live sensor data, ABMs become the active behavioural layer within [[Digital Twin]] architectures. The paradigm bridges naturally into [[Multi-Agent Systems]] (engineering perspective on deployed autonomous systems), [[Swarm Intelligence]] (stigmergic collective computation), [[Multi-Agent Reinforcement Learning]] (training policies in simulated populations), and [[Social Simulation]] (computational social science). ABMs support applied domains including [[Epidemiological Modelling]], [[Policy Simulation]], [[Economic Model]] analysis, [[Supply Chain Optimisation]], [[Innovation Diffusion]], [[Crowd Simulation]], and [[Urban Computing]]; they contrast with [[System Dynamics]] and [[Equation-Based Modelling]] and are related to [[Game Theory]], [[Machine Learning]], and emerging generative simulation methods.

- ### Semantic Classification
  - owl-class:: ai:AgentBasedModels
  - owl-role:: ExecutableProtocol | SimulationFramework | ComplexSystemsMethod
  - owl-inferred:: ai:BottomUpSimulation, ai:EmergentComputationMethod, ai:ComplexSystemsTool
  - belongs-to-domain:: [[Complex Systems Science]]
  - implemented-in-layer:: [[Simulation]]

- ### Relationships
  - is-subclass-of:: [[Computational Intelligence]], [[Simulation]], [[Complex Systems Science]]
  - has-part:: [[Autonomous Agent]], [[Environment Model]], [[Stochastic Process]], [[Feedback Loop]], [[Sensitivity Analysis]], [[Scheduler]]
  - part-of:: [[Complex Systems Science]], [[Computational Intelligence]], [[Artificial Intelligence]]
  - requires:: [[Simulation]], [[Stochastic Process]], [[Scientific Computing]], [[Computational Modelling]]
  - enables:: [[Emergence]], [[Collective Intelligence]], [[Policy Simulation]], [[Epidemiological Modelling]], [[Supply Chain Optimisation]], [[Social Simulation]], [[Uncertainty Quantification]], [[Innovation Diffusion]], [[Crowd Simulation]], [[Economic Model]]
  - implements:: [[Complex Adaptive Systems]], [[Artificial Life]], [[Behavioural Modelling]]
  - depends-on:: [[Complex Adaptive Systems]], [[Behavioral Modeling]], [[Network Science]], [[Scientific Computing]]
  - uses:: [[Autonomous Agent]], [[Behavioral Modeling]], [[Scientific Computing]], [[Monte Carlo Simulation]], [[Cellular Automata]], [[Reinforcement Learning]], [[Genetic Algorithm]], [[Parallel Computing]], [[Sensitivity Analysis]], [[Network Science]]
  - supports:: [[Economic Model]], [[Urban Computing]], [[Crowd Simulation]], [[Digital Twin]], [[Policy Simulation]]
  - contrasts-with:: [[System Dynamics]], [[Equation-Based Modelling]], [[Discrete Event Simulation]]
  - bridges-to:: [[Digital Twin]], [[Multi-Agent Reinforcement Learning]], [[Large Language Models]], [[Multi-Agent Systems]], [[Swarm Intelligence]]
  - related-to:: [[Feedback Loop]], [[Multi-Agent Systems]], [[Swarm Intelligence]], [[Game Theory]], [[Machine Learning]], [[Agent-Based Modelling]], [[Collective Intelligence]], [[Emergence]], [[Network Science]], [[Artificial Life]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:hasPart ai:AutonomousAgent))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:hasPart ai:EnvironmentModel))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:hasPart ai:StochasticProcess))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:hasPart ai:FeedbackLoop))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:hasPart ai:Scheduler))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:hasPart ai:OutputLayer))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:requires ai:Simulation))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:requires ai:StochasticProcess))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:requires ai:ScientificComputing))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:dependsOn ai:ComplexAdaptiveSystems))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:dependsOn ai:BehaviouralModelling))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:dependsOn ai:NetworkScience))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:enables ai:Emergence))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:enables ai:CollectiveIntelligence))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:enables ai:EpidemiologicalModelling))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:enables ai:PolicySimulation))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:enables ai:SocialSimulation))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:enables ai:SupplyChainOptimisation))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:enables ai:UncertaintyQuantification))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:enables ai:InnovationDiffusion))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:implements ai:ComplexAdaptiveSystems))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:implements ai:ArtificialLife))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:uses ai:ReinforcementLearning))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:uses ai:CellularAutomata))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:uses ai:MonteCarloSimulation))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:uses ai:GeneticAlgorithm))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:uses ai:ParallelComputing))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:reducesTo ai:SystemDynamics))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:reducesTo ai:CellularAutomata))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:reducesTo ai:DiscreteEventSimulation))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:reducesTo ai:EquationBasedModelling))
    ```
  - ## Support and Contrast Axioms
    ```
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:supports ai:EconomicModel))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:supports ai:DigitalTwin))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:supports ai:SocialSimulation))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:supports ai:CrowdSimulation))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:bridgesTo ai:MultiAgentSystems))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:bridgesTo ai:SwarmIntelligence))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:bridgesTo ai:LargeLanguageModels))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:bridgesTo ai:MultiAgentReinforcementLearning))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:relatedTo ai:GameTheory))
    SubClassOf(ai:AgentBasedModels
      ObjectSomeValuesFrom(ai:relatedTo ai:NetworkScience))
    ```

  - ## About
    - Agent-Based Models (ABMs) are the standard computational instrument for studying [[Complex Adaptive Systems]]: systems of many interacting components whose collective behaviour is qualitatively richer than any component's individual behaviour. The defining property is [[Emergence]] — aggregate patterns that arise from, but are not reducible to, micro-level rules. ABMs generate these patterns by simulating the parallel, concurrent actions of many discrete [[Autonomous Agent]] entities, making them uniquely suited to studying heterogeneous populations, non-equilibrium dynamics, and path-dependent history. This "generative" stance (Epstein, 1999) positions ABMs as a third mode of science alongside theory and physical experiment: one can ask "can these micro-rules generate that macro-pattern?" and test the answer computationally. The agent framework implements [[Complex Adaptive Systems]] theory directly: agents adapt their rules and strategies (via [[Reinforcement Learning]], evolutionary dynamics via [[Genetic Algorithm]], or social learning through imitation and bounded rationality), their interactions form networks that link to [[Network Science]], their aggregate actions loop through [[Feedback Loop]] mechanisms that can amplify or dampen perturbations, and the system as a whole can exhibit self-organised criticality, phase transitions, cascading failures, and power-law statistics. ABMs contrast with [[Equation-Based Modelling]] in that ODEs assume homogeneous, continuous populations; they contrast with [[System Dynamics]] in that stock-and-flow models aggregate all individuals into undifferentiated compartments; and they contrast with [[Discrete Event Simulation]] in that DES focuses on process-level logic (queues, resources, workflows) rather than autonomous agents with internal state and adaptive strategy. All three contrasted paradigms have complementary strengths: [[System Dynamics]] is faster and analytically tractable; [[Discrete Event Simulation]] models logistics precisely; ABMs capture heterogeneity and emergence. Commercial platforms like AnyLogic deliberately combine all three in a single simulation environment precisely because real-world systems exhibit all three types of dynamics simultaneously.
    - The historical lineage of ABMs spans six decades. Thomas Schelling's 1969 residential segregation model and John Conway's 1970 Game of Life are considered the earliest recognisable ABMs; both showed that surprisingly rich global structure emerges from extremely simple local rules. Schelling's model, built initially with coins on graph paper rather than a computer, showed that agents who merely prefer that at least 30 per cent of their immediate neighbours share their type will — through repeated relocations — produce residential segregation levels exceeding 75 per cent, demonstrating that social macro-phenomena (segregation as a social fact) can be disaggregated into their micro-level generative mechanisms (mild preference, unconstrained mobility). Craig Reynolds' 1987 Boids model demonstrated that three local behavioural rules (separation from close neighbours, velocity alignment with nearby flockmates, cohesion toward the local centroid) suffice to generate globally realistic bird-flock and fish-school dynamics, without any central choreography — a seminal result for [[Swarm Intelligence]] and [[Artificial Life]] that influenced computer animation (the bat flock in Batman Returns, 1992) and robotics. The Santa Fe Institute's complex adaptive systems programme in the late 1980s and 1990s, under Holland, Kauffman, Arthur, and Gell-Mann, provided the theoretical foundation; Epstein and Axtell's Sugarscape (1996) operationalised it as a quantitative social science tool. The NetLogo platform (Wilensky, 1999) democratised ABM construction through an intuitive agent-programming language with integrated behavioural-space and sensitivity analysis tools. The SWARM toolkit (Santa Fe Institute) and later Repast (Java, Argonne National Laboratory) and MASON (George Mason University) provided research-grade infrastructure for social science and defence applications. The ODD protocol (Grimm et al., 2006; 2020) established a community standard for reproducible model description — a critical methodological contribution given that ABM publications historically provided insufficient detail for independent replication. Since 2020, the ABM field has undergone two major accelerations: the COVID-19 pandemic demonstrated ABM's policy significance at national scale through CovidSim (Imperial College, Report 9, March 2020); and the integration of [[Large Language Models]] as generative agent engines (Park et al., Stanford, 2023, "Generative Agents: Interactive Simulacra of Human Behavior") opened a new research frontier in which agents reason via LLM-mediated planning, reflection, and memory retrieval rather than hand-coded decision trees or utility functions.
    - Four components constitute any ABM: (1) the agent population, specifying attributes (state variables), behavioural rules (conditional logic, utility functions, or learned policies from [[Reinforcement Learning]]), perception functions (what each agent can observe of its neighbourhood), and interaction protocols (how agents communicate, trade, infect, or influence each other); (2) the [[Environment Model]], which may be a spatial grid following [[Cellular Automata]] logic, a continuous 2D or 3D landscape, a graph structure from [[Network Science]], a GIS-embedded geographic layer, or an abstract state space that agents inhabit, traverse, and modify (consuming resources, depositing signals, triggering events); (3) the scheduler, determining whether agents activate synchronously (reading pre-step state, writing post-step state atomically) or asynchronously (activating in random or priority order within a step, reading partially updated state) — a design choice that can materially alter emergent outcomes, particularly in models with resource competition or spatial diffusion; and (4) the output and analysis layer, recording aggregate statistics (time series of mean wealth, infection prevalence, mean velocity), spatial distributions (heat maps, cluster statistics), event logs (bankruptcy events, epidemic onset dates), and micro-trajectories (per-agent state histories) for calibration, validation, and hypothesis testing. Modern implementations support [[Parallel Computing]] (multi-threaded CPU execution via Agents.jl in Julia; GPU-massively parallel execution via FLAME GPU 2 from the University of Sheffield, achieving approximately 1,000x speedup over NetLogo for the Schelling and Boids benchmarks) and differentiable execution (ABMax in JAX, 2025, enabling gradient-based parameter inference via automatic differentiation through the simulation graph) rather than exhaustive [[Monte Carlo Simulation]] sweeps that may require millions of serial simulation runs for high-dimensional parameter spaces.

  - ## Components / Architecture
    - **Agent population**: The core ontological commitment of any ABM is the definition of agent types — what entities the simulation contains, what attributes they carry, what they can perceive, and how they decide and act. Agents are discrete entities with: (a) state variables — scalar or vector attributes characterising each agent's current condition (wealth, health status W ∈ [0,1], spatial location (x,y), belief vector b ∈ R^d, social ties as an adjacency list, infection status, strategy type); (b) behavioural rules — the decision function mapping perceived neighbourhood state and internal memory to action choices, implemented as conditional logic (if-then rules), utility maximisation (rational choice), lookup tables (finite state machine), learned policies from [[Reinforcement Learning]] (Q-table, deep Q-network, policy gradient network), or LLM-based contextual reasoning for generative ABMs; (c) a perception function — what the agent can observe of its neighbourhood (typically a local subset of the global state, reflecting bounded rationality and information asymmetry; perceptual radius r defines the neighbourhood); (d) an action function — the mapping from perceived state to chosen action from a finite or continuous action space; and optionally (e) a memory and adaptation mechanism — an internal store of past observations, outcomes, or strategies enabling backward-looking adaptation via [[Genetic Algorithm]] (parameter mutation and crossover), imitation of successful neighbours (replicator dynamics), [[Reinforcement Learning]] (value function update from reward signals), or reflection in generative ABM (LLM-based summarisation of past experiences to inform future decisions). Agent populations may be heterogeneous in all these dimensions — different agent types with different state spaces, rules, and adaptation mechanisms — or homogeneous (all agents share one type definition with individually varied parameter draws from a distribution).
    - **Environment model**: The shared space in which agents exist, move, and interact — both a substrate for interaction and itself a dynamic entity with state variables that agents read and modify. The [[Environment Model]] type determines what kind of locality, proximity, and spatial dynamics the ABM can represent. Common types: (i) discrete regular grid — 2D rectangular, hexagonal, or 3D cubic lattice — enabling [[Cellular Automata]] logic where neighbours are spatially adjacent cells; agents move between cells, consume resources in cells, and interact with occupants of neighbouring cells; (ii) continuous metric space — Euclidean 2D or 3D — where agents have real-valued positions and velocities, enabling realistic movement dynamics (random walks, directed movement, social force models for [[Crowd Simulation]] following Helbing and Molnar, 1995); (iii) network graph from [[Network Science]] — agents are nodes, edges are interaction channels (friendship, trade, road, communication); adjacency structure governs who can interact with whom; the network may be static (fixed throughout the simulation) or adaptive (edges added/removed as agents form/dissolve relationships); (iv) GIS-embedded geographic layer — real-world map data (land use, road network, administrative boundaries, building footprints) ingested via GIS tools for spatially explicit [[Urban Computing]], [[Epidemiological Modelling]], and ecological ABMs; (v) abstract (non-spatial) environment — an attribute space (e.g., opinion space [0,1] for bounded-confidence models, or product quality space for market competition models) where "proximity" is defined by similarity or information access rather than physical distance. The environment carries its own state variables (resource levels in Sugarscape cells, pheromone concentrations in ant-colony models, pollution concentrations in air quality models, road congestion levels in traffic ABMs) that update each time step based on agent actions and environmental dynamics.
    - **Scheduler**: The scheduler determines the order and frequency of agent activation — a design choice that can substantially affect emergent outcomes. Synchronous scheduling (bulk-synchronous parallel, BSP): all agents compute their next state simultaneously from the current global state (a snapshot), then all states are atomically replaced; this mirrors cellular-automaton dynamics and is natural for physics-style equilibrium models; it prevents any agent from "reacting" to another's action within the same time step. Asynchronous scheduling: agents activate in random order within each time step, each reading the partially-updated state produced by earlier-activating agents; this better reflects continuous-time dynamics (people do not all decide simultaneously in real markets), eliminates spurious oscillations in competitive models, but introduces order-of-activation artefacts that require analysis. Priority-based scheduling: agents activate in a specified priority order (by wealth, health level, or role) enabling power-asymmetric interaction. Event-driven scheduling from [[Discrete Event Simulation]]: agents activate only when triggered by an event (message arrival, resource depletion, alarm threshold crossing), reducing computational load in sparse models with long quiescent periods between meaningful interactions. Hybrid schedulers in AnyLogic combine continuous-time ODEs for aggregate population dynamics with event-driven discrete activation of individual agents — a pragmatic bridge between ABM and [[System Dynamics]].
    - **Stochastic layer**: Randomness plays three distinct roles in ABMs. (i) Model realism: stochastic transition probabilities capture genuine variability in real-world phenomena — an agent is infected with probability β*dt, a firm defaults with probability p(leverage), a consumer adopts a product with probability based on social influence and idiosyncratic preference noise. (ii) Ensemble statistics: running N replicates from independent random seeds via [[Monte Carlo Simulation]] generates a distribution of outcomes from which expectations, variances, confidence intervals, and tail-risk statistics can be estimated; the sample size N needed for stable statistics depends on the variance of the output of interest. (iii) Exploration: stochastic rule perturbation (epsilon-greedy exploration in [[Reinforcement Learning]] agents, genetic mutation in [[Genetic Algorithm]]-evolved strategies) enables models to explore the full outcome space and avoid trapping in deterministic cycles. Random seed management is critical for reproducibility (seeds must be recorded and reported), for independent replication of published results, and for ensemble generation in [[Sensitivity Analysis]] and [[Uncertainty Quantification]] pipelines.
    - **Output and calibration layer**: Responsible for translating agent micro-trajectories into measurable macro-observables and comparing those observables to empirical targets. Records: aggregate time series (epidemic incidence, Gini wealth coefficient, aggregate output, price index); spatial statistics (Moran's I for spatial autocorrelation, cluster radii, perimeter-area ratios); network statistics (degree distribution, clustering coefficient, betweenness centrality of key nodes); distributional statistics (histogram bins, power-law exponent estimates via Hill estimator, tail-risk VaR/CVaR for financial ABMs); and micro-trajectories (per-agent state history, event timestamps). Calibration methods: manual expert calibration; grid-search over discretised parameter space; approximate Bayesian computation (ABC) comparing observed and simulated summary statistics without explicit likelihood; [[Machine Learning]] neural-network emulators trained on ABM output distributions and optimised via gradient descent (Lamperti et al., 2018); and differentiable ABM gradient descent (ABMax, 2025). Global [[Sensitivity Analysis]] via Sobol variance decomposition or Morris elementary effects screen quantifies which parameters dominate output variance, guiding prioritised data collection. Tools: OpenMOLE (CNRS, open-source, workflow management and distributed computing for ABM sensitivity analysis and optimisation); SALib (Python, Sobol and Morris indices); NetLogo BehaviorSpace (built-in parameter sweep); SMC-ABC (Sequential Monte Carlo ABC) implementations in Python and R.

  - ## Use Cases / Major Families
    - ### Epidemiology and Public Health
      - ABMs resolve disease transmission to the individual level, capturing heterogeneous contact rates, super-spreader dynamics, spatial clustering, household structure, and context-specific intervention efficacy — none of which can be captured faithfully by ODE compartmental (SIR, SEIR, SEIRD) models
      - CovidSim (Imperial College London, Neil Ferguson's group, 2020) projected approximately 510,000 UK deaths under unmitigated SARS-CoV-2 spread
        - The model directly informed the UK government's March 2020 lockdown decision (Report 9, 16 March 2020)
        - It showed household isolation combined with social distancing reduces peak healthcare demand by over 60 per cent
        - Implemented as a spatially explicit individual-based [[Epidemiological Modelling]] ABM with age-stratified contact matrices and household-workplace-school spatial structure
      - The Epiabm framework (Cambridge Engineering, 2022) provides open-source Python and C++ infrastructure for epidemic simulation at local-authority spatial resolution
      - Differentiable epidemic ABM approaches (Chopra et al., 2023, AAMAS) enable gradient-based calibration of transmission parameters against observed case-count time series
        - Calibration time reduced from weeks of [[Monte Carlo Simulation]] to hours via automatic differentiation
      - County-level US epidemic ABMs (CDC, NIH) inform vaccine allocation strategy under heterogeneous coverage and variant emergence scenarios
      - Key ABM advantages over compartmental models in epidemiology:
        - Individual heterogeneity in susceptibility, exposure, and infectious period
        - Spatial clustering of cases in households, schools, and workplaces
        - Targeting of non-pharmaceutical interventions at specific sub-populations
        - Modelling of healthcare capacity (hospital bed, ICU) surge dynamics
    - ### Economic and Financial Modelling
      - ABMs challenge the rational-expectations, representative-agent assumptions of mainstream DSGE macroeconomics by modelling heterogeneous firms, households, banks, and regulators with bounded rationality
      - Santa Fe artificial stock market (LeBaron, Arthur, Palmer, 1999):
        - Heterogeneous trader agents using technical and fundamental analysis with [[Genetic Algorithm]]-evolved strategies
        - Emergent fat-tailed return distributions and volatility clustering without rational expectations assumptions
        - Cannot be reproduced by homogeneous rational-agent models without exogenous shock assumptions
      - Eurace and Banca d'Italia ABMs (Dawid, Dosi, Fagiolo, Roventini):
        - Reproduce business cycle statistics, financial fragility, and fiscal multiplier effects
        - Incorporate firm bankruptcy, credit network cascade failures, and non-equilibrium recovery dynamics
        - Used by the OECD as complements to standard econometric tools in policy analysis
      - [[Supply Chain Optimisation]] ABMs:
        - Model Bullwhip effect (demand variability amplification up the supply chain) at the firm level
        - Simulate supplier disruption cascades, inventory rebalancing, and sourcing diversification strategies
        - DHL Resilience360 deploys ABM stress-testing of air-freight networks against weather and geopolitical disruption scenarios — revealed 20 per cent capacity gaps under modelled disruptions
        - Procter and Gamble ABM deployment reduced inventory by 25 per cent through demand-volatility simulation
        - Ocean carriers run 5,000 ABM routing scenarios daily integrating weather and geopolitical risk data, achieving 92 per cent delay prediction accuracy
      - Agentic supply chain [[Digital Twin]] (A-SCDT) architectures (Taylor and Francis, 2026) hybridise ABM agent layers with AI optimisation for real-time operational decision support
    - ### Ecology and Conservation
      - Individual-based population ecology models (Grimm and Railsback, 2005) simulate species dynamics with individual heterogeneity in body size, energy reserves, dispersal propensity, and life-history stage
      - Predator-prey dynamics at the individual level:
        - Stochastic individual encounter rates and energy-budget models produce more realistic population fluctuations than Lotka-Volterra ODEs
        - Spatial ABMs reveal how predator spatial memory and prey refuge use interact to generate population cycles
      - Species competition and coexistence:
        - Competitive exclusion dynamics in heterogeneous landscapes — spatial refugia prevent competitive exclusion that aggregate models predict
        - Priority effects (order of arrival) in assembly of ecological communities
      - Habitat fragmentation and corridor design:
        - Dispersal-limited species ABMs inform reserve connectivity planning and green corridor placement
        - Metapopulation viability analysis under habitat loss scenarios
      - Fisheries stock assessment ABMs: model individual fish growth, mortality, and harvesting pressure to support Total Allowable Catch (TAC) policy under uncertain recruitment and climate-driven range shifts
      - Forest fire ABMs: couple fire spread (terrain, wind, fuel moisture) with vegetation dynamics to inform prescribed burning and defensible space policy
      - [[Swarm Intelligence]] animal behaviour models (Boids-derived): validated against high-resolution GPS and stereophotogrammetry tracking data for bird flocks, fish schools, and insect swarms — confirm that three-rule models account for most group shape variance
    - ### Urban Planning and Pedestrian Dynamics
      - [[Crowd Simulation]] ABMs model pedestrian flows in complex built environments under normal and emergency conditions:
        - Social force model (Helbing and Molnar, 1995): pedestrian movement as sum of desired velocity, repulsive forces from neighbours and walls, attractive forces from goals
        - Produces realistic congestion, arching at bottlenecks, lane formation in bidirectional flows, and trampling dynamics under panic conditions
        - Applied to station, airport, and stadium design optimisation; train and building evacuation planning (EU Directive 2008/164/EC); concert and event crowd management
      - Transport ABMs at city scale:
        - MATSIM (open-source, ETH Zurich / TU Berlin): million-agent transport demand simulation used for Zurich's city transport plan, Singapore's mobility-on-demand planning, and Berlin's cycling infrastructure
        - Nagel-Schreckenberg cellular automaton model for highway traffic: reproduces stop-and-go waves, capacity drop at high density
        - [[Urban Computing]] ABMs for land-use change (UrbanSim), housing market dynamics, and energy demand response in smart grids
      - Real-time and fused ABMs:
        - Nick Malleson (University of Leeds, Alan Turing Institute Urban Analytics): real-time pedestrian dynamics ABMs fused with anonymised CCTV tracking data and mobile phone GPS traces
        - Enables live monitoring and short-horizon prediction of city pedestrian flows for urban management and safety
      - Generative urban mobility simulation:
        - GATSim (arXiv:2506.23306, 2025/2026): city-scale urban mobility simulation using LLM-driven generative agents as drivers
        - Captures nuanced origin-destination choice, schedule adaptation, and mode-switching behaviour beyond rule-based models
        - Demonstrates feasibility of [[Large Language Models]] as scalable urban mobility simulation agents
    - ### Social Science and Opinion Dynamics
      - Canonical [[Social Simulation]] ABMs form a benchmark suite for the field:
        - Schelling segregation model (1969/1971): agents with 30 per cent same-type neighbourhood preference → emergent 75 per cent same-type segregation via relocation; demonstrates that segregation as a social fact has micro-level mechanistic explanation
        - Axelrod culture dissemination model (1997): local cultural homogenisation → global cultural diversity despite continuous local interaction — reproduces persistence of cultural groups
        - Deffuant-Weisbuch bounded-confidence opinion dynamics (2000): agents adopt averaged opinions only with those within threshold ε → fragmentation into opinion clusters below critical ε ≈ 0.2
        - Hegselmann-Krause opinion dynamics (synchronous bounded confidence): phase transition from consensus to polarisation to fragmentation as ε decreases
        - Castellano, Fortunato, Loreto voter model (2009 review): wide family of spin-model-derived opinion dynamics ABMs
      - Modern generative opinion ABMs:
        - Replace scalar opinion values with linguistically mediated discourse using [[Large Language Models]] as agent reasoning engines
        - Concordia framework (Google DeepMind, 2024): structured generative [[Social Simulation]] with LLM agents and experimental design primitives
        - Sentipolis (2025): emotion-aware LLM agents for crisis communication and political simulation
        - VirtLab (2025): large-scale team simulation for organisational science
      - Applications: political polarisation, misinformation spread, norm emergence, rumour propagation, radicalisation pathways, public health communication [[Policy Simulation]]
    - ### Defence, Security, and Intelligence
      - Wargaming ABMs simulate adversarial decision-making, logistics friction, and escalation dynamics:
        - Agent strategies represent doctrine, resource constraints, and commander risk appetite
        - Coalition formation and defection dynamics under changing conditions
        - Logistics chain vulnerability analysis and materiel resupply optimisation
      - Repast HPC (Argonne National Laboratory, DARPA-funded): billion-agent [[Social Simulation]] infrastructure for defence scenario analysis at national scale
      - Population-centric operations (SOCOM): ABMs of civilian population response to military operations, humanitarian aid distribution, and information operations
      - UK DSTL: cyber-attack propagation ABMs on critical infrastructure [[Network Science]] graphs; critical mineral supply chain resilience ABMs
      - Critical infrastructure cascade failure: power grid, water network, and financial clearing network ABMs simulate how localised failure propagates through interdependent infrastructure under [[Feedback Loop]] coupling
    - ### Multi-Agent Reinforcement Learning Environments
      - ABM simulation environments serve as the substrate for training and evaluating [[Multi-Agent Reinforcement Learning]] agents:
        - Provide realistic, heterogeneous populations of agents with adaptive behaviour as training opponents or co-players
        - OpenAI hide-and-seek: multi-agent competition produces emergent tool use and obstacle manipulation behaviours
        - DeepMind MeltingPot: suite of ABM-like social dilemma environments for testing cooperative and competitive MARL policies
        - StarCraft II Multi-Agent Challenge (SMAC): micromanagement ABM for evaluating decentralised cooperative control
        - NetLogo traffic ABMs and pedestrian ABMs serve as environments for model-free [[Reinforcement Learning]] policy training
      - Bidirectional coupling: MARL-trained agent policies can replace hand-coded ABM rules — producing more adaptive, strategically sophisticated agents — and ABM populations provide the heterogeneous multi-agent context in which MARL training occurs
    - ### Generative AI Simulation (2023-2026)
      - The integration of [[Large Language Models]] as agent decision engines is the field's most significant methodological shift since the 1990s
      - Park et al. (2023), "Generative Agents: Interactive Simulacra of Human Behavior", Stanford:
        - 25 LLM agents in Smallville (simulated social town) exhibit planning, reflection, memory retrieval, and emergent social coordination
        - Spontaneous social events (party organisation, information spread, relationship formation) emerge without explicit group-level programming
        - Demonstrated LLM agents as a viable, richer alternative to hand-coded rule-based agents for social phenomena
      - Park et al. (2024): LLM agents simulate 1,052-person survey cohort responses to political attitude questions
        - Demonstrates LLM ABMs as synthetic data generators for social science where real data collection is impractical
      - Scale-out platforms (2024-2025):
        - AgentScope (Alibaba): thousands of concurrent LLM agents with structured communication and tool use
        - OASIS: social media simulation with millions of LLM-driven user agents
        - AgentSociety (2025): study of emergent social dynamics in large LLM-agent populations
      - Key open challenge (Springer AI Review, 2025): validation is the central unsolved problem
        - LLM cultural and linguistic biases reflect training corpus (predominantly US/English-language internet text)
        - Stochastic LLM outputs reduce replicability between runs
        - Black-box LLM reasoning prevents formal behavioural verification or theoretical analysis
        - Calibration against empirical social data is harder than for rule-based ABMs because LLM behaviour is not parameterised in a transparent way

  - ## Academic Context
    - The theoretical foundations of ABMs span statistical physics, evolutionary [[Game Theory]], complex systems science, computational social science, ecology, and — most recently — generative AI. Key intellectual lineages:
      - **Self-organised criticality** (Bak, Tang and Wiesenfeld, 1987): interacting agent populations driven at a constant rate can spontaneously organise to a critical state where event-size distributions follow power laws (1/f noise), providing a unified explanation for the ubiquity of scale-free distributions in earthquakes, avalanches, forest fires, financial crashes, and network cascades. The sandpile model is an ABM in which each agent (sand grain) follows an extremely simple toppling rule, yet the collective exhibits complex, scale-free dynamics — a canonical result for [[Emergence]] in agent systems.
      - **Evolution of cooperation** (Axelrod, 1984): Axelrod's computer tournaments showed that in an iterated Prisoner's Dilemma environment with a heterogeneous population of strategies, the Tit-for-Tat rule (cooperate on first move, then copy opponent's previous move) outperforms sophisticated strategies including defectors, establishing that cooperation can emerge in populations of self-interested agents through reciprocal altruism. Extensions to spatially structured populations and evolving strategies via [[Genetic Algorithm]] (Nowak and May, 1992) showed cooperation is further enhanced when agents interact locally — a direct bridge to spatial ABMs and [[Network Science]] results on cooperation dynamics.
      - **Complex adaptive systems** (Holland, 1992; 1995): Holland's formal characterisation of CAS identified seven foundational properties — aggregation, non-linearity, flows, diversity, tagging, internal models, and building blocks — all of which are directly instantiated in ABMs. His work on classifier systems and the genetic algorithm provided formal mechanisms for adaptive agent strategy evolution, laying groundwork for [[Reinforcement Learning]] in agents.
      - **Sugarscape** (Epstein and Axtell, 1996): agents on a two-resource (sugar, spice) landscape that exhibit heterogeneous vision radii and metabolic rates produce emergent wealth distributions following Pareto's law (power-law tails), seasonal migration patterns, trade dynamics with endogenous prices, cultural group formation, and epidemic spread — demonstrating that a rich suite of social macro-phenomena can be "grown" computationally from a small set of micro-rules. This is the canonical existence proof for ABM as a social science methodology.
      - **Generative agents** (Park et al., Stanford, 2023): LLM-driven agents in a simulated social environment exhibit planning, reflection, memory retrieval, and emergent social coordination (surprise birthday party, information spreading, social relationship formation) without explicit programming of these behaviours — demonstrating that [[Large Language Models]] can serve as agent engines that produce richer, more human-like [[Emergence]] than rule-based approaches, at the cost of computational expense and reduced interpretability.
    - The Journal of Artificial Societies and Social Simulation (JASSS, University of Surrey, founded 1998) is the primary peer-reviewed venue for [[Social Simulation]] ABMs, publishing over 750 papers. The ODD (Overview, Design concepts, Details) protocol (Grimm et al., 2006; updated 2020) provides a community standard for model description, addressing the reproducibility crisis endemic to ABM research: many published models cannot be replicated from their paper descriptions alone, requiring author correspondence. The 2020 ODD update added pattern-oriented modelling (POM) elements and multi-level structure documentation. The CoMSES/OpenABM repository (Arizona State University) applies FAIR data principles to ABM code publication and peer-review, requiring machine-readable model descriptions, test datasets, and version tracking. The Journal of Economic Dynamics and Control, Ecological Modelling, PNAS, Complexity, and Nature Human Behaviour publish ABMs across their respective domains. Key interdisciplinary venues include the AAMAS (Autonomous Agents and Multi-Agent Systems) conference series, the ESSA (European Social Simulation Association) annual meeting, and the Winter Simulation Conference.
    - Key methodological advances since 2015 include: [[Machine Learning]] surrogate models for fast ABM meta-calibration (Lamperti et al., 2018, using neural networks trained on ABM ensemble runs to create emulators orders of magnitude faster than the ABM itself for sensitivity analysis and optimisation); approximate Bayesian computation (ABC) for likelihood-free inference of ABM parameters from observational data without a tractable likelihood function; differentiable ABM frameworks (ABMax in JAX, 2025; grad-ABM; PyTorch-based differentiable simulation) enabling gradient-descent calibration; Gaussian process surrogate (metamodelling) methods applying the Conti-O'Hagan design-of-experiments framework to ABM output surfaces; formal verification of emergent properties using temporal logic model checking applied to agent rule sets; and adaptive [[Network Science]] embedded ABMs where agent interaction topology co-evolves with agent states. The epidemiological ABM sub-field generated the Epiabm framework (Cambridge, 2022), differentiable epidemic ABMs (Chopra et al., 2023), and geo-coded spatial ABMs at the local authority level for pandemic response planning.

  - ## Current Landscape (2026)
    - The ABM software ecosystem in 2026 is large and stratified. **NetLogo** (Northwestern University) remains the dominant academic and educational platform with over 400,000 registered users; NetLogo 7 (in development) targets improved performance and web deployment. **Mesa** (Python, 3.0 released 2025) is the data science community's standard, integrating with NumPy, Pandas, NetworkX, and Jupyter; it supports batch-run APIs and pluggable schedulers. **Agents.jl** (Julia) provides the best CPU throughput among interpreted-language frameworks. **FLAME GPU 2** (University of Sheffield) achieves GPU throughput approximately 1,000x faster than NetLogo and 18x faster than Agents.jl in published benchmarks (Boids, Schelling models), enabling billion-agent simulations on a single NVIDIA A100. **AnyLogic** dominates commercial deployment, combining ABM with [[System Dynamics]] and [[Discrete Event Simulation]] in a hybrid environment used by logistics firms, defence contractors, and healthcare systems globally. **krABMaga** (Rust-based) demonstrated superior multi-core CPU scalability over Python Mesa, Julia Agents.jl, NetLogo, and Java MASON in 2024 published benchmarks.
    - Differentiable ABM frameworks emerged as a major 2025-2026 development: **ABMax** (JAX-based, 2025) makes agent transition functions differentiable, enabling gradient-descent calibration and probabilistic inference over agent parameters orders of magnitude faster than [[Monte Carlo Simulation]] sweeps. **AMBER** (Columnar architecture, 2025/2026) brings a columnar data layout to Python ABM for cache-efficient large-scale execution.
    - Generative ABM has become a distinct sub-field. Google DeepMind's **Concordia** framework (2024) provides a library for LLM-driven [[Social Simulation]] with structured experimental design. **AgentSociety** (2025) demonstrates large-scale societal simulation with LLM agents. **GATSim** (2025/2026) applies generative agents to urban mobility simulation. Validation challenges are recognised as acute: a 2025 Springer Nature AI Review paper identified validation as the "central challenge" for generative ABMs, given LLMs' cultural biases, black-box reasoning, and stochastic outputs.
    - Industry applications are quantifiably significant. ABM-based supply chain [[Digital Twin]] deployments report: 40 per cent improvement in demand forecasting accuracy, 30 per cent faster disruption response times, and 20 per cent revealed capacity gaps in stress-testing (Debales AI, 2025; Taylor and Francis, 2026). ABM layers within digital twin architectures for smart cities, factory floors, and financial markets are mainstream in 2026 among large enterprises.

  - ## UK Context
    - ### Imperial College London
      - CovidSim ABM (MRC Centre for Global Infectious Disease Analysis, Neil Ferguson's group):
        - Most consequential UK ABM policy deployment in recent history
        - Report 9 (16 March 2020): projected approximately 510,000 UK deaths under unmitigated SARS-CoV-2 spread
        - Directly influenced the UK government's national lockdown announcement on 23 March 2020
        - Built on an earlier 2005 influenza pandemic ABM, demonstrating [[Epidemiological Modelling]] ABMs as critical national infrastructure
      - Department of Computing: active research in autonomous agents, [[Multi-Agent Systems]], and agentic AI deployment
      - Thomson Reuters-Imperial Frontier AI Lab (December 2025): covers agent-based and multi-agent reasoning applications in legal and financial contexts
      - Lenovo London AI Technology Centre (White City Deep Tech Campus, 2025): focuses on foundation models, agentic AI, and real-world deployment of intelligent systems
    - ### University of Sheffield
      - FLAME GPU (Paul Richmond and colleagues, Department of Computer Science):
        - Globally distinctive UK contribution to ABM computational infrastructure
        - FLAME GPU 2: approximately 1,000x faster than NetLogo, 18x faster than Agents.jl (Boids and Schelling benchmarks)
        - Enables billion-agent simulations on a single NVIDIA A100 GPU
        - Published with NVIDIA endorsement; widely adopted for large-scale [[Epidemiological Modelling]], [[Crowd Simulation]], and [[Digital Twin]] applications
        - Directly enables real-time agent-based [[Digital Twin]] layers requiring sub-second update cycles
      - Natural Robotics Lab (Roderich Gross): decentralised [[Swarm Intelligence]] and supervisory control theory for robot swarms — relevant to distributed ABM agent coordination
      - AMRC (Advanced Manufacturing Research Centre) Sheffield: industrial ABM applications in production scheduling, predictive maintenance, and manufacturing process optimisation
    - ### University of Edinburgh
      - Active in [[Multi-Agent Systems]] theory, agent-based [[Social Simulation]], and multi-agent planning
      - Co-led UK Multi-Agent Systems Symposium 2025 with the Alan Turing Institute and King's College London
      - Lenovo AI Technology Centre opening in Edinburgh in 2025/2026: expanding regional AI research capacity for agent-based AI research
      - Research spanning formal verification of agent properties, multi-agent coordination protocols, and social ABM applications in policy analysis
    - ### University of Leeds
      - Nick Malleson (Professor of Spatial Science, Centre for Spatial Analysis and Policy, School of Geography):
        - Leads the most active UK urban ABM research group
        - Develops real-time pedestrian dynamics ABMs fused with anonymised CCTV tracking data and GPS mobility traces
        - Embedded within the Alan Turing Institute's Urban Analytics programme
        - Work directly informs [[Urban Computing]] and [[Policy Simulation]] for UK city management and emergency response
      - Institute for Data Analytics (IDA, Leeds): brings ABM into contact with data engineering and machine learning pipelines
      - Proximity to major Northern England logistics and retail industries with supply-chain ABM and [[Supply Chain Optimisation]] demand
    - ### University of Manchester
      - PhD in Multi-Scale Modelling (School of Engineering, 2026 entry): addresses ABM across biological, engineering, and social domains
      - Interdisciplinary complex systems research spanning materials science, soft matter, and [[Computational Social Science]] applications
      - Centre for Policy Modelling (CPM, Manchester Metropolitan University, founded by Nigel Gilbert and colleagues):
        - One of Europe's earliest dedicated ABM research centres, active since the early 1990s
        - Pioneered the use of [[Social Simulation]] ABMs for evidence-based public policy analysis in the UK
        - Historically significant Northern England contribution to the international ABM community (alongside JASSS publication)
      - Manchester's AI and data science commercial ecosystem (Peak AI, ThoughtRiver, and others) provides industrial ABM application contexts
    - ### University of Cambridge
      - Epiabm project (Cambridge Engineering Department, 2022): open-source Python and C++ [[Epidemiological Modelling]] ABM framework at local-authority spatial resolution
        - Supports national pandemic preparedness and epidemic response ABM infrastructure
        - Integrates with UK Health Security Agency (UKHSA) data pipelines
      - Engineering Design Centre: individual-based modelling of complex engineering systems and socio-technical systems
    - ### University of Nottingham
      - Biomedical ABMs: cancer growth, tumour invasion, and immune system response using individual-based modelling frameworks
      - Ecological and conservation ABMs: species population dynamics, habitat fragmentation
      - Participant in the Epiabm consortium for epidemic [[Epidemiological Modelling]] ABM development
    - ### Alan Turing Institute (London)
      - Coordinates UK-wide ABM research through Urban Analytics, Health, and Defence and Security programmes
      - Connects academic ABM groups to government advisory roles (NHS, Cabinet Office, DSTL)
      - Urban Analytics programme: national hub for city-scale ABM and data fusion, co-ordinating Leeds, Edinburgh, and London groups
      - Partnership with ONS (Office for National Statistics) on synthetic population ABMs for census data quality assessment

  - ## Future Directions (2026-2030)
    - ### Differentiable and Probabilistic ABMs
      - Convergence of ABM with probabilistic programming (Pyro, NumPyro, Stan) and differentiable frameworks (JAX, PyTorch):
        - New class of inference-capable ABMs where parameters are inferred from data via gradient descent or variational inference
        - ABMax (2025, JAX): differentiable ABM achieving gradient-based calibration through automatic differentiation of the simulation graph
        - Reduces calibration time from weeks of [[Monte Carlo Simulation]] sweeps to hours of gradient-descent
        - Enables Bayesian posterior characterisation of agent parameters — producing uncertainty intervals over emergent model predictions
        - Approximate Bayesian Computation (ABC) and Sequential Monte Carlo (SMC-ABC) are current state of the art for likelihood-free inference over ABM parameters
      - Gaussian process metamodels trained on ABM ensemble runs provide fast surrogate surfaces for global [[Sensitivity Analysis]] and optimisation
    - ### Generative ABM Validation and Reproducibility
      - The 2025 Springer AI Review ("Validation is the central challenge") identifies core unsolved issues:
        - Behavioural validity: do LLM agents replicate known social phenomena (Schelling segregation, Deffuant opinion dynamics) with correct statistics?
        - Cross-simulation reproducibility: stochastic LLM outputs require distribution-level rather than point-level comparison
        - Cultural and linguistic bias in LLM training corpora distorts simulated population behaviour
      - Research agenda (2026-2030):
        - Standardised behavioural benchmark suite for LLM agents analogous to ABM ODD protocol
        - Hybrid architectures: rule-based agents for high-volume routine decisions, LLM agents for rare, context-sensitive events
        - Formal behavioural specification of LLM agent policies using temporal logic — enabling at least partial verification
        - Calibration protocols for generative ABMs using revealed preference data and survey response comparison
    - ### Real-Time and Edge-Deployed ABMs
      - Demand for continuously calibrated [[Digital Twin]] layers drives ABM execution to operational timescales:
        - Sub-second update cycles required for real-time urban mobility and factory floor twins
        - FLAME GPU-class hardware (NVIDIA A100, H100) enables billion-agent real-time execution
        - Edge inference accelerators (NVIDIA Jetson, Intel Gaudi) enable distributed ABM execution near IoT data sources
      - Data assimilation methods from weather forecasting adapt to ABM:
        - Ensemble Kalman Filter (EnKF) applied to ABM state estimation from live sensor data
        - Particle filter methods for sequential Bayesian updating of ABM state given streaming observations
        - Each sensor reading updates the ensemble of running ABM replicates to maintain calibration
      - This convergence makes ABMs a real-time operational tool rather than an offline analysis tool
    - ### Multi-Scale and Hierarchical ABMs
      - Combining agent-level microstructure with meso-level [[Network Science]] dynamics and macro-level aggregate constraints:
        - Addresses the long-standing tension between computational tractability and representational fidelity
        - Hierarchical ABMs coupling population-level [[System Dynamics]] with agent-level heterogeneity for key sub-populations
        - Example: pandemic ABM where the general population follows SEIR dynamics but healthcare workers, care home residents, and super-spreaders are individually modelled
        - Multi-resolution ABMs adaptively refine agent representation in high-interest regions and coarsen elsewhere
    - ### ABM as MARL Environment and AI Governance Tool
      - As [[Multi-Agent Reinforcement Learning]] matures, ABM substrates become the primary policy training environment:
        - ABM provides realistic, heterogeneous populations of adaptive agents for MARL training — improving policy robustness and transfer
        - Bidirectional coupling: MARL-trained agent policies can replace hand-coded ABM rules; ABM populations provide training context
        - OpenAI hide-and-seek, DeepMind MeltingPot, and SMAC are early instances of this MARL-ABM integration pattern
      - AI governance ABMs model heterogeneous AI adopter populations, regulatory bodies, and affected communities:
        - [[Innovation Diffusion]] ABMs of AI tool adoption across sectors — projecting distributional welfare effects under alternative policy scenarios
        - Labour market displacement ABMs under automation — informing retraining policy and social safety net design
        - Safety incident propagation ABMs for AI systems deployed in critical infrastructure
    - ### Hypergraph and Higher-Order Interaction ABMs
      - Beyond pairwise [[Network Science]] edges to hyperedges capturing simultaneous group interactions:
        - Group opinion formation (quorum effects, committee decision dynamics)
        - Higher-order contagion (infection requires simultaneous contact with multiple infectious individuals)
        - Multi-party biological signalling (quorum sensing in bacterial populations)
      - Hypergraph-embedded ABMs capture social phenomena invisible to pairwise network models
      - Connection to topological data analysis (persistent homology of interaction patterns) as a novel [[Sensitivity Analysis]] tool
    - ### Federated and Privacy-Preserving ABMs
      - Training and calibrating ABMs on distributed sensitive data without centralisation:
        - Hospital records (NHS DigiTrials, UK GDPR compliance): federated calibration of [[Epidemiological Modelling]] ABMs across NHS trusts
        - Financial transaction data: federated systemic risk ABMs using bank-level proprietary data under PRA oversight
        - Urban mobility data: anonymised GPS traces under GDPR for [[Urban Computing]] ABMs
      - Federated learning protocols (FedAvg, FedProx, Flower framework) adapted to ABM parameter fitting:
        - Local ABM sub-models calibrated to local data, global ABM parameters aggregated across participants
        - Differential privacy noise injection to prevent re-identification from calibrated parameters
    - ### Formal Verification of Emergent Properties
      - Applying model checking (PRISM, SPIN) and formal methods to provide provable guarantees about emergent ABM behaviour:
        - Temporal logic specification: "it is always the case that, after 100 time steps, the fraction of infected agents is less than p under vaccination strategy V"
        - Stochastic model checking: probabilistic guarantees over the ensemble distribution of outcomes
        - Critical for safety-relevant ABM applications: aviation evacuation ABMs (FAR 25.803 certification), nuclear plant emergency response ABMs, healthcare capacity planning ABMs used in national resilience planning

  - ## Current Landscape (2026)
    - ### Software Ecosystem
      - **NetLogo** (Northwestern University, 400,000+ registered users): dominant academic and educational ABM platform with built-in BehaviorSpace for parameter sweeps and [[Sensitivity Analysis]]; limited to single-threaded execution
      - **Mesa** (Python, Mesa 3.0, 2025): dominant data science community framework integrating with NumPy, NetworkX, Jupyter; approximately 10^6 agent steps/second; suitable for models up to approximately 100,000 agents
      - **Agents.jl** (Julia): highest CPU throughput among interpreted-language frameworks (approximately 10^8 agent steps/second multi-threaded); approximately 18x faster than FLAME GPU 2 for Schelling benchmark on CPU
      - **FLAME GPU 2** (University of Sheffield): approximately 1,000x faster than NetLogo, 18x faster than Agents.jl for GPU benchmarks (Boids, Schelling); enables billion-agent simulations on NVIDIA A100; target for real-time [[Digital Twin]] ABM layers
      - **AnyLogic** (commercial): uniquely combines ABM, [[System Dynamics]], and [[Discrete Event Simulation]] in one hybrid environment; dominant industrial platform for logistics, defence, and healthcare applications
      - **ABMax** (JAX, 2025): differentiable ABM enabling gradient-based calibration via automatic differentiation; GPU-accelerated for large-scale inference
      - **krABMaga** (Rust, 2024): demonstrated superior multi-core CPU scalability over Mesa, Agents.jl, NetLogo, and MASON in published benchmarks
      - **AMBER** (Python columnar, 2025): column-oriented agent state layout for cache-efficient large-scale Python ABM execution
    - ### Generative ABM Platforms (2024-2026)
      - Google DeepMind **Concordia** (2024): structured library for LLM-driven [[Social Simulation]] with experimental design primitives
      - **AgentSociety** (2025): large-scale societal simulation with LLM-driven agents; studies human behaviour and emergent social dynamics
      - **OASIS**: social-media-scale simulation with millions of LLM-driven user agents for information diffusion and opinion formation
      - **GATSim** (2025/2026, arXiv:2506.23306): city-scale urban mobility simulation using generative LLM agents
      - Springer Nature AI Review (2025): identifies validation as the central challenge — LLM cultural biases, stochastic outputs, and black-box reasoning compound ABM calibration difficulty
    - ### Industry Applications
      - [[Supply Chain Optimisation]]: DHL Resilience360 (ABM stress-testing), Procter and Gamble (25 per cent inventory reduction), ocean carriers (5,000 ABM scenarios/day, 92 per cent delay accuracy)
      - [[Digital Twin]]: agentic digital twin (A-SCDT) architectures in smart cities, factory floors, and financial markets (Taylor and Francis, 2026)
      - Healthcare: NHS-linked hospital capacity and pandemic ABMs; Epiabm (Cambridge) for UKHSA planning
      - Finance: Bank of England internal ABM for systemic risk; OECD agent-based macro complements to DSGE

  - ## Contrast with Related Paradigms
    - ### ABMs vs [[System Dynamics]]
      - [[System Dynamics]] (Forrester, 1961): aggregate stocks and flows via differential equations — fast, analytically tractable, excellent for feedback-dominated systems
        - Cannot represent individual heterogeneity, spatial structure, or path-dependent individual histories
      - ABMs: preserve individual heterogeneity, spatial and network structure, stochasticity, adaptive strategies
        - Cost: computationally expensive, analytically intractable, calibration-demanding
      - Synthesis: AnyLogic hybrid models combine [[System Dynamics]] aggregate flows with ABM heterogeneous sub-populations (e.g., SEIR dynamics with ABM healthcare workers in pandemic models)
    - ### ABMs vs [[Discrete Event Simulation]]
      - [[Discrete Event Simulation]] focuses on process flows (queues, resources, activities) — passive entities flowing through predefined process networks
        - Natural for operations research: call centres, manufacturing, hospital patient pathways
      - ABMs give entities autonomy, internal state, and adaptive strategy — active agents making decisions, not passive tokens
      - Hybrid DES-ABM: modelling both process flow (patient pathways, DES) and autonomous decision-making (patient preferences, ABM) in healthcare systems
    - ### ABMs vs [[Multi-Agent Systems]] (AI Engineering)
      - [[Multi-Agent Systems]] in AI engineering designs, deploys, and coordinates autonomous agents in real-world systems (robotics, LLM orchestration)
        - MAS goal: functional, safe, efficient deployed system with provable properties
        - ABM goal: scientific model of emergent phenomena for understanding, explanation, and policy testing
      - Convergence: generative ABMs increasingly use deployed MAS frameworks (LangChain, CrewAI, AutoGen) as agent engines — blurring the scientific simulation/AI deployment boundary
    - ### ABMs vs [[Equation-Based Modelling]]
      - Mathematical models (ODEs, PDEs) assume homogeneous, continuous populations with globally defined dynamics — enabling formal analysis but prohibiting individual-level heterogeneity
      - ABMs relax all three assumptions (homogeneity, continuity, global specification) at the cost of computational expense and analytical intractability
      - Pattern-oriented modelling (POM, Grimm et al.) uses multiple empirical patterns as constraints for ABM validation, partially compensating for the absence of mathematical analysis

  - ## Research & Literature
    - [1] Schelling, T.C. (1969). Models of segregation. *American Economic Review Papers and Proceedings*, 59(2), 488-493.
    - [2] Conway, J.H. (1970). The game of life. *Scientific American*, 223(4), 4-10. (reported by Martin Gardner)
    - [3] Reynolds, C.W. (1987). Flocks, herds and schools: A distributed behavioral model. *SIGGRAPH Computer Graphics*, 21(4), 25-34.
    - [4] Axelrod, R. (1984). *The Evolution of Cooperation*. Basic Books, New York.
    - [5] Holland, J.H. (1992). *Adaptation in Natural and Artificial Systems*. MIT Press, Cambridge MA.
    - [6] Epstein, J.M. and Axtell, R.L. (1996). *Growing Artificial Societies: Social Science from the Bottom Up*. MIT Press, Cambridge MA.
    - [7] Epstein, J.M. (1999). Agent-based computational models and generative social science. *Complexity*, 4(5), 41-60.
    - [8] Axelrod, R. (1997). The dissemination of culture: A model with local convergence and global polarisation. *Journal of Conflict Resolution*, 41(2), 203-226.
    - [9] Bak, P., Tang, C. and Wiesenfeld, K. (1987). Self-organized criticality: An explanation of 1/f noise. *Physical Review Letters*, 59(4), 381.
    - [10] Wilensky, U. (1999). NetLogo. Center for Connected Learning and Computer-Based Modeling, Northwestern University. http://ccl.northwestern.edu/netlogo/
    - [11] LeBaron, B., Arthur, W.B. and Palmer, R. (1999). Time series properties of an artificial stock market. *Journal of Economic Dynamics and Control*, 23(9-10), 1487-1516.
    - [12] Grimm, V. et al. (2006). A standard protocol for describing individual-based and agent-based models. *Ecological Modelling*, 198(1-2), 115-126.
    - [13] Grimm, V. and Railsback, S. (2005). *Individual-based Modeling and Ecology*. Princeton University Press.
    - [14] Bonabeau, E. (2002). Agent-based modeling: Methods and techniques for simulating human systems. *PNAS*, 99(suppl 3), 7280-7287.
    - [15] Helbing, D. and Molnar, P. (1995). Social force model for pedestrian dynamics. *Physical Review E*, 51(5), 4282.
    - [16] Ferguson, N.M. et al. (2020). Impact of non-pharmaceutical interventions (NPIs) to reduce COVID-19 mortality and healthcare demand. Imperial College COVID-19 Response Team Report 9.
    - [17] Grimm, V. et al. (2020). The ODD protocol for describing agent-based and other simulation models: A second update. *JASSS*, 23(2), 7.
    - [18] Richmond, P. et al. (2010). High performance cellular level agent-based simulation with FLAME for the GPU. *Briefings in Bioinformatics*, 11(3), 334-347.
    - [19] Park, J.S. et al. (2023). Generative agents: Interactive simulacra of human behavior. *UIST 2023*. Stanford University.
    - [20] Park, J.S. et al. (2024). AI agents simulate human responses in social science surveys. *Nature Human Behaviour* (preprint/publication).
    - [21] Lamperti, F., Roventini, A. and Sani, A. (2018). Agent-based model calibration using machine learning surrogates. *Journal of Economic Dynamics and Control*, 90, 366-389.
    - [22] Chopra, A. et al. (2023). Differentiable agent-based epidemiology. *AAMAS 2023*, London.
    - [23] Abar, S. et al. (2017). Agent based modelling and simulation tools: A review of the state-of-art software. *Computer Science Review*, 24, 13-33.
    - [24] Castellano, C., Fortunato, S. and Loreto, V. (2009). Statistical physics of social dynamics. *Reviews of Modern Physics*, 81(2), 591.
    - [25] Validation is the central challenge for generative social simulation (2025). *Artificial Intelligence Review*, Springer Nature. DOI:10.1007/s10462-025-11412-6.
    - [26] LLMs and Generative Agent-Based Models for Complex Systems Research (2024). *Humanities and Social Sciences Communications*, Nature. DOI:10.1038/s41599-024-03611-3.
    - [27] ABMax: A JAX-based Agent-based Modeling Framework (2025). arXiv:2508.16508.
    - [28] GATSim: Urban Mobility Simulation with Generative Agents (2025/2026). arXiv:2506.23306.

- ### Provenance
  - sources:: Epstein and Axtell (1996) Growing Artificial Societies; Grimm et al. (2006, 2020) ODD Protocol; Ferguson et al. (2020) Imperial Report 9; Park et al. (2023) Generative Agents Stanford; Richmond et al. (2010) FLAME GPU Sheffield; Nature Humanities and Social Sciences Communications (2024) LLMs and ABM; Springer AI Review (2025) Validation challenge; arXiv:2508.16508 ABMax; arXiv:2506.23306 GATSim; Debales AI (2025) Digital Twin supply chain; JASSS; complexityexplorer.org Introduction to ABM 2024
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
