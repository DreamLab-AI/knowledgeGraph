public:: true

# Expectation Maximisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:expectation-maximisation",
  "@type": "Page",
  "vc:slug": "expectation-maximisation",
  "title": "Expectation Maximisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:expectation-maximisation",
  "@type": "Class",
  "label": "Expectation Maximisation",
  "definition": "Expectation Maximisation (EM) is an iterative algorithm for finding maximum-likelihood or maximum-a-posteriori estimates of parameters in statistical models with latent (unobserved) variables. It alternates between an E-step, which computes the expected value of the complete-data log-likelihood given current parameters, and an M-step, which maximises that expectation to update the parameters. EM is guaranteed to monotonically increase the likelihood at each iteration and is widely used for Gaussian mixture models, hidden Markov models, and missing-data problems.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bayes-filter", "label": "Bayes Filter"},
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:optimisation", "label": "Optimisation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Expectation Maximisation is an iterative method for fitting [[Probabilistic Model]]s containing latent variables, alternating an expectation step with a maximisation step to climb the likelihood surface. It underlies inference in mixture models and is closely related to the recursive estimation performed by a [[Bayes Filter]].
- ### Content
  - Each EM iteration is guaranteed not to decrease the observed-data likelihood, which makes it numerically stable, though it may converge to local optima and is sensitive to initialisation. Common applications include clustering with Gaussian mixtures, training hidden Markov models, and imputing missing data, where the latent structure makes direct [[Optimisation]] of the marginal likelihood intractable.
