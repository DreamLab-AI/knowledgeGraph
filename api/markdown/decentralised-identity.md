- ### Definition
  - Decentralised Identity (DID) is a model for digital identity management in which individuals, organisations, and devices create, own, and control their own cryptographic identifiers and verifiable credentials without dependence on centralised identity providers or registries. Identifiers are anchored to a verifiable data registry — typically a blockchain or distributed ledger — as Decentralised Identifiers (DIDs) standardised by the W3C DID specification. Credentials attesting to attributes of the DID subject are issued by trusted parties as W3C Verifiable Credentials, stored in a user-controlled digital wallet, and selectively disclosed to verifiers using zero-knowledge proofs or selective disclosure mechanisms.

- ### Semantic Classification
  - owl-class:: decentralised-identity:Decentralised Identity
  - owl-role:: Concept

- ### Relationships
  - uses [[Verifiable Credentials]]
  - uses [[DID Document]]
  - uses [[Digital Identity Wallet]]
  - enables [[Self Sovereign Identity]]
  - relatedTo [[Credential Schema]]

- ### Content
  - Decentralised Identity emerged as a response to the limitations of federated identity systems (SAML, OAuth 2.0, OpenID Connect) in which identity providers hold central authority and user consent is mediated through platform-controlled data silos. The W3C Decentralised Identifiers (DIDs) 1.0 specification, published in 2022, defines a URI scheme (`did:<method>:<method-specific-id>`) resolving to a DID Document containing cryptographic public keys and service endpoints. DID methods — such as `did:key`, `did:web`, `did:ethr`, and `did:ion` — specify how identifiers are created, resolved, and deactivated on specific registries.
  - The trust model relies on Verifiable Credentials: a credential issuer (e.g., a university, employer, or government agency) digitally signs a set of claims about the DID subject using their own DID keys, producing a credential that can be stored in the holder's Digital Identity Wallet. When a verifier requests proof of an attribute, the holder presents a Verifiable Presentation — optionally including a zero-knowledge proof that discloses only the required claims without revealing the full credential or the holder's identifier. This selective disclosure capability is foundational to Self Sovereign Identity principles.
  - Practical deployments span workforce identity (W3C VC-based employee credentials replacing badge-based access), educational credentials (ISO/IEC 23220, Europass Digital Credentials), healthcare (patient-controlled medical records), and supply chain provenance. Interoperability across DID methods and wallet implementations is addressed by the OpenID for Verifiable Credentials (OID4VC) family of specifications, which adapts OAuth 2.0 flows for credential issuance and presentation. Credential Schema standardisation ensures that verifiers can programmatically validate the structure and semantics of received credentials across different issuers and ecosystems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z