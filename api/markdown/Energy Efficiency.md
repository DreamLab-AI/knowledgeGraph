public:: true

# Energy Efficiency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:energy-efficiency",
  "@type": "Page",
  "vc:slug": "energy-efficiency",
  "title": "Energy Efficiency",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:energy-efficiency",
  "@type": "Class",
  "label": "Energy Efficiency",
  "definition": "Energy efficiency is the property of a system that achieves a given output or function while consuming the least possible energy. In computing, robotics, and control systems it is measured as useful work per unit of energy, and is improved through better algorithms, hardware, scheduling, and motion optimisation. It is a core sustainability objective because reductions in energy draw lower operating cost and carbon footprint without sacrificing performance.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}, {"@id": "urn:ngm:class:velocity-control", "label": "Velocity Control"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Energy efficiency maximises useful output per unit of energy consumed, a defining concern of [[Sustainability]] and a benefit enabled by precise [[Velocity Control]] in motion systems.
- ### Content
  - Efficiency gains come from algorithmic optimisation, low-power hardware, and tight control loops that avoid wasted actuation. In robotics, smooth velocity profiles reduce overshoot and braking losses, directly improving the energy-per-task metric.
