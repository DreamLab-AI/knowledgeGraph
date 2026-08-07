public:: true

# Inaccessible Design
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2e81c050ccdee0e14073b078f2e8583630461ce68b194b4c7f8ac88ef00b25b4",
  "@type": "Page",
  "vc:slug": "inaccessible-design",
  "title": "Inaccessible Design",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:user-interface-design",
      "vc:label": "User Interface Design"
    },
    {
      "@id": "urn:visionflow:linked:accessible-design",
      "vc:label": "Accessible Design"
    },
    {
      "@id": "urn:visionflow:linked:universal-design",
      "vc:label": "Universal Design"
    },
    {
      "@id": "urn:visionflow:linked:accessible-experience",
      "vc:label": "Accessible Experience"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inaccessible-design",
  "@type": "Class",
  "label": "Inaccessible Design",
  "definition": "Design of products, interfaces, environments, or experiences that erects barriers for people with disabilities or situational limitations — relying on a single sensory channel, demanding fine motor precision, ignoring assistive technologies, or assuming one body, language, or cognitive style. The antonym of accessible design, it excludes users not through intent but through unexamined defaults, and in immersive XR contexts can render entire experiences unusable.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:user-interface-design",
    "label": "User Interface Design"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:accessible-design",
        "label": "Accessible Design"
      },
      {
        "@id": "urn:ngm:class:universal-design",
        "label": "Universal Design"
      },
      {
        "@id": "urn:ngm:class:inclusive-experience",
        "label": "Inclusive Experience"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:accessible-experience",
        "label": "Accessible Experience"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Design of products, interfaces, environments, or experiences that erects barriers for people with disabilities or situational limitations — relying on a single sensory channel, demanding fine motor precision, ignoring assistive technologies, or assuming one body, language, or cognitive style. The antonym of accessible design, it excludes users not through intent but through unexamined defaults, and in immersive XR contexts can render entire experiences unusable."

- ### Semantic Classification
  - owl-class:: spatial-computing:InaccessibleDesign
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[User Interface Design]]
  - contrasts-with:: [[Accessible Design]]
  - contrasts-with:: [[Universal Design]]
  - related-to:: [[Accessible Experience]]

- ### Content

  ## Definition

  **Inaccessible Design** names the failure mode that [[Accessible Design]] exists to correct: products and experiences built around an implicit "default user" whose sight, hearing, mobility, dexterity, and cognition all fall within a narrow band. When that assumption is baked in, everyone outside the band meets a barrier — a screen-reader user facing an unlabelled button, a colour-blind player unable to distinguish team indicators, a wheelchair user confronting a virtual environment that assumes standing height, a deaf participant in a meeting with no captions.

  The concept is useful as a distinct class, not merely the negation of its antonym, because inaccessibility has recognisable, recurring patterns that can be catalogued, detected, and audited: single-channel information delivery (colour-only or audio-only cues), interaction demands that exceed some users' capabilities (time limits, precision gestures, sustained two-handed input), incompatibility with assistive technology (custom widgets invisible to screen readers, XR runtimes that block switch access), and content-level exclusion (low contrast, small immovable text, jargon-dense language).

  In immersive environments the stakes are amplified. Extended reality is intensely multisensory and embodied, so inaccessible choices — locomotion that requires physical turning, interactions that assume binocular vision or two functioning hands, UI anchored at fixed heights, absence of subtitles in spatial audio scenes — do not merely degrade an experience but can exclude a user from it entirely, or induce discomfort and simulator sickness. This is why the corpus's [[Accessible Experience]] class explicitly contrasts with inaccessible design.

  ## Current Landscape

  Inaccessibility remains the measured norm rather than the exception on the flat web: WebAIM's annual survey of the top million home pages continues to find detectable WCAG failures on over 94% of them, dominated by low-contrast text, missing alternative text, and unlabelled form controls. Regulation is tightening — the European Accessibility Act became applicable in June 2025, the UK Equality Act 2010 and Public Sector Bodies Accessibility Regulations impose duties on services, and US ADA litigation over digital properties continues to grow — turning inaccessible design from a quality gap into a legal and commercial risk.

  For XR the guidance base is younger: the W3C's XR Accessibility User Requirements (XAUR), the XR Association's developer guides, and platform features such as Apple visionOS accessibility settings (Pointer Control, Dwell Control, captions in spatial experiences) sketch what accessible immersive design looks like, which in turn sharpens the definition of its opposite. Auditing practice increasingly treats inaccessible patterns as defects to be caught in design review and automated testing, rather than retrofitted after launch — the cheapest inaccessible design to fix being the one that never ships.
