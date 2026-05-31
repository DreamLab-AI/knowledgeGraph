public:: true

# Synthetix
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:02d57435b5057860ad5c019f395ac276576f4fa4eb1725995dca655061c36d14",
  "@type": "Page",
  "vc:slug": "synthetix",
  "title": "Synthetix",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collateral-management",
      "vc:label": "Collateral Management"
    },
    {
      "@id": "urn:visionflow:linked:price-oracle",
      "vc:label": "Price Oracle"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-provision",
      "vc:label": "Liquidity Provision"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-exchange",
      "vc:label": "Decentralised Exchange"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Synthetix"
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
  "@id": "urn:ngm:class:synthetix",
  "@type": "Class",
  "label": "Synthetix",
  "definition": "A protocol on Ethereum that issues synthetic assets tracking the price of external references, backed by a pooled collateral of its native token and other staked assets.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-contract",
      "label": "Smart Contract"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:collateral-management",
        "label": "Collateral Management"
      },
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
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
  "@id": "urn:visionflow:annotation:link-resolutions:synthetix:662b14341986",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:02d57435b5057860ad5c019f395ac276576f4fa4eb1725995dca655061c36d14"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collateral Management]]",
      "resolved": "urn:visionflow:linked:collateral-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Price Oracle]]",
      "resolved": "urn:visionflow:linked:price-oracle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Provision]]",
      "resolved": "urn:visionflow:linked:liquidity-provision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Exchange]]",
      "resolved": "urn:visionflow:linked:decentralised-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
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
  - A protocol on Ethereum that issues synthetic assets tracking the price of external references, backed by a pooled collateral of its native token and other staked assets.

- ### Semantic Classification
  - owl-class:: blockchain:Synthetix
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Decentralised Exchange]]
  - requires:: [[Collateral Management]], [[Price Oracle]]
  - enables:: [[Liquidity Provision]]

- ### Content
  - Synthetix mints synthetic assets, commonly called synths, that mirror the price of an underlying reference such as a fiat currency, commodity, or index. Stakers lock collateral to back a shared debt pool, and price feeds from oracles determine the value of each synth at the point of trade.
  - Trades between synths execute against the pooled debt rather than against a counterparty order, so there is no order book and liquidity is constrained by collateralisation rather than by matching. Stakers earn fees from this activity but carry exposure to the aggregate debt pool, whose value shifts as the prices of the issued synths change.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
