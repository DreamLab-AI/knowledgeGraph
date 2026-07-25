public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c359b5260aa746b1a123b9eb4e9d47979d8710b8508cb471dbcf116829a8a4bb",
  "@type": "Page",
  "vc:slug": "robo-actuation-and-control",
  "title": "Actuation and Control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:robo-actuation-and-control",
  "label": "Actuation and Control",
  "definition": "Taxonomy hub covering the mechanisms, algorithms, and feedback systems that translate commands into physical motion in robotic systems. Encompasses actuator hardware, control algorithms such as PID and adaptive control, motion planning, and trajectory execution that collectively govern a robot's dynamic behaviour.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:pid-control", "label": "PID Control"},
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"},
      {"@id": "urn:ngm:class:adaptive-control", "label": "Adaptive Control"},
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:torque-control", "label": "Torque Control"},
      {"@id": "urn:ngm:class:trajectory-planning", "label": "Trajectory Planning"},
      {"@id": "urn:ngm:class:servo-control", "label": "Servo Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:kinematics", "label": "Kinematics"},
      {"@id": "urn:ngm:class:control-theory", "label": "Control Theory"},
      {"@id": "urn:ngm:class:impedance-control", "label": "Impedance Control"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:encoder", "label": "Encoder"},
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
