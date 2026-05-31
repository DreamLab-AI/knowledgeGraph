- ### Definition
  - A specification that defines how a particular type of decentralised identifier is created, resolved, updated, and deactivated. Each method describes the syntax and operations for DIDs anchored to a specific system such as a blockchain or registry.

- ### Semantic Classification
  - owl-class:: identity:DIDMethod
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Identity]]
  - bridges-to:: [[W3C]]
  - requires:: [[Decentralized Identity]]
  - enables:: [[Digital Identity]]

- ### Content
  - Decentralised identifiers follow the W3C DID specification, in which the method name embedded in the identifier indicates which method governs it. Examples include did:web, did:key, and methods anchored to specific ledgers.
  - A DID method defines the CRUD operations for its identifiers and specifies how to retrieve the associated DID document, which contains public keys and service endpoints used to verify control and locate related services.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z