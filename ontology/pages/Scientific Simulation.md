public:: true

# Scientific Simulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:scientific-simulation",
  "@type": "Page",
  "vc:slug": "scientific-simulation",
  "title": "Scientific Simulation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scientific-simulation",
  "@type": "Class",
  "label": "Scientific Simulation",
  "definition": "Scientific simulation is the numerical modelling of physical, chemical, or biological systems to predict behaviour that is impractical to observe directly. It solves governing equations across discretised domains, as in fluid dynamics, molecular dynamics, and climate modelling, typically on high-performance computing infrastructure. Machine learning increasingly augments simulation through learned surrogates and data-driven generation.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-computing-and-cloud", "label": "Computing and Cloud"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:generative-adversarial-networks", "label": "Generative Adversarial Networks"},
      {"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Scientific simulation models complex systems numerically, is enabled by large-scale [[Compute Infrastructure]], and is increasingly supported by generative methods such as [[Generative Adversarial Networks]].
- ### Content
  - Traditional simulation discretises partial differential equations over meshes or particles, scaling to massive parallel clusters. Generative and neural-surrogate models can approximate or accelerate these solvers, while physics-informed constraints help keep learned outputs consistent with conservation laws.
