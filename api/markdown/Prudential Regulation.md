public:: true

# Prudential Regulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:prudential-regulation",
  "@type": "Page",
  "title": "Prudential Regulation",
  "vc:slug": "prudential-regulation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:prudential-regulation",
  "@type": "Class",
  "label": "Prudential Regulation",
  "definition": "Prudential regulation is the body of supervisory rules and oversight aimed at ensuring the safety and soundness of individual financial institutions and the stability of the wider financial system. It sets requirements for capital adequacy, liquidity, governance and risk management, and grants supervisors powers to monitor, intervene and resolve failing firms. Microprudential measures protect depositors and counterparties of single firms, while macroprudential measures address risks to the system as a whole.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:financial-system",
        "label": "Financial System"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      },
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:regulatory-reporting",
        "label": "Regulatory Reporting"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
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
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:scenario-analysis",
        "label": "Scenario Analysis"
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
  - [[Prudential Regulation]] is the supervisory framework that safeguards the safety and soundness of [[Financial System]] participants and curbs threats to [[Financial Stability]].
  - It is a branch of [[Financial Regulation]] focused on solvency, liquidity and resilience rather than market conduct alone.
  - Core instruments include [[Capital Adequacy]] rules, [[Stress Testing]] and ongoing [[Risk Assessment]].
- ### Overview
  - Prudential supervision emerged from repeated banking crises, where the failure of individual firms cascaded into systemic disruption.
  - It distinguishes between microprudential policy (the resilience of single institutions) and macroprudential policy (the resilience of the system).
  - Supervisors authorise firms, set minimum standards, conduct periodic reviews, and hold powers of early intervention and orderly resolution.
  - The approach is risk-sensitive: institutions posing greater risk attract more capital, closer scrutiny and tighter constraints.
- ### Key aspects
  - Capital requirements ensure firms hold loss-absorbing buffers proportionate to their risk exposures.
  - Liquidity standards require firms to survive periods of funding stress without fire sales.
  - Governance and fit-and-proper rules constrain who may run regulated firms and how risk is managed internally.
  - Recovery and resolution planning ensures failing firms can be wound down without taxpayer bailouts.
  - Supervisory review processes layer judgement on top of quantitative minimums.
- ### Applications
  - Banking supervision under the Basel framework, implemented regionally through capital directives and rulebooks.
  - Insurance solvency regimes that match capital to underwriting and investment risk.
  - Designation and enhanced oversight of systemically important institutions.
  - Cross-border supervisory colleges coordinating oversight of international groups.
- ### Relationships
  - partOf:: [[Financial Regulation]]
  - partOf:: [[Financial System]]
  - hasPart:: [[Capital Adequacy]]
  - hasPart:: [[Stress Testing]]
  - requires:: [[Risk Assessment]]
  - requires:: [[Regulatory Reporting]]
  - enables:: [[Financial Stability]]
  - implements:: [[Basel III]]
  - supports:: [[Regulatory Compliance]]
  - dependsOn:: [[Central Bank]]
  - contrastsWith:: [[Systemic Risk]]
  - relatedTo:: [[Risk Management]]
  - relatedTo:: [[Scenario Analysis]]
- ### Provenance
  - updated:: 2026-06-15
