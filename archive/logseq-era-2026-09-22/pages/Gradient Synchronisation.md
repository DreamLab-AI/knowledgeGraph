public:: true

# Gradient Synchronisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:gradient-synchronisation", "@type":"Page", "title":"Gradient Synchronisation", "vc:slug":"gradient-synchronisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:gradient-synchronisation",
  "@type":"Class",
  "label":"Gradient Synchronisation",
  "definition":"Gradient Synchronisation is the process of aggregating and distributing gradient updates across multiple workers or devices during distributed training of a neural network, ensuring all replicas converge on a consistent set of model parameters. It typically uses all-reduce or parameter-server communication patterns, and is a major bottleneck in large-scale training due to network bandwidth constraints. Techniques such as gradient compression and asynchronous updates trade off consistency for throughput.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:distributed-training","label":"Distributed Training"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Gradient Synchronisation is the process of aggregating and distributing gradient updates across multiple workers or devices during distributed training of a neural network, ensuring all replicas converge on a consistent set of model parameters. It typically uses all-reduce or parameter-server communication patterns, and is a major bottleneck in large-scale training due to network bandwidth constraints. Techniques such as gradient compression and asynchronous updates trade off consistency for throughput.
- ### Relationships
	- subClassOf:: [[Distributed Training]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
