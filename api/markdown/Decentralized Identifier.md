public:: true

# Decentralized Identifier
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:034040b2233a234685f3e943a26b9f34dbd7dff4aaa84008c34721e0421cd442",
  "@type": "Page",
  "vc:slug": "decentralized-identifier",
  "title": "Decentralized Identifier",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:did-resolution",
      "vc:label": "DID Resolution"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:centralized-identity-provider",
      "vc:label": "Centralized Identity Provider"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Decentralized Identifier"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralized-identifier",
  "@type": "Class",
  "label": "Decentralized Identifier",
  "definition": "A Decentralised Identifier (DID) is a globally unique, persistent, cryptographically verifiable identifier that a subject creates and controls without reliance on any centralised registry, authority, or intermediary. Defined by the W3C DID Core specification, a DID is a URI of the form did:method:identifier that resolves to a DID Document containing public keys, authentication mechanisms, and service endpoints. DIDs enable self-sovereign identity by decoupling identifier ownership from third-party identity providers, allowing verifiable credential exchange and privacy-preserving authentication across heterogeneous systems.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:did-resolution",
        "label": "DID Resolution"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:decentralized-authentication",
        "label": "Decentralized Authentication"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-did-core",
        "label": "W3C DID Core"
      },
      {
        "@id": "urn:ngm:class:uri",
        "label": "URI"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-key-pair",
        "label": "Cryptographic Key Pair"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-authentication",
        "label": "Privacy-Preserving Authentication"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralized-identity-provider",
        "label": "Centralized Identity Provider"
      },
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:verifiable-data-registry",
        "label": "Verifiable Data Registry"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:did",
      "label": "DID"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:decentralized-identifier:80ebcd1f14a4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:034040b2233a234685f3e943a26b9f34dbd7dff4aaa84008c34721e0421cd442"
  },
  "vc:resolutions": [
    {
      "raw": "[[DID Resolution]]",
      "resolved": "urn:visionflow:linked:did-resolution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Centralized Identity Provider]]",
      "resolved": "urn:visionflow:linked:centralized-identity-provider",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A Decentralised Identifier (DID) is a globally unique, persistent, cryptographically verifiable identifier for any subject — person, organisation, device, or abstract entity — that its controller creates and manages independently of any [[Centralized Identity Provider]] or registry. Governed by the W3C DID Core specification, a DID takes the URI form `did:method:identifier` and resolves to a [[DID Document]] that exposes [[Public Key Cryptography]] material, authentication methods, and service endpoints. DIDs are foundational to [[Self-Sovereign Identity]], enabling decentralised trust relationships and privacy-respecting exchange of [[Verifiable Credential]]s without intermediary dependence.

- ### Overview
  - DIDs emerge from the recognition that conventional [[Digital Identity]] systems — based on [[OAuth]], usernames, or certificates from a [[Certificate Authority]] — create tight dependencies on third-party identity providers that can revoke access, suffer breaches, or be subject to governmental pressure.
  - A DID separates the act of *identifier creation* (done by the controller) from *identifier verification* (done by any relying party using public cryptography), so no single organisation can unilaterally invalidate a subject's identifier.
  - The W3C formalised the DID Core specification (v1.0) in 2022, establishing a universal data model and resolution protocol. Over 100 DID methods have been registered with the DIF (Decentralised Identity Foundation), each specifying how DIDs are anchored and resolved on a particular [[Verifiable Data Registry]].
  - DIDs are intentionally media-agnostic: a method may anchor an identifier on a [[Blockchain]], an IPFS content-addressed store, a [[Distributed Ledger Technology]], a simple HTTPS server, or even a peer-to-peer channel — the method spec defines the rules.

- ### Key Components
  - **DID Syntax** — the three-part URI `did:<method>:<method-specific-id>`, e.g. `did:web:example.com` or `did:key:z6Mkk…`. The method prefix selects the resolution algorithm.
  - **[[DID Document]]** — the JSON-LD resource returned by [[DID Resolution]]; contains:
    - `id` — the DID itself
    - `verificationMethod` — one or more [[Cryptographic Key Pair]]s (Ed25519, secp256k1, P-256, etc.)
    - `authentication`, `assertionMethod`, `keyAgreement`, `capabilityInvocation`, `capabilityDelegation` — verification relationships linking methods to purposes
    - `service` — endpoints for [[Verifiable Credential]] exchange, [[DID Communication]], or domain-specific interactions
  - **[[DID Method]]** — a named specification (did:web, did:key, did:ion, did:ethr, did:peer, etc.) that defines create/read/update/deactivate (CRUD) operations and how the DID anchors to a [[Verifiable Data Registry]].
  - **[[DID Resolution]]** — the algorithm that takes a DID and returns a DID Document plus metadata; implemented by a DID resolver library or service. Resolution is the analogue of DNS lookup for DIDs.
  - **Controller** — the entity that holds the private keys and may update or deactivate the DID Document; may differ from the DID subject.
  - **[[Digital Signature]]** — all DID Document updates and [[Verifiable Credential]] proofs are signed with the keys listed in the DID Document, providing cryptographic integrity.

- ### DID Methods in Common Use
  - **did:web** — anchors the DID Document at a well-known HTTPS URL; simplest method, suitable for organisations that already control a domain.
  - **did:key** — self-contained; the identifier encodes the public key directly; no registry needed; ideal for ephemeral or peer-to-peer contexts.
  - **did:ion** — uses the Bitcoin [[Blockchain]] via the Sidetree protocol; highly censorship-resistant; developed by Microsoft.
  - **did:ethr** — anchors on [[Ethereum]] using a smart contract; supports key rotation with on-chain events.
  - **did:peer** — off-ledger peer-to-peer DIDs exchanged directly between agents; zero network cost; used extensively in [[DID Communication]] (DIDComm).
  - **did:jwk** — encodes a JSON Web Key directly as the DID; compact and interoperable with [[JSON Web Token]] ecosystems.

- ### Applications and Use Cases
  - **[[Self-Sovereign Identity]] wallets** — mobile apps (e.g. Lissi, Trinsic, Evernym) hold DIDs and sign credential presentations without contacting an identity provider.
  - **[[Verifiable Credential]] ecosystems** — issuers (universities, governments, employers) cryptographically bind credentials to a holder's DID; verifiers confirm authenticity without calling the issuer. Frameworks: W3C VC Data Model, EU EUDI Wallet.
  - **[[Decentralized Authentication]]** — protocols such as OIDC4VP (OpenID Connect for Verifiable Presentations) and Sign-In with Ethereum use DIDs as login identifiers, replacing password-based flows.
  - **IoT and device identity** — devices carry DIDs in firmware; [[Access Control]] decisions rely on cryptographic proof rather than shared secrets or centralised device registries.
  - **[[Supply Chain]] provenance** — products and shipments carry DIDs; each supply-chain participant can attest to state transitions with signed credentials anchored to entity DIDs.
  - **Healthcare records** — patients hold DIDs to selectively disclose medical data to providers, respecting GDPR and HIPAA constraints.
  - **Metaverse and [[Spatial Computing]]** — persistent cross-platform avatars and asset ownership anchored to user-controlled DIDs rather than platform accounts; bridges to [[NFT]] ownership.
  - **Machine-to-machine trust** — autonomous agents in multi-agent AI systems authenticate via DID-based credentials without centralised broker; relevant to emerging [[Agentic AI]] architectures.

- ### Relationships
  - subClassOf:: [[Digital Identity]]
  - requires:: [[DID Resolution]]
  - requires:: [[Public Key Cryptography]]
  - requires:: [[DID Document]]
  - enables:: [[Identity Management]]
  - enables:: [[Self-Sovereign Identity]]
  - enables:: [[Verifiable Credential]]
  - enables:: [[Decentralized Authentication]]
  - implements:: [[W3C DID Core]]
  - implements:: [[URI]]
  - uses:: [[Cryptographic Key Pair]]
  - uses:: [[Digital Signature]]
  - uses:: [[DID Method]]
  - supports:: [[Zero-Knowledge Proof]]
  - supports:: [[Privacy-Preserving Authentication]]
  - standardizedBy:: [[W3C]]
  - contrastsWith:: [[Centralized Identity Provider]]
  - contrastsWith:: [[OAuth]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Distributed Ledger Technology]]
  - bridges-to:: [[Smart Contract]]
  - relatedTo:: [[Verifiable Data Registry]]
  - relatedTo:: [[Public Key Infrastructure]]
  - relatedTo:: [[Access Control]]

- ### Standards and Governance Context
  - **W3C DID Core 1.0** (July 2022) — normative specification for syntax, data model, and abstract resolution algorithm. Companion spec: DID Resolution (W3C Working Group Note).
  - **W3C Verifiable Credentials Data Model 2.0** — specifies how credentials reference issuer and holder DIDs; tightly coupled with DID ecosystems.
  - **DIF (Decentralised Identity Foundation)** — industry consortium maintaining DID method registry, DIDComm v2 protocol, and Presentation Exchange spec; members include Microsoft, IBM, Consensys, and others.
  - **IETF** — RFC 8785 (JCS), RFC 7517 (JWK), RFC 7519 (JWT) provide cryptographic primitives used across DID implementations.
  - **EU eIDAS 2.0 / EUDI Wallet** — European regulation mandating interoperable digital identity wallets for all EU member-state citizens; DID/VC stack is a primary candidate architecture.
  - **NIST SP 800-63** — US digital identity guidelines; emerging revisions acknowledge DID-based identity assurance levels.
  - **OpenID Foundation — OIDC4VC** — working group specifying OpenID Connect extensions for issuing and verifying DID-anchored credentials, enabling interoperability with existing OAuth/OIDC infrastructure.

- ### Security Considerations
  - **Key management** is the critical vulnerability: loss of private keys means loss of DID control; rotation requires a live DID Document update before key compromise.
  - **[[Blockchain]] finality and cost** vary by method; some methods (did:ethr) incur gas costs for every key rotation, creating practical barriers.
  - **Correlation risk** — reusing the same DID across contexts enables tracking; mitigated by pairwise DIDs (unique DID per relationship) and [[Zero-Knowledge Proof]] presentations.
  - **Resolver trust** — a DID resolver mediating resolution for a client could lie; clients should either run their own resolver or verify resolver responses cryptographically.
  - **DID Document integrity** — clients must verify that the returned document is correctly signed or anchored to the registry; unsigned HTTPS-served DID Documents (did:web) inherit the security of TLS and DNS.

- ### Provenance
  - sources:: W3C DID Core 1.0 (2022), DIF DID Method Registry, IETF RFCs 7517/7519/8785, EU eIDAS 2.0 regulation, OpenID Foundation OIDC4VC working group
  - updated:: 2026-06-13
