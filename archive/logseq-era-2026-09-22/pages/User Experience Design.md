public:: true

# User Experience Design
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:user-experience-design", "@type":"Page", "title":"User Experience Design", "vc:slug":"user-experience-design", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-experience-design",
  "@type": "Class",
  "label": "User Experience Design",
  "definition": "User Experience Design is the discipline of shaping the overall perception, ease and satisfaction a person derives from interacting with a product, system or service. It synthesises research into user needs, information architecture, interaction flows and visual presentation into coherent experiences. In spatial computing it extends to embodied, three-dimensional and multimodal interactions across mixed reality. The goal is to make systems useful, usable and desirable across their full lifecycle.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:human-computer-interaction",
      "label": "Human-Computer Interaction"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:user-interface-design",
        "label": "User Interface Design"
      },
      {
        "@id": "urn:ngm:class:information-architecture",
        "label": "Information Architecture"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:product-design",
        "label": "Product Design"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:user-research",
        "label": "User Research"
      },
      {
        "@id": "urn:ngm:class:usability-testing",
        "label": "Usability Testing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:usability",
        "label": "Usability"
      },
      {
        "@id": "urn:ngm:class:user-engagement",
        "label": "User Engagement"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:prototyping",
        "label": "Prototyping"
      },
      {
        "@id": "urn:ngm:class:design-systems",
        "label": "Design System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      },
      {
        "@id": "urn:ngm:class:user-centred-design",
        "label": "User-Centered Design"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:interaction-design",
        "label": "Interaction Design"
      },
      {
        "@id": "urn:ngm:class:visual-design",
        "label": "Visual Design"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:graphic-design",
        "label": "Graphic Design"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ux-design",
      "label": "UX Design"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - User Experience Design shapes how a person perceives and feels when using a product across [[Human-Computer Interaction]], [[User Interface Design]] and [[Interaction Design]]. It draws on [[User Research]] and [[Usability Testing]] to make systems useful, usable and desirable.

- ### Overview
  - The discipline emerged from human factors and human-computer interaction as digital products became central to daily life. It treats the experience as a whole rather than as isolated screens, accounting for context, emotion, accessibility and the journey before, during and after direct interaction.
  - In spatial computing the scope broadens from flat screens to embodied, three-dimensional and multimodal experiences spanning gesture, gaze, voice and physical movement within mixed-reality environments.

- ### Key aspects
  - User research uncovers goals, behaviours and pain points through interviews, observation and analytics.
  - Information architecture organises content and functionality so users can find and understand what they need.
  - Interaction design defines the flows, states and feedback that govern how users accomplish tasks.
  - Visual and motion design communicate hierarchy, affordance and brand while reinforcing usability.
  - Evaluation through usability testing and iterative prototyping validates decisions against real behaviour.

- ### Applications
  - Consumer and enterprise software, web platforms and mobile applications.
  - Immersive interfaces for augmented and virtual reality and spatial computing.
  - Service design spanning physical and digital touchpoints.
  - Accessibility-driven design ensuring inclusive use across abilities.

- ### Relationships
  - subClassOf:: [[Human-Computer Interaction]]
  - hasPart:: [[User Interface Design]]
  - hasPart:: [[Information Architecture]]
  - partOf:: [[Product Design]]
  - requires:: [[User Research]]
  - requires:: [[Usability Testing]]
  - enables:: [[Usability]]
  - enables:: [[User Engagement]]
  - uses:: [[Prototyping]]
  - uses:: [[Design System]]
  - supports:: [[Accessibility]]
  - supports:: [[User-Centered Design]]
  - relatedTo:: [[Interaction Design]]
  - relatedTo:: [[Visual Design]]
  - bridgesTo:: [[Spatial Computing]]
  - bridgesTo:: [[Augmented Reality]]
  - contrastsWith:: [[Graphic Design]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
