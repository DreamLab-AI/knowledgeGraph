public:: true

# Algorithmic Auditing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:algorithmic-auditing",
  "@type": "Page",
  "vc:slug": "algorithmic-auditing",
  "title": "Algorithmic Auditing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:algorithmic-auditing",
  "@type": "Class",
  "label": "Algorithmic Auditing",
  "definition": "Algorithmic auditing is the systematic evaluation of automated decision-making systems to assess their fairness, accuracy, transparency, and compliance with ethical and legal standards. It involves independent or internal review of training data, model architectures, outputs, and operational impacts. The discipline has emerged as a response to concerns about bias, discrimination, and opacity in AI-driven systems. Audits may be prospective, examining systems before deployment, or retrospective, investigating outcomes in production. Results are used to inform regulation, remediation, and public accountability.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-governance",
    "label": "AI Governance"
  },
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:algorithmic-accountability",
        "label": "Algorithmic Accountability"
      },
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      },
      {
        "@id": "urn:ngm:class:ai-fairness",
        "label": "AI Fairness"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Public Accountability"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      },
      {
        "@id": "urn:ngm:class:bias-detection-methods",
        "label": "Bias Detection Methods"
      },
      {
        "@id": "urn:ngm:class:counterfactual-analysis",
        "label": "Counterfactual Analysis"
      },
      {
        "@id": "urn:ngm:class:statistical-testing",
        "label": "Statistical Testing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:ai-governance-framework",
        "label": "AI Governance Framework"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      },
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-42001",
        "label": "ISO IEC 42001"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:self-certification",
        "label": "Self-Certification"
      },
      {
        "@id": "urn:ngm:class:black-box-ai",
        "label": "Black-Box AI"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security-audit",
        "label": "Security Audit"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ai-audit",
      "label": "AI Audit"
    },
    {
      "@id": "urn:ngm:class:automated-decision-system-audit",
      "label": "Automated Decision System Audit"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.75
}
```

- ### Definition
  - [[Algorithmic Auditing]] is the structured independent or internal assessment of [[Explainable AI]] systems and automated decision pipelines to verify compliance with [[AI Fairness]], legal obligations, and ethical norms, feeding findings into [[Responsible AI]] governance frameworks.
- ### Relationships
  - Algorithmic auditing is a core instrument of [[AI Governance]] and [[Algorithmic Accountability]], directly addressing [[Algorithmic Bias]] and informing [[AI Regulation]]. Auditors apply [[Bias Detection Methods]] and demand [[Explainable AI]] outputs to evaluate systems, and findings drive improvements governed under [[Responsible AI Principles]]. The practice supports [[Trustworthy AI]] certification and [[Accountability]] mechanisms at organisational and regulatory levels.
- ### Content
  - Algorithmic auditing encompasses a range of methodologies from documentation review and statistical disparity testing to adversarial probing and process walkthroughs. Auditors examine training datasets for representation gaps, probe model decision boundaries for protected-characteristic sensitivity, and scrutinise deployment pipelines for feedback loops that amplify bias over time.

  - The governance dimension is significant: many jurisdictions are moving toward mandatory audits for high-risk AI applications. The EU AI Act requires conformity assessments for high-risk systems, while sector regulators in finance, healthcare, and criminal justice are issuing audit guidance aligned with [[AI Regulation]] frameworks such as the [[NIST AI RMF]]. Audit findings must often be disclosed to regulators and, in some regimes, the public.

  - Technically, algorithmic audits leverage tools from [[Bias Detection Methods]], counterfactual analysis, and fairness-aware evaluation metrics such as equal opportunity, demographic parity, and calibration. They also rely on [[Explainable AI]] techniques—saliency maps, SHAP values, and LIME—to interpret individual predictions and aggregate model behaviour. Automated audit tooling is emerging to scale these assessments across large model ecosystems.

  - Organisational implementation requires independence, clear scope definition, and documented remediation workflows. Effective audits generate actionable reports tied to [[AI Ethics]] standards, feed into [[AI Governance Framework]] processes, and are logged in [[Audit Trail]] systems for legal defensibility. Third-party auditors provide independence but require sufficient access to proprietary systems, creating ongoing tension between commercial confidentiality and public accountability.
