public:: true

# Audit Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:audit-function",
  "@type": "Page",
  "vc:slug": "audit-function",
  "title": "Audit Function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:audit-function",
  "@type": "Class",
  "label": "Audit Function",
  "definition": "An organisational capability or dedicated unit responsible for the planning, execution, and reporting of audit activities within or on behalf of an enterprise. The audit function provides independent assurance over risk management, internal controls, and governance processes, acting as a critical third line of defence in enterprise risk frameworks.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:audit", "label": "Audit"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:audit-mechanism", "label": "Audit Mechanism"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"},
      {"@id": "urn:ngm:class:risk-management-framework", "label": "Risk Management Framework"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[Audit Function]] denotes the organised capacity within an enterprise, or provided by an external firm, that systematically examines processes, controls, and records to deliver independent assurance. It encompasses the people, methodologies, tools, and governance structures needed to conduct [[Audit]] activities effectively. Internal audit functions typically report to an audit committee and are guided by the Institute of Internal Auditors' International Professional Practices Framework (IPPF), while external audit functions operate under statutory or regulatory mandates.

- ### Relationships
  - The Audit Function relies on the [[Audit Mechanism]] for its procedural and technical instruments and produces [[Audit Trail]] records as evidence. It is a primary enabler of [[Compliance]] with regulatory obligations and of broader [[Accountability]] commitments. It operates within the [[Governance Framework]] and informs the [[Risk Management Framework]]. Transparent reporting of audit outcomes contributes to organisational [[Transparency]].

- ### Content
  - Internal audit as a structured organisational function emerged formally in the mid-20th century, with the founding of the Institute of Internal Auditors (IIA) in 1941 marking a professionalisation milestone. Initially focused on financial records verification, internal audit expanded through the 1980s and 1990s into operational auditing, IT auditing, and risk-based auditing methodologies. The COSO Internal Control–Integrated Framework (1992, updated 2013) and the Three Lines of Defence model became foundational reference architectures that positioned the audit function as an independent assurance provider.

  - The audit function operates across a lifecycle: annual risk assessments to prioritise engagements, fieldwork planning, evidence collection using data analytics and sampling, findings documentation, management responses, and periodic reporting to the board's audit committee. Technology-enabled continuous auditing now allows the function to monitor control effectiveness on an ongoing basis rather than relying exclusively on periodic point-in-time reviews. Audit management software platforms track findings, action plans, and remediation status, creating structured accountability loops.

  - In large enterprises the audit function typically subdivides into specialisations: financial and controls auditing, information-technology auditing, cybersecurity auditing, operational auditing, and, increasingly, ESG and sustainability auditing. External audit firms provide additional assurance over statutory financial statements and, via agreed-upon procedures engagements, targeted assessments of specific controls. Regulators impose independence requirements to prevent conflicts of interest between advisory and assurance roles within the same firm.

  - By 2025 the audit function is undergoing significant transformation driven by AI-assisted workpaper analysis, natural-language processing applied to contract and policy review, and automated anomaly detection over transactional data. These tools raise audit coverage whilst reducing manual effort. Simultaneously, boards are demanding AI-specific audit capabilities — assessing model governance, training-data lineage, and algorithmic bias — that require the function to recruit technologists and data scientists alongside traditional accountants and auditors.