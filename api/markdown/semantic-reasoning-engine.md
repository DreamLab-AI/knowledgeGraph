- ### Definition
  - Software that derives logically implied facts and checks consistency over a knowledge base expressed in a formal language such as OWL or RDF Schema. It applies inference rules of the underlying logic to make implicit information explicit.

- ### Semantic Classification
  - owl-class:: general:SemanticReasoningEngine
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Inference Engine]]
  - bridges-to:: [[Reasoning]], [[Knowledge Representation]]
  - requires:: [[Description Logic]], [[OWL 2 Web Ontology Language]]
  - enables:: [[Knowledge Graph]]

- ### Content
  - A semantic reasoning engine, or reasoner, takes an ontology and its asserted facts and computes the conclusions that follow from the formal semantics, such as class membership, subsumption hierarchies and inconsistencies. It lets applications query for facts that were never stated directly.
  - Reasoners implement the inference procedures of description logic and related formalisms, and their feasibility depends on the expressive profile of the ontology. They support tasks such as classification, consistency checking and answering queries that require derived knowledge.

- ### Provenance
  - sources:: [[https://www.w3.org/TR/owl2-primer/]]
  - migration-date:: 2026-05-29T00:00:00Z