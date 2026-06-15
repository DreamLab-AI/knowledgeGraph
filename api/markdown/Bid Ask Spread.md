public:: true

# Bid Ask Spread

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:bid-ask-spread",
  "@type": "Page",
  "title": "Bid Ask Spread",
  "vc:slug": "bid-ask-spread",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bid-ask-spread",
  "@type": "Class",
  "label": "Bid Ask Spread",
  "definition": "The bid-ask spread is the difference between the highest price a buyer is willing to pay (the bid) and the lowest price a seller will accept (the ask) for an asset at a given moment. It is a core measure of market liquidity and an implicit transaction cost borne by traders who cross the spread. Narrow spreads indicate liquid, competitive markets, while wide spreads reflect thin liquidity, volatility, or elevated risk for liquidity providers.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:market-microstructure",
      "label": "Market Microstructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      },
      {
        "@id": "urn:ngm:class:high-frequency-trading",
        "label": "High-Frequency Trading"
      },
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      },
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
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
  - The bid-ask spread is the difference between the highest price a buyer is willing to pay (the bid) and the lowest price a seller will accept (the ask) for an asset at a given moment. It is a core measure of market liquidity and an implicit transaction cost borne by traders who cross the spread. Narrow spreads indicate liquid, competitive markets, while wide spreads reflect thin liquidity, volatility, or elevated risk for liquidity providers.
  - Related concepts: [[Order Book]], [[Liquidity]], [[Price Discovery]], [[Market Microstructure]], [[Finance]].
- ### Overview
  - The bid-ask spread emerges from the top of the [[Order Book]], where the best bid and best ask meet.
  - It compensates market makers for inventory risk and adverse selection while serving as a real-time gauge of [[Liquidity]].
  - Spread dynamics are central to [[Market Microstructure]] research and to [[High-Frequency Trading]] strategies.
- ### Key aspects
  - Quoted spread: the raw difference between best bid and best ask.
  - Effective spread: realised cost relative to the mid-price at execution.
  - Determinants: liquidity, volatility, order-flow toxicity, and competition among market makers.
  - Inventory and adverse-selection components that drive market-maker quotes.
  - Relationship to depth and the broader [[Order Book]] shape.
- ### Applications
  - Estimating implicit trading costs and transaction-cost analysis.
  - Liquidity monitoring across venues and asset classes.
  - Market-maker quoting and inventory management.
  - Execution algorithms that minimise spread crossing.
- ### Relationships
  - hasPart:: [[Price Discovery]]
  - requires:: [[Liquidity]]
  - requires:: [[Order Book]]
  - relatedTo:: [[Market Microstructure]]
  - relatedTo:: [[High-Frequency Trading]]
  - relatedTo:: [[Price Discovery]]
  - dependsOn:: [[Liquidity]]
  - enables:: [[Price Discovery]]
  - enables:: [[Liquidity]]
  - partOf:: [[Order Book]]
  - partOf:: [[Market Microstructure]]
  - bridgesTo:: [[Finance]]
  - uses:: [[Order Book]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: GapMaterialisation
  - quality:: 0.62
