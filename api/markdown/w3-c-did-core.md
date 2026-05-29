- ### Definition
  - W3C DID Core is the World Wide Web Consortium recommendation defining Decentralised Identifiers (DIDs) — a type of globally unique identifier that is controller-owned, cryptographically verifiable, and resolvable without requiring a centralised registration authority. A DID is a URI of the form did:<method>:<method-specific-id> that resolves to a DID Document containing public keys, service endpoints, and authentication verification methods. The specification is method-agnostic, allowing DIDs to be anchored on various infrastructure including distributed ledgers, peer-to-peer networks, and web servers, enabling interoperable self-sovereign identity across systems.

- ### Semantic Classification
  - owl-class:: w3-c-did-core:W3C DID Core
  - owl-role:: Concept

- ### Relationships
  - enables [[Self Sovereign Identity]]
  - enables [[Verifiable Credentials]]
  - enables [[Decentralised Identity]]
  - relatedTo [[Public-Key Cryptography]]
  - uses [[Cryptographic Signature]]

- ### Content
  - The W3C DID Core specification, published as a W3C Recommendation, defines the data model and syntax for DIDs and DID Documents. A DID Document is expressed in JSON-LD and contains one or more verification methods — typically public keys in formats such as Ed25519VerificationKey2020 or JsonWebKey2020 — along with optional service endpoints pointing to DID-linked services such as credential exchange or messaging endpoints. The document is retrieved by passing a DID to a DID resolver, which dispatches to the appropriate DID method driver.
  - DID methods define how DIDs are created, resolved, updated, and deactivated on a specific verifiable data registry. Notable methods include did:web (resolution via HTTPS), did:key (self-contained single-key DIDs with no external registry), did:ethr (Ethereum-anchored DIDs), and did:ion (Bitcoin-anchored via the Sidetree protocol). The method-agnostic design allows implementers to select a trust substrate appropriate to their threat model and performance requirements.
  - DIDs are most powerful when combined with Verifiable Credentials (W3C VC Data Model), where a credential issuer signs claims about a subject's DID and the subject can present them to a verifier who resolves the issuer's DID Document to verify the signature. This three-party trust model — issuer, holder, verifier — underpins digital identity wallets, educational credentialing, healthcare records portability, and supply-chain provenance attestation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z