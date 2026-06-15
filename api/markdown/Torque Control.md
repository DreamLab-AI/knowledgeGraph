public:: true

# Torque Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a8f05505135267a9d3c5b4be37e558f7f9f57312ca26c2ef8c58be03cca33933",
  "@type": "Page",
  "vc:slug": "torque-control",
  "title": "Torque Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:motion-control",
      "vc:label": "Motion Control"
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
      "vc:value": "RB-0153"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Torque Control"
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
  "@id": "urn:ngm:class:torque-control",
  "@type": "Class",
  "label": "Torque Control",
  "definition": "A low-level actuation strategy that directly commands the output torque of joints or motors rather than position or velocity, enabling compliant, force-sensitive interaction between a robot and its environment. Torque control is essential for safe human-robot collaboration and dexterous manipulation tasks.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:motion-control",
      "label": "Motion Control"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:torque-sensor", "label": "Torque Sensor"},
      {"@id": "urn:ngm:class:current-control-loop", "label": "Current Control Loop"},
      {"@id": "urn:ngm:class:inner-control-loop", "label": "Inner Control Loop"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"},
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:torque-sensor", "label": "Torque Sensor"},
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"},
      {"@id": "urn:ngm:class:motor-driver", "label": "Motor Driver"},
      {"@id": "urn:ngm:class:real-time-control-system", "label": "Real-Time Control System"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-robot", "label": "Collaborative Robot"},
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:compliant-manipulation", "label": "Compliant Manipulation"},
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:impedance-control", "label": "Impedance Control"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:pid-control", "label": "PID Control"},
      {"@id": "urn:ngm:class:robot-dynamics", "label": "Robot Dynamics"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"},
      {"@id": "urn:ngm:class:inverse-dynamics-control", "label": "Inverse Dynamics Control"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:robot-actuator", "label": "Robot Actuator"},
      {"@id": "urn:ngm:class:servo-control", "label": "Servo Control"},
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"},
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:dexterous-manipulation", "label": "Dexterous Manipulation"},
      {"@id": "urn:ngm:class:physical-human-robot-interaction", "label": "Physical Human-Robot Interaction"},
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:position-control", "label": "Position Control"},
      {"@id": "urn:ngm:class:velocity-control", "label": "Velocity Control"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:pid-control", "label": "PID Control"},
      {"@id": "urn:ngm:class:servo-control", "label": "Servo Control"},
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"},
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:admittance-control", "label": "Admittance Control"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:joint-torque-control", "label": "Joint Torque Control"},
    {"@id": "urn:ngm:class:direct-torque-control", "label": "Direct Torque Control"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:torque-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a8f05505135267a9d3c5b4be37e558f7f9f57312ca26c2ef8c58be03cca33933"
  },
  "vc:resolutions": [
    {
      "raw": "[[Motion Control]]",
      "resolved": "urn:visionflow:owl:class:motion-control",
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
  - Torque control directly commands actuator torques for compliant interaction.

- ### Semantic Classification
  - owl-class:: robotics:TorqueControl
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Motion Control]]

- ### Content
  Torque Control — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
