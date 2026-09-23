
Manipulability is a scalar or ellipsoid measure of a robotic manipulator's capacity to move and exert forces in arbitrary directions from a given joint configuration. Introduced by Tsuneo Yoshikawa, the manipulability measure w = sqrt(det(J·Jᵀ)) quantifies how far a configuration is from kinematic singularity: higher values indicate greater dexterity, while w = 0 indicates a singular configuration where motion in at least one direction is lost. Manipulability is used in motion planning, redundancy resolution, and task-space control to avoid singular regions.

In redundant manipulators (more joints than task-space dimensions), manipulability is used as a secondary objective in null-space optimisation — the extra degrees of freedom are used to reposition joints to increase w without affecting the end-effector pose. This is particularly important for human-robot collaboration where accessible and comfortable postures improve safety.

- ### Semantic Classification

- ### Content

- ### Provenance

