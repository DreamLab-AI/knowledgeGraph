public:: true

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
  "definition": "User Experience (UX) is the totality of perceptions, responses, and outcomes that a person encounters when interacting with a product or system, spanning functional usability, aesthetic appeal, emotional resonance, accessibility, and long-term satisfaction. In spatial and immersive computing contexts, UX additionally encompasses physical comfort, motion sickness mitigation, spatial audio fidelity, haptic feedback, and the cognitive load imposed by three-dimensional interaction paradigms. UX design is an iterative discipline informed by user research, prototyping, and empirical evaluation methods including heuristic analysis and usability testing.",
  "domain": "spatial-computing",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"},
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:user-research", "label": "User Research"},
      {"@id": "urn:ngm:class:human-factors", "label": "Human Factors"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - User Experience (UX) is the totality of perceptions, responses, and outcomes that a person encounters when interacting with a product or system, spanning functional usability, aesthetic appeal, emotional resonance, accessibility, and long-term satisfaction. In spatial and immersive computing contexts, UX additionally encompasses physical comfort, motion sickness mitigation, spatial audio fidelity, haptic feedback, and the cognitive load imposed by three-dimensional interaction paradigms. UX design is an iterative discipline informed by user research, prototyping, and empirical evaluation methods including heuristic analysis and usability testing.

- ### Semantic Classification
  - owl-class:: user-experience:User Experience
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Human Computer Interaction]]
  - relatedTo [[Accessibility]]
  - requires [[User Research]]
  - requires [[Human Factors]]
  - enables [[Immersive Experience]]

- ### Content
  - User Experience as a discipline draws on human-computer interaction (HCI) research, cognitive psychology, ergonomics, and design practice. The ISO 9241-210 standard defines UX as encompassing all perceptions and responses resulting from actual or anticipated use of a product. Usability — the degree to which a system enables users to achieve goals effectively, efficiently, and satisfactorily — is a necessary but not sufficient component of overall UX, which also includes affective dimensions such as delight and trust.
  - In extended reality (XR) environments, UX design must address challenges unique to spatial interfaces: simulator sickness arising from vestibular-visual conflict, cognitive overload from navigating 3D information spaces, and the absence of conventional input metaphors such as keyboard and mouse. Design heuristics adapted from Nielsen's ten usability principles and additional spatial-specific guidelines (e.g., avoid rapid field-of-view changes, provide grounding cues in virtual environments) guide practitioners in reducing discomfort and improving task performance.
  - Accessibility is an integral dimension of UX, requiring systems to be operable by users with diverse motor, visual, auditory, and cognitive abilities. Standards such as WCAG (Web Content Accessibility Guidelines) and platform-specific accessibility APIs provide conformance criteria. UX evaluation methods include think-aloud protocols, eye-tracking studies, physiological measurement (galvanic skin response, heart rate) in immersive contexts, and long-term diary studies to capture experience changes over time.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
