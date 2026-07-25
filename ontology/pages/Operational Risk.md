public:: true

# Operational Risk

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:operational-risk",
  "@type": "Page",
  "title": "Operational Risk",
  "vc:slug": "operational-risk",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:operational-risk",
  "@type": "Class",
  "label": "Operational Risk",
  "definition": "Operational risk is the risk of loss resulting from inadequate or failed internal processes, people and systems, or from external events. It encompasses fraud, human error, system failures, legal and compliance breaches, and disruptions such as cyber-attacks or natural disasters, but excludes strategic and reputational risk in its narrow Basel definition. Managing it relies on controls, monitoring, capital allocation and resilience planning.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:risk-management",
      "label": "Risk Management"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:enterprise-risk-management",
        "label": "Enterprise Risk Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:operational-resilience",
        "label": "Operational Resilience"
      },
      {
        "@id": "urn:ngm:class:business-continuity",
        "label": "Business Continuity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:market-risk",
        "label": "Market Risk"
      },
      {
        "@id": "urn:ngm:class:credit-risk",
        "label": "Credit Risk"
      },
      {
        "@id": "urn:ngm:class:supply-chain-risk-management",
        "label": "Supply Chain Risk Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:operational-resilience",
        "label": "Operational Resilience"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance-risk-compliance",
        "label": "Governance Risk Compliance"
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
  - Operational Risk is a key concept in the finance domain.
  - Related foundational concepts: [[Risk Management]] [[Enterprise Risk Management]] [[Operational Resilience]] [[Compliance]] [[Basel III]].
  - Operational risk is the risk of loss resulting from inadequate or failed internal processes, people and systems, or from external events. It encompasses fraud, human error, system failures, legal and compliance breaches, and disruptions such as cyber-attacks or natural disasters, but excludes strategic and reputational risk in its narrow Basel definition. Managing it relies on controls, monitoring, capital allocation and resilience planning.
- ### Overview
  - Operational risk gained formal prominence with Basel II's capital treatment and remains central to financial-institution governance. Firms quantify it through loss-event data, scenario analysis and key risk indicators, and mitigate it through internal controls, segregation of duties, business continuity and resilience programmes. It increasingly overlaps with cyber and third-party risk.
- ### Key aspects
  - Loss categories: process, people, systems and external events.
  - Quantification via loss data, scenarios and key risk indicators.
  - Internal controls, segregation of duties and audit.
  - Regulatory capital treatment under Basel frameworks.
  - Operational resilience and business continuity planning.
- ### Applications
  - Regulatory capital and risk reporting in banks.
  - Control design and assurance across business processes.
  - Cyber, fraud and third-party risk management.
  - Resilience and continuity planning for critical services.
- ### Relationships
  - subClassOf:: [[Risk Management]]
  - partOf:: [[Enterprise Risk Management]]
  - dependsOn:: [[Operational Resilience]]
  - dependsOn:: [[Business Continuity]]
  - relatedTo:: [[Market Risk]]
  - relatedTo:: [[Credit Risk]]
  - relatedTo:: [[Supply Chain Risk Management]]
  - supports:: [[Capital Adequacy]]
  - supports:: [[Compliance]]
  - requires:: [[Audit]]
  - requires:: [[Fraud Detection]]
  - standardizedBy:: [[Basel III]]
  - enables:: [[Operational Resilience]]
  - bridgesTo:: [[Governance Risk Compliance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
