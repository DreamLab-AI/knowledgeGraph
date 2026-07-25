public:: true

# Demand Response Mining
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:demand-response-mining",
  "@type": "Page",
  "vc:slug": "demand-response-mining",
  "title": "Demand Response Mining",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:demand-response-mining",
  "@type": "Class",
  "label": "Demand Response Mining",
  "definition": "Demand response mining is the practice of operating cryptocurrency miners as a flexible, interruptible electrical load that ramps up or down in response to grid conditions and price signals. Miners absorb surplus or stranded generation and shut off during peak demand, helping balance the grid while monetising otherwise curtailed energy. It is studied as both a grid-stabilisation tool and a mitigation for the environmental criticism of proof-of-work mining.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:stranded-energy-monetisation", "label": "Stranded Energy Monetisation"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-environmental-issues", "label": "Bitcoin Environmental Issues"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Demand response mining treats crypto miners as a controllable load that follows grid signals, enabling [[Stranded Energy Monetisation]] of otherwise wasted generation. It is a recurring theme in debates over [[Bitcoin Environmental Issues]].
- ### Content
  - Because miners can pause within seconds and have no minimum runtime, they pair well with intermittent renewables and frequency-regulation markets. Critics question net emissions and grid lock-in, while proponents cite reduced flaring, improved renewable economics, and faster curtailment recovery.
