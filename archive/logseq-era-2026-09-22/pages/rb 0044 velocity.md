public:: true

# rb 0044 velocity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:44fd8975a9ad4b3b02a04a6f98e86a5b173a0cc860139df2aa60caa18f5c5d93",
  "@type": "Page",
  "vc:slug": "rb-0044-velocity",
  "title": "rb 0044 velocity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
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
      "vc:value": "RB-0044"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0044 velocity"
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
  "@id": "urn:ngm:class:rb-0044-velocity",
  "@type": "Class",
  "label": "rb 0044 velocity",
  "definition": "In robotics, velocity refers to the time-derivative of position, encompassing both linear velocity (metres per second) at the end-effector or a body-frame point, and angular velocity (radians per second) describing rotational rate. Velocity is the central quantity in differential kinematics: the Jacobian matrix maps joint-space velocity vectors to Cartesian task-space velocities. Velocity limits are safety-critical parameters in collaborative robot standards (ISO/TS 15066) where end-effector speed directly determines permissible human contact force.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:robot-kinematics",
      "label": "Robot Kinematics"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0045-acceleration", "label": "rb 0045 acceleration"},
      {"@id": "urn:ngm:class:rb-0043-torque", "label": "rb 0043 torque"},
      {"@id": "urn:ngm:class:rb-0030-jacobian-matrix", "label": "rb 0030 jacobian matrix"},
      {"@id": "urn:ngm:class:differential-kinematics", "label": "Differential Kinematics"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0055-velocity-control", "label": "rb 0055 velocity control"},
      {"@id": "urn:ngm:class:rb-0049-motion-planning", "label": "rb 0049 motion planning"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:rb-0093-speed-limitation", "label": "rb 0093 speed limitation"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0044-velocity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:44fd8975a9ad4b3b02a04a6f98e86a5b173a0cc860139df2aa60caa18f5c5d93"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
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
  - Velocity in robotics is the vector quantity describing the rate of change of position (linear velocity) and orientation (angular velocity) of a robot body, joint, or end-effector. In the context of differential kinematics, the Jacobian matrix provides the instantaneous linear map between joint-space velocities and Cartesian task-space velocities. Velocity is therefore the key quantity for trajectory planning, motion control, and safety monitoring in both industrial and collaborative robots.

- ### Semantic Classification
  - owl-class:: robotics:rb0044velocity
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: rb 0045 acceleration, rb 0043 torque, rb 0030 jacobian matrix
  - requires:: rb 0021 robot kinematics
  - enables:: rb 0055 velocity control, rb 0049 motion planning
  - standardizedBy:: rb 0093 speed limitation

- ### Content
  - Velocity is the central quantity of differential kinematics. The Jacobian matrix J(q) provides the instantaneous mapping v = J(q)q̇, relating joint-space velocities q̇ to Cartesian end-effector velocities v = [ṗ; ω] (linear and angular). Near singular configurations, J becomes rank-deficient and small joint velocities can correspond to arbitrarily large task-space velocities — a key concern in trajectory planning.

  In collaborative robot safety, end-effector velocity is the primary regulated parameter. The speed-and-separation monitoring (SSM) mode — originally specified in ISO/TS 15066:2016 and now incorporated into ISO 10218-2:2025 — enforces that robot speed is dynamically reduced as a human approaches, with the permissible speed scaled inversely with proximity. Speed limitation (RB-0093) codifies the maximum allowable thresholds for power-and-force-limited (PFL) collaborative operation, making velocity a safety-critical measurand in addition to a kinematic quantity.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
