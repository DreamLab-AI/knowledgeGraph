public:: true

# Parallel Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fefff6dfb2cba27d87f3ca107d11762fae8e27c932f02627d07e6e6ed7322ddd",
  "@type": "Page",
  "vc:slug": "parallel-robot",
  "title": "Parallel Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:manipulator-robot",
      "vc:label": "Manipulator Robot"
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
      "vc:value": "RB-0136"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Parallel Robot"
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
  "@id": "urn:ngm:class:parallel-robot",
  "@type": "Class",
  "label": "Parallel Robot",
  "definition": "A robot whose end-effector is connected to the base by multiple independent, simultaneously actuated kinematic chains (limbs), giving it a closed-loop structure. Parallel robots achieve high rigidity, speed, and accuracy with low moving mass; canonical examples include the Delta robot and Stewart platform used in pick-and-place, machining, and flight simulation applications.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:manipulator-robot",
      "label": "Manipulator Robot"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:delta-robot", "label": "Delta Robot"},
      {"@id": "urn:ngm:class:stewart-platform", "label": "Stewart Platform"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:scara-robot", "label": "SCARA Robot"},
      {"@id": "urn:ngm:class:kinematics", "label": "Kinematics"},
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:forward-kinematics", "label": "Forward Kinematics"},
      {"@id": "urn:ngm:class:robot-joint", "label": "Robot Joint"},
      {"@id": "urn:ngm:class:electric-linear-actuator", "label": "Electric Linear Actuator"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:cylindrical-robot", "label": "Cylindrical Robot"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:parallel-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fefff6dfb2cba27d87f3ca107d11762fae8e27c932f02627d07e6e6ed7322ddd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Manipulator Robot]]",
      "resolved": "urn:visionflow:owl:class:manipulator-robot",
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
  - Parallel robot has end-effector directly connected to base by multiple separate linkages working simultaneously.

- ### Semantic Classification
  - owl-class:: robotics:ParallelRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Manipulator Robot]]

- ### Content
  Parallel Robot — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
