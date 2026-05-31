- ### Definition
  - A World Wide Web Consortium vocabulary that extends the Resource Description Framework with the means to describe classes, properties and their hierarchies. It provides a lightweight modelling layer for typing resources and defining property domains and ranges.

- ### Semantic Classification
  - owl-class:: general:RDFSchema
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[RDF]]
  - bridges-to:: [[Vocabulary]], [[Knowledge Representation]]
  - requires:: [[RDF]]
  - enables:: [[Reasoning]], [[OWL 2 Web Ontology Language]]

- ### Content
  - RDF Schema, often abbreviated RDFS, adds vocabulary on top of RDF for stating that resources are instances of classes, that classes form subclass hierarchies and that properties have defined domains and ranges. This lets data publishers give basic structure and typing to RDF graphs.
  - It supports simple entailment, so a reasoner can infer, for example, that an instance of a subclass is also an instance of its superclass. RDFS is less expressive than OWL and is often used as a foundation that OWL ontologies build upon.

- ### Provenance
  - sources:: [[https://www.w3.org/TR/rdf-schema/]]
  - migration-date:: 2026-05-29T00:00:00Z