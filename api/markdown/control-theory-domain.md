- ### Definition
  - The Control Theory Domain covers the mathematical analysis and design of systems that regulate their own behaviour through feedback. Its scope includes feedback control, state estimation, stability analysis and optimal control. It is a sub-area of the Robotics Domain that governs how machines maintain desired states. The boundary excludes the high-level task planning of agents, which belongs to the Agentic Systems Domain.

- ### Semantic Classification
  - owl-class:: ctrl:ControlTheoryDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Robotics Domain]], [[Embedded Systems Domain]], [[Reinforcement Learning]]
  - has-part:: [[Feedback Control]], [[State Estimation]], [[Stability Analysis]], [[Optimal Control]], [[PID Controller]]
  - requires:: [[Linear Algebra]], [[Differential Equations]], [[Dynamical Systems]]
  - enables:: [[Motion Control]], [[Process Regulation]], [[Autonomous Stabilisation]]

- ### Content
  - The Control Theory Domain studies how feedback can drive a dynamical system toward a desired behaviour despite disturbances and uncertainty. Its scope spans the design of feedback controllers, the estimation of unobserved state, the analysis of stability and the computation of optimal control laws. The boundary is the regulation of dynamics; deciding which goals to pursue is a planning concern in the Agentic Systems Domain.
  - Member concepts include Feedback Control, State Estimation, Stability Analysis, Optimal Control and the PID Controller as a canonical instance. These depend on linear algebra for state-space models, differential equations for system dynamics and the theory of dynamical systems for behaviour over time.
  - The domain bridges to the Robotics Domain, which it equips with motion control, to the Embedded Systems Domain that implements control loops in real time, and to Reinforcement Learning, with which it shares the framing of sequential decision making. It enables motion control, process regulation and autonomous stabilisation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z