public:: true

# Disparity Map

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:disparity-map",
  "@type": "Page",
  "title": "Disparity Map",
  "vc:slug": "disparity-map",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:disparity-map",
  "@type": "Class",
  "label": "Disparity Map",
  "definition": "A disparity map is an image in which each pixel encodes the horizontal displacement of corresponding points between the two views of a stereo pair. Because disparity is inversely proportional to scene depth, the map converts directly to a depth map given the camera baseline and focal length. It is the core intermediate product of passive stereo vision, computed by rectifying the images and searching for correspondences along epipolar lines.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stereo-vision",
      "label": "Stereo Vision"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:stereo-vision",
        "label": "Stereo Vision"
      },
      {
        "@id": "urn:ngm:class:stereo-camera",
        "label": "Stereo Camera"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:epipolar-geometry",
        "label": "Epipolar Geometry"
      },
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:feature-matching",
        "label": "Feature Matching"
      },
      {
        "@id": "urn:ngm:class:image-processing",
        "label": "Image Processing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      },
      {
        "@id": "urn:ngm:class:depth-map",
        "label": "Depth Map"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:visual-perception",
        "label": "Visual Perception"
      },
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Disparity Map]] is produced by [[Stereo Vision]] from a calibrated [[Stereo Camera]], encoding per-pixel horizontal shift after [[Feature Matching]] along [[Epipolar Geometry]] to drive [[Depth Estimation]].
- ### Overview
  - A disparity map is an image in which each pixel value encodes the horizontal displacement of corresponding points between the two views of a stereo pair.
  - Disparity is inversely proportional to depth, so the map can be converted to a depth map given the camera baseline and focal length.
  - It is the core intermediate product of passive stereo depth sensing.
- ### Mechanisms
  - Rectification of stereo images using calibration parameters.
  - Correspondence search constrained to epipolar lines.
  - Cost aggregation and disparity optimisation, e.g. semi-global matching.
  - Conversion of disparity to metric depth via triangulation.
- ### Applications
  - Depth perception for autonomous navigation and obstacle avoidance.
  - Three-dimensional reconstruction and [[Point Cloud]] generation.
  - Scene understanding for [[Visual Perception]] pipelines.
- ### Relationships
  - partOf:: [[Stereo Vision]]
  - partOf:: [[Stereo Camera]]
  - dependsOn:: [[Epipolar Geometry]]
  - dependsOn:: [[Camera Calibration]]
  - uses:: [[Feature Matching]]
  - uses:: [[Image Processing]]
  - enables:: [[Depth Estimation]]
  - enables:: [[Depth Map]]
  - enables:: [[Point Cloud]]
  - supports:: [[Visual Perception]]
  - supports:: [[Perception]]
  - relatedTo:: [[Computer Vision]]
  - relatedTo:: [[SLAM]]
  - contrastsWith:: [[Lidar]]
- ### Provenance
  - updated:: 2026-06-15
