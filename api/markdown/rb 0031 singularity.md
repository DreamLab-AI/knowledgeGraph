public:: true

# rb 0031 singularity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8cbaabc0e141534f79adfb6eef6ded8f8b09fa497151fe24f9b41282175f1257",
  "@type": "Page",
  "vc:slug": "rb-0031-singularity",
  "title": "rb 0031 singularity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:singularity",
      "vc:label": "Singularity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0031"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0031 singularity"
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
  "@id": "urn:ngm:class:rb-0031-singularity",
  "@type": "Class",
  "label": "rb 0031 singularity",
  "definition": "A kinematic singularity is a robot configuration in which the Jacobian matrix loses rank, causing the manipulator to lose one or more degrees of freedom in Cartesian space. At a singularity, certain end-effector motions become unachievable regardless of joint velocity magnitudes, and inverse kinematics solutions either vanish or require unbounded joint speeds. Singularity avoidance and singularity-robust inverse kinematics (via damped least-squares) are critical for safe, continuous robot motion, particularly near workspace boundaries and for wrist configurations of six-axis arms.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rb-0030-jacobian-matrix", "label": "rb 0030 jacobian matrix"},
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0023-degrees-of-freedom", "label": "rb 0023 degrees of freedom"},
      {"@id": "urn:ngm:class:rb-0032-manipulability", "label": "rb 0032 manipulability"},
      {"@id": "urn:ngm:class:robot-singularity", "label": "Robot Singularity"},
      {"@id": "urn:ngm:class:rb-0024-workspace", "label": "rb 0024 workspace"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0029-inverse-kinematics", "label": "rb 0029 inverse kinematics"},
      {"@id": "urn:ngm:class:differential-kinematics", "label": "Differential Kinematics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0037-dexterity", "label": "rb 0037 dexterity"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0031-singularity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8cbaabc0e141534f79adfb6eef6ded8f8b09fa497151fe24f9b41282175f1257"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Singularity]]",
      "resolved": "urn:visionflow:owl:class:singularity",
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
  - A kinematic singularity occurs when a robot manipulator reaches a configuration in which its Jacobian matrix becomes rank-deficient. At this point the robot loses the ability to produce end-effector motion in one or more Cartesian directions, regardless of how fast the joints move. Common singularity types in six-axis arms include boundary singularities (arm fully extended or retracted), shoulder singularities (wrist centre on the shoulder axis), and wrist singularities (two wrist axes collinear).

- ### Semantic Classification
  - owl-class:: robotics:rb0031singularity
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Singularities are intimately connected to the Jacobian matrix (RB-0030) and to manipulability (RB-0032), which quantifies how far a configuration is from singular. Inverse kinematics (RB-0029) algorithms must handle singularities gracefully—typically via damped least-squares regularisation—to prevent the joint velocity magnitudes from exploding. Singularity avoidance is a constraint in motion planning (RB-0049) and trajectory planning (RB-0051), and workspace analysis (RB-0024) identifies singularity-free regions of the reachable space.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
