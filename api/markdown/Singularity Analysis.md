
Singularity analysis is the study of robot configurations at which the manipulator Jacobian loses rank, causing a loss or gain of instantaneous degrees of freedom. At singularities the robot cannot move in certain Cartesian directions, joint velocities may diverge, and force or motion control degrades. Identifying and avoiding singularities is essential for safe, well-conditioned trajectory planning and control of robotic arms.

- ### Overview
  - Identifies configurations where the Jacobian becomes rank-deficient.
  - At singularities the robot loses controllable Cartesian directions.
  - Critical for conditioning, safety and trajectory feasibility.
- ### Mechanisms
  - Jacobian rank and determinant evaluation across the workspace.
  - Boundary versus internal singularity classification.
  - Manipulability measures and conditioning indices.
  - Singularity-avoidance and damped least-squares strategies.
- ### Applications
  - Safe trajectory planning for robotic manipulators.
  - Workspace design and robot selection.
  - Redundancy resolution in redundant arms.
  - Control law design near degenerate configurations.
- ### Provenance

