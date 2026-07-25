public:: true

# Wiener Process
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:wiener-process",
  "@type": "Page",
  "vc:slug": "wiener-process",
  "title": "Wiener Process",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wiener-process",
  "@type": "Class",
  "label": "Wiener Process",
  "definition": "The Wiener process, also called standard Brownian motion, is a continuous-time stochastic process characterised by independent, stationary, normally distributed increments starting at zero, with continuous but nowhere-differentiable sample paths. It is the canonical mathematical model of random continuous motion and the foundational driver of stochastic calculus and diffusion equations. The Wiener process underpins models in finance, physics, and the noise schedules of diffusion generative models.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:optimisation", "label": "Optimisation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process"}, {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Wiener process is the canonical continuous-time [[Stochastic Process]] with Gaussian increments; it drives the diffusion dynamics underlying many a [[Generative Model]] and the theory of stochastic differential equations.
- ### Content
  - Formally, W(0)=0, increments W(t)-W(s) are N(0, t-s) and independent over disjoint intervals, and paths are almost surely continuous yet non-differentiable. It is the integrator in Itô and Stratonovich calculus, appears as the limit of scaled random walks, and provides the forward-noising prior in score-based and denoising-diffusion generative modelling.
