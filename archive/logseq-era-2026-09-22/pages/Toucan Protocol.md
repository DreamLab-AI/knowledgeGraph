public:: true

# Toucan Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e2ffc1ce69dd6b412b7d9675eb18d709e2aa1bb34a595d882a1a0736eadacca1",
  "@type": "Page",
  "vc:slug": "toucan-protocol",
  "title": "Toucan Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:carbon-credits",
      "vc:label": "Carbon Credits"
    },
    {
      "@id": "urn:visionflow:linked:voluntary-carbon-market",
      "vc:label": "Voluntary Carbon Market"
    },
    {
      "@id": "urn:visionflow:linked:carbon-accounting",
      "vc:label": "Carbon Accounting"
    },
    {
      "@id": "urn:visionflow:linked:carbon-markets",
      "vc:label": "Carbon Markets"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Toucan Protocol"
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
  "@id": "urn:ngm:class:toucan-protocol",
  "@type": "Class",
  "label": "Toucan Protocol",
  "definition": "A blockchain protocol that brings voluntary carbon market credits on-chain as tokens, intended to make carbon offsets tradeable and composable within decentralised finance.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:carbon-markets",
      "label": "Carbon Markets"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:carbon-credits",
        "label": "Carbon Credits"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:voluntary-carbon-market",
        "label": "Voluntary Carbon Market"
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
  "@id": "urn:visionflow:annotation:link-resolutions:toucan-protocol:c2abe9b754a2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e2ffc1ce69dd6b412b7d9675eb18d709e2aa1bb34a595d882a1a0736eadacca1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Credits]]",
      "resolved": "urn:visionflow:linked:carbon-credits",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Voluntary Carbon Market]]",
      "resolved": "urn:visionflow:linked:voluntary-carbon-market",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Accounting]]",
      "resolved": "urn:visionflow:linked:carbon-accounting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Markets]]",
      "resolved": "urn:visionflow:linked:carbon-markets",
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
  - A blockchain protocol that brings voluntary carbon market credits on-chain as tokens, intended to make carbon offsets tradeable and composable within decentralised finance.

- ### Semantic Classification
  - owl-class:: blockchain:ToucanProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Carbon Markets]]
  - bridges-to:: [[Carbon Accounting]]
  - requires:: [[Smart Contract]], [[Carbon Credits]]
  - enables:: [[Voluntary Carbon Market]]

- ### Content
  - Toucan Protocol provides infrastructure for tokenising carbon credits, allowing retired or held credits from offset registries to be represented as on-chain tokens such as pooled carbon reference tokens. The aim is to increase transparency and liquidity in voluntary carbon markets.
  - By making carbon credits programmable, the protocol enables their use in decentralised finance applications and automated retirement, though the approach has drawn scrutiny over which credits are eligible and how on-chain representation maps to underlying offset quality.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
