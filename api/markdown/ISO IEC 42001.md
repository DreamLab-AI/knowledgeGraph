public:: true
alias:: ISO/IEC 42001

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
  "definition": "ISO/IEC 42001:2023 is the first international management system standard specifically designed for artificial intelligence, published by ISO/IEC Joint Technical Committee 1, Subcommittee 42, establishing requirements for an AI Management System (AIMS) that organisations use to responsibly develop, provide, or use AI-based products and services. It follows the Annex SL high-level structure shared with ISO 9001 and ISO 27001, enabling seamless integration with existing management frameworks through a Plan-Do-Check-Act cycle covering context, leadership, planning, support, operation, performance evaluation, and improvement. The normative Annex A provides a reference control set addressing data governance, transparency, human oversight, algorithmic accountability, and AI supply-chain management, from which organisations select controls according to their risk profile. Certification by accredited third-party audit bodies offers independent assurance of AI governance maturity and serves as a documented compliance aid for regulations such as the EU AI Act.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:ai-management-system", "label": "AI Management System"},
      {"@id": "urn:ngm:class:plan-do-check-act", "label": "Plan-Do-Check-Act"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:algorithmic-accountability", "label": "Algorithmic Accountability"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:ai-system-impact-assessment", "label": "AI System Impact Assessment"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:human-oversight", "label": "Human Oversight"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:iso-9001", "label": "ISO 9001"},
      {"@id": "urn:ngm:class:iso-iec-27001", "label": "ISO IEC 27001"},
      {"@id": "urn:ngm:class:iso-iec-27701", "label": "ISO IEC 27701"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:iso-iec-jtc1-sc42", "label": "ISO IEC JTC1 SC42"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:eu-ai-act", "label": "EU AI Act"},
      {"@id": "urn:ngm:class:nist-ai-rmf", "label": "NIST AI RMF"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:iso-iec-23894", "label": "ISO IEC 23894"},
      {"@id": "urn:ngm:class:ieee-7000", "label": "IEEE 7000"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:third-party-audit", "label": "Third-Party Audit"},
      {"@id": "urn:ngm:class:continuous-improvement", "label": "Continuous Improvement"},
      {"@id": "urn:ngm:class:ai-supply-chain-management", "label": "AI Supply Chain Management"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:aims-standard", "label": "AIMS Standard"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - ISO/IEC 42001:2023 is the first international [[Management System Standard]] dedicated entirely to [[Artificial Intelligence]], establishing requirements for an [[AI Management System]] (AIMS) that organisations deploy to responsibly develop, provide, or use AI-based products and services. Published by [[ISO IEC JTC1 SC42]] — the joint technical committee covering AI standardisation — the standard adopts the Annex SL high-level structure that aligns it structurally with [[ISO 9001]] (quality management) and [[ISO IEC 27001]] (information security), enabling integration rather than duplication of governance machinery. It addresses the full AI lifecycle through a [[Plan-Do-Check-Act]] cycle, normative [[Data Governance]] requirements, [[Human Oversight]] obligations, and a selectable Annex A control set, while supporting demonstrated [[Regulatory Compliance]] with instruments such as the [[EU AI Act]].

- ### Overview
  - ISO/IEC 42001:2023 emerged from the recognition that existing management system standards — while mature for quality, environment, and security — lacked domain-specific coverage of [[Artificial Intelligence]] risks, including bias, opacity, and systemic harm. [[ISO IEC JTC1 SC42]] developed it over several years, drawing on earlier technical reports and guidance documents (ISO/IEC TR 24028, ISO/IEC TR 24029, etc.) to formalise controls at the management system level.
  - The standard is structured around ten clauses:
    - Clause 1–3: Scope, normative references, and terms
    - Clause 4: Context of the organisation — understanding the AI environment, stakeholders, and scope of the AIMS
    - Clause 5: Leadership — top management commitment, AI policy, and roles
    - Clause 6: Planning — AI risk management, objectives, and control selection from Annex A
    - Clause 7: Support — resources, competence, awareness, communication, and documented information
    - Clause 8: Operation — operational planning, [[AI System Impact Assessment]], and AI system lifecycle processes
    - Clause 9: Performance evaluation — monitoring, internal audit, and management review
    - Clause 10: Improvement — nonconformity, corrective action, and [[Continuous Improvement]]
  - Annex A (normative) lists 38 controls across 9 domains (organisational policies, AI system lifecycle, data for AI, third-party AI, responsible AI by design, transparency, human oversight, AI system safety, and AI system security) from which organisations select applicable controls and document justification for exclusions in a Statement of Applicability — mirroring the Annex A / SoA pattern from [[ISO IEC 27001]].
  - Annex B (informative) provides guidance on how the Annex A controls can be implemented, supporting smaller organisations or those new to AI governance.

- ### Key Components
  - **AI Management System (AIMS)** — the organisational framework of policies, processes, and controls governing the organisation's AI activities; analogous to an [[Information Security Management System]] under [[ISO IEC 27001]]. See [[AI Management System]].
  - **AI System Impact Assessment** — a mandatory documented process (Clause 8) requiring organisations to identify and evaluate potential harms of an [[AI System]] to individuals, groups, and society before and during deployment. Related to [[Algorithmic Impact Assessment]] and [[Risk Assessment]].
  - **Annex A Controls** — 38 normative controls grouped by domain:
    - Organisational policies for AI
    - AI system lifecycle controls (development, testing, deployment, decommission)
    - [[Data Governance]] for AI (data quality, data provenance, dataset documentation)
    - Third-party AI system management ([[AI Supply Chain Management]])
    - Responsible AI by design ([[Responsible AI]] principles embedded in development)
    - [[Transparency]] and explainability controls
    - [[Human Oversight]] mechanisms
    - AI system safety
    - AI system security (interface with [[ISO IEC 27001]])
  - **Statement of Applicability (SoA)** — a document listing selected controls, justifications, and implementation status, enabling auditors and stakeholders to scope the AIMS.
  - **AI Policy** — a top-management-approved policy articulating the organisation's approach to responsible AI, analogous to an Information Security Policy.
  - **Roles and Responsibilities** — the standard requires clear assignment of AI-related roles, supporting [[Algorithmic Accountability]] at the organisational level.
  - **Continual Improvement Cycle** — mandatory PDCA cycles connecting performance metrics to corrective action, embedding [[Continuous Improvement]] into AI governance.

- ### Applications and Use Cases
  - **Enterprise AI Governance** — large enterprises developing or deploying [[Machine Learning]] models or [[Large Language Models]] use ISO/IEC 42001 certification to demonstrate governance maturity to boards, investors, and customers.
  - **Regulatory Compliance** — organisations subject to the [[EU AI Act]] (particularly providers of high-risk AI systems under Annex III) use the standard's documented controls and third-party audit trail as evidence of compliance. The European Commission has signalled intent to reference ISO/IEC 42001 as a harmonised standard.
  - **Procurement and Supply Chain** — buyers of AI-powered software or services require supplier certification as a due-diligence gate, driving adoption across the [[AI Supply Chain Management]] ecosystem.
  - **Financial Services and Insurance** — regulated entities use the AIMS framework to satisfy AI governance expectations from prudential supervisors (EBA, PRA, FCA) and align with model risk management guidance.
  - **Healthcare AI** — medical device manufacturers incorporating AI (e.g., [[Computer Vision]] diagnostic tools) combine ISO/IEC 42001 with ISO 13485 (medical devices) and IEC 62304 (software lifecycle) for comprehensive regulatory coverage.
  - **Public Sector** — government agencies procuring or deploying AI for citizen services use certification to satisfy public accountability obligations and align with national AI strategies.
  - **SMEs and Startups** — Annex B guidance and the scalable design allow smaller AI companies to adopt core controls proportionate to their risk, creating a credible governance signal for enterprise customers.
  - **Integration with ISO 27001** — organisations holding [[ISO IEC 27001]] certification extend their existing ISMS scope to cover AI-specific risks, sharing audit schedules, document management systems, and risk registers.

- ### Relationships
  - implements:: [[AI Management System]]
  - implements:: [[Plan-Do-Check-Act]]
  - supports:: [[Responsible AI]]
  - supports:: [[AI Risk Management]]
  - supports:: [[Algorithmic Accountability]]
  - supports:: [[Transparency]]
  - requires:: [[AI System Impact Assessment]]
  - requires:: [[Data Governance]]
  - requires:: [[Human Oversight]]
  - relatedTo:: [[AI Regulation]]
  - relatedTo:: [[Compliance Framework]]
  - relatedTo:: [[ISO 9001]]
  - relatedTo:: [[ISO IEC 27001]]
  - relatedTo:: [[ISO IEC 27701]]
  - standardizedBy:: [[AI Governance Framework]]
  - standardizedBy:: [[ISO IEC JTC1 SC42]]
  - bridges-to:: [[EU AI Act]]
  - bridges-to:: [[NIST AI RMF]]
  - contrastsWith:: [[ISO IEC 23894]]
  - contrastsWith:: [[IEEE 7000]]
  - enables:: [[Third-Party Audit]]
  - enables:: [[Continuous Improvement]]
  - enables:: [[AI Supply Chain Management]]

- ### Standards and Context
  - **ISO/IEC JTC1 Subcommittee 42** is the body responsible for all ISO/IEC AI standards, including the ISO/IEC 42001 family and companion documents such as:
    - ISO/IEC 22989:2022 — AI concepts and terminology
    - ISO/IEC 23894:2023 — AI risk management guidance (informative companion to 42001's normative requirements)
    - ISO/IEC TR 24028, 24029, 24368 — trustworthiness, robustness, and ethical concerns technical reports
    - ISO/IEC 42005 (in development) — AI system impact assessment guidance
    - ISO/IEC 42006 (in development) — requirements for bodies providing audit and certification of AIMS
  - **Relationship with EU AI Act** — the [[EU AI Act]] requires providers of high-risk AI systems to implement quality management and risk management systems. ISO/IEC 42001 is expected to be cited as a harmonised standard under the Act once the European standards body (CEN/CENELEC) publishes the EN version, allowing certification to create a presumption of conformity for covered obligations.
  - **Relationship with NIST AI RMF** — the US [[NIST AI RMF]] (2023) is a voluntary framework for AI risk management. Mapping documents from NIST and ISO show significant overlap in Govern, Map, Measure, and Manage functions with ISO/IEC 42001 clauses and Annex A controls, supporting organisations operating in both US and EU jurisdictions.
  - **Relationship with ISO/IEC 27001** — the Annex SL alignment means the AIMS can be integrated with the [[Information Security Management System]], sharing scope definition, risk treatment processes, internal audit programmes, and management review cadence.
  - **Certification ecosystem** — accredited certification bodies (BSI, DNV, SGS, Bureau Veritas, TÜV) offer AIMS certification audits, with Stage 1 (documentation review) and Stage 2 (implementation audit) mirroring the ISO 27001 certification model. Surveillance audits occur annually; recertification every three years.
  - **Sector-specific extensions** — ISO/IEC JTC1 SC42 is developing sector-specific AI governance standards (e.g., for health, finance) that reference 42001 as the management system baseline, analogous to how ISO 27799 extends 27001 for healthcare.

- ### Provenance
  - sources:: ISO/IEC 42001:2023 standard text; ISO/IEC JTC1 SC42 published roadmap; BSI and NIST mapping publications
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
