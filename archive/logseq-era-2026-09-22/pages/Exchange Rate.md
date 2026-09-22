public:: true

# Exchange Rate
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:exchange-rate",
  "@type": "Page",
  "title": "Exchange Rate",
  "vc:slug": "exchange-rate",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:exchange-rate",
  "@type": "Class",
  "label": "Exchange Rate",
  "definition": "An exchange rate is the price of one currency expressed in terms of another, determining how much of one monetary unit is required to purchase a unit of the other. Exchange rates are set in foreign-exchange markets through supply and demand, influenced by interest rates, inflation, trade balances, and central-bank policy, and may float freely, be pegged, or be managed. In crypto and stablecoin contexts the same concept governs the peg between a token and a fiat reference. Exchange rates are fundamental to international trade, monetary policy transmission, and cross-border value transfer.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:finance",
      "label": "Finance"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:foreign-exchange",
        "label": "Foreign Exchange"
      },
      {
        "@id": "urn:ngm:class:forex",
        "label": "Forex"
      },
      {
        "@id": "urn:ngm:class:fiat-currency",
        "label": "Fiat Currency"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:supply-and-demand",
        "label": "Supply and Demand"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:international-trade",
        "label": "International Trade"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:derivatives-trading",
        "label": "Derivatives Trading"
      },
      {
        "@id": "urn:ngm:class:hedging",
        "label": "Hedging"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:peg-mechanism",
        "label": "Peg Mechanism"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:macroeconomics",
        "label": "Macroeconomics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - An [[Exchange Rate]] is the price of one currency in terms of another, set in [[Foreign Exchange]] markets by [[Supply and Demand]] and shaped by [[Monetary Policy]] and [[Central Bank]] action, and underpinning [[International Trade]].

- ### Overview
  - Exchange rates translate value between distinct monetary systems and are determined continuously in the world's largest financial market, the foreign-exchange (forex) market.
  - A rate may be quoted directly or indirectly, and regimes range from free floats, where the market clears the rate, through managed floats to hard pegs maintained by central-bank intervention.
  - Drivers include relative interest rates, inflation differentials (purchasing-power considerations), trade and capital flows, and market expectations about future policy.

- ### Key aspects
  - Spot versus forward rates: the immediate settlement price versus contractually agreed future rates used for hedging.
  - Regime types: floating, pegged, and managed-float arrangements, each with distinct policy trade-offs.
  - Transmission: exchange-rate movements feed into import prices, inflation, and the competitiveness of exports.
  - Pegs and stablecoins: maintaining a fixed exchange rate, whether by reserves or by an on-chain peg mechanism, requires credible backing and intervention capacity.

- ### Applications
  - Pricing cross-border trade and remittances.
  - Hedging currency risk with forwards, futures, and options.
  - Anchoring stablecoin value to a fiat reference via a peg mechanism.

- ### Relationships
  - relatedTo:: [[Foreign Exchange]]
  - relatedTo:: [[Forex]]
  - relatedTo:: [[Fiat Currency]]
  - dependsOn:: [[Supply and Demand]]
  - dependsOn:: [[Monetary Policy]]
  - uses:: [[Central Bank]]
  - enables:: [[International Trade]]
  - supports:: [[Derivatives Trading]]
  - supports:: [[Hedging]]
  - contrastsWith:: [[Peg Mechanism]]
  - bridgesTo:: [[Macroeconomics]]
  - partOf:: [[Finance]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
