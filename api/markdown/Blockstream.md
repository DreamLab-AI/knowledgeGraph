public:: true

# Blockstream
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df2d843cc074c5af9ee6f05deff37154b3472e432234a0d790de67174e6c2557",
  "@type": "Page",
  "vc:slug": "blockstream",
  "title": "Blockstream",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-scaling",
      "vc:label": "Layer 2 Scaling"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Blockstream"
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
  "@id": "urn:ngm:class:blockstream",
  "@type": "Class",
  "label": "Blockstream",
  "definition": "Blockstream is a company that develops Bitcoin infrastructure, including sidechain technology, data products, and software for the Lightning Network.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin",
      "label": "Bitcoin"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:blockstream:cd81564821b2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:df2d843cc074c5af9ee6f05deff37154b3472e432234a0d790de67174e6c2557"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Scaling]]",
      "resolved": "urn:visionflow:linked:layer-2-scaling",
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
  - Blockstream is a company that develops Bitcoin infrastructure, including sidechain technology, data products, and software for the Lightning Network.

- ### Semantic Classification
  - owl-class:: blockchain:Blockstream
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Bitcoin]]
  - bridges-to:: [[Layer 2 Scaling]]
  - requires:: [[Bitcoin]]
  - enables:: [[Lightning Network]]

- ### Content
  - Blockstream builds Bitcoin-related infrastructure, including a federated sidechain and tools for satellite-based blockchain data distribution.
  - The company also contributes to Lightning Network software and operates services for Bitcoin transaction and data delivery.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
