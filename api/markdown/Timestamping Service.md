public:: true

# Timestamping Service
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c7f6d0800c7a872a3f85914eb9601b39c8e52631202c07584078f7952048ad2",
  "@type": "Page",
  "vc:slug": "timestamping-service",
  "title": "Timestamping Service",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:content-provenance",
      "vc:label": "Content Provenance"
    },
    {
      "@id": "urn:visionflow:linked:timestamp",
      "vc:label": "Timestamp"
    },
    {
      "@id": "urn:visionflow:linked:trusted-timestamping",
      "vc:label": "Trusted Timestamping"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Timestamping Service"
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
  "@id": "urn:ngm:class:timestamping-service",
  "@type": "Class",
  "label": "Timestamping Service",
  "definition": "A timestamping service is a system that issues verifiable proof that a piece of data existed at or before a particular time, often using cryptographic methods.",
  "domain": "cryptography",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-protocol",
      "label": "Cryptographic Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:content-provenance",
        "label": "Content Provenance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:timestamping-service:4ddf80e45515",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c7f6d0800c7a872a3f85914eb9601b39c8e52631202c07584078f7952048ad2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:linked:hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Content Provenance]]",
      "resolved": "urn:visionflow:linked:content-provenance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Timestamp]]",
      "resolved": "urn:visionflow:linked:timestamp",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trusted Timestamping]]",
      "resolved": "urn:visionflow:linked:trusted-timestamping",
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
  - A timestamping service is a system that issues verifiable proof that a piece of data existed at or before a particular time, often using cryptographic methods.

- ### Semantic Classification
  - owl-class:: cryptography:TimestampingService
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Trusted Timestamping]]
  - bridges-to:: [[Timestamp]]
  - requires:: [[Hash Function]], [[Cryptography]]
  - enables:: [[Content Provenance]]

- ### Content
  - A timestamping service receives a hash of a document and returns a signed token binding that hash to a time value. Anyone can later verify that the document existed at the recorded time without revealing the document itself.
  - Centralised services follow the RFC 3161 standard with a trusted authority, while blockchain-based timestamping anchors a hash in a public ledger so the existence proof relies on the immutability of the chain rather than a single authority.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
