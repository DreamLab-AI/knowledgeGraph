public:: true

# Yield Optimisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:yield-optimisation", "@type":"Page", "title":"Yield Optimisation", "vc:slug":"yield-optimisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:yield-optimisation",
  "@type": "Class",
  "label": "Yield Optimisation",
  "definition": "Yield optimisation is the automated process of allocating deposited capital across decentralised finance protocols and strategies to maximise risk-adjusted returns, typically by continuously monitoring yield rates, harvesting rewards and rebalancing positions between lending markets, liquidity pools and staking contracts. It is the strategic objective that yield aggregators and vaults implement on a user's behalf, reducing the manual effort and gas cost of chasing the best available rate. Yield optimisation strategies must balance expected return against smart-contract risk, impermanent loss and reward-token volatility.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-finance",
      "label": "Decentralised Finance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:yield-aggregator",
        "label": "Yield Aggregator"
      },
      {
        "@id": "urn:ngm:class:curve-wars",
        "label": "Curve Wars"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Yield optimisation is the automated process of allocating deposited capital across decentralised finance protocols and strategies to maximise risk-adjusted returns, typically by continuously monitoring yield rates, harvesting rewards and rebalancing positions between lending markets, liquidity pools and staking contracts. It is the strategic objective that yield aggregators and vaults implement on a user's behalf, reducing the manual effort and gas cost of chasing the best available rate. Yield optimisation strategies must balance expected return against smart-contract risk, impermanent loss and reward-token volatility.
- ### Relationships
	- partOf:: [[Decentralised Finance]]
	- relatedTo:: [[Yield Aggregator]]
	- relatedTo:: [[Curve Wars]]
