public:: true

# Risk Weighted Assets

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:risk-weighted-assets",
  "@type": "Page",
  "title": "Risk Weighted Assets",
  "vc:slug": "risk-weighted-assets",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-weighted-assets",
  "@type": "Class",
  "label": "Risk Weighted Assets",
  "definition": "Risk-weighted assets (RWA) are a bank's assets and off-balance-sheet exposures weighted according to their credit, market, and operational risk, forming the denominator of regulatory capital ratios. Under the Basel framework, riskier exposures attract higher weights, so banks must hold proportionally more capital against them. RWA links the composition of a bank's portfolio to its minimum capital requirements and overall solvency.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:capital-adequacy",
      "label": "Capital Adequacy"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:operational-risk",
        "label": "Operational Risk"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      },
      {
        "@id": "urn:ngm:class:basel-committee-on-banking-supervision",
        "label": "Basel Committee on Banking Supervision"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:operational-risk",
        "label": "Operational Risk"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:basel-committee-on-banking-supervision",
        "label": "Basel Committee on Banking Supervision"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:rwa",
      "label": "RWA"
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
  - Risk-weighted assets (RWA) are a bank's assets and off-balance-sheet exposures weighted according to their credit, market, and operational risk, forming the denominator of regulatory capital ratios. Under the Basel framework, riskier exposures attract higher weights, so banks must hold proportionally more capital against them. RWA links the composition of a bank's portfolio to its minimum capital requirements and overall solvency.
  - [[Capital Adequacy]] [[Basel III]] [[Risk Management]] [[Operational Risk]]
- ### Overview
  - Risk-weighted assets translate a bank's heterogeneous exposures into a common risk-adjusted scale.
  - Capital ratios such as the common equity Tier 1 ratio are computed as qualifying capital divided by RWA.
  - Weights can be set by standardised regulator-prescribed tables or by approved internal models.
- ### Key aspects
  - Credit-risk weights reflect the probability and severity of borrower default.
  - Market-risk and operational-risk components extend RWA beyond lending exposures.
  - Standardised and internal-ratings-based approaches offer alternative weighting methodologies.
  - RWA is the denominator that converts capital held into a regulatory capital ratio.
- ### Applications
  - Determining a bank's minimum regulatory capital under the Basel framework.
  - Supervisory assessment of solvency and resilience to losses.
  - Portfolio and balance-sheet optimisation to manage capital efficiency.
- ### Relationships
  - partOf:: [[Capital Adequacy]]
  - requires:: [[Capital Adequacy]]
  - requires:: [[Risk Management]]
  - dependsOn:: [[Risk Assessment]]
  - dependsOn:: [[Operational Risk]]
  - standardizedBy:: [[Basel III]]
  - standardizedBy:: [[Basel Committee on Banking Supervision]]
  - supports:: [[Regulatory Compliance]]
  - supports:: [[Financial Regulation]]
  - uses:: [[Risk Assessment]]
  - enables:: [[Capital Adequacy]]
  - relatedTo:: [[Operational Risk]]
  - relatedTo:: [[Risk Management]]
  - relatedTo:: [[Financial Regulation]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
