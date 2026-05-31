public:: true

# Link Prediction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:link-prediction",
  "@type": "Page",
  "vc:slug": "link-prediction",
  "title": "Link Prediction",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:link-prediction",
  "@type": "Class",
  "label": "Link Prediction",
  "definition": "Link prediction is the machine-learning task of inferring missing or future edges in a graph from its observed structure and node attributes. Techniques range from similarity heuristics and matrix factorisation to graph neural networks and knowledge-graph embeddings. It underpins recommendation, knowledge-graph completion, and social-network analysis.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:knowledge-graphing", "label": "Knowledge Graphing"}, {"@id": "urn:ngm:class:graph-analytics", "label": "Graph Analytics"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Link prediction infers missing or future edges in a graph; it enables [[Knowledge Graphing]] completion and is a core capability within [[Graph Analytics]] pipelines.
- ### Content
  - Embedding methods such as TransE and graph neural networks learn latent node representations whose geometry encodes the likelihood of a connection. Evaluation uses ranking metrics like mean reciprocal rank and Hits@k against held-out edges, balancing precision against the sparsity of true links.
