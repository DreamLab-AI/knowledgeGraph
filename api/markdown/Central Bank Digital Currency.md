public:: true
alias:: CBDC, CentralBankDigitalCurrency

# Central Bank Digital Currency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5f832c6f9d23e989ba56c11217bb56786b3e95795ec19ba3fed7f4096fbfcfa2",
  "@type": "Page",
  "vc:slug": "central-bank-digital-currency",
  "title": "Central Bank Digital Currency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:central-bank-infrastructure",
      "vc:label": "Central Bank Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:financial-inclusion",
      "vc:label": "Financial Inclusion"
    },
    {
      "@id": "urn:visionflow:linked:monetary-policy-transmission",
      "vc:label": "Monetary Policy Transmission"
    },
    {
      "@id": "urn:visionflow:linked:payment-network",
      "vc:label": "Payment Network"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-currency",
      "vc:label": "Digital Currency"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-payments",
      "vc:label": "Digital Payments"
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
      "vc:value": "MV-9817"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Central Bank Digital Currency"
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
  "@id": "urn:ngm:class:central-bank-digital-currency",
  "@type": "Class",
  "label": "Central Bank Digital Currency",
  "definition": "A digital form of sovereign fiat money issued directly by a nation's central bank, representing a liability of the monetary authority that can serve as legal tender for retail payments or wholesale settlement, distinct from commercial bank deposits and decentralized cryptocurrencies.",
  "domain": "finance",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:digital-currency",
    "label": "Digital Currency"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:central-bank-infrastructure",
        "label": "Central Bank Infrastructure"
      },
      {
        "@id": "urn:ngm:class:payment-network",
        "label": "Payment Network"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:kyc-aml-compliance",
        "label": "AML/CFT Compliance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-inclusion",
        "label": "Financial Inclusion"
      },
      {
        "@id": "urn:ngm:class:monetary-policy-transmission",
        "label": "Monetary Policy Transmission"
      },
      {
        "@id": "urn:ngm:class:digital-payments",
        "label": "Digital Payments"
      },
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payments"
      },
      {
        "@id": "urn:ngm:class:programmable-money",
        "label": "Programmable Money"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:monetary-sovereignty",
        "label": "Monetary Sovereignty"
      },
      {
        "@id": "urn:ngm:class:legal-tender",
        "label": "Legal Tender"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:commercial-bank-deposit",
        "label": "Commercial Bank Deposit"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:bank-for-international-settlements",
        "label": "Bank for International Settlements"
      },
      {
        "@id": "urn:ngm:class:international-monetary-fund",
        "label": "International Monetary Fund"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cbdc",
      "label": "CBDC"
    },
    {
      "@id": "urn:ngm:class:sovereign-digital-currency",
      "label": "Sovereign Digital Currency"
    }
  ],
  "quality": 0.68,
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
  "@id": "urn:visionflow:annotation:link-resolutions:central-bank-digital-currency:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5f832c6f9d23e989ba56c11217bb56786b3e95795ec19ba3fed7f4096fbfcfa2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Central Bank Infrastructure]]",
      "resolved": "urn:visionflow:linked:central-bank-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Inclusion]]",
      "resolved": "urn:visionflow:linked:financial-inclusion",
      "kind": "StubLink"
    },
    {
      "raw": "[[Monetary Policy Transmission]]",
      "resolved": "urn:visionflow:linked:monetary-policy-transmission",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Network]]",
      "resolved": "urn:visionflow:linked:payment-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Currency]]",
      "resolved": "urn:visionflow:owl:class:digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:owl:class:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Payments]]",
      "resolved": "urn:visionflow:owl:class:digital-payments",
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
  - A digital form of sovereign fiat money issued directly by a nation's central bank, representing a liability of the monetary authority that can serve as legal tender for retail payments or wholesale settlement, distinct from commercial bank deposits and decentralized cryptocurrencies.

- ### Semantic Classification
  - owl-class:: infrastructure:CentralBankDigitalCurrency
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Currency]]
  - requires:: [[Central Bank Infrastructure]], [[Digital Identity]], [[Payment Network]]
  - enables:: [[Digital Payments]], [[Financial Inclusion]], [[Monetary Policy Transmission]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Global Status** (2024): 134 countries (98% of world GDP) researching CBDCs; Bahamas, Jamaica, Nigeria have launched; China's digital RMB first major economy issuance
  - **Types**:
		- **Retail CBDC**: For households and businesses, everyday transactions
		- **Wholesale CBDC**: For financial institutions, similar to reserves
  - **Monetary Policy Implications**:
		- Can strengthen policy transmission if appropriately designed
		- May increase competition for bank deposits
		- Non-remunerated CBDC could harden zero lower bound
		- Affects reserve management and liquidity forecasting
  - **Design Considerations**:
		- Privacy vs. AML/CFT compliance
		- Token-based vs. account-based
		- Anonymity limitations for illicit activity prevention
  - **US Position** (2025): Executive Order 14178 prohibits federal agencies from establishing or promoting CBDC
  - ## Applications
  - Retail payment modernization
  - Financial inclusion for unbanked populations
  - Cross-border payment efficiency
  - Monetary policy implementation
  - Government benefit distribution

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
