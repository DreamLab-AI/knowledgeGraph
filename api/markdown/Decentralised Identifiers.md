public:: true

# Decentralised Identifiers
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0ae9c8ba4349f783be5f840a2cea7f87d39ccb81e18540137c3144d78f5d30cc",
  "@type": "Page",
  "vc:slug": "decentralised-identifiers",
  "title": "Decentralised Identifiers",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-credentials",
      "vc:label": "Verifiable Credentials"
    },
    {
      "@id": "urn:visionflow:linked:w-3-c",
      "vc:label": "W3C"
    },
    {
      "@id": "urn:visionflow:linked:identity",
      "vc:label": "Identity"
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
      "vc:value": "Decentralised Identifiers"
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
  "@id": "urn:ngm:class:decentralised-identifiers",
  "@type": "Class",
  "label": "Decentralised Identifiers",
  "definition": "A W3C standard for globally unique identifiers that are created, owned and controlled by their subject without reliance on a central registration authority, enabling verifiable, self-sovereign digital identity.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:digital-identity",
    "label": "Digital Identity"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
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
        "@id": "urn:ngm:class:decentralised-authentication",
        "label": "Decentralised Authentication"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-did-specification",
        "label": "W3C DID Specification"
      },
      {
        "@id": "urn:ngm:class:uri-scheme",
        "label": "URI Scheme"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralized-identity-provider",
        "label": "Centralised Identity Provider"
      },
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:identity",
        "label": "Identity"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:web-of-trust",
        "label": "Web of Trust"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:did",
      "label": "DID"
    },
    {
      "@id": "urn:ngm:class:w3c-did",
      "label": "W3C DID"
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
  "@id": "urn:visionflow:annotation:link-resolutions:decentralised-identifiers:b345aee323b2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0ae9c8ba4349f783be5f840a2cea7f87d39ccb81e18540137c3144d78f5d30cc"
  },
  "vc:resolutions": [
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
      "raw": "[[W3C]]",
      "resolved": "urn:visionflow:linked:w-3-c",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity]]",
      "resolved": "urn:visionflow:linked:identity",
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
  - A W3C standard for globally unique identifiers that are created, owned and controlled by their subject without reliance on a central registration authority, enabling verifiable, self-sovereign digital identity.

- ### Semantic Classification
  - owl-class:: cryptographic:DecentralisedIdentifiers
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Identity]]
  - bridges-to:: [[W3C]], [[Identity]]
  - requires:: [[Cryptography]]
  - enables:: [[Verifiable Credentials]]

- ### Content
  - Decentralised identifiers, or DIDs, are a W3C specification for identifiers that resolve to a DID document containing public keys and service endpoints. Control rests with the identifier's subject through cryptographic keys rather than a central issuer, supporting self-sovereign identity.
  - DIDs are designed to be persistent and verifiable across different systems and underpin the issuance and verification of verifiable credentials, allowing parties to prove claims about an identity without depending on a single authority.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
