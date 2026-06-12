public:: true

# Posterior Distribution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:posterior-distribution",
  "@type": "Page",
  "vc:slug": "posterior-distribution",
  "title": "Posterior Distribution",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:posterior-distribution",
  "@type": "Class",
  "label": "Posterior Distribution",
  "definition": "A posterior distribution is the probability distribution over unknown quantities after observing data, obtained by combining a prior distribution with the likelihood via Bayes' theorem. It represents updated belief and is the central object of Bayesian inference. In recursive estimators such as Bayes and particle filters, the posterior at each step becomes the basis for the next prediction.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bayes-filter", "label": "Bayes Filter"},
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:prior-distribution", "label": "Prior Distribution"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A posterior distribution is the updated belief over unknowns after observing data, computed via Bayes' theorem. It is a core component of the [[Bayes Filter]] and any [[Probabilistic Model]], formed by reweighting the [[Prior Distribution]] with the data likelihood.
- ### Content
  - Computing the posterior requires normalising the product of prior and likelihood by the marginal evidence, which is often intractable. Practical methods approximate it through conjugate priors, variational inference, Markov chain Monte Carlo, or particle representations. In sequential estimation the posterior is propagated forward as the next step's prior.
