- ### Definition
  - DID resolution is the process of taking a decentralised identifier and returning its associated DID document containing keys and service endpoints. It is defined by W3C specifications and implemented through method-specific resolvers.

- ### Semantic Classification
  - owl-class:: identity:DIDResolution
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Identifier]]
  - bridges-to:: [[Identity Management]]
  - requires:: [[Decentralized Identifier]]
  - enables:: [[Identity Verification System]]

- ### Content
  - DID resolution maps a decentralised identifier to its DID document by applying the read operation of the identifier's DID method, returning the keys, authentication methods and service endpoints needed to interact with the subject. A resolver may also produce metadata about the document and the resolution process.
  - Because each DID method anchors data differently, for example on a particular ledger or registry, resolution relies on method-specific drivers behind a common interface. Reliable resolution is essential for verifying credentials and establishing secure connections in decentralised identity systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z