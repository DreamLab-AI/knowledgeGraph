
The inertia tensor is a 3x3 symmetric matrix that characterises how a rigid body's mass is distributed about a reference point, relating the body's angular velocity to its angular momentum. Its diagonal entries are the moments of inertia about the coordinate axes and its off-diagonal entries are the products of inertia. It is a foundational quantity in rigid-body dynamics, enabling computation of rotational acceleration under applied torques.

- ### Overview
  - Encodes the rotational mass distribution of a body in a single coordinate-dependent matrix.
  - Transforms predictably under rotation and parallel-axis shifts, allowing reuse across reference frames.
  - Sits at the heart of the Newton-Euler and Lagrangian formulations of robot motion.
- ### Key aspects
  - Diagonal moments of inertia quantify resistance to angular acceleration about each axis.
  - Off-diagonal products of inertia vanish when axes align with the principal axes.
  - The parallel-axis theorem shifts the tensor between the centre of mass and other points.
  - Symmetry and positive-definiteness constrain physically valid tensors.
  - Link inertia tensors compose into the joint-space mass matrix of a manipulator.
- ### Applications
  - Computing forward and inverse dynamics for robot arms and legged platforms.
  - Parameterising rigid bodies in physics-simulation engines.
  - System identification of unknown payload inertial parameters.
  - Spacecraft and drone attitude dynamics modelling.
- ### Provenance

