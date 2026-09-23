
A camera model is a mathematical description that maps three-dimensional scene points to two-dimensional image coordinates, capturing the geometry of how a camera projects the world. It encodes intrinsic parameters such as focal length and principal point alongside extrinsic parameters describing pose, and may model lens distortion. Camera models underpin calibration, reconstruction and pose estimation in computer vision and spatial computing.

- ### Overview
  - The pinhole model is the canonical formulation, extended with distortion terms for real lenses.
  - Intrinsic parameters fix focal length and principal point; extrinsics fix rotation and translation.
  - Accurate models are prerequisites for [[Structure From Motion]] and [[Stereo Vision]].
- ### Mechanisms
  - Projection composes extrinsic transform, perspective division and intrinsic scaling.
  - Radial and tangential distortion correct deviations from the ideal pinhole.
  - Calibration estimates parameters from known targets or scene constraints.
  - Reprojection error quantifies how well the model fits observed features.
- ### Applications
  - Camera calibration for measurement and augmented reality alignment.
  - Depth recovery via stereo and multi-view geometry.
  - Pose tracking for [[SLAM]] and robotics navigation.
- ### Provenance

