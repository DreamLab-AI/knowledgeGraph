public:: true

# Impact Assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:impact-assessment",
  "@type": "Page",
  "title": "Impact Assessment",
  "vc:slug": "impact-assessment",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:impact-assessment",
  "@type": "Class",
  "label": "Impact Assessment",
  "definition": "Impact assessment is a structured process for evaluating the likely effects of a policy, project, technology or decision before it is adopted, and for monitoring effects once implemented. It identifies affected stakeholders, weighs benefits against harms and risks, and informs decisions on whether and how to proceed, with mitigations where necessary. Domain-specific variants include environmental, privacy, data-protection and algorithmic impact assessments.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
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
    "requires": [
      {
        "@id": "urn:ngm:class:stakeholder-analysis",
        "label": "Stakeholder Analysis"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:policy-framework",
        "label": "Policy Framework"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation"
      },
      {
        "@id": "urn:ngm:class:algorithmic-accountability",
        "label": "Algorithmic Accountability"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:policy-framework",
        "label": "Policy Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:change-management",
        "label": "Change Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      },
      {
        "@id": "urn:ngm:class:privacy-impact-assessment",
        "label": "Privacy Impact Assessment"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
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
  - Impact assessment is a structured process for evaluating the likely effects of a policy, project, technology or decision before it is adopted, and for monitoring effects once implemented. It identifies affected stakeholders, weighs benefits against harms and risks, and informs decisions on whether and how to proceed, with mitigations where necessary. Domain-specific variants include environmental, privacy, data-protection and algorithmic impact assessments.
  - Related: [[Governance]] [[Stakeholder Analysis]] [[Risk Assessment]] [[Policy Framework]]
- ### Overview
  - Impact assessment operationalises accountability by forcing decision-makers to articulate, before acting, who and what may be affected and how. The process typically scopes the intervention, identifies and consults stakeholders, analyses potential positive and negative consequences across dimensions such as economy, environment, rights and society, and proposes mitigations. Findings are documented for scrutiny and revisited through monitoring once the intervention is live.
- ### Key aspects
  - Scoping the intervention and its boundaries
  - Stakeholder identification and consultation
  - Benefit, harm and risk analysis
  - Mitigation and alternatives appraisal
  - Documentation, transparency and review
  - Domain variants: environmental, privacy, algorithmic
- ### Applications
  - Privacy and data-protection impact assessments
  - Algorithmic and AI system impact reviews
  - Environmental impact assessments for projects
  - Regulatory and policy ex-ante appraisal
  - Change management for organisational decisions
- ### Relationships
  - subClassOf:: [[Governance]]
  - hasPart:: [[Stakeholder Analysis]]
  - hasPart:: [[Risk Assessment]]
  - requires:: [[Stakeholder Analysis]]
  - requires:: [[Risk Assessment]]
  - uses:: [[Policy Framework]]
  - uses:: [[Risk Assessment]]
  - supports:: [[Regulation]]
  - supports:: [[Algorithmic Accountability]]
  - implements:: [[Policy Framework]]
  - enables:: [[Change Management]]
  - dependsOn:: [[Governance]]
  - relatedTo:: [[AI Regulation]]
  - relatedTo:: [[Privacy Impact Assessment]]
  - bridgesTo:: [[Governance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
