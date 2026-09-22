public:: true

# Gradient

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:gradient",
  "@type": "Page",
  "title": "Gradient",
  "vc:slug": "gradient",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gradient",
  "@type": "Class",
  "label": "Gradient",
  "definition": "A gradient is the vector of partial derivatives of a scalar-valued function with respect to each of its input variables, pointing in the direction of steepest ascent at a given point. In machine learning it is the quantity computed by backpropagation and consumed by optimisers to update model parameters. Its magnitude and direction drive first-order optimisation methods such as gradient descent and its momentum-based variants.",
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
	- A gradient is the vector of partial derivatives of a scalar-valued function with respect to each of its input variables, pointing in the direction of steepest ascent at a given point. In machine learning it is the quantity computed by backpropagation and consumed by optimisers to update model parameters. Its magnitude and direction drive first-order optimisation methods such as gradient descent and its momentum-based variants.
	- It is a [[Calculus]] concept.
- ### Relationships
	- subClassOf:: [[Calculus]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
