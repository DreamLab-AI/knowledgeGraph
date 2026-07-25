public:: true

# Differentiable Function

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:differentiable-function",
  "@type": "Page",
  "title": "Differentiable Function",
  "vc:slug": "differentiable-function",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:differentiable-function",
  "@type": "Class",
  "label": "Differentiable Function",
  "definition": "A differentiable function is one that has a well-defined derivative at every point in its domain, meaning it can be locally approximated by a linear map. Neural network components must be differentiable, or approximated by a differentiable surrogate, for gradient-based optimisation to compute usable error signals. Automatic differentiation and backpropagation both depend on the composed network being a differentiable function of its parameters.",
  "domain": "machine-learning",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:calculus",
      "label": "Calculus"
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
	- A differentiable function is one that has a well-defined derivative at every point in its domain, meaning it can be locally approximated by a linear map. Neural network components must be differentiable, or approximated by a differentiable surrogate, for gradient-based optimisation to compute usable error signals. Automatic differentiation and backpropagation both depend on the composed network being a differentiable function of its parameters.
	- It is a [[Calculus]] concept.
- ### Relationships
	- subClassOf:: [[Calculus]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
