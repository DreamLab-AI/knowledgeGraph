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
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:financial-technology",
      "label": "Financial Technology"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:security-infrastructure",
        "label": "Security Infrastructure"
      },
      {
        "@id": "urn:ngm:class:transaction-network",
        "label": "Transaction Network"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
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

bridges-to:: [[Blockchain]]

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
  - **Global CBDC Status (2024)**:
		- 134 countries (98% of GDP) exploring CBDCs
		- China e-CNY: 7 trillion yuan ($986B) transaction volume
		- India e-rupee: 334% growth, ₹10.16 billion in circulation
		- 91% of surveyed central banks exploring retail or wholesale CBDCs
  - **Technology Stack**:
		- Distributed ledger technology (DLT)
		- Smart contracts for programmable money
		- Cross-border payment protocols
		- Digital wallet infrastructure
  - **Regulatory Framework**: EU MiCAR effective June 2024, US halted retail CBDC work 2025
  - ## Applications
  - Cross-border remittances
  - Metaverse commerce
  - Programmable payments
  - Financial inclusion
  - Micropayment systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
