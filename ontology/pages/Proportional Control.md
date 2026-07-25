public:: true

# Proportional Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9686491391056aefc8952b1080a34c19c825e84b45126748f47372ca4bc996fd",
  "@type": "Page",
  "vc:slug": "proportional-control",
  "title": "Proportional Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:feedback-control",
      "vc:label": "Feedback Control"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0146"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Proportional Control"
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
  "@id": "urn:ngm:class:proportional-control",
  "@type": "Class",
  "label": "Proportional Control",
  "definition": "Proportional Control is a feedback control strategy in which the corrective output applied to an actuator is directly proportional to the current error—the difference between the desired setpoint and the measured process variable. It is the foundational component of PID controllers, providing immediate, scaled response to deviations but typically leaving a steady-state offset that requires integral or derivative terms to eliminate.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:feedback-control",
      "label": "Feedback Control"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:control-algorithm", "label": "Control Algorithm"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:pid-controller", "label": "Pid Controller"},
      {"@id": "urn:ngm:class:closed-loop-control", "label": "Closed-Loop Control"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"},
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:position-control", "label": "PositionControl"},
      {"@id": "urn:ngm:class:velocity-control", "label": "VelocityControl"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:control-system", "label": "Control System"},
      {"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:derivative-control", "label": "Derivative Control"},
      {"@id": "urn:ngm:class:adaptive-control", "label": "Adaptive Control"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:proportional-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9686491391056aefc8952b1080a34c19c825e84b45126748f47372ca4bc996fd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Feedback Control]]",
      "resolved": "urn:visionflow:owl:class:feedback-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
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
  Proportional Control is a feedback control strategy in which the corrective output applied to an actuator is directly proportional to the current error—the difference between the desired setpoint and the measured process variable. It is the foundational component of PID controllers, providing immediate, scaled response to deviations but typically leaving a steady-state offset that requires integral or derivative terms to eliminate.

- ### Semantic Classification
  - owl-class:: robotics:ProportionalControl
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - partOf:: [[Pid Controller]], [[Closed-Loop Control]]
  - requires:: [[Feedback Control]], [[Actuator]]
  - enables:: [[Motion Control]], [[PositionControl]], [[VelocityControl]]
  - relatedTo:: [[Control System]], [[Control Theory]]
  - contrastsWith:: [[Derivative Control]], [[Adaptive Control]]

- ### Content
  Proportional Control operates on the principle that control output u(t) = Kp × e(t), where Kp is the proportional gain and e(t) is the instantaneous error between setpoint and measured value. Selecting an appropriate Kp is critical: too low and the system responds sluggishly; too high and oscillation or instability results. This trade-off is the central design challenge in proportional control tuning.

  In robotics, proportional control is pervasive in joint-level servo loops, where each actuator receives a command proportional to the angular or linear position error. It forms the P term in PID controllers used in motor drivers, robotic arms, mobile platform steering, and attitude control systems for aerial robots. Despite its simplicity, pure proportional control is often insufficient because a persistent (steady-state) error remains unless the gain is driven to impractically high values.

  The steady-state error limitation motivates augmentation with integral control (which accumulates error over time to eliminate offset) and derivative control (which damps oscillation by responding to the rate of error change). Together they form the full PID controller, but understanding proportional control in isolation remains essential for diagnosing system behaviour and tuning individual gains incrementally.

  Modern control architectures such as model predictive control and adaptive control have largely replaced pure proportional control in demanding applications, but proportional control persists as the innermost loop in cascaded controllers and in embedded systems where computational overhead must be minimised.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
