public:: true

# GDPR
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gdpr",
  "@type": "Page",
  "vc:slug": "gdpr",
  "title": "GDPR",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gdpr",
  "@type": "Class",
  "label": "GDPR",
  "definition": "The General Data Protection Regulation (GDPR) is a comprehensive EU legal framework (Regulation 2016/679) that governs the collection, processing, storage, and transfer of personal data belonging to individuals in the European Union and European Economic Area. It establishes six lawful bases for processing, grants data subjects extensive individual rights, and imposes organisational obligations including Data Protection Impact Assessments and appointment of Data Protection Officers. Enforced by national supervisory authorities coordinated by the European Data Protection Board, GDPR carries penalties of up to €20 million or 4% of global annual turnover, making it the most consequential data protection law globally and a template for privacy legislation worldwide.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:data-protection-regulation", "label": "Data Protection Regulation"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:right-to-erasure", "label": "Right to Erasure"},
      {"@id": "urn:ngm:class:data-portability", "label": "Data Portability"},
      {"@id": "urn:ngm:class:data-protection-impact-assessment", "label": "Data Protection Impact Assessment"},
      {"@id": "urn:ngm:class:lawful-basis-for-processing", "label": "Lawful Basis for Processing"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:eu-digital-single-market", "label": "EU Digital Single Market"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-minimisation", "label": "Data Minimisation"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"},
      {"@id": "urn:ngm:class:consent-management", "label": "Consent Management"},
      {"@id": "urn:ngm:class:data-protection-officer", "label": "Data Protection Officer"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-by-design", "label": "Privacy By Design"},
      {"@id": "urn:ngm:class:privacy-impact-assessment", "label": "Privacy Impact Assessment"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"},
      {"@id": "urn:ngm:class:data-subject-rights", "label": "Data Subject Rights"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:supervisory-authority", "label": "Supervisory Authority"},
      {"@id": "urn:ngm:class:european-data-protection-board", "label": "European Data Protection Board"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"},
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"},
      {"@id": "urn:ngm:class:information-security", "label": "Information Security"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:trust", "label": "Trust"},
      {"@id": "urn:ngm:class:digital-rights", "label": "Digital Rights"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:european-parliament", "label": "European Parliament"},
      {"@id": "urn:ngm:class:iso-27701", "label": "ISO 27701"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ccpa", "label": "CCPA"},
      {"@id": "urn:ngm:class:hipaa", "label": "HIPAA"},
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-act", "label": "AI Act"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:differential-privacy", "label": "Differential Privacy"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:gdpr-compliance", "label": "GDPR Compliance"},
      {"@id": "urn:ngm:class:data-breach-notification", "label": "Data Breach Notification"},
      {"@id": "urn:ngm:class:cross-border-data-transfer", "label": "Cross-Border Data Transfer"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:general-data-protection-regulation", "label": "General Data Protection Regulation"},
    {"@id": "urn:ngm:class:regulation-2016-679", "label": "Regulation 2016/679"}
  ],
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **General Data Protection Regulation** (GDPR, Regulation 2016/679) is the European Union's primary legal framework governing [[Personal Data]] processing, establishing a harmonised, rights-centred regime that replaced the fragmented 1995 [[Data Protection Directive]]. It mandates that all processing of personal data relating to individuals in the EEA must have a lawful basis, be proportionate, transparent, and purposefully limited, with data subjects holding enforceable rights over their own information. GDPR's extraterritorial scope — applying to any organisation worldwide that processes EEA residents' data — made it the de facto global standard for [[Privacy]] law and catalysed equivalent legislation in the UK ([[UK GDPR]]), California ([[CCPA]]), Brazil ([[LGPD]]), and beyond. Enforcement by 27 national [[Supervisory Authority]] bodies coordinated through the [[European Data Protection Board]] gives the regulation genuine enforcement power through fines of up to €20 million or 4% of global annual turnover.

- ### Overview
  - GDPR entered into force on 25 May 2018, bringing a paradigm shift from the loosely harmonised, directive-based model to a directly applicable EU Regulation uniform across member states. Its ambition was twofold: to strengthen individual rights in the digital era and to establish a level playing field for cross-border [[Data Governance]] within the single market.
  - The regulation rests on seven foundational principles set out in Article 5: lawfulness, fairness, and transparency; purpose limitation; [[Data Minimisation]]; accuracy; storage limitation; integrity and confidentiality; and accountability. These are not aspirational — the accountability principle (Article 5(2)) requires controllers to demonstrate compliance, reversing the burden of proof.
  - Why it matters: digital business models historically treated personal data as an asset to be accumulated without limit. GDPR fundamentally disrupted this by making data-intensive practices legally and financially risky, stimulating investment in [[Privacy by Design]], privacy-enhancing technologies, and compliance infrastructure across the entire technology industry.

- ### Key Components
  - #### Six Lawful Bases (Article 6)
    - [[Consent]] — freely given, specific, informed, and unambiguous indication of agreement.
    - [[Legitimate Interests]] — proportionate to the controller's interest, subject to a balancing test.
    - [[Contract Performance]] — processing necessary for contract fulfilment.
    - Legal obligation, vital interests, and public task — contextual bases for specific scenarios.
  - #### Data Subject Rights (Articles 15–22)
    - Right of access (Article 15) — individuals may obtain a copy of their personal data and supplementary information.
    - [[Right to Rectification]] (Article 16) — correction of inaccurate or incomplete data.
    - [[Right to Erasure]] / "right to be forgotten" (Article 17) — deletion where no continuing lawful basis exists.
    - Right to restriction of processing (Article 18) — temporary halt pending dispute resolution.
    - [[Data Portability]] (Article 20) — receipt of data in machine-readable format for transfer to another controller.
    - Right to object (Article 21) — including absolute right to object to [[Direct Marketing]] profiling.
    - Rights related to automated decision-making (Article 22) — protection against solely automated decisions with significant effects.
  - #### Organisational Obligations
    - [[Data Protection Impact Assessment]] (DPIA) — mandatory for high-risk processing before commencement.
    - [[Data Protection Officer]] (DPO) — mandatory for public bodies and those engaged in large-scale systematic monitoring or special category data processing.
    - Records of Processing Activities (RoPA) — Article 30 register of all processing operations.
    - [[Data Breach Notification]] — notification to supervisory authority within 72 hours; to data subjects without undue delay where high risk.
    - [[Consent Management]] mechanisms — documented, withdrawable, purpose-specific.
  - #### International Data Transfers (Chapter V)
    - [[Cross-Border Data Transfer]] to third countries requires an adequacy decision, Standard Contractual Clauses (SCCs), Binding Corporate Rules, or other derogations.
    - Post-Schrems II (2020), transfers to the US required extensive transfer impact assessments; the EU-US Data Privacy Framework (2023) reinstated a new adequacy mechanism.
  - #### Special Categories (Article 9)
    - Heightened protection for health data, biometric data, genetic data, racial/ethnic origin, political opinions, religious beliefs, trade union membership, and sexual orientation — requiring explicit consent or specific alternative grounds.
    - Directly relevant to [[AI Systems]] using facial recognition, health diagnostics, or behavioural profiling.

- ### Applications and Use Cases
  - **Enterprise Data Governance** — GDPR is the primary driver of enterprise data catalogues, data lineage tools, and [[Data Governance]] programmes; organisations map personal data flows, classify special categories, and assign ownership to enable DPO oversight.
  - **AI and Machine Learning** — training datasets must be scrutinised for personal data; Article 22 constrains purely automated high-stakes decisions; DPIA requirements apply to most large-scale ML deployments. [[Federated Learning]] and [[Differential Privacy]] are technical responses enabling model training without centralising personal data.
  - **Consent Management Platforms** — cookie consent banners and preference centres are the most visible consumer manifestation; behind them sit [[Consent Management]] infrastructure mapping user preferences to third-party data flows.
  - **Healthcare** — special category protections for health data constrain secondary uses of patient records; GDPR intersects with the European Health Data Space initiative and shapes [[Health Data Governance]].
  - **Financial Services** — GDPR overlaps with PSD2, AML/KYC obligations, and credit-scoring models (Article 22 profiling provisions apply to automated credit decisions).
  - **Cloud and SaaS** — controller-processor distinction requires data processing agreements with every cloud vendor; security obligations (Article 32) drive encryption, pseudonymisation, and access control standards aligned with [[ISO 27701]] and [[ISO 27001]].
  - **Cross-Border Operations** — multinational organisations must navigate the one-stop-shop mechanism (lead supervisory authority in member state of main establishment), while dealing with divergence in national derogations.

- ### Relationships
  - hasPart:: [[Right to Erasure]]
  - hasPart:: [[Data Portability]]
  - hasPart:: [[Data Protection Impact Assessment]]
  - hasPart:: [[Lawful Basis for Processing]]
  - partOf:: [[EU Digital Single Market]]
  - requires:: [[Data Minimisation]]
  - requires:: [[Transparency]]
  - requires:: [[Audit Trail]]
  - requires:: [[Consent Management]]
  - requires:: [[Data Protection Officer]]
  - enables:: [[Privacy by Design]]
  - enables:: [[Privacy Impact Assessment]]
  - enables:: [[Accountability]]
  - enables:: [[Data Subject Rights]]
  - dependsOn:: [[Supervisory Authority]]
  - dependsOn:: [[European Data Protection Board]]
  - implements:: [[Privacy]]
  - implements:: [[Data Protection]]
  - implements:: [[Information Security]]
  - supports:: [[Data Governance]]
  - supports:: [[Trust]]
  - supports:: [[Digital Rights]]
  - standardizedBy:: [[European Parliament]]
  - standardizedBy:: [[ISO 27701]]
  - contrastsWith:: [[CCPA]]
  - contrastsWith:: [[HIPAA]]
  - contrastsWith:: [[AI Regulation]]
  - bridgesTo:: [[AI Act]]
  - bridgesTo:: [[Federated Learning]]
  - bridgesTo:: [[Differential Privacy]]
  - relatedTo:: [[GDPR Compliance]]
  - relatedTo:: [[Data Breach Notification]]
  - relatedTo:: [[Cross-Border Data Transfer]]

- ### Standards and Context
  - **ISO 27701:2019** — Privacy Information Management System standard designed as an extension to [[ISO 27001]], providing a structured framework for demonstrating GDPR-aligned controls. Widely adopted as a certification pathway.
  - **ISO 29100** — Privacy Framework establishing privacy principles aligned with GDPR's Article 5 principles.
  - **NIST Privacy Framework** — US counterpart providing voluntary guidance; increasingly cross-referenced with GDPR for multinational organisations.
  - **ENISA Guidelines** — the EU Agency for Cybersecurity issues sector-specific guidance on GDPR security measures, particularly Article 32 technical and organisational measures.
  - **European Data Protection Board (EDPB)** — adopted binding guidelines on consent, data portability, transfers, codes of conduct, and accreditation of certification bodies; guidelines carry significant interpretive weight.
  - **ePrivacy Regulation** — proposed companion regulation governing electronic communications metadata and cookie tracking; pending adoption and would tighten the regime around behavioural advertising and IoT.
  - **AI Act (2024)** — the EU's risk-based AI regulation imposes additional obligations on AI systems processing personal data, particularly for high-risk systems; GDPR and AI Act obligations overlap on transparency, human oversight, and automated decision-making.
  - **UK GDPR** — post-Brexit, the UK retained a substantially equivalent framework under the UK GDPR (Data Protection Act 2018), with the UK ICO as supervisory authority; adequacy decisions between EU and UK govern ongoing data flows.
  - **Schrems I & II (CJEU)** — landmark Court of Justice rulings (2015 and 2020) invalidating Safe Harbour and Privacy Shield frameworks for EU-US transfers, reshaping the global landscape of [[Cross-Border Data Transfer]] and demonstrating the real-world enforcement power of data protection rights.

- ### Enforcement Landscape
  - National [[Supervisory Authority]] bodies (ICO in the UK, CNIL in France, BfDI in Germany, DPC in Ireland) handle complaints, investigations, and enforcement actions; the Irish DPC holds particular significance as the lead authority for most major US technology companies' EU establishments.
  - The one-stop-shop mechanism allows a single lead supervisory authority to handle cross-border cases, with cooperation and consistency procedures across the EDPB.
  - Major enforcement actions (Meta, Google, TikTok, Amazon) have established precedents on consent validity, data transfer lawfulness, special category processing, and transparency requirements; fines have reached into the hundreds of millions of euros.
  - [[GDPR Compliance]] programmes typically involve Data Protection Counsel, DPOs, privacy engineers, security teams, and third-party auditors working continuously; it is not a one-time certification but an ongoing operational discipline.
  - The regulation's enforcement creates market dynamics where data protection posture influences enterprise procurement, investment decisions, and M&A due diligence — compliance has become a competitive differentiator.

- ### AI and Emerging Technology Intersections
  - **Automated Decision-Making** — Article 22 restrictions on solely automated consequential decisions require organisations deploying ML models for credit scoring, insurance underwriting, recruitment screening, or law enforcement risk assessment to provide human review mechanisms and meaningful explanations, driving demand for [[Explainable AI]] and [[Model Interpretability]].
  - **Training Data Provenance** — personal data used to train [[Large Language Models]] or other ML systems is subject to GDPR; organisations must identify the lawful basis for training data collection, respond to erasure requests (raising the "right to be forgotten" vs. ML model unlearning challenge), and conduct DPIAs.
  - **Biometric Processing** — facial recognition, voice identification, and similar systems process special category biometric data (Article 9), requiring explicit consent or specific statutory authorisation; several supervisory authorities have taken enforcement action against biometric surveillance deployments.
  - **Data Localisation and Sovereignty** — GDPR transfer restrictions, combined with national security carve-outs, have accelerated EU cloud sovereignty initiatives (GAIA-X, EuroStack) and [[Data Sovereignty]] frameworks.
  - **Synthetic Data** — organisations explore synthetic data generation as a privacy-preserving alternative to real personal data for ML training; genuinely anonymous synthetic data falls outside GDPR scope, but re-identification risk must be carefully assessed.

- ### Provenance
  - sources:: EU Official Journal — Regulation (EU) 2016/679 of the European Parliament and of the Council; EDPB Guidelines; ENISA; ICO guidance; academic literature on data protection law.
  - updated:: 2026-06-13
