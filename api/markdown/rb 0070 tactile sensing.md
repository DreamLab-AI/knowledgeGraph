public:: true

# rb 0070 tactile sensing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c21d208ad32e7d03dbdd1c22819c96a6b2034ffdcf397f6fc9de4252e69c8da4",
  "@type": "Page",
  "vc:slug": "rb-0070-tactile-sensing",
  "title": "rb 0070 tactile sensing",
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
      "vc:value": "RB-0070"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0070 tactile sensing"
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
  "@id": "urn:ngm:class:rb-0070-tactile-sensing",
  "@type": "Class",
  "label": "rb 0070 tactile sensing",
  "definition": "Tactile sensing is the robotic capability to detect and measure contact forces, pressures, textures, and slip at points of physical interaction between the robot and its environment or human operators. Realised through arrays of pressure sensors, capacitive skins, or piezoelectric films distributed across end-effectors and link surfaces, tactile sensing enables compliant grasping, contact-triggered safety stops, and rich feedback for teleoperation. It is a key enabling technology for human-robot collaboration under ISO/TS 15066.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    },
    {
      "@id": "urn:ngm:class:tactile-sensor",
      "label": "Tactile Sensor"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R2DirectParent"
  },
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:pressure-sensor", "label": "Pressure Sensor"},
      {"@id": "urn:ngm:class:force-torque-sensor", "label": "Force Torque Sensor"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0092-protective-stop", "label": "rb 0092 protective stop"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"},
      {"@id": "urn:ngm:class:collaborative-systems-modality-operation", "label": "Collaborative Operation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0070-tactile-sensing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c21d208ad32e7d03dbdd1c22819c96a6b2034ffdcf397f6fc9de4252e69c8da4"
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
  - **Tactile Sensing** refers to the robotic ability to detect, measure, and interpret contact forces, surface textures, pressure distribution, and slip events through distributed sensor arrays embedded in robot surfaces or end-effectors. Tactile data supplements vision and proprioception, enabling safe physical interaction with humans and unstructured environments.

- ### Semantic Classification
  - owl-class:: robotics:TactileSensing
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - uses:: Pressure Sensor, Force Torque Sensor
  - enables:: rb 0092 protective stop, Haptic Feedback, Collaborative Operation
  - relatedTo:: Sensor Fusion, Force Control
  - standardizedBy:: ISO TS 15066

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
