public:: true

# Rotary Encoder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9fce82dfd057a5d3d16b826e8f8b9122535d68906fac816c12657929eca6c408",
  "@type": "Page",
  "vc:slug": "rotary-encoder",
  "title": "Rotary Encoder",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:encoder",
      "vc:label": "Encoder"
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
      "vc:value": "RB-0157"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Rotary Encoder"
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
  "@id": "urn:ngm:class:rotary-encoder",
  "@type": "Class",
  "label": "Rotary Encoder",
  "definition": "A rotary encoder is an electromechanical transducer that converts shaft angular position or velocity into digital pulses or absolute position codes. Incremental encoders output A/B quadrature pulses enabling direction and relative position measurement; absolute encoders output a unique binary code at every shaft position. Used ubiquitously in robot joints, servo motors, and motion-control systems for precise closed-loop feedback.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:encoder",
        "label": "Encoder"
      }
    ],
    "uses": [
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"},
      {"@id": "urn:ngm:class:pid-controller", "label": "Pid Controller"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"},
      {"@id": "urn:ngm:class:dc-servo-motor", "label": "DC Servo Motor"},
      {"@id": "urn:ngm:class:stepper-motor", "label": "Stepper Motor"},
      {"@id": "urn:ngm:class:imu", "label": "IMU"},
      {"@id": "urn:ngm:class:odometry", "label": "Odometry"},
      {"@id": "urn:ngm:class:force-torque-sensor", "label": "Force Torque Sensor"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"}
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

Rotary encoders are the most common position feedback sensor in robotics. Optical encoders use a slotted disk and photodetector; magnetic encoders use Hall-effect sensing against a magnetised ring. Absolute encoders retain position across power cycles, while incremental encoders require homing on startup. Resolution is measured in counts per revolution (CPR), with modern encoders reaching 10,000–1,000,000 CPR for high-precision servo applications.

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rotary-encoder:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9fce82dfd057a5d3d16b826e8f8b9122535d68906fac816c12657929eca6c408"
  },
  "vc:resolutions": [
    {
      "raw": "[[Encoder]]",
      "resolved": "urn:visionflow:owl:class:encoder",
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
  - Rotary encoder measures shaft angle and direction.

- ### Semantic Classification
  - owl-class:: robotics:RotaryEncoder
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Encoder]]

- ### Content
  Rotary Encoder — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
