
An AprilTag is a square fiducial marker, resembling a simplified QR code, designed for robust detection and accurate 6-DoF pose estimation by computer-vision systems. Each tag encodes a unique ID with strong error correction, enabling reliable recognition under poor lighting, partial occlusion, and oblique viewing angles. AprilTags are widely used as visual landmarks for camera calibration, robot localization, and augmented-reality registration.

- ### Content
  - The detector locates the tag's quad border, decodes its error-correcting payload, and solves for the camera-to-tag transform from the known marker geometry. Strong error correction and high contrast make detection reliable at distance and under occlusion, which is why AprilTags anchor robot localization, multi-camera calibration, and AR alignment.

