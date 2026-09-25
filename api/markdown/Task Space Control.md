Task space control, also called operational space control, regulates a robot's end-effector directly in Cartesian task coordinates rather than in joint space. Control laws are formulated in terms of end-effector position, orientation and force, with the manipulator Jacobian mapping task-space commands to joint actuation. This approach simplifies specification of interaction tasks such as following a path, applying a force or maintaining compliance against the environment.

### Overview

- Controls end-effector pose and force directly in Cartesian task space.
- Maps task commands to joint actuation through the Jacobian.
- Simplifies specification of contact and interaction tasks.

### Mechanisms

- Operational-space dynamics and Jacobian transpose mapping.
- Position, orientation and force regulation in task coordinates.
- Redundancy resolution via null-space projection.
- Singularity handling at the task-space boundary.

### Applications

- Compliant assembly and contact-rich manipulation.
- Path and force following for machining or polishing.
- Teleoperation and human-robot interaction.
- Hybrid position/force control of manipulators.

### Provenance

