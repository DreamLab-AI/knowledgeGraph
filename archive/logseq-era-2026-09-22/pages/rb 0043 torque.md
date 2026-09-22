public:: true

# rb 0043 torque
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c143f841399443a2a22e66b4d6ee30d938a716182265f01cf64c15ea1685a6f7",
  "@type": "Page",
  "vc:slug": "rb-0043-torque",
  "title": "rb 0043 torque",
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
      "vc:value": "RB-0043"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0043 torque"
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
  "@id": "urn:ngm:class:rb-0043-torque",
  "@type": "Class",
  "label": "rb 0043 torque",
  "definition": "Torque is the rotational force applied about a joint axis, expressed in Newton-metres (N·m). In robot dynamics, joint torques are the primary control inputs that drive links through desired trajectories; torque limits constrain the feasible workspace and influence payload capacity, and torque sensing enables compliant and force-controlled interaction.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:robot-dynamics",
      "label": "Robot Dynamics"
    }
  ],
  "qualityScore": 0.7,
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0041-inertia", "label": "rb 0041 inertia"},
      {"@id": "urn:ngm:class:rb-0044-velocity", "label": "rb 0044 velocity"},
      {"@id": "urn:ngm:class:rb-0045-acceleration", "label": "rb 0045 acceleration"},
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0022-robot-dynamics", "label": "rb 0022 robot dynamics"},
      {"@id": "urn:ngm:class:rb-0064-computed-torque-control", "label": "rb 0064 computed torque control"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0043-torque:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c143f841399443a2a22e66b4d6ee30d938a716182265f01cf64c15ea1685a6f7"
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
  - **Torque** is the rotational equivalent of linear force — a moment acting about a joint axis that accelerates or decelerates a robot link according to Newton's second law for rotation (τ = Iα). In manipulator control, joint torque commands are computed from the robot's dynamic model (rb 0022) using inertia, Coriolis, and gravity terms, then realised by servo motors and actuators.

- ### Semantic Classification
  - owl-class:: robotics:rb0043torque
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Closely coupled to inertia (rb 0041): higher inertia requires greater torque for the same acceleration (rb 0045).
  - Measured by force-torque sensors (rb 0067) for compliant control and collision detection.
  - Computed and commanded by computed-torque control (rb 0064) and optimal control frameworks (rb 0060).

- ### Content
  - Torque is the primary control input in robot joint actuation. The manipulator dynamic equation τ = M(q)q̈ + C(q,q̇)q̇ + g(q) shows torque τ as a function of configuration q, velocity q̇, and acceleration q̈: inertia, Coriolis, and gravity effects must all be compensated. Computed-torque control (rb 0064) exploits this model to linearise the system, yielding well-understood linear control behaviour.

  Joint torque limits are a fundamental workspace constraint: the maximum continuous torque of each joint motor, combined with gear ratio and thermal rating, sets the peak payload capacity and maximum acceleration. Force-torque sensors at the wrist or integrated into the joint allow torque measurement for compliant control, tool-centre-point force estimation, and collision detection.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
