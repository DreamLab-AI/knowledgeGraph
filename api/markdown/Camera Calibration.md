public:: true
alias:: CameraCalibration

# camera calibration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4d205f656b51406028ac92d8fa77de795c4d4f0e9432ea6e8d3af0610b88af80",
  "@type": "Page",
  "vc:slug": "camera-calibration",
  "title": "camera calibration",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:camera-calibration",
  "@type": "Class",
  "label": "Camera Calibration",
  "definition": "Camera Calibration is the process of estimating a camera's intrinsic parameters (focal length, principal point, skew, radial and tangential distortion coefficients) and, when multiple cameras or sensors are involved, extrinsic parameters (rotation and translation between coordinate frames). Accurate calibration is prerequisite to metrically correct 3D reconstruction, stereo depth estimation, augmented reality overlay registration, and robot visual servoing. The Zhang calibration method, using a planar chessboard target, is the dominant practical technique and is standardised in OpenCV and MATLAB's Computer Vision Toolbox.",
  "domain": "spatial-computing",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "SC Display and Rendering"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:camera", "label": "Camera"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Camera Calibration is the process of estimating a camera's intrinsic parameters (focal length, principal point, skew, radial and tangential distortion coefficients) and, when multiple cameras or sensors are involved, extrinsic parameters (rotation and translation between coordinate frames). Accurate calibration is prerequisite to metrically correct 3D reconstruction, stereo depth estimation, augmented reality overlay registration, and robot visual servoing. The Zhang calibration method, using a planar chessboard target, is the dominant practical technique and is standardised in OpenCV and MATLAB's Computer Vision Toolbox.

- ### Semantic Classification
  - owl-class:: camera-calibration:Camera Calibration
  - owl-role:: Concept

- ### Relationships
  - enables [[3D Reconstruction]]
  - enables [[Depth Estimation]]
  - enables [[Pose Estimation]]
  - requires [[Camera]]
  - relatedTo [[Sensor Fusion]]
  - relatedTo [[SLAM]]

- ### Content
  - Camera Calibration is a foundational step in any system that reasons geometrically about 3D scenes from 2D imagery. Intrinsic parameters encode the optical properties of the camera-lens system: focal length in x and y (which may differ due to pixel aspect ratio), the principal point (optical axis intersection with the image plane), and distortion coefficients modelling radial (barrel/pincushion) and tangential (decentring) lens aberrations. Extrinsic parameters describe the rigid-body transformation (rotation matrix and translation vector) from world coordinates to the camera frame, or between pairs of cameras in a stereo rig.
  - The Zhang method involves capturing multiple images of a planar calibration target (e.g., a chessboard or ChArUco board) at varied orientations, then solving for the camera matrix and distortion coefficients via non-linear optimisation (typically Levenberg-Marquardt minimisation of reprojection error). Stereo calibration extends this to jointly estimate the relative pose between two cameras, enabling rectification and dense Depth Estimation via semi-global block matching or learned stereo networks. LiDAR-camera extrinsic calibration — aligning a point cloud to the image frame — is essential for Sensor Fusion in autonomous vehicles and employs specialised targets or mutual information optimisation.
  - Calibration quality degrades over time due to mechanical shock, thermal expansion, and vibration, necessitating periodic re-calibration in production systems. Online or continuous calibration methods exploit ego-motion and structure-from-motion cues to refine parameters during operation without dedicated calibration sequences. The outputs of camera calibration feed directly into SLAM pipelines, 3D Reconstruction algorithms, Photogrammetry workflows, and Augmented Reality systems, where sub-pixel reprojection accuracy is required for convincing overlay registration.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
