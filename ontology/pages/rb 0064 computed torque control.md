public:: true

# rb 0064 computed torque control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9708e518dcc138af598723545bf079cc9982d2a06b05177b862b5efebf4d2f35",
  "@type": "Page",
  "vc:slug": "rb-0064-computed-torque-control",
  "title": "rb 0064 computed torque control",
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
      "vc:value": "RB-0064"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0064 computed torque control"
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
  "@id": "urn:ngm:class:rb-0064-computed-torque-control",
  "@type": "Class",
  "label": "rb 0064 computed torque control",
  "definition": "Computed torque control (CTC) is a model-based robot control strategy that uses the full inverse dynamics model of a manipulator to compute the joint torques required to follow a desired trajectory. By cancelling the nonlinear dynamics — including Coriolis, centripetal, and gravitational terms — CTC transforms the closed-loop system into a set of independent linear double-integrators, enabling simple PD outer-loop controllers to achieve high-accuracy tracking. Its effectiveness depends on the fidelity of the dynamic model and is sensitive to parameter uncertainty.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:model-based-control",
      "label": "Model Based Control"
    }
  ],
  "quality": 0.7,
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0022-robot-dynamics", "label": "rb 0022 robot dynamics"},
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:rb-0043-torque", "label": "rb 0043 torque"},
      {"@id": "urn:ngm:class:rb-0048-pid-controller", "label": "rb 0048 pid controller"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0061-nonlinear-control", "label": "rb 0061 nonlinear control"},
      {"@id": "urn:ngm:class:rb-0062-model-predictive-control", "label": "rb 0062 model predictive control"},
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0051-trajectory-planning", "label": "rb 0051 trajectory planning"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R3SemanticCategoryInference"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0064-computed-torque-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9708e518dcc138af598723545bf079cc9982d2a06b05177b862b5efebf4d2f35"
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
  - Computed torque control (CTC, RB-0064) is a nonlinear model-based strategy that uses the full Euler-Lagrange dynamic model of a manipulator to cancel gravity, Coriolis, and centripetal terms in real time, feeding forward the required joint torques. The residual error dynamics are then linear, allowing a simple outer PD loop to guarantee global asymptotic stability under ideal modelling conditions. CTC is sensitive to inertia parameter uncertainty; robust variants (adaptive CTC, sliding-mode augmentation) are used in practice.

- ### Semantic Classification
  - owl-class:: robotics:rb0064computedtorquecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Depends on: [[rb 0022 robot dynamics]], [[rb 0021 robot kinematics]]
  - Uses: [[rb 0043 torque]], [[rb 0048 pid controller]]
  - Related to: [[rb 0061 nonlinear control]], [[rb 0062 model predictive control]], [[rb 0056 impedance control]]
  - Enables: [[rb 0051 trajectory planning]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
