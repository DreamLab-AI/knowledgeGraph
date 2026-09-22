public:: true

# Visual Perception
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:visual-perception",
  "@type": "Page",
  "vc:slug": "visual-perception",
  "title": "Visual Perception",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:visual-perception",
  "@type": "Class",
  "label": "Visual Perception",
  "definition": "Visual perception is a robot or agent's capability to interpret its environment from camera and visual sensor data, extracting the objects, surfaces, motion and spatial structure needed to act. It transforms raw imagery into actionable scene understanding that drives behaviours such as gaze control, manipulation and navigation. Visual perception is a core perceptual modality for embodied robotic systems.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-perception", "label": "Perception and Sensing"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:gaze-control", "label": "Gaze Control"}, {"@id": "urn:ngm:class:camera", "label": "Camera"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Visual perception is a robot's interpretation of its surroundings from visual input, required by [[Gaze Control]] and built on data captured by a [[Camera]].
- ### Content
  - It encompasses detection, recognition, depth estimation and scene reconstruction, often fusing multiple cameras and learned models. Reliable visual perception enables active behaviours such as directing gaze toward salient targets and guiding manipulation and locomotion in unstructured environments.
