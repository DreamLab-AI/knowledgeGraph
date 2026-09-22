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
    { "@id": "urn:visionflow:linked:simulation", "vc:label": "Simulation" },
    { "@id": "urn:visionflow:linked:innovation-diffusion", "vc:label": "Innovation Diffusion" },
    { "@id": "urn:visionflow:linked:economic-model", "vc:label": "Economic Model" },
    { "@id": "urn:visionflow:linked:multi-agent-systems", "vc:label": "Multi-Agent Systems" },
    { "@id": "urn:visionflow:linked:computational-modelling", "vc:label": "Computational Modelling" },
    { "@id": "urn:visionflow:linked:complex-adaptive-systems", "vc:label": "Complex Adaptive Systems" },
    { "@id": "urn:visionflow:linked:emergence", "vc:label": "Emergence" },
    { "@id": "urn:visionflow:linked:autonomous-agent", "vc:label": "Autonomous Agent" },
    { "@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning" },
    { "@id": "urn:visionflow:linked:cellular-automata", "vc:label": "Cellular Automata" },
    { "@id": "urn:visionflow:linked:monte-carlo-simulation", "vc:label": "Monte Carlo Simulation" },
    { "@id": "urn:visionflow:linked:epidemiological-modelling", "vc:label": "Epidemiological Modelling" },
    { "@id": "urn:visionflow:linked:crowd-simulation", "vc:label": "Crowd Simulation" },
    { "@id": "urn:visionflow:linked:supply-chain-optimisation", "vc:label": "Supply Chain Optimisation" },
    { "@id": "urn:visionflow:linked:policy-simulation", "vc:label": "Policy Simulation" },
    { "@id": "urn:visionflow:linked:system-dynamics", "vc:label": "System Dynamics" },
    { "@id": "urn:visionflow:linked:swarm-intelligence", "vc:label": "Swarm Intelligence" },
    { "@id": "urn:visionflow:linked:digital-twin", "vc:label": "Digital Twin" },
    { "@id": "urn:visionflow:linked:game-theory", "vc:label": "Game Theory" },
    { "@id": "urn:visionflow:linked:network-science", "vc:label": "Network Science" },
    { "@id": "urn:visionflow:linked:social-simulation", "vc:label": "Social Simulation" },
    { "@id": "urn:visionflow:linked:stochastic-process", "vc:label": "Stochastic Process" },
    { "@id": "urn:visionflow:linked:discrete-event-simulation", "vc:label": "Discrete Event Simulation" },
    { "@id": "urn:visionflow:linked:complex-systems-science", "vc:label": "Complex Systems Science" },
    { "@id": "urn:visionflow:linked:environment-model", "vc:label": "Environment Model" },
    { "@id": "urn:visionflow:linked:equation-based-modelling", "vc:label": "Equation-Based Modelling" },
    { "@id": "urn:visionflow:linked:sensitivity-analysis", "vc:label": "Sensitivity Analysis" },
    { "@id": "urn:visionflow:linked:multi-agent-reinforcement-learning", "vc:label": "Multi-Agent Reinforcement Learning" },
    { "@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models" },
    { "@id": "urn:visionflow:linked:genetic-algorithm", "vc:label": "Genetic Algorithm" },
    { "@id": "urn:visionflow:linked:urban-computing", "vc:label": "Urban Computing" },
    { "@id": "urn:visionflow:linked:agent-based-models", "vc:label": "Agent-Based Models" },
    { "@id": "urn:visionflow:linked:computational-social-science", "vc:label": "Computational Social Science" },
    { "@id": "urn:visionflow:linked:uncertainty-quantification", "vc:label": "Uncertainty Quantification" },
    { "@id": "urn:visionflow:linked:scientific-computing", "vc:label": "Scientific Computing" },
    { "@id": "urn:visionflow:linked:collective-intelligence", "vc:label": "Collective Intelligence" },
    { "@id": "urn:visionflow:linked:feedback-loop", "vc:label": "Feedback Loop" },
    { "@id": "urn:visionflow:linked:behavioural-modelling", "vc:label": "Behavioural Modelling" },
    { "@id": "urn:visionflow:linked:artificial-life", "vc:label": "Artificial Life" },
    { "@id": "urn:visionflow:linked:parallel-computing", "vc:label": "Parallel Computing" },
    { "@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning" }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    { "vc:key": "preferred-term", "vc:value": "Agent-Based Modelling" }
  ],
  "prov:wasAttributedTo": { "@id": "did:nostr:jjohare" },
  "prov:generatedAtTime": { "@value": "2026-05-29T00:00:00Z", "@type": "xsd:dateTime" }
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
  "qualityScore": 0.87,
  "subClassOf": [
    { "@id": "urn:ngm:class:simulation", "label": "Simulation" },
    { "@id": "urn:ngm:class:complexity-science", "label": "Complexity Science" }
  ],
  "sameAs": [
    { "@id": "urn:ngm:class:agent-based-simulation", "label": "Agent-Based Simulation" },
    { "@id": "urn:ngm:class:individual-based-modelling", "label": "Individual-Based Modelling" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent" },
      { "@id": "urn:ngm:class:environment-model", "label": "Environment Model" },
      { "@id": "urn:ngm:class:emergence", "label": "Emergence" },
      { "@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process" },
      { "@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:complexity-science", "label": "Complexity Science" },
      { "@id": "urn:ngm:class:computational-social-science", "label": "Computational Social Science" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:simulation", "label": "Simulation" },
      { "@id": "urn:ngm:class:discrete-event-simulation", "label": "Discrete Event Simulation" },
      { "@id": "urn:ngm:class:scientific-computing", "label": "Scientific Computing" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:innovation-diffusion", "label": "Innovation Diffusion" },
      { "@id": "urn:ngm:class:epidemiological-modelling", "label": "Epidemiological Modelling" },
      { "@id": "urn:ngm:class:crowd-simulation", "label": "Crowd Simulation" },
      { "@id": "urn:ngm:class:supply-chain-optimisation", "label": "Supply Chain Optimisation" },
      { "@id": "urn:ngm:class:policy-simulation", "label": "Policy Simulation" },
      { "@id": "urn:ngm:class:collective-intelligence", "label": "Collective Intelligence" },
      { "@id": "urn:ngm:class:uncertainty-quantification", "label": "Uncertainty Quantification" }
    ],
    "dependsOn": [
      { "@id": "urn:ngm:class:computational-modelling", "label": "Computational Modelling" },
      { "@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process" },
      { "@id": "urn:ngm:class:behavioral-modeling", "label": "Behavioural Modelling" }
    ],
    "implements": [
      { "@id": "urn:ngm:class:complex-adaptive-systems", "label": "Complex Adaptive Systems" },
      { "@id": "urn:ngm:class:artificial-life", "label": "Artificial Life" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning" },
      { "@id": "urn:ngm:class:cellular-automata", "label": "Cellular Automata" },
      { "@id": "urn:ngm:class:monte-carlo-simulation", "label": "Monte Carlo Simulation" },
      { "@id": "urn:ngm:class:genetic-algorithm", "label": "Genetic Algorithm" },
      { "@id": "urn:ngm:class:sensitivity-analysis", "label": "Sensitivity Analysis" },
      { "@id": "urn:ngm:class:parallel-computing", "label": "Parallel Computing" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:economic-model", "label": "Economic Model" },
      { "@id": "urn:ngm:class:policy-simulation", "label": "Policy Simulation" },
      { "@id": "urn:ngm:class:social-simulation", "label": "Social Simulation" },
      { "@id": "urn:ngm:class:urban-computing", "label": "Urban Computing" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:system-dynamics", "label": "System Dynamics" },
      { "@id": "urn:ngm:class:equation-based-modelling", "label": "Equation-Based Modelling" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems" },
      { "@id": "urn:ngm:class:swarm-intelligence", "label": "Swarm Intelligence" },
      { "@id": "urn:ngm:class:digital-twin", "label": "Digital Twin" },
      { "@id": "urn:ngm:class:multi-agent-reinforcement-learning", "label": "Multi-Agent Reinforcement Learning" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:game-theory", "label": "Game Theory" },
      { "@id": "urn:ngm:class:network-science", "label": "Network Science" },
      { "@id": "urn:ngm:class:large-language-models", "label": "Large Language Models" },
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:agent-based-modelling:65e478a94f98",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9c31a8b7c1310d72810b758ce9008b46d461d79166dcf458ce805467a02176eb"
  },
  "vc:resolutions": [
    { "raw": "[[Simulation]]", "resolved": "urn:visionflow:linked:simulation", "kind": "ResolvedLink" },
    { "raw": "[[Innovation Diffusion]]", "resolved": "urn:visionflow:linked:innovation-diffusion", "kind": "ResolvedLink" },
    { "raw": "[[Economic Model]]", "resolved": "urn:visionflow:linked:economic-model", "kind": "ResolvedLink" },
    { "raw": "[[Multi-Agent Systems]]", "resolved": "urn:visionflow:linked:multi-agent-systems", "kind": "ResolvedLink" },
    { "raw": "[[Computational Modelling]]", "resolved": "urn:visionflow:linked:computational-modelling", "kind": "ResolvedLink" },
    { "raw": "[[Complex Adaptive Systems]]", "resolved": "urn:visionflow:linked:complex-adaptive-systems", "kind": "ResolvedLink" },
    { "raw": "[[Emergence]]", "resolved": "urn:visionflow:linked:emergence", "kind": "ResolvedLink" },
    { "raw": "[[Autonomous Agent]]", "resolved": "urn:visionflow:linked:autonomous-agent", "kind": "ResolvedLink" },
    { "raw": "[[Reinforcement Learning]]", "resolved": "urn:visionflow:linked:reinforcement-learning", "kind": "ResolvedLink" },
    { "raw": "[[Cellular Automata]]", "resolved": "urn:visionflow:linked:cellular-automata", "kind": "ResolvedLink" },
    { "raw": "[[Monte Carlo Simulation]]", "resolved": "urn:visionflow:linked:monte-carlo-simulation", "kind": "ResolvedLink" },
    { "raw": "[[Epidemiological Modelling]]", "resolved": "urn:visionflow:linked:epidemiological-modelling", "kind": "ResolvedLink" },
    { "raw": "[[Crowd Simulation]]", "resolved": "urn:visionflow:linked:crowd-simulation", "kind": "ResolvedLink" },
    { "raw": "[[Supply Chain Optimisation]]", "resolved": "urn:visionflow:linked:supply-chain-optimisation", "kind": "ResolvedLink" },
    { "raw": "[[Policy Simulation]]", "resolved": "urn:visionflow:linked:policy-simulation", "kind": "ResolvedLink" },
    { "raw": "[[System Dynamics]]", "resolved": "urn:visionflow:linked:system-dynamics", "kind": "ResolvedLink" },
    { "raw": "[[Swarm Intelligence]]", "resolved": "urn:visionflow:linked:swarm-intelligence", "kind": "ResolvedLink" },
    { "raw": "[[Digital Twin]]", "resolved": "urn:visionflow:linked:digital-twin", "kind": "ResolvedLink" },
    { "raw": "[[Game Theory]]", "resolved": "urn:visionflow:linked:game-theory", "kind": "ResolvedLink" },
    { "raw": "[[Network Science]]", "resolved": "urn:visionflow:linked:network-science", "kind": "ResolvedLink" },
    { "raw": "[[Social Simulation]]", "resolved": "urn:visionflow:linked:social-simulation", "kind": "ResolvedLink" },
    { "raw": "[[Stochastic Process]]", "resolved": "urn:visionflow:linked:stochastic-process", "kind": "ResolvedLink" },
    { "raw": "[[Discrete Event Simulation]]", "resolved": "urn:visionflow:linked:discrete-event-simulation", "kind": "ResolvedLink" },
    { "raw": "[[Complex Systems Science]]", "resolved": "urn:visionflow:linked:complex-systems-science", "kind": "ResolvedLink" },
    { "raw": "[[Environment Model]]", "resolved": "urn:visionflow:linked:environment-model", "kind": "ResolvedLink" },
    { "raw": "[[Equation-Based Modelling]]", "resolved": "urn:visionflow:linked:equation-based-modelling", "kind": "StubLink" },
    { "raw": "[[Sensitivity Analysis]]", "resolved": "urn:visionflow:linked:sensitivity-analysis", "kind": "ResolvedLink" },
    { "raw": "[[Multi-Agent Reinforcement Learning]]", "resolved": "urn:visionflow:linked:multi-agent-reinforcement-learning", "kind": "ResolvedLink" },
    { "raw": "[[Large Language Models]]", "resolved": "urn:visionflow:linked:large-language-models", "kind": "ResolvedLink" },
    { "raw": "[[Genetic Algorithm]]", "resolved": "urn:visionflow:linked:genetic-algorithm", "kind": "ResolvedLink" },
    { "raw": "[[Urban Computing]]", "resolved": "urn:visionflow:linked:urban-computing", "kind": "StubLink" },
    { "raw": "[[Agent-Based Models]]", "resolved": "urn:visionflow:linked:agent-based-models", "kind": "ResolvedLink" },
    { "raw": "[[Computational Social Science]]", "resolved": "urn:visionflow:linked:computational-social-science", "kind": "StubLink" },
    { "raw": "[[Uncertainty Quantification]]", "resolved": "urn:visionflow:linked:uncertainty-quantification", "kind": "ResolvedLink" },
    { "raw": "[[Scientific Computing]]", "resolved": "urn:visionflow:linked:scientific-computing", "kind": "StubLink" },
    { "raw": "[[Collective Intelligence]]", "resolved": "urn:visionflow:linked:collective-intelligence", "kind": "ResolvedLink" },
    { "raw": "[[Feedback Loop]]", "resolved": "urn:visionflow:linked:feedback-loop", "kind": "ResolvedLink" },
    { "raw": "[[Behavioural Modelling]]", "resolved": "urn:visionflow:linked:behavioural-modelling", "kind": "StubLink" },
    { "raw": "[[Artificial Life]]", "resolved": "urn:visionflow:linked:artificial-life", "kind": "StubLink" },
    { "raw": "[[Parallel Computing]]", "resolved": "urn:visionflow:linked:parallel-computing", "kind": "ResolvedLink" },
    { "raw": "[[Machine Learning]]", "resolved": "urn:visionflow:linked:machine-learning", "kind": "ResolvedLink" }
  ],
  "prov:wasAttributedTo": { "@id": "did:nostr:lcr-swarm" },
  "prov:generatedAtTime": { "@value": "2026-06-20T00:00:00Z", "@type": "xsd:dateTime" }
}
```

- ### Definition
  - Agent-based modelling (ABM) is a [[Computational Modelling]] and [[Simulation]] methodology that represents a system as a population of discrete, autonomous, heterogeneous agents, each obeying local behavioural rules and interacting within a shared [[Environment Model]]. Macro-level patterns — such as price dynamics in an [[Economic Model]], the spread of disease in [[Epidemiological Modelling]], residential segregation in cities, or cascading failures in supply networks — emerge from these micro-level interactions rather than being pre-specified analytically. ABM is the computational realisation of [[Complex Adaptive Systems]] theory: it preserves agent heterogeneity, discrete individuality, stochastic variation, and path-dependence across the [[Simulation]], distinguishing it fundamentally from [[Equation-Based Modelling]] and [[System Dynamics]] which compress populations into aggregate flows. Each [[Autonomous Agent]] carries its own state vector, decision rules, memory, and optionally a learned policy derived through [[Reinforcement Learning]] or evolutionary computation via [[Genetic Algorithm]]. Agents perceive only a local neighbourhood of the [[Environment Model]] (which may be a spatial grid, a GIS landscape, a topological network from [[Network Science]], or an abstract state space) and act accordingly; repeated local computation iterated over thousands or millions of time steps gives rise to [[Emergence]] — qualitative global structure absent from any individual agent's specification. The approach draws technically on [[Stochastic Process]] theory for rule randomisation, [[Monte Carlo Simulation]] for parameter sweeps, [[Discrete Event Simulation]] idioms for asynchronous scheduling, and [[Cellular Automata]] logic for spatial neighbourhood dynamics. When combined with real-time sensor feeds and continuous calibration, ABM becomes the active layer within [[Digital Twin]] architectures. The paradigm bridges naturally into [[Multi-Agent Systems]] (AI engineering for deployed autonomous systems), [[Swarm Intelligence]] (stigmergic collective computation), and — as of 2024-2026 — generative simulation powered by [[Large Language Models]] acting as nuanced agent decision engines. ABM is formally a subfield of [[Complex Systems Science]] and [[Computational Social Science]], with applications spanning public health [[Policy Simulation]], [[Crowd Simulation]], [[Supply Chain Optimisation]], [[Social Simulation]], [[Innovation Diffusion]], [[Collective Intelligence]] studies, and [[Urban Computing]].

- ### Semantic Classification
  - owl-class:: ai:AgentBasedModelling
  - owl-role:: ExecutableProtocol | SimulationMethodology | ComplexSystemsFramework
  - owl-inferred:: ai:BottomUpSimulation, ai:ComplexSystemsMethod, ai:ComputationalSocialScience
  - belongs-to-domain:: [[Complex Systems Science]]
  - implemented-in-layer:: [[Simulation]]

- ### Relationships
  - is-subclass-of:: [[Simulation]], [[Complex Systems Science]], [[Computational Modelling]]
  - has-part:: [[Autonomous Agent]], [[Environment Model]], [[Emergence]], [[Stochastic Process]], [[Feedback Loop]], [[Sensitivity Analysis]], [[Scheduler]]
  - part-of:: [[Complex Systems Science]], [[Computational Social Science]], [[Artificial Intelligence]]
  - requires:: [[Simulation]], [[Discrete Event Simulation]], [[Scientific Computing]], [[Stochastic Process]]
  - enables:: [[Innovation Diffusion]], [[Epidemiological Modelling]], [[Crowd Simulation]], [[Supply Chain Optimisation]], [[Policy Simulation]], [[Collective Intelligence]], [[Uncertainty Quantification]], [[Social Simulation]], [[Economic Model]]
  - implements:: [[Complex Adaptive Systems]], [[Artificial Life]], [[Behavioural Modelling]]
  - depends-on:: [[Computational Modelling]], [[Stochastic Process]], [[Behavioural Modelling]], [[Scientific Computing]]
  - uses:: [[Reinforcement Learning]], [[Cellular Automata]], [[Monte Carlo Simulation]], [[Genetic Algorithm]], [[Sensitivity Analysis]], [[Parallel Computing]], [[Network Science]], [[Machine Learning]]
  - supports:: [[Economic Model]], [[Policy Simulation]], [[Social Simulation]], [[Urban Computing]], [[Digital Twin]], [[Epidemiological Modelling]]
  - contrasts-with:: [[System Dynamics]], [[Equation-Based Modelling]], [[Discrete Event Simulation]]
  - bridges-to:: [[Multi-Agent Systems]], [[Swarm Intelligence]], [[Digital Twin]], [[Multi-Agent Reinforcement Learning]], [[Large Language Models]]
  - related-to:: [[Game Theory]], [[Network Science]], [[Large Language Models]], [[Machine Learning]], [[Agent-Based Models]], [[Swarm Intelligence]], [[Collective Intelligence]], [[Artificial Life]], [[Feedback Loop]], [[Emergence]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:hasPart ai:AutonomousAgent))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:hasPart ai:EnvironmentModel))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:hasPart ai:Emergence))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:hasPart ai:StochasticProcess))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:hasPart ai:FeedbackLoop))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:hasPart ai:Scheduler))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:requires ai:Simulation))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:requires ai:DiscreteEventSimulation))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:requires ai:ScientificComputing))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:dependsOn ai:ComputationalModelling))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:dependsOn ai:BehaviouralModelling))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:dependsOn ai:StochasticProcess))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:enables ai:EpidemiologicalModelling))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:enables ai:PolicySimulation))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:enables ai:InnovationDiffusion))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:enables ai:CrowdSimulation))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:enables ai:SupplyChainOptimisation))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:enables ai:CollectiveIntelligence))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:enables ai:UncertaintyQuantification))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:implements ai:ComplexAdaptiveSystems))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:implements ai:ArtificialLife))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:uses ai:ReinforcementLearning))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:uses ai:CellularAutomata))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:uses ai:MonteCarloSimulation))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:uses ai:GeneticAlgorithm))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:uses ai:ParallelComputing))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:reducesTo ai:SystemDynamics))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:reducesTo ai:DiscreteEventSimulation))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:reducesTo ai:CellularAutomata))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:reducesTo ai:EquationBasedModelling))
    ```
  - ## Support and Contrast Axioms
    ```
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:supports ai:EconomicModel))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:supports ai:DigitalTwin))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:supports ai:SocialSimulation))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:supports ai:UrbanComputing))
    SubClassOf(ai:AgentBasedModelling
      ObjectObjectComplementOf(ai:SystemDynamics))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:bridgesTo ai:MultiAgentSystems))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:bridgesTo ai:SwarmIntelligence))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:bridgesTo ai:MultiAgentReinforcementLearning))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:relatedTo ai:GameTheory))
    SubClassOf(ai:AgentBasedModelling
      ObjectSomeValuesFrom(ai:relatedTo ai:NetworkScience))
    ```

  - ## About
    - Agent-based modelling (ABM) is a bottom-up computational framework in which system behaviour is generated entirely from the interactions of discrete, autonomous agents rather than being prescribed through top-down aggregate equations. The philosophical core of ABM is that macroscopic phenomena — patterns, structures, regularities — should be explained by showing how they can emerge from micro-level rules that are individually plausible and empirically grounded. This "generative" stance (Epstein, 1999) distinguishes ABM from both [[System Dynamics]] (which uses stock-and-flow differential equations) and analytical [[Game Theory]], though it draws on [[Game Theory]] for agent decision structures and on [[Network Science]] when agents interact over graph topologies. ABM formally implements [[Complex Adaptive Systems]] theory as a simulation paradigm: agents adapt, networks of agents self-organise, and global structure is not imposed but discovered. Since [[Emergence]] is the defining output, validation requires comparing simulation outputs to real-world stylised facts, micro-trajectories, or distributional properties — a technically demanding but powerful approach to theory-testing. The three methodological alternatives to ABM — [[System Dynamics]] (aggregate ODEs), [[Discrete Event Simulation]] (process-centric queuing logic), and analytical mathematical models — each make simplifying assumptions (homogeneity, continuity, or closed-form tractability) that ABM deliberately relaxes, at the cost of computational expense and the difficulty of formal analysis.
    - The historical lineage of ABM runs from Thomas Schelling's 1969 residential segregation model (showing how mild individual preferences produce stark social segregation) and John Conway's Game of Life (1970, demonstrating that a three-state cellular automaton with simple birth/survival rules produces arbitrary computational complexity), through Craig Reynolds' Boids flocking algorithm (1987, showing that just three local rules — separation, alignment, cohesion — suffice to generate realistic bird-flock dynamics) and the Santa Fe Institute's work on complex adaptive systems in the late 1980s under Murray Gell-Mann, Stuart Kauffman, and John Holland. The framework crystallised in the 1990s through Epstein and Axtell's Sugarscape (1996), the development of StarLogo and subsequently NetLogo (Uri Wilensky, Northwestern University, 1999, now exceeding 400,000 registered users globally), and the SWARM and Repast toolkits. The ODD protocol (Grimm et al., 2006; updated 2020) established a community standard for model description and reproducibility, addressing the reproducibility crisis endemic to simulation science. By 2010, ABM was an established methodology in ecology, epidemiology, economics, and defence planning with thousands of peer-reviewed models in the JASSS archive and the CoMSES/OpenABM repository. The COVID-19 pandemic (2020-2022) demonstrated ABM's policy significance at national scale: Imperial College London's CovidSim model — an [[Epidemiological Modelling]] ABM based on a previous influenza model, developed by Neil Ferguson's group (MRC Centre for Global Infectious Disease Analysis) — directly influenced the UK government's March 2020 lockdown decision by projecting 500,000 UK deaths under unmitigated spread and modelling the comparative efficacy of social distancing, school closure, and household isolation as non-pharmaceutical interventions. Since 2023, the integration of [[Large Language Models]] as agent behavioural engines has opened a new frontier termed "generative agent-based modelling", following Park et al. (2023) at Stanford whose LLM-driven agents in a simulated town environment (Smallville) exhibited human-like social behaviours including planning, reflection, memory retrieval, and emergent cooperation, information spreading, and coordinated event participation — all arising from individual LLM reasoning without group-level specification.
    - The mathematical structure of an ABM can be formalised as a tuple (A, E, R, T, O) where A is the set of agents, E is the environment state space, R: A × E → A × E is the joint agent-environment transition rule (typically stochastic), T is the time-stepping operator (synchronous or asynchronous), and O: (A × E)* → M is an output function mapping simulation traces to observable macroscopic statistics M. Agent state evolves according to: a_i(t+1) = f_i(N_i(t), s_i(t), r_i) where N_i(t) is agent i's perceived neighbourhood at time t, s_i(t) is its internal state, r_i is a random draw from a [[Stochastic Process]], and f_i is its behavioural rule. The critical property is that f_i is defined locally — agent i cannot perceive the global state of the system — which is what makes [[Emergence]] non-trivial: global patterns at the level of M arise from iterated local applications of f_i across all agents and time steps. Calibration of ABMs involves finding parameters θ such that the distribution of simulation outputs O(sim(θ)) matches the distribution of empirical observations O_emp, which is a challenging statistical inverse problem typically approached via [[Monte Carlo Simulation]] ensembles, approximate Bayesian computation (ABC), or — in the latest generation of differentiable ABMs — gradient-based optimisation through automatic differentiation of the simulation graph.

  - ## Components / Architecture
    - **Agents**: Discrete, identifiable entities carrying state vectors (wealth, health status, spatial location, memory, strategy, social ties). Agents may be homogeneous (identical decision rules applied to all) or heterogeneous (individually varied parameters, attributes, histories, or strategies). Each [[Autonomous Agent]] carries: (a) a perception function mapping the local neighbourhood to a perceived state; (b) an internal state updated each time step; (c) a decision function mapping perceived state and internal memory to chosen action; and (d) optionally a learning or adaptation mechanism enabling strategy revision. Decision functions range from simple threshold conditionals ("if health below 0.3, seek nearest healer") through formal utility maximisation (rational-choice economic models) to machine-learned policies from [[Reinforcement Learning]] (tabular Q-learning, deep Q-networks, policy gradient methods) or contextual reasoning via [[Large Language Models]] in generative ABMs. Agents may also maintain a memory of past states, interactions, and outcomes, enabling backward-looking strategy revision, imitation of successful neighbours, or belief updating over observed data.
    - **Environment**: The shared space agents inhabit, modify, and navigate — the scaffolding within which agent interactions occur. Environment types include: (i) discrete grid (2D rectangular or hexagonal, 3D cubic lattice) following [[Cellular Automata]] logic, supporting Von Neumann 4-neighbourhood or Moore 8-neighbourhood interaction; (ii) continuous 2D or 3D Euclidean space where agents have real-valued positions, velocities, and force interactions (as in Helbing-Molnar's [[Crowd Simulation]] social force model or the Boids model); (iii) graph/network structure from [[Network Science]] where agents are nodes and communication or interaction channels are directed or weighted edges (social networks, financial trading networks, epidemiological contact networks, supply chains from [[Supply Chain Optimisation]]); (iv) GIS-embedded geographic layer with real terrain, road networks, and administrative boundaries for [[Urban Computing]] and [[Epidemiological Modelling]] applications; and (v) abstract state space for non-spatial economic, social, or ecological models where "proximity" is defined by information access or market participation rather than physical distance. The environment may itself carry state variables (resource levels, pheromone concentrations, pollution levels, infrastructure capacity) that agents both read and modify.
    - **Interaction rules**: Local rules governing how agents respond to neighbours, resources, environmental signals, and messages from other agents. Rules encode the model's substantive theory: economic ABMs encode bidding, bargaining, and price-setting mechanisms informed by [[Game Theory]]; epidemiological ABMs encode transmission probability as a function of contact duration, pathogen load, and host susceptibility; social ABMs encode bounded-confidence opinion updating (Deffuant-Weisbuch), cultural influence (Axelrod), or norm compliance pressure; ecological ABMs encode predation probability, foraging energy balance, and reproduction rules. Rules may be static (specified a priori and unchanged throughout the simulation) or adaptive: agents update strategies via [[Genetic Algorithm]] (crossover and mutation of rule parameters), evolutionary dynamics (fitness-proportional selection and reproduction), imitation (copying the strategy of the most successful observed neighbour), or [[Reinforcement Learning]] (updating a policy based on received rewards). In generative ABMs, the rule function is replaced by prompting a [[Large Language Models]] with the agent's current context, memory, and environmental description, and using the LLM's text output to determine the agent's action — enabling nuanced, contextually appropriate behaviour at the cost of computational expense and reduced determinism.
    - **Scheduler**: Determines the order of agent activation within each time step — a seemingly technical choice with substantive consequences. Synchronous scheduling (all agents compute their next state simultaneously from the current global state, then all states are updated simultaneously) preserves temporal symmetry and mirrors physics-style models such as [[Cellular Automata]]; it can produce spurious oscillations in competitive resource models. Asynchronous scheduling (agents activate in random order within each step, each reading the partially updated state) more realistically models continuous time and avoids spurious oscillations but introduces order-of-activation effects that must be analysed via [[Sensitivity Analysis]]. Priority-based schedulers activate agents in a specific order (by wealth, health, spatial proximity to an event) enabling power-asymmetric interaction models. Event-driven schedulers from [[Discrete Event Simulation]] — where agents activate only when a triggering condition occurs — can dramatically reduce computational load in sparse or heterogeneous models where most agents are inactive in any given time window.
    - **Stochastic layer**: Randomness is fundamental to ABM in three roles: (i) model realism — stochastic transition probabilities (infection with probability p, decision to migrate if utility gain exceeds threshold θ plus Gaussian noise) reflect genuine real-world variability; (ii) ensemble statistics — running many replicates from different random seeds via [[Monte Carlo Simulation]] generates a distribution of outcomes from which probability distributions, confidence intervals, and extreme-value statistics can be computed; and (iii) exploration — stochastic activation and rule perturbation enable models to escape deterministic fixed-point attractors and explore the full outcome distribution. Proper management of random seeds (seeding independently per replicate, recording seeds for reproducibility) is essential for [[Sensitivity Analysis]] and [[Uncertainty Quantification]]. Quasi-random (low-discrepancy) sequences (Sobol, Halton) can replace pseudo-random number generators for more efficient parameter-space coverage in global sensitivity analysis.
    - **Calibration and validation**: The most technically demanding aspect of ABM methodology. Calibration involves finding parameter values θ such that the distribution of simulation outputs M(sim(θ)) matches the distribution of empirical observations M_obs. Approaches include: manual calibration by domain experts iterating over runs; grid search over discretised parameter spaces (computationally expensive for high-dimensional θ); approximate Bayesian computation (ABC) — simulation-based inference that compares summary statistics of simulated and observed data without requiring an explicit likelihood; machine-learning surrogate calibration (Lamperti et al., 2018) — fitting a neural network emulator to ABM runs and optimising over the emulator; and differentiable ABM calibration (ABMax, 2025) — making the simulation differentiable and running gradient descent directly. Validation tests whether the calibrated model produces realistic outputs on held-out empirical data, replicates known stylised facts (Pareto wealth distributions, fat-tailed return distributions, epidemic growth rates), and generates useful counterfactual predictions. [[Sensitivity Analysis]] via Sobol indices or Morris screening quantifies which parameters dominate variance in outputs, guiding data collection and reducing parameter uncertainty.
    - **Output / analysis layer**: Records aggregate statistics (time series of mean wealth, infection prevalence, aggregate employment, spatial correlation functions, cluster sizes), micro-trajectories (per-agent state histories, event logs), and distributional statistics (histograms, Gini coefficients, power-law exponents). Statistical tests compare simulation output distributions to empirical targets. Spatial statistics (Moran's I for spatial autocorrelation, Ripley's K for point process clustering) are applied to spatial ABM outputs. Network statistics (degree distribution, clustering coefficient, path length) characterise interaction topology dynamics. Tools: OpenMOLE (CNRS, open-source) automates [[Sensitivity Analysis]] and optimisation over ABM parameter spaces using distributed computing; SALib (Python) provides Sobol and Morris sensitivity indices; NetLogo's BehaviorSpace performs built-in parameter sweeps.

  - ## Use Cases / Major Families
    - **Epidemiology and public health**: ABMs provide individual-level epidemic simulation where agents represent persons with heterogeneous age, health status, mobility patterns, household structure, and contact networks. They capture dynamics that aggregate ODE compartmental models (SIR, SEIR, SEIRD) cannot: super-spreader effects (heavy-tailed contact degree distribution), household transmission clusters, spatial containment effectiveness, intervention targeting (shielding the elderly, closing schools but not workplaces), and the temporal dynamics of healthcare demand surge. CovidSim (Imperial College London, Neil Ferguson's group, 2020) — an [[Epidemiological Modelling]] ABM built on the group's earlier 2005 influenza model — projected under unmitigated spread approximately 510,000 deaths in Great Britain and 2.2 million in the United States, and showed that household isolation combined with social distancing could reduce peak healthcare demand by over 60 per cent; these projections, published as Imperial Report 9 on 16 March 2020, were directly influential in the UK government's decision to announce a national lockdown on 23 March 2020. The Epiabm framework (Cambridge Engineering, 2022) provides open-source Python and C++ infrastructure for spatially explicit epidemic ABMs at local-authority resolution. Differentiable epidemic ABMs (Chopra et al., 2023) allow gradient-based calibration of transmission parameters against observed case counts, dramatically reducing the time for model fitting compared to [[Monte Carlo Simulation]] grid-search approaches. County-level geo-coded ABMs from the CDC and NIH informed vaccine allocation strategy under heterogeneous coverage scenarios during 2021.
    - **Economics and finance**: Agent-based economics challenges the rational expectations, representative-agent assumptions of mainstream macroeconomics (DSGE models) by explicitly modelling heterogeneous firms, households, banks, and regulators with bounded rationality and adaptive strategies. The Santa Fe artificial stock market (LeBaron, Arthur, Palmer, 1999) showed that heterogeneous trader agents — using technical and fundamental analysis, with classifier-system strategy evolution — produce realistic return distributions exhibiting fat tails and volatility clustering, which homogeneous rational-agent models cannot replicate without additional shocks. Eurace (Dawid et al.) and the Banca d'Italia's ABM (Dosi, Fagiolo, Roventini) demonstrate that agent-based macroeconomic models reproduce business cycle statistics, financial fragility, and the effects of fiscal policy more faithfully than calibrated DSGE models. The Bank of England maintains an internal ABM for systemic risk analysis; the OECD has published agent-based macro models as complements to standard econometric tools. [[Supply Chain Optimisation]] ABMs simulate demand variability propagation (the Bullwhip effect), supplier disruption cascades, and inventory rebalancing across multi-tier supply networks. Industry deployments: DHL's Resilience360 uses ABM stress-testing of air-freight networks against weather and geopolitical scenarios, revealing 20 per cent capacity gaps under modelled disruptions; Procter and Gamble's ABM deployment reduced inventory by 25 per cent through demand-volatility simulation; ocean carriers run 5,000 ABM routing scenarios daily integrating weather and geopolitical risk data, achieving 92 per cent delay prediction accuracy. Agentic supply chain [[Digital Twin]] (A-SCDT) architectures, documented in Taylor and Francis (2026), hybridise ABM with AI optimisation for real-time decision support.
    - **Ecology and conservation**: Individual-based ecology (Grimm and Railsback, 2005) models populations as collections of individual organisms with heterogeneous physiology, behaviour, and spatial location — a natural application of ABM to ecological dynamics. Key applications include: predator-prey dynamics at the individual level, where stochastic encounter rates and individual energy budgets produce more realistic population fluctuations than Lotka-Volterra ODEs; species competition and coexistence (competitive exclusion in heterogeneous landscapes); habitat fragmentation and corridor design for conservation planning (dispersal-limited species ABMs inform reserve connectivity policy); fire-climate-vegetation coupled ABMs for ecosystem management; and fisheries stock assessment ABMs that model individual fish growth, mortality, and harvesting to support Total Allowable Catch (TAC) policy under uncertain recruitment. [[Swarm Intelligence]] models (Boids, ant-colony foraging, honeybee decision-making) investigate collective animal behaviour. Bird-flock, fish-school, and insect-swarm ABMs have been validated against high-resolution tracking data from GPS and stereophotogrammetry systems, confirming that three-rule models account for most variance in group shape and dynamics.
    - **Urban planning and mobility**: [[Crowd Simulation]] ABMs model pedestrian flows in complex built environments under normal and emergency conditions. The social force model (Helbing and Molnar, 1995) treats pedestrian movement as the sum of a desired velocity vector, repulsive forces from nearby pedestrians and walls, and attractive forces from goals — producing realistic congestion, arching at bottlenecks, and lane formation in bidirectional flows. Applications include: station, airport, and stadium design optimisation for throughput and safety compliance; train evacuation planning (cross-referencing against EU Directive 2008/164/EC requirements); emergency evacuation scenario planning for high-rise buildings and concerts. [[Urban Computing]] ABMs simulate city-scale transport demand (MATSIM, a Java-based open-source transport simulation with millions of agents, used for Zurich's city transport plan), land-use change (UrbanSim), housing market dynamics, and energy demand response in smart grids. Nick Malleson's group at the University of Leeds develops real-time pedestrian dynamics ABMs fused with anonymised CCTV tracking data and mobile phone GPS traces under the Alan Turing Institute's Urban Analytics programme. GATSim (arXiv:2506.23306, 2025/2026) demonstrates city-scale urban mobility simulation using LLM-driven generative agents as drivers, capturing nuanced origin-destination choice and route adaptation beyond what rule-based models achieve.
    - **Social simulation and opinion dynamics**: [[Social Simulation]] ABMs study how macro-level social phenomena — segregation, norm emergence, opinion polarisation, rumour spread, cultural homogenisation — arise from micro-level individual decisions and social influence. Foundational models include: Schelling segregation (mild preference for similar neighbours → strong segregation); Axelrod culture model (local cultural influence → convergence with global diversity); Deffuant-Weisbuch bounded-confidence opinion dynamics (agents adopt averaged opinions only with those within an opinion-space threshold ε → fragmentation into opinion clusters below a critical ε); Hegselmann-Krause opinion dynamics (synchronous variant of bounded confidence); Hegselmann et al. truth-seeking models (agents influenced by truth proximity as well as social proximity); and voter model (agents copy a random neighbour's opinion → extinction of minority opinion in finite populations). Modern generative ABMs replace bounded-confidence rules with [[Large Language Models]] enabling context-sensitive, linguistically mediated opinion updating that captures rhetorical persuasion effects absent from numerical models. The 2025/2026 application of LLM agents to social simulation has produced models of political polarisation, misinformation spread, and crisis communication that incorporate linguistic content of messages rather than abstracting them to scalar opinion values.
    - **Defence and security intelligence**: ABMs are used in wargaming, conflict escalation modelling, insurgency dynamics, and logistics optimisation under uncertainty. The DARPA-sponsored Repast HPC (Argonne National Laboratory) supports billion-agent social simulations for defence scenario analysis. SOCOM (US Special Operations Command) uses ABMs for population-centric operations planning. UK DSTL (Defence Science and Technology Laboratory) maintains ABMs for cyber-attack propagation analysis and critical infrastructure cascade failure. Supply chain resilience ABMs inform national security stockpile planning and critical mineral supply risk assessment.
    - **Digital Twins and cyber-physical systems**: ABM engines form the behavioural layer of operational [[Digital Twin]] architectures — the component responsible for simulating the actions of individual entities (vehicles, workers, customers, market participants) as distinct from the physics layer (fluid dynamics, structural mechanics) or the data layer (sensor fusion, state estimation). Real-time integration: live sensor data (IoT devices, GPS, financial feeds) continuously updates agent state, making the [[Digital Twin]] a live running ABM calibrated to the current system state. Smart-city twins (pedestrian flow, traffic, energy demand), factory floor twins (worker-robot coordination, machine scheduling), financial market twins (order-book microstructure, liquidity dynamics), and supply chain twins (inventory, logistics, demand forecasting) are operational or in advanced deployment as of 2026. The agentic [[Digital Twin]] paradigm (Taylor and Francis, 2026) adds AI decision-making to ABM agent layers, enabling autonomous optimisation and anomaly response within the twin.
    - **Generative AI simulation (2023-2026)**: The integration of [[Large Language Models]] as agent decision engines represents the field's most significant methodological shift since the 1990s. Park et al. (2023) demonstrated that LLM agents in a simulated social environment (Smallville, a 25-agent town simulation) spontaneously exhibit planning (booking time in a calendar), reflection (revising beliefs based on experience summaries), memory retrieval (recalling relevant past events when deciding), and emergent social coordination (a spontaneous party), without explicit programming of any of these behaviours — all arising from the agent's LLM reasoning over its context. Park et al. (2024) extended this to simulate 1,052-person survey cohort responses to political attitude questions, demonstrating LLM ABMs as synthetic data generators for social science. AgentScope (Alibaba, 2024) and OASIS (2024) scale generative ABMs to thousands of concurrent LLM agents for [[Social Simulation]] at platform scale. AgentSociety (2025) studies emergent social dynamics in large LLM-agent populations. GATSim (2025/2026) applies generative agents to city-scale mobility simulation. The key open challenge — identified as "the central challenge" in a 2025 Springer Nature AI Review paper — is validation: LLM agents' behaviour reflects their training corpus (which is predominantly US/English-language internet text), introducing cultural and linguistic biases into simulation populations; their stochastic outputs reduce replicability; and their black-box reasoning prevents formal behavioural verification.

  - ## Academic Context
    - ABM emerged from the intersection of [[Artificial Life]], complex systems physics, statistical mechanics, and [[Computational Social Science]] in the late 1980s and 1990s. Key theoretical foundations include:
      - **Self-organised criticality** (Bak, Tang, Wiesenfeld, 1987): systems of locally interacting agents driven at a constant rate can spontaneously organise to a critical state characterised by power-law distributions of event sizes (avalanche sizes, earthquake magnitudes, financial crash magnitudes), providing a universal mechanism for the prevalence of scale-free distributions in nature and society. The Bak-Tang-Wiesenfeld sandpile model is the canonical ABM formalisation.
      - **Evolution of cooperation** (Axelrod, 1984): a computer tournament of the iterated Prisoner's Dilemma showed that Tit-for-Tat — a simple, transparent reciprocity rule — defeats more sophisticated strategies. This demonstrated that cooperation can evolve among self-interested agents without central authority, a foundational result for understanding how [[Collective Intelligence]] and social norms emerge from micro-level [[Reinforcement Learning]] and reciprocity.
      - **Culture dissemination** (Axelrod, 1997): ABM of social influence showed that local cultural homogenisation coexists with global cultural diversity — a result with direct relevance to [[Social Simulation]] of opinion polarisation and [[Innovation Diffusion]] in social networks under [[Network Science]] structure.
      - **Sugarscape** (Epstein and Axtell, 1996): agents on a two-resource landscape exhibit power-law wealth distributions (reproducing Pareto's law), cultural group formation, and disease dynamics — the first comprehensive demonstration that social macro-phenomena can be "grown" computationally from micro-rules, establishing ABM as a legitimate social science methodology.
      - **Boids** (Reynolds, 1987): three simple local rules (separation from immediate neighbours, alignment with average local heading, cohesion toward average local position) generate globally realistic flocking, schooling, and herding dynamics without any global coordination mechanism — a foundational [[Swarm Intelligence]] result that launched [[Artificial Life]] research into collective behaviour.
      - **Complex adaptive systems** (Holland, 1992; 1995): formal characterisation of systems in which heterogeneous, adaptive agents produce emergent global structure through local interaction; Holland's schema theorem and classifier systems provided early formal models of agent adaptation via [[Genetic Algorithm]] mechanisms.
    - The Journal of Artificial Societies and Social Simulation (JASSS, University of Surrey, founded 1998) is the primary peer-reviewed venue for [[Social Simulation]] ABMs, with over 750 papers published across 27 years. The ODD (Overview, Design concepts, Details) protocol (Grimm et al., 2006; Grimm et al., 2020) provides the community's standard model description format, explicitly covering purpose, entities/state variables, process overview, design concepts (emergence, adaptation, objectives, learning, sensing, interaction, stochasticity, collectives, observation), and implementation details — addressing endemic reproducibility problems that arise when model descriptions in journal papers are insufficient for independent replication. CoMSES/OpenABM (Arizona State University) maintains a curated repository of peer-reviewed ABM code and documentation applying FAIR data principles (Findable, Accessible, Interoperable, Reusable) to simulation models, enabling meta-analysis and replication studies. The SWARM toolkit (Santa Fe Institute), NetLogo (Northwestern), Repast (Argonne National Laboratory), Mesa (Python community), and FLAME GPU (University of Sheffield) represent successive generations of ABM infrastructure with increasing performance, accessibility, and scale.
    - Major theoretical contributions since 2010 include: [[Machine Learning]] surrogate models for fast ABM meta-calibration (Lamperti et al., 2018, using neural networks trained on simulation runs to emulate ABM output for rapid parameter-space exploration); approximate Bayesian computation (ABC) methods for likelihood-free inference of ABM parameters from observational data; differentiable ABM for gradient-based parameter inference (ABMax, JAX, 2025); formal verification of emergent properties using model checking (applying temporal logic specification to agent rule sets and verifying safety properties); [[Network Science]] embedded ABMs where agent interaction topology is itself a dynamical variable (adaptive networks); and generative ABMs using [[Large Language Models]] as behavioural engines (Park et al., Stanford, 2023; Google DeepMind Concordia, 2024). The Deffuant-Weisbuch bounded-confidence opinion dynamics model (2000) and the Hegselmann-Krause model became reference benchmarks for [[Social Simulation]] [[Emergence]]; Helbing and Molnar's social force model (1995) became the standard for [[Crowd Simulation]] pedestrian dynamics.

  - ## Current Landscape (2026)
    - ### Software Ecosystem
      - **NetLogo** (Northwestern University, Uri Wilensky, 1999-present):
        - Dominant academic and educational ABM platform, exceeding 400,000 registered users globally
        - Accessible Logo-derived agent programming syntax with integrated BehaviorSpace for parameter sweeps and [[Sensitivity Analysis]]
        - NetLogo 7 (in development) targets improved performance and browser-deployable simulation
        - Limitations: single-threaded execution, slow for large-scale models (benchmark ~10 million agent steps/second)
      - **Mesa** (Python, Mesa 3.0 released 2025):
        - Dominant choice in data science communities: integrates with NumPy, Pandas, NetworkX, Matplotlib, and Jupyter
        - Mesa 3.0: improved batch-run APIs, pluggable agent activation schedulers, module-based visualisation
        - Performance: approximately 10^6 agent steps/second (single-threaded Python); suitable for models up to ~100,000 agents
      - **Agents.jl** (Julia):
        - Highest CPU throughput among interpreted-language frameworks: approximately 10^8 agent steps/second multi-threaded
        - Approximately 18x faster than FLAME GPU 2 for the Schelling benchmark on CPU (published 2024 benchmarks)
        - Julia's just-in-time compilation gives near-C performance with Python-like readability
      - **FLAME GPU 2** (University of Sheffield, Paul Richmond):
        - World's highest-performance GPU-accelerated ABM platform
        - Approximately 1,000x faster than NetLogo and approximately 18x faster than Agents.jl for Boids and Schelling benchmarks
        - Enables billion-agent simulations on a single NVIDIA A100 GPU
        - Endorsed by NVIDIA; target applications include large-scale [[Epidemiological Modelling]], [[Crowd Simulation]], and [[Digital Twin]] ABM layers requiring real-time execution
      - **AnyLogic** (commercial):
        - Dominant industrial and commercial platform
        - Uniquely integrates ABM, [[System Dynamics]], and [[Discrete Event Simulation]] in a single hybrid environment
        - Widely used by logistics firms, defence contractors, healthcare systems, and supply chain consultancies
        - Contains built-in GIS integration, network libraries, and cloud deployment for [[Digital Twin]] scenarios
      - **ABMax** (JAX-based, 2025):
        - Differentiable ABM framework enabling gradient-based parameter inference via automatic differentiation
        - GPU-accelerated for large-scale differentiable simulation
        - Enables variational inference and gradient-descent calibration — a major methodological advance
      - **krABMaga** (Rust-based, 2024):
        - Demonstrated superior multi-core CPU scalability over Mesa, Agents.jl, NetLogo, and MASON in published benchmarks
        - Rust's memory safety and zero-cost abstractions enable high-performance parallel ABM without garbage-collection pauses
      - **AMBER** (Python columnar architecture, 2025):
        - Column-oriented data layout for ABM agent state: cache-efficient large-scale execution in Python
        - Bridges the performance gap between Mesa and compiled ABM frameworks for medium-scale models
    - ### Generative ABM (2024-2026)
      - Google DeepMind **Concordia** (2024): structured library for LLM-driven [[Social Simulation]] with experimental design primitives and multi-model support
      - **AgentSociety** (2025): large-scale societal simulation with LLM-driven agent populations; studies emergent social dynamics
      - **OASIS**: social-media-scale simulation with millions of LLM-driven user agents modelling information diffusion and opinion formation
      - **GATSim** (2025/2026, arXiv:2506.23306): city-scale urban mobility simulation using LLM generative agents as vehicle drivers and pedestrians
      - **Sentipolis** (2025): emotion-aware LLM agents for crisis communication and political simulation
      - **VirtLab** (2025): large-scale team simulation for organisational science using LLM-driven agents
      - Critical challenge: Springer Nature AI Review (2025) identifies validation as the central unsolved problem — LLM agents' cultural biases, stochastic outputs, and black-box reasoning compound pre-existing ABM calibration difficulty
    - ### Industry Adoption and Deployment
      - [[Supply Chain Optimisation]] and logistics:
        - Ocean carriers: 5,000 ABM routing scenarios daily integrating weather and geopolitical data — 92 per cent delay prediction accuracy
        - DHL Resilience360: ABM stress-testing of air-freight networks — revealed 20 per cent capacity gaps under modelled disruptions
        - Procter and Gamble: ABM deployment reduced inventory by 25 per cent through demand-volatility simulation
        - Hybrid ABM-AI models: 40 per cent improvement in demand forecasting accuracy, 30 per cent faster disruption response (Debales AI, 2025)
      - [[Digital Twin]] deployment:
        - ABM-based agentic [[Digital Twin]] (A-SCDT) architectures documented in Taylor and Francis (2026)
        - Smart city twins: urban mobility, energy demand, emergency response using FLAME GPU-class ABMs
        - Factory floor twins: worker-robot coordination, machine scheduling, quality control using AnyLogic hybrid simulations
      - Healthcare planning:
        - NHS-linked ABMs for hospital capacity, patient flow, and pandemic scenario planning
        - Epiabm (Cambridge) used for UKHSA pandemic preparedness planning infrastructure

  - ## UK Context
    - ### Imperial College London
      - CovidSim ABM (MRC Centre for Global Infectious Disease Analysis, Neil Ferguson's group) directly informed the UK March 2020 lockdown decision
        - Report 9 (16 March 2020): projected approximately 510,000 UK deaths under unmitigated SARS-CoV-2 spread
        - Showed social distancing combined with household isolation reduces peak NHS healthcare demand by over 60 per cent
        - The most consequential ABM deployment in UK policy history
      - Department of Computing maintains research in autonomous agents, [[Multi-Agent Systems]], and agentic AI
      - London AI Technology Centre (Lenovo partnership, 2025) at White City Deep Tech Campus focuses on foundation models and intelligent systems
      - Thomson Reuters-Imperial Frontier AI Lab (December 2025) covers agent-based and multi-agent reasoning applications
    - ### University of Edinburgh
      - Active in [[Multi-Agent Systems]] and agent-based [[Social Simulation]]
      - Co-led the UK Multi-Agent Systems Symposium 2025 with the Alan Turing Institute and King's College London
      - Lenovo AI Technology Centre opening in Edinburgh in 2025/2026 — expanding regional AI research infrastructure
      - Research spans formal agent theory, multi-agent reinforcement learning, and social ABM applications
    - ### University of Leeds
      - Nick Malleson (Professor of Spatial Science, Centre for Spatial Analysis and Policy, School of Geography)
        - Leads the most active UK urban ABM research group
        - Develops real-time pedestrian dynamics ABMs fused with anonymised CCTV tracking data and GPS mobility traces
        - Situated within the Alan Turing Institute's Urban Analytics programme
        - Directly informs [[Policy Simulation]] for UK city management and emergency planning
      - Close to major Northern manufacturing and logistics industries with ABM-based supply chain and operational modelling demand
    - ### University of Sheffield
      - FLAME GPU framework (Paul Richmond and colleagues, Department of Computer Science):
        - Globally distinctive UK contribution to ABM infrastructure
        - World's highest-performance GPU-accelerated ABM platform: approximately 1,000x faster than NetLogo, 18x faster than Agents.jl (Schelling benchmark)
        - Enables billion-agent simulations on a single NVIDIA A100 GPU
        - Endorsed by NVIDIA; used for large-scale [[Epidemiological Modelling]] and [[Crowd Simulation]] applications
        - Directly applicable to real-time [[Digital Twin]] ABM layers
      - Natural Robotics Lab (Roderich Gross): decentralised [[Swarm Intelligence]] and supervisory control theory for robot swarms
      - Sheffield is a centre of advanced manufacturing (AMRC) providing industrial ABM applications in predictive maintenance and production scheduling
    - ### University of Manchester
      - PhD in Multi-Scale Modelling (School of Engineering, 2026 entry): addresses ABM across biological, engineering, and social domains
      - Strong interdisciplinary complex systems and multi-scale modelling research spanning engineering and social science
      - Centre for Policy Modelling (CPM, Manchester Metropolitan University, founded by Nigel Gilbert and colleagues): one of Europe's earliest dedicated ABM centres for [[Social Simulation]] and policy analysis — a historically significant Northern England contribution to the field
      - Manchester's data science and AI ecosystem (with companies such as Peak AI and ThoughtRiver) applies ABM in commercial operational and forecasting contexts
    - ### University of Nottingham
      - Biomedical ABMs: cancer growth, tumour invasion, and immune response simulation using individual-based modelling
      - Ecological individual-based models for conservation and wildlife management
      - Contributor to the Epiabm epidemic ABM consortium
    - ### University of Cambridge
      - Epiabm project (2022, Engineering Department): open-source Python/C++ [[Epidemiological Modelling]] ABM framework at local-authority spatial resolution
      - Supports national pandemic preparedness ABM infrastructure
    - ### Alan Turing Institute
      - Coordinates national-scale ABM research across urban analytics, public health, and [[Social Simulation]]
      - Connects UK academic ABM groups to government advisory functions (NHS, HM Treasury, Cabinet Office) and defence programmes (DSTL)
      - Urban Analytics programme (Malleson, Leeds; Lovelace, Leeds; Comber, Leeds): national hub for city-scale ABM research

  - ## Future Directions (2026-2030)
    - ### Differentiable and Probabilistic ABMs
      - ABMax (JAX, 2025), grad-ABM, and PyTorch-based differentiable simulation frameworks make agent transition functions differentiable
        - Enables gradient-descent calibration against empirical data — reducing calibration time from weeks of [[Monte Carlo Simulation]] to hours
        - Enables variational inference and MCMC over ABM parameter posteriors using automatic differentiation through the simulation graph
      - Convergence with probabilistic programming languages (Pyro, NumPyro, Stan): ABMs expressible as probabilistic programs admit full Bayesian parameter inference
      - [[Machine Learning]] surrogates (neural network emulators) trained on ABM output distributions enable rapid meta-analysis and multi-objective optimisation
    - ### Generative ABM Validation and Calibration
      - The 2025 Springer AI Review paper ("Validation is the central challenge for generative social simulation") identifies the fundamental tension: LLM agent behaviour is richer and more human-like but harder to validate and calibrate than rule-based agent behaviour
      - Research directions (2026-2030):
        - Behavioural validation benchmarks for LLM agents against known social phenomena (Schelling segregation, Axelrod cultural dynamics)
        - Cross-simulation reproducibility protocols addressing stochastic LLM outputs (using multiple seeds, measuring output distribution rather than single runs)
        - Cultural and linguistic bias auditing for LLM-based agent populations representing non-English or non-Western social contexts
        - Hybrid architectures: LLM agents for high-fidelity rare-event reasoning, rule-based agents for high-volume routine behaviour — reducing computational cost while preserving LLM fidelity where it matters
    - ### Real-time ABMs in Digital Twin Architectures
      - Demand for continuously calibrated [[Digital Twin]] layers in smart cities, factories, and financial markets will drive ABM execution to:
        - Sub-second time steps enabled by FLAME GPU-class hardware
        - Edge inference accelerators for distributed ABM execution near IoT data sources
        - Streaming calibration pipelines (Kalman filter-style ABM state estimation from live sensor data)
      - The convergence of ABM with data assimilation methods from weather forecasting (ensemble Kalman filters, particle filters) is a significant methodological frontier for real-time [[Digital Twin]] ABMs
    - ### ABM for AI Governance and Safety
      - ABMs modelling heterogeneous AI adopter populations, regulatory bodies, and affected communities are being proposed as tools for AI governance scenario planning
      - Integrating ABM with [[Multi-Agent Reinforcement Learning]] enables training robust multi-agent policies under realistic population heterogeneity — ABM provides the population substrate, MARL provides the adaptive optimising agents
      - AI impact forecasting ABMs: modelling labour market disruption, [[Innovation Diffusion]] of AI tools, and distributional welfare effects under alternative adoption trajectories
    - ### Hypergraph and Higher-Order ABMs
      - Beyond pairwise network interactions to hypergraph structures capturing group interactions (three or more agents simultaneously interacting):
        - Group opinion formation in meetings and committees
        - Multi-party biological signalling (quorum sensing, biochemical reaction pathways)
        - Higher-order contagion (infection requires simultaneous exposure from multiple infectious contacts)
      - Hypergraph-embedded ABMs extend [[Network Science]] foundations to richer interaction topologies
    - ### Federated and Privacy-Preserving ABMs
      - Running distributed ABM sub-models on sensitive data silos (hospital records, financial transaction logs, mobile location data) without centralising data
      - Uses federated learning protocols (FedAvg, FedProx) to fit agent parameters across data holders while preserving privacy
      - Relevant to NHS data partnerships (UK: NHS DigiTrials infrastructure), financial systemic risk ABMs using bank-level proprietary data, and urban mobility ABMs using anonymised GPS data under GDPR
      - Links ABM calibration infrastructure to federated learning architectures from [[Machine Learning]]

  - ## Standards and Governance
    - ### ODD Protocol
      - The ODD (Overview, Design concepts, Details) protocol (Grimm et al., 2006; revised Grimm et al., 2020) is the community de facto standard for describing and publishing ABMs
        - Addresses endemic reproducibility failure: published ABM descriptions frequently insufficient for independent replication
        - Protocol sections: Purpose and patterns, Entities/state variables/scales, Process overview and scheduling, Design concepts (emergence, adaptation, prediction, sensing, interaction, stochasticity, collectives, observation), Initialisation, Input data, Submodels
        - Analogy to controlled methods section in experimental science — provides the information needed to replicate and extend a model without author assistance
        - Updated 2020 version adds structural realism documentation and supports grid/network/continuous-space environments
      - CoMSES/OpenABM (Arizona State University): curated repository of peer-reviewed ABM code and documentation applying FAIR data principles (Findable, Accessible, Interoperable, Reusable) to simulation models
        - Enables meta-analysis, replication studies, and model comparison across the field
    - ### Community Standards and Journals
      - JASSS (Journal of Artificial Societies and Social Simulation, University of Surrey, 1998): primary peer-reviewed venue for [[Social Simulation]] ABMs
        - Over 750 published papers across 27 years; open-access; indexed in SSCI
        - Requires ODD protocol descriptions for all published models
      - AAMAS (International Conference on Autonomous Agents and Multi-Agent Systems): premier venue for [[Multi-Agent Systems]] and agent-based AI, with strong overlap with ABM methodology
      - ESSA (European Social Simulation Association): annual conference and membership organisation for European [[Social Simulation]] ABM community
      - Winter Simulation Conference (WSC): major venue for [[Discrete Event Simulation]] and hybrid ABM-DES industrial applications
    - ### IEEE and ISO Engagement
      - IEEE working groups on agent systems (SC36/WG2) address agent communication and interoperability standards relevant to [[Multi-Agent Systems]] and ABM frameworks
      - No ISO standard specifically for ABMs exists as of 2026, but FAIR data principles and PRISMA reporting guidelines (systematic reviews) are increasingly referenced in ABM literature
      - EPSRC (UK Engineering and Physical Sciences Research Council) and ESRC (UK Economic and Social Research Council) fund ABM research jointly through the Complexity Science programme and the Urban Analytics programme at the Alan Turing Institute
      - The UK Government Office for Science "Future of Cities" Foresight programme (2016) and the Cabinet Office's pandemic preparedness reviews (2023) explicitly reference ABM-based analysis as an evidence standard for complex system risk assessment
    - ### Reproducibility and Verification
      - The "reproducibility crisis" in ABM mirrors broader issues in computational science: many published ABMs cannot be replicated from paper descriptions alone
      - Community responses: mandatory ODD protocol in JASSS; required code submission to CoMSES/OpenABM; automated ODD compliance checking tools
      - Replication studies: Wilensky and Rand (2007) documented extensive author correspondence needed to replicate published ABMs — motivating the ODD protocol revision
      - Version control and containerisation (Git, Docker) are increasingly standard for ABM code, enabling exact computational environment replication
      - NetLogo models in the community models library are peer-reviewed for educational reproducibility; Mesa's GitHub repository (1,000+ models) provides reference implementations

  - ## Contrast with Related Paradigms
    - ### Agent-Based Modelling vs [[System Dynamics]]
      - [[System Dynamics]] (Forrester, 1961) models aggregate stocks (quantities) and flows (rates of change) using differential equations, capturing feedback structure without individual-level detail
        - Advantages: fast execution, analytical tractability, well-suited to policy analysis of feedback-dominated systems (supply chains, population dynamics, resource depletion)
        - Disadvantages: cannot represent individual heterogeneity, spatial structure, or path-dependent individual histories; assumes continuous, homogeneous populations
      - ABM advantages over [[System Dynamics]]: individual heterogeneity in attributes and strategies; spatial and network structure of interaction; stochastic variability across individuals; path-dependent outcomes; emergent phenomena not pre-specified in model equations
      - ABM disadvantages vs [[System Dynamics]]: computationally expensive; analytical intractability; calibration and validation difficulty; no closed-form solution
      - Practical synthesis: AnyLogic combines both in hybrid models — [[System Dynamics]] for aggregate aggregate flows, ABM for key heterogeneous sub-populations (e.g., SEIR [[System Dynamics]] with ABM healthcare workers in a pandemic model)
    - ### Agent-Based Modelling vs [[Discrete Event Simulation]]
      - [[Discrete Event Simulation]] (DES) models system state changing only at discrete event times; focuses on processes (queues, resources, activities) rather than autonomous agents with internal state and adaptive strategy
        - DES is natural for operations research applications: call centres, manufacturing lines, airport check-in, hospital patient pathways
        - DES agents are passive entities flowing through a predefined process network; ABM agents are autonomous entities with their own decision-making
      - ABM extends DES by giving entities autonomy, internal state, and adaptive strategies; DES extends ABM by providing rich process-scheduling semantics and optimisation integration
      - Hybrid DES-ABM: natural for modelling systems with both process-flow (patient pathways through hospital departments, DES) and autonomous decision-making (patient scheduling preferences, discharge negotiations, ABM) layers
    - ### Agent-Based Modelling vs [[Multi-Agent Systems]] (AI Engineering)
      - [[Multi-Agent Systems]] (MAS) in AI engineering focuses on designing, deploying, and coordinating autonomous agents in real-world systems (robotics, LLM orchestration frameworks, distributed AI)
        - MAS goal: functional, deployable system with specified properties (correctness, safety, efficiency)
        - ABM goal: scientific model for studying emergent phenomena in complex systems
      - ABM uses agents as a modelling instrument; MAS uses agents as a deployment instrument
      - Convergence: generative ABMs using [[Large Language Models]] as agent engines are increasingly using the same LLM agent frameworks (LangChain, CrewAI, AutoGen) developed for deployed MAS — blurring the methodological boundary between scientific simulation and AI system deployment
    - ### Agent-Based Modelling vs [[Equation-Based Modelling]]
      - Mathematical models (ODEs, PDEs, difference equations) assume homogeneous, continuous populations obeying globally defined dynamics
        - Advantages: formal mathematical analysis (stability, bifurcations, equilibria), fast computation, well-understood statistics
        - Disadvantages: cannot capture heterogeneity, stochasticity at the individual level, network structure, or spatial locality
      - ABM relaxes homogeneity, continuity, and global specifications at the cost of computational expense and analytical intractability
      - Pattern-oriented modelling (POM, Grimm et al.) uses multiple empirical patterns as constraints to reject inappropriate ABMs — a validation strategy that partially compensates for the absence of formal mathematical analysis in ABMs

  - ## Research & Literature
    - [1] Schelling, T.C. (1971). Dynamic models of segregation. *Journal of Mathematical Sociology*, 1(2), 143-186.
    - [2] Conway, J.H. (1970). The game of life. *Scientific American*, 223(4), 4-10.
    - [3] Reynolds, C.W. (1987). Flocks, herds and schools: A distributed behavioral model. *SIGGRAPH Computer Graphics*, 21(4), 25-34.
    - [4] Axelrod, R. (1984). *The Evolution of Cooperation*. Basic Books, New York.
    - [5] Axelrod, R. (1997). The dissemination of culture: A model with local convergence and global polarisation. *Journal of Conflict Resolution*, 41(2), 203-226.
    - [6] Epstein, J.M. and Axtell, R.L. (1996). *Growing Artificial Societies: Social Science from the Bottom Up*. MIT Press, Cambridge MA.
    - [7] Epstein, J.M. (1999). Agent-based computational models and generative social science. *Complexity*, 4(5), 41-60.
    - [8] Wilensky, U. (1999). NetLogo. Center for Connected Learning and Computer-Based Modeling, Northwestern University. http://ccl.northwestern.edu/netlogo/
    - [9] Grimm, V. et al. (2006). A standard protocol for describing individual-based and agent-based models. *Ecological Modelling*, 198(1-2), 115-126.
    - [10] Grimm, V. et al. (2020). The ODD protocol for describing agent-based and other simulation models: A second update to improve clarity, replication, and structural realism. *JASSS*, 23(2), 7.
    - [11] Tesfatsion, L. and Judd, K.L. (eds) (2006). *Handbook of Computational Economics, Vol. 2: Agent-Based Computational Economics*. Elsevier, Amsterdam.
    - [12] Bonabeau, E. (2002). Agent-based modeling: Methods and techniques for simulating human systems. *PNAS*, 99(suppl 3), 7280-7287.
    - [13] Macal, C.M. and North, M.J. (2010). Tutorial on agent-based modelling and simulation. *Journal of Simulation*, 4(3), 151-162.
    - [14] Ferguson, N.M. et al. (2020). Impact of non-pharmaceutical interventions (NPIs) to reduce COVID-19 mortality and healthcare demand. Imperial College COVID-19 Response Team Report 9.
    - [15] Bak, P., Tang, C. and Wiesenfeld, K. (1987). Self-organized criticality: An explanation of the 1/f noise. *Physical Review Letters*, 59(4), 381.
    - [16] Wilensky, U. and Rand, W. (2015). *An Introduction to Agent-Based Modeling: Modeling Natural, Social, and Engineered Complex Systems with NetLogo*. MIT Press.
    - [17] Lamperti, F., Roventini, A. and Sani, A. (2018). Agent-based model calibration using machine learning surrogates. *Journal of Economic Dynamics and Control*, 90, 366-389.
    - [18] Richmond, P. et al. (2010). High performance cellular level agent-based simulation with FLAME for the GPU. *Briefings in Bioinformatics*, 11(3), 334-347.
    - [19] Park, J.S. et al. (2023). Generative agents: Interactive simulacra of human behavior. *UIST 2023*. Stanford University.
    - [20] Park, J.S. et al. (2024). AI agents that simulate human responses in social science surveys. *Nature Human Behaviour* (preprint).
    - [21] Stonedahl, F. and Wilensky, U. (2010). Finding forms of flocking: Evolutionary search in ABM environments. *GECCO 2010 Proceedings*.
    - [22] Helbing, D. and Molnar, P. (1995). Social force model for pedestrian dynamics. *Physical Review E*, 51(5), 4282.
    - [23] Tesfatsion, L. (2002). Agent-based computational economics: Growing economies from the bottom up. *Artificial Life*, 8(1), 55-82.
    - [24] Chopra, A. et al. (2023). Differentiable agent-based epidemiology. *AAMAS 2023*.
    - [25] Abar, S. et al. (2017). Agent based modelling and simulation tools: A review of the state-of-art software. *Computer Science Review*, 24, 13-33.
    - [26] Castellano, C., Fortunato, S. and Loreto, V. (2009). Statistical physics of social dynamics. *Reviews of Modern Physics*, 81(2), 591.
    - [27] Validation is the central challenge for generative social simulation (2025). *Artificial Intelligence Review*, Springer Nature. DOI:10.1007/s10462-025-11412-6.
    - [28] LLMs and Generative Agent-Based Models for Complex Systems Research (2024). *Humanities and Social Sciences Communications*, Nature. DOI:10.1038/s41599-024-03611-3.

- ### Provenance
  - sources:: Ferguson et al. (2020) Imperial Report 9; Grimm et al. (2006, 2020) ODD Protocol; Epstein and Axtell (1996) Growing Artificial Societies; Wilensky (1999) NetLogo; Park et al. (2023) Generative Agents; Richmond et al. (2010) FLAME GPU; Nature Humanities and Social Sciences Communications (2024); Springer AI Review (2025); Debales AI (2025) Digital Twin Supply Chain; JASSS; complexityexplorer.org
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
