public:: true

# Fundamental Rights Impact Assessment

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:fundamental-rights-impact-assessment",
  "@type": "Page",
  "title": "Fundamental Rights Impact Assessment",
  "vc:slug": "fundamental-rights-impact-assessment",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fundamental-rights-impact-assessment",
  "@type": "Class",
  "label": "Fundamental Rights Impact Assessment",
  "definition": "A fundamental rights impact assessment is a structured process for evaluating, before and during deployment, how a system, policy, or AI application may affect people's fundamental rights such as dignity, non-discrimination, privacy, and freedom of expression. It documents the context of use, identifies affected groups and potential harms, assesses risks, and defines mitigation and oversight measures. It has become a governance instrument for high-risk AI, complementing data protection impact assessments and broader risk assessment.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:impact-assessment",
      "label": "Impact Assessment"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:impact-assessment",
        "label": "Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-protection-impact-assessment",
        "label": "Data Protection Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:human-rights",
        "label": "Human Rights"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:stakeholder-engagement",
        "label": "Stakeholder Engagement"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:human-oversight",
        "label": "Human Oversight"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:algorithmic-accountability",
        "label": "Algorithmic Accountability"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ethics",
        "label": "Ethics"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      }
    ],
    "dependsOn": [
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
- A fundamental rights impact assessment is an [[Impact Assessment]] focused on effects on [[Human Rights]].
- It is a governance instrument within [[AI Governance]].
- It bridges to the [[Data Protection Impact Assessment]] while widening scope beyond privacy.
- It requires [[Risk Assessment]] and [[Stakeholder Engagement]].
- ### Overview
- The assessment examines how a system or policy could affect rights such as dignity, equality, privacy, and expression.
- It is performed before deployment and revisited as context changes, documenting affected groups and potential harms.
- It defines mitigations, oversight arrangements, and monitoring to manage residual risk.
- It has become a recognised governance step for high-risk AI systems.
- ### Key aspects
- Context analysis of where, how, and on whom a system will be used.
- Identification of affected groups and rights at stake.
- Risk evaluation and definition of proportionate mitigations.
- Oversight, transparency, and ongoing monitoring obligations.
- ### Applications
- Pre-deployment review of high-risk public-sector AI.
- Complementing data protection impact assessments for AI systems.
- Procurement and due-diligence gating for sensitive deployments.
- Documenting accountability for regulators and affected communities.
- ### Relationships
- partOf:: [[Impact Assessment]]
- partOf:: [[AI Governance]]
- bridgesTo:: [[Data Protection Impact Assessment]]
- bridgesTo:: [[Human Rights]]
- requires:: [[Risk Assessment]]
- requires:: [[Stakeholder Engagement]]
- requires:: [[Transparency]]
- enables:: [[Accountability]]
- enables:: [[Human Oversight]]
- supports:: [[Algorithmic Accountability]]
- supports:: [[Regulatory Compliance]]
- supports:: [[Risk Management]]
- uses:: [[Audit Trail]]
- relatedTo:: [[Ethics]]
- relatedTo:: [[Privacy]]
- relatedTo:: [[Governance Framework]]
- dependsOn:: [[Governance]]
- ### Provenance
- updated:: 2026-06-15
