public:: true

# Environmental Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:environmental-sensor",
  "@type": "Page",
  "vc:slug": "environmental-sensor",
  "title": "Environmental Sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:environmental-sensor",
  "@type": "Class",
  "label": "Environmental Sensor",
  "definition": "An environmental sensor is a device that measures ambient physical conditions of its surroundings, such as temperature, humidity, pressure, light level, air quality, or sound. As an exteroceptive sensor it perceives the external world rather than a system's internal state. These sensors supply the contextual data used by robots, augmented-reality systems, and smart-environment applications to adapt their behaviour.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:exteroceptive-sensor", "label": "Exteroceptive Sensor"}, {"@id": "urn:ngm:class:augmented-reality-ar", "label": "Augmented Reality (AR)"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An environmental sensor measures ambient conditions such as temperature or air quality; it is a kind of [[Exteroceptive Sensor]] and feeds context to systems including [[Augmented Reality (AR)]].
- ### Content
  - Unlike proprioceptive sensors that report internal state, environmental sensors observe the outside world. Their readings are fused into perception and context models that drive responsive robotic and AR behaviours.
