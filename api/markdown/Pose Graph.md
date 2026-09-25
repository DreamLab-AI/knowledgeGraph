A pose graph is a graph representation used in robotics where nodes are robot poses (positions and orientations) and edges encode relative spatial constraints derived from odometry or sensor measurements. Pose-graph optimisation finds the configuration of poses that best satisfies all constraints, correcting accumulated drift. It is the backbone of modern graph-based SLAM systems.

### Content

- Edges fuse relative motion estimates from odometry with loop-closure constraints detected when the robot revisits a place. Nonlinear least-squares solvers (e.g. Gauss-Newton, Levenberg-Marquardt) optimise the graph to redistribute drift, producing globally consistent trajectories and maps even over large, looping environments.

