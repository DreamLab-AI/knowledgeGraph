public:: true

# controller
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c1472135b14c77c8bef98e73f70208325fa0dcf1e6bd668ae9b31a9cea295fe7",
  "@type": "Page",
  "vc:slug": "controller",
  "title": "controller",
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
  "@id": "urn:ngm:class:controller",
  "@type": "Class",
  "label": "Controller",
  "definition": "A Controller is a computational module in a robotic or cyber-physical system that receives sensor feedback and reference setpoints, applies a control law or learned policy, and generates actuator commands that drive the system towards desired states. Controllers range from classical linear regulators (PID, LQR) to nonlinear model-based controllers (Model Predictive Control) and data-driven approaches (neural network policies, reinforcement learning). They operate within a closed-loop feedback architecture where the difference between desired and measured states — the error signal — drives corrective action.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"},
      {"@id": "urn:ngm:class:pid-controller", "label": "Pid Controller"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A Controller is a computational module in a robotic or cyber-physical system that receives sensor feedback and reference setpoints, applies a control law or learned policy, and generates actuator commands that drive the system towards desired states. Controllers range from classical linear regulators (PID, LQR) to nonlinear model-based controllers (Model Predictive Control) and data-driven approaches (neural network policies, reinforcement learning). They operate within a closed-loop feedback architecture where the difference between desired and measured states — the error signal — drives corrective action.

- ### Semantic Classification
  - owl-class:: controller:Controller
  - owl-role:: Concept

- ### Relationships
  - uses [[Feedback Control]]
  - uses [[Pid Controller]]
  - requires [[Actuator]]
  - requires [[Feedback Loop]]
  - enables [[Motion Planning]]
  - enables [[Robot Control]]

- ### Content
  - Controllers are the decision-making core of any closed-loop robotic or automation system. In classical control theory, a Proportional–Integral–Derivative (PID Controller) computes a corrective signal proportional to, integrated over, and differentiated from the error between reference and measured output. While PID suffices for many single-input single-output systems, more complex robotic manipulators and mobile platforms require multi-variable controllers such as Linear Quadratic Regulators (LQR) or Model Predictive Controllers (MPC), which explicitly model system dynamics and optimise a cost functional over a receding horizon.
  - Nonlinear controllers address systems where linear approximations are insufficient — for instance, computed torque controllers in rigid body dynamics use the full kinematic and dynamic model of a manipulator to cancel nonlinearities before applying a linear outer-loop controller. Reinforcement Learning has introduced data-driven controller synthesis: policies trained in simulation via algorithms such as PPO or SAC are deployed on physical robots after sim-to-real transfer, enabling controllers for locomotion, dexterous manipulation, and aerial vehicles where analytic models are hard to derive.
  - In practice, controllers are embedded in real-time control loops running at high frequencies — servo loops in industrial robots typically run at 1–4 kHz. They interact with Actuators (motors, hydraulic cylinders, pneumatic drives) via power electronics interfaces and with sensor stacks via Feedback Loops that close the loop. Motion Planning algorithms upstream compute desired trajectories that the controller must track, whilst Kinematics and dynamics models inform controller design.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
