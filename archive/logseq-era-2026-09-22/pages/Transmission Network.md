public:: true

# Transmission Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:transmission-network",
  "@type": "Page",
  "vc:slug": "transmission-network",
  "title": "Transmission Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transmission-network",
  "@type": "Class",
  "label": "Transmission Network",
  "definition": "A transmission network is the high-voltage infrastructure that carries bulk electrical power over long distances from generation sites to distribution substations near consumers. Comprising transmission lines, transformers, and switching stations, it minimises resistive losses through high voltages and is operated as a synchronised grid balancing supply and demand in real time.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-infrastructure", "label": "Digital Infrastructure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:energy-and-power", "label": "Energy and Power"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The high-voltage grid infrastructure that transports bulk electricity from generators to distribution substations with minimal loss. It is a foundational component of the [[Energy and Power]] system.
- ### Content
  - Transmission operators continuously balance generation against load while maintaining frequency and voltage within tight tolerances across interconnected regions. Modern networks integrate variable renewables, HVDC links, and digital monitoring to improve resilience, capacity, and the routing of power across wide geographies.
