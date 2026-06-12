public:: true

# Conformal Prediction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:conformal-prediction",
  "@type": "Page",
  "vc:slug": "conformal-prediction",
  "title": "Conformal Prediction",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:conformal-prediction",
  "@type": "Class",
  "label": "Conformal Prediction",
  "definition": "Conformal prediction is a distribution-free framework for quantifying predictive uncertainty by producing prediction sets that contain the true outcome with a user-specified probability. Using a held-out calibration set and a nonconformity score, it provides finite-sample, model-agnostic coverage guarantees under the exchangeability assumption. It wraps around any underlying point predictor to deliver statistically valid confidence regions.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Conformal prediction produces calibrated prediction sets with guaranteed marginal coverage, complementing any [[Probabilistic Model]] with distribution-free uncertainty quantification.
- ### Content
  - The method ranks a test point's nonconformity score against a calibration set to form a set of plausible labels at the chosen error rate. Its guarantees hold under exchangeability for any base model, making it attractive for safety-critical and regulated deployments where calibrated uncertainty is required.
