A homography is a projective transformation, represented by a 3x3 matrix, that maps points from one plane to another in homogeneous coordinates, preserving straight lines but not parallelism or angles. In computer vision it relates two images of the same planar surface or two views taken from the same camera centre, enabling tasks such as image rectification, perspective correction, and mosaicking. Homographies are estimated from corresponding feature points, often robustly via methods that reject outlier matches.

### Overview

- A homography maps one image plane onto another under perspective.
- It is valid for planar scenes or pure camera rotation.
- Eight degrees of freedom are fixed by at least four point correspondences.
- Robust estimation discards mismatched features.

### Mechanisms

- Operates on homogeneous coordinates with a 3x3 matrix.
- Preserves collinearity but not metric properties.
- Estimated by the direct linear transform from correspondences.
- RANSAC rejects outlier matches during fitting.
- Decomposes into rotation and translation under known calibration.

### Applications

- Panorama and image stitching.
- Perspective correction and document rectification.
- Marker-based augmented-reality overlay.
- Ground-plane estimation in robotics and driving.

### Provenance

