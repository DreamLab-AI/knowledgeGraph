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
  "definition": "A systematic, independent examination of records, systems, processes, or controls carried out by a qualified party to assess their accuracy, completeness, and conformance with applicable standards, regulations, or policies. Audits generate structured, documented evidence that supports accountability, risk management, and informed decision-making by management, stakeholders, and regulators. The discipline spans financial, operational, information-security, algorithmic, and sustainability domains, each governed by domain-specific professional standards and methodologies. Audit outputs — opinions, findings, and recommendations — are foundational instruments of organisational governance and public trust.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:accountability-mechanism", "label": "Accountability Mechanism"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"},
      {"@id": "urn:ngm:class:audit-log", "label": "Audit Log"},
      {"@id": "urn:ngm:class:audit-mechanism", "label": "Audit Mechanism"},
      {"@id": "urn:ngm:class:audit-opinion", "label": "Audit Opinion"},
      {"@id": "urn:ngm:class:audit-finding", "label": "Audit Finding"},
      {"@id": "urn:ngm:class:audit-report", "label": "Audit Report"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"},
      {"@id": "urn:ngm:class:trust", "label": "Trust"},
      {"@id": "urn:ngm:class:regulatory-reporting", "label": "Regulatory Reporting"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:independence", "label": "Independence"},
      {"@id": "urn:ngm:class:professional-judgement", "label": "Professional Judgement"},
      {"@id": "urn:ngm:class:evidence", "label": "Evidence"},
      {"@id": "urn:ngm:class:documentation", "label": "Documentation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:internal-controls", "label": "Internal Controls"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"},
      {"@id": "urn:ngm:class:corporate-governance", "label": "Corporate Governance"},
      {"@id": "urn:ngm:class:esg-reporting", "label": "ESG Reporting"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:international-standards-on-auditing", "label": "International Standards on Auditing"},
      {"@id": "urn:ngm:class:iso-iec-27001", "label": "ISO/IEC 27001"},
      {"@id": "urn:ngm:class:cobit", "label": "COBIT"},
      {"@id": "urn:ngm:class:soc-2", "label": "SOC 2"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:inspection", "label": "Inspection"},
      {"@id": "urn:ngm:class:review", "label": "Review"},
      {"@id": "urn:ngm:class:monitoring", "label": "Monitoring"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fraud-detection", "label": "Fraud Detection"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:zero-trust", "label": "Zero Trust"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:algorithmic-auditing", "label": "Algorithmic Auditing"},
      {"@id": "urn:ngm:class:smart-contract-audit", "label": "Smart Contract Audit"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:assurance-engagement", "label": "Assurance Engagement"}
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
  - An [[Audit]] is a systematic, independent examination of an organisation's records, systems, processes, or controls carried out by a qualified party to assess their accuracy, completeness, and conformance with applicable standards. Audit outputs — structured opinions, findings, and recommendations — are foundational instruments of [[Governance]], providing the verified evidence upon which [[Accountability]], [[Compliance]], and [[Trust]] depend. The discipline encompasses financial, operational, information-security, algorithmic, and sustainability audit types, each governed by domain-specific professional methodologies and standards bodies.

- ### Overview
  - Auditing as a formal discipline emerged from the need for independent verification that recorded facts correspond to economic reality. The separation of ownership from management in joint-stock companies during the 19th century created an acute accountability gap, which the modern public accounting profession was established to fill.
  - Landmark legislation — the UK Companies Act 1844, the US Securities Exchange Act 1934, and the Sarbanes-Oxley Act 2002 — progressively expanded audit scope from simple ledger verification to comprehensive internal-control assessment.
  - A canonical audit lifecycle consists of three stages:
    - **Planning** — scope definition, materiality thresholds, risk assessment, and engagement-team assignment.
    - **Fieldwork** — evidence collection through inspection of documents, observation of processes, inquiry of personnel, and analytical procedures over large datasets.
    - **Reporting** — forming and communicating an opinion (unqualified, qualified, adverse, or disclaimer of opinion) alongside a management letter of findings and recommendations.
  - Auditors exercise [[Professional Judgement]] and must maintain [[Independence]] both in fact and in appearance to preserve the credibility of their conclusions.
  - The audit ecosystem distinguishes three pillars:
    - **External audit** — licensed public accounting firms providing statutory opinions on financial statements.
    - **Internal audit** — in-house functions aligned to IIA standards, assessing operational efficiency, [[Risk Management]] effectiveness, and internal-control design.
    - **Specialist third-party assessment** — cybersecurity assessors, sustainability verifiers, algorithmic auditors, and blockchain auditors.

- ### Key Components
  - **[[Audit Trail]]** — the chronological, tamper-evident record of transactions and system events that provides the raw material for audit fieldwork. A well-designed audit trail satisfies completeness, integrity, and non-repudiation requirements.
  - **[[Audit Log]]** — machine-generated structured records (often in syslog, CEF, or OCSF formats) capturing who did what, when, and from where. Logs underpin [[Zero Trust]] architectures and are mandatory artefacts in [[ISO/IEC 27001]] certification.
  - **[[Audit Mechanism]]** — the procedural, technical, and organisational means by which evidence is gathered, sampled, and evaluated, including statistical sampling methodologies, data analytics tools, and confirmation procedures.
  - **[[Audit Opinion]]** — the formal conclusion expressing whether financial statements present a true and fair view (financial audit) or whether controls meet a defined standard (IT/security audit). Opinions carry legal weight under securities law.
  - **[[Audit Finding]]** — a documented control deficiency or exception identified during fieldwork, classified by severity (significant deficiency, material weakness, observation) and paired with a root-cause analysis.
  - **[[Audit Report]]** — the final deliverable summarising scope, methodology, findings, and conclusions. Public-company auditor reports are filed with regulators and published in annual reports.
  - **[[Internal Controls]]** — the control framework that auditors evaluate; designs include preventative, detective, and corrective controls across financial, operational, and IT domains.
  - **[[Risk Assessment]]** — the pre-fieldwork process of identifying where material misstatement or control failure is most likely, enabling auditors to concentrate resources on highest-risk areas.
  - **[[Evidence]]** — the sufficiency and appropriateness of information gathered to support audit conclusions; governed by the AICPA's AU-C 500 and ISA 500 standards.
  - **[[Documentation]]** — working papers that record the audit plan, evidence gathered, procedures performed, and conclusions reached; subject to retention requirements (typically 7 years).

- ### Audit Types
  - **Financial Statement Audit** — examination of whether an entity's financial statements are presented fairly in accordance with GAAP, IFRS, or another applicable framework. Mandatory for listed companies and most charities.
  - **Internal Audit** — ongoing, risk-based activity conducted by an in-house team aligned to the IIA's International Professional Practices Framework (IPPF). Covers controls, operations, ethics, and strategy.
  - **IT / Information Security Audit** — assessment of information-system controls, access management, change management, and data integrity. Frameworks include [[COBIT]], [[ISO/IEC 27001]], and NIST SP 800-53.
  - **[[SOC 2]] Examination** — AICPA attestation on the design and operating effectiveness of service-organisation controls over security, availability, processing integrity, confidentiality, and privacy. Critical for SaaS providers.
  - **Tax Audit** — review by a tax authority of an entity's tax returns and supporting records to verify correct computation and payment of tax liabilities.
  - **Operational Audit** — evaluation of whether business processes achieve their objectives efficiently and effectively; distinct from financial audit in focusing on performance rather than financial accuracy.
  - **Environmental / Sustainability Audit** — verification of [[ESG Reporting]] disclosures and environmental-management systems against standards such as ISO 14001 and the forthcoming ISSB (IFRS S1/S2) assurance requirements.
  - **[[Algorithmic Auditing]]** — emerging practice of examining AI/ML model behaviour, training data, and decision outputs for bias, accuracy, explainability, and regulatory compliance. Mandated by the EU AI Act for high-risk systems.
  - **[[Smart Contract Audit]]** — specialist security review of blockchain-based contract code prior to deployment, checking for reentrancy vulnerabilities, logic errors, and economic attack vectors.
  - **Forensic Audit** — adversarial investigation combining audit and legal-evidence standards to detect and quantify fraud, corruption, or financial misconduct.

- ### Applications and Use Cases
  - **Statutory financial reporting** — all publicly listed companies are required by securities regulators to publish externally audited financial statements, enabling capital markets to allocate capital on the basis of verified information.
  - **Regulatory examination** — prudential supervisors (the PRA, ECB, Federal Reserve) conduct on-site examinations of banks and insurers to verify capital adequacy, liquidity, and credit-risk models.
  - **Supply-chain assurance** — manufacturers audit tier-1 and tier-2 suppliers for compliance with quality (ISO 9001), labour, and environmental standards, reducing supply-chain [[Risk Management]] exposure.
  - **Cloud and SaaS procurement** — enterprise customers require [[SOC 2]] Type II reports and [[ISO/IEC 27001]] certificates from cloud service providers before onboarding, making audit a commercial prerequisite.
  - **AI governance** — organisations subject to the EU AI Act must commission conformity assessments and third-party audits of high-risk AI systems, integrating [[AI Governance]] with classical audit methodology.
  - **Blockchain and DeFi** — decentralised protocols commission [[Smart Contract Audit]]s from specialist firms before mainnet launch; post-launch continuous monitoring tools automate anomaly detection at the transaction level.
  - **Public-sector accountability** — supreme audit institutions (the UK National Audit Office, the US GAO, the European Court of Auditors) conduct value-for-money and performance audits of government programmes.
  - **Internal fraud prevention** — internal audit functions implement continuous control monitoring using data-analytics platforms to detect anomalous transactions indicative of [[Fraud Detection]] scenarios in near-real time.
  - **ESG and sustainability** — investors and regulators require third-party assurance of corporate sustainability disclosures to prevent greenwashing, creating rapid growth in sustainability audit services aligned to ISSB standards.

- ### Mechanisms and Methods
  - **Sampling** — statistical and judgemental sampling techniques enable auditors to draw conclusions about a population from a representative subset. Statistical sampling (attribute and variables sampling) supports quantified error projections; judgemental sampling focuses on high-risk items.
  - **Analytical procedures** — ratio analysis, trend analysis, and regression modelling over financial or operational data to identify unexpected fluctuations that signal control failures or misstatement.
  - **Walkthrough** — end-to-end tracing of a single transaction through the accounting or operational system to confirm that controls operate as documented.
  - **Test of controls** — procedures that evaluate whether a preventative or detective control operates effectively; distinguishes design effectiveness (is the control appropriate?) from operating effectiveness (does it work in practice?).
  - **Substantive testing** — direct verification of transaction amounts, balances, or disclosures, typically through vouching (tracing recorded amounts back to source documents) or confirmations (direct correspondence with third parties such as banks or debtors).
  - **Data analytics and continuous auditing** — automated extraction and analysis of full populations of transactions using tools such as ACL/Galvanize, IDEA, or custom Python/SQL pipelines, enabling 100% coverage and real-time exception reporting.
  - **AI-assisted audit** — emerging use of machine-learning models to classify journal-entry risk, flag anomalous vendor relationships, or predict audit-risk scores, enhancing auditor capacity and coverage.

- ### Relationships
  - hasPart:: [[Audit Trail]]
  - hasPart:: [[Audit Log]]
  - hasPart:: [[Audit Mechanism]]
  - hasPart:: [[Audit Opinion]]
  - hasPart:: [[Audit Finding]]
  - hasPart:: [[Audit Report]]
  - enables:: [[Compliance]]
  - enables:: [[Accountability]]
  - enables:: [[Transparency]]
  - enables:: [[Trust]]
  - enables:: [[Regulatory Reporting]]
  - requires:: [[Independence]]
  - requires:: [[Professional Judgement]]
  - requires:: [[Evidence]]
  - requires:: [[Documentation]]
  - dependsOn:: [[Internal Controls]]
  - dependsOn:: [[Risk Assessment]]
  - supports:: [[Governance]]
  - supports:: [[Risk Management]]
  - supports:: [[Corporate Governance]]
  - supports:: [[ESG Reporting]]
  - standardizedBy:: [[International Standards on Auditing]]
  - standardizedBy:: [[ISO/IEC 27001]]
  - standardizedBy:: [[COBIT]]
  - standardizedBy:: [[SOC 2]]
  - contrastsWith:: [[Inspection]]
  - contrastsWith:: [[Review]]
  - contrastsWith:: [[Monitoring]]
  - relatedTo:: [[Fraud Detection]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Zero Trust]]
  - bridges-to:: [[Algorithmic Auditing]]
  - bridges-to:: [[Smart Contract Audit]]
  - bridges-to:: [[AI Governance]]

- ### Standards and Context
  - **International Standards on Auditing (ISA)** — issued by the International Auditing and Assurance Standards Board (IAASB), these standards (ISA 200–810) govern the conduct of external financial-statement audits globally and are adopted or adapted by over 120 jurisdictions.
  - **PCAOB Standards** — the Public Company Accounting Oversight Board sets US auditing standards for audits of SEC-registered companies, including the critical AS 2201 standard on integrated audits of internal controls over financial reporting (mandated by Sarbanes-Oxley Section 404).
  - **IIA Standards** — the Institute of Internal Auditors' International Professional Practices Framework governs internal audit activities, including the Global Internal Audit Standards (2024 revision).
  - **[[COBIT]]** — Control Objectives for Information and Related Technologies, published by ISACA; provides a comprehensive IT governance and control framework used for IT audit scoping and maturity assessment.
  - **[[ISO/IEC 27001]]** — the international standard for information-security management systems; its Annex A controls are widely used as audit criteria for IT security assessments.
  - **[[SOC 2]]** — AICPA's Service and Organisation Controls framework; Type I reports address control design; Type II reports cover 6–12-month operating effectiveness, providing cloud customers with third-party assurance.
  - **EU AI Act (2024)** — mandates conformity assessments and, for high-risk AI systems, third-party audits before market placement, establishing [[AI Governance]] and [[Algorithmic Auditing]] as regulated audit domains.
  - **ISSB IFRS S1/S2** — the International Sustainability Standards Board's climate and general sustainability disclosure standards, driving demand for sustainability assurance aligned to ISAE 3000.
  - **ISAE 3000** — the International Standard on Assurance Engagements for non-financial assurance, providing the methodological basis for sustainability, [[ESG Reporting]], and other non-financial audit work.
  - Regulatory oversight bodies include the Financial Reporting Council (UK), PCAOB (US), COFRAC (France), and the European Securities and Markets Authority (ESMA), each setting quality-control and inspection regimes for statutory auditors.

- ### Provenance
  - sources:: IAASB International Standards on Auditing; IIA Global Internal Audit Standards; ISACA COBIT 2019; AICPA SOC 2 criteria; EU AI Act Title III; ISSB IFRS S1/S2
  - updated:: 2026-06-13
