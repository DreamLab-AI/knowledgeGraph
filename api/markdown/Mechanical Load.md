public:: true

# Mechanical Load
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mechanical-load",
  "@type": "Page",
  "vc:slug": "mechanical-load",
  "title": "Mechanical Load",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mechanical-load",
  "@type": "Class",
  "label": "Mechanical Load",
  "definition": "A mechanical load is the external force, torque, or resistance that a motor, actuator, or structure must work against during operation. Characterised by inertia, friction, gravity, and process forces, it determines the torque-speed demand placed on a drive system. Accurate load characterisation is essential for sizing motors, selecting gearing, and designing stable control.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Robotics Actuation and Control"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:dc-servo-motor", "label": "DC Servo Motor"}, {"@id": "urn:ngm:class:electric-motor", "label": "Electric Motor"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A mechanical load is the force or torque a drive must overcome, comprising inertia, friction, gravity, and process resistance. It is the quantity a [[DC Servo Motor]] must meet and the demand that sizes any [[Electric Motor]].
- ### Content
  - Load profiles may be constant, variable, or impulsive, and they shape torque-speed requirements, thermal limits, and control tuning. Mismatched load and drive selection causes overheating, instability, or premature wear, so engineers model reflected inertia and duty cycle before specifying a motor and gearbox.
