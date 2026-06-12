public:: true

# Graphical Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:graphical-model",
  "@type": "Page",
  "vc:slug": "graphical-model",
  "title": "Graphical Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:graphical-model",
  "@type": "Class",
  "label": "Graphical Model",
  "definition": "A graphical model is a probabilistic model that expresses the conditional dependence structure among random variables as a graph, where nodes are variables and edges encode statistical relationships. Bayesian networks use directed acyclic graphs while Markov random fields use undirected graphs, both enabling compact representation of joint distributions. They support efficient inference and learning by exploiting conditional independence.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A graphical model is a [[Probabilistic Model]] whose dependency structure among variables is drawn as a graph, allowing a high-dimensional joint distribution to be factorised into local terms.
- ### Content
  - Directed variants (Bayesian networks) capture causal or generative orderings; undirected variants (Markov random fields) capture symmetric interactions. Inference algorithms such as belief propagation and variational methods exploit the graph's sparsity, making graphical models central to structured prediction, computer vision, and probabilistic reasoning.
