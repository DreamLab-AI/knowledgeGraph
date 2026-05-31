public:: true

# Robot Localisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:robot-localisation",
  "@type": "Page",
  "vc:slug": "robot-localisation",
  "title": "Robot Localisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:robot-localisation",
  "@type": "Class",
  "label": "Robot Localisation",
  "definition": "Robot localisation is the problem of estimating a robot's pose, its position and orientation, within a known map from noisy sensor measurements and motion commands. It is typically solved with probabilistic filters that maintain a belief over possible poses and update it as new observations arrive. Accurate localisation is a prerequisite for reliable navigation and planning.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Robotics Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:bayes-filter", "label": "Bayes Filter"}, {"@id": "urn:ngm:class:particle-filter", "label": "Particle Filter"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Robot localisation estimates a robot's pose within a known map from noisy data, commonly enabled by a [[Bayes Filter]] or a [[Particle Filter]].
- ### Content
  - Filters recursively predict pose from motion and correct it from observations, maintaining a probability distribution that captures uncertainty. Particle filters represent this belief with weighted samples, supporting global localisation and recovery from kidnapping.
