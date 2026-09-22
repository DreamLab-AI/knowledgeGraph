public:: true

# RGB-D Camera
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rgb-d-camera",
  "@type": "Page",
  "vc:slug": "rgb-d-camera",
  "title": "RGB-D Camera",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rgb-d-camera",
  "@type": "Class",
  "label": "RGB-D Camera",
  "definition": "An RGB-D camera is a sensor that captures both colour (RGB) imagery and per-pixel depth (D) information in a single aligned frame. Depth is typically derived from structured light, time-of-flight, or stereo techniques, yielding a dense 3D representation of the scene. RGB-D cameras are widely used in robotics for perception, mapping, and manipulation because they combine appearance and geometry cheaply.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:robotics-platform", "label": "Robotics Platform"}, {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An RGB-D camera captures aligned colour and depth per pixel, a sensor commonly required by a [[Robotics Platform]] and used to support [[Depth Estimation]].
- ### Content
  - Depth is recovered via structured light, time-of-flight, or active stereo. The combined data stream feeds SLAM, object recognition, and grasp planning, giving robots both what a scene looks like and where its surfaces are.
