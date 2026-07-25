public:: true

# Embodied Cognition
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:embodied-cognition", "@type":"Page", "title":"Embodied Cognition", "vc:slug":"embodied-cognition", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:embodied-cognition",
  "@type":"Class",
  "label":"Embodied Cognition",
  "definition":"Embodied cognition is the theory that cognitive processes are deeply shaped by the body's sensorimotor systems and its interaction with the physical environment, rather than residing solely in abstract symbol manipulation in the brain. It holds that perception, action, and the body's morphology constrain and constitute thought, so understanding concepts is grounded in bodily experience. The view informs human-computer interaction and immersive design, where natural movement and spatial presence improve learning and comprehension. It contrasts with classical computationalism that treats the mind as disembodied information processing.",
  "domain":"spatial-computing",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:human-computer-interaction","label":"Human-Computer Interaction"}],
  "relations":{
    "relatedTo":[
      {"@id":"urn:ngm:class:perception","label":"Perception"},
      {"@id":"urn:ngm:class:presence","label":"Presence"},
      {"@id":"urn:ngm:class:interaction-design","label":"Interaction Design"},
      {"@id":"urn:ngm:class:human-computer-interaction","label":"Human-Computer Interaction"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:immersive-learning","label":"Immersive Learning"},
      {"@id":"urn:ngm:class:virtual-reality","label":"Virtual Reality"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:immersive-learning","label":"Immersive Learning"},
      {"@id":"urn:ngm:class:presence","label":"Presence"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:perception","label":"Perception"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:artificial-intelligence","label":"Artificial Intelligence"}
    ],
    "informs":[
      {"@id":"urn:ngm:class:avatar","label":"Avatar"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Embodied cognition holds that thought is grounded in the body's sensorimotor interaction with the world, not in disembodied symbol manipulation. It shapes [[Human-Computer Interaction]] and immersive design, where [[Perception]], movement, and [[Presence]] drive comprehension.
- ### Overview
- The theory reframes the mind as inseparable from the body and environment, so concepts are understood through simulated or actual bodily experience.
- It has strong implications for immersive media: natural gestures and spatial movement engage the same systems that underpin everyday cognition.
- It challenges purely computational accounts of intelligence by foregrounding morphology and action.
- ### Key aspects
- Sensorimotor grounding of abstract concepts.
- Action-perception coupling as a basis for understanding.
- Environmental scaffolding of memory and reasoning.
- ### Applications
- Designing [[Immersive Learning]] that uses movement to deepen retention.
- Natural-interaction design in [[Virtual Reality]] and [[Spatial Computing]].
- Embodied [[Avatar]] interfaces that map body to action.
- ### Relationships
- relatedTo:: [[Perception]]
- relatedTo:: [[Presence]]
- relatedTo:: [[Interaction Design]]
- relatedTo:: [[Human-Computer Interaction]]
- bridgesTo:: [[Immersive Learning]]
- bridgesTo:: [[Virtual Reality]]
- enables:: [[Immersive Learning]]
- enables:: [[Presence]]
- supports:: [[Spatial Computing]]
- uses:: [[Perception]]
- contrastsWith:: [[Artificial Intelligence]]
- informs:: [[Avatar]]
- ### Provenance
- updated:: 2026-06-15
