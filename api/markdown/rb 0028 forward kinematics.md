public:: true

# rb 0028 forward kinematics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2b48a0033d19fe8187c9164d2efc3613c760f294a39031e52238b7375122a226",
  "@type": "Page",
  "vc:slug": "rb-0028-forward-kinematics",
  "title": "rb 0028 forward kinematics",
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
      "vc:value": "RB-0028"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0028 forward kinematics"
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
  "@id": "urn:ngm:class:rb-0028-forward-kinematics",
  "@type": "Class",
  "label": "rb 0028 forward kinematics",
  "definition": "Forward kinematics (FK) is the mathematical process of computing the position and orientation of a robot's end effector in Cartesian space given a known set of joint angles or displacements. Using a chain of homogeneous transformation matrices (typically expressed using Denavit-Hartenberg parameters), FK provides a unique, computationally deterministic mapping from joint space to task space. It is used in motion planning, visualisation, and safety monitoring to determine where the robot tool tip is at any instant, and underpins workspace analysis, collision checking, and trajectory verification.",
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
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0029-inverse-kinematics", "label": "rb 0029 inverse kinematics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"},
      {"@id": "urn:ngm:class:rb-0030-jacobian-matrix", "label": "rb 0030 jacobian matrix"},
      {"@id": "urn:ngm:class:rb-0031-singularity", "label": "rb 0031 singularity"},
      {"@id": "urn:ngm:class:rb-0024-workspace", "label": "rb 0024 workspace"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0026-robot-joint", "label": "rb 0026 robot joint"},
      {"@id": "urn:ngm:class:rb-0072-encoder", "label": "rb 0072 encoder"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0049-motion-planning", "label": "rb 0049 motion planning"},
      {"@id": "urn:ngm:class:rb-0052-collision-avoidance", "label": "rb 0052 collision avoidance"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0028-forward-kinematics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2b48a0033d19fe8187c9164d2efc3613c760f294a39031e52238b7375122a226"
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
  - **Forward Kinematics** (RB-0028) computes the Cartesian pose (position and orientation) of a robot's end effector from a given set of joint angles using a chain of homogeneous transformation matrices. FK is deterministic and unique (one joint configuration yields exactly one end-effector pose), in contrast to inverse kinematics which may have multiple or no solutions.

- ### Semantic Classification
  - owl-class:: robotics:rb0028forwardkinematics
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - contrastsWith:: rb 0029 inverse kinematics
  - relatedTo:: rb 0021 robot kinematics, rb 0030 jacobian matrix, rb 0031 singularity, rb 0024 workspace
  - requires:: rb 0026 robot joint, rb 0072 encoder
  - enables:: rb 0049 motion planning, rb 0052 collision avoidance

- ### Content
  - ### Primary Definition
  **Forward Kinematics** (RB-0028) maps joint space to task space via a product of homogeneous transformation matrices T_i = f(θ_i, d_i, a_i, α_i), with parameters derived from the Denavit-Hartenberg (DH) convention. For an n-DOF manipulator, the overall transformation T_0n = T_01 × T_12 × ... × T_(n-1)n gives the end-effector frame relative to the base frame.

  FK is used continuously in robot controllers to track tool position, check workspace limits, perform real-time collision detection, and compute the Jacobian matrix required for velocity kinematics and force transformation. Encoders (RB-0072) provide the joint angle inputs; singularities (RB-0031) occur where the Jacobian loses rank, causing FK to become locally degenerate in velocity mappings.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
