
Quadratic programming (QP) is a class of mathematical optimisation problems in which a quadratic objective function is minimised subject to linear equality and inequality constraints. It is a convex optimisation problem when the quadratic term is positive semidefinite, admitting efficient and globally optimal solvers. QP is foundational to model-based control, trajectory optimisation, and constrained robotic motion generation.

- ### Content
  - In robotics, QP underpins whole-body controllers and model predictive control, where contact forces, joint limits, and dynamics are expressed as linear constraints around a quadratic cost. Active-set and interior-point solvers achieve the kilohertz solve rates required for closed-loop control on physical hardware.

