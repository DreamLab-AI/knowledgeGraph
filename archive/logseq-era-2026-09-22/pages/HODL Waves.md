public:: true

# HODL Waves
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hodl-waves",
  "@type": "Page",
  "vc:slug": "hodl-waves",
  "title": "HODL Waves",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hodl-waves",
  "@type": "Class",
  "label": "HODL Waves",
  "definition": "HODL Waves is an on-chain analytics visualisation that bands the entire Bitcoin supply by the age since each coin last moved, showing what proportion is held over various time horizons. The coloured bands reveal accumulation and distribution behaviour, distinguishing long-term holders from short-term speculators. It is a key tool for interpreting holder conviction and market cycles from blockchain data.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-distribution", "label": "Bitcoin Distribution"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - HODL Waves is an age-banded on-chain metric that implements a view of [[Bitcoin Distribution]], partitioning supply by how long coins have remained unspent.
- ### Content
  - Each band aggregates UTXOs by last-moved age, so widening older bands signals long-term holding and conviction while expanding young bands indicates active trading. Analysts read shifts between bands around market tops and bottoms to gauge whether supply is being accumulated by patient holders or sold into rallies.
