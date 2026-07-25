public:: true

# Storj
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5d6dfd6bda599b582e0ca267123f6b4dd97cc33beb5f4e5a72a3286fd4fb2a6f",
  "@type": "Page",
  "vc:slug": "storj",
  "title": "Storj",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-storage",
      "vc:label": "Decentralised Storage"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Storj"
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
  "@id": "urn:ngm:class:storj",
  "@type": "Class",
  "label": "Storj",
  "definition": "Storj is a decentralised cloud storage network in which files are encrypted, split into pieces, and distributed across independent node operators who are paid for storage and bandwidth.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-storage",
      "label": "Decentralised Storage"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:decentralised-storage",
        "label": "Decentralised Storage"
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
  "@id": "urn:visionflow:annotation:link-resolutions:storj:c059c8035bbd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5d6dfd6bda599b582e0ca267123f6b4dd97cc33beb5f4e5a72a3286fd4fb2a6f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Storage]]",
      "resolved": "urn:visionflow:linked:decentralised-storage",
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
  - Storj is a decentralised cloud storage network in which files are encrypted, split into pieces, and distributed across independent node operators who are paid for storage and bandwidth.

- ### Semantic Classification
  - owl-class:: blockchain:Storj
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Decentralised Storage]]
  - bridges-to:: [[Decentralised Storage]]
  - requires:: [[Cryptography]], [[Decentralised Storage]]

- ### Content
  - Storj encrypts files client-side, divides them using erasure coding, and distributes the resulting pieces across a global network of storage nodes. Files can be reconstructed from a subset of pieces, providing redundancy without storing full copies on any single node.
  - Node operators earn the network's token for storing data and serving downloads. The service presents an S3-compatible interface so applications can use it in place of conventional object storage.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
