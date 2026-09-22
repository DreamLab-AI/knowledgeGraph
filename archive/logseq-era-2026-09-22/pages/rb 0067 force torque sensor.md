public:: true

# rb 0067 force torque sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:759e61aed0b4916f0e2f0149c9129feecfc0a5a16a5e38cce5f6a6b959215146",
  "@type": "Page",
  "vc:slug": "rb-0067-force-torque-sensor",
  "title": "rb 0067 force torque sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0067"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0067 force torque sensor"
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
  "@id": "urn:ngm:class:rb-0067-force-torque-sensor",
  "@type": "Class",
  "label": "rb 0067 force torque sensor",
  "definition": "A force-torque sensor (FT sensor) is a transducer mounted at a robot's wrist or tool centre point that simultaneously measures all six components of mechanical load: three orthogonal forces (Fx, Fy, Fz) and three orthogonal torques (Tx, Ty, Tz). These measurements enable the robot controller to monitor contact forces in real time, supporting force-controlled assembly, surface-following tasks, human-robot contact detection, and safety-critical power-and-force limiting under ISO/TS 15066. FT sensors are the primary feedback device for impedance and admittance control strategies.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "quality": 0.7,
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:force-torque-sensor", "label": "Force Torque Sensor"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0053-force-control", "label": "rb 0053 force control"},
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"},
      {"@id": "urn:ngm:class:rb-0057-admittance-control", "label": "rb 0057 admittance control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0070-tactile-sensing", "label": "rb 0070 tactile sensing"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:cobot-safety-levels", "label": "Cobot Safety Levels"},
      {"@id": "urn:ngm:class:rb-0066-robot-sensor", "label": "rb 0066 robot sensor"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R2DirectParent"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0067-force-torque-sensor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:759e61aed0b4916f0e2f0149c9129feecfc0a5a16a5e38cce5f6a6b959215146"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
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
  - A force-torque (FT) sensor is a wrist-mounted transducer that measures all six mechanical load components — three forces and three torques — in real time. These measurements close the loop for force-controlled manipulation, allowing a robot to regulate contact force rather than merely position. FT sensors are essential for compliant assembly, polishing, insertion tasks, and for meeting the power-and-force limiting safety requirements of ISO/TS 15066 in collaborative robot deployments.
  - Common technologies include strain-gauge bridges, piezoelectric elements, and optical transducers. The sensor output feeds directly into impedance and admittance controllers, enabling the robot to behave as a controllable mechanical impedance at the point of contact.

- ### Semantic Classification
  - owl-class:: robotics:rb0067forcetorquesensor
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - enables:: rb 0053 force control, rb 0056 impedance control, rb 0057 admittance control
  - relatedTo:: rb 0070 tactile sensing, rb 0094 power and force limiting, Haptic Feedback
  - supports:: Cobot Safety Levels, rb 0066 robot sensor

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
