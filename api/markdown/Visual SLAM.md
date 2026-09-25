Visual simultaneous localisation and mapping (Visual SLAM) is the process of concurrently estimating a camera's trajectory and reconstructing a map of an unknown environment using image data alone or fused with inertial measurements. It combines feature tracking or direct photometric alignment with pose-graph or bundle-adjustment optimisation and loop closure. Visual SLAM is foundational to AR headsets, drones, and mobile robots that lack external positioning.

### Content

- Implementations divide into feature-based (e.g. ORB-SLAM) and direct (e.g. DSO, LSD-SLAM) families, often extended with inertial fusion (VIO) for robustness. Core components are a front-end tracker, a back-end optimiser performing bundle adjustment over keyframes, and loop-closure detection; trade-offs centre on accuracy, computational budget, and resilience to texture-poor or dynamic scenes.

