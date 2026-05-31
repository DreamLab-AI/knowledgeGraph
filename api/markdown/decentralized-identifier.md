- ### Definition
  - A decentralised identifier is a globally unique identifier that a subject can create and control without a central registry, defined by a W3C standard. It resolves to a document describing keys and service endpoints for verification.

- ### Semantic Classification
  - owl-class:: identity:DecentralizedIdentifier
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Identity]]
  - bridges-to:: [[Centralized Identity Provider]]
  - requires:: [[DID Resolution]]
  - enables:: [[Identity Management]]

- ### Content
  - A decentralised identifier, or DID, is a URI of the form did:method:identifier that a controller generates and manages independently of a central authority. It resolves to a DID document containing public keys, authentication methods and service endpoints used to prove control and interact with the subject.
  - DIDs underpin self-sovereign identity by letting individuals and organisations own identifiers and present verifiable credentials without depending on a single identity provider. The W3C standardised the data model, and many DID methods anchor identifiers on distributed ledgers or other verifiable registries.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z