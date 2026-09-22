public:: true

# Servo Motor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8b728461a248e72b7c8efa0dac1c38606df6c7858e27acdeb1260746cbf03d3f",
  "@type": "Page",
  "vc:slug": "servo-motor",
  "title": "Servo Motor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:electric-motor",
      "vc:label": "Electric Motor"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0170"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Servo Motor"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:servo-motor",
  "@type": "Class",
  "label": "Servo Motor",
  "definition": "A servo motor is a closed-loop electromechanical actuator that couples an electric motor with a feedback sensor, typically a rotary encoder, and a controller to deliver precise position, velocity, and torque control. Servo motors drive robot joints, manipulator arms, and CNC machinery, and other applications demanding accurate, repeatable motion under varying load.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:electric-motor",
      "label": "Electric Motor"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:rotary-encoder", "label": "Rotary Encoder"},
      {"@id": "urn:ngm:class:pid-controller", "label": "Pid Controller"},
      {"@id": "urn:ngm:class:dc-servo-motor", "label": "DC Servo Motor"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:stepper-motor", "label": "Stepper Motor"},
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:torque-control", "label": "Torque Control"},
      {"@id": "urn:ngm:class:position-control", "label": "PositionControl"},
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:encoder", "label": "Encoder"},
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:robot-joint", "label": "Robot Joint"},
      {"@id": "urn:ngm:class:manipulator-arm", "label": "Manipulator Arm"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:servo-motor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8b728461a248e72b7c8efa0dac1c38606df6c7858e27acdeb1260746cbf03d3f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Electric Motor]]",
      "resolved": "urn:visionflow:owl:class:electric-motor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A servo motor is a closed-loop electromechanical actuator that couples an electric motor with a feedback sensor, typically a rotary encoder, and a controller to deliver precise position, velocity, and torque control. Servo motors drive robot joints, manipulator arms, and CNC machinery, and other applications demanding accurate, repeatable motion under varying load.

- ### Semantic Classification
  - owl-class:: robotics:ServoMotor
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Electric Motor]]

- ### Content
  Servo Motor — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
