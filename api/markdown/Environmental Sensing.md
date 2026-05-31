public:: true

# Environmental Sensing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:environmental-sensing",
  "@type": "Page",
  "vc:slug": "environmental-sensing",
  "title": "Environmental Sensing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:environmental-sensing",
  "@type": "Class",
  "label": "Environmental Sensing",
  "definition": "Environmental sensing is the acquisition of data about physical surroundings, such as temperature, light, humidity, air quality, sound, or proximity, using sensors. It provides the raw perceptual input that systems use to understand and respond to their context. In robotics, IoT, and context-aware applications it is the foundational layer enabling situational awareness and adaptive behaviour.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-perception", "label": "Robot Perception"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:context-awareness", "label": "Context Awareness"}, {"@id": "urn:ngm:class:sensor", "label": "Sensor"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Environmental sensing acquires physical-world data such as temperature, light, and proximity, supplying the perceptual input behind [[Context Awareness]] and built on the [[Sensor]] layer.
- ### Content
  - Sensors transduce physical phenomena into signals that perception pipelines fuse into a model of the surroundings. This situational data drives adaptive behaviour in robots, IoT systems, and context-aware applications.
