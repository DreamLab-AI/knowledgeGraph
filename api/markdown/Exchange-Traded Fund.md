public:: true

# Exchange-Traded Fund
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:exchange-traded-fund",
  "@type": "Page",
  "vc:slug": "exchange-traded-fund",
  "title": "Exchange-Traded Fund",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:exchange-traded-fund",
  "@type": "Class",
  "label": "Exchange-Traded Fund",
  "definition": "An exchange-traded fund (ETF) is a pooled investment vehicle whose shares trade on a stock exchange throughout the day at market prices. It typically tracks an index, asset, or basket of assets and uses a create-redeem mechanism with authorised participants to keep its price close to net asset value. ETFs combine the diversification of funds with the intraday liquidity and accessibility of listed securities.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:spot-bitcoin-etf", "label": "Spot Bitcoin ETF"}, {"@id": "urn:ngm:class:bitcoin-etf", "label": "Bitcoin ETF"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An exchange-traded fund is an exchange-listed pooled investment that tracks an asset or index, the general category specialised by [[Spot Bitcoin ETF]] and [[Bitcoin ETF]].
- ### Content
  - Authorised participants create and redeem shares to keep ETF prices aligned with net asset value, providing intraday liquidity. Crypto ETFs extend this regulated wrapper to digital assets, giving traditional investors exposure without direct custody.
