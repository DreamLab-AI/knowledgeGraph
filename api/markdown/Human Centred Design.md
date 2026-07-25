public:: true

# Human Centred Design

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:human-centred-design", "@type":"Page", "title":"Human Centred Design", "vc:slug":"human-centred-design", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:human-centred-design",
  "@type":"Class",
  "label":"Human Centred Design",
  "definition":"Human centred design is a problem-solving approach that places the needs, capabilities and behaviours of people at the centre of the design process, iteratively shaping products and systems around real user contexts. It draws on empirical understanding of users and tasks, involves stakeholders throughout development, and refines solutions through repeated evaluation. The practice underpins usable, accessible and inclusive interactive systems across digital and physical domains.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:human-computer-interaction","label":"Human Computer Interaction"}],
  "relations":{
    "implements":[{"@id":"urn:ngm:class:design-thinking","label":"Design Thinking"},{"@id":"urn:ngm:class:user-centered-design","label":"User Centered Design"}],
    "uses":[{"@id":"urn:ngm:class:user-experience-design","label":"User Experience Design"}],
    "hasPart":[{"@id":"urn:ngm:class:usability","label":"Usability"},{"@id":"urn:ngm:class:interaction-design","label":"Interaction Design"}],
    "enables":[{"@id":"urn:ngm:class:accessibility","label":"Accessibility"},{"@id":"urn:ngm:class:user-experience","label":"User Experience"}],
    "supports":[{"@id":"urn:ngm:class:inclusive-design","label":"Inclusive Design"}],
    "requires":[{"@id":"urn:ngm:class:human-computer-interaction","label":"Human Computer Interaction"}],
    "partOf":[{"@id":"urn:ngm:class:user-experience-design","label":"User Experience Design"}],
    "contrastsWith":[{"@id":"urn:ngm:class:universal-design","label":"Universal Design"}],
    "bridgesTo":[{"@id":"urn:ngm:class:ergonomics","label":"Ergonomics"}],
    "relatedTo":[{"@id":"urn:ngm:class:user-interface-design","label":"User Interface Design"},{"@id":"urn:ngm:class:prototyping","label":"Prototyping"},{"@id":"urn:ngm:class:accessibility-standards","label":"Accessibility Standards"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Human Centred Design]] is a design philosophy and process that grounds every decision in the needs, goals and constraints of the people who will use a system.
	- It is a specialised expression of [[User Centered Design]] that emphasises empathy, participation and iterative validation.
	- Closely allied to [[Design Thinking]], [[User Experience Design]] and [[Human Computer Interaction]].
- ### Overview
	- The approach originates in ergonomics and cognitive psychology and is codified internationally in design-process standards such as ISO 9241-210.
	- Rather than starting from technology or organisational convenience, human centred design begins with explicit study of users, their tasks and the environments in which work happens.
	- Solutions are produced as candidate designs, evaluated against user requirements, and revised across multiple cycles until they satisfy measurable usability and accessibility criteria.
	- The methodology is deliberately interdisciplinary, blending research, visual and interaction craft, and engineering feasibility.
- ### Key aspects
	- Explicit understanding of users, tasks and contexts of use through field research and contextual enquiry.
	- Active involvement of users and stakeholders throughout specification, design and evaluation.
	- Allocation of functions between people and technology informed by human capabilities and limitations.
	- Iteration of design solutions driven by user-centred evaluation.
	- A holistic concern for the whole user experience, not isolated interface elements.
	- Multidisciplinary teams combining research, design, accessibility and engineering perspectives.
- ### Mechanisms
	- Contextual enquiry, interviews and observation to capture genuine user needs.
	- Persona and scenario construction to keep teams aligned on whom they design for.
	- Low- and high-fidelity prototyping to test concepts cheaply before commitment.
	- Usability testing and accessibility audits to surface defects against real tasks.
	- Continuous feedback loops that fold evaluation findings back into design.
- ### Applications
	- Consumer software and mobile application interfaces.
	- Public-sector and government digital services where inclusivity is mandated.
	- Medical devices, vehicle cockpits and other safety-critical interfaces.
	- Spatial and immersive systems where embodied interaction must match human perception.
	- Enterprise tooling where adoption depends on fit to actual work practice.
- ### Relationships
	- subClassOf:: [[Human Computer Interaction]]
	- implements:: [[Design Thinking]]
	- implements:: [[User Centered Design]]
	- uses:: [[User Experience Design]]
	- hasPart:: [[Usability]]
	- hasPart:: [[Interaction Design]]
	- enables:: [[Accessibility]]
	- enables:: [[User Experience]]
	- supports:: [[Inclusive Design]]
	- requires:: [[Human Computer Interaction]]
	- partOf:: [[User Experience Design]]
	- contrastsWith:: [[Universal Design]]
	- bridgesTo:: [[Ergonomics]]
	- relatedTo:: [[User Interface Design]]
	- relatedTo:: [[Prototyping]]
	- relatedTo:: [[Accessibility Standards]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
