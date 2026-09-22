public:: true

# Auditability

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:auditability",
  "@type": "Page",
  "title": "Auditability",
  "vc:slug": "auditability",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:auditability",
  "@type": "Class",
  "label": "Auditability",
  "definition": "Auditability is the property of a system, process, or record that allows an independent party to examine and verify its actions, decisions, and state against expected behaviour or policy. It depends on complete, tamper-evident records — logs, audit trails, and provenance — that establish who did what, when, and why, enabling accountability and compliance review. Auditability is a foundational governance requirement for trustworthy financial, blockchain, and AI systems.",
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
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:traceability",
        "label": "Traceability"
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
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:model-transparency",
        "label": "Model Transparency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:permissioned-blockchain",
        "label": "Permissioned Blockchain"
      },
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
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
	- [[Auditability]] is the property that lets an independent reviewer verify a system's actions and state against policy, a cornerstone of [[Governance]].
	- It rests on tamper-evident [[Audit Trail]]s and [[Provenance]] records that capture who did what and when.
- ### Overview
	- A system is auditable when its behaviour can be reconstructed and checked after the fact from reliable evidence.
	- This requires durable, complete, and ideally tamper-evident records spanning actions, decisions, and data lineage.
	- Auditability turns abstract policy into verifiable practice, supporting both internal assurance and external regulatory review.
- ### Key aspects
	- Completeness: every relevant event is recorded.
	- Integrity: records are protected against undetected alteration.
	- Traceability: actions can be linked to actors, inputs, and outcomes via [[Traceability]].
	- Accessibility: auditors can retrieve and interpret the evidence.
- ### Applications
	- Financial reporting and statutory audit.
	- Immutable transaction histories in [[Permissioned Blockchain]] networks.
	- Documenting AI decisions and training data for [[Conformity Assessment]].
	- Security review backed by [[Access Control]] and logging.
- ### Relationships
	- hasPart:: [[Audit Trail]]
	- hasPart:: [[Provenance]]
	- requires:: [[Traceability]]
	- requires:: [[Transparency]]
	- enables:: [[Accountability]]
	- enables:: [[Compliance]]
	- supports:: [[Governance Framework]]
	- supports:: [[Regulatory Compliance]]
	- uses:: [[Monitoring]]
	- partOf:: [[Governance]]
	- contrastsWith:: [[Model Transparency]]
	- relatedTo:: [[Permissioned Blockchain]]
	- relatedTo:: [[Conformity Assessment]]
	- relatedTo:: [[Access Control]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
