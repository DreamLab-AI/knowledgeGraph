public:: true

# Depth Camera

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:depth-camera",
  "@type": "Page",
  "title": "Depth Camera",
  "vc:slug": "depth-camera",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:depth-camera",
  "@type": "Class",
  "label": "Depth Camera",
  "definition": "A depth camera is a sensor that captures, for each pixel, the distance from the camera to objects in the scene, producing a depth map or 3D point cloud rather than only colour intensity. Common operating principles include structured light, time-of-flight, and stereo disparity, often combined with a colour stream to yield RGB-D data. Depth cameras are foundational sensors for spatial perception, enabling reconstruction, mapping, and interaction with three-dimensional environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:camera",
      "label": "Camera"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:structured-light",
        "label": "Structured Light"
      },
      {
        "@id": "urn:ngm:class:stereo-vision",
        "label": "Stereo Vision"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:depth-sensing",
        "label": "Depth Sensing"
      },
      {
        "@id": "urn:ngm:class:spatial-mapping",
        "label": "Spatial Mapping"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:gesture-recognition",
        "label": "Gesture Recognition"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:calibration",
        "label": "Calibration"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "LiDAR"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mapping",
        "label": "Mapping"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      },
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
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
  - [[Camera]]
  - [[Sensor]]
  - [[Point Cloud]]
  - [[Computer Vision]]
  - [[SLAM]]
- ### Overview
  - Adds the missing third dimension to imaging, recovering scene geometry directly.
  - Realised through several competing principles, each with distinct range, accuracy, and lighting trade-offs.
  - Serves as the front-end sensor for a wide range of spatial-computing perception pipelines.
- ### Key aspects
  - Structured-light projection of known patterns to triangulate surface depth.
  - Time-of-flight measurement of light round-trip time per pixel.
  - Passive and active stereo recovering depth from disparity between views.
  - RGB-D alignment registering colour and depth into a single coordinate frame.
  - Calibration and noise handling that determine usable range and accuracy.
- ### Applications
  - Real-time SLAM and mapping for robots and AR/VR headsets.
  - 3D scene reconstruction and spatial mapping of environments.
  - Gesture, body-pose, and hand tracking for natural interaction.
  - Object detection, bin-picking, and manipulation in robotics.
- ### Relationships
  - partOf:: [[Perception]]
  - implements:: [[Sensor]]
  - uses:: [[Structured Light]]
  - uses:: [[Stereo Vision]]
  - enables:: [[Depth Sensing]]
  - enables:: [[Spatial Mapping]]
  - enables:: [[Point Cloud]]
  - supports:: [[SLAM]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Gesture Recognition]]
  - requires:: [[Calibration]]
  - contrastsWith:: [[LiDAR]]
  - bridgesTo:: [[Computer Vision]]
  - relatedTo:: [[Mapping]]
  - relatedTo:: [[Object Detection]]
  - relatedTo:: [[Photogrammetry]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
