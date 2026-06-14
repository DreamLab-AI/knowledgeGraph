public:: true

# Benign Overfitting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:benign-overfitting",
  "@type": "Page",
  "vc:slug": "benign-overfitting",
  "title": "Benign Overfitting",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:benign-overfitting",
  "@type": "Class",
  "label": "Benign Overfitting",
  "definition": "Benign overfitting is the phenomenon, observed in heavily overparameterised models such as deep neural networks, where a model fits its training data exactly, including noise, yet still generalises well to unseen data. This contradicts the classical bias-variance trade-off, which predicts that interpolating noise should harm generalisation. It is closely associated with the double-descent risk curve and is a central puzzle in modern statistical learning theory.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:algorithmic-bias-and-variance", "label": "Algorithmic Bias and Variance"},
      {"@id": "urn:ngm:class:cross-validation", "label": "Cross-Validation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Benign overfitting describes overparameterised models that interpolate noisy training data yet generalise well, challenging classical [[Algorithmic Bias and Variance]] theory and complicating model selection via [[Cross-Validation]].
- ### Content
  - The effect arises when a model has far more parameters than data points and an implicit bias (from the optimiser or architecture) toward low-norm interpolating solutions. Theoretical work links it to the double-descent curve, where test error first rises then falls again as capacity grows past the interpolation threshold.
