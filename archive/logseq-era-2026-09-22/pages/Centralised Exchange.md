public:: true

# Centralised Exchange

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:centralised-exchange",
  "@type": "Page",
  "title": "Centralised Exchange",
  "vc:slug": "centralised-exchange",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:centralised-exchange",
  "@type": "Class",
  "label": "Centralised Exchange",
  "definition": "A centralised exchange (CEX) is a custodial trading venue operated by a single company that matches buy and sell orders for cryptocurrencies and other assets through an internal order book. Users deposit funds into accounts the operator controls, and the exchange maintains the ledger of balances off-chain, settling trades internally rather than on a public blockchain. Centralised exchanges typically enforce identity verification and provide high liquidity and fast execution, at the cost of requiring trust in the operator.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-infrastructure",
      "label": "Financial Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      },
      {
        "@id": "urn:ngm:class:kyc",
        "label": "KYC"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:aml",
        "label": "AML"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:binance",
        "label": "Binance"
      },
      {
        "@id": "urn:ngm:class:coinbase",
        "label": "Coinbase"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:financial-services",
        "label": "Financial Services"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
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
  - A custodial trading venue that matches orders through an internal [[Order Book]].
  - Holds user funds in [[Custody]] and settles trades off-chain on its own ledger.
  - Enforces [[KYC]] and [[AML]] checks via [[Identity Verification]].
- ### Overview
  - Centralised exchanges are the most common on-ramp between fiat and crypto assets.
  - The operator runs matching, custody, and settlement, so users trust the company rather than code.
  - High [[Liquidity]] and low latency come from internalised order matching.
  - Regulatory obligations make them subject to licensing, audits and reporting.
- ### Key aspects
  - Internal order book and matching engine.
  - Custodial wallets holding pooled user balances.
  - Fiat gateways and banking relationships.
  - Compliance stack for sanctions screening and reporting.
- ### Applications
  - Spot and derivatives trading of digital assets.
  - Fiat-to-crypto and crypto-to-fiat conversion.
  - Market-making and institutional execution.
- ### Relationships
  - hasPart:: [[Order Book]]
  - requires:: [[Custody]]
  - requires:: [[KYC]]
  - implements:: [[AML]]
  - enables:: [[Liquidity]]
  - uses:: [[Identity Verification]]
  - contrastsWith:: [[Decentralised Exchange]]
  - relatedTo:: [[Binance]]
  - relatedTo:: [[Coinbase]]
  - relatedTo:: [[Blockchain]]
  - relatedTo:: [[Financial Services]]
  - supports:: [[Liquidity]]
- ### Provenance
  - updated:: 2026-06-15
