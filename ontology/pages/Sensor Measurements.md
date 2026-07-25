public:: true

# Sensor Measurements
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sensor-measurements",
  "@type": "Page",
  "vc:slug": "sensor-measurements",
  "title": "Sensor Measurements",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sensor-measurements",
  "@type": "Class",
  "label": "Sensor Measurements",
  "definition": "Sensor measurements are the time-stamped observations produced by physical or virtual sensors, each carrying a value, a unit, and an associated uncertainty or noise model. In probabilistic robotics they form the observation stream that estimators condition on to infer latent state such as pose or velocity. Their statistical characterisation is essential for filtering, fusion, and localisation.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-perception", "label": "Perception and Sensing"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:bayes-filter", "label": "Bayes Filter"}, {"@id": "urn:ngm:class:monte-carlo-localization", "label": "Monte Carlo Localization"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sensor measurements are time-stamped observations with values, units, and uncertainty that estimators consume to infer latent state. They are the observation input required by a [[Bayes Filter]] and by [[Monte Carlo Localization]].
- ### Content
  - Each measurement is modelled by an observation likelihood that maps hidden state to expected readings plus noise. Accurate measurement models, calibration, and time synchronisation are prerequisites for correct Bayesian updates and convergence of recursive state estimators.
