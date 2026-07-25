public:: true

# Transform Matrix

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:transform-matrix",
  "@type": "Page",
  "title": "Transform Matrix",
  "vc:slug": "transform-matrix",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transform-matrix",
  "@type": "Class",
  "label": "Transform Matrix",
  "definition": "A transform matrix is a matrix, typically 4x4 in homogeneous coordinates for 3D graphics, that encodes a composed translation, rotation and scale applied to geometry. Graphics pipelines multiply vertex positions by a chain of transform matrices to move objects from local model space through world, view and projection spaces to screen coordinates. Scene graphs attach a transform matrix to each node so that hierarchical transformations propagate correctly from parent nodes to their children.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:linear-algebra",
      "label": "Linear Algebra"
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
	- A transform matrix is a matrix, typically 4x4 in homogeneous coordinates for 3D graphics, that encodes a composed translation, rotation and scale applied to geometry. Graphics pipelines multiply vertex positions by a chain of transform matrices to move objects from local model space through world, view and projection spaces to screen coordinates. Scene graphs attach a transform matrix to each node so that hierarchical transformations propagate correctly from parent nodes to their children.
	- It is a [[Linear Algebra]] concept.
- ### Relationships
	- subClassOf:: [[Linear Algebra]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
