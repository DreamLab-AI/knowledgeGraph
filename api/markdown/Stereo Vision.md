public:: true

# Stereo Vision
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stereo-vision",
  "@type": "Page",
  "vc:slug": "stereo-vision",
  "title": "Stereo Vision",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stereo-vision",
  "@type": "Class",
  "label": "Stereo Vision",
  "definition": "Stereo vision is a computational technique that recovers metric depth information from a scene by analysing the horizontal displacement (disparity) between corresponding points in two or more rectified images captured from laterally separated viewpoints, mimicking the binocular parallax used by human and animal visual systems. The resulting dense disparity maps are converted into 3D point clouds or depth maps for downstream perception tasks.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:computer-vision",
    "label": "Computer Vision"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:epipolar-geometry",
        "label": "Epipolar Geometry"
      },
      {
        "@id": "urn:ngm:class:feature-matching",
        "label": "Feature Matching"
      },
      {
        "@id": "urn:ngm:class:disparity-map",
        "label": "Disparity Map"
      },
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      },
      {
        "@id": "urn:ngm:class:point-cloud-generation",
        "label": "Point Cloud Generation"
      },
      {
        "@id": "urn:ngm:class:3-d-scene-reconstruction",
        "label": "3D Scene Reconstruction"
      },
      {
        "@id": "urn:ngm:class:visual-odometry",
        "label": "Visual Odometry"
      },
      {
        "@id": "urn:ngm:class:obstacle-detection",
        "label": "Obstacle Detection"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:image-synchronisation",
        "label": "Image Synchronisation"
      },
      {
        "@id": "urn:ngm:class:lens-distortion-correction",
        "label": "Lens Distortion Correction"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:stereo-matching",
        "label": "Stereo Matching"
      },
      {
        "@id": "urn:ngm:class:semi-global-matching",
        "label": "Semi-Global Matching"
      },
      {
        "@id": "urn:ngm:class:cost-volume",
        "label": "Cost Volume"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:epipolar-geometry",
        "label": "Epipolar Geometry"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:autonomous-driving",
        "label": "Autonomous Driving"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:robotic-grasping",
        "label": "Robotic Grasping"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:monocular-depth-estimation",
        "label": "Monocular Depth Estimation"
      },
      {
        "@id": "urn:ngm:class:structured-light",
        "label": "Structured Light"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:optical-flow",
        "label": "Optical Flow"
      },
      {
        "@id": "urn:ngm:class:multi-view-stereo",
        "label": "Multi-View Stereo"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:advanced-driver-assistance-system",
        "label": "Advanced Driver Assistance Systems"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:binocular-vision",
      "label": "Binocular Vision"
    },
    {
      "@id": "urn:ngm:class:stereo-depth-sensing",
      "label": "Stereo Depth Sensing"
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
  - Stereo vision systems recover scene depth by computing pixel-level disparities between a pair of synchronised, horizontally separated cameras whose relative geometry is precisely characterised through [[Camera Calibration]] and described by [[Epipolar Geometry]]. After rectification — transforming image pairs so that corresponding points lie on the same horizontal scan line — stereo matching algorithms (block matching, semi-global matching, or learned cost volumes) produce disparity maps from which metric depth is derived as Z = fB/d, where f is focal length, B is baseline, and d is disparity. Dense depth maps are then lifted to [[Point Cloud Generation]] for 3D understanding.

- ### Relationships
  - Stereo vision is closely related to [[SLAM]], where stereo cameras provide ego-motion estimation and mapping without external depth sensors. [[Optical Flow]] methods complement stereo by estimating temporal motion, and [[Multi-View Stereo]] generalises the two-camera case to unordered image collections. [[Feature Matching]] underpins sparse stereo approaches and stereo visual odometry pipelines.

- ### Content
  - The geometric foundations of stereo vision were established in the 19th century with Wheatstone's stereoscope (1838), and the computational formulation emerged in the 1970s from David Marr's work on binocular fusion. Semi-global matching (SGM), published by Heiko Hirschmüller in 2005, became the dominant classical algorithm for dense stereo — balancing accuracy and computational efficiency — and was adopted in automotive driver-assistance systems through the 2010s.

  - Modern stereo matching is largely dominated by deep learning approaches. DispNet (2016) introduced end-to-end learned disparity estimation using correlation layers, followed by PSMNet (2018), RAFT-Stereo (2021), and FoundationStereo (2024), which leverage large-scale pretraining and transformer attention mechanisms. These networks significantly outperform classical SGM on standard benchmarks (KITTI, Middlebury) but require GPU inference and substantial labelled training data or self-supervised photometric consistency losses.

  - Hardware stereo rigs are deployed in automotive advanced driver-assistance systems (ADAS), robotics (Boston Dynamics, ROS-based platforms), augmented reality headsets (Microsoft HoloLens), and depth sensing cameras (Intel RealSense, Stereolabs ZED). The baseline distance critically determines measurable depth range: short baselines (5–10 cm) suit indoor robotics, while automotive stereo uses baselines of 20–60 cm to detect obstacles at 50–200 metres.

  - By 2024–2025, stereo vision competes with monocular depth estimation networks, structured light (Azure Kinect), and [[Lidar]] scanning for depth sensing. Stereo remains preferred in bright outdoor environments where structured light is unreliable, and on cost-sensitive platforms where active depth sensors are prohibitive. Neural stereo methods increasingly run on edge accelerators (Nvidia Orin, Qualcomm Snapdragon) enabling real-time dense depth at under 5 watts.

