public:: true

# Macroprudential Policy

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:macroprudential-policy",
  "@type": "Page",
  "title": "Macroprudential Policy",
  "vc:slug": "macroprudential-policy",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:macroprudential-policy",
  "@type": "Class",
  "label": "Macroprudential Policy",
  "definition": "Macroprudential policy is a regulatory approach aimed at safeguarding the stability of the financial system as a whole rather than the soundness of individual institutions, addressing systemic risk that arises from interconnections, common exposures, and procyclical behaviour. It deploys instruments such as countercyclical capital buffers, leverage limits, and stress testing to limit the build-up of vulnerabilities and to enhance resilience to shocks. It complements microprudential supervision and monetary policy in promoting financial stability.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "supports": [
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      },
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:prudential-regulation",
        "label": "Prudential Regulation"
      },
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fsb",
        "label": "FSB"
      },
      {
        "@id": "urn:ngm:class:g20",
        "label": "G20"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
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
  - [[Macroprudential Policy]] protects the financial system as a whole from [[Systemic Risk]], rather than focusing on single institutions.
  - It uses instruments such as countercyclical buffers, leverage limits, and [[Stress Testing]] to curb the build-up of vulnerabilities.
  - It is a pillar of [[Financial Regulation]] complementing [[Monetary Policy]] and microprudential supervision.
- ### Overview
  - Systemic crises arise from interconnections, correlated exposures, and procyclical credit and leverage cycles that individual-institution oversight can miss.
  - Macroprudential policy targets these system-wide externalities, leaning against the cycle to reduce both the probability and severity of crises.
  - Authorities monitor aggregate indicators of risk and adjust capital, liquidity, and lending standards accordingly.
  - International bodies coordinate frameworks to limit regulatory arbitrage across jurisdictions.
- ### Key aspects
  - **Countercyclical capital buffers**: requiring more capital in booms to absorb losses in downturns.
  - **Borrower-based measures**: loan-to-value and debt-to-income limits dampening credit excess.
  - **Stress testing**: assessing resilience of the system to adverse scenarios.
  - **Systemic surcharges**: higher requirements for institutions whose failure would be most disruptive.
- ### Applications
  - Limiting credit and asset-price bubbles.
  - Strengthening bank capital and liquidity buffers ahead of shocks.
  - Reducing contagion across interconnected institutions.
  - Coordinating cross-border stability frameworks.
- ### Relationships
  - supports:: [[Financial Stability]]
  - supports:: [[Risk Management]]
  - hasPart:: [[Stress Testing]]
  - hasPart:: [[Capital Adequacy]]
  - implements:: [[Financial Regulation]]
  - implements:: [[Prudential Regulation]]
  - implements:: [[Basel III]]
  - requires:: [[Systemic Risk]]
  - standardizedBy:: [[FSB]]
  - standardizedBy:: [[G20]]
  - relatedTo:: [[Monetary Policy]]
  - relatedTo:: [[Financial Stability]]
- ### Provenance
  - updated:: 2026-06-15
