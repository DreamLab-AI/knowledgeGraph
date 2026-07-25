public:: true

# Universal Approximation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:universal-approximation",
  "@type": "Page",
  "title": "Universal Approximation",
  "vc:slug": "universal-approximation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:universal-approximation",
  "@type": "Class",
  "label": "Universal Approximation",
  "definition": "Universal approximation refers to the theoretical property, formalised in the universal approximation theorem, that a feedforward neural network with at least one hidden layer of sufficient width and a suitable non-linear activation function can approximate any continuous function on a compact domain to arbitrary precision. It provides the mathematical justification for using neural networks as general-purpose function approximators. The property depends on the activation function being non-polynomial and does not by itself guarantee that such a network can be learned efficiently from data.",
  "domain": "machine-learning",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:neural-network",
      "label": "Neural Network"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Universal approximation refers to the theoretical property, formalised in the universal approximation theorem, that a feedforward neural network with at least one hidden layer of sufficient width and a suitable non-linear activation function can approximate any continuous function on a compact domain to arbitrary precision. It provides the mathematical justification for using neural networks as general-purpose function approximators. The property depends on the activation function being non-polynomial and does not by itself guarantee that such a network can be learned efficiently from data.
	- It is a [[Neural Network]] concept.
- ### Relationships
	- subClassOf:: [[Neural Network]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
