public:: true

# Prototyping

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:prototyping",
  "@type": "Page",
  "title": "Prototyping",
  "vc:slug": "prototyping",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:prototyping",
  "@type": "Class",
  "label": "Prototyping",
  "definition": "Prototyping is the practice of building early, often incomplete representations of a product, system, or experience to explore ideas, test assumptions, and gather feedback before committing to full development. Prototypes range from low-fidelity sketches and wireframes to high-fidelity interactive or physical models, and they shorten the cycle between concept and validated learning. In spatial computing and product design it is central to iterative, user-centred development.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:design-thinking",
      "label": "Design Thinking"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:design-thinking",
        "label": "Design Thinking"
      },
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:rapid-prototyping",
        "label": "Rapid Prototyping"
      },
      {
        "@id": "urn:ngm:class:product-design",
        "label": "Product Design"
      },
      {
        "@id": "urn:ngm:class:user-experience-design",
        "label": "User Experience Design"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      },
      {
        "@id": "urn:ngm:class:cnc-machining",
        "label": "CNC Machining"
      },
      {
        "@id": "urn:ngm:class:additive-manufacturing",
        "label": "Additive Manufacturing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:interaction-design",
        "label": "Interaction Design"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:design-thinking",
        "label": "Design Thinking"
      },
      {
        "@id": "urn:ngm:class:product-design",
        "label": "Product Design"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Prototyping]] creates early, simplified versions of a product or experience to test ideas and gather feedback before full build.
  - It is a core practice of [[Design Thinking]] and iterative, user-centred development.
  - Prototypes span low-fidelity sketches through high-fidelity interactive or physical [[Simulation]] models.
- ### Overview
  - Prototyping turns abstract concepts into tangible artefacts that stakeholders and users can react to, surfacing problems early and cheaply.
  - Low-fidelity prototypes prioritise speed and breadth of exploration, while high-fidelity prototypes test detailed interaction and feel.
  - Each prototype is treated as a hypothesis: build, test with users, learn, and refine in short iterations.
  - In spatial computing, prototypes may be physical mock-ups, 3D-printed parts, or interactive immersive scenes.
- ### Key aspects
  - **Fidelity spectrum**: from paper sketches to functional, interactive models.
  - **Iteration**: rapid cycles of build, test, and refine.
  - **Feedback**: structured user testing to validate assumptions.
  - **Fabrication**: physical prototypes produced via [[CNC Machining]] or [[Additive Manufacturing]].
- ### Applications
  - Validating user flows and interaction patterns in [[User Experience Design]].
  - De-risking hardware and product concepts before tooling.
  - Exploring immersive and spatial interfaces.
  - Aligning stakeholders around a shared, tangible vision.
- ### Relationships
  - requires:: [[Design Thinking]]
  - requires:: [[User Experience]]
  - enables:: [[Rapid Prototyping]]
  - enables:: [[Product Design]]
  - enables:: [[User Experience Design]]
  - uses:: [[Simulation]]
  - uses:: [[CNC Machining]]
  - uses:: [[Additive Manufacturing]]
  - hasPart:: [[Interaction Design]]
  - supports:: [[User Experience]]
  - relatedTo:: [[Design Thinking]]
  - relatedTo:: [[Product Design]]
- ### Provenance
  - updated:: 2026-06-15
