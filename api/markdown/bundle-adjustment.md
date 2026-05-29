- ### Definition
  - Bundle adjustment is a non-linear least-squares optimisation technique in computer vision and photogrammetry that simultaneously refines estimates of 3-D point positions and camera extrinsic and intrinsic parameters so that reprojected 3-D points best match their observed 2-D image locations across all views. It is the gold-standard global refinement step in structure-from-motion pipelines and visual SLAM systems, producing metrically accurate reconstructions from overlapping images or video frames. The term 'bundle' refers to the bundle of light rays connecting each camera centre to observed scene points.

- ### Semantic Classification
  - owl-class:: bundle-adjustment:Bundle Adjustment
  - owl-role:: Concept

- ### Relationships
  - enables [[3D Reconstruction]]
  - enables [[Photogrammetry]]
  - requires [[Camera Calibration]]
  - requires [[Feature Extraction]]
  - relatedTo [[Structure-from-Motion]]

- ### Content
  - Bundle adjustment formulates reconstruction accuracy as a non-linear least-squares problem: the objective function sums squared reprojection errors — the Euclidean distance between a 3-D point projected into a camera image and the observed 2-D keypoint location — over all visible point-camera pairs. The Levenberg-Marquardt algorithm is the standard solver, exploiting the sparse block structure of the normal equations (each 3-D point is observed in only a subset of cameras) via Schur complement elimination to keep computation tractable at large scale.
  - In a structure-from-motion pipeline, bundle adjustment follows an incremental or global reconstruction phase. Feature matching (using SIFT, SURF, or learned descriptors) establishes correspondences; RANSAC-based relative pose estimation initialises camera positions and 3-D point tracks; and bundle adjustment then jointly optimises all parameters to millimetre-level accuracy over thousands of images and millions of points. Software libraries including Ceres Solver, g2o, and GTSAM implement sparse bundle adjustment for research and production use.
  - In visual SLAM contexts, bundle adjustment is applied in a sliding window (local BA) or loop-closure correction (global BA) mode to balance real-time performance with map accuracy. The accuracy of bundle adjustment depends on good initial estimates, sufficient image overlap, and well-calibrated camera intrinsics, making camera calibration and robust feature extraction prerequisite steps.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z