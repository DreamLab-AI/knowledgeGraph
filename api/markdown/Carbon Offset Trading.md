schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#CarbonOffsetTrading
legacy_uri:: urn:visionclaw:concept:spatial-computing:carbon-offset-trading
public:: true

# Carbon Offset Trading
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:db2907bf47d70525a12eff92cab7fa79b4ad3a4c4fd6aaeac817d175f49a8d2b",
  "@type": "Page",
  "vc:slug": "carbon-offset-trading",
  "title": "Carbon Offset Trading",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:carbon-price-discovery",
      "vc:label": "Carbon Price Discovery"
    },
    {
      "@id": "urn:visionflow:linked:climate-finance",
      "vc:label": "Climate Finance"
    },
    {
      "@id": "urn:visionflow:linked:market-infrastructure",
      "vc:label": "Market Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:offset-liquidity",
      "vc:label": "Offset Liquidity"
    },
    {
      "@id": "urn:visionflow:linked:trading-platform",
      "vc:label": "Trading Platform"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:carbon-registry",
      "vc:label": "Carbon Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:environmental-trading",
      "vc:label": "Environmental Trading"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
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
      "vc:value": "sha256-12-46ef84a23905"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#CarbonOffsetTrading"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9814"
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
      "vc:value": "Carbon Offset Trading"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:carbon-offset-trading"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:carbon-offset-trading"
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
    "@id": "urn:visionflow:page:db2907bf47d70525a12eff92cab7fa79b4ad3a4c4fd6aaeac817d175f49a8d2b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:carbon-offset-trading",
  "@type": "Class",
  "label": "Carbon Offset Trading",
  "definition": "The buying and selling of verified carbon credits on voluntary and compliance markets through exchanges and over-the-counter transactions, enabling price discovery, liquidity provision, and efficient allocation of climate finance to emission reduction projects.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:environmental-trading",
      "label": "Environmental Trading"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:market-infrastructure",
        "label": "Market Infrastructure"
      },
      {
        "@id": "urn:ngm:class:trading-platform",
        "label": "Trading Platform"
      },
      {
        "@id": "urn:ngm:class:carbon-registry",
        "label": "Carbon Registry"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:carbon-price-discovery",
        "label": "Carbon Price Discovery"
      },
      {
        "@id": "urn:ngm:class:climate-finance",
        "label": "Climate Finance"
      },
      {
        "@id": "urn:ngm:class:offset-liquidity",
        "label": "Offset Liquidity"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:carbon-offset-trading:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:db2907bf47d70525a12eff92cab7fa79b4ad3a4c4fd6aaeac817d175f49a8d2b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Carbon Price Discovery]]",
      "resolved": "urn:visionflow:linked:carbon-price-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Climate Finance]]",
      "resolved": "urn:visionflow:linked:climate-finance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Market Infrastructure]]",
      "resolved": "urn:visionflow:linked:market-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Offset Liquidity]]",
      "resolved": "urn:visionflow:linked:offset-liquidity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trading Platform]]",
      "resolved": "urn:visionflow:linked:trading-platform",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Registry]]",
      "resolved": "urn:visionflow:owl:class:carbon-registry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Environmental Trading]]",
      "resolved": "urn:visionflow:owl:class:environmental-trading",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:db2907bf47d70525a12eff92cab7fa79b4ad3a4c4fd6aaeac817d175f49a8d2b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The buying and selling of verified carbon credits on voluntary and compliance markets through exchanges and over-the-counter transactions, enabling price discovery, liquidity provision, and efficient allocation of climate finance to emission reduction projects.

- ### Semantic Classification
  - owl-class:: spatial-computing:CarbonOffsetTrading
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Environmental Trading]]
  - requires:: [[Trading Platform]], [[Carbon Registry]], [[Market Infrastructure]]
  - enables:: [[Carbon Price Discovery]], [[Climate Finance]], [[Offset Liquidity]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Market Size**: Carbon Credit Trading Platform Market USD 203M (2024), projected USD 1.2B by 2032 (25% CAGR)
  - **Market Types**:
		- **Compliance Markets**: Regulated (EU ETS, California cap-and-trade)
		- **Voluntary Markets (VCM)**: Corporate-driven, fastest growing
  - **Major Exchanges**:
		- **Xpansiv/CBL**: ~25% global VCM market share, 1000+ projects
		- **Carbon Trade Exchange (CTX)**: First digital exchange, 24/7 global operation
		- **Riyadh Voluntary Exchange**: Launching late 2024
  - **Key Players**: Nasdaq, CME Group, EEX Group, Air Carbon Exchange, Carbonplace
  - **Regulatory Developments (2024)**:
		- Biden Administration voluntary VCM principles
		- CFTC proposed guidance for VCM derivatives
		- ICVCM quality approvals
  - ## Applications
  - Corporate offset procurement
  - Climate investment portfolio management
  - Compliance market participation
  - Carbon price hedging
  - Sustainable finance instruments

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
