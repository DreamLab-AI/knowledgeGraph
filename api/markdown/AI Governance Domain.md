public:: true
alias:: AIGovernance, AIGovernanceDomain

# AI Governance Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4b6f5be8d723493d74c0c26aa5381ea3182677dc2c6ac4f5137194781e21cc24",
  "@type": "Page",
  "vc:slug": "ai-governance-domain",
  "title": "AI Governance Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:model-documentation",
      "vc:label": "Model Documentation"
    },
    {
      "@id": "urn:visionflow:linked:algorithmic-accountability",
      "vc:label": "Algorithmic Accountability"
    },
    {
      "@id": "urn:visionflow:linked:fairness-assessment",
      "vc:label": "Fairness Assessment"
    },
    {
      "@id": "urn:visionflow:linked:audit-trail",
      "vc:label": "Audit Trail"
    },
    {
      "@id": "urn:visionflow:linked:regulation-domain",
      "vc:label": "Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety-domain",
      "vc:label": "AI Safety Domain"
    },
    {
      "@id": "urn:visionflow:linked:compliance-domain",
      "vc:label": "Compliance Domain"
    },
    {
      "@id": "urn:visionflow:linked:responsible-deployment",
      "vc:label": "Responsible Deployment"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-conformance",
      "vc:label": "Regulatory Conformance"
    },
    {
      "@id": "urn:visionflow:linked:stakeholder-trust",
      "vc:label": "Stakeholder Trust"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence-domain",
      "vc:label": "Artificial Intelligence Domain"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-42001-2023",
      "vc:label": "ISO/IEC 42001:2023"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23894-2023",
      "vc:label": "ISO/IEC 23894:2023"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Governance Domain"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-governance-domain",
  "@type": "Class",
  "label": "AI Governance Domain",
  "definition": "The AI Governance Domain covers the policies, processes and controls that direct the responsible development and deployment of artificial intelligence. Its scope includes risk management, accountability, transparency, fairness assessment and regulatory alignment. It is a sub-area of the Artificial Intelligence Domain concerned with oversight rather than technique. The boundary excludes the technical mitigation of failure modes, which is treated under the AI Safety Domain.",
  "domain": "governance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:artificial-intelligence-domain",
    "label": "Artificial Intelligence Domain"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:model-documentation",
        "label": "Model Documentation"
      },
      {
        "@id": "urn:ngm:class:algorithmic-accountability",
        "label": "Algorithmic Accountability"
      },
      {
        "@id": "urn:ngm:class:fairness-assessment",
        "label": "Fairness Assessment"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:impact-assessment",
        "label": "Impact Assessment"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:artificial-intelligence-domain",
        "label": "Artificial Intelligence Domain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulation-domain",
        "label": "Regulation Domain"
      },
      {
        "@id": "urn:ngm:class:ai-safety-domain",
        "label": "AI Safety Domain"
      },
      {
        "@id": "urn:ngm:class:compliance-domain",
        "label": "Compliance Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:responsible-deployment",
        "label": "Responsible Deployment"
      },
      {
        "@id": "urn:ngm:class:regulatory-conformance",
        "label": "Regulatory Conformance"
      },
      {
        "@id": "urn:ngm:class:stakeholder-trust",
        "label": "Stakeholder Trust"
      },
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:organisational-policy",
        "label": "Organisational Policy"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:iso-iec-42001-2023",
        "label": "ISO/IEC 42001:2023"
      },
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:eu-ai-act",
        "label": "EU AI Act"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ai-safety-domain",
        "label": "AI Safety Domain"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:security-domain",
        "label": "Security Domain"
      },
      {
        "@id": "urn:ngm:class:standards-domain",
        "label": "Standards Domain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      },
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      },
      {
        "@id": "urn:ngm:class:human-oversight",
        "label": "Human Oversight"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:responsible-ai-governance",
      "label": "Responsible AI Governance"
    },
    {
      "@id": "urn:ngm:class:ai-management-system",
      "label": "AI Management System"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ai-governance-domain:0b519e9788df",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4b6f5be8d723493d74c0c26aa5381ea3182677dc2c6ac4f5137194781e21cc24"
  },
  "vc:resolutions": [
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:linked:risk-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Documentation]]",
      "resolved": "urn:visionflow:linked:model-documentation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Algorithmic Accountability]]",
      "resolved": "urn:visionflow:linked:algorithmic-accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fairness Assessment]]",
      "resolved": "urn:visionflow:linked:fairness-assessment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audit Trail]]",
      "resolved": "urn:visionflow:linked:audit-trail",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulation Domain]]",
      "resolved": "urn:visionflow:linked:regulation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Safety Domain]]",
      "resolved": "urn:visionflow:linked:ai-safety-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance Domain]]",
      "resolved": "urn:visionflow:linked:compliance-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Responsible Deployment]]",
      "resolved": "urn:visionflow:linked:responsible-deployment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Conformance]]",
      "resolved": "urn:visionflow:linked:regulatory-conformance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stakeholder Trust]]",
      "resolved": "urn:visionflow:linked:stakeholder-trust",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence Domain]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC 42001:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-42001-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23894:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-23894-2023",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The AI Governance Domain covers the policies, processes and controls that direct the responsible development and deployment of artificial intelligence. Its scope includes risk management, accountability, transparency, fairness assessment and regulatory alignment. It is a sub-area of the Artificial Intelligence Domain concerned with oversight rather than technique. The boundary excludes the technical mitigation of failure modes, which is treated under the AI Safety Domain.

- ### Semantic Classification
  - owl-class:: aigov:AIGovernanceDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[AI Safety Domain]], [[Compliance Domain]], [[Regulation Domain]]
  - has-part:: [[Risk Management]], [[Model Documentation]], [[Algorithmic Accountability]], [[Fairness Assessment]], [[Audit Trail]]
  - requires:: [[Regulation Domain]], [[AI Safety Domain]], [[Compliance Domain]]
  - enables:: [[Responsible Deployment]], [[Regulatory Conformance]], [[Stakeholder Trust]]

- ### Content
  - The AI Governance Domain establishes how organisations steer artificial intelligence toward acceptable outcomes through defined roles, processes and controls. Its scope covers risk identification and management, documentation of models and data, accountability mechanisms and the assessment of fairness across affected groups. The boundary is organisational and procedural, so engineering interventions against specific failure modes belong to the AI Safety Domain.
  - Member concepts include Risk Management, Model Documentation, Algorithmic Accountability, Fairness Assessment and the Audit Trail. These draw on the Regulation Domain for external requirements, the AI Safety Domain for technical assurance and the Compliance Domain for verification of adherence.
  - The domain bridges to the AI Safety Domain at the boundary between policy and engineering, to the Compliance Domain for evidence of conformance, and to the Regulation Domain for the legal frameworks it must satisfy. It enables responsible deployment, regulatory conformance and the trust of stakeholders.

- ### Provenance
  - sources:: [[ISO/IEC 42001:2023]], [[ISO/IEC 23894:2023]]
  - migration-date:: 2026-05-29T00:00:00Z
