public:: true

# Audit Committee

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:audit-committee",
  "@type": "Page",
  "title": "Audit Committee",
  "vc:slug": "audit-committee",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:audit-committee",
  "@type": "Class",
  "label": "Audit Committee",
  "definition": "An audit committee is a sub-committee of an organisation's board of directors charged with overseeing financial reporting, internal controls, risk management, and the relationship with internal and external auditors. Composed primarily of independent non-executive directors, it provides assurance to the board and stakeholders on the integrity of financial statements and the effectiveness of control systems. The committee is a central pillar of corporate governance and regulatory compliance regimes.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance-structure",
      "label": "Governance Structure"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:governance-structure",
        "label": "Governance Structure"
      },
      {
        "@id": "urn:ngm:class:corporate-governance",
        "label": "Corporate Governance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:fiduciary-duty",
        "label": "Fiduciary Duty"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:stakeholder",
        "label": "Stakeholder"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:prudential-regulation",
        "label": "Prudential Regulation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:corporate-governance",
        "label": "Corporate Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
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
  - An audit committee is a board sub-committee within an organisation's [[Governance Structure]].
  - It oversees financial reporting, [[Risk Management]], and [[Compliance]].
  - It upholds [[Accountability]] and the board's [[Fiduciary Duty]] to [[Stakeholder]]s.
- ### Overview
  - Typically composed of independent non-executive directors with financial literacy.
  - Engages and evaluates both internal audit and the external auditor.
  - Mandated by governance codes and securities regulation in many jurisdictions.
- ### Key aspects
  - Oversight of the integrity of financial statements.
  - Review of internal control and risk-management effectiveness.
  - Auditor independence, appointment, and remuneration.
  - Whistleblowing arrangements and regulatory compliance monitoring.
- ### Applications
  - Listed-company governance and financial assurance.
  - Public-sector and charity oversight bodies.
  - Bank and insurer prudential governance.
  - Investor confidence and capital-market integrity.
- ### Relationships
  - partOf:: [[Governance Structure]]
  - partOf:: [[Corporate Governance]]
  - hasPart:: [[Compliance]]
  - requires:: [[Accountability]]
  - requires:: [[Fiduciary Duty]]
  - enables:: [[Risk Management]]
  - enables:: [[Compliance]]
  - supports:: [[Financial Stability]]
  - relatedTo:: [[Stakeholder]]
  - relatedTo:: [[Governance]]
  - relatedTo:: [[Prudential Regulation]]
  - dependsOn:: [[Corporate Governance]]
  - uses:: [[Risk Management]]
- ### Provenance
  - updated:: 2026-06-15
