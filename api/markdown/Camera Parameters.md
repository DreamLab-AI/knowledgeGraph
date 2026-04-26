iri:: http://narrativegoldmine.com/spatial-computing#CameraParameters
uri:: urn:visionclaw:concept:spatial-computing:camera-parameters
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:camera-parameters
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Camera Parameters
content-hash:: sha256-12-dd46e36bb0c0
legacy-term-id:: MV-9806
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

- ### Definition
  - The intrinsic and extrinsic mathematical values that define a camera's optical characteristics and spatial positioning, comprising focal length, optical center, distortion coefficients (intrinsic) and rotation/translation relative to world coordinates (extrinsic), essential for 3D reconstruction and photogrammetry.

- ### Semantic Classification
  - owl-class:: spatial-computing:CameraParameters
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Imaging Parameters]]
  - requires:: [[Camera Calibration]], [[Calibration Target]], [[Optimization Algorithm]]
  - enables:: [[3D Reconstruction]], [[Object Measurement]], [[Scene Localization]]
  - bridges-to:: [[Computer Vision]]

- ### Content

  - ## Technical Details
  - **Intrinsic Parameters** (3x3 Matrix K):
		- fx, fy: Focal lengths in pixel units
		- cx, cy: Principal point (optical center) coordinates
		- s: Skew coefficient (usually zero)
		- Maps 3D camera coordinates to 2D image coordinates
  - **Extrinsic Parameters** (4x4 Matrix):
		- R: 3x3 rotation matrix
		- t: 3x1 translation vector
		- Transforms world coordinates to camera coordinates
  - **Camera Matrix**: M = K[R | -RT] combines both for complete projection
  - **Lens Distortion** (nonlinear):
		- Radial distortion: Light bends more at lens edges
		- Tangential distortion: Lens not perfectly parallel to sensor
  - **Calibration Methods**:
		- Zhang's method (checkerboard patterns)
		- Homography-based estimation
		- Bundle adjustment optimization
  - ## Applications
  - Autonomous vehicle perception
  - Augmented reality overlay alignment
  - Robotic vision and navigation
  - 3D scanning and reconstruction
  - Machine vision inspection systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
