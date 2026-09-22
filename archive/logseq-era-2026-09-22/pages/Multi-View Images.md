public:: true

# Multi-View Images

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:multi-view-images", "@type":"Page", "title":"Multi-View Images", "vc:slug":"multi-view-images", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:multi-view-images",
  "@type":"Class",
  "label":"Multi-View Images",
  "definition":"Multi-View Images are a set of photographs or renders of the same scene or object captured from multiple, known or estimable camera positions, providing the geometric overlap needed to reconstruct three-dimensional structure. They are the primary input to photogrammetry, novel view synthesis, and neural scene representations such as NeRFs and 3D Gaussian splats. Reconstruction accuracy improves with greater viewpoint coverage and more precise camera calibration.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:3-d-reconstruction","label":"3D Reconstruction"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Multi-View Images are a set of photographs or renders of the same scene or object captured from multiple, known or estimable camera positions, providing the geometric overlap needed to reconstruct three-dimensional structure. They are the primary input to photogrammetry, novel view synthesis, and neural scene representations such as NeRFs and 3D Gaussian splats. Reconstruction accuracy improves with greater viewpoint coverage and more precise camera calibration.
- ### Relationships
	- subClassOf:: [[3D Reconstruction]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
