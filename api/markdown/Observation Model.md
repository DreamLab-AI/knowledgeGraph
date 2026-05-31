public:: true

# Observation Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:observation-model",
  "@type": "Page",
  "vc:slug": "observation-model",
  "title": "Observation Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:observation-model",
  "@type": "Class",
  "label": "Observation Model",
  "definition": "An observation model (or measurement model) is the probabilistic relationship that specifies the likelihood of a sensor measurement given the underlying state of a system. In recursive Bayesian estimation it provides the likelihood term used to correct a predicted state belief against incoming data. Its accuracy, including the noise characteristics it encodes, directly governs the quality of state estimation.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-perception", "label": "Robotics Perception"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bayes-filter", "label": "Bayes Filter"},
      {"@id": "urn:ngm:class:particle-filter", "label": "Particle Filter"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - An observation model gives the likelihood of a measurement given the system state. It is a component of both the [[Bayes Filter]] and the [[Particle Filter]] estimation methods.
- ### Content
  - During the update step, the model weights candidate states by how well they explain the latest sensor reading, with measurement noise typically modelled as Gaussian or via a learned likelihood. A mis-specified observation model causes overconfident or biased estimates, so calibrating sensor noise and handling outliers are central to reliable localisation and tracking.
