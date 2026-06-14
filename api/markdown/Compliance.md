public:: true

# Compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:compliance",
  "@type": "Page",
  "vc:slug": "compliance",
  "title": "Compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:compliance",
  "@type": "Class",
  "label": "Compliance",
  "definition": "Compliance is the organisational practice of adhering to laws, regulations, standards, and internal policies that govern the conduct of systems, processes, and personnel. It encompasses the identification of applicable obligations, the implementation of controls to satisfy them, continuous monitoring to verify ongoing conformance, and documented evidence to demonstrate that conformance to internal and external stakeholders. Modern compliance programmes span regulatory domains including data protection, financial services, cybersecurity, environmental obligations, and increasingly AI-specific requirements.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"},
      {"@id": "urn:ngm:class:control", "label": "Control"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:audit", "label": "Audit"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"},
      {"@id": "urn:ngm:class:policy", "label": "Policy"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"},
      {"@id": "urn:ngm:class:trust", "label": "Trust"},
      {"@id": "urn:ngm:class:regulatory-approval", "label": "Regulatory Approval"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"},
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:regulation", "label": "Regulation"},
      {"@id": "urn:ngm:class:standard", "label": "Standard"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:grc-platform", "label": "GRC Platform"},
      {"@id": "urn:ngm:class:identity-and-access-management", "label": "Identity and Access Management"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:non-conformance", "label": "Non-Conformance"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ethics", "label": "Ethics"},
      {"@id": "urn:ngm:class:certification", "label": "Certification"},
      {"@id": "urn:ngm:class:reporting", "label": "Reporting"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
    {"@id": "urn:ngm:class:conformance", "label": "Conformance"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Compliance]] is the systematic practice of ensuring that an organisation's operations, technologies, and personnel conform to applicable laws, [[Regulation]]s, [[Standard]]s, and internal [[Policy|policies]]. It spans regulatory obligations such as [[GDPR]], [[ISO 27001]], and sector-specific mandates from bodies including the FCA, FDA, and SEC. Effective compliance programmes integrate [[Risk Assessment]], [[Audit]], and continuous [[Compliance Monitoring]] to maintain demonstrable conformance across the full lifecycle of a system or service, supported by immutable [[Audit Trail]]s and structured [[Control]]s. Compliance sits within the broader domain of [[Governance]] and is increasingly intersecting with [[AI Governance]] as AI-specific regulatory obligations emerge globally.

- ### Overview
  - Compliance as a formal discipline traces its modern form to post-war financial regulation, expanding dramatically through the 1990s and 2000s with the US Sarbanes-Oxley Act (2002), Basel II capital accords, and a wave of data-protection legislation in multiple jurisdictions.
  - The concept has since broadened to encompass environmental, health-and-safety, cybersecurity, and AI-specific requirements, reflecting the expanding reach of regulatory oversight into technology-intensive industries.
  - A core tension in compliance is between rule-based and principles-based approaches. Rule-based regimes specify precise obligations, enabling checklist compliance; principles-based regimes specify outcomes, requiring organisations to exercise judgement about how to achieve them.
  - Why it matters:
    - Failure to comply exposes organisations to financial penalties, reputational damage, operational suspensions, and criminal liability for responsible officers.
    - Well-designed compliance programmes reduce organisational risk and build [[Trust]] with customers, partners, and regulators.
    - In technology contexts, compliance underpins access to regulated markets — products cannot be sold in the EU without CE marking or in the US medical device market without FDA clearance.
  - The discipline is supported by a large professional ecosystem including compliance officers, data protection officers (DPOs), information security managers, and external auditors who provide independent assurance.
  - Non-compliance is not merely a legal risk — it signals to markets that an organisation cannot be trusted to uphold its obligations, directly affecting access to capital, insurance premiums, and partnership opportunities.
  - International coordination bodies such as the [[FATF]], the Basel Committee, and the IOSCO are increasingly aligning national requirements, reducing fragmentation but also raising the baseline obligations that every participant must meet.

- ### Key Components
  - **[[Policy]]** — documented statements of intent and rules that translate regulatory requirements into internal obligations binding on staff and systems.
  - **[[Control]]** — a specific safeguard or counter-measure implemented to satisfy one or more compliance obligations; controls may be technical (encryption, access logging), procedural (approval workflows), or physical (locked server rooms).
  - **[[Risk Assessment]]** — systematic identification and prioritisation of compliance gaps and threats, used to direct control investment and set audit scope.
  - **[[Audit]]** — periodic independent examination of evidence to determine whether controls are operating effectively and obligations are being met; results feed back into the compliance improvement cycle.
  - **[[Audit Trail]]** — immutable, time-stamped record of system events and user actions that provides the evidentiary foundation for demonstrating compliance to regulators and auditors.
  - **[[Compliance Framework]]** — a structured methodology that maps regulatory articles to specific controls; widely adopted examples include ISO 27001 (information security), SOC 2 (service organisation controls), NIST CSF (cybersecurity), and PCI DSS (payment card data).
  - **[[Compliance Monitoring]]** — ongoing automated and manual testing of controls to detect deviations before they become material non-conformances; increasingly delivered via continuous control monitoring (CCM) tooling.
  - **[[GRC Platform]]** — governance, risk, and compliance software that aggregates evidence, tracks control status, manages exceptions, and generates regulatory reports; examples include ServiceNow GRC, RSA Archer, and OneTrust.
  - **[[Reporting]]** — structured disclosure of compliance status to internal stakeholders (board, audit committee) and external stakeholders (regulators, clients, investors); mandatory in many regulated industries.
  - **[[Certification]]** — formal third-party attestation that an organisation or product meets a specified standard (e.g. ISO 27001 certification, SOC 2 Type II report).

- ### Mechanisms
  - **Control mapping** — translating each regulatory article or requirement clause into one or more technical or procedural controls, often visualised in a responsibility assignment matrix (RACI).
  - **Evidence collection** — gathering documentation, logs, screenshots, and attestations that demonstrate a control is operational; manual collection is increasingly replaced by automated evidence harvesting from cloud APIs.
  - **Gap analysis** — comparing the current control landscape against a target framework to identify missing or insufficient controls requiring remediation.
  - **Exception management** — formal process for recording, approving, and time-boxing deviations from a required control when implementation is temporarily infeasible.
  - **Regulatory horizon scanning** — tracking forthcoming legislation and standards changes to give advance notice of new obligations, allowing time for programme adjustment.
  - **Conformity assessment** — mandated under many product regulations (e.g. EU AI Act for high-risk AI systems) to verify that a product or service meets specified essential requirements before market placement.
  - **Third-party risk management** — assessing the compliance posture of suppliers, subprocessors, and business partners whose failures can create vicarious liability; includes questionnaire-based assessments and contractual data processing agreements under [[GDPR]].
  - **Incident management** — structured response to compliance breaches or near-misses, including mandatory notification to regulators (e.g. 72-hour breach notification under GDPR) and post-incident root-cause analysis to prevent recurrence.
  - **Training and awareness** — systematic programmes to ensure that all personnel understand their compliance obligations; required explicitly by many frameworks (ISO 27001 clause 7.3, GDPR Article 39).

- ### Compliance Lifecycle
  - Compliance operates as a continuous cycle rather than a point-in-time activity:
    - **Identify** — determine applicable regulations, standards, and contractual obligations relevant to the organisation's activities, jurisdictions, and sector.
    - **Assess** — conduct [[Risk Assessment]] and gap analysis against applicable frameworks to understand current posture.
    - **Design** — select and design [[Control]]s appropriate to the identified gaps and risk appetite, aligning with established control catalogues such as NIST SP 800-53 or ISO 27002.
    - **Implement** — deploy controls, update [[Policy|policies]] and procedures, assign ownership, and integrate controls into operational processes.
    - **Monitor** — operate [[Compliance Monitoring]] processes to detect deviations; use automated tooling where possible for continuous coverage.
    - **Report** — produce [[Reporting]] outputs for management and regulators demonstrating the state of compliance; engage external [[Audit]]ors for independent assurance.
    - **Improve** — feed audit findings, monitoring alerts, and regulatory changes back into the Identify and Assess phases to close the cycle.
  - This lifecycle mirrors the Plan-Do-Check-Act (PDCA) cycle from ISO management system standards, reflecting the maturity of compliance as a management discipline.

- ### Technology and Automation
  - Modern compliance programmes are increasingly technology-intensive, driven by the volume and complexity of obligations across multiple jurisdictions.
  - **[[GRC Platform]]s** such as ServiceNow GRC, RSA Archer, and OneTrust centralise control libraries, evidence, risk registers, and [[Reporting]], reducing reliance on spreadsheet-based programmes.
  - **[[Identity and Access Management]]** (IAM) systems enforce least-privilege access controls mandated by frameworks such as ISO 27001 and PCI DSS, and generate the access logs that form a core [[Audit Trail]] artefact.
  - **Data Loss Prevention (DLP)** tools enforce [[Data Protection]] policies by monitoring and blocking unauthorised data transfers, satisfying regulatory requirements to implement appropriate technical safeguards.
  - **Security Information and Event Management (SIEM)** platforms aggregate log data to detect anomalies and provide the centralised audit logging required by many cybersecurity compliance frameworks.
  - **AI-assisted compliance** is an emerging capability: large language models are being applied to regulatory change analysis, contract review for compliance clauses, and automated evidence classification — connecting compliance directly to the [[AI Governance]] domain.
  - **Regulatory technology (RegTech)** is a sub-sector of fintech focused specifically on automating compliance processes in financial services, covering transaction monitoring, KYC/AML screening, and regulatory reporting.

- ### Applications and Use Cases
  - **Financial services** — banks and payment processors comply with Basel III capital requirements, Anti-Money Laundering (AML) directives, MiFID II trading rules, and PCI DSS for card data, often under direct regulatory supervision with on-site examination.
  - **Healthcare and life sciences** — pharmaceutical manufacturers follow Good Manufacturing Practice (GMP), medical device makers comply with ISO 13485 and FDA 21 CFR Part 11 for electronic records, and health data holders comply with HIPAA (US) or NHS data security standards (UK).
  - **Data protection** — organisations processing personal data comply with GDPR in the EU/EEA, UK GDPR post-Brexit, CCPA/CPRA in California, and an expanding lattice of national data protection laws; [[Data Protection]] compliance requires appointing DPOs, maintaining Records of Processing Activities (RoPAs), and responding to data subject requests.
  - **Cybersecurity** — organisations in critical national infrastructure comply with NIS2 (EU), the Cyber Essentials scheme (UK), or sector-specific mandates; ISO 27001 and NIST CSF provide voluntary frameworks widely adopted as baseline.
  - **AI regulation** — the EU AI Act (2024) imposes tiered obligations on AI system providers and deployers based on risk classification; high-risk AI systems require conformity assessments, technical documentation, human oversight mechanisms, and post-market monitoring.
  - **Environmental and ESG** — companies comply with emissions reporting requirements (e.g. UK TCFD disclosures, EU CSRD), supply-chain due-diligence obligations (EU CSDD Directive), and voluntary ESG frameworks (GRI, SASB).
  - **Supply chain** — compliance with sanctions regimes, export control rules (EAR/ITAR), and supplier code-of-conduct requirements; increasingly automated via [[Supply Chain]] management platforms with embedded compliance checks.
  - **Blockchain and DeFi** — crypto-asset service providers comply with the EU MiCA Regulation and FATF Travel Rule requirements for virtual asset transfers; [[Smart Contract]] audit processes have emerged as a form of technical compliance assurance.

- ### Relationships
  - partOf:: [[Governance]]
  - requires:: [[Audit]]
  - requires:: [[Risk Assessment]]
  - requires:: [[Audit Trail]]
  - requires:: [[Policy]]
  - hasPart:: [[Compliance Framework]]
  - hasPart:: [[Compliance Monitoring]]
  - hasPart:: [[Control]]
  - enables:: [[Accountability]]
  - enables:: [[Trust]]
  - enables:: [[Regulatory Approval]]
  - dependsOn:: [[Governance Framework]]
  - dependsOn:: [[Data Protection]]
  - implements:: [[Regulation]]
  - implements:: [[Standard]]
  - uses:: [[GRC Platform]]
  - uses:: [[Identity and Access Management]]
  - supports:: [[Risk Management]]
  - supports:: [[Data Governance]]
  - contrastsWith:: [[Non-Conformance]]
  - bridges-to:: [[AI Governance]]
  - bridges-to:: [[Smart Contract]]
  - relatedTo:: [[Ethics]]
  - relatedTo:: [[Certification]]
  - relatedTo:: [[Reporting]]

- ### Standards and Context
  - **ISO/IEC 27001:2022** — the leading international standard for information security management systems (ISMS), widely used as a compliance framework for cybersecurity obligations.
  - **ISO 9001** — quality management systems standard; compliance with ISO 9001 is often a contractual requirement in manufacturing and service supply chains.
  - **ISO 13485** — quality management systems for medical devices; underpins regulatory compliance in the life sciences sector.
  - **NIST Cybersecurity Framework (CSF)** — voluntary US framework providing a common language for cybersecurity risk management; adopted as a baseline for many sector-specific regulations.
  - **PCI DSS** — Payment Card Industry Data Security Standard; mandatory for organisations that store, process, or transmit payment card data.
  - **SOC 2 (AICPA)** — service organisation control reports audited against the Trust Services Criteria; a standard due-diligence requirement for cloud service providers.
  - **GDPR (EU) 2016/679** — the foundational EU data protection regulation; extraterritorial reach makes it the de facto global baseline for personal data compliance.
  - **EU AI Act (2024)** — first comprehensive AI regulation establishing risk-based compliance obligations; sets global precedent for AI governance regulation.
  - **FATF Recommendations** — international anti-money laundering and counter-terrorism financing standards implemented by member states through national AML/CFT legislation.
  - **Basel III/IV** — international banking regulatory standards governing capital adequacy, liquidity, and leverage; implemented via national banking regulation.
  - Standards bodies active in this space: [[ISO]], [[NIST]], [[AICPA]], [[ENISA]], [[W3C]] (for web accessibility compliance), and national regulators including the ICO (UK), CNIL (France), BaFin (Germany), and FCA (UK).

- ### Design Considerations
  - **Proportionality** — compliance programmes should be scaled to the size, complexity, and risk profile of the organisation; a micro-enterprise faces different obligations from a global bank even under the same regulation.
  - **Controls inheritance** — in cloud-based architectures, cloud service providers satisfy a subset of compliance controls on behalf of customers via their own [[Certification]]s (e.g. AWS ISO 27001 certificate covers physical security); customers must understand the shared responsibility model to avoid assuming inherited coverage.
  - **Jurisdiction complexity** — multinational organisations must navigate overlapping and sometimes conflicting obligations; transfer of personal data between jurisdictions (e.g. EU–US data transfers post-Schrems II) requires specific legal mechanisms such as Standard Contractual Clauses or Binding Corporate Rules.
  - **Culture over checkbox** — regulators in mature jurisdictions distinguish between organisations with a genuine compliance culture and those pursuing box-ticking; a compliance culture is evidenced by board engagement, open incident reporting, and proactive regulatory engagement.
  - **Compliance debt** — analogous to technical debt, compliance debt accumulates when controls are deferred, exceptions are not closed, or programmes fail to track regulatory changes; high compliance debt increases enforcement risk and the cost of remediation.
  - **Integrated vs siloed programmes** — best practice aligns compliance, [[Risk Management]], legal, and [[Data Governance]] functions into an integrated first-, second-, and third-line-of-defence model rather than operating as separate siloed teams.

- ### Provenance
  - sources:: ISO/IEC 27001:2022; NIST Cybersecurity Framework v2.0; EU AI Act (Regulation 2024/1689); GDPR (Regulation 2016/679); FATF Recommendations (2023 revision); PCI DSS v4.0; SOC 2 Trust Services Criteria (AICPA 2017)
  - updated:: 2026-06-13
