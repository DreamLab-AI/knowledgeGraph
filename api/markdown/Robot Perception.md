public:: true

# Robot Perception
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:111ebb0b0150791f58e4da71b5e7af0bd0d297687fa9d8d3cf0587e984d489f0",
  "@type": "Page",
  "vc:slug": "robot-perception",
  "title": "Robot Perception",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sensors",
      "vc:label": "Sensors"
    },
    {
      "@id": "urn:visionflow:linked:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:linked:slam",
      "vc:label": "SLAM"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-machine-perception",
      "vc:label": "https://en.wikipedia.org/wiki/Machine_perception"
    },
    {
      "@id": "urn:visionflow:linked:https-www-ros-org",
      "vc:label": "https://www.ros.org/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Robot Perception"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:robot-perception",
  "@type": "Class",
  "label": "Robot Perception",
  "definition": "Robot perception is the process by which a robot interprets sensor data to build an understanding of its environment and state.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:sensors",
        "label": "Sensors"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:robot-perception:53a64988608e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:111ebb0b0150791f58e4da71b5e7af0bd0d297687fa9d8d3cf0587e984d489f0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sensors]]",
      "resolved": "urn:visionflow:linked:sensors",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:linked:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SLAM]]",
      "resolved": "urn:visionflow:linked:slam",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Machine_perception]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-machine-perception",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.ros.org/]]",
      "resolved": "urn:visionflow:linked:https-www-ros-org",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Robot perception is the process by which a robot interprets sensor data to build an understanding of its environment and state.

- ### Semantic Classification
  - owl-class:: robotics:RobotPerception
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics]]
  - bridges-to:: [[Machine Learning Discipline]]
  - requires:: [[Sensors]], [[Sensor Fusion]]
  - enables:: [[SLAM]]

- ### Content
  - Robot perception converts raw sensor readings from cameras, lidar, depth sensors and inertial units into representations of objects, surfaces and the robot's own pose. It supports tasks such as detection, recognition and localisation.
  - Perception pipelines combine signal processing, geometry and machine learning. The resulting environment models feed planning and control, enabling navigation, manipulation and interaction.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Machine_perception]], [[https://www.ros.org/]]
  - migration-date:: 2026-05-29T00:00:00Z
