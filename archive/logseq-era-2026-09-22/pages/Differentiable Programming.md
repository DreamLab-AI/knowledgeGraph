public:: true

# Differentiable Programming

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:differentiable-programming", "@type": "Page", "title": "Differentiable Programming", "vc:slug": "differentiable-programming", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:differentiable-programming",
  "@type": "Class",
  "label": "Differentiable Programming",
  "definition": "Differentiable programming is a programming paradigm in which entire programs, not just isolated functions, are constructed so that gradients can be computed automatically through them via automatic differentiation. It treats control flow, loops and composed functions as differentiable building blocks, enabling gradient-based optimisation of arbitrary computational pipelines rather than only fixed neural network layers. It underlies techniques such as normalising flows, where a chain of invertible, differentiable transformations must be optimised end-to-end.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:programming-paradigm",
      "label": "Programming Paradigm"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [
      {
        "@id": "urn:ngm:class:automatic-differentiation",
        "label": "Automatic Differentiation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:normalising-flows",
        "label": "Normalising Flows"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:programming-paradigm",
        "label": "Programming Paradigm"
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
	- Differentiable programming is a programming paradigm in which entire programs, not just isolated functions, are constructed so that gradients can be computed automatically through them via automatic differentiation. It treats control flow, loops and composed functions as differentiable building blocks, enabling gradient-based optimisation of arbitrary computational pipelines rather than only fixed neural network layers. It underlies techniques such as normalising flows, where a chain of invertible, differentiable transformations must be optimised end-to-end.
- ### Relationships
	- requires:: [[Automatic Differentiation]]
	- enables:: [[Normalising Flows]]
	- partOf:: [[Programming Paradigm]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
