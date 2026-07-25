public:: true

# Kernel Methods
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:kernel-methods",
  "@type": "Page",
  "vc:slug": "kernel-methods",
  "title": "Kernel Methods",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kernel-methods",
  "@type": "Class",
  "label": "Kernel Methods",
  "definition": "Kernel methods are a class of machine learning algorithms that operate on data implicitly mapped into a high-dimensional feature space via a kernel function, without computing coordinates in that space. The kernel trick replaces inner products with kernel evaluations, enabling linear algorithms to learn non-linear relationships. They underpin support vector machines, Gaussian processes and kernel ridge regression.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:gaussian-process", "label": "Gaussian Process"},
      {"@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Kernel methods use the kernel trick to learn non-linear patterns in an implicit feature space; the covariance function of a [[Gaussian Process]] is a kernel, and kernels also describe correlations in a [[Stochastic Process]].
- ### Content
  - A valid kernel corresponds to a positive semi-definite Gram matrix, guaranteeing a well-posed optimisation. Common choices include the radial basis function, polynomial and Matérn kernels. Kernel methods offer strong theoretical guarantees and interpretability but scale poorly to very large datasets without approximation techniques such as random features or inducing points.
