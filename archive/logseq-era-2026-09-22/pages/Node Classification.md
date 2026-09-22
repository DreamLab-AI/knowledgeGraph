public:: true

# Node Classification

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:node-classification", "@type":"Page", "title":"Node Classification", "vc:slug":"node-classification", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:node-classification",
  "@type":"Class",
  "label":"Node Classification",
  "definition":"Node classification is a graph machine learning task that predicts a categorical label for each vertex in a graph, typically using the graph's structure together with node and edge features. It is commonly solved with graph neural networks, which propagate and aggregate neighbourhood information across message-passing layers to produce per-node predictions. Applications include fraud detection, citation-network labelling and social-network role inference.",
  "domain":"machine-learning",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:classification","label":"Classification"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:graph-neural-network","label":"Graph Neural Network"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Node Classification]] Node classification is a graph machine learning task that predicts a categorical label for each vertex in a graph, typically using the graph's structure together with node and edge features. It is commonly solved with graph neural networks, which propagate and aggregate neighbourhood information across message-passing layers to produce per-node predictions. Applications include fraud detection, citation-network labelling and social-network role inference.
- ### Relationships
	- subClassOf:: [[Classification]]
	- requires:: [[Graph Neural Network]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
