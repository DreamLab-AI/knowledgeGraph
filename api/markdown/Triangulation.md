Triangulation is the process of determining the 3D position of a point by intersecting lines of sight from two or more known viewpoints. Given calibrated cameras and corresponding image observations, it recovers depth and structure by solving for the point that best explains the rays. Triangulation is a core operation in stereo vision, photogrammetry, structure-from-motion, and positioning systems.

- Triangulation determines a 3D point by intersecting lines of sight from two or more calibrated viewpoints. As a [[Computer Vision]] operation it builds on [[Projective Geometry]] and [[Epipolar Geometry]], using [[Camera Calibration]] and matched observations to recover depth and structure.

### Overview

- Given corresponding points in multiple images and the cameras' projection matrices, triangulation solves for the world point whose projections best match the observations, typically minimising reprojection error.
- Because measurements are noisy, optimal triangulation accounts for image noise and is often refined jointly with camera parameters through [[Bundle Adjustment]].
- The same geometric principle generalises beyond cameras to positioning systems, where ranges or bearings from known references fix an unknown location.

### Mechanisms

- Ray intersection from multiple calibrated viewpoints.
- Linear (DLT) and optimal (reprojection-error-minimising) estimators.
- Correspondence establishment via feature matching.
- Joint refinement with camera pose through bundle adjustment.
- Outlier rejection using epipolar constraints.

### Applications

- Depth recovery in [[Stereo Vision]] and [[Depth Sensing]] systems.
- Dense and sparse reconstruction producing a [[Point Cloud]].
- Map building in [[SLAM]] and [[3D Mapping]].
- Positioning and surveying analogues bridging to [[GPS]].

### Provenance

