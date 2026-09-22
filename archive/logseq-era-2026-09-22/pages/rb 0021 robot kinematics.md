public:: true

# rb 0021 robot kinematics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1b50623c2cfcc10fadbfa8273b03de816bcbeda48339aa6c096c1adf3731150e",
  "@type": "Page",
  "vc:slug": "rb-0021-robot-kinematics",
  "title": "rb 0021 robot kinematics",
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
      "vc:value": "RB-0021"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0021 robot kinematics"
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
  "@id": "urn:ngm:class:rb-0021-robot-kinematics",
  "@type": "Class",
  "label": "rb 0021 robot kinematics",
  "definition": "Robot kinematics is the study of the geometry and motion of robot mechanisms — particularly manipulator arms — without regard to the forces or torques that cause motion. It encompasses forward kinematics (computing end-effector pose from joint configurations), inverse kinematics (computing joint configurations for a desired end-effector pose), Jacobian analysis relating joint velocities to Cartesian velocities, and singularity analysis. Kinematic models are foundational inputs to motion planning, trajectory generation, and control law design.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "quality": 0.7,
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:forward-kinematics", "label": "Forward Kinematics"},
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:rb-0030-jacobian-matrix", "label": "rb 0030 jacobian matrix"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0022-robot-dynamics", "label": "rb 0022 robot dynamics"},
      {"@id": "urn:ngm:class:rb-0023-degrees-of-freedom", "label": "rb 0023 degrees of freedom"},
      {"@id": "urn:ngm:class:rb-0031-singularity", "label": "rb 0031 singularity"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0049-motion-planning", "label": "rb 0049 motion planning"},
      {"@id": "urn:ngm:class:rb-0064-computed-torque-control", "label": "rb 0064 computed torque control"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1LabelContainsParentTerm"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0021-robot-kinematics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1b50623c2cfcc10fadbfa8273b03de816bcbeda48339aa6c096c1adf3731150e"
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
  - ### Primary Definition
  Robot kinematics (RB-0021) is the geometric analysis of robot motion, treating the manipulator as a chain of rigid bodies connected by joints. Forward kinematics maps joint space to Cartesian end-effector pose using Denavit-Hartenberg (DH) or product-of-exponentials parameterisations. Inverse kinematics (IK) solves the reverse problem — often non-uniquely and requiring iterative numerical methods for redundant manipulators. The Jacobian matrix relates differential joint motion to end-effector velocity and is central to velocity control and singularity avoidance.

- ### Semantic Classification
  - owl-class:: robotics:rb0021robotkinematics
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Has part: [[Forward Kinematics]], [[Inverse Kinematics]], [[rb 0030 jacobian matrix]]
  - Related to: [[rb 0022 robot dynamics]], [[rb 0023 degrees of freedom]], [[rb 0031 singularity]]
  - Enables: [[rb 0049 motion planning]], [[rb 0064 computed torque control]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
