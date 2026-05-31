public:: true

# Itô Calculus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:it-calculus",
  "@type": "Page",
  "vc:slug": "it-calculus",
  "title": "Itô Calculus",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:it-calculus",
  "@type": "Class",
  "label": "Itô Calculus",
  "definition": "Itô calculus is a branch of mathematical analysis that extends the methods of calculus to stochastic processes such as Brownian motion. Its central result, Itô's lemma, provides the chain rule for functions of stochastic integrals, accounting for the non-zero quadratic variation of random paths. It is the foundational toolkit for stochastic differential equations and continuous-time probabilistic modelling.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process"},
      {"@id": "urn:ngm:class:stochastic-differential-equation", "label": "Stochastic Differential Equation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Itô calculus extends differential and integral calculus to a [[Stochastic Process]], supplying the rules needed to define and manipulate a [[Stochastic Differential Equation]] driven by Brownian motion.
- ### Content
  - The key distinction from ordinary calculus is the Itô correction term arising from the quadratic variation of the driving noise. This framework underlies diffusion models, score-based generative methods and continuous-time formulations of stochastic gradient dynamics in modern machine learning.
