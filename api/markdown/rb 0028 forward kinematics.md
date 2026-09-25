Forward kinematics (FK) is the mathematical process of computing the position and orientation of a robot's end effector in Cartesian space given a known set of joint angles or displacements. Using a chain of homogeneous transformation matrices (typically expressed using Denavit-Hartenberg parameters), FK provides a unique, computationally deterministic mapping from joint space to task space. It is used in motion planning, visualisation, and safety monitoring to determine where the robot tool tip is at any instant, and underpins workspace analysis, collision checking, and trajectory verification.

### Semantic Classification

### Content

### Primary Definition

**Forward Kinematics** (RB-0028) maps joint space to task space via a product of homogeneous transformation matrices T_i = f(θ_i, d_i, a_i, α_i), with parameters derived from the Denavit-Hartenberg (DH) convention. For an n-DOF manipulator, the overall transformation T_0n = T_01 × T_12 × ... × T_(n-1)n gives the end-effector frame relative to the base frame.

FK is used continuously in robot controllers to track tool position, check workspace limits, perform real-time collision detection, and compute the Jacobian matrix required for velocity kinematics and force transformation. Encoders (RB-0072) provide the joint angle inputs; singularities (RB-0031) occur where the Jacobian loses rank, causing FK to become locally degenerate in velocity mappings.

### Provenance

