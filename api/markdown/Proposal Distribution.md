public:: true

# Proposal Distribution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:proposal-distribution",
  "@type": "Page",
  "vc:slug": "proposal-distribution",
  "title": "Proposal Distribution",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proposal-distribution",
  "@type": "Class",
  "label": "Proposal Distribution",
  "definition": "A proposal distribution is an auxiliary distribution used in Monte Carlo methods to generate candidate samples when sampling directly from a target distribution is infeasible. In importance sampling, Metropolis-Hastings, and particle filters it determines where samples are drawn, and its closeness to the target governs efficiency and variance. A poorly chosen proposal causes sample degeneracy or slow mixing.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:sampling", "label": "Sampling"},
      {"@id": "urn:ngm:class:particle-filter", "label": "Particle Filter"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A proposal distribution generates candidate samples in Monte Carlo methods where direct sampling from the target is intractable. It is required by [[Sampling]] schemes and is a key component of the [[Particle Filter]].
- ### Content
  - In importance sampling, samples drawn from the proposal are reweighted by the ratio of target to proposal density; in Metropolis-Hastings the proposal generates moves that are accepted or rejected to leave the target invariant. In particle filtering the proposal often combines the motion model with the latest measurement to focus particles in high-likelihood regions, reducing the degeneracy that otherwise collapses the sample set.
