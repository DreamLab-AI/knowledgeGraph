public:: true

elevatedFrom:: [[EU AI Act]]
# EU AI Act Regulatory Instrument
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eu-ai-act",
  "@type": "Page",
  "vc:slug": "eu-ai-act-regulatory-instrument",
  "title": "EU AI Act Regulatory Instrument",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
  "@type": "Class",
  "label": "EU AI Act Regulatory Instrument",
  "definition": "The EU AI Act (Regulation (EU) 2024/1689) is the European Union's comprehensive, legally binding horizontal regulation for artificial intelligence, establishing a four-tier risk-based classification system that prohibits certain AI practices outright, imposes strict pre-market conformity obligations on high-risk AI systems, mandates transparency duties for limited-risk AI, and introduces a dedicated governance regime for general-purpose AI models. Published in the Official Journal in July 2024 and progressively entering into force through 2025–2027, it represents the world's first binding horizontal AI law and creates a de facto global compliance benchmark through its extraterritorial scope. Enforcement is shared between national market surveillance authorities, the European AI Office, and the European AI Board, with penalties reaching up to €35 million or 7% of global annual turnover.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"}],
  "sameAs": [
    {"@id": "urn:ngm:class:regulation-eu-2024-1689", "label": "Regulation EU 2024/1689"},
    {"@id": "urn:ngm:class:artificial-intelligence-act", "label": "Artificial Intelligence Act"}
  ],
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:european-commission", "label": "European Commission"},
      {"@id": "urn:ngm:class:european-parliament", "label": "European Parliament"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:conformity-assessment", "label": "Conformity Assessment"},
      {"@id": "urn:ngm:class:notified-body", "label": "Notified Body"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:human-oversight", "label": "Human Oversight"},
      {"@id": "urn:ngm:class:technical-documentation", "label": "Technical Documentation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:prohibited-ai-practice", "label": "Prohibited AI Practice"},
      {"@id": "urn:ngm:class:high-risk-ai-system", "label": "High Risk AI System"},
      {"@id": "urn:ngm:class:general-purpose-ai-model", "label": "General Purpose AI Model"},
      {"@id": "urn:ngm:class:eu-ai-office", "label": "EU AI Office"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:trustworthy-ai", "label": "Trustworthy AI"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:gdpr", "label": "GDPR"},
      {"@id": "urn:ngm:class:new-legislative-framework", "label": "New Legislative Framework"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:us-ai-executive-order", "label": "US AI Executive Order"},
      {"@id": "urn:ngm:class:uk-ai-regulatory-approach", "label": "UK AI Regulatory Approach"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:foundation-model", "label": "Foundation Model"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:biometric-identification", "label": "Biometric Identification"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:brussels-effect", "label": "Brussels Effect"},
      {"@id": "urn:ngm:class:algorithmic-accountability", "label": "Algorithmic Accountability"}
    ]
  },
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **EU AI Act** (Regulation (EU) 2024/1689) is the European Union's first comprehensive, legally binding horizontal regulation for [[Artificial Intelligence]], establishing a risk-tiered classification that governs the development, placing on the market, and use of AI systems within the EU Single Market. It applies extraterritorially to any provider or deployer whose AI output affects persons in the EU, creating obligations analogous in scope to the [[GDPR]]. The Act employs four risk categories — unacceptable risk (prohibited), high risk (strict conformity obligations), limited risk (transparency duties), and minimal risk (voluntary codes) — alongside a dedicated chapter for [[General Purpose AI Model]] governance, making it the most structurally complex AI governance instrument enacted to date.

- ### Overview
  - The EU AI Act entered into force on 1 August 2024, following publication in the Official Journal of the European Union. It is embedded within the EU's existing [[New Legislative Framework]] for product safety and market surveillance, meaning it reuses established conformity assessment infrastructure (e.g., [[CE Marking]], [[Notified Body]] designations) rather than creating entirely new bureaucratic machinery.
  - The regulation's primary policy objective is to ensure that AI systems placed on the EU market are safe, transparent, traceable, non-discriminatory, and environmentally sustainable, while preserving the Union's competitiveness by avoiding overly burdensome rules for low-risk AI.
  - The [[Brussels Effect]] is a central strategic dimension: because the Act applies to any operator whose AI system affects EU residents, organisations headquartered outside Europe must comply or exit the EU market. Many global technology providers have elected to implement EU Act requirements as global baseline standards, propagating EU norms worldwide.
  - The Act does not regulate AI research conducted solely in non-commercial contexts, AI systems used exclusively for military or national security purposes, or AI outputs used solely for personal non-professional activity.
  - Enforcement is shared across three tiers: national [[Market Surveillance Authority]] bodies handle most product-category obligations; the [[EU AI Office]] (established within the European Commission) oversees GPAI model compliance and cross-border enforcement; the [[European AI Board]] (comprising national authority representatives) coordinates coherent interpretation across Member States.

- ### Key Components
  - #### Risk Classification System
    - **Unacceptable Risk (Prohibited Practices)**: AI systems presenting an unacceptable threat to fundamental rights or safety are banned outright under Article 5. Examples include:
      - Real-time remote [[Biometric Identification]] in publicly accessible spaces by law enforcement (with narrow exceptions)
      - Social scoring systems operated by public authorities
      - Subliminal manipulation techniques exploiting persons' vulnerabilities
      - AI for predictive policing based solely on profiling without reasonable suspicion
      - Emotion recognition in workplaces and educational institutions (with limited exceptions)
      - Biometric categorisation inferring sensitive attributes (race, political opinions, sexual orientation)
    - **High-Risk AI Systems**: Annex I covers AI embedded in products regulated under sector-specific EU directives (medical devices, machinery, vehicles, aviation); Annex II covers stand-alone AI in domains including critical infrastructure, education, employment, essential services, law enforcement, migration and asylum, administration of justice, and democratic processes.
      - Pre-market obligations: [[Risk Assessment]], [[Technical Documentation]], logging capability, [[Conformity Assessment]] (self-assessment or third-party via [[Notified Body]]), EU database registration
      - Post-market obligations: incident reporting to national authorities, [[Post-Market Monitoring]] plan, cooperation with market surveillance
      - Human-oversight obligations: design must permit competent operators to override, halt, or intervene in system outputs
    - **Limited-Risk AI**: Systems such as chatbots, deepfake generators, and emotion-recognition tools must disclose their AI nature to interacting users ([[Transparency]] obligation under Article 50).
    - **Minimal-Risk AI**: AI used in spam filters, video games, inventory management and similar applications faces no binding obligations but may voluntarily adopt codes of conduct.
  - #### General-Purpose AI (GPAI) Model Regime
    - Introduced in Title VIII, the GPAI chapter applies to any model trained on large datasets at scale, exhibiting significant generality, and capable of performing multiple distinct tasks.
    - All GPAI providers must: publish a summary of training data, comply with EU copyright law (including opting out of text-and-data mining reservations where required), and maintain technical documentation for downstream deployers.
    - [[Foundation Model]] providers above a computational threshold (initially 10^25 FLOPs of training compute, used as a proxy for systemic risk) are classified as "systemic-risk GPAI models" and face additional obligations: adversarial robustness testing ([[Red Teaming]]), cybersecurity measures, serious-incident reporting to the EU AI Office, and energy-consumption disclosure.
    - The EU AI Office may define further obligations via delegated acts as compute thresholds evolve with technology.
  - #### Governance Architecture
    - **[[EU AI Office]]**: Created within the Directorate-General for Communications Networks, Content and Technology (DG CONNECT), it is the primary Union-level body for GPAI oversight and cross-border AI enforcement coordination.
    - **[[European AI Board]]**: Advisory body of national authority representatives that provides opinions and guidance on consistent Act implementation; can escalate cross-border incidents.
    - **Scientific Panel of Independent Experts**: Technical body advising the AI Office on GPAI classification and risk assessment.
    - **National Competent Authorities**: Each Member State designates at least one national authority as market surveillance authority and as notifying authority for conformity assessment bodies.
    - **[[AI Regulatory Sandbox]]**: Member States must establish at least one controlled testing environment by August 2026, allowing innovators (especially SMEs and start-ups) to develop and test innovative AI with reduced compliance burden under authority supervision.
  - #### Implementation Timeline
    - August 2024: Regulation entered into force
    - February 2025: Prohibited practices (Chapter II) applicable
    - August 2025: GPAI model obligations (Title VIII) and governance provisions applicable
    - August 2026: High-risk AI (Annex I sector-specific products) obligations applicable; AI Office operational; sandboxes required
    - August 2027: High-risk AI (Annex II stand-alone systems) obligations applicable
  - #### Penalties and Enforcement
    - Prohibited practice violations: up to €35 million or 7% of global annual turnover
    - Other obligations violations: up to €15 million or 3% of global annual turnover
    - Incorrect or misleading information to authorities: up to €7.5 million or 1% of global annual turnover
    - SME-specific proportionality provisions ensure penalties are scaled appropriately for smaller operators

- ### Applications and Use Cases
  - **Healthcare AI**: Diagnostic AI tools (e.g., medical imaging analysis for cancer detection) are classified as high-risk under Annex II if they influence clinical decisions, requiring [[Conformity Assessment]] aligned with Medical Device Regulation.
  - **Employment Screening**: AI used in CV screening, interview analysis, or promotion decisions falls under high-risk Annex II obligations, requiring human oversight and transparency toward affected workers.
  - **Law Enforcement**: Predictive crime-mapping systems and real-time facial recognition in public spaces face either outright prohibition or stringent high-risk obligations, reshaping how police forces procure and deploy AI tools.
  - **Financial Services**: Credit-scoring AI and insurance risk-assessment tools may fall within high-risk classification if they determine access to essential services, requiring robust bias testing and [[Algorithmic Accountability]] mechanisms.
  - **Education**: AI for student performance assessment, learning-path optimisation, or admissions is high-risk, requiring documentation of training data composition and human review of AI-driven decisions.
  - **Autonomous Systems and Robotics**: AI components embedded in CE-marked machinery or safety-critical products (vehicles, aircraft, industrial equipment) are captured under Annex I.
  - **Large Language Model Deployment**: Providers of [[Large Language Model]] services (e.g., conversational assistants, code generators) must satisfy GPAI transparency obligations and, if systemic-risk, adversarial testing requirements before making models available in the EU.
  - **Public Sector Procurement**: EU institutions and Member State agencies face internal obligations under a separate regulation mirroring the Act's provisions, standardising public-sector AI use.

- ### Relationships
  - standardizedBy:: [[European Commission]]
  - standardizedBy:: [[European Parliament]]
  - standardizedBy:: [[Council of the European Union]]
  - requires:: [[Conformity Assessment]]
  - requires:: [[Notified Body]]
  - requires:: [[Risk Assessment]]
  - requires:: [[Human Oversight]]
  - requires:: [[Technical Documentation]]
  - requires:: [[Post-Market Monitoring]]
  - hasPart:: [[Prohibited AI Practice]]
  - hasPart:: [[High Risk AI System]]
  - hasPart:: [[General Purpose AI Model]]
  - hasPart:: [[EU AI Office]]
  - hasPart:: [[AI Regulatory Sandbox]]
  - enables:: [[AI Governance Framework]]
  - enables:: [[Regulatory Compliance]]
  - enables:: [[Trustworthy AI]]
  - enables:: [[CE Marking]]
  - dependsOn:: [[GDPR]]
  - dependsOn:: [[Product Safety Regulation]]
  - dependsOn:: [[New Legislative Framework]]
  - contrastsWith:: [[US AI Executive Order]]
  - contrastsWith:: [[UK AI Regulatory Approach]]
  - contrastsWith:: [[Self-Regulatory Approach]]
  - bridgesTo:: [[Foundation Model]]
  - bridgesTo:: [[Large Language Model]]
  - bridgesTo:: [[Biometric Identification]]
  - relatedTo:: [[AI Governance]]
  - relatedTo:: [[AI Ethics]]
  - relatedTo:: [[AI Risk Management]]
  - relatedTo:: [[Transparency]]
  - relatedTo:: [[Data Protection]]
  - relatedTo:: [[Brussels Effect]]
  - relatedTo:: [[Algorithmic Accountability]]

- ### Standards and Context
  - The Act explicitly references harmonised standards developed by [[CEN-CENELEC]] and [[ETSI]] as mechanisms for demonstrating conformity. Operators who comply with cited harmonised standards receive a presumption of conformity with the corresponding Act requirements, reducing audit burden.
  - The [[European AI Office]] maintains a mandate to develop codes of practice — co-created with industry, civil society, and academia — as interim compliance guidance during the transition period before harmonised standards are finalised.
  - The Act interacts with a constellation of other EU digital regulations: [[GDPR]] (personal data processed by AI systems); the [[Digital Services Act]] (DSA — recommender systems); the [[Digital Markets Act]] (DMA — gatekeepers' AI-powered services); the [[Data Governance Act]] (DGA — data intermediaries); the [[Cyber Resilience Act]] (cybersecurity of AI-enabled products); and sector-specific regulations (Medical Device Regulation, Machinery Regulation, General Product Safety Regulation).
  - ISO/IEC 42001 (AI Management System), ISO/IEC 23894 (AI Risk Management), and ISO/IEC TR 24028 (AI Trustworthiness) are expected to form the backbone of harmonised standards referenced by the Act.
  - The Act is situated within the broader [[EU Digital Decade]] policy framework and aligns with the [[European AI Strategy]] (COM/2018/237) and its updated Coordinated Plan on AI (2021 revision).
  - The [[OECD AI Principles]] and [[UNESCO Recommendation on AI Ethics]] (2021) are cited in the Act's recitals as international reference points, and the EU AI Office coordinates with international counterparts to promote interoperability of regulatory frameworks.
  - The concept of a [[Brussels Effect]] — where unilateral EU regulation becomes the de facto global standard — is particularly potent here: most major AI providers (OpenAI, Google DeepMind, Meta, Mistral) operate in the EU market and have published conformance roadmaps, effectively exporting EU norms globally.

- ### Provenance
  - sources:: Official Journal of the European Union, Regulation (EU) 2024/1689, 12 July 2024
  - sources:: European Commission AI Act page (digital-strategy.ec.europa.eu)
  - sources:: EU AI Office operational documents (2024–2025)
  - sources:: OECD AI Policy Observatory comparative analysis
  - updated:: 2026-06-13
