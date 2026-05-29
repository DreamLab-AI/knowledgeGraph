### Definition

In the context of AI systems and ontological engineering, a Property is a named attribute or characteristic that describes a measurable or observable quality of an entity, concept, or system component. Properties may be data properties (mapping an individual to a literal value such as a number or string) or object properties (relating an individual to another individual within the knowledge graph). In AI safety and governance contexts, properties such as fairness, robustness, and interpretability are the formal targets of evaluation and certification requirements.

### Relationships

Property is **relatedTo** [[Ontology Property Definitions]] (the structured schema from which typed properties are declared), [[Parameter]] (a numeric instance of a property in a model), [[Fairness Metrics]] (measurable instances of the fairness property), [[Explainability]] (a system-level property targeted by transparency requirements), and [[AI Safety]] (the composite of safety properties a system must satisfy). It **uses** [[Knowledge Graph]] infrastructure to represent property assertions and [[Ontology]] schemas to type-check and validate property domains and ranges. It **supports** [[Formal Verification]] (properties are the targets of formal proofs and model checking) and [[AI Trustworthiness Dimensions]] (each dimension is operationalised as a set of testable properties). Property is **partOf** [[Ontology Structure]] as one of the three foundational elements alongside classes and individuals.

### Content

Properties are foundational to knowledge representation and AI system specification. In OWL-based ontologies, properties are first-class citizens: object properties (e.g., `hasComponent`, `dependsOn`) express typed binary relations between individuals, while data properties (e.g., `hasAccuracyScore`, `hasParameterCount`) map individuals to typed literals. Domain and range restrictions constrain which classes may appear as subjects and objects, enabling automated reasoning to detect inconsistencies.

In AI governance, the term "property" takes on a normative dimension. Trustworthiness requirements—fairness, robustness, privacy, transparency, accountability—are system-level properties that must be operationalised as measurable criteria before they can be evaluated. The process of property formalisation (translating a natural-language requirement such as "the model must not discriminate on the basis of race" into a mathematically precise fairness metric) is one of the central challenges of responsible AI development.

Formal verification methods attempt to prove that a model satisfies safety properties for all inputs in a specified domain—for example, verifying that a neural network classifier always assigns the same label to inputs within an epsilon-ball (local robustness). Runtime inspection monitors properties dynamically during inference. Property-based testing samples from the input distribution to find cases where claimed properties are violated. Each approach reflects a different trade-off between rigour, scalability, and deployment cost.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z