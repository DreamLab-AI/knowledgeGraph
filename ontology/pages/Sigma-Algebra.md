public:: true

# Sigma-Algebra
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sigma-algebra",
  "@type": "Page",
  "vc:slug": "sigma-algebra",
  "title": "Sigma-Algebra",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sigma-algebra",
  "@type": "Class",
  "label": "Sigma-Algebra",
  "definition": "A sigma-algebra is a collection of subsets of a sample space that contains the whole space and is closed under complementation and countable unions. It specifies exactly which sets are measurable, providing the domain on which measures and probability are rigorously defined. It is the structural foundation of measure theory, integration, and the theory of stochastic processes.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:optimisation", "label": "Optimisation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:measure-theory", "label": "Measure Theory"}, {"@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A sigma-algebra is a family of subsets closed under complement and countable union that identifies the measurable sets of a space. It is a core part of [[Measure Theory]] and is required to define the filtrations underlying a [[Stochastic Process]].
- ### Content
  - Together with a sample space and a measure, a sigma-algebra forms a measure space; restricting to probability gives a probability space. Filtrations, which are increasing families of sigma-algebras, encode the flow of information over time and are essential to martingales, conditional expectation, and stochastic calculus.
