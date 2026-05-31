public:: true

# Constant Product Formula
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:87d0f6803703c242cab9941870704ae02fd5d9b8b0985baf111a6ee70fc28bd3",
  "@type": "Page",
  "vc:slug": "constant-product-formula",
  "title": "Constant Product Formula",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:uniswap",
      "vc:label": "Uniswap"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Constant Product Formula"
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
  "@id": "urn:ngm:class:constant-product-formula",
  "@type": "Class",
  "label": "Constant Product Formula",
  "definition": "The constant product formula is the pricing rule used by many automated market makers in which the product of the two pooled token reserves is held constant during trades.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:automated-market-maker",
      "label": "Automated Market Maker"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
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
  "@id": "urn:visionflow:annotation:link-resolutions:constant-product-formula:a0180b67c14c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:87d0f6803703c242cab9941870704ae02fd5d9b8b0985baf111a6ee70fc28bd3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Uniswap]]",
      "resolved": "urn:visionflow:linked:uniswap",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
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
  - The constant product formula is the pricing rule used by many automated market makers in which the product of the two pooled token reserves is held constant during trades.

- ### Semantic Classification
  - owl-class:: blockchain:ConstantProductFormula
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Automated Market Maker]]
  - bridges-to:: [[Uniswap]]
  - requires:: [[Liquidity Pool]]

- ### Content
  - The rule is written as x times y equals k, where x and y are the reserves of two tokens and k is a constant. A trade changes the reserves while keeping their product equal to k, which sets the marginal exchange price along a curve.
  - This design was popularised by Uniswap. It produces price slippage that grows as trade size increases relative to the pool, and it never fully depletes either reserve because the price moves towards infinity at the edges.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
