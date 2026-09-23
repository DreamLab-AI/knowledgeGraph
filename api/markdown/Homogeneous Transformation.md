
A homogeneous transformation is a 4x4 matrix that compactly represents both rotation and translation of a rigid body in three-dimensional space using homogeneous coordinates. By embedding rotation and translation into a single matrix, transformations can be composed through matrix multiplication, making them the standard tool for relating coordinate frames in robotics and graphics. Homogeneous transformations underpin forward and inverse kinematics, pose representation and frame chaining along kinematic links.

- ### Overview
  - Represents rigid-body rotation and translation in a single 4x4 matrix.
  - Composes via matrix multiplication to chain coordinate frames.
  - Foundational for kinematics, pose and frame relationships.
- ### Mechanisms
  - Homogeneous coordinates extending 3D points to four components.
  - Block structure combining a rotation matrix and translation vector.
  - Composition and inversion of transformation chains.
  - Denavit-Hartenberg parameterisation of link frames.
- ### Applications
  - Forward and inverse kinematics of manipulators.
  - Pose representation and frame transforms in robotics.
  - Camera and sensor extrinsic calibration.
  - 3D graphics and scene-graph transforms.
- ### Provenance

