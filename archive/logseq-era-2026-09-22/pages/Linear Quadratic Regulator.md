public:: true

# Linear Quadratic Regulator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:linear-quadratic-regulator",
  "@type": "Page",
  "vc:slug": "linear-quadratic-regulator",
  "title": "Linear Quadratic Regulator",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:linear-quadratic-regulator",
  "@type": "Class",
  "label": "Linear Quadratic Regulator",
  "definition": "The Linear Quadratic Regulator (LQR) is an optimal control framework that computes the state-feedback gain matrix minimising a quadratic cost function — a weighted sum of squared state deviations and squared control inputs over a time horizon — for a linear dynamical system, yielding the globally optimal linear feedback law in closed form through the algebraic Riccati equation. LQR provides a principled, tunable controller where the designer specifies performance-energy trade-offs through cost weight matrices Q (penalising state error) and R (penalising control effort), and the solution guarantees both optimality with respect to this cost and closed-loop stability for controllable systems. Despite its linearity assumption, LQR is widely extended to nonlinear systems via linearisation, iterative LQR (iLQR), and as the backbone of linear-quadratic-Gaussian (LQG) control when combined with Kalman filtering.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:optimal-control", "label": "Optimal Control"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:state-space-control", "label": "State Space Control"},
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"},
      {"@id": "urn:ngm:class:stability-analysis", "label": "Stability Analysis"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"},
      {"@id": "urn:ngm:class:trajectory-tracking", "label": "Trajectory Tracking"},
      {"@id": "urn:ngm:class:model-predictive-control", "label": "Model Predictive Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:pid-controller", "label": "Pid Controller"},
      {"@id": "urn:ngm:class:adaptive-control", "label": "Adaptive Control"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[Linear Quadratic Regulator]] (LQR) is a foundational [[Optimal Control]] method that computes the globally optimal state-feedback controller for linear systems by minimising a quadratic cost in [[State Space Control|state space]], solved in closed form via the algebraic Riccati equation, providing guaranteed stability and a principled trade-off between tracking precision and control effort.

- ### Relationships
  - LQR operates on a linear [[State Space Control|state-space]] model and produces a constant gain matrix K such that u = −Kx minimises the integrated quadratic cost. Combined with a [[Kalman Filter]] for state estimation, it forms the LQG controller — the complete optimal solution for linear systems with Gaussian noise. LQR naturally generalises toward [[Model Predictive Control]], which applies finite-horizon LQR-like optimisation recurrently. In practice it is implemented for [[Robot Control]] and [[Trajectory Tracking]], and is compared and contrasted with [[Pid Controller|PID controllers]] (which require less model knowledge) and [[Adaptive Control]] (which handles parameter uncertainty).

- ### Content
  - The LQR problem was formulated and solved in the late 1950s and early 1960s through foundational work by Rudolf Kalman, whose 1960 papers on optimal control and state estimation simultaneously established the Kalman filter and laid out the mathematical framework for what would become LQR/LQG. The key mathematical result — that the optimal feedback gain for a linear-quadratic cost can be obtained from the unique positive-definite solution of the algebraic Riccati equation (ARE) — provides a complete, non-iterative solution computable via well-conditioned numerical routines. This stood in sharp contrast to the trial-and-error tuning required for PID controllers, offering a systematic, model-based design approach.

  - The LQR formulation requires a state-space model of the plant: ẋ = Ax + Bu, where x is the state vector and u is the control input. The designer specifies symmetric positive-semidefinite state weighting matrix Q and positive-definite input weighting matrix R. Diagonal Q and R matrices penalise individual state and input channels independently, providing intuitive tuning handles: increase Q[i,i] to penalise deviations in state i more heavily; increase R[j,j] to reduce effort on control channel j. The resulting optimal gain K = R⁻¹Bᵀ P, where P solves the ARE AᵀP + PA − PBR⁻¹BᵀP + Q = 0, places closed-loop eigenvalues in the left half-plane, guaranteeing stability for controllable systems.

  - LQR's influence extends far beyond linear systems through iterative LQR (iLQR) and differential dynamic programming (DDP), which apply LQR locally along a trajectory of a nonlinear system in a iterative Gauss-Newton fashion to solve nonlinear trajectory optimisation problems. This approach is central to model predictive path integral (MPPI) and to trajectory optimisation for legged robots, manipulators, and aircraft. The LQR framework also underpins the Linear Quadratic Gaussian (LQG) controller, which adds a Kalman filter for state estimation under noisy measurements, and the loop transfer recovery (LTR) design procedure for robust LQG controllers.

  - By 2024-2025 LQR remains a core tool in the control systems engineer's repertoire for both classical application domains (spacecraft attitude control, inverted pendulum stabilisation, electric motor drives) and emerging robotics applications (bipedal and quadrupedal locomotion balance control, drone attitude control, robot arm impedance control). Machine learning researchers have drawn on LQR to analyse the optimality and sample complexity of reinforcement learning algorithms, and differentiable LQR layers are being embedded in neural network architectures for model-based RL and physics-informed control policies. The simplicity and guarantees of LQR make it a persistent baseline against which more complex controllers are evaluated.

