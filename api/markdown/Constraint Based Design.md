public:: true
alias:: Constraint-Based Design

# Constraint Based Design
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a89d3413e153d633c81eee335dc4038201cd88b0f6e91a43bdc6c116b8bfd717",
  "@type": "Page",
  "vc:slug": "constraint-based-design",
  "title": "Constraint Based Design",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:owl:class:ai-system-component", "vc:label": "AI System Component"},
    {"@id": "urn:visionflow:owl:class:autonomous-robot", "vc:label": "Autonomous Robot"},
    {"@id": "urn:visionflow:owl:class:digital-twin", "vc:label": "Digital Twin"},
    {"@id": "urn:visionflow:linked:generative-design-tool", "vc:label": "Generative Design Tool"},
    {"@id": "urn:visionflow:linked:parametric-modeling", "vc:label": "Parametric Modeling"},
    {"@id": "urn:visionflow:linked:topology-optimization", "vc:label": "Topology Optimization"},
    {"@id": "urn:visionflow:linked:constraint-satisfaction", "vc:label": "Constraint Satisfaction"},
    {"@id": "urn:visionflow:linked:optimization-algorithm", "vc:label": "Optimization Algorithm"},
    {"@id": "urn:visionflow:linked:formal-verification", "vc:label": "Formal Verification"},
    {"@id": "urn:visionflow:linked:cyber-physical-systems", "vc:label": "Cyber Physical Systems"},
    {"@id": "urn:visionflow:linked:simulation", "vc:label": "Simulation"},
    {"@id": "urn:visionflow:linked:robotics", "vc:label": "Robotics"},
    {"@id": "urn:visionflow:linked:motion-planning", "vc:label": "Motion Planning"},
    {"@id": "urn:visionflow:linked:sat-solver", "vc:label": "SAT Solver"},
    {"@id": "urn:visionflow:linked:knowledge-representation", "vc:label": "Knowledge Representation"},
    {"@id": "urn:visionflow:linked:symbolic-ai", "vc:label": "Symbolic AI"},
    {"@id": "urn:visionflow:linked:product-design", "vc:label": "Product Design"},
    {"@id": "urn:visionflow:linked:additive-manufacturing", "vc:label": "Additive Manufacturing"},
    {"@id": "urn:visionflow:linked:finite-element-analysis", "vc:label": "Finite Element Analysis"},
    {"@id": "urn:visionflow:linked:computer-aided-design", "vc:label": "Computer Aided Design"},
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning"},
    {"@id": "urn:visionflow:linked:multi-objective-optimization", "vc:label": "Multi-Objective Optimization"},
    {"@id": "urn:visionflow:linked:evolutionary-algorithm", "vc:label": "Evolutionary Algorithm"},
    {"@id": "urn:visionflow:linked:constraint-propagation", "vc:label": "Constraint Propagation"},
    {"@id": "urn:visionflow:linked:constraint-solver", "vc:label": "Constraint Solver"},
    {"@id": "urn:visionflow:linked:model-based-systems-engineering", "vc:label": "Model Based Systems Engineering"},
    {"@id": "urn:visionflow:linked:safety-engineering", "vc:label": "Safety Engineering"},
    {"@id": "urn:visionflow:linked:configuration-management", "vc:label": "Configuration Management"},
    {"@id": "urn:visionflow:linked:functional-requirements", "vc:label": "Functional Requirements"},
    {"@id": "urn:visionflow:linked:geometric-constraint", "vc:label": "Geometric Constraint"},
    {"@id": "urn:visionflow:linked:integer-programming", "vc:label": "Integer Programming"},
    {"@id": "urn:visionflow:linked:linear-programming", "vc:label": "Linear Programming"},
    {"@id": "urn:visionflow:linked:gradient-descent", "vc:label": "Gradient Descent"},
    {"@id": "urn:visionflow:linked:design-space-exploration", "vc:label": "Design Space Exploration"},
    {"@id": "urn:visionflow:linked:requirements-engineering", "vc:label": "Requirements Engineering"},
    {"@id": "urn:visionflow:linked:systems-engineering", "vc:label": "Systems Engineering"},
    {"@id": "urn:visionflow:linked:combinatorial-optimisation", "vc:label": "Combinatorial Optimisation"},
    {"@id": "urn:visionflow:linked:simulation-engine", "vc:label": "Simulation Engine"},
    {"@id": "urn:visionflow:linked:co-design", "vc:label": "Co-Design"},
    {"@id": "urn:visionflow:linked:structural-analysis", "vc:label": "Structural Analysis"},
    {"@id": "urn:visionflow:linked:concurrent-engineering", "vc:label": "Concurrent Engineering"},
    {"@id": "urn:visionflow:linked:constraint", "vc:label": "Constraint"},
    {"@id": "urn:visionflow:linked:feasibility", "vc:label": "Feasibility"}
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {"vc:key": "legacy-term-id", "vc:value": "AI-1000"},
    {"vc:key": "preferred-term", "vc:value": "Constraint Based Design"}
  ],
  "prov:wasAttributedTo": {"@id": "did:nostr:jjohare"},
  "prov:generatedAtTime": {"@value": "2026-05-18T07:12:05Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:constraint-based-design",
  "@type": "Class",
  "label": "Constraint Based Design",
  "definition": "Constraint based design is an engineering and AI methodology in which the valid solution space is explicitly defined by a set of constraints — physical laws, geometric relationships, functional requirements, regulatory bounds, manufacturing limits, or performance thresholds — that any acceptable design must simultaneously satisfy. Constraint solvers, optimisation algorithms, and AI planners traverse or prune this feasible region to discover configurations meeting all constraints, optionally optimising an objective within the feasible space. The method is foundational to parametric CAD, generative design tools, topology optimisation, robotics motion planning, and cyber-physical system validation, and is increasingly integrated with machine learning to learn constraint representations from data and guide search with neural heuristics.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"},
    {"@id": "urn:ngm:class:constraint-satisfaction", "label": "Constraint Satisfaction"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:constraint-solver", "label": "Constraint Solver"},
      {"@id": "urn:ngm:class:constraint-propagation", "label": "Constraint Propagation"},
      {"@id": "urn:ngm:class:geometric-constraint", "label": "Geometric Constraint"},
      {"@id": "urn:ngm:class:functional-requirements", "label": "Functional Requirements"},
      {"@id": "urn:ngm:class:feasibility", "label": "Feasibility"},
      {"@id": "urn:ngm:class:design-space-exploration", "label": "Design Space Exploration"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:constraint-satisfaction", "label": "Constraint Satisfaction"},
      {"@id": "urn:ngm:class:optimization-algorithm", "label": "Optimization Algorithm"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"},
      {"@id": "urn:ngm:class:simulation", "label": "Simulation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:generative-design-tool", "label": "Generative Design Tool"},
      {"@id": "urn:ngm:class:formal-verification", "label": "Formal Verification"},
      {"@id": "urn:ngm:class:product-design", "label": "Product Design"},
      {"@id": "urn:ngm:class:topology-optimization", "label": "Topology Optimization"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:co-design", "label": "Co-Design"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:symbolic-ai", "label": "Symbolic AI"},
      {"@id": "urn:ngm:class:systems-engineering", "label": "Systems Engineering"},
      {"@id": "urn:ngm:class:model-based-systems-engineering", "label": "Model Based Systems Engineering"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:parametric-design-methodology-modeling", "label": "Parametric Modeling"},
      {"@id": "urn:ngm:class:sat-solver", "label": "SAT Solver"},
      {"@id": "urn:ngm:class:evolutionary-algorithm", "label": "Evolutionary Algorithm"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"},
      {"@id": "urn:ngm:class:integer-programming", "label": "Integer Programming"},
      {"@id": "urn:ngm:class:linear-programming", "label": "Linear Programming"},
      {"@id": "urn:ngm:class:finite-element-analysis", "label": "Finite Element Analysis"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"},
      {"@id": "urn:ngm:class:cyber-physical-systems", "label": "Cyber Physical Systems"},
      {"@id": "urn:ngm:class:concurrent-engineering", "label": "Concurrent Engineering"},
      {"@id": "urn:ngm:class:combinatorial-optimisation", "label": "Combinatorial Optimisation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:safety-engineering", "label": "Safety Engineering"},
      {"@id": "urn:ngm:class:additive-manufacturing", "label": "Additive Manufacturing"},
      {"@id": "urn:ngm:class:configuration-management", "label": "Configuration Management"},
      {"@id": "urn:ngm:class:requirements-engineering", "label": "Requirements Engineering"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"},
      {"@id": "urn:ngm:class:rule-based-system", "label": "Rule Based System"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:simulation-engine", "label": "Simulation Engine"},
      {"@id": "urn:ngm:class:ai-system-component", "label": "AI System Component"}
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:constraint-based-design:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a89d3413e153d633c81eee335dc4038201cd88b0f6e91a43bdc6c116b8bfd717"
  },
  "vc:resolutions": [
    {"raw": "[[AI System Component]]", "resolved": "urn:visionflow:owl:class:ai-system-component", "kind": "ResolvedLink"},
    {"raw": "[[Autonomous Robot]]", "resolved": "urn:visionflow:owl:class:autonomous-robot", "kind": "ResolvedLink"},
    {"raw": "[[Digital Twin]]", "resolved": "urn:visionflow:owl:class:digital-twin", "kind": "ResolvedLink"},
    {"raw": "[[Generative Design Tool]]", "resolved": "urn:visionflow:linked:generative-design-tool", "kind": "ResolvedLink"},
    {"raw": "[[Parametric Modeling]]", "resolved": "urn:visionflow:linked:parametric-modeling", "kind": "ResolvedLink"},
    {"raw": "[[Topology Optimization]]", "resolved": "urn:visionflow:linked:topology-optimization", "kind": "StubLink"},
    {"raw": "[[Constraint Satisfaction]]", "resolved": "urn:visionflow:linked:constraint-satisfaction", "kind": "ResolvedLink"},
    {"raw": "[[Optimization Algorithm]]", "resolved": "urn:visionflow:linked:optimization-algorithm", "kind": "ResolvedLink"},
    {"raw": "[[Formal Verification]]", "resolved": "urn:visionflow:linked:formal-verification", "kind": "StubLink"},
    {"raw": "[[Cyber Physical Systems]]", "resolved": "urn:visionflow:linked:cyber-physical-systems", "kind": "StubLink"},
    {"raw": "[[Simulation]]", "resolved": "urn:visionflow:linked:simulation", "kind": "ResolvedLink"},
    {"raw": "[[Robotics]]", "resolved": "urn:visionflow:linked:robotics", "kind": "ResolvedLink"},
    {"raw": "[[Motion Planning]]", "resolved": "urn:visionflow:linked:motion-planning", "kind": "StubLink"},
    {"raw": "[[SAT Solver]]", "resolved": "urn:visionflow:linked:sat-solver", "kind": "StubLink"},
    {"raw": "[[Knowledge Representation]]", "resolved": "urn:visionflow:linked:knowledge-representation", "kind": "StubLink"},
    {"raw": "[[Symbolic AI]]", "resolved": "urn:visionflow:linked:symbolic-ai", "kind": "ResolvedLink"},
    {"raw": "[[Product Design]]", "resolved": "urn:visionflow:linked:product-design", "kind": "StubLink"},
    {"raw": "[[Additive Manufacturing]]", "resolved": "urn:visionflow:linked:additive-manufacturing", "kind": "StubLink"},
    {"raw": "[[Finite Element Analysis]]", "resolved": "urn:visionflow:linked:finite-element-analysis", "kind": "StubLink"},
    {"raw": "[[Computer Aided Design]]", "resolved": "urn:visionflow:linked:computer-aided-design", "kind": "StubLink"},
    {"raw": "[[Machine Learning]]", "resolved": "urn:visionflow:linked:machine-learning", "kind": "ResolvedLink"},
    {"raw": "[[Neural Network]]", "resolved": "urn:visionflow:linked:neural-network", "kind": "ResolvedLink"},
    {"raw": "[[Reinforcement Learning]]", "resolved": "urn:visionflow:linked:reinforcement-learning", "kind": "StubLink"},
    {"raw": "[[Multi-Objective Optimization]]", "resolved": "urn:visionflow:linked:multi-objective-optimization", "kind": "StubLink"},
    {"raw": "[[Evolutionary Algorithm]]", "resolved": "urn:visionflow:linked:evolutionary-algorithm", "kind": "StubLink"},
    {"raw": "[[Constraint Propagation]]", "resolved": "urn:visionflow:linked:constraint-propagation", "kind": "ResolvedLink"},
    {"raw": "[[Constraint Solver]]", "resolved": "urn:visionflow:linked:constraint-solver", "kind": "ResolvedLink"},
    {"raw": "[[Model Based Systems Engineering]]", "resolved": "urn:visionflow:linked:model-based-systems-engineering", "kind": "StubLink"},
    {"raw": "[[Safety Engineering]]", "resolved": "urn:visionflow:linked:safety-engineering", "kind": "StubLink"},
    {"raw": "[[Configuration Management]]", "resolved": "urn:visionflow:linked:configuration-management", "kind": "ResolvedLink"},
    {"raw": "[[Functional Requirements]]", "resolved": "urn:visionflow:linked:functional-requirements", "kind": "StubLink"},
    {"raw": "[[Geometric Constraint]]", "resolved": "urn:visionflow:linked:geometric-constraint", "kind": "StubLink"},
    {"raw": "[[Integer Programming]]", "resolved": "urn:visionflow:linked:integer-programming", "kind": "StubLink"},
    {"raw": "[[Linear Programming]]", "resolved": "urn:visionflow:linked:linear-programming", "kind": "StubLink"},
    {"raw": "[[Gradient Descent]]", "resolved": "urn:visionflow:linked:gradient-descent", "kind": "StubLink"},
    {"raw": "[[Design Space Exploration]]", "resolved": "urn:visionflow:linked:design-space-exploration", "kind": "StubLink"},
    {"raw": "[[Requirements Engineering]]", "resolved": "urn:visionflow:linked:requirements-engineering", "kind": "StubLink"},
    {"raw": "[[Systems Engineering]]", "resolved": "urn:visionflow:linked:systems-engineering", "kind": "StubLink"},
    {"raw": "[[Combinatorial Optimisation]]", "resolved": "urn:visionflow:linked:combinatorial-optimisation", "kind": "StubLink"},
    {"raw": "[[Simulation Engine]]", "resolved": "urn:visionflow:linked:simulation-engine", "kind": "ResolvedLink"},
    {"raw": "[[Co-Design]]", "resolved": "urn:visionflow:linked:co-design", "kind": "StubLink"},
    {"raw": "[[Structural Analysis]]", "resolved": "urn:visionflow:linked:structural-analysis", "kind": "StubLink"},
    {"raw": "[[Concurrent Engineering]]", "resolved": "urn:visionflow:linked:concurrent-engineering", "kind": "StubLink"},
    {"raw": "[[Constraint]]", "resolved": "urn:visionflow:linked:constraint", "kind": "ResolvedLink"},
    {"raw": "[[Feasibility]]", "resolved": "urn:visionflow:linked:feasibility", "kind": "StubLink"}
  ],
  "prov:wasAttributedTo": {"@id": "did:nostr:enrichment-swarm"},
  "prov:generatedAtTime": {"@value": "2026-06-21T00:00:00Z", "@type": "xsd:dateTime"}
}
```

- ### Definition
  - Constraint based design is an engineering and [[Symbolic AI]] methodology in which the entire valid solution space for a [[Product Design]], robotic trajectory, or [[Cyber Physical Systems]] component is defined by an explicit set of constraints — physical laws, [[Geometric Constraint]]s relating part dimensions, [[Functional Requirements]] specifying performance targets, regulatory safety bounds, manufacturing process limits, and cost thresholds — that any acceptable design must satisfy simultaneously. Rather than specifying a procedure for constructing a design, constraint based design is declarative: the engineer or AI system encodes *what* a valid design must satisfy, and one or more solver backends ([[SAT Solver]], [[Constraint Solver]], [[Gradient Descent]], [[Evolutionary Algorithm]], [[Integer Programming]], or [[Linear Programming]]) discover *which* configurations within the feasible region exist, or which is optimal with respect to an objective. The approach draws on [[Constraint Satisfaction]] theory, where a design problem is formalised as a Constraint Satisfaction Problem (CSP) or Constraint Optimisation Problem (COP) with variables (design parameters), domains (permissible ranges), and constraints (relationships between parameters). It is foundational to [[Parametric Modeling]] in [[Computer Aided Design]] (CAD) tools such as SolidWorks, CATIA, and Autodesk Fusion, to [[Topology Optimization]] in structural engineering and [[Additive Manufacturing]], to [[Motion Planning]] in [[Robotics]] and [[Autonomous Robot]] systems, and to [[Configuration Management]] in product line engineering. Integration with [[Machine Learning]] — through neural heuristics for search guidance, [[Reinforcement Learning]] for constraint acquisition, and [[Neural Network]] surrogates replacing expensive [[Simulation]] calls — is driving a new generation of AI-assisted constraint based design tools that couple the formal guarantees of constraint programming with the pattern-recognition power of deep learning. In [[Digital Twin]] and [[Simulation Engine]] contexts, constraint based design provides the validation backbone that ensures simulated configurations correspond to physically realisable artefacts, and in [[Model Based Systems Engineering]] it offers the formal bridge between requirements and verified designs.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ConstraintBasedDesign
  - owl-role:: Concept | DesignMethodology | AITechnique
  - owl-inferred:: ai:ConstraintSatisfaction, ai:OptimisationFramework, ai:ParametricDesign
  - belongs-to-domain:: [[Systems Engineering]], [[Robotics]], [[Combinatorial Optimisation]]
  - implemented-in-layer:: [[Symbolic AI]], [[Simulation Engine]]

- ### Relationships
  - is-subclass-of:: [[Constraint Satisfaction]], [[AI System Component]]
  - has-part:: [[Constraint Solver]], [[Constraint Propagation]], [[Geometric Constraint]], [[Functional Requirements]], [[Feasibility]], [[Design Space Exploration]]
  - requires:: [[Constraint Satisfaction]], [[Optimization Algorithm]], [[Knowledge Representation]], [[Simulation]]
  - enables:: [[Generative Design Tool]], [[Formal Verification]], [[Product Design]], [[Topology Optimization]], [[Motion Planning]], [[Co-Design]]
  - implements:: [[Symbolic AI]], [[Systems Engineering]], [[Model Based Systems Engineering]]
  - depends-on:: [[Parametric Modeling]], [[Computer Aided Design]], [[Structural Analysis]]
  - supports:: [[Safety Engineering]], [[Additive Manufacturing]], [[Configuration Management]], [[Requirements Engineering]]
  - uses:: [[SAT Solver]], [[Evolutionary Algorithm]], [[Gradient Descent]], [[Integer Programming]], [[Linear Programming]], [[Finite Element Analysis]], [[Neural Network]]
  - contrasts-with:: [[Generative Design Tool]], [[Reinforcement Learning]]
  - related-to:: [[Digital Twin]], [[Autonomous Robot]], [[Cyber Physical Systems]], [[Concurrent Engineering]], [[Combinatorial Optimisation]], [[Machine Learning]]
  - bridges-to:: [[Robotics]], [[Simulation Engine]], [[AI System Component]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:hasPart ai:ConstraintSolver))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:hasPart ai:ConstraintPropagation))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:hasPart ai:GeometricConstraint))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:hasPart ai:FunctionalRequirements))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:hasPart ai:DesignSpaceExploration))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:hasPart ai:Feasibility))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:hasPart ai:ObjectiveFunction))
  ## Dependency Relationships
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:requires ai:ConstraintSatisfaction))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:requires ai:OptimizationAlgorithm))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:requires ai:KnowledgeRepresentation))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:requires ai:Simulation))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:dependsOn ai:ParametricModeling))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:dependsOn ai:ComputerAidedDesign))
  ## Capability Relationships
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:enables ai:GenerativeDesignTool))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:enables ai:FormalVerification))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:enables ai:TopologyOptimization))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:enables ai:MotionPlanning))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:enables ai:CoDesign))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:supports ai:SafetyEngineering))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:supports ai:AdditiveManufacturing))
  ## Implementation Relationships
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:implements ai:SymbolicAI))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:implements ai:SystemsEngineering))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:implements ai:ModelBasedSystemsEngineering))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:uses ai:SATSolver))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:uses ai:EvolutionaryAlgorithm))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:uses ai:FiniteElementAnalysis))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:uses ai:NeuralNetwork))
  ## Reduction Relationships
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:reducesTo ai:ConstraintSatisfactionProblem))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:reducesTo ai:ConstraintOptimisationProblem))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:reducesTo ai:FeasibleRegion))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:contrastsWith ai:ProcedureBasedDesign))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:contrastsWith ai:GenerativeAI))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:contrastsWith ai:RuleBasedSystem))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:relatedTo ai:DigitalTwin))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:relatedTo ai:CyberPhysicalSystems))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:relatedTo ai:ConcurrentEngineering))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:standardizedBy ai:SysMLv2))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:standardizedBy ai:MiniZinc))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:supports ai:MultiObjectiveOptimization))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:uses ai:ReinforcementLearning))
      SubClassOf(ai:ConstraintBasedDesign
        ObjectSomeValuesFrom(ai:uses ai:MultiObjectiveOptimization))

  ## About
    Constraint based design encodes domain knowledge as a formal [[Constraint]] system rather than explicit design recipes or fixed parameterised templates. Its declarative nature cleanly separates problem specification from solver strategy: the designer asserts what is required, and the computational substrate discovers or verifies what is possible. This separation has profound engineering advantages — changing a requirement updates the constraint system, and the solver immediately re-computes the valid design space, without requiring the designer to manually trace through a procedural construction sequence. The approach belongs to the broader family of [[Symbolic AI]] techniques, where explicit logical and mathematical representations of domain knowledge power inference and reasoning, and it has sustained relevance through multiple waves of AI development precisely because its formal guarantees — validity, completeness, and optimality — cannot be replicated by purely statistical or learned approaches alone.

    The intellectual roots of constraint based design lie in two converging traditions. From artificial intelligence came [[Constraint Satisfaction]] (CSP/COP) formalisms, developed in the 1970s through scene-labelling and picture-interpretation work (Waltz, 1975; Mackworth, 1977) and mature by the 1990s with full backtracking search + [[Constraint Propagation]] engines. From engineering and [[Computer Aided Design]] came geometric constraint solving — the problem of placing and sizing 2D or 3D geometric entities (lines, circles, arcs, planes) subject to dimensional and relational constraints (parallelism, tangency, concentricity) — which is the foundational technology of all modern parametric CAD systems. Kramer (1992) and Owen (1991) formalised the algebraic geometry of constraint solving; Hoffmann and colleagues at Purdue published extensively on degrees-of-freedom analysis and under/over-constrained detection through the 1990s and 2000s. The two traditions converged as AI research embraced engineering domains and as CAD tools incorporated AI planning and optimisation capabilities.

    In engineering practice, constraint based design manifests at multiple levels of abstraction: at the geometry level (parametric CAD sketches with dimensional constraints); at the topology level ([[Topology Optimization]] — finding optimal material distributions subject to load, support, and manufacturing constraints); at the system level (MBSE — model-based systems engineering, where SysML requirement diagrams declare constraints over system architecture); and at the behavioural level ([[Motion Planning]] for robots, where kinematic, collision-avoidance, torque, and joint-limit constraints define the valid trajectory space). The transition from physics-simulation-driven topology optimisation toward requirement-to-geometry AI pipelines (identified in 2025 patent analysis) signals that [[Machine Learning]] is beginning to replace traditional FEA-in-the-loop optimisation with learned surrogate models.

    By 2024, the McKinsey Global Survey found that 65% of organisations regularly use generative AI, nearly double the rate of a year earlier. Within engineering, this manifests as AI-assisted [[Generative Design Tool]] platforms — Autodesk Fusion Generative Design, Siemens NX Topology Optimisation, Ansys Discovery, and startup tools like Neural Concept Shape — that use constraint based design as their formal backbone, with deep learning models (graph neural networks for aerodynamic property prediction, convolutional networks for structural load prediction) serving as fast surrogate simulators that dramatically accelerate feasibility evaluation within the constrained design space. The combination of formal constraint satisfaction guarantees with the data-driven pattern recognition of neural networks represents the frontier of AI-assisted engineering design in 2026.

  ## Formal Framework

    Constraint based design can be formalised at increasing levels of mathematical precision:

    **Constraint Satisfaction Problem (CSP) formulation:**
    A design problem is encoded as a triple (X, D, C) where:
    - X = {x₁, x₂, ..., x_n} is a set of design variables (dimensions, material properties, process parameters, component selections)
    - D = {D₁, D₂, ..., D_n} is the set of domains, where D_i is the set of values permissible for x_i (continuous intervals for geometric dimensions, finite sets for material selections, integers for count variables)
    - C = {c₁, c₂, ..., c_m} is the set of constraints, where each c_k ⊆ D_{i₁} × D_{i₂} × ... × D_{i_p} restricts the allowable combinations of a subset of variables

    A valid design is a complete assignment v: X → D (each variable maps to a value in its domain) such that for every constraint c_k, the restriction of v to the variables of c_k lies in c_k. The CSP is to find any such assignment (satisfiability) or to certify that none exists (infeasibility). A constraint optimisation problem (COP) adds an objective function f: D₁ × ... × D_n → ℝ and seeks the valid assignment minimising (or maximising) f.

    **Geometric constraint solving:**
    Parametric CAD geometries are fully determined when the degrees of freedom (DOF) count is zero. For a planar sketch with n geometric entities, the DOF is computed by structural analysis of the constraint graph G = (V, E) where vertices represent entities and edges represent constraints. Each constraint reduces DOF by the number of independent equations it introduces; the sketch is well-constrained when DOF = 0, under-constrained when DOF > 0 (solution family), and over-constrained when DOF < 0 (inconsistency). Solving a well-constrained sketch reduces to solving a system of polynomial equations in the entity parameters; decomposition methods (Owen 1991, Joan-Arinyo 2001) decompose the constraint graph into sequentially solvable clusters, each solved by Newton-Raphson iteration or Groebner basis computation.

    **Topology optimisation (SIMP method):**
    The continuous topology optimisation problem seeks a density field ρ(x) ∈ [0, 1] over the design domain Ω minimising the compliance (= strain energy = work done by applied loads) subject to a volume fraction constraint. The SIMP (Solid Isotropic Material with Penalisation) method parametrises the local stiffness tensor as E(ρ) = ρ^p E₀ with penalisation exponent p ≥ 3, driving intermediate densities toward 0 or 1. The optimisation is solved by gradient-based methods (optimality criteria or method of moving asymptotes) with sensitivities computed via adjoint [[Finite Element Analysis]]. Manufacturing constraints (minimum length scale, overhang angle for [[Additive Manufacturing]], symmetry, casting direction) are added as additional constraints in the COP, implemented as explicit penalty terms or geometric filters.

    **Motion planning as constraint solving:**
    Robot [[Motion Planning]] finds a path q(t): [0, T] → C (configuration space) from q_start to q_goal satisfying: (a) collision avoidance constraints d(q(t), O) > d_min for all obstacles O; (b) joint limit constraints q_min ≤ q(t) ≤ q_max; (c) dynamics constraints |q̈(t)| ≤ a_max; (d) task constraints e(q(t)) = 0 or ≤ 0 (end-effector equality constraints, force constraints). Trajectory optimisation methods (TrajOpt, STOMP, GPMP2) formulate this as a constrained NLP and solve by [[Gradient Descent]] with constraint augmentation; sampling-based methods (RRT, PRM) construct a roadmap of collision-free configurations by random sampling and lazy constraint evaluation.

    **SMT-based formal verification:**
    Cyber-physical system designs are verified against temporal logic (CTL, LTL) specifications using bounded model checking: the transition system is unrolled for k steps and the negation of the specification is encoded as a Satisfiability Modulo Theories ([[SAT Solver]] + arithmetic/floating-point theory) formula. If the SMT solver finds a satisfying assignment, it constitutes a counterexample; if unsatisfiable for all k ≤ K, the design is verified safe up to depth K. Tools including NuSMV, CBMC, and the Z3 SMT solver implement this workflow. SysML v2 (2024) added formal constraint blocks (OCL-like) that can be directly compiled to SMT for [[Formal Verification]] of system architectures.

  ## Constraint Types Taxonomy

    Engineering constraints can be classified along multiple orthogonal axes:

    **By mathematical character:**
    - *Equality constraints* (= 0): fix relationships exactly; reduce DOF by 1 per constraint; e.g., two holes must be concentric, shaft must pass through the centre of a bearing.
    - *Inequality constraints* (≤ or ≥ 0): restrict to a half-space; e.g., minimum wall thickness ≥ 2 mm, maximum Von Mises stress ≤ yield strength / safety factor.
    - *Disjunctive constraints* (OR between alternatives): captured in mixed-integer programming or SAT; e.g., component A or component B must be selected (not both).
    - *Combinatorial constraints* (AllDifferent, Cumulative, Global Cardinality): aggregate constraints over sets of variables handled by global constraint propagators in CP solvers.

    **By engineering domain:**
    - *Structural constraints*: stress, strain, displacement, natural frequency, buckling load, fracture toughness, fatigue life evaluated by [[Finite Element Analysis]] or analytical formulas.
    - *Geometric constraints*: dimensional, relational, positional — the vocabulary of parametric CAD sketchers; solved algebraically or numerically.
    - *Manufacturing process constraints*: overhang angle, minimum feature size, build direction, support material volume for [[Additive Manufacturing]]; draft angles, parting line geometry for injection moulding; tool-access constraints for machining.
    - *Thermal constraints*: temperature limits, heat flux bounds, thermal expansion compatibility; evaluated by thermal FEA or CFD.
    - *Regulatory constraints*: Eurocode structural safety factors; DO-178C software certification levels; ISO 26262 automotive safety integrity levels (ASIL A–D); IEC 61508 functional safety; aerospace MIL-SPECS; medical device ISO 13485. These increasingly enter design tools as computable constraint libraries via [[Model Based Systems Engineering]] toolchains.
    - *Supply-chain and cost constraints*: maximum unit cost, minimum order quantity, available material grades, supplier lead time; often modelled as discrete domain constraints over catalogue items.
    - *Environmental and lifecycle constraints*: mass limits (aerospace weight budgets), energy consumption (EV range), recyclability, embodied carbon (increasingly codified in green procurement regulations).

    **By enforcement mechanism:**
    - *Hard constraints*: must be satisfied by every valid design; violation makes the design infeasible.
    - *Soft constraints*: preferred but may be relaxed; encoded as objectives or penalty terms in COP; used in over-constrained problems where no fully feasible design exists (weighted partial CSP, valued CSP).
    - *Learned constraints*: constraints inferred from data (examples of valid or invalid designs) rather than explicitly specified by engineers; the emerging frontier of constraint acquisition.

  ## Components and Architecture

    **Constraint Types in Design Systems:**
    - **Geometric constraints** — dimensional (length, angle, radius, distance), relational (parallel, perpendicular, tangent, coincident, concentric), and positional (fixed, symmetric, midpoint). These are the building blocks of parametric [[Computer Aided Design]] sketchers and are solved by algebraic constraint solvers using degrees-of-freedom analysis.
    - **Physical constraints** — force equilibrium, stress limits, deflection bounds, thermal gradients, fluid velocity, pressure drop. These are evaluated via [[Finite Element Analysis]] (FEA) or computational fluid dynamics (CFD), either directly or through surrogate [[Neural Network]] models.
    - **Manufacturing constraints** — minimum wall thickness, overhang angle limits for [[Additive Manufacturing]], draft angle requirements for injection moulding, tool-access constraints for CNC machining. Increasingly encoded in [[Topology Optimization]] toolboxes (e.g., Ansys OptiStruct, Altair Inspire, nTopology).
    - **Regulatory and safety constraints** — structural codes (Eurocode, BS EN standards, ASTM), electromagnetic compatibility (EMC) limits, crashworthiness regulations (UN/ECE R94), medical device standards (ISO 13485), aerospace certifications (DO-178C). These are increasingly formalised in [[Model Based Systems Engineering]] tools (Dassault Systèmes CATIA Magic, PTC Windchill).
    - **Cost and supply-chain constraints** — material availability, component lead time, unit cost bounds, energy consumption budgets. These enter multi-objective optimisation as objectives or constraints.
    - **Behavioural and temporal constraints** — for [[Robotics]] and autonomous systems: joint position/velocity/torque limits, collision-avoidance halfspace constraints, temporal ordering constraints (task A before task B), communication timing constraints in [[Cyber Physical Systems]].

    **Solver Backends:**
    - **Algebraic / geometric solvers** — used in parametric CAD; solve overdetermined and underdetermined systems of polynomial equations using degree-of-freedom analysis, Groebner bases, or numerical Newton-Raphson methods. SolidWorks mates solver, CATIA V5 geometric constraint engine.
    - **CP / CSP solvers** — Google OR-Tools CP-SAT (open source, CDCL SAT + CP propagation); IBM ILOG CP Optimizer; Choco; Gecode. Handle discrete and mixed discrete/continuous design variables with global constraints (AllDifferent, Cumulative, Element).
    - **SAT/SMT solvers** — [[SAT Solver]] backends (Z3, Yices2, cvc5) handle Boolean and arithmetic constraints; used for [[Formal Verification]] of [[Cyber Physical Systems]] and hardware designs.
    - **Mathematical programming** — [[Linear Programming]] (LP), [[Integer Programming]] (MILP/MIP), and nonlinear programming (NLP) via CPLEX, Gurobi, or open-source solvers (GLPK, SCIP). Handle continuous and mixed-integer design variables with algebraic constraints.
    - **Evolutionary and meta-heuristic methods** — genetic algorithms (NSGA-II, NSGA-III for [[Multi-Objective Optimization]]), particle swarm optimisation, simulated annealing. Handle non-convex, discontinuous design spaces without gradient information; widely used in [[Topology Optimization]] and multi-physics design.
    - **Gradient-based topology optimisation** — SIMP (Solid Isotropic Material with Penalisation) method; level-set methods; BESO (Bi-directional Evolutionary Structural Optimisation). Driven by [[Gradient Descent]] through adjoint sensitivity analysis of [[Finite Element Analysis]] models.
    - **Neural surrogate + optimisation hybrids** — graph neural networks (GNNs) trained on FEA results replace expensive physics simulations; Bayesian optimisation with neural surrogate models (e.g., Neural Concept Shape, 2024); [[Reinforcement Learning]] agents learning to navigate constrained design spaces.

  ## Use Cases and Major Families

    **Parametric CAD and Mechanical Design:**
    All major parametric CAD systems (SolidWorks, CATIA, PTC Creo, Siemens NX, Autodesk Fusion 360) use constraint based design as their core paradigm. Sketches are fully defined by geometric constraints; assemblies are positioned by mates (constraint relations between faces, axes, and points). In 2025, Autodesk Research published work on AI-assisted constraint generation for CAD sketches, using preference-based optimisation and [[Reinforcement Learning]] to suggest constraints that make under-constrained sketches fully determined, with a constraint solver providing real-time feedback on sketch stability. Ansys 2025 R1 supports constraint-based parametric interfaces to Creo, Fusion, NX, Solid Edge, and SOLIDWORKS through associative geometry APIs.

    **Topology Optimisation and Additive Manufacturing:**
    [[Topology Optimization]] is the paradigmatic constraint based design application for structural engineering: the feasible space is defined by stress, displacement, and manufacturing process constraints; the objective is minimum mass or maximum stiffness. Altair Inspire, Ansys OptiStruct, nTopology, and Siemens Synera are the dominant commercial tools. With the rise of [[Additive Manufacturing]], overhang angle, build direction, and support structure constraints are incorporated directly into the optimisation. The generative design for [[Additive Manufacturing]] 2026 patent landscape (PatSnap 2026) shows a shift from physics-simulation-driven approaches toward requirement-to-geometry AI pipelines where learned priors over manufacturable shapes encode manufacturing constraints implicitly.

    **Robotics and Motion Planning:**
    [[Motion Planning]] in [[Robotics]] is fundamentally constraint based: a robot must reach a target configuration while satisfying joint limits (position, velocity, torque), avoiding collisions with the environment (halfspace constraints or signed-distance constraints), maintaining end-effector orientation constraints during assembly tasks, and satisfying timing constraints for synchronised multi-robot coordination. Configuration-space (C-space) search — RRT, PRM, and their variants — can be viewed as constraint satisfaction in a continuous high-dimensional space, with lazy constraint evaluation. Recent work (MDPI Sensors, 2025) provides effective constraint-based motion planning for 7-DOF manipulators; Edinburgh's concurrent co-design framework (era.ed.ac.uk) integrates robot design optimisation with constraint-based motion planning in a bi-level optimisation scheme. Trajectory optimisation methods (TrajOpt, CHOMP, iLQR) directly solve constrained nonlinear programmes over trajectory variables.

    **Cyber-Physical Systems and Digital Twins:**
    [[Cyber Physical Systems]] validation uses constraint based design to verify that system configurations satisfy timing, resource, and safety requirements. SMT-based approaches (Formal Methods in Computer-Aided Design, FMCAD 2023 and 2025) synthesise controllers satisfying temporal logic constraints. [[Digital Twin]] models require constraint consistency: a simulated configuration must satisfy all physical constraints to be a valid twin of the physical system. In cyber-physical manufacturing, constraint based design underpins production line scheduling (resource capacity and task sequencing constraints) and quality control (tolerance constraint verification).

    **Generative Design in Engineering:**
    Commercial [[Generative Design Tool]] platforms use constraint based design as the core algorithmic engine. Autodesk Fusion Generative Design accepts load cases, boundary conditions, manufacturing method constraints (machining, casting, additive manufacturing), and mass constraints; generates multiple topology-optimised alternatives satisfying all constraints. Neural Concept's platform (2024) uses GNN surrogate models to predict aerodynamic and structural performance within constraint-defined design spaces, reducing per-evaluation time from hours (CFD/FEA) to milliseconds. The ARC Advisory Group (2025) identifies the shift from one-at-a-time expert-driven design to automated multi-objective constraint-based exploration as the primary value driver of AI in engineering.

    **Pharmaceutical and Molecular Design:**
    Drug discovery employs constraint based design in molecular generation: valid drug-like molecules must satisfy ADMET (absorption, distribution, metabolism, excretion, toxicity) property constraints, synthetic accessibility constraints (retrosynthetic feasibility), and binding geometry constraints (pharmacophore models). Constrained molecular generation using variational autoencoders (VAEs) and diffusion models with constraint satisfaction post-processing is the dominant approach. A 2025 milestone saw an AI-generated small-molecule drug reach Phase 2a clinical trial with statistically significant improvement in lung function, demonstrating end-to-end viability of constraint-guided molecular design.

    **Configuration Management and Product Line Engineering:**
    Large-scale product configurators (automotive, aerospace, telecommunications) manage compatibility constraints between product components. A customer-selectable option set may trigger thousands of constraint implications — a specific engine variant requires a particular cooling system, which precludes a specific tow package — managed by feature models and BDD (binary decision diagram) or SAT-based configurators. BMW's iDrive configurator and Airbus aircraft configuration management systems are canonical examples.

  ## AI Integration and Neural Constraint Methods

    The integration of [[Machine Learning]] with constraint based design has progressed along three distinct trajectories, each transforming a different part of the constraint-solve-evaluate loop:

    **Neural surrogate models replacing simulation:**
    The most mature integration replaces expensive physics simulations ([[Finite Element Analysis]], CFD, thermal analysis) with fast [[Neural Network]] surrogate models trained on datasets of design configurations and their simulation outputs. Graph neural networks (GNNs) are particularly effective as surrogates for structural analysis because the mesh structure of an FEA model maps naturally to a graph: nodes represent mesh vertices (with displacement and stress outputs), edges represent element connectivity, and graph convolution propagates mechanical information through the structure. Neural Concept's GNN-based aerodynamic and structural surrogate (2024) achieves millisecond prediction times against CFD results that require hours of computation, enabling interactive constraint-based exploration of automotive and aerospace design spaces with hundreds of constraint evaluations per second.

    Physics-informed neural networks (PINNs) embed the governing partial differential equations (PDEs — e.g., Navier-Stokes, Elasticity equations) as regularisation terms in the [[Loss Function]], enabling the surrogate to generalise better to out-of-distribution design configurations than purely data-driven models. Neural operators (DeepONet, Fourier Neural Operator) learn the operator mapping design parameters to solution fields (displacement fields, stress distributions) in a mesh-independent manner, enabling surrogates trained on coarse meshes to generalise to fine meshes at inference time.

    **Learning-guided constraint solving:**
    A second trajectory uses [[Machine Learning]] to improve constraint solver performance through learned heuristics. Traditional CP solvers rely on hand-coded variable ordering heuristics (minimum remaining values, degree heuristic) and value ordering heuristics (least-constraining value). Neural-guided search replaces or supplements these with learned policies trained via [[Reinforcement Learning]] on distributions of similar constraint satisfaction problems. The policy takes the current partial assignment and constraint propagation state as input (represented as a graph or hypergraph) and outputs a variable/value ordering recommendation. Results on combinatorial design and scheduling benchmarks (published at NeurIPS and IJCAI 2023–2025) show 10–50× speedups over pure backtracking on structured problem families.

    For topology optimisation, neural network–guided topology algorithms train a convolutional policy network on pairs of (design parameters, converged topology) to predict near-optimal initial density distributions, providing warm starts for gradient-based optimisation that reduce the number of FEA iterations required by 60–80% (published results from MIT and TU Delft, 2023–2024).

    **Constraint acquisition from data:**
    The most ambitious integration learns constraint systems from datasets of valid and invalid designs, without requiring explicit constraint specification by engineers. ILASP (Inductive Learning of Answer Set Programs, Imperial College London, Law et al.) learns symbolic constraint representations from examples. For geometric constraint solving, Autodesk Research's 2025 work trains a transformer-based model on large corpora of parametric CAD sketches to predict missing constraints, achieving sketch completion accuracy exceeding expert CAD users on benchmark tasks. For physical constraints, constraint learning from simulation data fits regression models to simulation outputs and extracts interpretable constraint expressions via symbolic regression (sparse regression with a library of basis functions).

    **Differentiable and end-to-end constraint satisfaction:**
    A growing research direction makes constraint solving differentiable, enabling gradient-based learning to flow through the constraint satisfaction layer. Differentiable optimisation layers (OptNet, CvxPyLayers) embed quadratic programming or linear programming as differentiable modules within neural networks, enabling end-to-end training of systems that must produce feasible outputs. For robotics, differentiable trajectory optimisation (DiffTaichi, Drake) enables [[Reinforcement Learning]] agents to learn task objectives while maintaining kinematic feasibility through differentiable constraint layers. For materials design and molecular generation, differentiable constraint satisfaction layers ensure that generated molecular structures satisfy valence and ring-closure constraints.

  ## Comparison with Related Paradigms

    Constraint based design is distinguished from related AI and engineering paradigms by its declarative formalism and formal feasibility guarantees:

    **vs. Procedural / parametric design (templates):** Traditional CAD templates encode a design as a procedure: do this, then that, then scale this dimension by a factor. Changing a requirement often requires rewriting the procedure. Constraint based design encodes requirements as constraints on variables; any assignment satisfying all constraints is valid, and the solver finds it without the designer specifying the construction sequence. This separation of *what* (constraints) from *how* (solver) is the key architectural advantage.

    **vs. [[Reinforcement Learning]] for design:** RL-based design agents learn to generate designs through reward-shaped exploration of the design space. They can discover non-obvious design patterns but provide no formal feasibility guarantee: a trained RL agent may generate designs that violate hard constraints (safety limits, manufacturing constraints) if those constraints were only weakly enforced during training. Constraint based design provides a formal certificate of feasibility for every generated design. Hybrid approaches use RL for exploration within a constraint-validated design space, combining the expressiveness of learned design strategies with the formal safety of constraint satisfaction.

    **vs. Generative AI for design:** Diffusion models and large language models can generate plausible-looking designs from natural language or image prompts, but without constraint satisfaction guarantees. A diffusion model generating CAD geometry may produce designs that violate stress limits, manufacturing constraints, or regulatory requirements. Constraint based design is complementary: generative AI can be used to propose initial design candidates that are then validated and refined by constraint solvers, or post-hoc constraint satisfaction layers can project generated designs into the feasible region.

    **vs. Rule-based design systems:** Expert systems encode design knowledge as production rules (IF condition THEN action). Rules are procedural and directional; changing a rule may invalidate others; conflict resolution requires meta-rules. Constraint based design encodes knowledge as bidirectional constraints; the solver handles propagation, conflict detection, and resolution uniformly. Rule-based systems are easier to understand step-by-step but harder to maintain and less flexible; constraint systems are harder to explain step-by-step but handle changing requirements gracefully.

  ## Academic Context

    Constraint based design sits at the intersection of several research traditions:

    **AI / Constraint Programming:**
    The core formalism is [[Constraint Satisfaction]] (CSP/COP), formalised by Montanari (1974), Mackworth (1977), and Freuder (1978). The Russell & Norvig AI textbook (4th edition, 2021) provides the standard CSP exposition. Rina Dechter's *Constraint Processing* (2003) is the standard reference monograph. The annual CP conference (AAAI/ACM, running since 1995) and CPAIOR (Combinatorial Optimisation and Applications, international) are the primary research venues. The Association for Constraint Programming (ACP) maintains the community's activities, including the Summer School on Constraint Programming (attended by researchers from academia and industry across Europe) and the MiniZinc Challenge benchmarking competition, which publishes annual solver performance comparisons.

    **CAD and Geometric Constraint Solving:**
    Kramer (1992) formalised the motion analysis approach to 3D geometric constraint solving. Owen (1991) developed graph-decomposition methods for 2D constraint graphs. Hoffmann and colleagues at Purdue contributed extensively to the theory of constraint graphs (degrees-of-freedom, structural rigidity, over/under-constrained detection) through the 1990s and 2000s, published in Computer-Aided Design journal (Elsevier) and ACM Solid and Physical Modelling (SPM) symposia. Joan-Arinyo and Soto-Riera at the Universitat Politècnica de Catalunya extended the constructive approaches to 3D geometric constraint graphs. The field is now sufficiently mature that constraint-based parametric modelling is taught as the standard CAD paradigm in engineering curricula worldwide.

    **Topology Optimisation:**
    The SIMP method was introduced by Bendsøe and Kikuchi (1988) and Bendsøe (1989). Sigmund and Maute's 2013 review in Structural and Multidisciplinary Optimisation established the modern state of the field. The level-set method (Sethian, Allaire et al., 2002) provides an alternative representation with clean boundary descriptions. The bi-directional evolutionary structural optimisation (BESO) method (Huang and Xie, 2010) removes material from low-stress regions iteratively. The Altair Engineering research group (OptiStruct), TU Delft Aerospace Structures group (the group pioneering topology optimisation for aircraft and automotive), and Altair's academic partner network are primary contributors. The WCSMO (World Congress of Structural and Multidisciplinary Optimisation) is the primary venue, meeting biennially.

    **Robotics and Motion Planning:**
    LaValle's *Planning Algorithms* (2006, Cambridge) provides the foundational text on constraint-based motion planning, including configuration space theory, sampling-based planning (RRT, PRM), and constraint satisfaction in continuous spaces. Choset et al. *Principles of Robot Motion* (2005, MIT Press) covers the sampling-based planning family and its implementations. The International Conference on Robotics and Automation (ICRA) and IROS are primary venues. Edinburgh's concurrent co-design work (era.ed.ac.uk, 2024) exemplifies UK research combining constraint-based design with motion planning in a bi-level optimisation framework where both the robot's physical design and its motion strategy are simultaneously optimised subject to task constraints.

    **Formal Methods and MBSE:**
    The FMCAD (Formal Methods in Computer-Aided Design) conference series, and the INCOSE Systems Engineering Handbook, govern the formal and MBSE sides respectively. The CAV (Computer-Aided Verification) conference covers formal verification of cyber-physical systems using constraint-based methods (bounded model checking, SMT solving). SysML v2 (released 2024) provides a formal constraint specification language with a standardised API (SysML v2 Pilot Implementation) integrated with MBSE toolchains from Dassault Systèmes, PTC, and Siemens. The Object Management Group (OMG) governs the SysML standard; the INCOSE (International Council on Systems Engineering) governs MBSE practice globally.

  ## Current Landscape (2026)

    Key industry and research developments through 2025–2026:

    - **AI-augmented constraint generation**: Autodesk Research's 2025 work on AI-assisted parametric CAD constraint generation uses [[Reinforcement Learning]] agents that receive solver feedback to suggest under-constrained sketch completions, achieving full constraint in fewer steps than expert human users. This is a paradigm shift from constraint satisfaction (checking feasibility) to constraint acquisition (learning what constraints the designer intends).
    - **Neural topology optimisation**: Multiple startups and research groups (Neural Concept, MIT Computational Design Lab, Delft Aerospace) have published graph neural network surrogate models that replace FEA calls within SIMP-style optimisation loops, reducing end-to-end design time from days to hours for complex multi-physics problems.
    - **SysML v2 adoption**: The OMG SysML v2 standard (released 2024) introduced a formal constraint specification language and API, enabling constraint-based requirements to flow directly into simulation and formal verification tools without translation losses. Dassault Systèmes, PTC, and Siemens Teamcenter all announced SysML v2 integrations in 2024–2025.
    - **OR-Tools advances**: Google OR-Tools CP-SAT solver (version 9.x, 2024–2025) added parallel search and improved constraint propagation, reducing solve times for industrial scheduling and configuration problems by 30–50% on standard benchmarks. Widely deployed in automotive supply chain, semiconductor manufacturing scheduling, and cloud resource allocation.
    - **Multi-physics co-design**: Ansys Discovery and Simcenter Studio (Siemens) now offer real-time multi-physics constraint evaluation — structural, thermal, and CFD — enabling interactive constraint-based design exploration where every parameter change triggers immediate physics feedback, blurring the boundary between CAD modelling and [[Simulation]].
    - **Pharmaceutical pipeline**: Constraint-based molecular generation is embedded in AstraZeneca, GSK, and Pfizer internal ML platforms, with multiple drug candidates generated by constraint-aware AI systems entering clinical trials in 2024–2025.
    - **Aerospace applications**: Airbus and Boeing research teams (and their academic partners) use constraint based design for aircraft structural optimisation subject to airworthiness constraints, blended-wing-body configuration synthesis, and maintenance constraint scheduling.

  ## UK Context

    The United Kingdom has major research and industrial strength in constraint based design across engineering disciplines:

    **Academic Centres:**
    - University of Edinburgh: the Autonomous Systems and Robotics group (together with the Institute for Perception, Action and Behaviour) publishes on constraint-based co-design of robots and motion planners; the concurrent design work (era.ed.ac.uk, 2024) integrating bi-level optimisation of robot design and motion planning is a direct example.
    - Imperial College London: the Design Engineering department and Mechanical Engineering department work on topology optimisation, multi-objective engineering design, and MBSE; strong collaboration with Rolls-Royce and BAE Systems.
    - University of Cambridge: the Engineering Design Centre (EDC) and Computational Design group focus on parametric design, design space exploration, and constraint-based configuration; Dassault Systèmes has a research partnership with Cambridge for CATIA-based constraint solving research.
    - University of Manchester: the School of Mechanical, Aerospace and Civil Engineering has groups working on topology optimisation and constraint-based structural design; Manchester is a BAE Systems and Airbus UK industrial partner.
    - Loughborough University: Design School and Wolfson School publish extensively on constraint based design in manufacturing and product design; strong links to automotive sector (Jaguar Land Rover).
    - University of Sheffield: AMRC (Advanced Manufacturing Research Centre) works on constraint-based process planning for advanced manufacturing, including additive and hybrid processes.
    - Leeds and Newcastle: engineering schools with constraint-based design research in structural optimisation and manufacturing process planning.

    **Industry:**
    - Rolls-Royce (Derby): uses constraint based design and topology optimisation for jet engine component design (turbine blades, combustor casings), subject to strict aerodynamic and thermo-mechanical constraints. Partners with Imperial, Loughborough, and Oxford.
    - BAE Systems (Farnborough, Warton): aerospace constraint based design for airframe structural optimisation; formal verification of avionics using SMT-based constraint methods.
    - Airbus UK (Filton, Broughton): wing design using constraint-based multi-disciplinary optimisation (MDO); configuration management for aircraft product lines.
    - Jaguar Land Rover (Coventry): constraint based design for vehicle body structure optimisation, crash safety constraints, and powertrain packaging.
    - ARM Ltd (Cambridge): constraint based design in chip architecture — microarchitecture design space exploration subject to power, performance, and area (PPA) constraints.
    - Dyson (Malmesbury): topology optimisation and constraint-based design for consumer products (motors, fluid dynamics).

  ## Future Directions (2026–2030)

    - **Constraint acquisition from data**: Learning constraint systems directly from datasets of design examples (ILASP, constraint learning, preference learning) will reduce the expert burden of constraint specification. Neural constraint acquisition for CAD is already emerging (Autodesk 2025).
    - **Foundation models for constraint solving**: Large language models fine-tuned on constraint problem corpora are showing early capability to translate natural-language design requirements into formal constraint specifications, bridging the gap between engineer intent and solver-ready formalisms.
    - **Physics-informed neural constraint solvers**: Physics-informed neural networks (PINNs) and neural operators (DeepONet, FNO) as drop-in replacements for FEA within constraint loops, enabling millisecond-latency feasibility evaluation for real-time interactive design.
    - **Quantum constraint solving**: Quantum annealing (D-Wave) and gate-based quantum optimisation (QAOA) are being tested for combinatorial constraint problems in drug discovery (molecular generation) and scheduling; commercial advantage is projected for specific problem classes by 2028–2030.
    - **Autonomous design agents**: Multi-agent systems where specialised AI agents negotiate constraint relaxations and trade-offs across engineering disciplines (structural, thermal, electrical, manufacturing) — a constraint-based coordination problem at the systems level.
    - **Regulation-aware design**: [[Formal Verification]] toolchains embedding regulatory constraint libraries (Eurocode, DO-178C, ISO 26262) so that compliance constraints are automatically checked and provably satisfied during design, replacing post-hoc certification audits.
    - **Digital twin integration**: Constraint based design embedded in live [[Digital Twin]] systems, continuously re-solving feasibility as operational data updates constraint parameters (material degradation, wear, environmental loads), enabling predictive maintenance and adaptive design updates.

  ## Constraint Based Design and Digital Twins

    The integration of constraint based design with [[Digital Twin]] technology is one of the most strategically significant developments in engineering AI. A digital twin is a live, continuously updated computational model of a physical artefact or system, receiving sensor data from the physical counterpart and maintaining correspondence at agreed fidelity levels. Constraint based design contributes to digital twins in two complementary directions: (a) validating that the twin's current configuration is physically consistent (all physical and regulatory constraints are satisfied by the inferred system state); and (b) performing predictive what-if analysis by solving constraint-based design problems on the twin's model to identify maintenance actions, configuration changes, or operational adjustments that keep the system within feasible operating boundaries.

    In aerospace, Airbus's digital twin programme for A320neo aircraft maintenance uses constraint-based feasibility checking to validate proposed maintenance schedules: each maintenance task imposes a set of constraints (aircraft must be grounded, component must not be load-bearing, adjacent systems must be in specified states), and constraint propagation identifies all induced constraints on the maintenance window. The scheduler then solves a constraint optimisation problem over the scheduling variables to minimise turnaround time while satisfying all maintenance, regulatory, and resource availability constraints.

    In manufacturing, [[Cyber Physical Systems]] digital twins for production lines use constraint based design to validate production configurations in real time. When a product variant is scheduled, the constraint system encodes its process requirements (tool type, fixture configuration, torque sequence, weld parameters), and the solver verifies that the current production line configuration satisfies all process constraints before the variant enters production. This prevents costly mis-configurations that would produce out-of-spec parts or damage equipment.

    In structural health monitoring, constraints encode the expected relationships between sensor measurements (strain gauges, accelerometers, thermocouples) and structural integrity indicators (remaining fatigue life, crack propagation length, joint loosening). When sensor readings violate expected constraint relationships, this signals structural anomalies; constraint-based diagnosis identifies which structural parameter violations are consistent with the observed sensor deviations, guiding inspection and repair.

  ## Multi-Objective Constraint Based Design

    Most practical engineering design problems involve [[Multi-Objective Optimization]]: minimising mass while maximising stiffness and minimising cost, or maximising range while minimising fuel consumption and satisfying safety constraints. Multi-objective constraint based design produces a Pareto-optimal set — the set of designs for which no objective can be improved without worsening another — subject to all constraint satisfaction requirements.

    The NSGA-II and NSGA-III [[Evolutionary Algorithm]]s are the dominant approaches for multi-objective COPs with complex constraint landscapes. They maintain a population of candidate designs, apply crossover and mutation operators, evaluate all constraints via simulation or surrogate models, and apply constraint-domination-preserving selection to evolve the population toward the Pareto front while maintaining feasibility. NSGA-III (Deb and Jain, 2014) extends the approach to many-objective problems (more than 3 objectives) using reference point-based selection, which is important for multi-physics design problems with 5–10 engineering objectives.

    Bayesian multi-objective optimisation (using [[Gaussian Process]] surrogates) has become competitive with evolutionary methods for expensive (few-evaluation) design problems. The EHVI (Expected Hypervolume Improvement) acquisition function identifies the next design to evaluate by maximising the expected improvement to the Pareto front hypervolume, efficiently guiding the search without requiring thousands of evaluations. For constrained multi-objective optimisation, constrained EHVI (cEHVI) extends the approach by jointly modelling feasibility probability and objective values, concentrating evaluations on the feasible Pareto front.

    Constraint handling in evolutionary and Bayesian optimisation includes: penalty function methods (adding constraint violation penalties to the objective); feasibility rules (preferring feasible solutions over infeasible, and among infeasible, preferring those closer to feasibility); constraint dominance principles (a feasible solution always dominates an infeasible one, regardless of objective values); and repair operators (projecting infeasible designs onto the feasible boundary). Each approach has different convergence properties and is suited to different constraint structures (few constraints vs. many, hard vs. soft, cheap vs. expensive evaluation).

  ## Standards and Interoperability

    Constraint based design tools are increasingly governed by interoperability standards that enable constraint specifications to flow across toolchains without translation losses:

    - **SysML v2 (2024)**: The OMG Systems Modeling Language v2 introduces a formal constraint specification language with a Python-like syntax, a formal semantics based on KerML (Kernel Modeling Language), and a standardised REST/JSON API enabling tool-independent access to models. Constraint blocks in SysML v2 encode binding equations and parameter constraints that tools can evaluate against simulation results or formal verification engines. SysML v2 replaces the informal constraint blocks of SysML v1.x with formally grounded semantics, enabling automated constraint checking without manual translation.
    - **MiniZinc**: The ISO-like MiniZinc constraint modelling language provides a high-level, solver-independent syntax for specifying CSPs and COPs. Models written in MiniZinc compile to solver-specific FlatZinc format for any registered solver backend (CP-SAT, Gecode, Chuffed, Gurobi, CPLEX). The annual MiniZinc Challenge benchmarks solver performance on a standardised problem set. MiniZinc is widely used in academic constraint programming research and increasingly in industrial engineering applications where solver-independence is valuable.
    - **XCSP3**: An XML-based constraint problem specification format for benchmarking constraint solvers, enabling interoperable solver comparison and standard problem libraries.
    - **IFC (Industry Foundation Classes)**: The open BIM (Building Information Modelling) standard encodes architectural and structural constraint specifications for buildings, enabling constraint-based design validation in the construction sector. IFC 4.3 (2022) adds bridge and civil infrastructure modelling; the Open BIM workflow connects IFC constraint models to structural analysis ([[Finite Element Analysis]]) and regulatory compliance checking tools.
    - **STEP (Standard for the Exchange of Product Model Data, ISO 10303)**: The neutral format for exchanging parametric CAD constraint models across different CAD vendors. STEP AP214 and AP242 support parametric geometry exchange with embedded constraint information, enabling constraint based design files to be transferred between SolidWorks, CATIA, NX, and other systems.
    - **OR-Tools CP-SAT (Google, Apache 2.0)**: The most widely deployed open-source CP solver. Its integration with Python, Java, and C++ APIs, and its use within Google's internal scheduling and planning systems, have made it the default choice for constraint based design problems in engineering organisations with software development capabilities. Version 9.x (2024–2025) added parallel search and improved LP relaxation strengthening.

  ## Key Terminology

    - **Constraint Satisfaction Problem (CSP)**: A triple (X, D, C) of variables, domains, and constraints; a solution assigns each variable a value from its domain satisfying all constraints simultaneously.
    - **Constraint Optimisation Problem (COP)**: A CSP with an additional objective function; seeks the feasible assignment minimising (or maximising) the objective.
    - **Feasible region**: The subset of the design parameter space satisfying all constraints; the set of valid designs.
    - **Degrees of freedom (DOF)**: In geometric constraint solving, the number of independent parameters needed to fully determine the geometry; a fully constrained sketch has 0 DOF; an over-constrained sketch has negative DOF.
    - **Constraint propagation**: Inferring domain reductions for one variable from the constraints linking it to other variables; the core pruning mechanism in CP solvers.
    - **Topology optimisation**: Determining the optimal distribution of material within a design domain subject to loading and manufacturing constraints; output is typically a density field.
    - **SIMP (Solid Isotropic Material with Penalisation)**: The dominant topology optimisation method; penalises intermediate density values to drive the solution towards 0/1 (void/solid) distributions.
    - **Parametric CAD**: CAD in which geometry is defined by parameters and constraints, so that changing a dimension automatically propagates through the design.
    - **MBSE (Model-Based Systems Engineering)**: Using formal models (SysML, AADL) to specify, analyse, and verify system designs, with constraints as first-class modelling elements.
    - **MDO (Multidisciplinary Design Optimisation)**: Simultaneous optimisation of designs subject to constraints from multiple engineering disciplines (aerodynamics, structures, propulsion, manufacturing).
    - **Co-design**: Simultaneous optimisation of a system (e.g., a robot) and its controller/motion planner, where constraints couple the design and control variables.

  ## Research and Literature

    1. Mackworth, A.K. (1977). Consistency in Networks of Relations. *Artificial Intelligence*, 8(1), 99–118. https://doi.org/10.1016/0004-3702(77)90007-8
    2. Waltz, D. (1975). Understanding Line Drawings of Scenes with Shadows. *The Psychology of Computer Vision* (ed. P. Winston). McGraw-Hill.
    3. Owen, J.C. (1991). Algebraic Solution for Geometry from Dimensional Constraints. *Proceedings of ACM Symposium on Solid Modelling Foundations*, 397–407.
    4. Kramer, G.A. (1992). *Solving Geometric Constraint Systems*. MIT Press.
    5. Bendsøe, M.P. and Kikuchi, N. (1988). Generating Optimal Topologies in Structural Design Using a Homogenization Method. *Computer Methods in Applied Mechanics and Engineering*, 71(2), 197–224.
    6. Dechter, R. (2003). *Constraint Processing*. Morgan Kaufmann.
    7. Apt, K.R. (2003). *Principles of Constraint Programming*. Cambridge University Press.
    8. Sigmund, O. and Maute, K. (2013). Topology Optimisation Approaches: A Comparative Review. *Structural and Multidisciplinary Optimisation*, 48(6), 1031–1055.
    9. LaValle, S.M. (2006). *Planning Algorithms*. Cambridge University Press. http://planning.cs.uiuc.edu/
    10. Deits, R. and Tedrake, R. (2015). Efficient Mixed-Integer Planning for UAVs in Cluttered Environments. *ICRA 2015*. https://arxiv.org/abs/1409.3480
    11. Hoffmann, C.M. and Joan-Arinyo, R. (2005). Parametric Modeling. *Handbook of Computer Aided Geometric Design* (Elsevier). https://doi.org/10.1016/B978-044451104-1/50020-3
    12. Allaire, G., Jouve, F., and Toader, A.-M. (2002). A Level-Set Method for Shape Optimisation. *Comptes Rendus Mathématique*, 334(12), 1125–1130.
    13. Barambones, D. and Garrido, A.J. (2019). A Summary of Constraints Handling Methods in Genetic Algorithms. *Energies*, 12(3), 403. https://doi.org/10.3390/en12030403
    14. Russell, S. and Norvig, P. (2021). *Artificial Intelligence: A Modern Approach*, 4th ed. Pearson. (Chapter 6: Constraint Satisfaction Problems)
    15. Rossi, F., van Beek, P., and Walsh, T. (eds.) (2006). *Handbook of Constraint Programming*. Elsevier.
    16. Concurrent Design and Motion Planning in Robotics. University of Edinburgh. (2024). era.ed.ac.uk/handle/1842/41042.
    17. Aligning Constraint Generation with Design Intent in Parametric CAD. Autodesk Research. (2025). https://www.research.autodesk.com/app/uploads/2025/10/Aligning-Constraint-Generation-with-Design-Intent-in-Parametric-CAD.pdf
    18. AI-Driven Generative Design Redefines the Engineering Process. (2025). *ResearchGate: Proceedings of the Design Society*. https://www.researchgate.net/publication/388269240
    19. Redundancy-Based Motion Planning with Task Constraints for Robot Manipulators. (2025). *Sensors*, 25(6), 1900. https://www.mdpi.com/1424-8220/25/6/1900
    20. A Survey of Optimization-based Task and Motion Planning: From Classical to Learning Approaches. (2024). arXiv:2404.02817.
    21. Formal Methods in Computer-Aided Design 2025. (2025). https://repositum.tuwien.at/bitstream/20.500.12708/219558
    22. Generative Design for Additive Manufacturing 2026. PatSnap. (2026). https://www.patsnap.com/resources/blog/rd-blog/generative-design-for-additive-manufacturing-2026/
    23. Best Generative Design AI Tools and Software (2026 Review). CoLab. (2026). https://www.colabsoftware.com/guides/how-generative-design-works-a-guide-for-engineering-managers
    24. Role of AI in Generative Engineering Design. ARC Advisory Group. (2025). https://www.arcweb.com/industry-best-practices/understanding-role-ai-generative-engineering-design
    25. Ansys CAD Integration Release 2025 R1. (2025). https://ansyshelp.ansys.com/public/Views/Secured/corp/v251/en/pdf/CAD_Integration.pdf
    26. SIMP Topology Optimisation with Additive Manufacturing Constraints. Review Paper. *Structural and Multidisciplinary Optimisation*. (2024). Various authors.
    27. Artificial Intelligence in the Design Process: A Review on Generative AI Perspectives. *Proceedings of the Design Society*. Cambridge Core. (2025). https://www.cambridge.org/core/journals/proceedings-of-the-design-society/article/artificial-intelligence-ai-in-the-design-process
    28. OR-Tools CP-SAT Solver. Google. (2024). https://developers.google.com/optimization/reference/python/sat/python/cp_model

- ### Provenance
  - sources:: Dechter "Constraint Processing" (2003); Russell & Norvig "Artificial Intelligence: A Modern Approach" 4th ed. (2021) Ch.6; Apt "Principles of Constraint Programming" (2003); Mackworth (1977) Arc Consistency; Bendsøe & Kikuchi (1988) Topology Optimisation; LaValle "Planning Algorithms" (2006); Autodesk Research constraint generation (2025); Edinburgh concurrent co-design (2024); Ansys 2025 R1 CAD Integration; PatSnap generative design 2026; ARC Advisory Group (2025); OR-Tools documentation; SysML v2 (2024); CoLab generative design guide (2026)
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
