public:: true

# Halving Schedule
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:halving-schedule",
  "@type": "Page",
  "vc:slug": "halving-schedule",
  "title": "Halving Schedule",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:halving-schedule",
  "@type": "Class",
  "label": "Halving Schedule",
  "definition": "The halving schedule is the predetermined, code-enforced rule in proof-of-work cryptocurrencies that periodically cuts the block subsidy paid to miners by half. In Bitcoin this occurs every 210,000 blocks (roughly four years), progressively reducing new issuance until the 21 million supply cap is reached. It is the core monetary policy mechanism that makes the asset's supply predictable and disinflationary.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-mining", "label": "Bitcoin Mining"},
      {"@id": "urn:ngm:class:bitcoin-technical-overview", "label": "Bitcoin Technical Overview"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The halving schedule is the issuance-reduction rule implemented by [[Bitcoin Mining]] and described in the [[Bitcoin Technical Overview]], halving the block reward at fixed block-height intervals.
- ### Content
  - Each halving lowers miner revenue from new coins, shifting the fee/subsidy balance and historically acting as a focal point for supply-shock narratives. Because the schedule is encoded in consensus rules, it provides a transparent, non-discretionary monetary policy distinct from central-bank issuance.
