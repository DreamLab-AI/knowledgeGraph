public:: true

# Coordinate Frame
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:coordinate-frame",
  "@type": "Page",
  "vc:slug": "coordinate-frame",
  "title": "Coordinate Frame",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:coordinate-frame",
  "@type": "Class",
  "label": "Coordinate Frame",
  "definition": "A coordinate frame is a reference system defined by an origin and a set of axes against which positions, orientations, and motions are measured. In robotics and perception, multiple frames (world, base, sensor, tool) are related by rigid-body transforms so that data from different sources can be expressed consistently. Correct frame management is essential for sensor fusion, motion planning, and collision checking.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Robotics Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:exteroceptive-sensor", "label": "Exteroceptive Sensor"}, {"@id": "urn:ngm:class:collision-detection", "label": "Collision Detection"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A coordinate frame is an origin-and-axes reference for measuring pose and motion, required to interpret data from an [[Exteroceptive Sensor]] and to perform [[Collision Detection]].
- ### Content
  - Frames are linked by homogeneous transforms forming a tree (for example via ROS tf), letting a system convert measurements between sensor, robot, and world references. Errors in frame definitions or transform chains produce systematic offsets that corrupt mapping, planning, and manipulation.
