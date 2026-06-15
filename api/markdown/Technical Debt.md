public:: true

# Technical Debt
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:technical-debt", "@type": "Page", "title": "Technical Debt", "vc:slug": "technical-debt", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:technical-debt",
  "@type": "Class",
  "label": "Technical Debt",
  "definition": "Technical debt is the implied future cost incurred when a software team chooses an expedient solution over a better but slower approach, accruing rework that must eventually be paid down through refactoring. Like financial debt it carries interest: the longer suboptimal code persists, the more effort future changes require. Managing it involves making the debt visible, prioritising repayment, and balancing delivery speed against long-term maintainability.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:software-architecture",
        "label": "Software Architecture"
      },
      {
        "@id": "urn:ngm:class:project-management",
        "label": "Project Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:code-review",
        "label": "Code Review"
      },
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:continuous-delivery",
        "label": "Continuous Delivery"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:software-testing",
        "label": "Software Testing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agile-software-development",
        "label": "Agile Software Development"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Technical Debt is rooted in Software Engineering and relates to [[Software Architecture]], [[Code Review]], [[Software Development]]. Technical debt is the implied future cost incurred when a software team chooses an expedient solution over a better but slower approach, accruing rework that must eventually be paid down through refactoring.

- ### Overview
  - Technical debt is a metaphor that frames shortcuts in design or implementation as borrowing against future productivity, with interest payable as ongoing friction.
  - Some debt is deliberate and strategic, taken to meet a deadline; other debt is inadvertent, arising from inexperience or shifting requirements.
  - Left unmanaged, debt compounds: each new feature becomes harder to add, defects multiply, and the cost of change rises steadily.

- ### Key aspects
  - Debt becomes visible through symptoms such as duplicated code, brittle tests and rising defect rates.
  - Repayment is achieved by refactoring, improving documentation and strengthening test coverage.
  - Teams track debt explicitly in backlogs so it can be prioritised against feature work.
  - Static analysis and code-quality metrics help quantify and monitor accumulating debt.

- ### Applications
  - Legacy modernisation programmes that systematically pay down accumulated debt.
  - Sprint planning that reserves capacity for refactoring alongside new features.
  - Architecture reviews that surface structural debt before it becomes critical.
  - Engineering governance that sets thresholds for acceptable code-quality metrics.

- ### Relationships
  - subClassOf:: [[Software Engineering]]
  - requires:: [[Software Architecture]]
  - requires:: [[Project Management]]
  - uses:: [[Code Review]]
  - uses:: [[Quality Assurance]]
  - enables:: [[Continuous Delivery]]
  - supports:: [[Software Engineering]]
  - dependsOn:: [[Software Development]]
  - contrastsWith:: [[Software Testing]]
  - bridgesTo:: [[DevOps]]
  - relatedTo:: [[Agile Software Development]]
  - relatedTo:: [[Continuous Integration]]
  - relatedTo:: [[Software Engineering]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
