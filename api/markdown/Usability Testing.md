public:: true
alias:: UsabilityTesting

# Usability Testing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:usability-testing",
  "@type": "Page",
  "vc:slug": "usability-testing",
  "title": "Usability Testing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:usability-testing",
  "@type": "Class",
  "label": "Usability Testing",
  "definition": "Usability testing is an empirical user research method in which representative users are observed attempting to complete realistic tasks with a product, system, or prototype, while the evaluator records errors, task completion times, help-seeking behaviour, and verbal commentary to identify usability problems and inform design improvements. Unlike expert-based heuristic evaluation, usability testing generates direct evidence of how real people interact with an interface under ecologically valid conditions. It is a core practice in human-computer interaction, product design, and user experience research, conducted through moderated in-person sessions, remote think-aloud protocols, or automated unmoderated testing platforms.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:user-research", "label": "User Research"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:user-experience", "label": "User Experience"},
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"},
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"},
      {"@id": "urn:ngm:class:heuristic-methods", "label": "Heuristic Methods"},
      {"@id": "urn:ngm:class:cognitive-load", "label": "Cognitive Load"},
      {"@id": "urn:ngm:class:task-analysis", "label": "Task Analysis"},
      {"@id": "urn:ngm:class:think-aloud-protocol", "label": "Think-Aloud Protocol"},
      {"@id": "urn:ngm:class:eye-tracking", "label": "Eye Tracking"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:product-design", "label": "Product Design"},
      {"@id": "urn:ngm:class:user-interface", "label": "User Interface"},
      {"@id": "urn:ngm:class:iterative-design", "label": "Iterative Design"},
      {"@id": "urn:ngm:class:evidence-based-design", "label": "Evidence-Based Design"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:quality-assurance", "label": "Quality Assurance"},
      {"@id": "urn:ngm:class:software-testing", "label": "Software Testing"},
      {"@id": "urn:ngm:class:participant-recruitment", "label": "Participant Recruitment"},
      {"@id": "urn:ngm:class:observational-methods", "label": "Observational Methods"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:user-research", "label": "User Research"},
      {"@id": "urn:ngm:class:prototype", "label": "Prototype"},
      {"@id": "urn:ngm:class:research-protocol", "label": "Research Protocol"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:task-scenario", "label": "Task Scenario"},
      {"@id": "urn:ngm:class:session-recording", "label": "Session Recording"},
      {"@id": "urn:ngm:class:debrief-interview", "label": "Debrief Interview"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:heuristic-evaluation", "label": "Heuristic Evaluation"},
      {"@id": "urn:ngm:class:a-b-testing", "label": "A/B Testing"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-9241", "label": "ISO 9241"},
      {"@id": "urn:ngm:class:wcag", "label": "WCAG"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:user-testing", "label": "User Testing"},
    {"@id": "urn:ngm:class:ux-testing", "label": "UX Testing"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Usability Testing]] is a structured [[User Research]] method in which representative participants attempt defined tasks with a product while an evaluator observes behaviour, errors, and verbal feedback to identify barriers to efficient, effective, and satisfying use — providing direct empirical evidence that drives iterative [[Product Design]] improvement.

- ### Relationships
  - [[Usability Testing]] is a subclass of [[User Research]] and is central to the practice of [[User Experience]] design. It differs from automated [[Software Testing]] in that it evaluates human performance with the system rather than technical correctness. It complements [[Heuristic Methods]] (expert inspection against usability principles) by providing grounded behavioural evidence from actual users. Findings feed directly into [[Product Design]] refinements and [[User Interface]] specification updates. It is increasingly applied to [[Accessibility]] evaluation for users with disabilities, and its insights inform [[Human Computer Interaction]] research. In complex spatial environments, usability testing extends to XR and spatial [[User Interface]] modalities.

- ### Content
  - Usability testing as a formalised practice emerged from human factors engineering in the mid-20th century, particularly within military and aviation psychology where equipment interface failures had life-critical consequences. The discipline migrated to software development in the 1980s with John Carroll, Clayton Lewis, and Jakob Nielsen among the key figures codifying the practice. Nielsen's 1994 work established the empirical finding that five representative participants suffice to identify 85% of usability problems in a single design iteration — a guideline that has profoundly shaped how teams budget for usability research, though its applicability varies with system complexity and user population heterogeneity.

  - A usability test session follows a structured protocol: a moderator briefs the participant on the think-aloud technique (narrating thoughts while working); presents a series of tasks defined to reflect realistic use scenarios; avoids providing help unless the participant is completely blocked; and debriefs with follow-up questions. Data collected includes task completion rates and times, error counts and types, subjective satisfaction ratings (SUS, UMUX), and rich qualitative observations of confusion, hesitation, and workarounds. Remote moderated testing via screen-share software and unmoderated testing platforms (UserTesting, Maze, Hotjar) have democratised access to participants and reduced logistical cost.

  - Usability testing is deployed at multiple stages of the product lifecycle: formative testing on low-fidelity paper prototypes or wireframes identifies fundamental conceptual problems early at low cost; iterative testing on interactive prototypes validates design decisions during development; summative testing on shipped products establishes baseline metrics and identifies regression. In regulated industries including medical devices (FDA usability engineering guidance HE75), aviation (EASA human factors certification), and nuclear power (IEC 62385), formal usability testing is a mandatory part of safety case development. The EU's European Accessibility Act (2025 compliance deadline) and the Web Content Accessibility Guidelines (WCAG) have driven greater integration of accessibility testing into standard usability practice.

  - In 2024–2025, AI-assisted usability testing is emerging as a field: large language models are being used to simulate user behaviour for early-stage prototype evaluation, to transcribe and code think-aloud recordings, and to identify patterns across large corpora of session recordings. Biometric instrumentation — eye tracking, galvanic skin response, facial action coding — provides physiological correlates of cognitive load and frustration that supplement self-report measures. As XR and spatial computing interfaces become more prevalent, usability testing methodologies are being extended to 6-DoF navigation, gesture interaction, and social VR environments, requiring new metrics and apparatus beyond the traditional desktop screen recording setup.