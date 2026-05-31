public:: true

# Global Localisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:global-localisation",
  "@type": "Page",
  "vc:slug": "global-localisation",
  "title": "Global Localisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:global-localisation",
  "@type": "Class",
  "label": "Global Localisation",
  "definition": "Global localisation is the problem of estimating a robot's pose within a known map without any prior knowledge of its starting position, often called the kidnapped-robot problem. Unlike pose tracking, it must resolve ambiguity across the entire map, typically by maintaining and refining multiple pose hypotheses from sensor observations. It is fundamental to robot navigation, autonomous vehicles, and recovery from localisation failures.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Robot Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:gps", "label": "GPS"}, {"@id": "urn:ngm:class:particle-filter", "label": "Particle Filter"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Global localisation determines a robot's pose in a map from scratch, with no initial estimate; it complements absolute references like [[GPS]] and is commonly solved with a [[Particle Filter]] that tracks many hypotheses.
- ### Content
  - Particle filters (Monte Carlo localisation) represent the pose distribution with weighted samples that converge as sensor data accumulates, while scan-matching and place-recognition methods generate candidate poses. The approach must handle perceptual aliasing, where different locations look similar, by retaining multimodal beliefs until disambiguating evidence arrives. It is essential at start-up and for recovering after a robot is moved or loses tracking.
