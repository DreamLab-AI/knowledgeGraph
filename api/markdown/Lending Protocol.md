public:: true

# Lending Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:85fd1b9a73a9ec3bf65f1960e968bf0f7cae5ca719c4be83ebdf077bdef68623",
  "@type": "Page",
  "vc:slug": "lending-protocol",
  "title": "Lending Protocol",
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
      "@id": "urn:visionflow:linked:yield-farming",
      "vc:label": "Yield Farming"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
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
      "vc:value": "Lending Protocol"
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
  "@id": "urn:ngm:class:lending-protocol",
  "@type": "Class",
  "label": "Lending Protocol",
  "definition": "A smart-contract system that lets users supply assets to earn interest and borrow against deposited collateral, with rates and liquidations governed by code.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:lending-protocol:a583e5bc39b0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:85fd1b9a73a9ec3bf65f1960e968bf0f7cae5ca719c4be83ebdf077bdef68623"
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
      "raw": "[[Yield Farming]]",
      "resolved": "urn:visionflow:linked:yield-farming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
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
  - A smart-contract system that lets users supply assets to earn interest and borrow against deposited collateral, with rates and liquidations governed by code.

- ### Semantic Classification
  - owl-class:: blockchain:LendingProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Liquidity Pool]]
  - requires:: [[Collateral Management]], [[Price Oracle]]
  - enables:: [[Yield Farming]]

- ### Content
  - A lending protocol pools supplied assets and lends them to borrowers who post collateral worth more than the amount borrowed. Interest rates typically adjust algorithmically with the ratio of borrowed to supplied funds, balancing demand for loans against available liquidity.
  - Loans are overcollateralised, and the protocol monitors collateral value through price feeds. If a borrower's collateral falls below a required threshold, the position is liquidated by third parties who repay part of the debt in exchange for discounted collateral. The mechanism relies on accurate oracles and timely liquidation to remain solvent.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
