- ### Definition
  - The Semantic Web Domain classifies concepts concerning machine-interpretable representations of meaning that allow data to be linked and reasoned over across sources. It covers ontologies, linked data, and the languages and reasoners that operate on them. As a top-level subject axis it provides the formal vocabulary by which knowledge graphs and interoperable data are constructed.

- ### Semantic Classification
  - owl-class:: sw:SemanticWebDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Interoperability Domain]], [[Data Management Domain]]
  - has-part:: [[Ontology]], [[Linked Data]], [[RDF Triple]], [[SPARQL Query]], [[Inference]]
  - requires:: [[Formal Methods Domain]]
  - enables:: [[Knowledge Graph]], [[Data Interoperability]]

- ### Content
  - The semantic web represents information in a form that machines can interpret, using explicit statements about resources and the relationships between them. The resource description framework expresses facts as subject-predicate-object triples that combine into graphs spanning many sources. Shared identifiers allow data published independently to be joined without prior coordination.
  - Ontologies provide the vocabulary and the logical constraints that give terms a defined meaning, enabling reasoners to derive facts not stated explicitly. Query languages such as SPARQL retrieve and combine graph data, while inference rules expand the asserted facts into entailed consequences. The web ontology language supports varying expressiveness against decidable reasoning.
  - The semantic web bridges to interoperability and data management, supplying the formal substrate for integrating heterogeneous data. It draws on formal methods for the logic underlying ontology languages and the guarantees of their reasoners.

- ### Provenance
  - sources:: [[W3C RDF 1.1]], [[W3C OWL 2]]
  - migration-date:: 2026-05-29T00:00:00Z