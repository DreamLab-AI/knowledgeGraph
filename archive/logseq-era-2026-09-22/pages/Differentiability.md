public:: true

# Differentiability

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:differentiability", "@type":"Page", "title":"Differentiability", "vc:slug":"differentiability", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:differentiability",
  "@type":"Class",
  "label":"Differentiability",
  "definition":"Differentiability is the mathematical property of a function having a well-defined derivative at every point in its domain, allowing gradients to be computed via calculus. In machine learning it is a prerequisite for gradient-based optimisation: activation and cost functions must be differentiable, or approximately so, for backpropagation to compute parameter updates. Non-differentiable operations require relaxations, subgradients, or surrogate approximations to remain trainable.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:calculus","label":"Calculus"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Differentiability is the mathematical property of a function having a well-defined derivative at every point in its domain, allowing gradients to be computed via calculus. In machine learning it is a prerequisite for gradient-based optimisation: activation and cost functions must be differentiable, or approximately so, for backpropagation to compute parameter updates. Non-differentiable operations require relaxations, subgradients, or surrogate approximations to remain trainable.
- ### Relationships
	- subClassOf:: [[Calculus]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
