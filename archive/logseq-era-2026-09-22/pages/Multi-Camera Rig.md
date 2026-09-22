public:: true

# Multi-Camera Rig

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:multi-camera-rig", "@type":"Page", "title":"Multi-Camera Rig", "vc:slug":"multi-camera-rig", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:multi-camera-rig",
  "@type":"Class",
  "label":"Multi-Camera Rig",
  "definition":"A multi-camera rig is a physical arrangement of multiple synchronised cameras positioned around a subject or scene to capture it from many viewpoints simultaneously. It is the primary capture hardware for volumetric capture and volumetric video pipelines, where images from all cameras at a given instant are fused into a single 3D or free-viewpoint representation. Camera count, placement and synchronisation precision directly determine the achievable reconstruction quality.",
  "domain":"spatial-computing",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:volumetric-capture","label":"Volumetric Capture"}],
  "relations":{
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Multi-Camera Rig]] A multi-camera rig is a physical arrangement of multiple synchronised cameras positioned around a subject or scene to capture it from many viewpoints simultaneously. It is the primary capture hardware for volumetric capture and volumetric video pipelines, where images from all cameras at a given instant are fused into a single 3D or free-viewpoint representation. Camera count, placement and synchronisation precision directly determine the achievable reconstruction quality.
- ### Relationships
	- subClassOf:: [[Volumetric Capture]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
