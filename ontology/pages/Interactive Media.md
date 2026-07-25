public:: true

# Interactive Media
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:interactive-media", "@type":"Page", "title":"Interactive Media", "vc:slug":"interactive-media", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:interactive-media",
  "@type":"Class",
  "label":"Interactive Media",
  "definition":"Interactive media refers to digital content and systems that respond dynamically to user input, allowing audiences to influence, navigate, or co-create the experience rather than consume it passively. It spans video games, interactive narratives, simulations, web applications, kiosks, and immersive virtual and augmented reality experiences. Unlike linear media, interactive media couples presentation with real-time feedback loops, making user agency, interface design, and responsiveness central to its form.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:digital-content-creation","label":"Digital Content Creation"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:digital-content-creation","label":"Digital Content Creation"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:user-interface","label":"User Interface"},
      {"@id":"urn:ngm:class:animation","label":"Animation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:game-engine","label":"Game Engine"},
      {"@id":"urn:ngm:class:user-interface","label":"User Interface"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:user-experience","label":"User Experience"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:immersive-experience","label":"Immersive Experience"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:virtual-reality","label":"Virtual Reality"},
      {"@id":"urn:ngm:class:augmented-reality","label":"Augmented Reality"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:digital-art","label":"Digital Art"},
      {"@id":"urn:ngm:class:animation","label":"Animation"},
      {"@id":"urn:ngm:class:user-experience","label":"User Experience"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:metaverse","label":"Metaverse"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Interactive Media]] is [[Digital Content Creation|digital content]] that responds to user input, giving audiences agency over the experience.
	- It binds presentation to real-time feedback through a [[User Interface]] and considered [[User Experience]].
	- It is the foundation of games, simulations, and [[Immersive Experience|immersive experiences]] across [[Virtual Reality]] and [[Augmented Reality]].
- ### Overview
	- Where film, print, and broadcast deliver a fixed sequence, interactive media constructs the experience partly from the participant's choices, gestures, or queries.
	- The defining loop is input, system response, and updated state, repeated fast enough to feel continuous. Latency, affordances, and feedback clarity therefore shape perceived quality as much as visual fidelity.
	- Forms range from branching web narratives and data dashboards to fully simulated 3D worlds rendered by a game engine.
	- Spatial computing extends interactive media into the user's physical environment, blending rendered content with real-world context.
- ### Key aspects
	- User agency: meaningful choices that change outcomes or navigation.
	- Real-time responsiveness and low-latency feedback.
	- Interface and interaction design as primary authorship surfaces.
	- Multimodal input including pointer, touch, voice, gaze, and motion.
- ### Applications
	- Video games and interactive entertainment built on a [[Game Engine]].
	- Educational simulations and training environments.
	- Interactive [[Digital Art]] installations and exhibits.
	- Immersive marketing and product configurators in [[Augmented Reality]].
	- Social and collaborative experiences within the [[Metaverse]].
- ### Relationships
	- partOf:: [[Digital Content Creation]]
	- hasPart:: [[User Interface]]
	- hasPart:: [[Animation]]
	- uses:: [[Game Engine]]
	- uses:: [[User Interface]]
	- requires:: [[User Experience]]
	- enables:: [[Immersive Experience]]
	- supports:: [[Virtual Reality]]
	- supports:: [[Augmented Reality]]
	- relatedTo:: [[Digital Art]]
	- relatedTo:: [[Animation]]
	- relatedTo:: [[User Experience]]
	- bridgesTo:: [[Metaverse]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
