public:: true

# Manipulator Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8ef6fd27ac02832d352c8e04ad0cd809ce918faa030a17d8b436b8dae76b0b4c",
  "@type": "Page",
  "vc:slug": "manipulator-robot",
  "title": "Manipulator Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robot",
      "vc:label": "Robot"
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
      "vc:value": "RB-0108"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Manipulator Robot"
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
  "@id": "urn:ngm:class:manipulator-robot",
  "@type": "Class",
  "label": "Manipulator Robot",
  "definition": "A robot consisting of a kinematic chain of rigid links connected by actuated joints, terminating in an end-effector, designed to position and orient objects or tools in a workspace. Manipulator robots include serial open-chain designs (articulated, SCARA, cylindrical, Cartesian) and parallel closed-chain designs, and are the dominant platform for industrial assembly, welding, pick-and-place, and collaborative tasks.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:robot",
      "label": "Robot"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:parallel-robot", "label": "Parallel Robot"},
      {"@id": "urn:ngm:class:scara-robot", "label": "SCARA Robot"},
      {"@id": "urn:ngm:class:cylindrical-robot", "label": "Cylindrical Robot"},
      {"@id": "urn:ngm:class:manipulator-arm", "label": "Manipulator Arm"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-robot", "label": "Collaborative Robot"},
      {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"},
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:robot-joint", "label": "Robot Joint"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:manipulator-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8ef6fd27ac02832d352c8e04ad0cd809ce918faa030a17d8b436b8dae76b0b4c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robot]]",
      "resolved": "urn:visionflow:owl:class:robot",
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
  - Manipulator robot is a robot with articulated mechanical arms designed to perform manipulation tasks.

- ### Semantic Classification
  - owl-class:: robotics:ManipulatorRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Robot]]

- ### Content
  Manipulator Robot — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
