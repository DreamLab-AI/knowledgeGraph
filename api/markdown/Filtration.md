public:: true

# Filtration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:filtration",
  "@type": "Page",
  "vc:slug": "filtration",
  "title": "Filtration",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:filtration",
  "@type": "Class",
  "label": "Filtration",
  "definition": "In probability theory, a filtration is an increasing family of sigma-algebras indexed by time that formally represents the accumulation of information available up to each instant. It models what is knowable at each point as a stochastic process unfolds, with each sigma-algebra containing all events whose outcomes are determined by then. Filtrations are fundamental to defining adapted processes, martingales, and conditional expectations in stochastic analysis and mathematical finance.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process"},
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A filtration is a time-indexed increasing family of sigma-algebras encoding the information available as a [[Stochastic Process]] evolves, providing the rigorous notion of "information up to time t". It underpins adaptedness and conditioning used across [[Probabilistic Model]]s.
- ### Content
  - Formally, a filtration is a collection of nested sigma-algebras where earlier ones are contained in later ones, capturing the irreversible growth of knowledge over time. A process is adapted to a filtration when its value at each time is measurable with respect to the corresponding sigma-algebra, a condition essential to defining martingales, stopping times, and the conditional expectations central to sequential inference and stochastic modelling.
