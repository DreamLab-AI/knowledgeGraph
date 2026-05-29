public:: true

# iso iec 42001
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7d21b7006e188e2435d049cbf6973645f8b09287cdb8ff6991638adcfbb5284a",
  "@type": "Page",
  "vc:slug": "iso-iec-42001",
  "title": "iso iec 42001",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iso-iec-42001",
  "@type": "Class",
  "label": "ISO IEC 42001",
  "definition": "ISO/IEC 42001:2023 is an international management system standard published by the ISO/IEC Joint Technical Committee 1, Subcommittee 42, specifying requirements for an AI Management System (AIMS) that organisations use to responsibly develop, provide, or use AI-based products and services. It follows the Annex SL high-level structure shared with ISO 9001 and ISO 27001, enabling integration with existing management frameworks, and covers risk management, AI system impact assessment, and continuous improvement of AI governance processes. Annex A provides a normative reference control set that organisations select from according to their AI risk profile.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - ISO/IEC 42001:2023 is an international management system standard published by the ISO/IEC Joint Technical Committee 1, Subcommittee 42, specifying requirements for an AI Management System (AIMS) that organisations use to responsibly develop, provide, or use AI-based products and services. It follows the Annex SL high-level structure shared with ISO 9001 and ISO 27001, enabling integration with existing management frameworks, and covers risk management, AI system impact assessment, and continuous improvement of AI governance processes. Annex A provides a normative reference control set that organisations select from according to their AI risk profile.

- ### Semantic Classification
  - owl-class:: iso-iec-42001:ISO IEC 42001
  - owl-role:: Concept

- ### Relationships
  - supports [[Responsible AI]]
  - supports [[AI Risk Management]]
  - relatedTo [[AI Regulation]]
  - relatedTo [[Compliance Framework]]
  - standardizedBy [[AI Governance Framework]]

- ### Content
  - ISO/IEC 42001 is the first international management system standard specifically designed for artificial intelligence, providing a structured, auditable, and certifiable framework for governing AI throughout its lifecycle. The standard is structured around ten clauses following the Plan-Do-Check-Act model familiar from ISO 9001 (quality) and ISO 27001 (information security), allowing organisations that already hold those certifications to extend existing systems rather than building anew.
  - Central to the standard is the AI system impact assessment, which requires organisations to identify and evaluate the potential harms of their AI systems to individuals, groups, and society before and during deployment. The normative Annex A controls address areas such as data governance, transparency, human oversight, algorithmic accountability, and supply-chain management for AI components. Organisations may select controls applicable to their risk profile rather than implementing the full set.
  - ISO/IEC 42001 is positioned as a compliance aid for organisations subject to the EU AI Act and similar national AI regulations, because its documented controls map to obligations in those legal frameworks. Accredited certification bodies offer third-party audits against the standard, providing customers and regulators with independent assurance of an organisation's AI governance maturity. The standard complements ISO/IEC 27001 for security and ISO/IEC 27701 for privacy.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
