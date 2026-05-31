public:: true

# CBECI Methodology
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cbeci-methodology",
  "@type": "Page",
  "vc:slug": "cbeci-methodology",
  "title": "CBECI Methodology",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cbeci-methodology",
  "@type": "Class",
  "label": "CBECI Methodology",
  "definition": "The CBECI methodology is the estimation framework underlying the Cambridge Bitcoin Electricity Consumption Index, used to model the Bitcoin network's real-time electricity demand. It derives a plausible consumption range by combining network hashrate, a profitability-weighted mix of mining hardware efficiencies, data-centre overheads, and assumptions about miner economics. The methodology matters because it provides the most widely cited, transparent academic estimate of Bitcoin's energy use and the basis for its carbon analysis.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cbeci", "label": "CBECI"},
      {"@id": "urn:ngm:class:bitcoin-mining", "label": "Bitcoin Mining"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The CBECI Methodology is the estimation approach behind the [[CBECI]], modelling [[Bitcoin Mining]] electricity demand from hashrate, a profitability-weighted hardware efficiency distribution, and overhead assumptions.
- ### Content
  - The model bounds consumption between a lower estimate (most efficient hardware) and an upper estimate (least efficient still-profitable hardware), reporting a best-guess central figure. Carbon estimates extend the methodology by mapping consumption onto a geographically weighted grid emission factor derived from miner location data.
