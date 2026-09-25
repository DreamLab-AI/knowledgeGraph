W3C DID Core is the World Wide Web Consortium Recommendation (published July 2022) defining Decentralised Identifiers (DIDs) — globally unique, controller-owned URIs of the form did:<method>:<method-specific-id> that are cryptographically verifiable and resolvable without a centralised registration authority. Each DID resolves to a JSON-LD DID Document containing verification methods (public keys), authentication suites, and service endpoints. The specification is method-agnostic, accommodating distributed ledgers, peer-to-peer networks, and web servers as verifiable data registries, and forms the identity layer of the broader Self-Sovereign Identity and Verifiable Credentials ecosystem.

### Overview

- W3C DID Core addresses a fundamental limitation of traditional internet identity: most identifier schemes (email addresses, usernames, [[X.509 Certificate]] Subject Names) are controlled by a third party — the issuing organisation or registrar. If that party disappears or revokes access, the identifier is lost. DIDs shift control to the DID subject (the individual, organisation, or device), who generates their own identifier anchored in a verifiable data registry of their choosing.
- The specification was developed by the W3C Decentralised Identifier Working Group, building on earlier work by the [[Decentralised Identity Foundation]] and the W3C Credentials Community Group. It became a formal W3C Recommendation in July 2022, achieving the highest level of W3C standardisation.
- The architecture separates three distinct concerns:
  - The **identifier** itself (the DID URI), which is permanent and globally unique.
  - The **DID Document** (the data retrieved when the DID is resolved), which can be updated by the controller.
  - The **DID Method**, which specifies the protocol for creating, reading, updating, and deactivating DIDs on a particular verifiable data registry.
- This separation means the same identifier format can be used regardless of the underlying infrastructure — a blockchain, a web server, or a peer-to-peer network — while remaining interoperable through a common resolution interface.

### Key Components

#### DID Syntax and Structure

- A DID is a URI: `did:<method>:<method-specific-id>` where the method designates the DID Method driver.
- The method-specific-id is generated according to the chosen [[DID Method]] (e.g. a hash of a public key, a blockchain transaction ID, or a domain name).
- DIDs are persistent and, by design, globally resolvable without a central directory.

#### DID Document

- The [[DID Document]] is a JSON-LD data structure retrieved by resolving a DID through a [[DID Resolver]].
- Contains one or more **verification methods** (typically [[Public Key Cryptography|public keys]]) expressed in formats such as Ed25519VerificationKey2020, EcdsaSecp256k1VerificationKey2019, or JsonWebKey2020.
- Contains **verification relationships** that designate which keys are authorised for specific purposes: `authentication`, `assertionMethod`, `keyAgreement`, `capabilityInvocation`, `capabilityDelegation`.
- Optionally contains **service endpoints** pointing to DID-linked services such as credential exchange endpoints, messaging endpoints, or linked data stores.

#### DID Methods

- A [[DID Method]] specification defines the CRUD lifecycle operations for a specific verifiable data registry.
- Notable methods include:
  - `did:web` — resolution via HTTPS at a domain; simplest deployment, no blockchain needed.
  - `did:key` — self-contained, single-key DIDs with no external registry; derived entirely from a public key.
  - `did:ethr` — anchored on [[Ethereum]] via the ERC-1056 registry contract.
  - `did:ion` — anchored on [[Bitcoin]] via the [[Sidetree Protocol]] (used by Microsoft).
  - `did:peer` — pairwise, offline-first DIDs designed for direct agent-to-agent communication.
  - `did:jwk` — encodes a JWK public key directly in the DID, similar to `did:key` but using JSON Web Keys.
- The W3C DID Specification Registries maintains a growing catalogue of registered DID methods.

#### DID Resolution

- A [[DID Resolver]] accepts a DID and returns a DID Resolution Result comprising the DID Document, Document Metadata, and Resolution Metadata.
- Resolution is method-specific; a universal resolver (maintained by the Decentralised Identity Foundation) dispatches to per-method drivers.
- DID URL dereferencing extends resolution to address specific resources within or linked from a DID Document using paths, queries, and fragments.

#### Verification Methods and Cryptographic Suites

- [[Verification Method]] entries bind a DID to [[Elliptic Curve Cryptography|cryptographic material]].
- [[Linked Data Proofs]] and JSON Web Signatures (JWS) are the primary proof mechanisms used alongside DID Documents.
- [[Cryptographic Signature]] types vary by method: Ed25519, secp256k1, BLS12-381 (for [[Zero Knowledge Proof|ZKP-friendly]] credentials).

### Applications and Use Cases

#### Self-Sovereign Identity and Digital Wallets

- DIDs are the subject identifiers in [[Self-Sovereign Identity]] architectures, allowing individuals to own and control their digital identity without reliance on Google, Facebook, or government databases.
- [[Digital Identity Wallet]] applications (e.g. Microsoft Entra Verified ID, Lissi, Sphereon) store DIDs and associated [[Verifiable Credentials]], enabling portable, privacy-preserving credential presentation.

#### Verifiable Credentials Ecosystem

- The W3C VC Data Model (W3C Verifiable Credentials) uses DIDs as the `id` of issuers, holders, and subjects. A credential issuer signs claims about a subject's DID; a verifier resolves the issuer's DID Document to verify the [[Cryptographic Signature]].
- This underpins educational credentialing (Open Badges v3, Europass Digital Credentials), professional licensing, and healthcare record portability.

#### Enterprise and Government Identity

- National digital identity schemes (EU eIDAS 2.0 European Digital Identity Wallet) are incorporating DID-compatible architectures.
- Enterprise use: supply-chain provenance (tracking goods with DID-identified actors), B2B authentication, and regulated industry KYC.

#### IoT and Machine Identity

- [[Internet of Things]] devices can be assigned DIDs, enabling cryptographically verifiable device identity without a centralised CA.
- Enables secure firmware attestation, autonomous device-to-device authentication, and delegated access control.

#### AI Agent Identity

- [[AI Agent Identity]] is an emerging application: autonomous AI agents issued DIDs can cryptographically authenticate themselves to services, maintain auditable action histories, and receive delegated capabilities via UCAN or Capability Delegation mechanisms.
- Relevant for [[Federated Learning]] environments where participating nodes need verified identity without revealing model weights.

#### Decentralised Web and Credential Exchange

- [[Credential Exchange]] protocols (OpenID for Verifiable Credentials — OID4VC, DIDComm v2, Presentation Exchange) rely on DIDs as stable identifiers throughout the presentation flow.
- [[Access Control]] policies can reference DIDs directly, enabling attribute-based access control without centralised user directories.

### Standards and Context

- **W3C Recommendation**: W3C DID Core 1.0 was published as a formal W3C Recommendation on 19 July 2022 by the W3C Decentralised Identifier Working Group.
- **Companion Specifications**:
  - W3C DID Specification Registries — catalogs DID methods, verification method types, and other extension points.
  - W3C DID Resolution — specifies the resolution and dereferencing algorithms (community group draft).
  - W3C Verifiable Credentials Data Model 2.0 — the primary consumer of DID-identified subjects, issuers, and holders.
  - DIDComm Messaging v2 — messaging protocol using DIDs for encrypted, authenticated peer-to-peer communication.
  - OpenID for Verifiable Credentials (OID4VC) — [[OpenID Connect]]-based credential issuance and presentation using DIDs.
- **Governance**: The [[World Wide Web Consortium]] maintains the standard; the [[Decentralised Identity Foundation]] (DIF) maintains interoperability test suites, the universal resolver, and DIDComm.
- **Regulatory Alignment**: The EU [[eIDAS 2.0]] regulation mandates European Digital Identity Wallets that are broadly DID-compatible; NIST guidelines on digital identity (SP 800-63) are evolving to accommodate decentralised identity models.
- **Contrast with Legacy Schemes**: Unlike [[X.509 Certificate|X.509 PKI]] where a Certificate Authority controls revocation and issuance, DID subjects control their own keys and rotate them without CA involvement. Unlike [[OAuth2]] or [[OpenID Connect]] identity providers, no third-party provider is required for DID resolution.

### Technical Notes

- DID Documents are serialised as [[JSON-LD]] with the `https://www.w3.org/ns/did/v1` context, ensuring linked-data compatibility and semantic interoperability with other RDF-based knowledge systems.
- Key rotation is a first-class operation: controllers can add, remove, or replace verification methods in the DID Document without changing the DID itself, preserving identifier persistence across credential lifecycle events.
- [[Zero Knowledge Proof]]-friendly credential schemes (e.g. BBS+ signatures using BLS12-381 keys) allow selective disclosure: a holder can prove specific attributes from a credential without revealing the full credential or even the DID, enabling privacy-preserving presentations.
- The `did:peer` and `did:key` methods are particularly relevant for offline-first and airgapped scenarios where blockchain connectivity is unavailable.
- DID method selection involves trade-offs between decentralisation, performance, cost, and trust assumptions — `did:web` is simple but trust depends on DNS/TLS; `did:ion` provides stronger anchoring guarantees at higher resolution latency.

### Current Landscape (2026)

- The W3C Decentralized Identifier Working Group published Decentralized Identifiers (DIDs) v1.1 as a Candidate Recommendation Snapshot on 5 March 2026, revising the v1.0 Recommendation of 19 July 2022 and opening a public comment window that ran until 5 April 2026.
- v1.1 is a refinement rather than a structural overhaul: it consolidates the core media type to `application/did` following IANA registration, adds a v1.1 JSON-LD context (`https://www.w3.org/ns/did/v1.1`), and re-layers the specification on top of the Controlled Identifiers v1.0 Recommendation that W3C published on 15 May 2025.
- DID resolution has been split out into a separate deliverable, with Decentralized Identifier Resolution (DID Resolution) reaching its own Candidate Recommendation Snapshot on 6 August 2026, though the DID URL dereferencing feature is currently flagged as at risk and may be changed or removed.
- To exit Candidate Recommendation the Working Group requires at least two independent, interoperable implementations per machine-testable feature, with full Recommendation not expected before Q1 2027 per the draft charter.
- eIDAS 2.0 entered into force in May 2024 and mandates that every EU member state offer at least one interoperable European Digital Identity Wallet (EUDI Wallet) for free by the end of 2026, with private-sector relying parties (including banks for KYC and payment authentication) required to accept wallets by end 2027, driving demand for standardised decentralised identity.
- The EUDI Architecture and Reference Framework currently centres on W3C Verifiable Credentials and ISO/IEC 18013-5/-7 mdoc formats, and recent analysis (arXiv, December 2025 EDPS TechDispatch) pushes for autonomously wallet-generated DIDs bound to official eIDs to preserve user control alongside PKI-based trust.
- Key contributors remain W3C editors Manu Sporny and Dmitri Zagidulin, alongside vendors such as Sphereon, Northern Block and Spherity active in EU wallet conformance; open challenges include proving cross-method interoperability at scale, resolving the at-risk dereferencing model, and reconciling self-sovereign DID architecture with regulator-favoured centralised trust anchors.

### References

- 1. W3C Decentralized Identifier Working Group (2026). Decentralized Identifiers (DIDs) v1.1, Candidate Recommendation Snapshot. https://www.w3.org/TR/2026/CR-did-1.1-20260305/
- 2. PPC Land (2026). W3C pushes DIDs v1.1 to implementations - and your ad stack may feel it. https://ppc.land/w3c-pushes-dids-v1-1-to-implementations-and-your-ad-stack-may-feel-it/
- 3. W3C Decentralized Identifier Working Group (2026). Decentralized Identifier Resolution (DID Resolution) v1.0, Candidate Recommendation Snapshot. https://www.w3.org/TR/2026/CR-did-resolution-1.0-20260806/
- 4. GS1 (2025). Verifiable Credentials and Decentralised Identifiers: technology landscape. https://ref.gs1.org/docs/2025/VCs-and-DIDs-tech-landscape
- 5. European Data Protection Supervisor (2025). TechDispatch #3/2025 - Digital Identity Wallets. https://www.edps.europa.eu/data-protection/our-work/publications/techdispatch/2025-12-15-techdispatch-32025-digital-identity-wallets_en

### Provenance

