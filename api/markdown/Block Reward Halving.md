public:: true

# Block Reward Halving
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:block-reward-halving",
  "@type": "Page",
  "vc:slug": "block-reward-halving",
  "title": "Block Reward Halving",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:block-reward-halving",
  "@type": "Class",
  "label": "Block Reward Halving",
  "definition": "The block reward halving is the protocol rule in Bitcoin and similar proof-of-work chains that cuts the newly minted coin subsidy paid to miners in half at fixed block intervals, roughly every four years for Bitcoin. This geometric reduction enforces a predictable, disinflationary issuance schedule that converges on a fixed total supply of 21 million bitcoin. Halvings are central to Bitcoin's scarcity narrative and have historically been focal points for market and security-budget analysis.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-value-proposition", "label": "Bitcoin Value Proposition"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The block reward halving periodically halves Bitcoin's mining subsidy, enforcing a fixed, disinflationary supply curve that is core to the [[Bitcoin Value Proposition]].
- ### Content
  - Every 210,000 blocks the coinbase subsidy drops by half, stepping issuance down until it reaches zero around 2140. The mechanism shifts miner revenue toward transaction fees over time and is a key driver of Bitcoin's absolute scarcity and security-budget debates.
