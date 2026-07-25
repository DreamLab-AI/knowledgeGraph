public:: true

# Quantitative Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:quantitative-finance",
  "@type": "Page",
  "vc:slug": "quantitative-finance",
  "title": "Quantitative Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quantitative-finance",
  "@type": "Class",
  "label": "Quantitative Finance",
  "definition": "Quantitative finance is the application of mathematical models, statistical methods, and computational techniques to financial markets for pricing, risk management, and trading. It draws heavily on stochastic calculus, probability theory, and optimisation to value derivatives, model asset dynamics, and construct portfolios. It is the analytical backbone of derivatives desks, algorithmic trading, and risk analytics.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:financial-services", "label": "Financial Services"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:stochastic-processes", "label": "Stochastic Processes"},
      {"@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Quantitative finance applies mathematical and computational models to pricing, risk, and trading. It is enabled by [[Stochastic Processes]] and supported by [[Stochastic Process]] theory for modelling asset and rate dynamics.
- ### Content
  - Core techniques include Black-Scholes-Merton option pricing, Monte Carlo simulation, and stochastic differential equations for modelling prices, volatility, and interest rates. The discipline now overlaps heavily with machine learning for alpha signals and with high-performance computing for low-latency execution and large-scale risk simulation.
