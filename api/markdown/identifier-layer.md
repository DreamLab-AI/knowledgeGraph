- ### Definition
  - The Identifier Layer is the stratum that defines and manages the names and references used to denote entities unambiguously. It sits above the data and cryptographic primitives that make identifiers durable and verifiable and below the Identity Layer that binds meaning to them. It contains naming schemes, resolution mechanisms, and uniqueness guarantees.

- ### Semantic Classification
  - owl-class:: id:IdentifierLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Uniform Resource Identifier]], [[Namespace]]
  - requires:: [[Data Layer]], [[Cryptographic Layer]]
  - enables:: [[Identity Layer]], [[Custody Layer]]

- ### Content
  - The Identifier Layer provides the systematic names by which entities are referred to without ambiguity. Typical members include naming and addressing schemes, resolution and lookup services, uniqueness and collision-avoidance mechanisms, and the rules for minting and retiring identifiers. It is concerned with denotation, not with what an entity is.
  - It requires the Data Layer to persist identifier records and the Cryptographic Layer where identifiers must be verifiable or self-certifying. It enables the Identity Layer, which attaches verified meaning to identifiers, and the Custody Layer, which references assets by them.
  - The layer bridges to the uniform resource identifier and the concept of a namespace, which structure how names are scoped and resolved. Stability and uniqueness guaranteed here are prerequisites for trustworthy reference everywhere above.

- ### Provenance
  - sources:: [[W3C (World Wide Web Consortium)]]
  - migration-date:: 2026-05-29T00:00:00Z