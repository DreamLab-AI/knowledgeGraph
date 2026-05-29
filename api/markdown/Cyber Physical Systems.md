```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:cyber-physical-systems",
  "title": "Cyber Physical Systems",
  "vc:slug": "cyber-physical-systems",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cyber-physical-systems",
  "@type": "Class",
  "label": "Cyber Physical Systems",
  "definition": "Cyber Physical Systems (CPS) are engineered systems that tightly integrate computational processes with physical dynamics through networked sensing, actuation, and control. CPS span autonomous vehicles, industrial automation, smart infrastructure, and medical devices, requiring real-time feedback loops, embedded computing, and communication across heterogeneous networks while meeting safety-critical timing and reliability constraints.",
  "domain": "robotics",
  "maturity": "emerging",
  "quality": 0.3,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"},
      {"@id": "urn:ngm:class:industrial-automation", "label": "IndustrialAutomation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ]
  }
}
```

## Cyber Physical Systems

Cyber Physical Systems (CPS) are engineered systems that tightly integrate computational processes with physical dynamics through networked sensing, actuation, and control. CPS span autonomous vehicles, industrial automation, smart infrastructure, and medical devices, requiring real-time feedback loops, embedded computing, and communication across heterogeneous networks while meeting safety-critical timing and reliability constraints.

### Relationships
- requires [[Embedded Systems]]
- requires [[Internet of Things]]
- enables [[Autonomous Vehicle]]
- enables [[IndustrialAutomation]]
- relatedTo [[Digital Twin]]
- relatedTo [[Edge Computing]]
