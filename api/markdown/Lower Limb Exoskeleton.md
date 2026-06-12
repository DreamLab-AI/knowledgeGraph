public:: true

# Lower Limb Exoskeleton
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1aacd12cb7df21547cc80cc962f6d0c63b3cf7f896905c7a27cf7db2e715c13d",
  "@type": "Page",
  "vc:slug": "lower-limb-exoskeleton",
  "title": "Lower Limb Exoskeleton",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:exoskeleton-robot",
      "vc:label": "Exoskeleton Robot"
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
      "vc:value": "RB-0140"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Lower Limb Exoskeleton"
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
  "@id": "urn:ngm:class:lower-limb-exoskeleton",
  "@type": "Class",
  "label": "Lower Limb Exoskeleton",
  "definition": "A Lower Limb Exoskeleton is a wearable robotic device that attaches externally to the legs and pelvis to assist, augment, or rehabilitate walking and lower-body movements by generating torques at hip, knee, and ankle joints. Devices span fully-active systems driven by electric actuators or hydraulics, passive systems using spring and damping elements to redirect energy, and hybrid configurations combining both. Applications include stroke rehabilitation (restoring gait through repetitive, robot-guided movement therapy), spinal-cord-injury locomotion assistance, load-carrying augmentation for industrial and military tasks, and fall prevention in elderly populations. Control strategies range from finite-state machines triggered by gait-phase detection through inertial measurement units and pressure sensors, to intent-recognition systems integrating electromyography and machine learning.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:exoskeleton-robot",
      "label": "Exoskeleton Robot"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"},
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:imu", "label": "IMU"},
      {"@id": "urn:ngm:class:torque", "label": "Torque"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:safety", "label": "Safety"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:variable-impedance-control", "label": "Variable Impedance Control"},
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-robot", "label": "Collaborative Robot"},
      {"@id": "urn:ngm:class:embodied-ai", "label": "Embodied AI"},
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"},
      {"@id": "urn:ngm:class:collision-avoidance", "label": "Collision Avoidance"}
    ]
  },
  "qualityScore": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:lower-limb-exoskeleton:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1aacd12cb7df21547cc80cc962f6d0c63b3cf7f896905c7a27cf7db2e715c13d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Exoskeleton Robot]]",
      "resolved": "urn:visionflow:owl:class:exoskeleton-robot",
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
  - Lower limb exoskeleton assists or augments walking and leg movements.

- ### Semantic Classification
  - owl-class:: robotics:LowerLimbExoskeleton
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Exoskeleton Robot]]

- ### Content
  Lower Limb Exoskeleton — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
