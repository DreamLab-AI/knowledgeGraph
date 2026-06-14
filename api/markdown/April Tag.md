public:: true

# April Tag
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:april-tag",
  "@type": "Page",
  "vc:slug": "april-tag",
  "title": "April Tag",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:april-tag",
  "@type": "Class",
  "label": "April Tag",
  "definition": "An AprilTag is a square fiducial marker, resembling a simplified QR code, designed for robust detection and accurate 6-DoF pose estimation by computer-vision systems. Each tag encodes a unique ID with strong error correction, enabling reliable recognition under poor lighting, partial occlusion, and oblique viewing angles. AprilTags are widely used as visual landmarks for camera calibration, robot localization, and augmented-reality registration.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-perception", "label": "Perception and Sensing"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:lens-and-camera-calibration", "label": "Lens and Camera Calibration"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - An AprilTag is a robust square fiducial marker that vision systems detect to recover a unique ID and full 6-DoF pose. It is a standard target for [[Lens and Camera Calibration]] and for providing known reference points in a scene.
- ### Content
  - The detector locates the tag's quad border, decodes its error-correcting payload, and solves for the camera-to-tag transform from the known marker geometry. Strong error correction and high contrast make detection reliable at distance and under occlusion, which is why AprilTags anchor robot localization, multi-camera calibration, and AR alignment.
