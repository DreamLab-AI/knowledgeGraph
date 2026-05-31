public:: true

# DiLoCo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:di-lo-co",
  "@type": "Page",
  "vc:slug": "di-lo-co",
  "title": "DiLoCo",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:di-lo-co",
  "@type": "Class",
  "label": "DiLoCo",
  "definition": "DiLoCo (Distributed Low-Communication training) is a method for training large language models across loosely connected, geographically distributed compute clusters with minimal inter-node communication. Workers perform many local optimisation steps before periodically synchronising via an outer optimiser, drastically reducing the bandwidth and latency demands of conventional data-parallel training. It enables collaborative model training over the public internet rather than within a single tightly coupled datacentre.",
  "domain": "ai",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:prime-intellect", "label": "Prime Intellect"},
      {"@id": "urn:ngm:class:distributed-ai-training", "label": "Distributed AI Training"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - DiLoCo trains LLMs across distributed clusters using many local steps between rare global synchronisations, cutting communication by orders of magnitude. It is implemented in decentralised-training efforts such as [[Prime Intellect]].
- ### Content
  - Each worker runs an inner AdamW loop locally; periodically the accumulated pseudo-gradients are aggregated by an outer optimiser (e.g. Nesterov momentum) and broadcast back. This tolerates heterogeneous, unreliable nodes and high latency, making large-scale training feasible over commodity internet links at the cost of some convergence efficiency.
