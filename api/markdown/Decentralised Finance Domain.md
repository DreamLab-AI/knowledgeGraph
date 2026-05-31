public:: true

# Decentralised Finance Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:da472384e95d38e2c5173caf6b5d749f47fcca53ae631b14fab5f02c77075e5f",
  "@type": "Page",
  "vc:slug": "decentralised-finance-domain",
  "title": "Decentralised Finance Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:lending-protocol",
      "vc:label": "Lending Protocol"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-exchange",
      "vc:label": "Decentralised Exchange"
    },
    {
      "@id": "urn:visionflow:linked:yield-aggregator",
      "vc:label": "Yield Aggregator"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset-domain",
      "vc:label": "Digital Asset Domain"
    },
    {
      "@id": "urn:visionflow:linked:price-oracle",
      "vc:label": "Price Oracle"
    },
    {
      "@id": "urn:visionflow:linked:permissionless-lending",
      "vc:label": "Permissionless Lending"
    },
    {
      "@id": "urn:visionflow:linked:automated-liquidity-provision",
      "vc:label": "Automated Liquidity Provision"
    },
    {
      "@id": "urn:visionflow:linked:composable-financial-products",
      "vc:label": "Composable Financial Products"
    },
    {
      "@id": "urn:visionflow:linked:payment-systems-domain",
      "vc:label": "Payment Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:mechanism-design-domain",
      "vc:label": "Mechanism Design Domain"
    },
    {
      "@id": "urn:visionflow:linked:risk-management-domain",
      "vc:label": "Risk Management Domain"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:fatf-virtual-asset-guidance",
      "vc:label": "FATF Virtual Asset Guidance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Decentralised Finance Domain"
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
  "@id": "urn:ngm:class:decentralised-finance-domain",
  "@type": "Class",
  "label": "Decentralised Finance Domain",
  "definition": "The Decentralised Finance Domain classifies concepts for financial services that operate through smart contracts on public ledgers without a central intermediary. It covers protocols for trading, lending, derivatives, and asset management, together with the composability that lets them interoperate. As a subject classification under the Blockchain Domain, it scopes the on-ledger financial primitives rather than the underlying tokens or the regulation that may apply.",
  "domain": "decentralised-finance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:lending-protocol",
        "label": "Lending Protocol"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      },
      {
        "@id": "urn:ngm:class:yield-aggregator",
        "label": "Yield Aggregator"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:digital-asset-domain",
        "label": "Digital Asset Domain"
      },
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:permissionless-lending",
        "label": "Permissionless Lending"
      },
      {
        "@id": "urn:ngm:class:automated-liquidity-provision",
        "label": "Automated Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:composable-financial-products",
        "label": "Composable Financial Products"
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
  "@id": "urn:visionflow:annotation:link-resolutions:decentralised-finance-domain:ac4f30ab35c0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:da472384e95d38e2c5173caf6b5d749f47fcca53ae631b14fab5f02c77075e5f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lending Protocol]]",
      "resolved": "urn:visionflow:linked:lending-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Exchange]]",
      "resolved": "urn:visionflow:linked:decentralised-exchange",
      "kind": "StubLink"
    },
    {
      "raw": "[[Yield Aggregator]]",
      "resolved": "urn:visionflow:linked:yield-aggregator",
      "kind": "StubLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Price Oracle]]",
      "resolved": "urn:visionflow:linked:price-oracle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Permissionless Lending]]",
      "resolved": "urn:visionflow:linked:permissionless-lending",
      "kind": "StubLink"
    },
    {
      "raw": "[[Automated Liquidity Provision]]",
      "resolved": "urn:visionflow:linked:automated-liquidity-provision",
      "kind": "StubLink"
    },
    {
      "raw": "[[Composable Financial Products]]",
      "resolved": "urn:visionflow:linked:composable-financial-products",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Systems Domain]]",
      "resolved": "urn:visionflow:linked:payment-systems-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mechanism Design Domain]]",
      "resolved": "urn:visionflow:linked:mechanism-design-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Risk Management Domain]]",
      "resolved": "urn:visionflow:linked:risk-management-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[FATF Virtual Asset Guidance]]",
      "resolved": "urn:visionflow:linked:fatf-virtual-asset-guidance",
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
  - The Decentralised Finance Domain classifies concepts for financial services that operate through smart contracts on public ledgers without a central intermediary. It covers protocols for trading, lending, derivatives, and asset management, together with the composability that lets them interoperate. As a subject classification under the Blockchain Domain, it scopes the on-ledger financial primitives rather than the underlying tokens or the regulation that may apply.

- ### Semantic Classification
  - owl-class:: defi:DecentralisedFinanceDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Payment Systems Domain]], [[Mechanism Design Domain]], [[Risk Management Domain]]
  - has-part:: [[Automated Market Maker]], [[Lending Protocol]], [[Stablecoin]], [[Decentralised Exchange]], [[Yield Aggregator]]
  - requires:: [[Smart Contract]], [[Digital Asset Domain]], [[Price Oracle]]
  - enables:: [[Permissionless Lending]], [[Automated Liquidity Provision]], [[Composable Financial Products]]

- ### Content
  - The Decentralised Finance Domain catalogues financial functions implemented as openly callable smart contracts. Automated market makers price and settle trades against pooled liquidity, lending protocols match suppliers and borrowers through over-collateralised positions, and stablecoins provide a stable unit within these systems. Because contracts expose standard interfaces, products compose freely, so the output of one protocol becomes the input to another.
  - Composability is the defining property and the principal source of risk. A position may depend on a price oracle, a lending market, and a liquidity pool simultaneously, so a fault or manipulation in any component can cascade. Mechanism design choices such as fee curves, collateral factors, and liquidation rules determine whether incentives keep the system solvent under stress.
  - Beneath the Blockchain Domain, decentralised finance consumes digital assets and payment rails while feeding into risk management and regulation. The DeFi Domain entry is a short alias that bridges to this fuller treatment. Keeping financial primitives distinct from the assets they move and the rules that constrain them lets the ontology model novel protocols without reclassifying their tokens.

- ### Provenance
  - sources:: [[FATF Virtual Asset Guidance]]
  - migration-date:: 2026-05-29T00:00:00Z
