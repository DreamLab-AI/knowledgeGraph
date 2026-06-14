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
  "definition": "Model Predictive Control (MPC) is an advanced control strategy in which an explicit mathematical model of the controlled process is used to predict future system outputs over a receding finite-horizon window, and a constrained optimisation problem is solved at each control step to compute the optimal input sequence. Only the first element of the computed sequence is applied, after which the horizon shifts forward and the optimisation repeats with an updated state estimate, creating an implicit closed-loop feedback mechanism. MPC handles multi-input multi-output (MIMO) systems, hard inequality constraints on both states and inputs, and competing cost objectives within a single unified formulation, making it applicable across process control, autonomous vehicles, robotics, and energy management. Its ability to anticipate constraint violations before they occur distinguishes it fundamentally from classical reactive controllers such as PID.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimal-control",
      "label": "Optimal Control"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:prediction-horizon", "label": "Prediction Horizon"},
      {"@id": "urn:ngm:class:control-horizon", "label": "Control Horizon"},
      {"@id": "urn:ngm:class:cost-function", "label": "Cost Function"},
      {"@id": "urn:ngm:class:receding-horizon", "label": "Receding Horizon"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"},
      {"@id": "urn:ngm:class:system-identification", "label": "System Identification"},
      {"@id": "urn:ngm:class:mathematical-optimisation", "label": "Mathematical Optimisation"},
      {"@id": "urn:ngm:class:dynamic-model", "label": "Dynamic Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:trajectory-control", "label": "Trajectory Control"},
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"},
      {"@id": "urn:ngm:class:autonomous-driving", "label": "Autonomous Driving"},
      {"@id": "urn:ngm:class:energy-management", "label": "Energy Management"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"},
      {"@id": "urn:ngm:class:linear-algebra", "label": "Linear Algebra"},
      {"@id": "urn:ngm:class:quadratic-programming", "label": "Quadratic Programming"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"},
      {"@id": "urn:ngm:class:state-space-model", "label": "State-Space Model"},
      {"@id": "urn:ngm:class:nonlinear-programming", "label": "Nonlinear Programming"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:pid-control", "label": "PID Control"},
      {"@id": "urn:ngm:class:lqr-control", "label": "LQR Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:whole-body-control", "label": "Whole-Body Control"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:mpc", "label": "MPC"},
    {"@id": "urn:ngm:class:receding-horizon-control", "label": "Receding Horizon Control"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Model Predictive Control (MPC) is an advanced control methodology in which an explicit [[Dynamic Model]] of the controlled process is used to predict future system states over a receding finite time horizon, and a constrained [[Mathematical Optimisation]] problem is solved at each control step to determine the optimal sequence of inputs. Only the first input of the computed sequence is applied; the optimisation is then repeated at the next timestep with an updated [[State Estimation]], producing an implicit closed-loop feedback effect. MPC handles [[Multi-Input Multi-Output Systems]], hard constraints on states and inputs, and competing objectives in a unified framework, and is widely employed in chemical process control, [[Autonomous Driving]], [[Robot Control]], and [[Energy Management]].

- ### Overview
  - MPC generalises classical reactive controllers — most notably [[PID Control]] — by embedding a forward-looking predictive model into the control loop. Rather than reacting only to current error, MPC continuously solves an open-loop optimisation over a future window (the prediction horizon), selecting the input sequence that minimises a cost while satisfying all constraints. This anticipatory capability allows constraint satisfaction to be guaranteed before violations occur.
  - The defining structural idea is the **receding horizon**: at each sampling step, the horizon shifts one step forward, incorporating new measurement data, so the controller perpetually "looks ahead" by the same number of steps. This differentiates MPC from open-loop optimal control and from classical [[Feedback Control]] alone.
  - MPC's unified treatment of objectives and constraints has made it the dominant advanced control paradigm in refinery and petrochemical operations since the 1980s, and it has since expanded aggressively into automotive, aerospace, robotics, and grid-scale energy systems as computational hardware has made real-time solution feasible.

- ### Key Components and Mechanisms
  - **[[Prediction Horizon]] (N)** — the number of future steps over which outputs are predicted. Longer horizons improve constraint anticipation at greater computational cost.
  - **[[Control Horizon]] (M, M ≤ N)** — the number of future control moves that are optimised; inputs are held constant beyond M, reducing decision variables.
  - **[[Cost Function]]** — a scalar objective (commonly a weighted sum of squared output deviations and input increments) that encodes control objectives such as setpoint tracking and actuator economy.
  - **[[Receding Horizon]]** — the horizon shifts at every step, re-solving with updated measurements, coupling open-loop optimisation to closed-loop feedback.
  - **[[State-Space Model]]** — the internal model used for prediction; may be linear (LTI), linear time-varying (LTV), or nonlinear. Model accuracy is critical; errors degrade performance and may compromise constraint satisfaction.
  - **[[Quadratic Programming]] (QP) solver** — for Linear MPC (LMPC), the optimisation reduces to a convex QP, solvable in milliseconds by solvers such as OSQP, qpOASES, or HPIPM.
  - **[[Nonlinear Programming]] (NLP) solver** — for Nonlinear MPC (NMPC), direct multiple-shooting or direct collocation transcription converts the continuous-time OCP into a sparse NLP, solved by tools such as IPOPT or SNOPT within the Acados or CasADi frameworks.
  - **[[State Estimation]]** — online estimation of unmeasured states from sensor data; the [[Kalman Filter]] serves linear systems while the Extended Kalman Filter (EKF) or Moving Horizon Estimation (MHE) serves nonlinear ones.
  - **Constraint handling** — MPC natively enforces hard box constraints on inputs (actuator limits), state constraints (safety envelopes), and mixed constraints (friction cone conditions in legged locomotion).

- ### Variants
  - **Linear MPC (LMPC)** — assumes linear dynamics; convex QP at each step; admits analytical guarantees of recursive feasibility and stability (e.g., via terminal constraint sets or terminal cost functions). Industry-standard in process control.
  - **Nonlinear MPC (NMPC)** — accommodates full nonlinear dynamics; requires iterative NLP solution; used for robotic manipulators, quadrotors, and vehicle dynamics where linearity assumptions break down.
  - **Stochastic MPC (SMPC)** — extends MPC to handle probabilistic uncertainty in process noise or model parameters, using chance constraints or scenario trees.
  - **Robust MPC** — guarantees constraint satisfaction for worst-case bounded uncertainties via min-max formulations or tube-based approaches.
  - **Economic MPC (EMPC)** — replaces the conventional tracking objective with a direct economic criterion (e.g., energy cost, yield), operating the system optimally even at non-steady-state points.
  - **[[Learning-Based MPC]]** — combines a learnt model (e.g., Gaussian Process or neural network) with MPC to reduce model mismatch; bridges MPC with [[Reinforcement Learning]] and [[Neural Network]] approaches.
  - **Explicit MPC** — pre-computes the optimal control law as a piecewise-affine function of the state offline, enabling lookup-table deployment on resource-constrained embedded hardware.
  - **[[Model Predictive Path Integral]] (MPPI)** — a sampling-based stochastic MPC variant popular in autonomous racing and legged robotics; parallelises trajectory rollouts on GPU.

- ### Applications and Use Cases
  - **Chemical and Process Industries** — the original commercial domain. Shell, Honeywell, and Aspen Technology MPC products (DMC, RMPCT, AspenMPC) govern distillation columns, heat exchangers, and cracker units, delivering constraint-respecting throughput maximisation.
  - **Automotive and Autonomous Driving** — powertrain energy management in hybrid electric vehicles; lane-keeping and adaptive cruise control; [[Autonomous Driving]] trajectory planning at the motion-control layer.
  - **Robotics and Manipulation** — [[Whole-Body Control]] of humanoid and legged robots (Boston Dynamics, ETH Zürich); [[Trajectory Control]] in robotic arms; real-time NMPC for drone racing and quadrotor acrobatics.
  - **Aerospace** — satellite attitude control; aircraft flight envelope protection; rocket landing guidance (SpaceX Falcon 9 uses a variant of constrained optimal control sharing MPC principles).
  - **Energy and Smart Grid** — building HVAC optimal scheduling; battery storage dispatch in [[Energy Management]] systems; wind turbine load control.
  - **Finance** — portfolio rebalancing under turnover constraints is mathematically analogous to MPC; the [[Receding Horizon]] paradigm maps naturally to rolling-window allocation problems.

- ### Relationships
  - partOf:: [[Optimal Control]]
  - requires:: [[State Estimation]]
  - requires:: [[System Identification]]
  - requires:: [[Mathematical Optimisation]]
  - requires:: [[Dynamic Model]]
  - enables:: [[Trajectory Control]]
  - enables:: [[Robot Control]]
  - enables:: [[Autonomous Driving]]
  - enables:: [[Energy Management]]
  - dependsOn:: [[Feedback Control]]
  - dependsOn:: [[Linear Algebra]]
  - dependsOn:: [[Quadratic Programming]]
  - uses:: [[Kalman Filter]]
  - uses:: [[State-Space Model]]
  - uses:: [[Nonlinear Programming]]
  - contrastsWith:: [[PID Control]]
  - contrastsWith:: [[LQR Control]]
  - relatedTo:: [[Reinforcement Learning]]
  - relatedTo:: [[Whole-Body Control]]
  - relatedTo:: [[Motion Planning]]
  - bridges-to:: [[Neural Network]]
  - bridges-to:: [[Digital Twin]]

- ### Standards and Context
  - No single ISO or IEC standard governs MPC formulations universally; however, the following contextual bodies are relevant:
    - **IEC 61511** (functional safety in process control) — MPC implementations in safety-critical processes must satisfy this standard's requirements for safety integrity levels.
    - **AUTOSAR Adaptive** — provides an architecture for deploying MPC-based controllers in automotive ECUs, particularly for ADAS and autonomous driving stacks.
    - **ROS 2 Nav2 / MoveIt 2** — de facto open-source middleware standards for deploying MPC controllers in robotic systems, with dedicated MPC controller plugins.
    - **MATLAB Model Predictive Control Toolbox** and **Acados** / **CasADi** — dominant implementation environments establishing community-level conventions for horizon notation, constraint specification, and warm-starting.
  - Key solver standards: OSQP (open-source convex QP), IPOPT (open-source NLP), HPIPM (high-performance interior-point method for MPC-structured QPs).
  - Stability guarantees in MPC are established via **Lyapunov theory** — terminal cost and terminal constraint set conditions (Mayne, Rawlings, Rao, Scokaert, 2000) are the classical reference for rigorous analysis.

- ### Provenance
  - sources:: Rawlings & Mayne "Model Predictive Control: Theory, Computation, and Design" (2nd ed.); Camacho & Bordons "Model Predictive Control"; Morari & Lee (1999) "Model predictive control: past, present and future"
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
