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
  "domain": "cryptographic",
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
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
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
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
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
