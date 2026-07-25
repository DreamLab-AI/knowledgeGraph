public:: true

# Likelihood Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:likelihood-function",
  "@type": "Page",
  "vc:slug": "likelihood-function",
  "title": "Likelihood Function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:likelihood-function",
  "@type": "Class",
  "label": "Likelihood Function",
  "definition": "A likelihood function expresses the probability of observed data as a function of the parameters of a statistical model, treating the data as fixed and the parameters as variable. It is the central object in maximum-likelihood estimation and Bayesian inference, where it weights how well candidate parameter values explain the evidence. In sequential filtering it scores how consistent each hypothesis is with a new measurement.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:particle-filter", "label": "Particle Filter"}, {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A likelihood function scores how well parameters explain observed data; it is a required component of a [[Particle Filter]]'s measurement update and a core element of any [[Probabilistic Model]].
- ### Content
  - In a particle filter the likelihood weights each particle by the probability of the current observation given that particle's predicted state, driving resampling toward plausible hypotheses. Maximising the likelihood, or combining it with a prior via Bayes' rule, yields parameter and state estimates.
