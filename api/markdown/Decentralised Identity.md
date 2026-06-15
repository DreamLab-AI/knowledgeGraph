public:: true
alias:: DecentralisedIdentity

# decentralised identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0b8924b16c594ed18d3fa381d4d9f67282952fb78129b4a88a6f2d0b5e438d6e",
  "@type": "Page",
  "vc:slug": "decentralised-identity",
  "title": "decentralised identity",
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
  "@id": "urn:ngm:class:decentralised-identity",
  "@type": "Class",
  "label": "Decentralised Identity",
  "definition": "Decentralised Identity is a model for digital identity management in which individuals, organisations, and devices create, own, and control their own cryptographic identifiers and verifiable credentials without dependence on centralised identity providers or registries. Identifiers are anchored to a verifiable data registry — typically a blockchain or distributed ledger — as Decentralised Identifiers (DIDs) standardised by the W3C DID Core 1.0 specification, which defines a URI scheme resolving to a DID Document containing public keys and service endpoints. Credentials attesting to attributes of the DID subject are issued by trusted parties as W3C Verifiable Credentials, stored in a user-controlled digital wallet, and selectively disclosed to verifiers using zero-knowledge proofs or selective-disclosure mechanisms. The model operationalises Self-Sovereign Identity principles, giving subjects full autonomy over their identity data across systems and jurisdictions.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-authentication",
        "label": "Privacy-Preserving Authentication"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Cross-Border Digital Identity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:verifiable-data-registry",
        "label": "Verifiable Data Registry"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      },
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-did-specification",
        "label": "W3C DID Specification"
      },
      {
        "@id": "urn:ngm:class:openid-for-verifiable-credentials",
        "label": "OpenID for Verifiable Credentials"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:credential-schema",
        "label": "Credential Schema"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:oauth2",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralized-identity-provider",
        "label": "Centralised Identity Provider"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent-identity",
        "label": "AI Agent Identity"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:open-id-foundation",
        "label": "OpenID Foundation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:self-sovereign-identity",
      "label": "Self Sovereign Identity"
    },
    {
      "@id": "urn:ngm:class:did",
      "label": "DID"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Decentralised Identity is a model for digital identity management that shifts authority away from centralised [[Identity Provider]] services — such as those implementing [[OAuth 2.0]], [[SAML]], or [[OpenID Connect]] — to the identity subjects themselves. Individuals, organisations, and devices create cryptographically controlled identifiers anchored to a [[Verifiable Data Registry]] (typically a [[Blockchain]] or distributed ledger), forming a [[Decentralised Identifier]] (DID) that resolves to a [[DID Document]] containing public keys and service endpoints. [[Verifiable Credentials]] signed by trusted issuers are stored in a [[Digital Identity Wallet]] and presented using selective-disclosure techniques, including [[Zero-Knowledge Proof]] mechanisms, enabling [[Privacy-Preserving Authentication]] without unnecessary data exposure.

- ### Overview
  - **Why it matters**
    - Traditional identity architectures require users to trust platform operators — social login providers, enterprise directories, or government registries — who may revoke access, share data with third parties, or become single points of failure. Decentralised Identity removes this dependency by making the user's own cryptographic key pair the root of trust.
    - The model is foundational to [[Self-Sovereign Identity]] (SSI), a philosophy articulated by Christopher Allen (2016) asserting that individuals must control their own identities without surrendering authority to external intermediaries.
    - Regulatory alignment: the EU [[eIDAS 2.0]] regulation mandates interoperable digital identity wallets for all EU member states, directly referencing W3C DID and Verifiable Credential infrastructure. The UK [[Digital Identity and Attributes Trust Framework]] (DIATF) pursues a similar goal.
  - **How it works**
    - A DID is a URI of the form `did:<method>:<method-specific-id>` that resolves — via a DID resolver — to a [[DID Document]] specifying the controller's public keys, authentication methods, and service endpoints.
    - A [[DID Method]] defines the protocol for creating, reading, updating, and deactivating a DID on a particular [[Verifiable Data Registry]]. Methods include `did:key` (self-certifying, no ledger), `did:web` (DNS-anchored), `did:ethr` (Ethereum), `did:ion` (Bitcoin Sidetree), and `did:cheqd`.
    - [[Credential Schema]] standards define the structure of claims; an issuer signs a credential as a JSON-LD or JWT document and delivers it to the holder's [[Digital Identity Wallet]]. The holder assembles a [[Verifiable Presentation]] for a verifier, optionally applying BBS+ signatures or [[Zero-Knowledge Proof]] techniques for selective disclosure.

- ### Key Components
  - **Decentralised Identifiers (DIDs)**
    - Globally unique, resolvable URIs under W3C DID Core 1.0 (Recommendation, July 2022)
    - Self-describing: the method segment identifies the resolution protocol
    - Controller-authorised: key rotation and deactivation are signed by the current controlling key pair
    - Related: [[DID Document]], [[DID Method]], [[DID Resolver]]
  - **Verifiable Credentials (VCs)**
    - JSON-LD or JWT-encoded claim sets signed by an issuer's DID keys
    - Follow the W3C Verifiable Credentials Data Model 2.0 specification
    - Cryptographic proofs enable offline verification without querying the issuer
    - Related: [[Credential Schema]], [[Verifiable Presentation]], [[Credential Revocation]]
  - **Digital Identity Wallet**
    - Secure software (or hardware) store for private keys, DIDs, and received credentials
    - Implements [[OpenID for Verifiable Credentials]] (OID4VC) for issuance (OID4VCI) and presentation (OID4VP) flows
    - May interoperate with [[FIDO2]] / [[WebAuthn]] for device-bound authentication
    - Related: [[Key Management]], [[Secure Enclave]], [[Mobile Device]]
  - **Verifiable Data Registry**
    - The anchoring layer — a [[Blockchain]], distributed ledger, or web server — from which DID Documents are resolvable
    - Must provide persistence and tamper-evidence without disclosing identity data itself (privacy by design)
    - Related: [[Distributed Ledger]], [[Blockchain]], [[IPFS]]
  - **Zero-Knowledge Proofs and Selective Disclosure**
    - Allow holders to prove properties of credentials (e.g., "over 18") without revealing the full credential or a correlatable identifier
    - Implemented via BBS+ signatures, [[SD-JWT]] (Selective Disclosure JWT), or [[Pedersen Commitment]] schemes
    - Related: [[Zero-Knowledge Proof]], [[Cryptography]], [[Privacy-Enhancing Technology]]
  - **DID Methods**
    - Each method is a mini-specification defining CRUD operations on a specific registry
    - `did:key` — ephemeral, key material is the identifier; `did:web` — web-hosted DID Documents; `did:ethr` — Ethereum smart contract registry; `did:ion` — Bitcoin Sidetree overlay; `did:cheqd` — Cosmos SDK ledger with credential economics
    - Method maturity varies: `did:key` and `did:web` are widely deployed; `did:ion` is production-grade on Bitcoin mainnet

- ### Applications and Use Cases
  - **Workforce and Enterprise Identity**
    - Employees hold cryptographically signed employment credentials in a corporate wallet, presenting them to internal systems and third-party partners without an enterprise IdP in the critical path
    - Reduces dependency on [[Active Directory]] and centralised [[Single Sign-On]] infrastructure
  - **Educational Credentials**
    - Universities issue digitally signed degree and transcript credentials (ISO/IEC 23220, [[Europass Digital Credentials]], [[Open Badges]] v3)
    - Graduates present verified academic records to employers directly, eliminating manual transcript requests
  - **Healthcare**
    - Patients hold portable health records and consent tokens; clinicians verify credentials without accessing a centralised EHR system
    - Supports [[FHIR]]-aligned credential schemas for interoperability
  - **Government and Civil Identity**
    - [[eIDAS 2.0]] mandates EU Digital Identity Wallets for all member states by 2026, enabling cross-border recognition of national identities and professional qualifications
    - The [[EUDI Wallet]] Architecture and Reference Framework (ARF) specifies technical requirements
  - **Supply Chain Provenance**
    - Products and shipments receive DIDs; provenance credentials flow between suppliers, logistics providers, and retailers without centralised platform intermediaries
    - Aligns with [[GS1]] Digital Link standards
  - **AI Agent Authentication**
    - Autonomous [[AI Agent]] entities can hold DIDs and present verifiable credentials to access APIs, proving authorisation without hard-coded API keys
    - Bridges [[Decentralised Identity]] into AI infrastructure — a key cross-domain application

- ### Relationships
  - uses:: [[Verifiable Credentials]]
  - uses:: [[DID Document]]
  - uses:: [[Digital Identity Wallet]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Public Key Cryptography]]
  - enables:: [[Self-Sovereign Identity]]
  - enables:: [[Selective Disclosure]]
  - enables:: [[Privacy-Preserving Authentication]]
  - enables:: [[Cross-Border Digital Identity]]
  - requires:: [[Verifiable Data Registry]]
  - requires:: [[Cryptographic Key Management]]
  - requires:: [[DID Method]]
  - implements:: [[W3C DID Specification]]
  - implements:: [[OpenID for Verifiable Credentials]]
  - relatedTo:: [[Credential Schema]]
  - relatedTo:: [[Federated Identity]]
  - relatedTo:: [[OAuth 2.0]]
  - relatedTo:: [[Trust Framework]]
  - contrastsWith:: [[Centralised Identity Provider]]
  - contrastsWith:: [[Federated Identity]]
  - bridges-to:: [[AI Agent Identity]]
  - bridges-to:: [[Access Control]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[OpenID Foundation]]

- ### Standards and Context
  - **W3C DID Core 1.0** (July 2022) — defines the DID URI scheme, DID Document structure, and abstract DID Resolution protocol
  - **W3C Verifiable Credentials Data Model 2.0** — defines the credential and presentation envelope, proof mechanisms, and status methods
  - **OpenID for Verifiable Credentials (OID4VC)** — profiles of [[OAuth 2.0]] and [[OpenID Connect]] for VC issuance (OID4VCI), presentation (OID4VP), and self-issued identity (SIOPv2)
  - **SD-JWT** (IETF draft) — a compact format enabling selective disclosure of individual credential claims using hash-based disclosure commitments
  - **ISO/IEC 18013-5** — mobile driving licence (mDL) standard; the first mainstream government DID-adjacent credential deployed at scale
  - **eIDAS 2.0** (EU Regulation 2024/1183) — mandates EU Digital Identity Wallets, references W3C VC and DID for technical layer
  - **DIATF** (UK Digital Identity and Attributes Trust Framework) — certifies identity service providers against assurance levels
  - **Trust over IP (ToIP) Foundation** — cross-industry consortium defining a four-layer trust stack combining DIDs, VCs, governance frameworks, and utility layers
  - **Decentralised Identity Foundation (DIF)** — produces interoperability specifications including DIDComm, Presentation Exchange, and Credential Manifest
  - **OpenWallet Foundation** — Linux Foundation project standardising open-source wallet engine components

- ### Provenance
  - sources:: W3C DID Core 1.0 Specification; W3C Verifiable Credentials Data Model 2.0; OpenID for Verifiable Credentials specifications; EU eIDAS 2.0 Regulation; Trust over IP Foundation architecture documents; Decentralised Identity Foundation specifications
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
