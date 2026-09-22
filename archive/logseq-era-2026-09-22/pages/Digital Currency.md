public:: true

# Digital Currency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:315f40ff4ee75273a23922b4e4364602fad52e9cfc76305cff9de29686a7df67",
  "@type": "Page",
  "vc:slug": "digital-currency",
  "title": "Digital Currency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:programmable-money",
      "vc:label": "Programmable Money"
    },
    {
      "@id": "urn:visionflow:linked:security-infrastructure",
      "vc:label": "Security Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:transaction-network",
      "vc:label": "Transaction Network"
    },
    {
      "@id": "urn:visionflow:linked:virtual-transactions",
      "vc:label": "Virtual Transactions"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-payments",
      "vc:label": "Digital Payments"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:financial-technology",
      "vc:label": "Financial Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9855"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Currency"
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
  "@id": "urn:ngm:class:digital-currency",
  "@type": "Class",
  "label": "Digital Currency",
  "definition": "Any form of monetary value that exists purely in electronic format, encompassing central bank digital currencies, cryptocurrencies, stablecoins, and virtual currencies used within metaverse economies for transactions, payments, and value exchange without physical representation.",
  "domain": "finance",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:financial-technology",
    "label": "Financial Technology"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:monetary-system",
        "label": "Monetary System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:security-infrastructure",
        "label": "Security Infrastructure"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:programmable-money",
        "label": "Programmable Money"
      },
      {
        "@id": "urn:ngm:class:virtual-transactions",
        "label": "Virtual Transactions"
      },
      {
        "@id": "urn:ngm:class:digital-payments",
        "label": "Digital Payments"
      },
      {
        "@id": "urn:ngm:class:cross-border-remittances",
        "label": "Cross-Border Remittance"
      },
      {
        "@id": "urn:ngm:class:financial-inclusion",
        "label": "Financial Inclusion"
      },
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fiat-currency",
        "label": "Fiat Currency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:financial-technology",
        "label": "Financial Technology"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:metaverse-economy",
        "label": "Metaverse Economy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:electronic-money",
      "label": "Electronic Money"
    },
    {
      "@id": "urn:ngm:class:virtual-currency",
      "label": "Virtual Currency"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-currency:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:315f40ff4ee75273a23922b4e4364602fad52e9cfc76305cff9de29686a7df67"
  },
  "vc:resolutions": [
    {
      "raw": "[[Programmable Money]]",
      "resolved": "urn:visionflow:linked:programmable-money",
      "kind": "StubLink"
    },
    {
      "raw": "[[Security Infrastructure]]",
      "resolved": "urn:visionflow:linked:security-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction Network]]",
      "resolved": "urn:visionflow:linked:transaction-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[Virtual Transactions]]",
      "resolved": "urn:visionflow:linked:virtual-transactions",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Payments]]",
      "resolved": "urn:visionflow:owl:class:digital-payments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:owl:class:digital-wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Technology]]",
      "resolved": "urn:visionflow:owl:class:financial-technology",
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
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Any form of monetary value that exists purely in electronic format, encompassing central bank digital currencies, cryptocurrencies, stablecoins, and virtual currencies used within metaverse economies for transactions, payments, and value exchange without physical representation.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalCurrency
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Financial Technology]]
  - requires:: [[Digital Wallet]], [[Transaction Network]], [[Security Infrastructure]]
  - enables:: [[Digital Payments]], [[Virtual Transactions]], [[Programmable Money]]

- ### Content

  - ## Technical Details
  - **Currency Types**:
		- CBDCs: Central bank issued, centralized ledger
		- Cryptocurrencies: Decentralized, blockchain-based (Bitcoin, Ethereum)
		- Stablecoins: Pegged to fiat or commodities (USDT, USDC)
		- Virtual currencies: In-game or platform-specific tokens
  - **Global CBDC Status (2025–2026)**:
		- 146 countries representing over 98% of global GDP exploring CBDCs as of May 2026; 77 countries in advanced phase (development, pilot, or launch)
		- China e-CNY: processed over 3.4 billion transactions worth ¥16.7 trillion (~$2.3 trillion) by November 2025
		- India e-Rupee: ₹1,016 crore in circulation by March 2025, up ~330% year-on-year; serving ~5 million users across 16 banks
		- 49 active CBDC pilot projects globally as of May 2026; only Bahamas, Jamaica, and Nigeria have fully launched retail CBDCs
  - **Technology Stack**:
		- Distributed ledger technology (DLT)
		- Smart contracts for programmable money
		- Cross-border payment protocols
		- Digital wallet infrastructure
  - **Regulatory Framework**: EU MiCA fully applicable from December 2024, with transitional periods concluding through July 2026; US banned federal retail CBDC via executive order (January 2025) and the GENIUS Act (signed July 2025) established the first federal stablecoin framework
  - ## Applications
  - Cross-border remittances
  - Metaverse commerce
  - Programmable payments
  - Financial inclusion
  - Micropayment systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
