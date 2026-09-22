public:: true

# Weight Update

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:weight-update", "@type":"Page", "title":"Weight Update", "vc:slug":"weight-update", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:weight-update",
  "@type":"Class",
  "label":"Weight Update",
  "definition":"A weight update is the adjustment applied to a neural network's parameters after each training step, computed by scaling the gradient produced by backpropagation by a learning rate and subtracting it from the current weights. Successive weight updates across many epochs move the network toward a configuration that minimises the training loss. The update rule — plain gradient descent, momentum, or an adaptive optimiser such as Adam — determines convergence speed and stability.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"}]
  },
  "sameAs":[],
  "quality":0.6,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A weight update is the adjustment applied to a neural network's parameters after each training step, computed by scaling the gradient produced by backpropagation by a learning rate and subtracting it from the current weights. Successive weight updates across many epochs move the network toward a configuration that minimises the training loss. The update rule — plain gradient descent, momentum, or an adaptive optimiser such as Adam — determines convergence speed and stability.
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
