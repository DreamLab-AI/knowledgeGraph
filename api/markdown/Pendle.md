public:: true

# Pendle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eea8b46c60d141cc25e1b4e451b86514c6a65ef653bcb289442d5703402f1de3",
  "@type": "Page",
  "vc:slug": "pendle",
  "title": "Pendle",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:yield-farming",
      "vc:label": "Yield Farming"
    },
    {
      "@id": "urn:visionflow:linked:tokenisation",
      "vc:label": "Tokenisation"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Pendle"
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
  "@id": "urn:ngm:class:pendle",
  "@type": "Class",
  "label": "Pendle",
  "definition": "Pendle is a decentralised finance protocol that tokenises future yield, splitting yield-bearing assets into separate principal and yield tokens that can be traded.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:de-fi",
      "label": "DeFi"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
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
  "@id": "urn:visionflow:annotation:link-resolutions:pendle:c05f6902ec7c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eea8b46c60d141cc25e1b4e451b86514c6a65ef653bcb289442d5703402f1de3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Yield Farming]]",
      "resolved": "urn:visionflow:linked:yield-farming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tokenisation]]",
      "resolved": "urn:visionflow:linked:tokenisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
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
  - Pendle is a decentralised finance protocol that tokenises future yield, splitting yield-bearing assets into separate principal and yield tokens that can be traded.

- ### Semantic Classification
  - owl-class:: blockchain:Pendle
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[DeFi]]
  - bridges-to:: [[Tokenisation]]
  - requires:: [[Smart Contract]], [[Yield Farming]]

- ### Content
  - Pendle wraps yield-bearing tokens and separates them into principal tokens, which redeem the underlying at maturity, and yield tokens, which represent the variable yield until that date. This lets users trade fixed and variable yield exposure separately.
  - The protocol includes an automated market maker designed for assets whose value converges towards a known redemption point over time, which differs from standard constant product pools.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
