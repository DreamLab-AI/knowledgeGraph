public:: true

# Centralised Finance

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:centralised-finance",
  "@type": "Page",
  "title": "Centralised Finance",
  "vc:slug": "centralised-finance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:centralised-finance",
  "@type": "Class",
  "label": "Centralised Finance",
  "definition": "Centralised Finance (CeFi) is a model of financial service provision in which a trusted intermediary custodies user assets and operates the order books, matching engines and settlement rails on behalf of participants. In the cryptocurrency context it denotes exchanges and lending platforms that hold customer funds in pooled wallets and enforce identity verification, in contrast to non-custodial, smart-contract-mediated alternatives. CeFi platforms offer familiar account models, fiat on-ramps and regulatory compliance at the cost of counterparty trust.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:finance",
      "label": "Finance"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:finance",
      "label": "Finance"
    },
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:self-regulation",
        "label": "Self-Regulation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:centralised-exchange",
        "label": "Centralised Exchange"
      },
      {
        "@id": "urn:ngm:class:custodial-wallet",
        "label": "Custodial Wallet"
      },
      {
        "@id": "urn:ngm:class:kyc",
        "label": "KYC"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:fiat-currency",
        "label": "Fiat Currency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:global-digital-finance",
        "label": "Global Digital Finance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:traditional-finance",
        "label": "Traditional Finance"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Centralised Finance ([[Finance]]) relies on a custodial [[Centralised Exchange]] rather than self-custody.
  - It is the conceptual counterpart of [[Decentralised Finance]] and inherits compliance duties from [[Traditional Finance]].
  - Identity is verified through [[KYC]] and assets settle in [[Fiat Currency]] or [[Stablecoin]].
- ### Overview
  - CeFi platforms aggregate user deposits into pooled accounts and act as the trusted counterparty for trading, lending and custody.
  - Because the operator controls private keys, users delegate security and liquidity management to the institution.
  - The model trades the self-sovereignty of on-chain systems for usability, customer support and regulatory clarity.
- ### Key aspects
  - Custodial holding of user funds in operator-controlled wallets.
  - Order-book matching and internal ledgers rather than on-chain settlement.
  - Mandatory identity verification and anti-money-laundering checks.
  - Fiat on- and off-ramps bridging banking rails to digital assets.
- ### Applications
  - Cryptocurrency exchanges offering spot and derivatives trading.
  - Centralised lending and yield products with managed risk.
  - Brokerage-style retail access to digital assets for non-technical users.
- ### Trade-offs
  - Counterparty and insolvency risk concentrate in the operator.
  - Regulatory compliance can ease institutional adoption.
  - Loss of censorship-resistance compared with on-chain alternatives.
- ### Relationships
  - partOf:: [[Finance]]
  - contrastsWith:: [[Decentralised Finance]]
  - contrastsWith:: [[Self-Regulation]]
  - uses:: [[Centralised Exchange]]
  - uses:: [[Custodial Wallet]]
  - uses:: [[KYC]]
  - requires:: [[Compliance]]
  - requires:: [[Fiat Currency]]
  - relatedTo:: [[Stablecoin]]
  - relatedTo:: [[Tokenomics]]
  - relatedTo:: [[Global Digital Finance]]
  - supports:: [[Liquidity]]
  - dependsOn:: [[Authentication]]
  - bridgesTo:: [[Traditional Finance]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
