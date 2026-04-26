iri:: http://narrativegoldmine.com/spatial-computing#CalibrationTarget
uri:: urn:visionclaw:concept:spatial-computing:calibration-target
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:calibration-target
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Calibration Target
content-hash:: sha256-12-41de9e4f6734
legacy-term-id:: MV-9805
status:: active
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true
bridges-to:: [[Computer Vision]]

- ### Definition
  - A physical or displayed reference pattern with precisely known geometric, photometric, or colorimetric properties used to determine camera intrinsic and extrinsic parameters, enabling accurate lens distortion correction, spatial measurement, and color reproduction in imaging systems.

- ### Semantic Classification
  - owl-class:: spatial-computing:CalibrationTarget
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Reference Standard]]
  - requires:: [[Precision Manufacturing]], [[Pattern Definition]], [[Flatness Control]]
  - enables:: [[Camera Calibration]], [[Lens Distortion Correction]], [[Color Accuracy]]

- ### Content

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

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
