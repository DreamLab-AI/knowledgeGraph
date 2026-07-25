public:: true

# Ergonomics
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ergonomics", "@type":"Page", "title":"Ergonomics", "vc:slug":"ergonomics", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:ergonomics",
  "@type":"Class",
  "label":"Ergonomics",
  "definition":"Ergonomics, also called human factors engineering, is the discipline of designing systems, tools and environments to fit the physical and cognitive characteristics of the people who use them. It studies posture, reach, force, repetition, perception and workload in order to optimise human performance, comfort and safety while reducing fatigue and injury. In robotics and automation it governs the design of workstations, controls and collaborative robots so that machines and humans can operate together efficiently and without harm.",
  "domain":"robotics",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:human-factors","label":"Human Factors"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:cognitive-load","label":"Cognitive Load"},
      {"@id":"urn:ngm:class:usability","label":"Usability"}
    ],
    "partOf":[{"@id":"urn:ngm:class:human-computer-interaction","label":"Human-Computer Interaction"}],
    "supports":[
      {"@id":"urn:ngm:class:accessibility","label":"Accessibility"},
      {"@id":"urn:ngm:class:user-experience","label":"User Experience"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:exoskeleton","label":"Exoskeleton"},
      {"@id":"urn:ngm:class:usability","label":"Usability"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:user-centred-design","label":"User-Centred Design"},
      {"@id":"urn:ngm:class:perception","label":"Perception"}
    ],
    "requires":[{"@id":"urn:ngm:class:human-factors","label":"Human Factors"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:robotics","label":"Robotics"},
      {"@id":"urn:ngm:class:affordance","label":"Affordance"},
      {"@id":"urn:ngm:class:interaction-design","label":"Interaction Design"},
      {"@id":"urn:ngm:class:user-interface","label":"User Interface"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Ergonomics is the science of fitting work, tools and environments to people. As a specialisation of [[Human Factors]], it spans physical comfort and safety as well as the [[Cognitive Load]] imposed by a task, and it informs both [[Interaction Design]] and the design of [[Robotics]] workcells.
- ### Overview
- Ergonomics balances three concerns: physical ergonomics (posture, reach, force, repetition), cognitive ergonomics (attention, memory, decision load) and organisational ergonomics (work systems and processes). The aim is to optimise human well-being and overall system performance simultaneously.
- In robotics and automation, ergonomics drives the layout of collaborative cells, the placement of controls and emergency stops, and the design of assistive devices such as the [[Exoskeleton]] that augment human strength and endurance while protecting against injury.
- ### Key aspects
- Anthropometry: matching equipment dimensions to the range of human body sizes.
- Biomechanics: managing force, load and repetition to prevent musculoskeletal disorders.
- Cognitive ergonomics: limiting mental workload and error-proneness.
- Environmental factors: lighting, noise, vibration and thermal comfort.
- Safety integration with collaborative robots and shared workspaces.
- ### Applications
- Designing safe, comfortable human-robot collaborative workstations.
- Specifying [[Exoskeleton]] and assistive devices for industrial tasks.
- Improving [[Usability]] and [[Accessibility]] of physical and digital controls.
- Informing [[User-Centred Design]] of [[User Interface]] hardware.
- ### Relationships
- hasPart:: [[Cognitive Load]]
- hasPart:: [[Usability]]
- partOf:: [[Human-Computer Interaction]]
- supports:: [[Accessibility]]
- supports:: [[User Experience]]
- enables:: [[Exoskeleton]]
- enables:: [[Usability]]
- uses:: [[User-Centred Design]]
- uses:: [[Perception]]
- requires:: [[Human Factors]]
- relatedTo:: [[Robotics]]
- relatedTo:: [[Affordance]]
- relatedTo:: [[Interaction Design]]
- relatedTo:: [[User Interface]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
