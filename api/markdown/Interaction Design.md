public:: true
alias:: InteractionDesign

# Interaction Design
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:interaction-design",
  "@type": "Page",
  "vc:slug": "interaction-design",
  "title": "Interaction Design",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:interaction-design",
  "@type": "Class",
  "label": "Interaction Design",
  "definition": "Interaction design is the practice of defining and shaping the behaviour of interactive systems — how they respond to user inputs, how they communicate state, and how they guide users through tasks — with the goal of creating products that are usable, efficient, and satisfying. It encompasses the design of interaction flows, feedback mechanisms, affordances, timing, and error recovery patterns across digital and physical interfaces. Interaction design is distinguished from graphic or visual design by its focus on dynamic behaviour over time rather than static visual composition, and from software engineering by its concern for the human experience of system use rather than the technical implementation of system function.",
  "domain": "web",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:user-experience", "label": "User Experience"},
      {"@id": "urn:ngm:class:user-interface", "label": "User Interface"},
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"},
      {"@id": "urn:ngm:class:usability-testing", "label": "Usability Testing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:information-architecture", "label": "Information Architecture"},
      {"@id": "urn:ngm:class:feedback-mechanism", "label": "Feedback Mechanism"},
      {"@id": "urn:ngm:class:cognitive-science", "label": "Cognitive Science"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:product-design", "label": "Product Design"},
      {"@id": "urn:ngm:class:accessible-design", "label": "Accessible Design"},
      {"@id": "urn:ngm:class:inclusive-design", "label": "Inclusive Design"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Interaction Design]] is the discipline of designing the dynamic behaviour of interactive systems — defining how [[Feedback Mechanism]] communicates state, how affordances guide user actions, and how task flows are structured — to achieve positive [[User Experience]] outcomes through the application of [[Cognitive Science]] principles and iterative [[Usability Testing]].

- ### Relationships
  - Interaction design is a subdiscipline of [[Human Computer Interaction]] that produces the behavioural layer of a [[User Interface]], closely coupled to [[User Experience]] strategy and grounded in [[Information Architecture]] for task and navigation structure. It applies [[Cognitive Science]] insights about perception, memory, and attention, and validates outcomes through [[Usability Testing]]. Interaction design enables [[Product Design]] to deliver functional systems and supports [[Accessible Design]] and [[Inclusive Design]] by encoding [[Accessibility]] requirements into the behavioural specification of a product.

- ### Content
  - Interaction design as a named discipline was consolidated in the late 1980s by Bill Moggridge and Bill Verplank, who coined the term to describe the design of software and digital interfaces in contrast to industrial and graphic design. Its intellectual foundations, however, draw heavily on earlier work: J.J. Gibson's ecological theory of affordances (1979), which introduced the idea that perceived action possibilities emerge from the relationship between an artefact and its user; Don Norman's application of affordance theory to design in "The Design of Everyday Things" (1988); and PARC's research into direct manipulation interfaces, gestural input, and WYSIWYG editing during the 1970s and 1980s. These foundations established the core vocabulary of interaction design: affordance, mapping, constraint, feedback, and conceptual model.

  - Interaction design practice proceeds through iterative cycles of research, ideation, prototyping, and evaluation. Ethnographic and contextual inquiry methods establish user goals, mental models, and environmental constraints. Interaction models — task flows, state diagrams, journey maps — make the intended behaviour explicit before any visual design or code is written. Low-fidelity prototypes (paper sketches, wireframes) and high-fidelity interactive prototypes (clickable mockups, coded prototypes) allow behavioural hypotheses to be tested with real users before engineering investment is committed. Usability testing, eye-tracking studies, and cognitive walkthroughs validate that the designed interactions match user mental models and task demands.

  - The discipline spans every digital surface: web and mobile applications, desktop software, embedded systems, automotive infotainment, voice interfaces, and increasingly spatial and immersive environments. Interaction design for conversational AI (chatbots, LLM-powered interfaces) has become a significant subfield, requiring attention to how systems communicate uncertainty, handle off-topic inputs, and maintain coherent multi-turn conversations. Spatial interaction design for AR and VR introduces novel constraints around gaze, gesture, and physical world integration that differ fundamentally from 2D screen interaction paradigms.

  - As of 2024–2025, interaction design is navigating the transition from screen-first to AI-first product paradigms. Large language model interfaces have challenged traditional design heuristics: users interact via natural language rather than structured UI components, reducing the designer's control over interaction vocabulary while demanding new designs for prompt guidance, response streaming, uncertainty communication, and correction flows. Simultaneously, the proliferation of spatial computing devices (Apple Vision Pro, Meta Quest 3) has accelerated research into hand-tracking, eye-gaze, and mixed-reality interaction patterns that have no established design canon. The field is also increasingly engaged with AI-assisted design tools that generate interface variants, conduct automated accessibility audits, and simulate user behaviour — compressing the iteration cycle but raising questions about which decisions remain the designer's responsibility.

