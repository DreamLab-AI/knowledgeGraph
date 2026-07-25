public:: true

# Real-Time Animation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:real-time-animation", "@type":"Page", "title":"Real-Time Animation", "vc:slug":"real-time-animation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:real-time-animation",
  "@type":"Class",
  "label":"Real-Time Animation",
  "definition":"Real-time animation is the generation or playback of character and object motion at interactive frame rates, computed live rather than pre-rendered, so that the animation can respond immediately to input or simulation state. It relies on techniques such as animation retargeting to map captured or authored motion onto different skeletons on the fly, and on motion capture as a common source of the underlying motion data. It is a core requirement for games, virtual avatars and interactive XR experiences.",
  "domain":"spatial-computing",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:animation","label":"Animation"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:motion-capture","label":"Motion Capture"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Real-Time Animation]] Real-time animation is the generation or playback of character and object motion at interactive frame rates, computed live rather than pre-rendered, so that the animation can respond immediately to input or simulation state. It relies on techniques such as animation retargeting to map captured or authored motion onto different skeletons on the fly, and on motion capture as a common source of the underlying motion data. It is a core requirement for games, virtual avatars and interactive XR experiences.
- ### Relationships
	- subClassOf:: [[Animation]]
	- requires:: [[Motion Capture]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
