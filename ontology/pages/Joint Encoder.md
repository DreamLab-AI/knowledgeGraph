public:: true

# Joint Encoder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:joint-encoder",
  "@type": "Page",
  "vc:slug": "joint-encoder",
  "title": "Joint Encoder",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:joint-encoder",
  "@type": "Class",
  "label": "Joint Encoder",
  "definition": "A joint encoder is a sensor mounted at a robot joint that measures angular or linear position, and often velocity, of that joint. It provides the proprioceptive feedback required for closed-loop position and motion control of articulated mechanisms. Encoders may be optical, magnetic or capacitive and are typically classed as incremental or absolute.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"},
      {"@id": "urn:ngm:class:proprioceptive-sensor", "label": "Proprioceptive Sensor"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A joint encoder is a position-measuring [[Sensor]] at each joint of an [[Industrial Robot]], serving as a core [[Proprioceptive Sensor]] that closes the control loop for accurate motion.
- ### Content
  - Incremental encoders report relative motion and require homing, whereas absolute encoders retain position through power cycles. The resolution and accuracy of joint encoders directly determine a robot's repeatability and trajectory-tracking performance, making them essential components of every servo-controlled axis.
