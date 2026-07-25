public:: true

# Market Depth
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:market-depth",
  "@type": "Page",
  "title": "Market Depth",
  "vc:slug": "market-depth",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:market-depth",
  "@type": "Class",
  "label": "Market Depth",
  "definition": "Market depth is a measure of the volume of buy and sell orders resting at different price levels around the current market price for an asset, indicating how much trading volume a market can absorb before price moves significantly. Greater depth means large orders can be filled with less price impact, and is a direct expression of the liquidity that market makers and liquidity providers supply to a market. Market depth is typically visualised as an order book showing cumulative bid and ask volume by price level.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:liquidity",
      "label": "Liquidity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - Market depth is a measure of the volume of buy and sell orders resting at different price levels around the current market price for an asset, indicating how much trading volume a market can absorb before price moves significantly.
  - It is a subclass of [[Liquidity]].
- ### Content
  - Market depth is a measure of the volume of buy and sell orders resting at different price levels around the current market price for an asset, indicating how much trading volume a market can absorb before price moves significantly. Greater depth means large orders can be filled with less price impact, and is a direct expression of the liquidity that market makers and liquidity providers supply to a market. Market depth is typically visualised as an order book showing cumulative bid and ask volume by price level.
