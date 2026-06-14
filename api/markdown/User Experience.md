public:: true
alias:: UserExperience

# user experience
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5f19700bfc48e4736116c984e3a4e43fdf120c463c310f455e8d51962680611b",
  "@type": "Page",
  "vc:slug": "user-experience",
  "title": "user experience",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-experience",
  "@type": "Class",
  "label": "User Experience",
  "definition": "User Experience (UX) is the totality of perceptions, responses, and outcomes that a person encounters before, during, and after interacting with a product, service, or system — encompassing functional usability, aesthetic appeal, emotional resonance, accessibility, and long-term satisfaction. In spatial and immersive computing contexts, UX additionally addresses physical comfort, motion sickness mitigation, spatial audio fidelity, haptic feedback, and the cognitive load imposed by three-dimensional interaction paradigms. UX design is an iterative, evidence-based discipline drawing on human-computer interaction research, cognitive psychology, and ergonomics, and is formalised in ISO 9241-210 as encompassing all perceptions and responses resulting from actual or anticipated use. Empirical evaluation methods — including heuristic analysis, usability testing, eye tracking, and physiological measurement — ground UX practice in observable user behaviour.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:human-computer-interaction",
      "label": "Human Computer Interaction"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:ux", "label": "UX"},
    {"@id": "urn:ngm:class:end-user-experience", "label": "End User Experience"}
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"},
      {"@id": "urn:ngm:class:product-design", "label": "Product Design"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:usability", "label": "Usability"},
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"},
      {"@id": "urn:ngm:class:information-architecture", "label": "Information Architecture"},
      {"@id": "urn:ngm:class:interaction-design", "label": "Interaction Design"},
      {"@id": "urn:ngm:class:visual-design", "label": "Visual Design"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:user-research", "label": "User Research"},
      {"@id": "urn:ngm:class:human-factors", "label": "Human Factors"},
      {"@id": "urn:ngm:class:usability-testing", "label": "Usability Testing"},
      {"@id": "urn:ngm:class:prototyping", "label": "Prototyping"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"},
      {"@id": "urn:ngm:class:user-engagement", "label": "User Engagement"},
      {"@id": "urn:ngm:class:digital-accessibility", "label": "Digital Accessibility"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cognitive-load", "label": "Cognitive Load"},
      {"@id": "urn:ngm:class:affordance", "label": "Affordance"},
      {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:heuristic-evaluation", "label": "Heuristic Evaluation"},
      {"@id": "urn:ngm:class:personas", "label": "Personas"},
      {"@id": "urn:ngm:class:journey-mapping", "label": "Journey Mapping"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-9241-210", "label": "ISO 9241-210"},
      {"@id": "urn:ngm:class:wcag", "label": "WCAG"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:usability", "label": "Usability"},
      {"@id": "urn:ngm:class:customer-experience", "label": "Customer Experience"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:extended-reality", "label": "Extended Reality"},
      {"@id": "urn:ngm:class:affective-computing", "label": "Affective Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:service-design", "label": "Service Design"},
      {"@id": "urn:ngm:class:ergonomics", "label": "Ergonomics"},
      {"@id": "urn:ngm:class:design-thinking", "label": "Design Thinking"}
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - **User Experience (UX)** is the totality of perceptions, responses, and outcomes that a person encounters before, during, and after interacting with a product, service, or digital system. It encompasses [[Usability]], aesthetic appeal, emotional resonance, [[Accessibility]], and long-term satisfaction. In [[Spatial Computing]] and [[Extended Reality]] contexts, UX additionally addresses physical comfort, simulator sickness mitigation, [[Spatial Audio]] fidelity, and [[Haptic Feedback]]. UX is distinguished from narrow usability in that it covers the full arc of experience — including anticipation, onboarding, habitual use, and abandonment — as codified in [[ISO 9241-210]].

- ### Overview
  - User Experience emerged as a distinct discipline in the 1990s, with Donald Norman at Apple popularising the term to describe holistic, human-centred product design that goes beyond interface ergonomics to encompass meaning, identity, and delight.
  - The scope of UX spans four axes:
    - **Pragmatic quality** — goal achievement, task efficiency, learnability (the classic [[Usability]] axis)
    - **Hedonic quality** — aesthetic pleasure, novelty, expressiveness
    - **Eudaimonic quality** — personal growth, meaningfulness, flow states
    - **Temporal quality** — anticipation, first-time experience, long-term adoption curves
  - Why it matters:
    - Poor UX is a primary driver of product abandonment and support cost escalation.
    - Accessibility failures expose organisations to legal liability under WCAG 2.1 / EN 301 549.
    - In immersive and spatial contexts, UX failures can cause physical harm (simulator sickness, musculoskeletal strain) as well as psychological distress.
  - How it works:
    - UX practice follows an iterative design cycle: **Discover → Define → Ideate → Prototype → Test → Implement → Evaluate**
    - Evidence is collected through [[User Research]] (interviews, surveys, ethnographic observation) and validated through [[Usability Testing]], [[Heuristic Evaluation]], and analytic instrumentation.
    - Findings feed [[Interaction Design]] decisions, [[Information Architecture]] structures, and [[Visual Design]] choices, all of which are re-evaluated against user behaviour.

- ### Key Components
  - **[[Usability]]** — the degree to which a system lets users achieve goals effectively, efficiently, and satisfactorily (ISO 9241-11). A necessary but not sufficient component of overall UX.
  - **[[Accessibility]]** — designing for users across the full spectrum of motor, visual, auditory, and cognitive abilities. Governed by [[WCAG]] and platform-specific APIs (ARIA, Android Accessibility Service, Apple Accessibility).
  - **[[Information Architecture]]** — the structural organisation of content and navigation, enabling users to build accurate mental models and find information with minimal cognitive effort.
  - **[[Interaction Design]]** — the craft of defining the behaviour of interactive elements: controls, gestures, transitions, feedback, and error states.
  - **[[Visual Design]]** — layout, typography, colour, iconography, and motion design; serves both aesthetic and communicative functions.
  - **[[Cognitive Load]]** — the mental effort demanded by an interface. Minimising extraneous cognitive load is a primary driver of usability gains.
  - **[[Affordance]]** — perceived action possibilities communicated by interface elements (e.g., a raised button invites pressing). Mismatched affordances are a primary source of user error.
  - **[[Feedback Loop]]** — timely, appropriate system responses that confirm user actions and signal state changes. Essential for maintaining the sense of control and reducing uncertainty.
  - **Emotional design** — products that elicit positive affect (delight, confidence, calm) achieve higher engagement and retention. Involves tone of voice, micro-interactions, and onboarding choreography.
  - **[[Personas]]** — archetypal user representations synthesised from research data, used to maintain empathic focus during design and prioritisation decisions.
  - **[[Journey Mapping]]** — visualisation of the end-to-end user journey across touchpoints, identifying pain points, moments of truth, and emotional highs and lows.

- ### Spatial and Immersive UX
  - In [[Extended Reality]] (AR, VR, MR), UX design faces challenges absent from flat-screen contexts:
    - **Simulator sickness** — vestibular-visual conflict caused by latency, incorrect field-of-view, or camera locomotion. Mitigated through low-persistence displays, reducing artificial locomotion, and comfort vignetting.
    - **3D information spaces** — navigation and wayfinding in volumetric environments require spatial [[Affordance]], persistent landmarks, and minimap abstractions analogous to 2D breadcrumbs.
    - **Novel input modalities** — gaze, hand tracking, voice, and controller abstraction replace keyboard/mouse. Requires fresh interaction vocabulary and [[Heuristic Evaluation]] frameworks adapted for spatial contexts (e.g., Oculus VR Design Guidelines).
    - **[[Haptic Feedback]]** — tactile confirmation in the absence of physical surfaces; essential for spatial manipulation tasks.
    - **[[Spatial Audio]]** — positional sound cues provide orientation, improve presence, and reduce visual clutter in 3D environments.
    - **Comfort and ergonomics** — headset weight distribution, interpupillary distance calibration, and session duration limits all constitute UX dimensions with direct physiological consequences.

- ### Applications and Use Cases
  - **Consumer software and mobile apps** — the canonical domain; app stores surface UX quality through ratings, reviews, and retention metrics.
  - **Enterprise software** — ERP, CRM, and workflow tools where poor UX reduces productivity and drives shadow IT adoption.
  - **Healthcare systems** — clinical decision support, patient portals, and medical device interfaces where UX failures can contribute to adverse events.
  - **[[Extended Reality]] training and simulation** — military, surgical, and industrial training applications where immersive UX governs presence and learning transfer.
  - **[[Spatial Computing]] platforms** — Apple Vision Pro, Meta Quest, and mixed-reality enterprise headsets where UX encompasses physical ergonomics, spatial interaction, and cross-device continuity.
  - **Conversational and AI-driven interfaces** — chat UIs, voice assistants, and AI copilots where UX concerns include response latency, explanation quality, uncertainty communication, and error recovery.
  - **Accessibility-first design** — government digital services (e.g., UK Government Design System) where legal mandates drive WCAG conformance.
  - **E-commerce and conversion optimisation** — UX levers (page load time, checkout flow, trust signals) have quantified impact on conversion rates and basket abandonment.

- ### Relationships
  - partOf:: [[Human Computer Interaction]]
  - partOf:: [[Product Design]]
  - hasPart:: [[Usability]]
  - hasPart:: [[Accessibility]]
  - hasPart:: [[Information Architecture]]
  - hasPart:: [[Interaction Design]]
  - hasPart:: [[Visual Design]]
  - requires:: [[User Research]]
  - requires:: [[Human Factors]]
  - requires:: [[Usability Testing]]
  - requires:: [[Prototyping]]
  - enables:: [[Immersive Experience]]
  - enables:: [[User Engagement]]
  - enables:: [[Digital Accessibility]]
  - dependsOn:: [[Cognitive Load]]
  - dependsOn:: [[Affordance]]
  - dependsOn:: [[Feedback Loop]]
  - uses:: [[Heuristic Evaluation]]
  - uses:: [[Personas]]
  - uses:: [[Journey Mapping]]
  - standardizedBy:: [[ISO 9241-210]]
  - standardizedBy:: [[WCAG]]
  - contrastsWith:: [[Usability]]
  - contrastsWith:: [[Customer Experience]]
  - bridges-to:: [[Artificial Intelligence]]
  - bridges-to:: [[Extended Reality]]
  - bridges-to:: [[Affective Computing]]
  - relatedTo:: [[Service Design]]
  - relatedTo:: [[Ergonomics]]
  - relatedTo:: [[Design Thinking]]

- ### Standards and Context
  - **[[ISO 9241-210]]** (Ergonomics of human-system interaction — Human-centred design for interactive systems) — the principal international standard defining UX, human-centred design processes, and usability. Revised in 2019 to strengthen coverage of emotional and aesthetic dimensions.
  - **[[WCAG]]** (Web Content Accessibility Guidelines) — W3C standard governing digital accessibility; WCAG 2.1 at AA conformance is a legal requirement in many jurisdictions (EU Web Accessibility Directive, UK Equality Act, US Section 508). WCAG 3.0 is in development.
  - **EN 301 549** — European harmonised accessibility standard for ICT products and services, broadly aligned with WCAG 2.1.
  - **Nielsen's 10 Usability Heuristics** — empirically derived heuristics (visibility of system status, match between system and real world, user control and freedom, etc.) widely used in [[Heuristic Evaluation]]. Extended variants cover conversational interfaces and spatial computing.
  - **Apple Human Interface Guidelines / Material Design (Google)** — platform-specific UX design systems providing component libraries, motion guidelines, and accessibility patterns.
  - **RITE (Rapid Iterative Testing and Evaluation)** — a lightweight formative [[Usability Testing]] methodology where identified issues are fixed between participant sessions.
  - **[[Design Thinking]]** (ISO 56002 Innovation Management context) — a problem-solving framework closely aligned with UX practice; UX methods constitute the empathise and test phases of the double-diamond model.
  - Sector-specific UX governance:
    - **IEC 62366-1** — usability engineering for medical devices
    - **DO-178C / ARP 4754A** — aviation HMI design assurance standards
    - **NIST SP 800-63B** — digital identity UX guidelines (authentication friction vs. security)

- ### Research Methods Summary
  - **Formative methods** (during design):
    - Contextual inquiry and ethnographic observation
    - Card sorting (for [[Information Architecture]])
    - [[Personas]] and scenario construction
    - Cognitive walkthroughs
    - Expert [[Heuristic Evaluation]]
  - **Summative methods** (evaluating finished designs):
    - Moderated and unmoderated [[Usability Testing]]
    - A/B and multivariate testing
    - System Usability Scale (SUS) questionnaire
    - Eye-tracking and attention heatmaps
    - Physiological measurement (GSR, HR, EEG) in immersive contexts
  - Longitudinal methods:
    - Diary studies
    - Experience sampling methodology
    - Retention and churn cohort analysis

- ### Provenance
  - sources:: ISO 9241-210:2019; Nielsen & Molich (1990) usability heuristics; Norman (1988) The Design of Everyday Things; W3C WCAG 2.1; Hassenzahl (2003) hedonic quality model; Oculus VR Design Guidelines
  - updated:: 2026-06-13
