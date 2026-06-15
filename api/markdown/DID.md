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
        "@id": "urn:ngm:class:w3c-did-core",
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
        "@id": "urn:ngm:class:json-ld",
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
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralized-identity",
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

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
