A checkerboard pattern is a planar grid of alternating black and white squares used as a calibration target in computer vision. Its regularly spaced corners are easy to detect with sub-pixel accuracy and have precisely known relative positions, providing reliable correspondences for estimating camera parameters. The checkerboard is the most common target for intrinsic calibration, distortion correction, and stereo rig alignment.

- A checkerboard pattern is a planar grid of alternating black and white squares used as an [[Optical Calibration Target]]. Its corners detect cleanly via [[Feature Detection]] at sub-pixel accuracy, giving precise correspondences for [[Camera Calibration]].
- Because the corner spacing is known exactly, it constrains [[Camera Intrinsics]] and supports [[Lens Distortion Correction]].

### Overview

- The checkerboard is the workhorse calibration target in computer vision. Its high-contrast edges and saddle-point corners are robust to lighting variation and can be localised more precisely than blob or dot centres.
- A calibration session captures the board at several orientations and depths. Detected corners across views, combined with their known board coordinates, yield an over-determined system solved for the camera's intrinsic matrix and distortion coefficients.
- Variants include asymmetric circle grids and ChArUco boards, which embed fiducial markers to remain detectable under partial occlusion, but the plain checkerboard remains the default for its simplicity and accuracy.

### Mechanisms

- Corner detection: edge and saddle-point operators locate grid intersections.
- Sub-pixel refinement: local optimisation sharpens corner positions.
- Correspondence: detected corners are ordered and matched to known board coordinates.
- Parameter solving: multiple views constrain intrinsics and distortion via least squares.

### Applications

- Intrinsic calibration of single cameras.
- Stereo and multi-camera extrinsic calibration.
- Lens distortion estimation for wide-angle optics.
- Hand-eye calibration in robotics.

### Provenance

