public:: true

# Electrical Power
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:electrical-power",
  "@type": "Page",
  "vc:slug": "electrical-power",
  "title": "Electrical Power",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:electrical-power",
  "@type": "Class",
  "label": "Electrical Power",
  "definition": "Electrical Power is the rate at which electrical energy is transferred or consumed by a system, measured in watts. It is the fundamental resource that drives compute infrastructure, robotic actuators, sensors, and communications equipment. The availability, capacity, and efficiency of electrical power are primary constraints on data-centre scale and on the autonomy of mobile and robotic systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-infrastructure", "label": "Digital Infrastructure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"}, {"@id": "urn:ngm:class:electric-actuator", "label": "Electric Actuator"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Electrical Power is the rate of electrical energy transfer, measured in watts, that energises computing and robotic systems. It is required by [[Compute Infrastructure]] and by every [[Electric Actuator]] in a robot.
- ### Content
  - Power delivery, conversion efficiency, and thermal limits shape the design of data centres, edge devices, and battery-powered robots. Rising compute demand makes power capacity and sourcing a central planning and sustainability concern, while actuator power budgets constrain robot payload, speed, and runtime.
