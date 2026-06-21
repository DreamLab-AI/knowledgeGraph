public:: true

# rb 0062 model predictive control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7efedaed93deeab1b920fcc394afaa95af832b26dc945710fa3d16308192f561",
  "@type": "Page",
  "vc:slug": "rb-0062-model-predictive-control",
  "title": "rb 0062 model predictive control",
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
      "vc:value": "RB-0062"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0062 model predictive control"
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
  "@id": "urn:ngm:class:rb-0062-model-predictive-control",
  "@type": "Class",
  "label": "rb 0062 model predictive control",
  "definition": "Model Predictive Control (MPC) is an advanced optimal control strategy that uses an explicit mathematical model of the plant to predict future system behaviour over a finite receding horizon, then solves an optimisation problem at each control step to determine the input sequence that minimises a cost function subject to state and input constraints. Only the first element of the computed sequence is applied before the optimisation is repeated. In robotics, MPC enables constraint-aware trajectory tracking, force regulation, and whole-body motion planning that classical PID controllers cannot achieve.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:optimal-control",
      "label": "Optimal Control"
    }
  ],
  "quality": 0.7,
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0022-robot-dynamics", "label": "rb 0022 robot dynamics"},
      {"@id": "urn:ngm:class:rb-0051-trajectory-planning", "label": "rb 0051 trajectory planning"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0048-pid-controller", "label": "rb 0048 pid controller"},
      {"@id": "urn:ngm:class:rb-0063-sliding-mode-control", "label": "rb 0063 sliding mode control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0060-optimal-control", "label": "rb 0060 optimal control"},
      {"@id": "urn:ngm:class:rb-0061-nonlinear-control", "label": "rb 0061 nonlinear control"},
      {"@id": "urn:ngm:class:state-space-control", "label": "State Space Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0049-motion-planning", "label": "rb 0049 motion planning"},
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0062-model-predictive-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7efedaed93deeab1b920fcc394afaa95af832b26dc945710fa3d16308192f561"
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
  - Model Predictive Control is an online optimisation-based control method where a dynamic model is integrated forward in time to predict the effect of candidate control actions. The controller selects the action that minimises a cost (e.g., tracking error, energy) while satisfying hard constraints on joint torques, velocities, and collision-free workspace boundaries. The receding-horizon mechanism makes MPC inherently adaptive to disturbances without re-tuning.

  In collaborative robotics, MPC is used to enforce safety constraints directly within the control loop — for example, limiting end-effector speed near humans — and to optimally transition between tasks. Computationally expensive convex and nonlinear MPC variants have become practical with modern embedded processors, enabling real-time 1 kHz control on manipulators with many degrees of freedom.

- ### Semantic Classification
  - owl-class:: robotics:rb0062modelpredictivecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Extends optimal control (RB-0060) with constraint handling; contrasts with PID (RB-0048) and sliding-mode (RB-0063) control in expressivity.
  - Depends on accurate robot dynamics (RB-0022) and trajectory planning (RB-0051); enables impedance control (RB-0056) and motion planning (RB-0049) within safety constraints.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
