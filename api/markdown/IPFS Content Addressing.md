```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0f7d3bfecc17faa60b01c89c7e59de612d6ed9fb8f3223277b52aec4529e8d08",
  "@type": "Page",
  "vc:slug": "ipfs-content-addressing",
  "title": "IPFS Content Addressing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-hash",
      "vc:label": "Cryptographic Hash"
    },
    {
      "@id": "urn:visionflow:linked:distributed-storage",
      "vc:label": "Distributed Storage"
    },
    {
      "@id": "urn:visionflow:linked:ipfs",
      "vc:label": "IPFS"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "IPFS Content Addressing"
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
  "@id": "urn:ngm:class:ipfs-content-addressing",
  "@type": "Class",
  "label": "IPFS Content Addressing",
  "definition": "The addressing scheme used by the InterPlanetary File System, in which content is identified by a cryptographic hash of its data rather than by location. The resulting content identifier changes if the content changes.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ipfs",
      "label": "IPFS"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-storage",
        "label": "Distributed Storage"
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

- ### Definition
  - The addressing scheme used by the InterPlanetary File System, in which content is identified by a cryptographic hash of its data rather than by location. The resulting content identifier changes if the content changes.

- ### Semantic Classification
  - owl-class:: distributed-systems:IPFSContentAddressing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[IPFS]]
  - bridges-to:: [[IPFS]]
  - requires:: [[Cryptographic Hash]]
  - enables:: [[Distributed Storage]]

- ### Content
  - Content addressing in IPFS derives an identifier from the hash of the content itself, producing a content identifier. Requesting that identifier retrieves the exact data, and any change to the data yields a different identifier.
  - This approach provides integrity verification and deduplication, because identical content always maps to the same identifier, and it enables retrieval from any peer that holds the data rather than from a fixed server.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
