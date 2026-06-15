- ### Definition
  - The [[Open World Assumption]] holds that an unstated fact is unknown rather than false, providing the semantic foundation for [[Description Logic]] and the [[Web Ontology Language]]. It supports the [[Semantic Web]] and contrasts directly with the [[Closed World Assumption]] of databases.

- ### Overview
  - Under the OWA a reasoner only concludes that something is false when the knowledge base explicitly entails its negation. Missing information is interpreted as incomplete knowledge about an open, evolving world rather than as a definitive denial. This is appropriate for the Web, where any single source describes only a fragment of reality and new assertions may always be added.
  - The OWA pairs naturally with the absence of the unique name assumption: two different identifiers may denote the same entity unless an explicit inequality is stated. Together these choices make ontology reasoning monotonic — adding facts never retracts previously valid conclusions.

- ### Key aspects
  - Absence of evidence is not evidence of absence.
  - Monotonic entailment: conclusions are preserved as knowledge grows.
  - Compatible with distributed, mergeable knowledge sources.
  - Default for OWL and description-logic reasoners.

- ### Applications
  - Ontology-based data integration across heterogeneous sources.
  - Semantic Web and linked-data reasoning where completeness cannot be assumed.
  - Biomedical and enterprise knowledge graphs requiring conservative inference.

- ### Relationships
  - subClassOf:: [[Ontology]]
  - implements:: [[Description Logic]]
  - implements:: [[Monotonic Reasoning]]
  - dependsOn:: [[Formal Semantics]]
  - enables:: [[Knowledge Integration]]
  - uses:: [[Web Ontology Language]]
  - supports:: [[Semantic Web]]
  - contrastsWith:: [[Closed World Assumption]]
  - contrastsWith:: [[Negation as Failure]]
  - requires:: [[No Unique Name Assumption]]
  - partOf:: [[Knowledge Representation]]
  - relatedTo:: [[Domain Ontology]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation