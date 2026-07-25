public:: true

# rb 0029 inverse kinematics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e52931225982b46928652ef1fd7a8434273723a03867ea8bfa35c5acb4809b9b",
  "@type": "Page",
  "vc:slug": "rb-0029-inverse-kinematics",
  "title": "rb 0029 inverse kinematics",
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
      "vc:value": "RB-0029"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0029 inverse kinematics"
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
  "@id": "urn:ngm:class:rb-0029-inverse-kinematics",
  "@type": "Class",
  "label": "rb 0029 inverse kinematics",
  "definition": "Inverse kinematics (IK) is the computational process of determining the joint angles or actuator lengths required to place a robot's end-effector at a desired position and orientation in task space. Unlike forward kinematics, IK is typically under-determined or over-determined and requires iterative numerical solvers, analytical solutions, or Jacobian-based methods; it is a foundational component of motion planning, manipulation, and trajectory execution in robotic systems.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:kinematics",
      "label": "Kinematics"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0028-forward-kinematics", "label": "rb 0028 forward kinematics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:rb-0030-jacobian-matrix", "label": "rb 0030 jacobian matrix"},
      {"@id": "urn:ngm:class:rb-0031-singularity", "label": "rb 0031 singularity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"},
      {"@id": "urn:ngm:class:rb-0023-degrees-of-freedom", "label": "rb 0023 degrees of freedom"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"},
      {"@id": "urn:ngm:class:manipulator-arm", "label": "Manipulator Arm"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:rb-0051-trajectory-planning", "label": "rb 0051 trajectory planning"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0029-inverse-kinematics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e52931225982b46928652ef1fd7a8434273723a03867ea8bfa35c5acb4809b9b"
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
  - **Inverse Kinematics** (RB-0029) determines the joint angles or actuator lengths required to place a robot's end-effector at a desired Cartesian position and orientation. Unlike forward kinematics, IK is typically under-determined (redundant robots with more DoF than task dimensions) or over-determined, and may yield multiple solutions, a unique solution, or no solution depending on the target pose and kinematic structure. Analytical closed-form solutions exist for standard 6-DoF arm geometries (e.g., spherical wrist), while numerical iterative methods (Jacobian pseudo-inverse, damped least squares, CCD) handle general cases at the cost of computational overhead and convergence guarantees.

- ### Semantic Classification
  - owl-class:: robotics:rb0029inversekinematics
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - contrastsWith:: rb 0028 forward kinematics
  - uses:: rb 0030 jacobian matrix, rb 0031 singularity
  - relatedTo:: rb 0021 robot kinematics, rb 0023 degrees of freedom
  - enables:: Motion Planning, rb 0051 trajectory planning

- ### Content
  - ### Primary Definition
  **Inverse Kinematics** - Computing joint angles from desired end-effector pose

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
