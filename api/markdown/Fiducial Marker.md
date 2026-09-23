
A fiducial marker is a designed visual pattern placed in a scene to serve as a reliable reference point for computer-vision systems. Its known geometry and high-contrast, machine-readable encoding allow algorithms to detect it robustly, recover camera pose, and assign a unique identifier. Fiducial markers such as ArUco and AprilTag families are widely used for camera calibration, augmented-reality registration, and robot localisation.

- A fiducial marker is a purpose-designed visual pattern placed in a scene as a known reference for vision systems. As a kind of [[Optical Calibration Target]], its fixed geometry supports [[Pose Estimation]], [[Camera Calibration]], and [[Augmented Reality]] registration.
- Each marker encodes a unique identifier and high-contrast geometry that [[Computer Vision]] and [[Feature Detection]] can recover robustly under varied lighting and viewpoint.
- ### Overview
- Fiducial markers give vision systems an unambiguous anchor whose appearance and size are known in advance. Because the marker's real-world dimensions are fixed, detecting its corners yields direct constraints on the camera's position and orientation.
- Popular families include ArUco and AprilTag, which combine a black-and-white grid encoding a binary identifier with detection algorithms tolerant to rotation, blur, and partial occlusion. Error-correcting codes within the pattern reduce false detections.
- Markers may be used singly for tagging objects or arranged in boards and arrays to improve pose accuracy and extend tracking range.
- ### Mechanisms
- Pattern encoding: a binary grid carries a unique identifier with error correction.
- Detection: contour and quad detection locate candidate markers in an image.
- Decoding: the inner grid is sampled and matched against a dictionary of valid codes.
- Pose recovery: known marker geometry plus camera intrinsics yield the marker-to-camera transform.
- ### Applications
- Augmented-reality anchoring of virtual content to physical surfaces.
- Robot and drone localisation and docking.
- Camera and multi-camera extrinsic calibration.
- Object tracking and identification on assembly lines.
- ### Provenance

