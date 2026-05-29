public:: true

# Audit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:audit",
  "@type": "Page",
  "vc:slug": "audit",
  "title": "Audit",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:audit",
  "@type": "Class",
  "label": "Audit",
  "definition": "A systematic, independent examination of records, systems, or processes to assess their accuracy, completeness, and compliance with applicable standards or regulations. Audits provide structured evidence for accountability by evaluating whether controls are operating effectively and reported information is reliable.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:accountability-mechanism", "label": "Accountability Mechanism"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"},
      {"@id": "urn:ngm:class:audit-log", "label": "Audit Log"},
      {"@id": "urn:ngm:class:audit-mechanism", "label": "Audit Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - An [[Audit]] is a systematic, independent examination of an organisation's records, systems, processes, or controls to determine whether they accurately reflect actual conditions and conform to established standards. Audits generate structured evidence that supports [[Accountability]] and enables informed decision-making by stakeholders, regulators, and management. They span financial, operational, information-security, and compliance domains, each with its own methodology and professional standards.

- ### Relationships
  - Audits produce and rely upon [[Audit Trail]] and [[Audit Log]] artefacts to reconstruct activity. The [[Audit Mechanism]] defines the procedural and technical means by which evidence is gathered. Successful audits directly enable [[Compliance]] with regulatory requirements and reinforce [[Accountability]] within [[Governance]] frameworks. They feed into [[Risk Management]] processes and contribute to organisational [[Transparency]].

- ### Content
  - Auditing as a formal discipline traces its origins to early double-entry bookkeeping and the merchant guilds of medieval Europe. The separation of ownership and management in joint-stock companies during the 19th century created an acute need for independent verification of financial statements, giving rise to the modern public accounting profession. Landmark legislation such as the UK Companies Act 1844 and, later, the US Sarbanes-Oxley Act 2002 codified audit requirements and expanded their scope from purely financial statements to internal controls over financial reporting.

  - A modern audit follows a structured methodology: planning (scope definition, risk assessment), fieldwork (evidence collection through inspection, observation, inquiry, and analytical procedures), and reporting (opinion formation and communication). Financial audits conform to International Standards on Auditing (ISA) or PCAOB standards. IT and information-security audits draw on frameworks such as COBIT and ISO/IEC 27001, examining logical access controls, change management, and data-integrity mechanisms. Internal audits, guided by the Institute of Internal Auditors (IIA) standards, assess operational efficiency and risk mitigation effectiveness.

  - The audit ecosystem encompasses external auditors (typically licensed public accounting firms), internal audit functions embedded within organisations, and specialist third-party assessors for domains such as cybersecurity, sustainability, and AI governance. Regulators including the Financial Conduct Authority, the SEC, and the PCAOB oversee public-company audits. Audit committees of corporate boards provide governance oversight of both internal and external audit activities. Peer reviews and quality-control inspections of audit firms further enforce professional standards.

  - In 2024–2025 the profession is adapting to continuous auditing enabled by automated data analytics and AI-assisted evidence evaluation, reducing reliance on periodic sampling in favour of near-real-time assurance. AI systems themselves are becoming audit subjects, with regulators and standards bodies developing methodologies for algorithmic auditing and model-risk review. The demand for sustainability and ESG assurance is rapidly growing, placing pressure on auditing standards setters to develop credible non-financial audit frameworks equivalent in rigour to financial statement auditing.