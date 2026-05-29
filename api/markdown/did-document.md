- ### Definition
  - A DID Document is a JSON-LD resource associated with a Decentralised Identifier (DID) that expresses the DID subject's cryptographic public keys, authentication methods, assertion methods, key agreement protocols, and service endpoints. Resolved from a DID via a DID method-specific read operation, a DID Document enables verifiers to discover how to authenticate with, or communicate securely to, the DID subject without relying on a centralised registry. DID Documents are specified by the W3C DID Core standard and are a foundational component of self-sovereign identity and verifiable credential ecosystems.

- ### Semantic Classification
  - owl-class:: did-document:DID Document
  - owl-role:: Concept

- ### Relationships
  - uses [[Public-Key Cryptography]]
  - uses [[JSON-LD]]
  - enables [[Verifiable Credentials]]
  - enables [[Self Sovereign Identity]]
  - relatedTo [[Digital Identity]]
  - relatedTo [[Identity Verification]]

- ### Content
  - A DID Document is the machine-readable record that a Decentralised Identifier (DID) resolves to. DIDs are persistent, cryptographically verifiable identifiers that do not require a central registration authority; instead, they are anchored to a Verifiable Data Registry such as a blockchain, distributed ledger, or peer-to-peer network. The DID Document describes how to interact with the DID subject using the properties defined by the W3C DID Core specification.
  - The structure of a DID Document includes one or more verification methods — typically public keys or other cryptographic material — each associated with one or more verification relationships: authentication (proving control of the DID), assertion (signing credentials), key agreement (establishing encrypted communication), and capability invocation or delegation. Service endpoints within the DID Document advertise URIs for interacting with the subject, such as credential issuance services or messaging endpoints.
  - DID resolution — the process of retrieving a DID Document from a given DID — is defined by a DID method specification. Methods such as did:web, did:ion (anchored to Bitcoin), did:key (a self-certifying method requiring no registry), and did:ethr (anchored to Ethereum) differ in their security models, update costs, and availability properties. DID Documents use JSON-LD serialisation, allowing them to be embedded in and linked from other Linked Data resources. They are a cornerstone of the W3C Verifiable Credentials Data Model, enabling issuers to publish their signing keys and holders to prove credential authenticity to verifiers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z