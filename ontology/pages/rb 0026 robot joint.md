public:: true

# rb 0026 robot joint
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8d93237da892c88899720aae860c063774418e6af4accaeba546eb98516a81ca",
  "@type": "Page",
  "vc:slug": "rb-0026-robot-joint",
  "title": "rb 0026 robot joint",
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
      "vc:value": "RB-0026"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0026 robot joint"
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
  "@id": "urn:ngm:class:rb-0026-robot-joint",
  "@type": "Class",
  "label": "rb 0026 robot joint",
  "definition": "A robot joint is a mechanical articulation connecting two adjacent robot links that permits one or more degrees of relative motion—translational (prismatic) or rotational (revolute). Robot joints are the fundamental kinematic elements that determine a manipulator's workspace and degrees of freedom; their dynamic properties, including inertia, backlash, and compliance, critically influence both control precision and safe interaction with the environment.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:robot",
      "label": "Robot"
    }
  ],
  "quality": 0.7,
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:rb-0072-encoder", "label": "rb 0072 encoder"},
      {"@id": "urn:ngm:class:robot-actuator", "label": "Robot Actuator"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:rb-0027-robot-link", "label": "rb 0027 robot link"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0040-backlash", "label": "rb 0040 backlash"},
      {"@id": "urn:ngm:class:rb-0041-inertia", "label": "rb 0041 inertia"},
      {"@id": "urn:ngm:class:rb-0038-compliance", "label": "rb 0038 compliance"},
      {"@id": "urn:ngm:class:rb-0039-stiffness", "label": "rb 0039 stiffness"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"},
      {"@id": "urn:ngm:class:rb-0054-position-control", "label": "rb 0054 position control"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0026-robot-joint:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8d93237da892c88899720aae860c063774418e6af4accaeba546eb98516a81ca"
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
  - A **Robot Joint** is a mechanical articulation connecting two adjacent robot links, permitting one or more degrees of relative motion. Revolute (rotational) joints are the most common in industrial manipulators; prismatic (translational) joints appear in Cartesian and SCARA configurations. Joint dynamic properties — inertia, backlash, stiffness, and compliance — directly determine control bandwidth, positioning repeatability, and safe interaction forces during human-robot collaboration.

- ### Semantic Classification
  - owl-class:: robotics:rb0026robotjoint
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - hasPart:: rb 0072 encoder, Robot Actuator
  - partOf:: rb 0027 robot link
  - relatedTo:: rb 0040 backlash, rb 0041 inertia, rb 0038 compliance, rb 0039 stiffness
  - enables:: rb 0021 robot kinematics, rb 0054 position control

- ### Content
  - ### Primary Definition
  **Robot Joint** - Articulation between robot links allowing relative motion

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
