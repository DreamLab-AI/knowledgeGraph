public:: true

# Inference Algorithm
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:inference-algorithm",
  "@type": "Page",
  "vc:slug": "inference-algorithm",
  "title": "Inference Algorithm",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inference-algorithm",
  "@type": "Class",
  "label": "Inference Algorithm",
  "definition": "An inference algorithm is a computational procedure for deriving conclusions about unobserved quantities from a model and observed data, typically by computing or approximating posterior distributions in probabilistic models. Common families include exact methods (variable elimination, belief propagation), sampling methods (Markov chain Monte Carlo, importance sampling), and variational approximations. It is the engine that turns a model specification into actionable estimates or predictions.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:hamiltonian-monte-carlo", "label": "Hamiltonian Monte Carlo"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - An inference algorithm is a procedure for reasoning about hidden quantities given evidence, forming the computational core of a [[Probabilistic Model]]. It computes or approximates posterior distributions and predictions.
- ### Content
  - Exact inference is tractable only for restricted model structures, so practitioners rely on approximate methods such as [[Hamiltonian Monte Carlo]] and variational inference for large or continuous state spaces. The choice trades off bias, variance, and computational cost.
