public:: true

# w3c did core
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b98f8c0d25a0f956266eb4aae7baa008e131326e9aa05a988ecc1e006191b1eb",
  "@type": "Page",
  "vc:slug": "w3-c-did-core",
  "title": "w3c did core",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:w3-c-did-core",
  "@type": "Class",
  "label": "W3C DID Core",
  "definition": "W3C DID Core is the World Wide Web Consortium Recommendation (published July 2022) defining Decentralised Identifiers (DIDs) — globally unique, controller-owned URIs of the form did:<method>:<method-specific-id> that are cryptographically verifiable and resolvable without a centralised registration authority. Each DID resolves to a JSON-LD DID Document containing verification methods (public keys), authentication suites, and service endpoints. The specification is method-agnostic, accommodating distributed ledgers, peer-to-peer networks, and web servers as verifiable data registries, and forms the identity layer of the broader Self-Sovereign Identity and Verifiable Credentials ecosystem.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-identity",
      "label": "Decentralised Identity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:did-resolver",
        "label": "DID Resolver"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      },
      {
        "@id": "urn:ngm:class:verification-method",
        "label": "Verification Method"
      },
      {
        "@id": "urn:ngm:class:service-endpoint",
        "label": "Service Endpoint"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:uri-scheme",
        "label": "URI Scheme"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:credential-exchange",
        "label": "Credential Exchange"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:world-wide-web-consortium",
        "label": "World Wide Web Consortium"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      },
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth2"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:ai-agent-identity",
        "label": "AI Agent Identity"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sidetree-protocol",
        "label": "Sidetree Protocol"
      },
      {
        "@id": "urn:ngm:class:linked-data-proofs",
        "label": "Linked Data Proofs"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:decentralised-identifiers",
      "label": "Decentralised Identifiers"
    },
    {
      "@id": "urn:ngm:class:did-specification",
      "label": "DID Specification"
    }
  ],
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - W3C DID Core is the [[World Wide Web Consortium]] Recommendation (July 2022) establishing the data model and syntax for [[Decentralised Identifiers]] — globally unique, controller-owned URIs that are cryptographically verifiable and resolvable without reliance on any centralised registration authority. DIDs take the form `did:<method>:<method-specific-id>` and resolve to [[DID Document]] objects expressed in [[JSON-LD]], containing public keys, authentication suites, and service endpoints. The specification is the identity-layer foundation for [[Self-Sovereign Identity]], [[Verifiable Credentials]], and interoperable [[Digital Identity]] across decentralised systems.

- ### Overview
  - W3C DID Core addresses a fundamental limitation of traditional internet identity: most identifier schemes (email addresses, usernames, [[X.509 Certificate]] Subject Names) are controlled by a third party — the issuing organisation or registrar. If that party disappears or revokes access, the identifier is lost. DIDs shift control to the DID subject (the individual, organisation, or device), who generates their own identifier anchored in a verifiable data registry of their choosing.
  - The specification was developed by the W3C Decentralised Identifier Working Group, building on earlier work by the [[Decentralised Identity Foundation]] and the W3C Credentials Community Group. It became a formal W3C Recommendation in July 2022, achieving the highest level of W3C standardisation.
  - The architecture separates three distinct concerns:
    - The **identifier** itself (the DID URI), which is permanent and globally unique.
    - The **DID Document** (the data retrieved when the DID is resolved), which can be updated by the controller.
    - The **DID Method**, which specifies the protocol for creating, reading, updating, and deactivating DIDs on a particular verifiable data registry.
  - This separation means the same identifier format can be used regardless of the underlying infrastructure — a blockchain, a web server, or a peer-to-peer network — while remaining interoperable through a common resolution interface.

- ### Key Components
  - #### DID Syntax and Structure
    - A DID is a URI: `did:<method>:<method-specific-id>` where the method designates the DID Method driver.
    - The method-specific-id is generated according to the chosen [[DID Method]] (e.g. a hash of a public key, a blockchain transaction ID, or a domain name).
    - DIDs are persistent and, by design, globally resolvable without a central directory.
  - #### DID Document
    - The [[DID Document]] is a JSON-LD data structure retrieved by resolving a DID through a [[DID Resolver]].
    - Contains one or more **verification methods** (typically [[Public Key Cryptography|public keys]]) expressed in formats such as Ed25519VerificationKey2020, EcdsaSecp256k1VerificationKey2019, or JsonWebKey2020.
    - Contains **verification relationships** that designate which keys are authorised for specific purposes: `authentication`, `assertionMethod`, `keyAgreement`, `capabilityInvocation`, `capabilityDelegation`.
    - Optionally contains **service endpoints** pointing to DID-linked services such as credential exchange endpoints, messaging endpoints, or linked data stores.
  - #### DID Methods
    - A [[DID Method]] specification defines the CRUD lifecycle operations for a specific verifiable data registry.
    - Notable methods include:
      - `did:web` — resolution via HTTPS at a domain; simplest deployment, no blockchain needed.
      - `did:key` — self-contained, single-key DIDs with no external registry; derived entirely from a public key.
      - `did:ethr` — anchored on [[Ethereum]] via the ERC-1056 registry contract.
      - `did:ion` — anchored on [[Bitcoin]] via the [[Sidetree Protocol]] (used by Microsoft).
      - `did:peer` — pairwise, offline-first DIDs designed for direct agent-to-agent communication.
      - `did:jwk` — encodes a JWK public key directly in the DID, similar to `did:key` but using JSON Web Keys.
    - The W3C DID Specification Registries maintains a growing catalogue of registered DID methods.
  - #### DID Resolution
    - A [[DID Resolver]] accepts a DID and returns a DID Resolution Result comprising the DID Document, Document Metadata, and Resolution Metadata.
    - Resolution is method-specific; a universal resolver (maintained by the Decentralised Identity Foundation) dispatches to per-method drivers.
    - DID URL dereferencing extends resolution to address specific resources within or linked from a DID Document using paths, queries, and fragments.
  - #### Verification Methods and Cryptographic Suites
    - [[Verification Method]] entries bind a DID to [[Elliptic Curve Cryptography|cryptographic material]].
    - [[Linked Data Proofs]] and JSON Web Signatures (JWS) are the primary proof mechanisms used alongside DID Documents.
    - [[Cryptographic Signature]] types vary by method: Ed25519, secp256k1, BLS12-381 (for [[Zero Knowledge Proof|ZKP-friendly]] credentials).

- ### Applications and Use Cases
  - #### Self-Sovereign Identity and Digital Wallets
    - DIDs are the subject identifiers in [[Self-Sovereign Identity]] architectures, allowing individuals to own and control their digital identity without reliance on Google, Facebook, or government databases.
    - [[Digital Identity Wallet]] applications (e.g. Microsoft Entra Verified ID, Lissi, Sphereon) store DIDs and associated [[Verifiable Credentials]], enabling portable, privacy-preserving credential presentation.
  - #### Verifiable Credentials Ecosystem
    - The W3C VC Data Model (W3C Verifiable Credentials) uses DIDs as the `id` of issuers, holders, and subjects. A credential issuer signs claims about a subject's DID; a verifier resolves the issuer's DID Document to verify the [[Cryptographic Signature]].
    - This underpins educational credentialing (Open Badges v3, Europass Digital Credentials), professional licensing, and healthcare record portability.
  - #### Enterprise and Government Identity
    - National digital identity schemes (EU eIDAS 2.0 European Digital Identity Wallet) are incorporating DID-compatible architectures.
    - Enterprise use: supply-chain provenance (tracking goods with DID-identified actors), B2B authentication, and regulated industry KYC.
  - #### IoT and Machine Identity
    - [[Internet of Things]] devices can be assigned DIDs, enabling cryptographically verifiable device identity without a centralised CA.
    - Enables secure firmware attestation, autonomous device-to-device authentication, and delegated access control.
  - #### AI Agent Identity
    - [[AI Agent Identity]] is an emerging application: autonomous AI agents issued DIDs can cryptographically authenticate themselves to services, maintain auditable action histories, and receive delegated capabilities via UCAN or Capability Delegation mechanisms.
    - Relevant for [[Federated Learning]] environments where participating nodes need verified identity without revealing model weights.
  - #### Decentralised Web and Credential Exchange
    - [[Credential Exchange]] protocols (OpenID for Verifiable Credentials — OID4VC, DIDComm v2, Presentation Exchange) rely on DIDs as stable identifiers throughout the presentation flow.
    - [[Access Control]] policies can reference DIDs directly, enabling attribute-based access control without centralised user directories.

- ### Relationships
  - enables:: [[Self Sovereign Identity]]
  - enables:: [[Verifiable Credentials]]
  - enables:: [[Digital Identity Wallet]]
  - enables:: [[Zero Knowledge Proof]]
  - requires:: [[Public Key Cryptography]]
  - requires:: [[Cryptographic Signature]]
  - requires:: [[DID Resolver]]
  - hasPart:: [[DID Document]]
  - hasPart:: [[DID Method]]
  - hasPart:: [[Verification Method]]
  - hasPart:: [[Service Endpoint]]
  - implements:: [[Self Sovereign Identity]]
  - implements:: [[URI Scheme]]
  - uses:: [[JSON-LD]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Distributed Ledger Technology]]
  - supports:: [[Credential Exchange]]
  - supports:: [[Digital Identity]]
  - supports:: [[Access Control]]
  - standardizedBy:: [[World Wide Web Consortium]]
  - contrastsWith:: [[X.509 Certificate]]
  - contrastsWith:: [[OAuth2]]
  - contrastsWith:: [[OpenID Connect]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[AI Agent Identity]]
  - bridges-to:: [[Internet of Things]]
  - relatedTo:: [[Sidetree Protocol]]
  - relatedTo:: [[Linked Data Proofs]]
  - relatedTo:: [[Decentralised Identity Foundation]]

- ### Standards and Context
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

- ### Technical Notes
  - DID Documents are serialised as [[JSON-LD]] with the `https://www.w3.org/ns/did/v1` context, ensuring linked-data compatibility and semantic interoperability with other RDF-based knowledge systems.
  - Key rotation is a first-class operation: controllers can add, remove, or replace verification methods in the DID Document without changing the DID itself, preserving identifier persistence across credential lifecycle events.
  - [[Zero Knowledge Proof]]-friendly credential schemes (e.g. BBS+ signatures using BLS12-381 keys) allow selective disclosure: a holder can prove specific attributes from a credential without revealing the full credential or even the DID, enabling privacy-preserving presentations.
  - The `did:peer` and `did:key` methods are particularly relevant for offline-first and airgapped scenarios where blockchain connectivity is unavailable.
  - DID method selection involves trade-offs between decentralisation, performance, cost, and trust assumptions — `did:web` is simple but trust depends on DNS/TLS; `did:ion` provides stronger anchoring guarantees at higher resolution latency.

- ### Provenance
  - sources:: W3C DID Core 1.0 Recommendation (2022-07-19), W3C Verifiable Credentials Data Model, DIF Universal Resolver documentation, W3C DID Specification Registries
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
