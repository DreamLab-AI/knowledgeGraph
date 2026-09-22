public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2bffe3ef6e0754db0f6b6df9016258f127c1581c546a781d79c7ecf6458fdb12",
  "@type": "Page",
  "vc:slug": "robo-perception",
  "title": "Perception and Sensing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:robo-perception",
  "label": "Perception and Sensing",
  "definition": "Taxonomy hub for all robotic perception and environmental sensing technologies, covering sensor hardware (LiDAR, cameras, IMUs, tactile sensors), sensor-fusion algorithms, SLAM, object detection, and visual odometry. These capabilities provide robots with the situational awareness required for autonomous navigation and manipulation.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:stereo-camera", "label": "Stereo Camera"},
      {"@id": "urn:ngm:class:imu", "label": "IMU"},
      {"@id": "urn:ngm:class:tactile-sensor", "label": "Tactile Sensor"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:visual-odometry", "label": "Visual Odometry"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:odometry", "label": "Odometry"},
      {"@id": "urn:ngm:class:robot-sensor", "label": "Robot Sensor"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:localisation", "label": "Localisation"}
    ]
  },
  "qualityScore": 0.8,
  "maturity": "established"
}
```
