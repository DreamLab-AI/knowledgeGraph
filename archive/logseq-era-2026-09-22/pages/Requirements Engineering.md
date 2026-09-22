public:: true

# Requirements Engineering
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:requirements-engineering",
  "@type": "Page",
  "title": "Requirements Engineering",
  "vc:slug": "requirements-engineering",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:requirements-engineering",
  "@type": "Class",
  "label": "Requirements Engineering",
  "definition": "Requirements engineering is the systematic process of eliciting, analysing, specifying, validating and managing the needs and constraints that a system must satisfy. It transforms stakeholder goals into clear, verifiable and traceable requirements that guide design, implementation and testing. As a foundational software and systems engineering discipline, it reduces project risk by surfacing ambiguity, conflict and infeasibility early in the lifecycle.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:stakeholder-analysis",
        "label": "Stakeholder Analysis"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      },
      {
        "@id": "urn:ngm:class:systems-engineering",
        "label": "Systems Engineering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:stakeholder-analysis",
        "label": "Stakeholder Analysis"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:stakeholder-analysis",
        "label": "Stakeholder Analysis"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:software-testing",
        "label": "Software Testing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      },
      {
        "@id": "urn:ngm:class:software-testing",
        "label": "Software Testing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:systems-engineering",
        "label": "Systems Engineering"
      },
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
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
  - Requirements engineering is the systematic process of eliciting, analysing, specifying, validating and managing the needs and constraints that a system must satisfy. It transforms stakeholder goals into clear, verifiable and traceable requirements that guide design, implementation and testing. As a foundational software and systems engineering discipline, it reduces project risk by surfacing ambiguity, conflict and infeasibility early in the lifecycle.
  - Related: [[Software Engineering]] [[Stakeholder Analysis]] [[Systems Engineering]] [[Quality Assurance]]
- ### Overview
  - Requirements engineering bridges the gap between problem owners and system builders. Through interviews, workshops, observation and document analysis it elicits what stakeholders need, then analyses those needs for completeness, consistency and feasibility before recording them in a structured specification. Validation activities confirm that the documented requirements genuinely reflect stakeholder intent, while change management keeps the requirement set coherent as understanding evolves.
- ### Key aspects
  - Elicitation techniques: interviews, workshops, observation
  - Functional and non-functional requirements
  - Requirements analysis and conflict resolution
  - Specification formats: natural language, models, user stories
  - Validation and verifiability of requirements
  - Traceability and change management
- ### Applications
  - Defining scope for software development projects
  - Capturing safety and regulatory requirements
  - Producing traceable system specifications
  - Driving acceptance criteria for testing
  - Aligning engineering work with stakeholder goals
- ### Relationships
  - subClassOf:: [[Software Engineering]]
  - hasPart:: [[Stakeholder Analysis]]
  - hasPart:: [[Risk Assessment]]
  - partOf:: [[Software Engineering]]
  - partOf:: [[Systems Engineering]]
  - requires:: [[Stakeholder Analysis]]
  - implements:: [[Quality Assurance]]
  - dependsOn:: [[Stakeholder Analysis]]
  - enables:: [[Software Testing]]
  - supports:: [[Quality Assurance]]
  - supports:: [[Software Testing]]
  - uses:: [[Risk Assessment]]
  - relatedTo:: [[Systems Engineering]]
  - relatedTo:: [[Software Engineering]]
  - bridgesTo:: [[Software Engineering]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
