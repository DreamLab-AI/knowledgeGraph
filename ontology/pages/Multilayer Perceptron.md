public:: true

# Multilayer Perceptron

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:multilayer-perceptron", "@type": "Page", "title": "Multilayer Perceptron", "vc:slug": "multilayer-perceptron", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multilayer-perceptron",
  "@type": "Class",
  "label": "Multilayer Perceptron",
  "definition": "A multilayer perceptron (MLP) is a feedforward neural network composed of an input layer, one or more hidden layers of fully connected neurons with nonlinear activations, and an output layer, trained by backpropagation. It is a canonical universal function approximator underlying deeper architectures, and is frequently used as a lightweight decoder or coordinate-based function in implicit neural representations. NeRF and related implicit neural representation methods use an MLP to map spatial coordinates directly to colour and density values.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:neural-network",
      "label": "Neural Network"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [],
    "enables": [
      {
        "@id": "urn:ngm:class:implicit-neural-representation",
        "label": "Implicit Neural Representation"
      },
      {
        "@id": "urn:ngm:class:ne-rf",
        "label": "NeRF"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- A multilayer perceptron (MLP) is a feedforward neural network composed of an input layer, one or more hidden layers of fully connected neurons with nonlinear activations, and an output layer, trained by backpropagation. It is a canonical universal function approximator underlying deeper architectures, and is frequently used as a lightweight decoder or coordinate-based function in implicit neural representations. NeRF and related implicit neural representation methods use an MLP to map spatial coordinates directly to colour and density values.
- ### Relationships
	- enables:: [[Implicit Neural Representation]]
	- enables:: [[NeRF]]
	- partOf:: [[Neural Network]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
