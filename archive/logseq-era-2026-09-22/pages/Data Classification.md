public:: true

# Data Classification
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-classification", "@type":"Page", "title":"Data Classification", "vc:slug":"data-classification", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-classification",
  "@type":"Class",
  "label":"Data Classification",
  "definition":"Data classification is the process of organising data into categories based on its sensitivity, value and regulatory obligations, so that appropriate handling, protection and access controls can be applied consistently. Typical schemes assign labels such as public, internal, confidential and restricted, which then drive encryption, retention, sharing and disposal rules. It is a foundational activity in data governance and information security, enabling organisations to prioritise protection of their most sensitive information and to demonstrate regulatory compliance.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-governance","label":"Data Governance"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:metadata-management","label":"Metadata Management"},
      {"@id":"urn:ngm:class:data-lifecycle","label":"Data Lifecycle"}
    ],
    "partOf":[{"@id":"urn:ngm:class:data-governance-framework","label":"Data Governance Framework"}],
    "requires":[
      {"@id":"urn:ngm:class:data-governance","label":"Data Governance"},
      {"@id":"urn:ngm:class:metadata-management","label":"Metadata Management"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:access-control","label":"Access Control"},
      {"@id":"urn:ngm:class:data-loss-prevention","label":"Data Loss Prevention"},
      {"@id":"urn:ngm:class:data-protection","label":"Data Protection"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"},
      {"@id":"urn:ngm:class:data-privacy","label":"Data Privacy"}
    ],
    "dependsOn":[{"@id":"urn:ngm:class:data-quality","label":"Data Quality"}],
    "standardizedBy":[{"@id":"urn:ngm:class:gdpr","label":"GDPR"}],
    "uses":[{"@id":"urn:ngm:class:data-stewardship","label":"Data Stewardship"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:data-lifecycle","label":"Data Lifecycle"},
      {"@id":"urn:ngm:class:data-validation","label":"Data Validation"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Data classification sorts information into sensitivity tiers so that protection, retention and sharing rules follow automatically. It is a core activity of [[Data Governance]] and feeds directly into [[Access Control]], [[Data Protection]] and [[Regulatory Compliance]].
- ### Overview
- A classification scheme defines a small set of labels, commonly public, internal, confidential and restricted, and a procedure for assigning them. Labels are attached as [[Metadata Management]] attributes and then enforced by downstream controls, so the same datum is encrypted, masked or shared according to its tier.
- Classification can be manual, policy-driven or automated using pattern matching and machine learning to detect personal or regulated data at scale. Accuracy depends on [[Data Quality]] and on clear ownership through [[Data Stewardship]].
- ### Key aspects
- A defined label taxonomy aligned to business and legal risk.
- Assignment procedures: manual tagging, rule-based detection and automated discovery.
- Propagation of labels through the [[Data Lifecycle]] as data is copied and transformed.
- Enforcement hooks into [[Access Control]] and [[Data Loss Prevention]].
- Periodic review and reclassification as sensitivity changes.
- ### Applications
- Driving encryption and masking decisions by sensitivity tier.
- Targeting [[Data Loss Prevention]] controls at the highest-risk data.
- Demonstrating [[GDPR]] and other [[Regulatory Compliance]] obligations.
- Prioritising protection budgets toward restricted information.
- ### Relationships
- hasPart:: [[Metadata Management]]
- hasPart:: [[Data Lifecycle]]
- partOf:: [[Data Governance Framework]]
- requires:: [[Data Governance]]
- requires:: [[Metadata Management]]
- enables:: [[Access Control]]
- enables:: [[Data Loss Prevention]]
- enables:: [[Data Protection]]
- supports:: [[Regulatory Compliance]]
- supports:: [[Data Privacy]]
- dependsOn:: [[Data Quality]]
- standardizedBy:: [[GDPR]]
- uses:: [[Data Stewardship]]
- relatedTo:: [[Data Lifecycle]]
- relatedTo:: [[Data Validation]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
