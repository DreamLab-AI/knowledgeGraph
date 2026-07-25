public:: true

# Camera Sensor

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:camera-sensor",
  "@type": "Page",
  "title": "Camera Sensor",
  "vc:slug": "camera-sensor",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:camera-sensor",
  "@type": "Class",
  "label": "Camera Sensor",
  "definition": "A camera sensor is the photosensitive component, typically a CMOS or CCD array, that converts incident light focused by the optics into an electrical signal forming an image. Its characteristics, including resolution, pixel size, dynamic range, noise and frame rate, determine the quality of the captured imagery and shutter behaviour. It is the primary exteroceptive vision input for robots, autonomous vehicles and immersive devices, and is frequently fused with complementary sensors such as lidar.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sensor",
      "label": "Sensor"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:camera",
        "label": "Camera"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:image-sensor",
        "label": "Image Sensor"
      },
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:image-processing",
        "label": "Image Processing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:visual-perception",
        "label": "Visual Perception"
      },
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      },
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:stereo-camera",
        "label": "Stereo Camera"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
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
  - A [[Camera Sensor]] is the [[Image Sensor]] inside a [[Camera]] that converts incident light into electrical signals for [[Image Processing]], feeding [[Computer Vision]] and [[Perception]].
- ### Overview
  - A camera sensor is the photosensitive component, typically a CMOS or CCD array, that converts incident light focused by the optics into an electrical signal.
  - Sensor characteristics such as resolution, pixel size, dynamic range and frame rate determine the quality of the resulting imagery.
  - It is the primary exteroceptive vision input for robots, vehicles and immersive devices.
- ### Key aspects
  - Photodiode array converting photons to charge per pixel.
  - Colour filtering and demosaicing for chromatic imagery.
  - Trade-offs between resolution, sensitivity and noise.
  - Global versus rolling shutter readout behaviour.
- ### Applications
  - Visual perception input for [[Robotics]] and autonomous vehicles.
  - Tracking inputs such as [[Hand Tracking]] in immersive devices.
  - Multi-modal fusion with [[Lidar]] via [[Sensor Fusion]].
- ### Relationships
  - partOf:: [[Camera]]
  - requires:: [[Image Sensor]]
  - requires:: [[Camera Calibration]]
  - uses:: [[Image Processing]]
  - enables:: [[Computer Vision]]
  - enables:: [[Visual Perception]]
  - enables:: [[Perception]]
  - supports:: [[Object Detection]]
  - supports:: [[Hand Tracking]]
  - contrastsWith:: [[Lidar]]
  - relatedTo:: [[Sensor]]
  - relatedTo:: [[Stereo Camera]]
  - bridgesTo:: [[Sensor Fusion]]
- ### Provenance
  - updated:: 2026-06-15
