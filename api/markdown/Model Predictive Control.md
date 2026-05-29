public:: true

# model predictive control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:424cb9688b52626aabd78cd0aac6712d7408796116b07a0c9e8270eb36cd482d",
  "@type": "Page",
  "vc:slug": "model-predictive-control",
  "title": "model predictive control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-predictive-control",
  "@type": "Class",
  "label": "Model Predictive Control",
  "definition": "Model Predictive Control (MPC) is an advanced control methodology in which a mathematical model of the controlled process is used to predict future system states over a receding finite time horizon, and a constrained optimisation problem is solved at each control step to determine the optimal sequence of control inputs. Only the first input of the computed sequence is applied, and the optimisation is repeated at the next step with an updated state estimate, producing a closed-loop feedback effect. MPC handles multi-input multi-output systems, hard constraints on states and inputs, and competing control objectives in a unified framework, making it widely used in chemical process control, autonomous vehicles, and robotic manipulation.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Robo Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:optimal-control",
      "label": "Optimal Control"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"},
      {"@id": "urn:ngm:class:control-system", "label": "Control System"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:trajectory-control", "label": "Trajectory Control"},
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Model Predictive Control (MPC) is an advanced control methodology in which a mathematical model of the controlled process is used to predict future system states over a receding finite time horizon, and a constrained optimisation problem is solved at each control step to determine the optimal sequence of control inputs. Only the first input of the computed sequence is applied, and the optimisation is repeated at the next step with an updated state estimate, producing a closed-loop feedback effect. MPC handles multi-input multi-output systems, hard constraints on states and inputs, and competing control objectives in a unified framework, making it widely used in chemical process control, autonomous vehicles, and robotic manipulation.

- ### Semantic Classification
  - owl-class:: model-predictive-control:Model Predictive Control
  - owl-role:: Concept

- ### Relationships
  - requires [[State Estimation]]
  - requires [[Control System]]
  - enables [[Trajectory Control]]
  - enables [[Robot Control]]
  - dependsOn [[Feedback Control]]

- ### Content
  - Model Predictive Control generalises classical feedback controllers such as PID by incorporating an explicit process model that enables anticipation of future constraint violations. The optimisation problem is typically a Quadratic Program (QP) or a Nonlinear Program (NLP) depending on whether the system dynamics are linear or nonlinear; the widespread availability of efficient solvers (e.g., OSQP, qpOASES, IPOPT) has made real-time MPC feasible at millisecond timescales in robotic and automotive applications.
  - Linear MPC (LMPC) assumes a linear state-space model and solves a convex QP at each time step, offering guarantees of recursive feasibility and stability under mild conditions. Nonlinear MPC (NMPC) accommodates arbitrary dynamics, including those derived from kinematic and dynamic models of robot manipulators or mobile platforms, at the cost of solving a non-convex NLP whose computational burden can be reduced through direct multiple-shooting or direct collocation transcription methods.
  - In robotics, MPC is frequently combined with state estimators such as the Extended Kalman Filter or Moving Horizon Estimation to maintain an accurate state estimate from noisy sensor data. For legged robots and humanoids, whole-body MPC formulations simultaneously optimise joint torques and contact forces subject to friction cone constraints, enabling agile locomotion. Libraries such as Acados, MPPI (Model Predictive Path Integral), and the ROS 2 MPC controller plugins provide accessible implementations of these techniques.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
