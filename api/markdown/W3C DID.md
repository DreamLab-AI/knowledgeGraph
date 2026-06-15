public:: true

# W3C DID
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:w3-c-did",
  "@type": "Page",
  "vc:slug": "w3-c-did",
  "title": "W3C DID",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:w3-c-did",
  "@type": "Class",
  "label": "W3C DID",
  "definition": "W3C DID (Decentralised Identifier) is a W3C Recommendation standard (published July 2022) that defines a new type of globally unique, persistent, and cryptographically verifiable identifier that does not require a centralised registration authority. A DID resolves to a DID Document — a JSON-LD data structure containing public keys, authentication mechanisms, and service endpoints — enabling the DID subject to prove control and establish secure communication without depending on a third-party identity provider. DIDs are the foundational primitive for self-sovereign identity systems.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:w3-c-did-core",
      "label": "W3C DID Core"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifiers",
        "label": "Decentralized Identifiers"
      },
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      },
      {
        "@id": "urn:ngm:class:did-resolver",
        "label": "DID Resolver"
      },
      {
        "@id": "urn:ngm:class:verification-method",
        "label": "Verification Method"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:verifiable-data-registry",
        "label": "Verifiable Data Registry"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-trust",
        "label": "Decentralised Trust"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:digital-identity-management",
        "label": "Digital Identity Management"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-verifiable-credentials",
        "label": "W3C Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:trust-over-ip-stack",
        "label": "Trust over IP Stack"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:uri",
        "label": "URI"
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
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:oauth2",
        "label": "OAuth2"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:eu-digital-identity-wallet",
        "label": "EU Digital Identity Wallet"
      },
      {
        "@id": "urn:ngm:class:openid4vc",
        "label": "OpenID4VC"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:sidetree-protocol",
        "label": "Sidetree Protocol"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:decentralized-identifier",
      "label": "Decentralized Identifier"
    },
    {
      "@id": "urn:ngm:class:did-core",
      "label": "DID Core"
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

- ### Definition
  - W3C DID is a W3C Recommendation defining a globally unique, self-sovereign identifier that resolves to a [[DID Document]] containing cryptographic material — enabling [[Authentication]] and [[Decentralised Trust]] without centralised identity infrastructure — forming the foundational layer of the [[Trust over IP Stack]] and [[W3C Verifiable Credentials]] ecosystem.

- ### Relationships
  - W3C DID sits at the foundation of [[Decentralized Identity]] architecture: each DID is a URI that resolves via a DID method-specific resolver to a [[DID Document]] containing public keys and service endpoints. DIDs compose with [[W3C Verifiable Credentials]] (the credential holder's DID is the credential subject identifier), enabling privacy-preserving [[Authentication]] and [[Digital Identity Management]] without reliance on federated [[Public Key Infrastructure]]. The [[Trust over IP Stack]] designates DIDs as its Layer 1-2 identifier primitive. Multiple DID methods exist — `did:web` (HTTP-hosted), `did:key` (self-describing), `did:ion` (Bitcoin-anchored via Sidetree), `did:nostr` (Nostr-based) — reflecting a deliberate pluralism in anchoring mechanisms.

- ### Content
  - The conceptual origins of DIDs lie in the self-sovereign identity (SSI) movement, initiated by Christopher Allen's 2016 essay "The Path to Self-Sovereign Identity" and the early work of the Rebooting the Web of Trust community. The W3C Credentials Community Group formalised the DID syntax and data model, leading to a W3C Working Group that published the DID Core specification as a W3C Recommendation in July 2022 — despite a notable objection from Google, Mozilla, and Apple who expressed concern about proliferation of DID methods and insufficient standardisation of resolution.

  - Technically, a DID is a URI string of the form `did:<method>:<method-specific-identifier>`, such as `did:example:123456789abcdefghi`. The DID method defines how to create, resolve, update, and deactivate DIDs for a particular verifiable data registry. Resolution retrieves the DID Document — a JSON-LD object containing: `verificationMethod` (public keys), `authentication` (methods authorised for authentication proofs), `assertionMethod` (for credential issuance), `keyAgreement` (for encrypted communication), and `service` (endpoints for protocol interaction). DID controllers update documents by proving control of existing keys.

  - W3C DID is significant because it replaces the dependence on centralised identity authorities (certificate authorities, email providers, social network platforms) with a verifiable, portable identifier that a subject controls independently. This has profound implications for credential portability (users own their qualifications and licences), privacy (selective disclosure without issuer tracking), and resilience (identity not lost when a service provider disappears). In enterprise contexts, DIDs enable inter-organisational trust without federation agreements.

  - In 2024-2025, the EU Digital Identity Wallet (EUDI Wallet) specified under eIDAS2 mandates W3C DID-compatible identifiers for EU citizens, representing the largest government deployment of the standard globally. The W3C DID Working Group published DID Resolution v1.0 and DID Methods Registry updates. OpenID4VCI and OpenID4VP protocols — which bind DID-based key material to credential issuance and presentation — have achieved wide implementation across wallet vendors. The `did:web` method is seeing particular enterprise adoption as a low-friction entry point, while `did:jwk` and `did:key` serve ephemeral credential use cases.

