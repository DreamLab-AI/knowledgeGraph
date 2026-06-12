public:: true

# Prior Distribution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:prior-distribution",
  "@type": "Page",
  "vc:slug": "prior-distribution",
  "title": "Prior Distribution",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:prior-distribution",
  "@type": "Class",
  "label": "Prior Distribution",
  "definition": "A prior distribution is the probability distribution over unknown quantities that encodes belief before observing data, in Bayesian inference. It is combined with the likelihood via Bayes' theorem to produce the posterior. The choice of prior, ranging from informative to weakly informative or uninformative, encodes assumptions and regularises inference, especially with limited data.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bayes-filter", "label": "Bayes Filter"},
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:posterior-distribution", "label": "Posterior Distribution"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A prior distribution encodes belief about unknowns before observing data in Bayesian inference. It is a component of the [[Bayes Filter]] and any [[Probabilistic Model]], and is updated into the [[Posterior Distribution]] once data arrive.
- ### Content
  - Priors range from informative (encoding domain knowledge) to weakly informative or non-informative (minimising assumptions). Conjugate priors yield closed-form posteriors and simplify computation, while hierarchical priors share statistical strength across groups. In recursive filters, the predicted prior for each time step is derived from the previous step's posterior propagated through a motion model.
