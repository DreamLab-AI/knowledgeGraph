public:: true

# Digital Money
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4baed414191e63dfe34f4939895abd824a6461682942fa5dc18b9b0ca08e8766",
  "@type": "Page",
  "vc:slug": "digital-money",
  "title": "Digital Money",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:electronic-payments",
      "vc:label": "Electronic Payments"
    },
    {
      "@id": "urn:visionflow:linked:instant-settlement",
      "vc:label": "Instant Settlement"
    },
    {
      "@id": "urn:visionflow:linked:payment-network",
      "vc:label": "Payment Network"
    },
    {
      "@id": "urn:visionflow:linked:programmable-money",
      "vc:label": "Programmable Money"
    },
    {
      "@id": "urn:visionflow:linked:security-infrastructure",
      "vc:label": "Security Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:financial-instruments",
      "vc:label": "Financial Instruments"
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
      "vc:value": "MV-9862"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Money"
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
  "@id": "urn:ngm:class:digital-money",
  "@type": "Class",
  "label": "Digital Money",
  "definition": "Any form of monetary value existing purely in electronic format, encompassing e-money, central bank digital currencies, cryptocurrencies, and stablecoins, that can be stored, transferred, and transacted electronically across payment networks, metaverse economies, and blockchain systems.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:financial-instruments",
        "label": "Financial Instruments"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:payment-network",
        "label": "Payment Network"
      },
      {
        "@id": "urn:ngm:class:security-infrastructure",
        "label": "Security Infrastructure"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:instant-settlement",
        "label": "Instant Settlement"
      },
      {
        "@id": "urn:ngm:class:programmable-money",
        "label": "Programmable Money"
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-money:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4baed414191e63dfe34f4939895abd824a6461682942fa5dc18b9b0ca08e8766"
  },
  "vc:resolutions": [
    {
      "raw": "[[Electronic Payments]]",
      "resolved": "urn:visionflow:linked:electronic-payments",
      "kind": "StubLink"
    },
    {
      "raw": "[[Instant Settlement]]",
      "resolved": "urn:visionflow:linked:instant-settlement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Network]]",
      "resolved": "urn:visionflow:linked:payment-network",
      "kind": "StubLink"
    },
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
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:owl:class:digital-wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Instruments]]",
      "resolved": "urn:visionflow:owl:class:financial-instruments",
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
  - Any form of monetary value existing purely in electronic format, encompassing e-money, central bank digital currencies, cryptocurrencies, and stablecoins, that can be stored, transferred, and transacted electronically across payment networks, metaverse economies, and blockchain systems.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalMoney
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Financial Instruments]]
  - requires:: [[Digital Wallet]], [[Payment Network]], [[Security Infrastructure]]
  - enables:: [[Electronic Payments]], [[Programmable Money]], [[Instant Settlement]]

- ### Content

  - ## Technical Details
  - **Forms of Digital Money**:
		- E-money: Centralized, regulated digital value
		- CBDCs: Central bank issued digital currency
		- Cryptocurrencies: Decentralized, blockchain-based
		- Stablecoins: Value-pegged digital assets
  - **Stablecoin Market (2025-2026)**:
		- $33 trillion transaction volume in 2025 (72% increase year-on-year)
		- ~$322 billion market cap (May 2026), exceeding FX reserves of 95 nations
		- USDT holds ~58% market share; USDC is second largest
		- Ethereum hosts ~60% of global stablecoin supply
  - **Technology Foundation**:
		- Distributed ledger technology (DLT)
		- Smart contracts for programmability
		- Cryptographic security
		- Instant 24/7 settlement capability
  - **Regulatory Landscape**: EU MiCAR June 2024, global CBDC exploration
  - ## Applications
  - Cross-border remittances
  - Metaverse transactions
  - Micropayments
  - Financial inclusion
  - Programmable finance

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
