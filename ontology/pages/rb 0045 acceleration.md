public:: true

# rb 0045 acceleration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8fda5f454604ca4002b6178336ba0186ab85437362875674fa8ac4f2344550a8",
  "@type": "Page",
  "vc:slug": "rb-0045-acceleration",
  "title": "rb 0045 acceleration",
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
      "vc:value": "RB-0045"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0045 acceleration"
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
  "@id": "urn:ngm:class:rb-0045-acceleration",
  "@type": "Class",
  "label": "rb 0045 acceleration",
  "definition": "In robotics, acceleration is the rate of change of velocity with respect to time, expressed for each joint (joint-space acceleration) or for the robot's end-effector (task-space acceleration), measured in rad/s² or m/s² respectively. Acceleration profiles govern the dynamic forces and torques that a manipulator must generate, coupling directly into Newton-Euler equations of motion. Limiting acceleration is central to safety (reducing impact forces) and to trajectory smoothness in collaborative applications.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:newton-euler-dynamics",
      "label": "Newton-Euler Dynamics"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0044-velocity", "label": "rb 0044 velocity"},
      {"@id": "urn:ngm:class:rb-0043-torque", "label": "rb 0043 torque"},
      {"@id": "urn:ngm:class:rb-0041-inertia", "label": "rb 0041 inertia"},
      {"@id": "urn:ngm:class:rb-0022-robot-dynamics", "label": "rb 0022 robot dynamics"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"},
      {"@id": "urn:ngm:class:rb-0030-jacobian-matrix", "label": "rb 0030 jacobian matrix"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rb-0051-trajectory-planning", "label": "rb 0051 trajectory planning"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0045-acceleration:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8fda5f454604ca4002b6178336ba0186ab85437362875674fa8ac4f2344550a8"
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
  - **Acceleration** (RB-0045) is the rate of change of velocity with respect to time, expressed for each joint (joint-space acceleration, rad/s²) or for the robot's end-effector (task-space acceleration, m/s²). Acceleration profiles govern the dynamic forces and torques a manipulator must generate, and limiting acceleration is central to safety — reducing impact forces during unintended contact — and to trajectory smoothness in collaborative applications.

- ### Semantic Classification
  - owl-class:: robotics:rb0045acceleration
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Tightly coupled with velocity (RB-0044), torque (RB-0043), and inertia (RB-0041) within Newton-Euler dynamics; used in trajectory planning (RB-0051) and power/force limiting (RB-0094) for safe collaborative operation.

- ### Content
  - Acceleration is the second time derivative of position and appears directly in the manipulator equation of motion. In joint space, joint accelerations q̈ combine with the mass-inertia matrix M(q), Coriolis/centrifugal matrix C(q,q̇), and gravity vector g(q) to yield required torques: τ = M(q)q̈ + C(q,q̇)q̇ + g(q). In task space, Cartesian acceleration is obtained by differentiating the Jacobian: ẍ = J(q)q̈ + J̇(q)q̇.

  Bounding acceleration is essential in collaborative robot standards. Transient contact force limits that implicitly constrain end-effector acceleration during human-robot contact scenarios were originally specified in ISO/TS 15066:2016 and are now incorporated into ISO 10218-2:2025. Smooth acceleration profiles (trapezoidal, S-curve, jerk-limited) reduce mechanical wear and improve tracking performance during high-speed manipulation; trajectory planners (RB-0051) select profile shapes to satisfy both kinematic and dynamic constraints simultaneously.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
