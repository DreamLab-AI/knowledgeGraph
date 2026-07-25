public:: true

# Depth Map

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:depth-map",
  "@type": "Page",
  "title": "Depth Map",
  "vc:slug": "depth-map",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:depth-map",
  "@type": "Class",
  "label": "Depth Map",
  "definition": "A depth map is a per-pixel image in which each value encodes the distance from the camera to the corresponding point in the scene rather than its colour. It provides the 2.5D geometric structure needed to reconstruct surfaces, segment foreground from background and place virtual content in spatial computing. Depth maps are produced by stereo matching, structured light, time-of-flight sensing or learned monocular estimation.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-vision",
      "label": "Computer Vision"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:stereo-vision",
        "label": "Stereo Vision"
      },
      {
        "@id": "urn:ngm:class:volumetric-video",
        "label": "Volumetric Video"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:depth-sensing",
        "label": "Depth Sensing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:stereo-vision",
        "label": "Stereo Vision"
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
    "enables": [
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:volumetric-video",
        "label": "Volumetric Video"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
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
  - A depth map is a per-pixel image in which each value encodes the distance from the camera to the corresponding point in the scene rather than its colour.
  - It provides the 2.5D geometric structure needed to reconstruct surfaces, segment foreground from background and place virtual content in spatial computing.
  - Depth maps are produced by stereo matching, structured light, time-of-flight sensing or learned monocular estimation.
  - Related core concepts: [[Computer Vision]] [[Point Cloud]] [[Stereo Vision]] [[Depth Sensing]]
- ### Overview
  - Each pixel stores distance, giving a viewpoint-dependent 2.5D representation of geometry.
  - Back-projecting a depth map through camera intrinsics yields a 3D point cloud.
  - Sources include passive stereo, active structured light, time-of-flight and learned monocular depth.
- ### Key aspects
  - Camera intrinsics and disparity-to-depth conversion.
  - Occlusion, missing data and depth discontinuities at edges.
  - Sensor noise and confidence maps accompanying depth.
  - Fusion of multiple depth frames into consistent geometry.
- ### Applications
  - AR occlusion and scene reconstruction.
  - Robotic perception and obstacle avoidance.
  - Volumetric capture and 3D scanning.
- ### Relationships
  - hasPart:: [[Point Cloud]]
  - relatedTo:: [[Computer Vision]]
  - relatedTo:: [[Stereo Vision]]
  - relatedTo:: [[Volumetric Video]]
  - requires:: [[Depth Sensing]]
  - uses:: [[Stereo Vision]]
  - uses:: [[Structured Light]]
  - uses:: [[Lidar]]
  - enables:: [[Point Cloud]]
  - enables:: [[Volumetric Video]]
  - supports:: [[Spatial Computing]]
  - bridgesTo:: [[Computer Graphics]]
  - partOf:: [[Computer Vision]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
