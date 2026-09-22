public:: true

# Stablecoins on Bitcoin
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stablecoins-on-bitcoin",
  "@type": "Page",
  "vc:slug": "stablecoins-on-bitcoin",
  "title": "Stablecoins on Bitcoin",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stablecoins-on-bitcoin",
  "@type": "Class",
  "label": "Stablecoins on Bitcoin",
  "definition": "Stablecoins on Bitcoin are price-stable tokens issued and transferred on Bitcoin-based protocols such as Taproot Assets, Liquid, or RGB, rather than on smart-contract chains like Ethereum. They aim to bring dollar-denominated value transfer to the Bitcoin ecosystem, leveraging Bitcoin's settlement security and, where combined with the Lightning Network, near-instant low-cost payments. They extend Bitcoin's utility from a single monetary asset toward a broader settlement layer for fiat-pegged value.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:btc-layer-3", "label": "BTC Layer 3"},
      {"@id": "urn:ngm:class:taproot-assets", "label": "Taproot Assets"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Stablecoins on Bitcoin are fiat-pegged [[Digital Asset]] tokens issued on Bitcoin-native protocols such as [[Taproot Assets]], Liquid, or RGB, bringing dollar-denominated value transfer to the Bitcoin ecosystem.
- ### Content
  - These tokens inherit Bitcoin's settlement assurances and, when routed over Lightning or higher layers, can move with near-instant finality and low fees. Their issuance is closely tied to [[BTC Layer 3]] and asset-overlay designs that add programmable token semantics atop Bitcoin without altering its base consensus, broadening Bitcoin from a single store-of-value asset toward a general settlement rail for pegged value.
