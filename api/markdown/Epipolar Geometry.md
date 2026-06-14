public:: true

# Epipolar Geometry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:epipolar-geometry",
  "@type": "Page",
  "vc:slug": "epipolar-geometry",
  "title": "Epipolar Geometry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:epipolar-geometry",
  "@type": "Class",
  "label": "Epipolar Geometry",
  "definition": "Epipolar Geometry is the projective geometry of stereo vision, describing the geometric relationship between two camera views of the same 3D scene. It is encapsulated in the Fundamental Matrix (uncalibrated cameras) and Essential Matrix (calibrated cameras), which constrain the search for correspondences between images to one-dimensional epipolar lines rather than the full 2D image plane.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:stereo-vision", "label": "Stereo Vision"},
      {"@id": "urn:ngm:class:structure-from-motion", "label": "Structure-from-Motion"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:camera-calibration", "label": "Camera Calibration"},
      {"@id": "urn:ngm:class:camera-intrinsics", "label": "Camera Intrinsics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Epipolar Geometry]] is the mathematical framework governing the projective relationship between two views of a 3D scene captured from different camera positions. Given a point in one image, epipolar geometry constrains its corresponding point in the second image to lie on a specific line — the epipolar line — reducing stereo correspondence search from 2D to 1D and dramatically improving efficiency and robustness. This geometry is encoded in the Fundamental Matrix F (for uncalibrated cameras) or the Essential Matrix E (for calibrated cameras), which relate corresponding image points via the epipolar constraint x'ᵀFx = 0.

- ### Relationships
  - Epipolar Geometry is foundational to [[Computer Vision]] and directly enables [[Stereo Vision]] for disparity and [[Depth Estimation]], [[Structure-from-Motion]] for 3D reconstruction from image sequences, and underpins [[SLAM]] systems that require geometric consistency across multi-camera rigs. It depends on accurate [[Camera Calibration]] and [[Camera Intrinsics]] knowledge to compute the Essential Matrix and rectify image pairs. Output correspondences feed [[Point Cloud]] generation pipelines and downstream spatial understanding tasks.

- ### Content
  - The mathematical foundations of epipolar geometry were established in the 19th century through projective geometry, but its systematic application to computer vision was codified by Longuet-Higgins (1981) for the Essential Matrix and extended to uncalibrated cameras via the Fundamental Matrix by Hartley, Faugeras, and colleagues in the early 1990s. Hartley and Zisserman's textbook "Multiple View Geometry in Computer Vision" (2000, 2nd ed. 2003) remains the definitive reference, consolidating decades of theory into a unified projective framework.

  - The Fundamental Matrix F is a 3×3 rank-2 matrix computed from at least 7 point correspondences using algorithms such as the 8-point algorithm (linear, with normalisation) or the 5-point algorithm for the Essential Matrix (given known calibration). RANSAC-based robust estimation filters outlier correspondences caused by moving objects or matching errors, yielding reliable F/E estimates even under significant noise. Stereo rectification applies homographies to warp both images so that epipolar lines become horizontal scanlines, enabling efficient dense stereo matching.

  - Epipolar geometry is embedded in virtually every 3D computer vision pipeline. Structure-from-Motion systems (COLMAP, OpenSfM) use it to initialise reconstruction from image pairs before bundle adjustment. Stereo depth cameras (ZED, Intel RealSense, automotive stereo rigs) rely on factory-calibrated essential matrices for real-time disparity computation. In [[SLAM]], the epipolar constraint provides a geometric consistency check for feature tracking and loop closure detection.

  - In 2024–2025, learning-based approaches have begun to augment or replace classical epipolar geometry in some settings: models such as LoFTR use attention mechanisms for dense correspondence without explicit epipolar constraints, and depth foundation models (Depth Pro, Metric3D) regress metric depth from single images, reducing reliance on stereo pairs. Nevertheless, epipolar geometry remains essential for multi-camera calibration, novel-view synthesis (NeRF, 3D Gaussian Splatting), and any application requiring provably consistent geometric reconstruction.