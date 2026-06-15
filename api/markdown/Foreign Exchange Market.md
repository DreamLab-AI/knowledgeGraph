public:: true

# Foreign Exchange Market

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:foreign-exchange-market",
  "@type": "Page",
  "title": "Foreign Exchange Market",
  "vc:slug": "foreign-exchange-market",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:foreign-exchange-market",
  "@type": "Class",
  "label": "Foreign Exchange Market",
  "definition": "The foreign exchange market is the global, decentralised marketplace in which national currencies are bought, sold and exchanged at floating or managed rates. It is the largest and most liquid financial market in the world, operating continuously across major trading centres and enabling international trade, investment and the conversion of one fiat currency into another. Exchange rates set in this market influence cross-border payments, monetary policy transmission and international price competitiveness.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:monetary-system",
      "label": "Monetary System"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fiat-currency",
        "label": "Fiat Currency"
      },
      {
        "@id": "urn:ngm:class:exchange-mechanism",
        "label": "Exchange Mechanism"
      },
      {
        "@id": "urn:ngm:class:financial-trading",
        "label": "Financial Trading"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payments"
      },
      {
        "@id": "urn:ngm:class:monetary-system",
        "label": "Monetary System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:monetary-policy-transmission",
        "label": "Monetary Policy Transmission"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:algorithmic-trading",
        "label": "Algorithmic Trading"
      },
      {
        "@id": "urn:ngm:class:high-frequency-trading",
        "label": "High-Frequency Trading"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cryptocurrency-exchange",
        "label": "Cryptocurrency Exchange"
      },
      {
        "@id": "urn:ngm:class:centralised-exchange",
        "label": "Centralised Exchange"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:payment-settlement",
        "label": "Payment Settlement"
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
  - Relates to [[Fiat Currency]]
  - Relates to [[Monetary System]]
  - Relates to [[Cross-Border Payments]]
  - Relates to [[Liquidity]]
  - Relates to [[Exchange Mechanism]]
- ### Overview
  - Currencies trade in pairs, with the exchange rate expressing the relative value of one against another.
  - The market spans spot, forward, swap and options segments and is dominated by major reserve currencies.
  - Participants include central banks, commercial banks, multinational corporations, asset managers and retail traders.
  - Price formation is continuous and driven by interest-rate differentials, trade flows, capital movements and macroeconomic expectations.
- ### Key aspects
  - **Currency pairs** — Quotations express the value of a base currency in terms of a quote currency, with major, minor and exotic pairs distinguished by liquidity.
  - **Market segments** — Spot trades settle quickly, while forwards, swaps and options provide hedging and exposure management over longer horizons.
  - **Liquidity and depth** — Deep order books and continuous trading produce tight spreads in major pairs and wider spreads in thinly traded ones.
  - **Rate regimes** — Floating, managed-float and pegged regimes determine how much intervention shapes observed exchange rates.
- ### Applications
  - International trade settlement and invoicing across currency zones.
  - Corporate treasury hedging of currency exposure on receivables and payables.
  - Portfolio diversification and carry-trade strategies by investors.
  - Central-bank intervention to stabilise or steer a domestic currency.
- ### Relationships
  - subClassOf:: [[Monetary System]]
  - relatedTo:: [[Fiat Currency]]
  - relatedTo:: [[Exchange Mechanism]]
  - relatedTo:: [[Financial Trading]]
  - bridgesTo:: [[Cross-Border Payments]]
  - bridgesTo:: [[Monetary System]]
  - supports:: [[Liquidity Provision]]
  - supports:: [[Monetary Policy Transmission]]
  - uses:: [[Algorithmic Trading]]
  - uses:: [[High-Frequency Trading]]
  - dependsOn:: [[Liquidity]]
  - dependsOn:: [[Central Bank]]
  - contrastsWith:: [[Cryptocurrency Exchange]]
  - contrastsWith:: [[Centralised Exchange]]
  - requires:: [[Payment Settlement]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
