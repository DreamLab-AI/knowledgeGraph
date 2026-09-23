
Projective geometry is the branch of geometry concerned with properties of figures that are invariant under projective transformations, where points at infinity are treated on equal footing with ordinary points. Using homogeneous coordinates, it provides the mathematical foundation for modelling how three-dimensional scenes project onto image planes. It underpins camera models, multi-view geometry, and the reconstruction of structure from images in computer vision and spatial computing.

- Projective geometry studies properties invariant under projective transformations and provides the mathematics of how 3D scenes form images. It is the geometric backbone of [[Computer Vision]], formalising [[Camera Calibration]], [[Homography]], and the projection that makes [[Epipolar Geometry]] and reconstruction tractable.
- ### Overview
- Working in homogeneous coordinates, projective geometry unifies points, lines, and planes and admits points and lines at infinity, which is what lets perspective projection be expressed as a linear operation.
- The pinhole camera model is a projective map from 3D space to the image plane; calibration recovers the intrinsic and extrinsic parameters of this map.
- Two-view and multi-view relationships — the fundamental and essential matrices, homographies, and the trifocal tensor — are all expressions of projective constraints between cameras.
- ### Mechanisms
- Homogeneous coordinates representing points and ideal points at infinity.
- Projective transformations (collineations) preserving incidence and cross-ratio.
- The pinhole projection model mapping 3D scene points to 2D images.
- Two-view geometry via fundamental and essential matrices.
- Cross-ratio and conics as projective invariants.
- ### Applications
- Camera modelling and [[Camera Calibration]] in vision pipelines.
- [[Stereo Vision]] and [[Photogrammetry]] for depth and structure recovery.
- [[Bundle Adjustment]] and [[SLAM]] for consistent multi-view reconstruction.
- Generating dense [[Point Cloud]] data and [[3D Mapping]] of environments.
- ### Provenance

