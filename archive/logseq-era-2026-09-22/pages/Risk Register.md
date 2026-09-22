public:: true

# Risk Register

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:risk-register",
  "@type": "Page",
  "title": "Risk Register",
  "vc:slug": "risk-register",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-register",
  "@type": "Class",
  "label": "Risk Register",
  "definition": "A risk register is a structured record that captures identified risks together with their description, likelihood, impact, ownership, mitigation actions and current status. It serves as the central artefact of a risk management process, enabling organisations to track, prioritise and report on risks over time. The register supports governance by making risk exposure visible and accountable to decision-makers.",
  "domain": "governance",
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
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:risk-mitigation",
        "label": "Risk Mitigation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:risk-management-framework",
        "label": "Risk Management Framework"
      },
      {
        "@id": "urn:ngm:class:enterprise-risk-management",
        "label": "Enterprise Risk Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:threat-modelling",
        "label": "Threat Modelling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:privacy-impact-assessment",
        "label": "Privacy Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:nist-cybersecurity-framework",
        "label": "NIST Cybersecurity Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
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
  - A risk register is a structured record that captures identified risks together with their description, likelihood, impact, ownership, mitigation actions and current status. It serves as the central artefact of a risk management process, enabling organisations to track, prioritise and report on risks over time. The register supports governance by making risk exposure visible and accountable to decision-makers.
  - Related concepts: [[Risk Management]] [[Risk Assessment]] [[Risk Mitigation]] [[Risk Management Framework]] [[Compliance]]
- ### Overview
  - A risk register operationalises risk management by turning abstract concerns into a tracked, prioritised inventory. Each entry typically records a risk identifier, description, cause, likelihood and impact scores, a calculated risk rating, an assigned owner, planned and implemented controls, and a review date. Maintained throughout a project or organisational lifecycle, the register feeds governance reporting, audit evidence and board-level oversight.
- ### Key aspects
  - Structured entries capturing likelihood, impact and risk rating
  - Clear ownership and accountability for each identified risk
  - Mitigation and contingency actions with tracked status
  - Periodic review cadence keeping the register current
  - Aggregation and reporting to support governance oversight
- ### Applications
  - Project and programme risk tracking
  - Enterprise and operational risk management
  - Information-security and cyber-risk governance
  - Regulatory compliance and audit evidence
  - Board and committee risk reporting
- ### Relationships
  - subClassOf:: [[Risk Management]]
  - partOf:: [[Risk Management]]
  - hasPart:: [[Risk Assessment]]
  - hasPart:: [[Risk Mitigation]]
  - dependsOn:: [[Risk Management Framework]]
  - dependsOn:: [[Enterprise Risk Management]]
  - uses:: [[Threat Modelling]]
  - supports:: [[Governance Framework]]
  - supports:: [[Compliance]]
  - supports:: [[Audit]]
  - relatedTo:: [[Privacy Impact Assessment]]
  - relatedTo:: [[NIST Cybersecurity Framework]]
  - enables:: [[Governance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
