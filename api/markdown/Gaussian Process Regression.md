public:: true

# Gaussian Process Regression
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gaussian-process-regression",
  "@type": "Page",
  "vc:slug": "gaussian-process-regression",
  "title": "Gaussian Process Regression",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gaussian-process-regression",
  "@type": "Class",
  "label": "Gaussian Process Regression",
  "definition": "Gaussian process regression is a non-parametric Bayesian method that models an unknown function as a distribution over functions defined by a mean and a covariance (kernel) function. Given observations, it produces a posterior that yields predictions together with calibrated uncertainty estimates. It is widely used where data is scarce and quantified uncertainty matters, such as Bayesian optimisation and surrogate modelling.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:gaussian-process", "label": "Gaussian Process"}, {"@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Gaussian process regression performs Bayesian non-parametric regression using a [[Gaussian Process]] prior, a particular [[Stochastic Process]], to predict values with principled uncertainty estimates.
- ### Content
  - The kernel encodes assumptions about smoothness and length scale, and its hyperparameters are typically learned by maximising the marginal likelihood. Predictions are closed-form, but exact inference costs cubic time in the number of points, motivating sparse and inducing-point approximations for scale. Its uncertainty estimates make it a natural surrogate model in Bayesian optimisation and active learning.
