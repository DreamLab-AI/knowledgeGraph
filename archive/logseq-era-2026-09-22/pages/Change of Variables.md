public:: true

# Change of Variables

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:change-of-variables",
  "@type": "Page",
  "title": "Change of Variables",
  "vc:slug": "change-of-variables",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:change-of-variables",
  "@type": "Class",
  "label": "Change of Variables",
  "definition": "Change of variables is a technique for re-expressing an integral or a probability density in terms of a new set of variables related to the original ones by a differentiable, invertible transformation, with the Jacobian determinant of that transformation accounting for the resulting change in volume. Normalising flows apply this principle directly, composing a sequence of invertible transformations and tracking the accumulated Jacobian determinant to convert a simple base density into a complex target density while keeping the density exactly computable. It is a standard tool wherever a probability distribution must be transported through a differentiable map.",
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
	- Change of variables is a technique for re-expressing an integral or a probability density in terms of a new set of variables related to the original ones by a differentiable, invertible transformation, with the Jacobian determinant of that transformation accounting for the resulting change in volume. Normalising flows apply this principle directly, composing a sequence of invertible transformations and tracking the accumulated Jacobian determinant to convert a simple base density into a complex target density while keeping the density exactly computable. It is a standard tool wherever a probability distribution must be transported through a differentiable map.
	- It is a [[Calculus]] concept.
- ### Relationships
	- subClassOf:: [[Calculus]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
