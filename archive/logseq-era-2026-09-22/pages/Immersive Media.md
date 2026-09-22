public:: true

# Immersive Media
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:immersive-media", "@type":"Page", "title":"Immersive Media", "vc:slug":"immersive-media", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:immersive-media",
  "@type":"Class",
  "label":"Immersive Media",
  "definition":"Immersive media is content designed to surround and respond to the viewer so they perceive themselves as present within the experience rather than observing it from outside. It spans virtual, augmented and mixed reality, 360-degree and volumetric video, and spatial audio, typically consumed through head-mounted displays or spatial devices. Effective immersive media combines stereoscopic visuals, spatialised sound and low-latency tracking to sustain the sense of presence.",
  "domain":"spatial-computing",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:interactive-media","label":"Interactive Media"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"},
      {"@id":"urn:ngm:class:metaverse","label":"Metaverse"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:immersive-experience","label":"Immersive Experience"},
      {"@id":"urn:ngm:class:presence","label":"Presence"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:virtual-reality","label":"Virtual Reality"},
      {"@id":"urn:ngm:class:augmented-reality","label":"Augmented Reality"},
      {"@id":"urn:ngm:class:spatial-audio","label":"Spatial Audio"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:head-mounted-display","label":"Head Mounted Display"},
      {"@id":"urn:ngm:class:rendering","label":"Rendering"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:mixed-reality","label":"Mixed Reality"},
      {"@id":"urn:ngm:class:content-creation","label":"Content Creation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:spatial-mapping","label":"Spatial Mapping"},
      {"@id":"urn:ngm:class:photogrammetry","label":"Photogrammetry"},
      {"@id":"urn:ngm:class:user-generated-content","label":"User-Generated Content"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Immersive media surrounds and responds to the viewer so they feel present inside the experience.
	- It is a form of [[Interactive Media]] that uses stereoscopic visuals and spatial sound.
	- It is consumed through a [[Head Mounted Display]] or other spatial device.
- ### Overview
	- The category spans virtual, augmented and mixed reality alongside 360 and volumetric video.
	- Spatialised audio and head tracking reinforce the visual sense of being elsewhere.
	- Low end-to-end latency is essential to avoid breaking presence or inducing discomfort.
	- Authoring blends captured footage, real-time graphics and interactive logic.
- ### Key aspects
	- Stereoscopic [[Rendering]] supplies depth cues matched to each eye.
	- [[Spatial Audio]] positions sound sources in three dimensions around the listener.
	- Tracking and [[Spatial Mapping]] anchor virtual content to the user's real movement.
	- Comfort design manages field of view, frame rate and motion to limit fatigue.
- ### Applications
	- Training, simulation and remote collaboration that benefit from a strong sense of [[Presence]].
	- Entertainment and storytelling delivered as an [[Immersive Experience]].
	- Cultural heritage and product visualisation built with [[Photogrammetry]] capture.
	- Social and creative spaces within the [[Metaverse]] driven by [[User-Generated Content]].
- ### Relationships
	- subClassOf:: [[Interactive Media]]
	- partOf:: [[Spatial Computing]]
	- partOf:: [[Metaverse]]
	- enables:: [[Immersive Experience]]
	- enables:: [[Presence]]
	- uses:: [[Virtual Reality]]
	- uses:: [[Augmented Reality]]
	- uses:: [[Spatial Audio]]
	- requires:: [[Head Mounted Display]]
	- requires:: [[Rendering]]
	- supports:: [[Mixed Reality]]
	- supports:: [[Content Creation]]
	- relatedTo:: [[Spatial Mapping]]
	- relatedTo:: [[Photogrammetry]]
	- relatedTo:: [[User-Generated Content]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
