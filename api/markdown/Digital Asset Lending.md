schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#DigitalAssetLending
legacy_uri:: urn:visionclaw:concept:spatial-computing:digital-asset-lending
public:: true

# Digital Asset Lending
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d25901eacd2fa402759eade89305f2a308efad79719f276bfed2cac36eedea8c",
  "@type": "Page",
  "vc:slug": "digital-asset-lending",
  "title": "Digital Asset Lending",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collateral-management",
      "vc:label": "Collateral Management"
    },
    {
      "@id": "urn:visionflow:linked:leverage-trading",
      "vc:label": "Leverage Trading"
    },
    {
      "@id": "urn:visionflow:linked:liquidation-systems",
      "vc:label": "Liquidation Systems"
    },
    {
      "@id": "urn:visionflow:linked:yield-generation",
      "vc:label": "Yield Generation"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:de-fi-services",
      "vc:label": "DeFi Services"
    },
    {
      "@id": "urn:visionflow:owl:class:liquidity-provision",
      "vc:label": "Liquidity Provision"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contracts",
      "vc:label": "Smart Contracts"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-d10f3379f501"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#DigitalAssetLending"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9849"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Asset Lending"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:digital-asset-lending"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:digital-asset-lending"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d25901eacd2fa402759eade89305f2a308efad79719f276bfed2cac36eedea8c@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-asset-lending",
  "@type": "Class",
  "label": "Digital Asset Lending",
  "definition": "Financial services enabling cryptocurrency holders to lend their digital assets to borrowers through centralized platforms or decentralized protocols, earning interest yields while providing liquidity for trading, leverage, and other financial activities secured by collateralized positions.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "spatial-computing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:collateral-management",
        "label": "Collateral Management"
      },
      {
        "@id": "urn:ngm:class:liquidation-systems",
        "label": "Liquidation Systems"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:leverage-trading",
        "label": "Leverage Trading"
      },
      {
        "@id": "urn:ngm:class:yield-generation",
        "label": "Yield Generation"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-asset-lending:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d25901eacd2fa402759eade89305f2a308efad79719f276bfed2cac36eedea8c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collateral Management]]",
      "resolved": "urn:visionflow:linked:collateral-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Leverage Trading]]",
      "resolved": "urn:visionflow:linked:leverage-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[Liquidation Systems]]",
      "resolved": "urn:visionflow:linked:liquidation-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Yield Generation]]",
      "resolved": "urn:visionflow:linked:yield-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi Services]]",
      "resolved": "urn:visionflow:owl:class:de-fi-services",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Provision]]",
      "resolved": "urn:visionflow:owl:class:liquidity-provision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contracts]]",
      "resolved": "urn:visionflow:owl:class:smart-contracts",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d25901eacd2fa402759eade89305f2a308efad79719f276bfed2cac36eedea8c@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Financial services enabling cryptocurrency holders to lend their digital assets to borrowers through centralized platforms or decentralized protocols, earning interest yields while providing liquidity for trading, leverage, and other financial activities secured by collateralized positions.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalAssetLending
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[DeFi Services]]
  - requires:: [[Collateral Management]], [[Smart Contracts]], [[Liquidation Systems]]
  - enables:: [[Yield Generation]], [[Leverage Trading]], [[Liquidity Provision]]

- ### Content

  - ## Technical Details
  - **Lending Models**:
		- Over-collateralized loans: Typical 150-200% collateral ratio
		- Under-collateralized/unsecured: Credit scoring or reputation-based
		- Flash loans: Single-block uncollateralized borrowing
		- Peer-to-peer: Direct lender-borrower matching
  - **Major Protocols (2024)**:
		- Aave: Multi-chain lending with variable/stable rates
		- Compound: Algorithmic interest rate markets
		- MakerDAO: DAI stablecoin generation via CDPs
		- JustLend: TRON ecosystem lending
  - **Risk Parameters**:
		- Liquidation thresholds and penalties
		- Interest rate models (utilization-based)
		- Bad debt handling mechanisms
		- Oracle price feed dependencies
  - **Market Dynamics**: TVL fluctuations with market conditions, regulatory uncertainty affecting CeFi lenders
  - ## Applications
  - Passive income generation
  - Trading leverage and margin
  - Stablecoin minting
  - Arbitrage financing
  - Corporate working capital

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
