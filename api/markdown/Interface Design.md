public:: true

# Interface Design
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:interface-design",
  "@type": "Page",
  "title": "Interface Design",
  "vc:slug": "interface-design",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:interface-design",
  "@type": "Class",
  "label": "Interface Design",
  "definition": "Interface design is the discipline of defining the boundaries, contracts, and points of interaction between components, systems, or between a system and its users. In software it encompasses both human-facing user interface design and machine-facing application programming interface design, focusing on clarity, consistency, and ease of correct use. Good interface design minimises coupling, communicates intent, and shapes how reliably and pleasantly the parts of a system can be combined or operated.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:api-design",
        "label": "API Design"
      },
      {
        "@id": "urn:ngm:class:interaction-design",
        "label": "Interaction Design"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:usability",
        "label": "Usability"
      },
      {
        "@id": "urn:ngm:class:information-architecture",
        "label": "Information Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      },
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:prototyping",
        "label": "Prototyping"
      },
      {
        "@id": "urn:ngm:class:figma",
        "label": "Figma"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:usability",
        "label": "Usability"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:interaction-design",
        "label": "Interaction Design"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      },
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      },
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
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
  - Interface design is the discipline of defining the boundaries, contracts, and points of interaction between components, systems, or between a system and its users. In software it encompasses both human-facing user interface design and machine-facing application programming interface design, focusing on clarity, consistency, and ease of correct use. Good interface design minimises coupling, communicates intent, and shapes how reliably and pleasantly the parts of a system can be combined or operated.
  - [[Infrastructure]] [[Interaction Design]] [[Prototyping]] [[Figma]] [[API Design]]
- ### Overview
  - Interface design spans two complementary surfaces: the human surface, where layout, affordances, and feedback determine usability, and the programmatic surface, where method signatures, data contracts, and error semantics determine composability. In both cases the central principle is to make correct use easy and incorrect use difficult, surfacing the right capabilities while hiding implementation detail. Strong interfaces act as stable contracts that allow the systems on either side to evolve independently.
- ### Key aspects
  - Clear contracts that decouple producers from consumers
  - Consistency in naming, behaviour, and visual language
  - Affordances and feedback that communicate intent
  - Error handling and graceful degradation at boundaries
  - Accessibility and inclusive design considerations
- ### Applications
  - User interface and product design
  - Public and internal API design
  - Hardware and protocol interface specification
  - Design systems and component libraries
  - Cross-team integration contracts
- ### Relationships
  - hasPart:: [[API Design]]
  - hasPart:: [[Interaction Design]]
  - requires:: [[Usability]]
  - requires:: [[Information Architecture]]
  - supports:: [[User Experience]]
  - supports:: [[Accessibility]]
  - uses:: [[Prototyping]]
  - uses:: [[Figma]]
  - enables:: [[Usability]]
  - implements:: [[Interaction Design]]
  - relatedTo:: [[Human-Computer Interaction]]
  - relatedTo:: [[User Experience]]
  - relatedTo:: [[Accessibility]]
- ### Provenance
  - This class was materialised to resolve inbound references from existing classes in the knowledge graph.
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
