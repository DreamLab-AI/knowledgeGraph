public:: true

# Pose Tracking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:pose-tracking",
  "@type": "Page",
  "vc:slug": "pose-tracking",
  "title": "Pose Tracking",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pose-tracking",
  "@type": "Class",
  "label": "Pose Tracking",
  "definition": "Pose tracking is the continuous estimation of the position and orientation (6-DoF pose) of a device, user, or body over time. In spatial computing it underpins head, hand, and controller tracking for AR and VR, fusing camera, IMU, and depth data at low latency. Accurate, drift-free pose tracking is essential for stable, comfortable immersive experiences.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:spatial-computing-domain", "label": "Spatial Computing Domain"},
      {"@id": "urn:ngm:class:ar-display-device", "label": "AR Display Device"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Pose tracking continuously estimates 6-DoF position and orientation of devices and body parts. It is a constituent capability of the [[Spatial Computing Domain]] and a hard requirement for any [[AR Display Device]].
- ### Content
  - Inside-out tracking fuses visual feature tracking with high-rate inertial measurements to estimate pose with low latency and minimal drift. Techniques include visual-inertial odometry, SLAM, and learned keypoint detection. Tight calibration and prediction reduce motion-to-photon latency, which is critical for avoiding discomfort in head-mounted displays.
