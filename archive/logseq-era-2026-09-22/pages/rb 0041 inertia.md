public:: true

# rb 0041 inertia
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4e23cdbbc7e2be17bbbbedda4f388917b619ca787295d005e5508345d4eaeb73",
  "@type": "Page",
  "vc:slug": "rb-0041-inertia",
  "title": "rb 0041 inertia",
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
      "vc:value": "RB-0041"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0041 inertia"
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
  "@id": "urn:ngm:class:rb-0041-inertia",
  "@type": "Class",
  "label": "rb 0041 inertia",
  "definition": "In robotics, inertia refers to the resistance of a robot's links and payload to changes in motion, quantified by the inertia tensor for rotational dynamics and mass for translational dynamics. Accurate inertia modelling is essential for dynamic control, trajectory planning, and compliance with power-and-force-limiting safety requirements, because high inertia directly increases the impact forces during unintended contact.",
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
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0022-robot-dynamics", "label": "rb 0022 robot dynamics"},
      {"@id": "urn:ngm:class:robot-dynamics", "label": "Robot Dynamics"},
      {"@id": "urn:ngm:class:rigid-body-dynamics", "label": "Rigid Body Dynamics"},
      {"@id": "urn:ngm:class:rb-0043-torque", "label": "rb 0043 torque"},
      {"@id": "urn:ngm:class:rb-0045-acceleration", "label": "rb 0045 acceleration"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0033-payload", "label": "rb 0033 payload"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rb-0064-computed-torque-control", "label": "rb 0064 computed torque control"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0041-inertia:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4e23cdbbc7e2be17bbbbedda4f388917b619ca787295d005e5508345d4eaeb73"
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
  - **Inertia** (RB-0041) is the resistance of a robot's links and payload to changes in motion, quantified by the inertia tensor for rotational dynamics and mass for translational dynamics. Accurate inertia modelling is essential for dynamic control, trajectory planning, and compliance with power-and-force-limiting safety requirements, because high inertia directly increases the impact forces during unintended contact.

- ### Semantic Classification
  - owl-class:: robotics:rb0041inertia
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: rb 0022 robot dynamics, rb 0043 torque, rb 0045 acceleration
  - dependsOn:: rb 0033 payload
  - supports:: rb 0064 computed torque control, rb 0094 power and force limiting

- ### Content
  - Inertia is the central dynamic parameter in robot motion: the mass-inertia matrix M(q) appears as the dominant term in the manipulator equation of motion τ = M(q)q̈ + C(q,q̇)q̇ + g(q). Robots with high link inertia require larger actuator torques for the same acceleration profile and exhibit greater contact forces during unintended collisions, making inertia minimisation a key design objective for collaborative arms.

  Inertia varies with robot configuration (pose-dependent) because the relative positions of link centres of mass change as the robot moves. This configuration-dependence must be accounted for in real-time model-based controllers (computed-torque control, model-predictive control) and in trajectory optimisers. Payload inertia — the rotational inertia of the grasped object — is an additional term that must be estimated or measured for precise control. Many modern collaborative robots use built-in torque sensors to estimate payload inertia automatically.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
