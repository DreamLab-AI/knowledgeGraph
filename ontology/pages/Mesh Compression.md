public:: true

# Mesh Compression

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:mesh-compression",
  "@type": "Page",
  "title": "Mesh Compression",
  "vc:slug": "mesh-compression",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mesh-compression",
  "@type": "Class",
  "label": "Mesh Compression",
  "definition": "Mesh compression is a family of techniques for reducing the storage and transmission size of 3D polygon mesh data, encoding vertex positions, normals, texture coordinates and connectivity more compactly than a naive array representation. Methods range from quantisation and delta encoding of vertex attributes to connectivity-aware schemes such as edgebreaker and Draco. It is a prerequisite for efficient streaming and exchange of 3D assets across networks and constrained devices.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-compression",
      "label": "Data Compression"
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
	- Mesh compression is a family of techniques for reducing the storage and transmission size of 3D polygon mesh data, encoding vertex positions, normals, texture coordinates and connectivity more compactly than a naive array representation. Methods range from quantisation and delta encoding of vertex attributes to connectivity-aware schemes such as edgebreaker and Draco. It is a prerequisite for efficient streaming and exchange of 3D assets across networks and constrained devices.
	- It is a [[Data Compression]] concept.
- ### Relationships
	- subClassOf:: [[Data Compression]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
