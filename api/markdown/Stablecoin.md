public:: true

# Stablecoin
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3dd038b6119a27758d5e8177d5e8c8dfb3981352e0edce7120ffc1bb5df158bd",
  "@type": "Page",
  "vc:slug": "stablecoin",
  "title": "Stablecoin",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collateral-reserves",
      "vc:label": "Collateral Reserves"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-transactions",
      "vc:label": "Cross-Border Transactions"
    },
    {
      "@id": "urn:visionflow:linked:imf-cbdc-notes",
      "vc:label": "IMF CBDC Notes"
    },
    {
      "@id": "urn:visionflow:linked:iso-24165",
      "vc:label": "ISO 24165"
    },
    {
      "@id": "urn:visionflow:linked:peg-mechanism",
      "vc:label": "Peg Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:price-oracle",
      "vc:label": "Price Oracle"
    },
    {
      "@id": "urn:visionflow:linked:price-stability",
      "vc:label": "Price Stability"
    },
    {
      "@id": "urn:visionflow:linked:reserve-asset",
      "vc:label": "Reserve Asset"
    },
    {
      "@id": "urn:visionflow:linked:stabilization-algorithm",
      "vc:label": "Stabilization Algorithm"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:crypto-token",
      "vc:label": "Crypto Token"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-asset",
      "vc:label": "Digital Asset"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:value-transfer",
      "vc:label": "Value Transfer"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-commerce",
      "vc:label": "Virtual Commerce"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-currency",
      "vc:label": "Virtual Currency"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-4001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Stablecoin"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
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
  "@id": "urn:ngm:class:stablecoin",
  "@type": "Class",
  "label": "Stablecoin",
  "definition": "A cryptocurrency whose value is algorithmically or institutionally pegged to a reserve asset to maintain price stability, enabling reliable medium of exchange and store of value in virtual economies.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:crypto-token",
    "label": "Crypto Token"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:collateral-management",
        "label": "Collateral Reserves"
      },
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:reserve-asset",
        "label": "Reserve Asset"
      },
      {
        "@id": "urn:ngm:class:peg-mechanism",
        "label": "Peg Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-transactions",
        "label": "Cross-Border Transactions"
      },
      {
        "@id": "urn:ngm:class:price-stability",
        "label": "Price Stability"
      },
      {
        "@id": "urn:ngm:class:value-transfer",
        "label": "Value Transfer"
      },
      {
        "@id": "urn:ngm:class:virtual-commerce",
        "label": "Virtual Commerce"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:remittance",
        "label": "Remittance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:crypto-token",
        "label": "Crypto Token"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:virtual-currency",
        "label": "Virtual Currency"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ledger",
        "label": "Decentralized Ledger"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:fiat-backed-token",
        "label": "Fiat-Backed Token"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:proof-of-reserve",
        "label": "Proof of Reserve"
      },
      {
        "@id": "urn:ngm:class:overcollateralization",
        "label": "Overcollateralization"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:payment-settlement",
        "label": "Payment Settlement"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-24165",
        "label": "ISO 24165"
      },
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "FSB Regulatory Framework"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Volatile Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Traditional Payment System"
      },
      {
        "@id": "urn:ngm:class:foreign-exchange-market",
        "label": "Foreign Exchange Market"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tokenized-asset",
        "label": "Tokenized Asset"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:price-stable-cryptocurrency",
      "label": "Price-Stable Cryptocurrency"
    },
    {
      "@id": "urn:ngm:class:pegged-digital-currency",
      "label": "Pegged Digital Currency"
    }
  ],
  "quality": 0.65,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:stablecoin:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3dd038b6119a27758d5e8177d5e8c8dfb3981352e0edce7120ffc1bb5df158bd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collateral Reserves]]",
      "resolved": "urn:visionflow:linked:collateral-reserves",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Border Transactions]]",
      "resolved": "urn:visionflow:linked:cross-border-transactions",
      "kind": "StubLink"
    },
    {
      "raw": "[[IMF CBDC Notes]]",
      "resolved": "urn:visionflow:linked:imf-cbdc-notes",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 24165]]",
      "resolved": "urn:visionflow:linked:iso-24165",
      "kind": "StubLink"
    },
    {
      "raw": "[[Peg Mechanism]]",
      "resolved": "urn:visionflow:linked:peg-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[Price Oracle]]",
      "resolved": "urn:visionflow:linked:price-oracle",
      "kind": "StubLink"
    },
    {
      "raw": "[[Price Stability]]",
      "resolved": "urn:visionflow:linked:price-stability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reserve Asset]]",
      "resolved": "urn:visionflow:linked:reserve-asset",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stabilization Algorithm]]",
      "resolved": "urn:visionflow:linked:stabilization-algorithm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Crypto Token]]",
      "resolved": "urn:visionflow:owl:class:crypto-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:owl:class:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Value Transfer]]",
      "resolved": "urn:visionflow:owl:class:value-transfer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Commerce]]",
      "resolved": "urn:visionflow:owl:class:virtual-commerce",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Currency]]",
      "resolved": "urn:visionflow:owl:class:virtual-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A cryptocurrency whose value is algorithmically or institutionally pegged to a reserve asset to maintain price stability, enabling reliable medium of exchange and store of value in virtual economies.
- ### Semantic Classification
  - owl-class:: spatial-computing:Stablecoin
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]], [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]
- ### Relationships
  - is-part-of:: [[Crypto Token]], [[Virtual Currency]], [[Digital Asset]]
  - requires:: [[Blockchain]], [[Smart Contract]], [[Collateral Reserves]], [[Price Oracle]]
  - enables:: [[Price Stability]], [[Cross-Border Transactions]], [[Virtual Commerce]], [[Value Transfer]]
  - depends-on:: [[Peg Mechanism]], [[Reserve Asset]], [[Stabilization Algorithm]]
- ### Content
  Stablecoin — content pending enrichment.
- ### Provenance
  - sources:: [[ISO 24165]], [[IMF CBDC Notes]]
  - migration-date:: 2026-04-26T00:00:00Z
