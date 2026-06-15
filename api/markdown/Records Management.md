public:: true

# Records Management

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:records-management",
  "@type": "Page",
  "title": "Records Management",
  "vc:slug": "records-management",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:records-management",
  "@type": "Class",
  "label": "Records Management",
  "definition": "Records management is the systematic control of an organisation's records throughout their lifecycle — from creation and capture through classification, storage and use, to retention, archiving and eventual disposal. It applies policies and standards, notably ISO 15489, to ensure that records remain authentic, reliable and accessible for as long as they are required for business, legal and regulatory purposes. Effective records management supports accountability, compliance and efficient information governance.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:information-governance",
      "label": "Information Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:information-governance",
        "label": "Information Governance"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-archive",
        "label": "Digital Archive"
      },
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:retention-policy",
        "label": "Retention Policy"
      },
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:retention-policy",
        "label": "Retention Policy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:information-governance",
        "label": "Information Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "standardizedBy": [
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
  - [[Information Governance]]
  - [[Digital Archive]]
  - [[Retention Policy]]
  - [[Compliance]]
  - Records Management is defined within the [[Information Governance]] area of the standards domain.
- ### Overview
  - Records management treats records as evidence of activity and decision, distinct from transient working documents. A record once captured must preserve its content, context and structure so that it can be trusted later. The discipline is governed by retention schedules that determine how long each class of record is kept and when it is destroyed or transferred to a permanent archive, and by metadata that makes records discoverable and demonstrably authentic. It thus underpins legal defensibility and regulatory compliance across sectors.
- ### Key aspects
  - Records lifecycle from capture and classification through use, retention and disposal.
  - Retention schedules that prescribe how long each record class is preserved and when destroyed.
  - Metadata capture ensuring authenticity, context and discoverability of records.
  - Standards alignment, principally ISO 15489 for records management practice.
  - Disposition control distinguishing destruction from transfer to a permanent digital archive.
- ### Applications
  - Public-sector and government recordkeeping for accountability and freedom-of-information.
  - Regulated industries such as finance and healthcare meeting statutory retention duties.
  - Litigation readiness and legal hold through defensible records control.
  - Enterprise content management integrating records policy into document workflows.
- ### Relationships
  - subClassOf:: [[Information Governance]]
  - partOf:: [[Information Governance]]
  - partOf:: [[Data Governance]]
  - relatedTo:: [[Digital Archive]]
  - relatedTo:: [[Metadata]]
  - supports:: [[Compliance]]
  - supports:: [[Audit Trail]]
  - uses:: [[Retention Policy]]
  - uses:: [[Metadata]]
  - requires:: [[Retention Policy]]
  - enables:: [[Compliance]]
  - enables:: [[Regulatory Compliance]]
  - implements:: [[Information Governance]]
  - dependsOn:: [[Metadata]]
  - contrastsWith:: [[Data Governance]]
  - standardizedBy:: [[Standards]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
