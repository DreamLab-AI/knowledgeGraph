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
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
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

  Inaccessibility remains the measured norm rather than the exception on the flat web — and is now getting worse, not better. The WebAIM Million analysis run in February 2026 found detectable WCAG 2 failures on 95.9% of the top one million home pages, up from 94.8% in 2025 and reversing six consecutive years of small improvements; average errors per page rose 10.1% to 56.1. The same six failure types have accounted for 96% of all detected errors for seven consecutive years: low-contrast text (83.9% of pages), missing image alternative text (53.1%), missing form labels (51.0%), empty links (46.3%), empty buttons (30.6%), and a missing document language attribute (13.5%).

  Regulation has tightened sharply. The European Accessibility Act became enforceable on 28 June 2025, applying to consumer-facing digital products and services offered in the EU regardless of where the vendor is based, with member-state fines ranging from roughly €5,000 to €300,000 and the first private lawsuits landing in late 2025; pre-existing products have until 28 June 2030 to comply. In the United States, ADA Title II requires state and local government entities serving populations of 50,000 or more to conform to WCAG 2.1 AA by 24 April 2026. The UK Equality Act 2010 and Public Sector Bodies Accessibility Regulations continue to impose duties on services. Inaccessible design has thus moved decisively from quality gap to legal and commercial risk.

  For XR the guidance base is younger: the W3C's XR Accessibility User Requirements (XAUR), the XR Association's developer guides, and platform features such as Apple visionOS accessibility settings (Pointer Control, Dwell Control, captions in spatial experiences) sketch what accessible immersive design looks like, which in turn sharpens the definition of its opposite. Auditing practice increasingly treats inaccessible patterns as defects to be caught in design review and automated testing — noting that automated tools detect only around 30–40% of WCAG issues — rather than retrofitted after launch.

  **Sources**:
  - https://webaim.org/projects/million/
  - https://www.digitalapplied.com/blog/web-accessibility-statistics-2026-wcag-lawsuit-data
  - https://crosscheck.cloud/blogs/why-95-percent-websites-fail-accessibility/
  - https://accessibility.build/blog/webaim-million-2026-accessibility-getting-worse
