- ### Definition
  - Manipulability characterises how easily a robot can move its end-effector from a given configuration. It is derived from the Jacobian matrix: the manipulability ellipsoid (axes = singular values of J) visualises the directions of ease or difficulty of motion in task space. Maximising manipulability during path planning results in configurations with good force and velocity isotropy, avoiding near-singular postures that amplify joint efforts and reduce control accuracy.

  In redundant manipulators (more joints than task-space dimensions), manipulability is used as a secondary objective in null-space optimisation — the extra degrees of freedom are used to reposition joints to increase w without affecting the end-effector pose. This is particularly important for human-robot collaboration where accessible and comfortable postures improve safety.

- ### Semantic Classification
  - owl-class:: robotics:Manipulability
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Derived from the Jacobian matrix (RB-0030); contrasts with singularity (RB-0031); supports dexterity (RB-0037) and workspace (RB-0024) analysis.
  - Used by motion planning (RB-0049) and inverse kinematics (RB-0029) solvers to maintain kinematic performance across trajectories.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z