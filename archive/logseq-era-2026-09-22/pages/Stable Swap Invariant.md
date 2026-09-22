public:: true

# Stable Swap Invariant
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stable-swap-invariant",
  "@type": "Page",
  "vc:slug": "stable-swap-invariant",
  "title": "Stable Swap Invariant",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stable-swap-invariant",
  "@type": "Class",
  "label": "Stable Swap Invariant",
  "definition": "The stable swap invariant is an automated market maker pricing formula, introduced by Curve Finance, that blends the constant-sum and constant-product curves to provide very low slippage for trades between assets expected to hold near-equal value, such as stablecoins or pegged tokens. Near the balanced point it behaves like a constant-sum market for tight pricing, while curving toward constant-product behaviour as reserves diverge to preserve liquidity. It is the core mechanism enabling efficient stablecoin exchange on-chain.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:liquidity-provision", "label": "Liquidity Provision"},
      {"@id": "urn:ngm:class:decentralized-exchange", "label": "Decentralized Exchange"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The stable swap invariant is an automated market maker [[Economic Mechanism]] that interpolates between constant-sum and constant-product curves to deliver minimal slippage for trades among similarly-valued assets like stablecoins.
- ### Content
  - Near the balanced reserve point the curve approximates constant-sum behaviour for near-1:1 pricing, then bends toward constant-product as reserves skew, protecting the pool from depletion. It is the foundation of stablecoin-focused [[Decentralized Exchange]] pools and shapes the returns and risk profile of [[Liquidity Provision]] in low-volatility asset markets.
