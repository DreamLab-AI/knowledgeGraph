- ### Definition
  - Solid Pod Storage refers to the personal online data stores used in the Solid project, a web specification initiated by Tim Berners-Lee for decentralising data ownership. A Pod is a user-controlled storage space that holds data as linked-data resources, with access governed by the user rather than the applications that consume it. Applications authenticate against a Pod and read or write data only with the owner's permission, separating data from the services built on top of it.

- ### Semantic Classification
  - owl-class:: ds:SolidPodStorage
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Distributed Systems Domain]]
  - bridges-to:: [[Semantic Web]], [[Self-Sovereign Identity]]
  - requires:: [[Linked Data]], [[RDF]], [[WebID]]
  - enables:: [[Data Sovereignty]], [[Decentralised Identity]]

- ### Content
  - A Solid Pod stores a user's data as resources described using web standards such as RDF and addressed by URLs. Because data is held in the Pod rather than inside individual applications, the same information can be reused across multiple services, and the user retains the ability to grant or revoke access.
  - Access control is enforced through identity mechanisms such as WebID combined with authorisation rules attached to resources. This model inverts the conventional arrangement in which each application silos its own copy of user data, aiming instead for a single user-governed store that applications query.
  - Solid emerged from semantic-web research and is positioned as infrastructure for data sovereignty and interoperability. Adoption remains comparatively early, and practical deployment involves Pod hosting providers, identity systems and applications written to the Solid protocol.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z