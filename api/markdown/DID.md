public:: true

# DID
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:94b6a05674191914671c888525fb53c2c8adcba5db167ef98db7aeb253c9dbce",
  "@type": "Page",
  "vc:slug": "did",
  "title": "DID",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:public-key",
      "vc:label": "Public Key"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-credentials",
      "vc:label": "Verifiable Credentials"
    },
    {
      "@id": "urn:visionflow:linked:self-sovereign-identity",
      "vc:label": "Self Sovereign Identity"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-identifiers",
      "vc:label": "Decentralized Identifiers"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DID"
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
  "@id": "urn:ngm:class:did",
  "@type": "Class",
  "label": "DID",
  "definition": "A decentralised identifier, a type of globally unique identifier that enables verifiable, self-sovereign digital identity without reliance on a central registry.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:self-sovereign-identity",
      "label": "Self Sovereign Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:public-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:did-resolver",
        "label": "DID Resolver"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:key-agreement",
        "label": "Key Agreement"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-did-core",
        "label": "W3C DID Core"
      },
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-authentication",
        "label": "Privacy Preserving Authentication"
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
        "label": "Centralized Identity"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifiers",
        "label": "Decentralized Identifiers"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      },
      {
        "@id": "urn:ngm:class:trust-registry",
        "label": "Trust Registry"
      },
      {
        "@id": "urn:ngm:class:service-endpoint",
        "label": "Service Endpoint"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:decentralized-identifier",
      "label": "Decentralized Identifier"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:did:75ca3ca2ece2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:94b6a05674191914671c888525fb53c2c8adcba5db167ef98db7aeb253c9dbce"
  },
  "vc:resolutions": [
    {
      "raw": "[[Public Key]]",
      "resolved": "urn:visionflow:linked:public-key",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Credentials]]",
      "resolved": "urn:visionflow:linked:verifiable-credentials",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self Sovereign Identity]]",
      "resolved": "urn:visionflow:linked:self-sovereign-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Identifiers]]",
      "resolved": "urn:visionflow:linked:decentralized-identifiers",
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
  - A decentralised identifier, a type of globally unique identifier that enables verifiable, self-sovereign digital identity without reliance on a central registry.

- ### Semantic Classification
  - owl-class:: cryptographic:DID
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Self Sovereign Identity]]
  - bridges-to:: [[Decentralized Identifiers]]
  - requires:: [[Public Key]], [[Cryptography]]
  - enables:: [[Verifiable Credentials]], [[Self Sovereign Identity]]

- ### Content
  - A decentralised identifier is a persistent identifier that a subject controls independently of any centralised authority. It resolves to a document containing the public keys and service endpoints needed to interact with the subject cryptographically.
  - Decentralised identifiers underpin self-sovereign identity models and are commonly used alongside verifiable credentials. They are defined by a World Wide Web Consortium specification that establishes a syntax and a resolution mechanism across multiple methods.

- ### Current Landscape (2026)
  - The W3C Decentralised Identifier Working Group, re-chartered in April 2024 (running to October 2026), advanced DID Core beyond the 2022 v1.0 Recommendation: a First Public Working Draft of DIDs v1.1 was published in January 2025 and reached Candidate Recommendation on 5 March 2026, not expected to become a full Recommendation before April 2026.
  - The did:tdw method was renamed did:webvh ("did:web + Verifiable History") in January 2025, with v0.5 released that month and v1.0 following on 23 January 2025; it extends did:web with a self-certifying identifier (SCID), a verifiable update history, optional pre-rotation keys and witness approval, and has reference implementations underway in Python, TypeScript, Rust and Go.
  - Regulatory demand became the dominant driver: the EU's revised eIDAS (Regulation (EU) 2024/1183) entered into force on 20 May 2024, mandating every Member State to offer a European Digital Identity (EUDI) Wallet by the end of 2026, with private-sector acceptance in regulated sectors from 2027.
  - The POTENTIAL Large-Scale Pilot concluded on 29 September 2025, having validated cross-border wallet use across 19 Member States and Ukraine (over 1,000 successful transactions, 249 cross-border); the EUDI Architecture Reference Framework reached v2.6.0 in October 2025 and the Brussels EUDI Wallets Launchpad in December 2025 demonstrated cross-Member-State conformance.
  - The wider stack matured around DIDs: the W3C Verifiable Credentials Data Model 2.0 reached Recommendation status in May 2025, and the interoperability baseline has converged on OpenID4VCI/OpenID4VP, IETF SD-JWT VC and ISO/IEC 18013-5 mdoc as the common credential and protocol layer.
  - Key players and methods span did:web (production-ready but not recommended for mature use), did:ebsi (EU/EBSI, aligned with eIDAS), KERI-based did:webs and the new did:webvh for blockchain-free self-certifying identifiers, plus vendors such as Sphereon, Northern Block and Spherity supplying EUDI-conformant tooling.
  - Open challenges as of 2026: no single DID method dominates and KERI-inspired methods remain immature and not yet broadly interoperable; the EU ARF leans on SD-JWT VC and mdoc rather than mandating DIDs, raising questions about DID Core's role; and privacy properties such as unlinkability, key-management security and scalable revocation remain active work items ahead of the December 2026 wallet-issuance deadline.

- ### References
  - 1. W3C Decentralized Identifier Working Group (2026). Decentralized Identifiers (DIDs) v1.1 (Candidate Recommendation Snapshot). https://www.w3.org/TR/did-1.1/
  - 2. Decentralized Identity Foundation (2025). The did:webvh DID Method — did:web + Verifiable History, v1.0. https://identity.foundation/didwebvh/
  - 3. W3C public-credentials list (2025). Announcing v0.5 of the did:webvh (formerly did:tdw) DID Method Specification. https://lists.w3.org/Archives/Public/public-credentials/2025Jan/0009.html
  - 4. European Commission (2026). European Digital Identity (EUDI) Regulation. https://digital-strategy.ec.europa.eu/en/policies/eudi-regulation
  - 5. POTENTIAL Consortium (2025). POTENTIAL Pilot Concludes, Setting the Stage for the EUDI Wallet (final press release, 29 September 2025). https://www.digital-identity-wallet.eu/wp-content/uploads/2025/10/Potential-Final-Press-Release.docx.pdf
  - 6. GS1 (2025). Verifiable Credentials and Decentralised Identifiers — Technology Landscape. https://ref.gs1.org/docs/2025/VCs-and-DIDs-tech-landscape

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
