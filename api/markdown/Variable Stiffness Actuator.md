public:: true

# Variable Stiffness Actuator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:variable-stiffness-actuator",
  "@type": "Page",
  "vc:slug": "variable-stiffness-actuator",
  "title": "Variable Stiffness Actuator",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:variable-stiffness-actuator",
  "@type": "Class",
  "label": "Variable Stiffness Actuator",
  "definition": "A variable stiffness actuator (VSA) is a compliant robotic actuator whose mechanical stiffness can be adjusted independently of its position, typically using antagonistic springs or adjustable elastic elements. This adjustable compliance lets robots store and release energy, absorb impacts and interact safely with humans and uncertain environments. VSAs are central to safe, energy-efficient force control in physical human-robot interaction.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Robot Actuation and Control"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:force-control", "label": "Force Control"}, {"@id": "urn:ngm:class:pneumatic-actuator", "label": "Pneumatic Actuator"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A variable stiffness actuator adjusts its mechanical compliance independently of position, supporting [[Force Control]] and contrasting with the soft compliance of a [[Pneumatic Actuator]].
- ### Content
  - VSAs use antagonistic spring arrangements or mechanically tunable elastic transmissions to set stiffness on demand. Lowering stiffness improves safety and impact absorption, while raising it enables precise positioning, making VSAs valuable for collaborative robots, prosthetics and dynamic locomotion.
