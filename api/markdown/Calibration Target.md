- ### OntologyBlock
  id:: calibration-target-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9805
	- source-domain:: mv
	- preferred-term:: Calibration Target
	- definition:: A physical or displayed reference pattern with precisely known geometric, photometric, or colorimetric properties used to determine camera intrinsic and extrinsic parameters, enabling accurate lens distortion correction, spatial measurement, and color reproduction in imaging systems.
	- status:: active
	- owl:class:: mv:CalibrationTarget
	- belongsToDomain:: [[metaverse]]
	- #### Relationships
	  id:: calibration-target-relationships
	  collapsed:: true
		- is-subclass-of:: [[Reference Standard]]
		- enables:: [[Camera Calibration]], [[Lens Distortion Correction]], [[Color Accuracy]]
		- requires:: [[Precision Manufacturing]], [[Pattern Definition]], [[Flatness Control]]
		- related-to:: [[Camera Parameters]], [[Computer Vision]], [[Photogrammetry]]
- ## Technical Details
	- **Common Pattern Types**:
		- **Checkerboard (Chessboard)**: Most common; corners provide invariant reference points
		- **Circle Grid**: Robust against noise/blur; suitable for high-accuracy applications
		- **ChArUco Board**: Hybrid combining checkerboard with ArUco fiducial markers for error correction
		- **Asymmetric Patterns**: Enhanced pose estimation and orientation detection
	- **Material Requirements**:
		- Matte surface (avoid specular highlights)
		- Absolute flatness (no bending or folding)
		- Precision printing (laser preferred over inkjet)
		- Ceramic targets for ultimate accuracy (low thermal expansion)
	- **Best Practices**:
		- Diffuse lighting without shadows
		- Rigid mounting to flat surface
		- Multiple viewing angles during capture
		- Professional manufacturing for production use
- ## Applications
	- OpenCV camera calibration
	- MATLAB Computer Vision Toolbox
	- Photogrammetry and 3D scanning
	- Augmented reality system setup
	- Machine vision quality inspection

