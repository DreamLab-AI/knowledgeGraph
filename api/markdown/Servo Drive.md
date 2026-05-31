public:: true

# Servo Drive
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:servo-drive",
  "@type": "Page",
  "vc:slug": "servo-drive",
  "title": "Servo Drive",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:servo-drive",
  "@type": "Class",
  "label": "Servo Drive",
  "definition": "A servo drive is the power-electronic controller that regulates the current, velocity, and position of a servomotor by closing feedback loops on encoder or resolver signals. It converts commanded setpoints from a motion controller into precisely modulated motor currents, enabling high-bandwidth, high-accuracy actuation. It is a core component of industrial robot joints and CNC motion systems.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Robotics Actuation and Control"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:motion-control", "label": "Motion Control"}, {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A servo drive is the power-electronic controller that closes current, velocity, and position loops around a servomotor using encoder feedback. It is a part of [[Motion Control]] subsystems and of every joint in an [[Industrial Robot]].
- ### Content
  - Drives typically implement cascaded PID or model-based control with field-oriented commutation for brushless motors. Performance is set by loop bandwidth, switching frequency, and feedback resolution, which together determine the smoothness, stiffness, and tracking accuracy of robotic motion.
