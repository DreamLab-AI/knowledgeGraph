public:: true

# Design Thinking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:design-thinking",
  "@type": "Page",
  "vc:slug": "design-thinking",
  "title": "Design Thinking",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:design-thinking",
  "@type": "Class",
  "label": "Design Thinking",
  "definition": "Design Thinking is a human-centred, iterative problem-solving methodology that prioritises deep empathy with end users, rapid ideation, and prototype-driven experimentation to arrive at innovative solutions. Originating in industrial design and formalised at Stanford's d.school, it proceeds through five non-linear phases: empathise, define, ideate, prototype, and test. The approach deliberately suspends assumptions and defers judgement during divergent thinking stages, producing a rich solution space before converging on testable prototypes. Design Thinking is now applied widely in product development, service design, organisational strategy, and technology innovation contexts.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:user-research", "label": "User Research"},
      {"@id": "urn:ngm:class:collaborative-design", "label": "Collaborative Design"},
      {"@id": "urn:ngm:class:design-software", "label": "Design Software"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:product-design", "label": "Product Design"},
      {"@id": "urn:ngm:class:user-experience", "label": "User Experience"},
      {"@id": "urn:ngm:class:generative-design-tool", "label": "Generative Design Tool"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"},
      {"@id": "urn:ngm:class:information-architecture", "label": "Information Architecture"},
      {"@id": "urn:ngm:class:accessible-design", "label": "Accessible Design"},
      {"@id": "urn:ngm:class:etsi-domain-human-interface-ux", "label": "ETSI_Domain_Human_Interface___UX"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Design Thinking is a human-centred iterative methodology that applies empathetic [[User Research]] and rapid prototyping to generate innovative solutions, shaping both [[Product Design]] processes and broader [[User Experience]] strategy.
- ### Relationships
  - Design Thinking relies on [[User Research]] and interviews to build empathy maps, informing a problem definition stage that anchors subsequent ideation. [[Collaborative Design]] workshops—often called design sprints—generate diverse ideas that are quickly translated into low-fidelity prototypes using [[Design Software]]. Tested insights feed back into the definition stage, making the process genuinely iterative. Outputs influence [[Information Architecture]], [[Accessible Design]] decisions, and [[Human Computer Interaction]] guidelines. The [[ETSI_Domain_Human_Interface___UX]] standards domain formalises many of these practices for regulated sectors.
- ### Content
  - Design Thinking emerged as a challenge to purely analytical problem-solving. Where traditional engineering processes begin with requirements and proceed linearly to delivery, Design Thinking front-loads understanding of human needs. Ethnographic observation, contextual inquiry, and empathy interviews are used to surface latent needs that users cannot always articulate directly.

  - The ideation phase uses brainstorming, card sorting, and analogical reasoning to generate a large volume of candidate solutions. Quantity is prioritised over quality at this stage; teams deliberately avoid early judgement to prevent anchoring bias. Only after a broad solution space has been explored does convergence occur through prioritisation techniques such as dot voting and impact–effort matrices.

  - Prototyping translates selected ideas into tangible, testable artefacts as quickly and cheaply as possible—paper sketches, clickable wireframes, or physical mock-ups. [[Design Software]] tools such as Figma and Sketch accelerate this stage. The goal is to expose assumptions to real users early, when changes are inexpensive, rather than discovering fundamental flaws after full development.

  - Design Thinking scales beyond product teams. Service designers apply it to reshape customer journeys across touchpoints. Policy designers use it to co-create regulatory frameworks with affected communities. In AI system development, it surfaces ethical concerns and usability barriers that purely technical approaches miss, aligning closely with [[Human Computer Interaction]] research traditions and [[Accessible Design]] imperatives.
