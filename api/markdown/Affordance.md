public:: true

# Affordance
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:affordance", "@type":"Page", "title":"Affordance", "vc:slug":"affordance", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:affordance",
  "@type":"Class",
  "label":"Affordance",
  "definition":"An affordance is a property of an object or environment that signals the actions it makes possible to a perceiving agent, mediating the relationship between the agent's capabilities and the world. Originating in ecological psychology, the concept was adapted to design to describe how the perceptible features of an interface or physical artefact suggest how it can be used. In spatial and interactive computing, affordances guide users towards available actions, and perceived affordances are deliberately engineered so that controls and gestures feel discoverable and natural.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:interaction-design","label":"Interaction Design"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:perception","label":"Perception"},
      {"@id":"urn:ngm:class:usability","label":"Usability"}
    ],
    "partOf":[{"@id":"urn:ngm:class:human-computer-interaction","label":"Human-Computer Interaction"}],
    "enables":[
      {"@id":"urn:ngm:class:user-experience","label":"User Experience"},
      {"@id":"urn:ngm:class:gesture-recognition","label":"Gesture Recognition"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:accessibility","label":"Accessibility"},
      {"@id":"urn:ngm:class:user-interface","label":"User Interface"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:perception","label":"Perception"},
      {"@id":"urn:ngm:class:scene-understanding","label":"Scene Understanding"}
    ],
    "uses":[{"@id":"urn:ngm:class:user-centred-design","label":"User-Centred Design"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:augmented-reality","label":"Augmented Reality"},
      {"@id":"urn:ngm:class:virtual-reality","label":"Virtual Reality"},
      {"@id":"urn:ngm:class:ergonomics","label":"Ergonomics"},
      {"@id":"urn:ngm:class:cognitive-load","label":"Cognitive Load"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- An affordance is the relationship between an agent and an artefact whereby the artefact's features signal what actions are possible. It is central to [[Interaction Design]] and [[Human-Computer Interaction]], shaping how [[User Interface]] elements communicate their use and how [[Perception]] drives action.
- ### Overview
- The term was coined in ecological psychology to describe action possibilities an environment offers an organism, then adapted to design to distinguish real affordances from perceived affordances: a control may physically permit an action, but only a perceived affordance makes that action discoverable.
- In spatial computing the concept becomes especially important, because [[Augmented Reality]] and [[Virtual Reality]] interfaces lack the inherited conventions of flat screens and must build perceptible cues for grabbing, pushing or pointing into the design itself.
- ### Key aspects
- Real versus perceived affordances and the role of signifiers.
- The match between an artefact's features and an agent's capabilities.
- Discoverability: making available actions visible without instruction.
- Constraints that complement affordances by ruling out invalid actions.
- Feedback loops that confirm an affordance was acted upon successfully.
- ### Applications
- Designing grab, point and gesture interactions in [[Augmented Reality]] and [[Virtual Reality]].
- Improving [[Usability]] and [[User Experience]] through self-evident controls.
- Supporting [[Accessibility]] by offering multiple perceptible cues per action.
- Informing [[Gesture Recognition]] vocabularies that feel natural to learn.
- ### Relationships
- hasPart:: [[Perception]]
- hasPart:: [[Usability]]
- partOf:: [[Human-Computer Interaction]]
- enables:: [[User Experience]]
- enables:: [[Gesture Recognition]]
- supports:: [[Accessibility]]
- supports:: [[User Interface]]
- dependsOn:: [[Perception]]
- dependsOn:: [[Scene Understanding]]
- uses:: [[User-Centred Design]]
- relatedTo:: [[Augmented Reality]]
- relatedTo:: [[Virtual Reality]]
- relatedTo:: [[Ergonomics]]
- relatedTo:: [[Cognitive Load]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
