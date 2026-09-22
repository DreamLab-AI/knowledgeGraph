public:: true

# Third Party Auditing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:third-party-auditing",
  "@type": "Page",
  "title": "Third Party Auditing",
  "vc:slug": "third-party-auditing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:third-party-auditing",
  "@type": "Class",
  "label": "Third Party Auditing",
  "definition": "Third-party auditing is the independent examination of an organisation's systems, processes, controls, or claims by an external party that has no stake in the outcome, in order to provide credible assurance to stakeholders. By separating the auditor from the audited, it strengthens trust, accountability, and regulatory compliance beyond what self-assessment can offer. In technology and AI governance it covers security audits, conformity assessment, and verification of model or supply-chain claims.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:audit",
      "label": "Audit"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
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
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      },
      {
        "@id": "urn:ngm:class:certification",
        "label": "Certification"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:attestation",
        "label": "Attestation"
      },
      {
        "@id": "urn:ngm:class:verification",
        "label": "Verification"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:security-audit",
        "label": "Security Audit"
      },
      {
        "@id": "urn:ngm:class:penetration-testing",
        "label": "Penetration Testing"
      },
      {
        "@id": "urn:ngm:class:algorithmic-accountability",
        "label": "Algorithmic Accountability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
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
- Third-party auditing is independent external examination providing assurance under [[Governance]] frameworks.
- It is a form of [[Audit]] distinguished by auditor independence.
- It generates [[Accountability]] and [[Trust]] and can lead to [[Certification]].
- It implements [[Conformity Assessment]] and supports [[Regulatory Compliance]].
- ### Overview
- The defining feature is independence: the auditor has no interest in the audited entity's success, raising the credibility of findings.
- It complements internal audit and self-attestation, which stakeholders may discount as self-interested.
- In technology contexts it spans security audits, AI conformity assessment, and verification of supply-chain or model claims.
- Outputs typically feed certification, regulatory filings, or public transparency reports.
- ### Key aspects
- Independence and absence of conflict of interest.
- Evidence gathering against defined standards and criteria.
- Reliance on robust audit trails and transparent records.
- Reporting that supports certification and accountability.
- ### Applications
- Security and penetration-testing engagements by external firms.
- Conformity assessment of regulated AI and high-risk systems.
- Supply-chain assurance and verification of provenance claims.
- Financial and quality-management certification audits.
- ### Relationships
- partOf:: [[Audit]]
- partOf:: [[Governance]]
- requires:: [[Audit Trail]]
- requires:: [[Transparency]]
- enables:: [[Accountability]]
- enables:: [[Trust]]
- enables:: [[Certification]]
- implements:: [[Conformity Assessment]]
- uses:: [[Attestation]]
- uses:: [[Verification]]
- supports:: [[Regulatory Compliance]]
- supports:: [[Quality Assurance]]
- supports:: [[AI Governance]]
- relatedTo:: [[Security Audit]]
- relatedTo:: [[Penetration Testing]]
- relatedTo:: [[Algorithmic Accountability]]
- bridgesTo:: [[Standards]]
- ### Provenance
- updated:: 2026-06-15
