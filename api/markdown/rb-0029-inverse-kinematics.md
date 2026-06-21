- ### Definition
  - **Inverse Kinematics** (RB-0029) determines the joint angles or actuator lengths required to place a robot's end-effector at a desired Cartesian position and orientation. Unlike forward kinematics, IK is typically under-determined (redundant robots with more DoF than task dimensions) or over-determined, and may yield multiple solutions, a unique solution, or no solution depending on the target pose and kinematic structure. Analytical closed-form solutions exist for standard 6-DoF arm geometries (e.g., spherical wrist), while numerical iterative methods (Jacobian pseudo-inverse, damped least squares, CCD) handle general cases at the cost of computational overhead and convergence guarantees.

- ### Semantic Classification
  - owl-class:: robotics:rb0029inversekinematics
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - contrastsWith:: rb 0028 forward kinematics
  - uses:: rb 0030 jacobian matrix, rb 0031 singularity
  - relatedTo:: rb 0021 robot kinematics, rb 0023 degrees of freedom
  - enables:: Motion Planning, rb 0051 trajectory planning

- ### Content
  - ### Primary Definition
  **Inverse Kinematics** - Computing joint angles from desired end-effector pose

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z