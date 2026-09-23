
Lens distortion correction is the process of removing geometric aberrations introduced by camera optics so that straight lines in the world appear straight in the image. It estimates distortion coefficients, typically radial and tangential terms, from calibration data and remaps pixels to an undistorted, rectilinear projection. The correction is a prerequisite for accurate measurement, pose estimation, and image rectification in computer-vision pipelines.

- Lens distortion correction removes geometric aberrations from camera optics so world-straight lines render straight. As a step within [[Camera Calibration]], it depends on estimated [[Camera Intrinsics]] and reference data captured from an [[Optical Calibration Target]] such as a [[Checkerboard Pattern]].
- The corrected, rectilinear imagery is a prerequisite for accurate [[Pose Estimation]] and [[Photogrammetry]].
- ### Overview
- Real lenses, especially wide-angle and inexpensive optics, bend light non-ideally. The dominant effect is radial distortion (barrel or pincushion), with smaller tangential components from imperfect lens-sensor alignment.
- Correction models these effects with a small set of coefficients fitted during calibration. A remapping function then warps each pixel to where it would appear under an ideal pinhole projection, producing an undistorted image.
- Because measurement and geometry algorithms assume a pinhole model, applying distortion correction first is essential for accuracy in metrology, AR registration, and 3D reconstruction.
- ### Mechanisms
- Coefficient estimation: radial and tangential parameters are fitted from observed control points.
- Distortion model: a polynomial maps ideal to distorted coordinates.
- Pixel remapping: an inverse map plus interpolation produces the undistorted image.
- Validation: residual reprojection error confirms the quality of the correction.
- ### Applications
- Preprocessing for stereo and multi-view 3D reconstruction.
- Accurate augmented-reality overlay registration.
- Photogrammetry and metrology where geometric fidelity matters.
- Wide-angle and fisheye camera rectification for robotics and automotive vision.
- ### Provenance

