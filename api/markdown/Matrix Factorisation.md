public:: true

# Matrix Factorisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:matrix-factorisation",
  "@type": "Page",
  "vc:slug": "matrix-factorisation",
  "title": "Matrix Factorisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:matrix-factorisation",
  "@type": "Class",
  "label": "Matrix Factorisation",
  "definition": "Matrix factorisation is a family of techniques that decompose a matrix into a product of lower-dimensional factor matrices, revealing latent structure in the data. In machine learning it is widely used for collaborative-filtering recommendation, where a sparse user-item rating matrix is approximated by user and item embedding factors. Variants include singular value decomposition, non-negative matrix factorisation, and low-rank adaptation methods.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:lo-ra-do-ra-etc", "label": "LoRA, DoRA, etc"}, {"@id": "urn:ngm:class:hyper-personalisation", "label": "Hyper-Personalisation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Matrix factorisation decomposes a matrix into lower-rank factors to expose latent structure. The low-rank principle underlies parameter-efficient methods like [[LoRA, DoRA, etc]] and powers the embeddings behind [[Hyper-Personalisation]].
- ### Content
  - In recommendation, learned user and item vectors reconstruct observed interactions and predict missing ones, with regularisation and bias terms improving accuracy. The same low-rank idea reappears in model compression and adapter-based fine-tuning, where weight updates are constrained to a small factorised subspace.
