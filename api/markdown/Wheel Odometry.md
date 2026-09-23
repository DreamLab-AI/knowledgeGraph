
Wheel odometry is a method of estimating a mobile robot's change in position and orientation by counting wheel rotations measured with encoders and applying a kinematic motion model. As an instance of dead reckoning, it integrates incremental wheel displacement over time to track pose relative to a starting point. It is simple and low-cost but accumulates drift from wheel slip, uneven terrain and calibration error, so it is typically fused with other sensors.

- Wheel odometry estimates a [[Mobile Robot]]'s pose change from [[Encoder]] readings of wheel rotation combined with a [[Kinematics]] motion model, a form of [[Dead Reckoning]].
- It feeds [[Localisation]] and [[Navigation]] but accumulates drift over distance.
- ### Overview
- By measuring how far each wheel turns, the robot computes incremental translation and rotation, integrating these to track its position relative to a start point.
- The approach is cheap and self-contained, requiring no external infrastructure, but small per-step errors compound, especially under wheel slip or uneven terrain.
- In practice it is fused with inertial and exteroceptive sensors to bound drift, contrasting with vision-based [[Visual Odometry]].
- ### Key aspects
- Encoder-based measurement of wheel rotation.
- Kinematic model converting wheel motion to body pose change.
- Incremental integration producing relative pose estimates.
- Drift accumulation from slip, terrain and calibration error.
- Sensitivity to accurate wheel-radius and track-width calibration.
- ### Mechanisms
- Encoder ticks are converted to wheel displacement, combined through the drive kinematics into linear and angular velocity, and integrated to update the estimated pose.
- ### Applications
- Low-level motion tracking for [[Mobile Robot]] platforms.
- Prediction step in [[SLAM]] and [[Sensor Fusion]] estimators.
- Short-horizon [[Pose Estimation]] between absolute fixes.
- Differential-drive and wheeled-robot navigation.
- ### Provenance

