public:: true

# Reference Frames
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reference-frames",
  "@type": "Page",
  "vc:slug": "reference-frames",
  "title": "Reference Frames",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reference-frames",
  "@type": "Class",
  "label": "Reference Frames",
  "definition": "A reference frame is a coordinate system, anchored to a chosen origin and orientation, against which positions, velocities, and orientations are measured. In robotics each link, sensor, and the world itself has its own frame, and motion is described by transformations between them. Correct frame definitions are essential for sensor fusion, kinematics, and consistent spatial reasoning.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:coordinate-transformation", "label": "Coordinate Transformation"},
      {"@id": "urn:ngm:class:kinematics-model", "label": "Kinematics Model"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Reference frames are the coordinate systems against which spatial quantities are expressed, related to one another through [[Coordinate Transformation]] and consumed by every [[Kinematics Model]].
- ### Content
  - Typical frames include the world (inertial) frame, base frame, end-effector frame, and per-sensor frames, organised into a transform tree. Software such as the ROS tf system maintains time-stamped relationships between frames so that data captured in one frame can be reasoned about in another.
