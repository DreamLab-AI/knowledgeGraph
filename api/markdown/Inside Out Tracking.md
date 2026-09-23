
Inside-out tracking is a positional-tracking method in which cameras and sensors mounted on a head-mounted display observe the surrounding environment to determine the device's own pose in space. It requires no external base stations, computing six-degrees-of-freedom position and orientation from features detected in the scene. The approach underpins standalone virtual and mixed reality headsets by enabling self-contained spatial tracking.

- [[Inside Out Tracking]] is a form of [[Positional Tracking]] where on-device cameras observe the environment to compute the headset's pose.
- It applies [[Computer Vision]] and [[SLAM]] to estimate [[Six Degrees of Freedom]] motion without external sensors.
- The technique powers standalone [[Head-Mounted Display]] devices for [[Virtual Reality]] and [[Mixed Reality]].
- ### Overview
- In inside-out tracking the sensing apparatus is carried by the tracked object itself, looking outward at the world.
- This contrasts with outside-in tracking, which places fixed external sensors that observe the device.
- The method removes the need for room setup or base stations, improving portability and ease of use.
- Robustness depends on visual feature density, lighting and the accuracy of inertial measurement.
- ### Mechanisms
- Wide-field cameras capture environment imagery while an inertial measurement unit supplies high-rate motion data.
- [[Visual-Inertial Odometry]] fuses these streams to track incremental motion with low latency.
- [[SLAM]] builds and refines a map of stable features, correcting drift and enabling relocalisation.
- [[Sensor Fusion]] combines visual, inertial and depth cues into a single consistent pose estimate.
- ### Applications
- Standalone consumer VR and MR headsets for gaming, productivity and training.
- Hand and controller tracking derived from the same outward-facing cameras.
- Persistent spatial anchors for [[Augmented Reality]] content placement.
- ### Provenance

