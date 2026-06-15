public:: true

# Stress Testing
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:stress-testing",
  "@type": "Page",
  "title": "Stress Testing",
  "vc:slug": "stress-testing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stress-testing",
  "@type": "Class",
  "label": "Stress Testing",
  "definition": "Stress testing is a risk-management technique that evaluates how an institution, portfolio or system would perform under severe but plausible adverse conditions. It applies hypothetical or historical shock scenarios to estimate losses, capital depletion and liquidity strain beyond normal expectations. Supervisory stress tests are a central tool of prudential regulation for assessing resilience and informing capital requirements.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:risk-management",
      "label": "Risk Management"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:prudential-regulation",
        "label": "Prudential Regulation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:scenario-analysis",
        "label": "Scenario Analysis"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:scenario-analysis",
        "label": "Scenario Analysis"
      },
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      },
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
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
  - [[Stress Testing]] estimates how firms or portfolios behave under severe but plausible adverse scenarios.
  - It is a core technique of [[Risk Management]] and a supervisory instrument of [[Prudential Regulation]].
  - It builds on [[Scenario Analysis]] and [[Simulation]] to quantify tail losses and capital depletion.
- ### Overview
  - Routine risk measures capture normal conditions; stress testing probes the extreme tail where institutions fail.
  - Tests apply hypothetical or historical shocks to balance sheets, exposures and funding.
  - Supervisory stress tests aggregate across firms to gauge systemic resilience and set capital expectations.
  - Reverse stress testing instead asks which scenarios would render a firm non-viable.
- ### Mechanisms
  - Scenario design specifies adverse macroeconomic and market paths.
  - Loss projection models translate scenarios into losses and capital impacts.
  - Sensitivity and reverse tests explore single-factor shocks and breaking points.
  - Capital and liquidity metrics are recomputed under stressed conditions.
- ### Applications
  - Bank capital adequacy assessment under regulatory frameworks.
  - Insurance solvency and reserve resilience testing.
  - Portfolio and trading-book risk evaluation.
  - System-wide macroprudential surveillance by central banks.
- ### Relationships
  - partOf:: [[Risk Management]]
  - partOf:: [[Prudential Regulation]]
  - hasPart:: [[Scenario Analysis]]
  - implements:: [[Risk Assessment]]
  - requires:: [[Scenario Analysis]]
  - requires:: [[Simulation]]
  - uses:: [[Simulation]]
  - enables:: [[Capital Adequacy]]
  - enables:: [[Financial Stability]]
  - supports:: [[Regulatory Compliance]]
  - contrastsWith:: [[Systemic Risk]]
  - relatedTo:: [[Basel III]]
  - relatedTo:: [[Central Bank]]
- ### Provenance
  - updated:: 2026-06-15
