public:: true

# Market Efficiency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:market-efficiency",
  "@type": "Page",
  "vc:slug": "market-efficiency",
  "title": "Market Efficiency",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:market-efficiency",
  "@type": "Class",
  "label": "Market Efficiency",
  "definition": "Market efficiency is the degree to which asset prices fully and rapidly reflect all available information, leaving no systematic opportunity for risk-adjusted excess returns. The efficient-market hypothesis frames it in weak, semi-strong, and strong forms according to the information set incorporated. Higher efficiency implies accurate price signals, lower transaction costs, and effective capital allocation.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:price-discovery", "label": "Price Discovery"}, {"@id": "urn:ngm:class:consumer-protection", "label": "Consumer Protection"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Market efficiency measures how quickly and completely prices absorb available information, constraining the scope for abnormal returns. It is closely tied to [[Price Discovery]] and supports [[Consumer Protection]] through fair, transparent pricing.
- ### Content
  - Frictions such as information asymmetry, transaction costs, and behavioural biases reduce efficiency, motivating market design that improves transparency and liquidity. In decentralised finance, efficiency depends on arbitrage between venues, oracle accuracy, and the depth of automated market-maker liquidity.
