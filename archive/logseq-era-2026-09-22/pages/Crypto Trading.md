public:: true

# Crypto Trading
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:crypto-trading",
  "@type": "Page",
  "vc:slug": "crypto-trading",
  "title": "Crypto Trading",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:crypto-trading",
  "@type": "Class",
  "label": "Crypto Trading",
  "definition": "Crypto trading is the buying and selling of cryptocurrencies and digital assets for profit, conducted on centralised exchanges, decentralised exchanges, and over-the-counter desks. It spans spot, margin, derivatives, and algorithmic strategies, with prices driven by liquidity, sentiment, and on-chain activity. It is a primary use case and liquidity source for the broader crypto-asset market.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:financial-services", "label": "Financial Services"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:kraken", "label": "Kraken"}, {"@id": "urn:ngm:class:tether", "label": "Tether"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Crypto trading is the exchange of digital assets to capture price movements across spot, derivative, and algorithmic markets. It is enabled by venues such as [[Kraken]] and by settlement assets like [[Tether]].
- ### Content
  - Traders operate on order-book exchanges and automated market makers, using stablecoins as a quote currency and liquidity bridge between volatile assets. The space is characterised by 24/7 markets, high volatility, leverage availability, and significant exposure to exchange counterparty risk, custody practices, and evolving regulation.
