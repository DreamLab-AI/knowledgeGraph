public:: true

# rb 0068 vision system
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2e2d8560bd18b033e4240e57ff873c96a9b83f669e35b981cbff810ec79e40d7",
  "@type": "Page",
  "vc:slug": "rb-0068-vision-system",
  "title": "rb 0068 vision system",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:aoki2003",
      "vc:label": "Aoki2003"
    },
    {
      "@id": "urn:visionflow:owl:class:hyper-personalisation",
      "vc:label": "Hyper personalisation"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0068"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0068 vision system"
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
  "@id": "urn:ngm:class:rb-0068-vision-system",
  "@type": "Class",
  "label": "rb 0068 vision system",
  "definition": "A robotic vision system is an integrated sensor subsystem that captures and processes visual data—using cameras, depth sensors, or LiDAR—to provide a robot with spatial awareness, object recognition, and scene understanding capabilities. Vision systems underpin tasks including visual servoing, part inspection, SLAM-based localisation, and human-robot interaction, and conform to ISO 8373:2021 perception-system definitions.",
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
    "hasPart": [
      {"@id": "urn:ngm:class:rb-0077-depth-camera", "label": "rb 0077 depth camera"},
      {"@id": "urn:ngm:class:rb-0066-robot-sensor", "label": "rb 0066 robot sensor"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0065-visual-servoing", "label": "rb 0065 visual servoing"},
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0069-lidar", "label": "rb 0069 lidar"},
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R3CategorySpecialization"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0068-vision-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2e2d8560bd18b033e4240e57ff873c96a9b83f669e35b981cbff810ec79e40d7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Aoki2003]]",
      "resolved": "urn:visionflow:linked:aoki2003",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hyper personalisation]]",
      "resolved": "urn:visionflow:owl:class:hyper-personalisation",
      "kind": "ResolvedLink"
    },
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
  - A robotic vision system is an integrated sensor subsystem that captures and processes visual data — using cameras, depth sensors, or LiDAR — to provide a robot with spatial awareness, object recognition, and scene understanding capabilities. Vision systems underpin tasks including visual servoing, part inspection, SLAM-based localisation, and human-robot interaction, and conform to ISO 8373:2021 perception-system definitions.

- ### Semantic Classification
  - owl-class:: robotics:VisionSystem
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - has-part:: rb 0077 depth camera, rb 0066 robot sensor
  - uses:: Computer Vision, Object Detection, Point Cloud, SLAM
  - enables:: rb 0065 visual servoing, Human Robot Interaction
  - relatedTo:: rb 0069 lidar, Perception System

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
