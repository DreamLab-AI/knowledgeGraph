public:: true

# Creator Royalties
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c0dd42fc1db55e7919e470c7cbc721260f9b30e62eaf883f14b866e0d26afc43",
  "@type": "Page",
  "vc:slug": "creator-royalties",
  "title": "Creator Royalties",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nft",
      "vc:label": "NFT"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:creator-royalties",
      "vc:label": "Creator Royalties"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Creator Royalties"
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
  "@id": "urn:ngm:class:creator-royalties",
  "@type": "Class",
  "label": "Creator Royalties",
  "definition": "Creator royalties are payments made to the original creator of a digital asset, such as an NFT, on subsequent resales of that asset.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:nft",
      "label": "NFT"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:creator-royalties:9a73ee9da0d7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c0dd42fc1db55e7919e470c7cbc721260f9b30e62eaf883f14b866e0d26afc43"
  },
  "vc:resolutions": [
    {
      "raw": "[[NFT]]",
      "resolved": "urn:visionflow:linked:nft",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Creator Royalties]]",
      "resolved": "urn:visionflow:linked:creator-royalties",
      "kind": "StubLink"
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
  - Creator royalties are payments made to the original creator of a digital asset, such as an NFT, on subsequent resales of that asset.

- ### Semantic Classification
  - owl-class:: blockchain:CreatorRoyalties
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[NFT]]
  - bridges-to:: [[Creator Royalties]]
  - requires:: [[NFT]], [[Smart Contract]]

- ### Content
  - Creator royalties allocate a percentage of each secondary sale of an NFT back to its creator. Marketplaces and smart contracts have implemented these payments to give creators ongoing income from resales.
  - Royalty enforcement has been contested because on-chain transfers can bypass marketplace logic that pays royalties, leading to debate over whether royalties can be enforced at the protocol level or only by marketplace policy.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
