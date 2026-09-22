public:: true

# Algorithmic Impact Assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:algorithmic-impact-assessment",
  "@type": "Page",
  "title": "Algorithmic Impact Assessment",
  "vc:slug": "algorithmic-impact-assessment",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:algorithmic-impact-assessment",
  "@type": "Class",
  "label": "Algorithmic Impact Assessment",
  "definition": "An algorithmic impact assessment is a structured governance process for evaluating the potential effects of an automated decision-making or artificial-intelligence system on individuals, groups and society before and during its deployment. It documents the system's purpose, data, risks to fairness, privacy and safety, and the mitigations and oversight controls in place, producing an auditable record for accountability. Modelled on data-protection and environmental impact assessments, it is increasingly mandated by AI regulation and procurement frameworks to ensure responsible and transparent use of algorithms.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance",
      "label": "AI Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:algorithmic-accountability",
        "label": "Algorithmic Accountability"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:stakeholder-engagement",
        "label": "Stakeholder Engagement"
      },
      {
        "@id": "urn:ngm:class:human-oversight",
        "label": "Human Oversight"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:bias",
        "label": "Bias"
      },
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      },
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:data-protection-impact-assessment",
        "label": "Data Protection Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:privacy-impact-assessment",
        "label": "Privacy Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:ai-impact-assessment",
        "label": "AI Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:compliance-framework",
        "label": "Compliance Framework"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:model-governance",
        "label": "Model Governance"
      },
      {
        "@id": "urn:ngm:class:impact-assessment",
        "label": "Impact Assessment"
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
  - An algorithmic impact assessment is a structured governance process for evaluating the potential effects of an automated decision-making or artificial-intelligence system on individuals, groups and society before and during its deployment. It documents the system's purpose, data, risks to fairness, privacy and safety, and the mitigations and oversight controls in place, producing an auditable record for accountability. Modelled on data-protection and environmental impact assessments, it is increasingly mandated by AI regulation and procurement frameworks to ensure responsible and transparent use of algorithms.
  - Related core concepts: [[AI Governance]] [[AI Ethics]] [[Algorithmic Accountability]] [[Risk Assessment]]
- ### Overview
  - An algorithmic impact assessment is a documented, repeatable evaluation of an automated system's risks and effects before and during deployment.
  - It mirrors data-protection and environmental impact assessments, producing an auditable record for accountability and oversight.
  - Public-sector procurement and emerging AI regulation increasingly require such assessments for high-risk systems.
- ### Key aspects
  - Scoping: documents the system's purpose, affected populations and decision context.
  - Risk analysis: identifies harms to fairness, privacy, safety and rights, including bias and opacity.
  - Mitigation and oversight: records controls such as human review, monitoring and redress mechanisms.
  - Stakeholder engagement: involves affected communities and domain experts to surface contextual risks.
- ### Applications
  - Governing automated decision-making in public services.
  - Demonstrating regulatory compliance for high-risk AI systems.
  - Informing procurement decisions for algorithmic tools.
  - Establishing accountability records for audits and appeals.
- ### Relationships
  - partOf:: [[AI Governance]]
  - implements:: [[Algorithmic Accountability]]
  - implements:: [[Accountability]]
  - implements:: [[Responsible AI]]
  - requires:: [[Transparency]]
  - requires:: [[Stakeholder Engagement]]
  - requires:: [[Human Oversight]]
  - uses:: [[Risk Assessment]]
  - uses:: [[Bias]]
  - uses:: [[Algorithmic Bias]]
  - uses:: [[Explainability]]
  - supports:: [[Regulatory Compliance]]
  - supports:: [[AI Regulation]]
  - supports:: [[Fairness]]
  - relatedTo:: [[AI Ethics]]
  - relatedTo:: [[Data Protection Impact Assessment]]
  - relatedTo:: [[Privacy Impact Assessment]]
  - relatedTo:: [[AI Impact Assessment]]
  - relatedTo:: [[Compliance Framework]]
  - relatedTo:: [[GDPR]]
  - relatedTo:: [[Model Governance]]
  - relatedTo:: [[Impact Assessment]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
