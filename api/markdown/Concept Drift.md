public:: true

# Concept Drift

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-concept-drift",
  "@type": "Page",
  "vc:slug": "concept-drift",
  "title": "Concept Drift",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:concept-drift",
  "@type": "Class",
  "label": "Concept Drift",
  "definition": "Concept Drift is the phenomenon in which the statistical properties of the target variable that a machine learning model was trained to predict change over time, causing model performance to degrade. Drift can be abrupt, gradual, or recurring, and may stem from evolving user behaviour, environmental shifts, or data collection changes. Detecting and adapting to concept drift is essential for maintaining the reliability of deployed ML systems.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:inference-optimisation", "label": "Inference Optimisation"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - The phenomenon where the statistical properties of a model's prediction target shift over time, degrading performance and requiring drift detection and adaptive retraining strategies.
