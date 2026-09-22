public:: true

# Cryptocurrency Exchange

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:cryptocurrency-exchange",
  "@type": "Page",
  "title": "Cryptocurrency Exchange",
  "vc:slug": "cryptocurrency-exchange",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptocurrency-exchange",
  "@type": "Class",
  "label": "Cryptocurrency Exchange",
  "definition": "A cryptocurrency exchange is a platform that enables the trading of digital assets for other cryptocurrencies or for fiat currency. Exchanges match buy and sell orders, provide custody or settlement of funds, and supply liquidity and price discovery for crypto markets. They range from centralised intermediaries holding customer assets to decentralised protocols that execute trades on-chain.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-economy",
      "label": "Digital Economy"
    }
  ],
  "relations": {
    "supports": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      },
      {
        "@id": "urn:ngm:class:hot-wallet",
        "label": "Hot Wallet"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:tether",
        "label": "Tether"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kyc",
        "label": "KYC"
      },
      {
        "@id": "urn:ngm:class:fiat-currency",
        "label": "Fiat Currency"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      },
      {
        "@id": "urn:ngm:class:centralised-exchange",
        "label": "Centralised Exchange"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:fiat-currency",
        "label": "Fiat Currency"
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
  - A cryptocurrency exchange is a platform that enables the trading of digital assets for other cryptocurrencies or for fiat currency. Exchanges match buy and sell orders, provide custody or settlement of funds, and supply liquidity and price discovery for crypto markets. They range from centralised intermediaries holding customer assets to decentralised protocols that execute trades on-chain.
  - Related: [[Cryptocurrency]] [[Digital Economy]] [[Order Book]] [[Liquidity]]
- ### Overview
  - Exchanges are the primary on-ramp and off-ramp between fiat and crypto economies. Centralised exchanges operate order books and custody, while decentralised exchanges use automated market makers and smart contracts to settle trades without a trusted intermediary.
- ### Key aspects
  - Order books and matching engines for price discovery
  - Custody of customer assets in hot and cold wallets
  - Liquidity provision and market making
  - Know-your-customer and anti-money-laundering compliance
  - Fiat on-ramps and stablecoin settlement
- ### Applications
  - Spot and derivatives trading of digital assets
  - Conversion between fiat currency and cryptocurrency
  - Liquidity provision for tokens and stablecoins
  - Custodial and settlement services for institutions
- ### Relationships
  - subClassOf:: [[Digital Economy]]
  - supports:: [[Liquidity]]
  - supports:: [[Custody]]
  - hasPart:: [[Order Book]]
  - hasPart:: [[Hot Wallet]]
  - hasPart:: [[Wallet]]
  - relatedTo:: [[Cryptocurrency]]
  - relatedTo:: [[Bitcoin]]
  - relatedTo:: [[Tether]]
  - relatedTo:: [[Stablecoin]]
  - uses:: [[KYC]]
  - uses:: [[Fiat Currency]]
  - partOf:: [[Digital Economy]]
  - contrastsWith:: [[Decentralised Exchange]]
  - contrastsWith:: [[Centralised Exchange]]
  - requires:: [[Custody]]
  - requires:: [[Blockchain]]
  - enables:: [[Liquidity]]
  - bridgesTo:: [[Fiat Currency]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
