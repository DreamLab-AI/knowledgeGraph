public:: true

# Camera Intrinsics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:camera-intrinsics",
  "@type": "Page",
  "vc:slug": "camera-intrinsics",
  "title": "Camera Intrinsics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:camera-intrinsics",
  "@type": "Class",
  "label": "Camera Intrinsics",
  "definition": "Camera Intrinsics are the internal optical and geometric parameters of a camera that define the mathematical relationship between 3D points in the camera's coordinate frame and their 2D projections onto the image sensor. The intrinsic parameter matrix encodes focal length in pixel units along each image axis, the principal point (optical axis intersection with the sensor), and skew, whilst associated distortion coefficients correct for lens aberrations that cause deviations from the ideal pinhole projection model.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-vision",
      "label": "Computer Vision"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:lens-distortion-model",
        "label": "Lens Distortion Model"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:camera-model",
        "label": "Camera Model"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sensor-calibration",
        "label": "Sensor Calibration"
      },
      {
        "@id": "urn:ngm:class:optical-calibration-target",
        "label": "Optical Calibration Target"
      },
      {
        "@id": "urn:ngm:class:pinhole-camera-model",
        "label": "Pinhole Camera Model"
      },
      {
        "@id": "urn:ngm:class:projective-geometry",
        "label": "Projective Geometry"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:stereo-vision",
        "label": "Stereo Vision"
      },
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:camera-extrinsics",
        "label": "Camera Extrinsics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:epipolar-geometry",
        "label": "Epipolar Geometry"
      },
      {
        "@id": "urn:ngm:class:structure-from-motion",
        "label": "Structure-from-Motion"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:optical-flow",
        "label": "Optical Flow"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:intrinsic-camera-parameters",
      "label": "Intrinsic Camera Parameters"
    },
    {
      "@id": "urn:ngm:class:camera-intrinsic-matrix",
      "label": "Camera Intrinsic Matrix"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Camera Intrinsics]] parameterise the internal geometry of a camera imaging system, captured in the 3×3 intrinsic matrix K that maps normalised camera-frame coordinates to pixel image coordinates. The key parameters are the focal length $f_x$ and $f_y$ (expressed in pixels, encoding the physical focal length divided by pixel size), the principal point $(c_x, c_y)$ (the pixel coordinates of the optical axis), and optionally a skew coefficient for non-rectangular pixel grids. Lens distortion — radial (barrel or pincushion) and tangential — is separately modelled by a polynomial expansion. These parameters are determined through [[Sensor Calibration]] procedures and remain fixed for a given camera-lens assembly at a given focus setting.

- ### Relationships
  - Camera Intrinsics are a core concept within [[Computer Vision]] and are determined via [[Sensor Calibration]] using [[Optical Calibration Target]] patterns. Once known, they enable metric [[Photogrammetry]] — computing 3D geometry from 2D images — by undoing the perspective projection. Accurate intrinsics are prerequisites for [[Pose Estimation]] (determining camera orientation from known 3D-2D correspondences using PnP solvers), [[Stereo Vision]] rectification, and [[Structure-from-Motion]] bundle adjustment. [[Epipolar Geometry]] derivation — computing the fundamental matrix and essential matrix from image point correspondences — relies on intrinsics to transform pixel coordinates into normalised image coordinates.

- ### Content
  - The mathematical model of camera intrinsics derives from the pinhole camera model, a projective geometry idealisation in which a 3D scene point is projected through a single point (the optical centre) onto an image plane at distance $f$ (the focal length). This model was formalised for computer vision applications by Hartley and Zisserman in their canonical text Multiple View Geometry in Computer Vision (2000), building on earlier photogrammetric work in surveying and aerial mapping. The decomposition of the projection matrix P = K[R|t] into intrinsic matrix K and extrinsic rotation R and translation t provides the mathematical foundation for most multi-view reconstruction algorithms.

  - Technically, the intrinsic matrix $K = [[f_x, s, c_x], [0, f_y, c_y], [0, 0, 1]]$ where $f_x = f/d_x$ and $f_y = f/d_y$ (d_x, d_y being the physical pixel dimensions). For most modern cameras, skew $s$ is negligible. Distortion is modelled by the Brown-Conrady model with radial coefficients $k_1, k_2, k_3$ and tangential coefficients $p_1, p_2$. Calibration solves for these parameters by minimising reprojection error over a set of images of a planar calibration target (checkerboard) from multiple viewpoints, using Zhang's method. Modern implementations (OpenCV, MATLAB Computer Vision Toolbox) handle this via non-linear least-squares (Levenberg-Marquardt).

  - Camera intrinsics matter across autonomous vehicles (LiDAR-camera fusion requires precise intrinsic calibration of each camera in the array), extended reality headsets (display-camera calibration determines geometric correction for see-through AR), robotic manipulation (grasp point estimation from RGB-D cameras requires metric 3D reconstruction), medical imaging (endoscope calibration for surgical guidance), and satellite remote sensing (geometric correction of pushbroom sensor imagery). Each application domain has its own calibration field practices, accuracy requirements, and repeatability standards.

  - In 2024–2025, deep learning approaches to intrinsic calibration are supplementing classical methods. Neural networks trained on large image datasets can estimate approximate focal length and distortion from single images, enabling rapid intrinsic bootstrapping without a physical calibration target. Learning-based undistortion models bypass explicit polynomial parameterisation altogether, operating directly in pixel space. For fish-eye and catadioptric cameras — where the polynomial distortion model breaks down — generalised unified camera models and neural implicit representations are being adopted. Factory calibration with robotic precision fixtures is increasingly combined with online self-calibration to track thermal drift and focus changes during operation.

