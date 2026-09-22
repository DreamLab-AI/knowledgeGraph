public:: true

# LiDAR Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:lidar-sensor",
  "@type": "Page",
  "vc:slug": "lidar-sensor",
  "title": "LiDAR Sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lidar-sensor",
  "@type": "Class",
  "label": "LiDAR Sensor",
  "definition": "A LiDAR sensor measures distance by emitting laser pulses and timing their reflections, producing dense 3D point clouds of the surrounding environment. Variants include mechanical spinning, solid-state, and flash designs that trade field of view, range, and cost. LiDAR is a cornerstone perception modality for autonomous robots, reality capture, and occupancy mapping.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:occupancy-grid", "label": "Occupancy Grid"}, {"@id": "urn:ngm:class:reality-capture-system", "label": "Reality Capture System"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A LiDAR sensor emits laser pulses to build 3D point clouds; this data populates the [[Occupancy Grid]] used for navigation and feeds the geometry captured by a [[Reality Capture System]].
- ### Content
  - Time-of-flight ranging yields centimetre-accurate depth independent of ambient lighting, complementing cameras in sensor fusion. Point density, scan rate, and range determine suitability for high-speed driving versus detailed indoor mapping.
