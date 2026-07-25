public:: true

# Free-Viewpoint Video

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:free-viewpoint-video", "@type":"Page", "title":"Free-Viewpoint Video", "vc:slug":"free-viewpoint-video", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:free-viewpoint-video",
  "@type":"Class",
  "label":"Free-Viewpoint Video",
  "definition":"Free-viewpoint video is video content that lets a viewer choose an arbitrary virtual camera position and angle at playback time, rather than being locked to the camera positions used during capture. It is typically produced from volumetric video captured by a multi-camera rig, using novel view synthesis techniques to interpolate or render views that were never directly recorded. It enables immersive playback experiences such as walking around a captured scene in virtual reality.",
  "domain":"spatial-computing",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:volumetric-video","label":"Volumetric Video"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:novel-view-synthesis","label":"Novel View Synthesis"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Free-Viewpoint Video]] Free-viewpoint video is video content that lets a viewer choose an arbitrary virtual camera position and angle at playback time, rather than being locked to the camera positions used during capture. It is typically produced from volumetric video captured by a multi-camera rig, using novel view synthesis techniques to interpolate or render views that were never directly recorded. It enables immersive playback experiences such as walking around a captured scene in virtual reality.
- ### Relationships
	- subClassOf:: [[Volumetric Video]]
	- requires:: [[Novel View Synthesis]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
