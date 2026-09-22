public:: true

# Pick and Place
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:pick-and-place",
  "@type": "Page",
  "vc:slug": "pick-and-place",
  "title": "Pick and Place",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pick-and-place",
  "@type": "Class",
  "label": "Pick and Place",
  "definition": "Pick and place is a canonical robotic manipulation task in which a manipulator grasps an object at a source location and deposits it at a target location. It chains perception to localise the object, motion planning to reach and grasp it, and controlled placement, often repeated at high speed in structured settings. It is the foundational operation of industrial automation in assembly, packaging, and sorting.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:manipulation", "label": "Manipulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:position-control", "label": "PositionControl"}, {"@id": "urn:ngm:class:cylindrical-robot", "label": "Cylindrical Robot"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Pick and place is the robotic task of grasping an object and relocating it to a target, typically executed through [[Position Control]] and by mechanisms such as a [[Cylindrical Robot]].
- ### Content
  - A pick-and-place cycle localises the part, plans a collision-free trajectory to a grasp pose, actuates an end-effector to secure it, then transports and releases it at the destination. In structured industrial lines, position control and fixed feeders yield very high throughput and repeatability, while unstructured bin-picking adds vision and learned grasping to handle variable object pose and geometry.
