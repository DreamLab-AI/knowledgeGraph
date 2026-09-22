public:: true

# Risk Analysis

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:risk-analysis",
  "@type": "Page",
  "title": "Risk Analysis",
  "vc:slug": "risk-analysis",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-analysis",
  "@type": "Class",
  "label": "Risk Analysis",
  "definition": "Risk analysis is the systematic process of identifying, characterising and estimating the likelihood and impact of events that could threaten objectives, in order to inform decisions about how to treat them. It combines qualitative judgement with quantitative techniques such as scenario modelling and probabilistic simulation to express uncertainty in actionable terms. As a core component of risk management, it produces the evidence base for prioritising controls, allocating capital and setting tolerances.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:risk-management",
      "label": "Risk Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:scenario-analysis",
        "label": "Scenario Analysis"
      },
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-methods",
        "label": "Monte Carlo Methods"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:monte-carlo-methods",
        "label": "Monte Carlo Methods"
      },
      {
        "@id": "urn:ngm:class:scenario-analysis",
        "label": "Scenario Analysis"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
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
  - Risk analysis is the systematic process of identifying, characterising and estimating the likelihood and impact of events that could threaten objectives, in order to inform decisions about how to treat them.
  - It combines qualitative judgement with quantitative techniques such as scenario modelling and probabilistic simulation to express uncertainty in actionable terms.
  - As a core component of risk management, it produces the evidence base for prioritising controls, allocating capital and setting tolerances.
  - Related core concepts: [[Risk Management]] [[Scenario Analysis]] [[Monte Carlo Methods]] [[Decision Making]]
- ### Overview
  - Risk analysis bridges raw data and governance decisions by quantifying exposure under uncertainty.
  - It spans the lifecycle from hazard identification through estimation to evaluation against tolerance thresholds.
  - Outputs feed control selection, capital allocation and board-level reporting.
- ### Key aspects
  - Qualitative scoring using likelihood-impact matrices for rapid triage.
  - Quantitative estimation with probability distributions and simulation.
  - Sensitivity and scenario testing to surface dominant drivers.
  - Aggregation of correlated risks into portfolio-level views.
- ### Applications
  - Financial and operational risk assessment.
  - Project, safety and compliance reviews.
  - Cyber-security threat and impact prioritisation.
- ### Relationships
  - hasPart:: [[Scenario Analysis]]
  - hasPart:: [[Stress Testing]]
  - hasPart:: [[Monte Carlo Methods]]
  - enables:: [[Decision Making]]
  - enables:: [[Risk Management]]
  - partOf:: [[Risk Management]]
  - partOf:: [[Governance]]
  - requires:: [[Statistics]]
  - uses:: [[Monte Carlo Methods]]
  - uses:: [[Scenario Analysis]]
  - supports:: [[Compliance]]
  - relatedTo:: [[Stress Testing]]
  - relatedTo:: [[Decision Making]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
