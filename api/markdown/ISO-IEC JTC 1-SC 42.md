public:: true
alias:: ISO IEC JTC 1 SC 42, ISO/IEC JTC 1/SC 42, ISO/IEC JTC1 SC42

# ISO/IEC JTC 1/SC 42
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:iso-iec-jtc-1-sc-42",
  "@type": "Page",
  "vc:slug": "iso-iec-jtc-1-sc-42",
  "title": "ISO/IEC JTC 1/SC 42",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iso-iec-jtc-1-sc-42",
  "@type": "Class",
  "label": "ISO/IEC JTC 1/SC 42",
  "definition": "ISO/IEC JTC 1/SC 42 (Artificial Intelligence) is the international standardisation subcommittee within the ISO/IEC Joint Technical Committee 1 responsible for developing and maintaining global standards for artificial intelligence. Established in 2017, it coordinates with national bodies across more than 40 participating countries to produce standards covering AI terminology, foundational concepts, trustworthiness, bias, risk management, data lifecycle, governance frameworks, and AI system evaluation. Its publications inform regulatory frameworks worldwide, including the EU AI Act, and provide the shared vocabulary necessary for interoperability of AI governance instruments across jurisdictions.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:nist-ai-rmf", "label": "NIST AI RMF"},
      {"@id": "urn:ngm:class:eu-ai-act", "label": "EU AI Act"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ai-trustworthiness", "label": "AI Trustworthiness"},
      {"@id": "urn:ngm:class:ai-accountability", "label": "AI Accountability"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:ai-fairness", "label": "AI Fairness"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - ISO/IEC JTC 1/SC 42 is the primary international technical body for [[AI Governance]] standardisation, producing the consensus standards on [[AI Trustworthiness]], bias, risk management, and terminology that underpin regulatory frameworks including the [[EU AI Act]] and inform national AI governance approaches globally.

- ### Relationships
  - ISO/IEC JTC 1/SC 42 operates as the standardisation layer beneath [[AI Governance Framework]] efforts worldwide, providing the definitional and technical vocabulary that [[EU AI Act]] implementing acts and [[NIST AI RMF]] reference. It standardises dimensions of [[AI Trustworthiness]] including [[AI Fairness]], [[AI Accountability]], and [[Responsible AI]] through a family of ISO/IEC 42xxx standards. Its work products inform procurement requirements, certification schemes, and conformity assessment procedures for [[AI System]] procurement in government and regulated industries. The committee coordinates with other JTC 1 subcommittees on data quality, cybersecurity, and software engineering standards relevant to AI.

- ### Content
  - ISO/IEC JTC 1/SC 42 was established in October 2017 following a proposal by several national bodies recognising that AI posed standardisation challenges spanning existing subcommittee boundaries. The initial work programme focused on foundational concepts—what AI is, how it differs from related fields, what properties matter for trust—producing the ISO/IEC 22989 vocabulary standard and the ISO/IEC 23053 framework for machine learning. The committee's formation coincided with growing regulatory attention to AI risks, positioning its outputs to feed into policy processes that needed technical grounding.

  - The committee's working groups address distinct layers of the AI standardisation challenge. WG 1 covers foundational standards and the overarching framework. WG 2 focuses on big data, now extended to data lifecycle management for AI. WG 3 addresses trustworthiness, producing ISO/IEC 42001 (AI management system—the AI equivalent of ISO 27001) and a suite of standards on bias, robustness, transparency, and explainability. WG 4 handles use cases and applications, providing sector-neutral and sector-specific guidance. WG 5 covers AI governance, and WG 6 focuses on knowledge management for AI. The structure mirrors the pattern established for information security standardisation, recognising that AI governance needs both technical specifications and management system standards.

  - The strategic significance of SC 42 lies in its role as the global convergence point for AI standardisation, preventing a fragmented landscape of incompatible national standards that would create barriers to AI trade and impede cross-border regulatory recognition. When the EU AI Act requires conformity assessment of high-risk AI systems, ISO/IEC SC 42 standards provide the technical norms against which that assessment is performed. The committee's bias standards (ISO/IEC TR 24027) and AI risk management guidance (ISO/IEC 23894) are directly referenced in regulatory technical discussions. National equivalents produced by ANSI/INCITS in the United States and BSI in the United Kingdom feed into SC 42 through the ISO/IEC committee structure, giving industry and government a channel to influence international norms.

  - By 2024-2025, ISO/IEC 42001—the AI management system standard published in December 2023—has become a central certification target for AI developers and deployers seeking to demonstrate AI governance maturity. The standard specifies organisational controls, risk assessment procedures, and documentation requirements analogous to ISO 9001 for quality or ISO 27001 for information security, enabling third-party certification. SC 42 has also accelerated work on generative AI standards, addressing the distinct challenges posed by foundation models: training data governance, emergent capability disclosure, and deployment risk assessment are all areas where new technical reports are under development. The committee's work is increasingly cited in procurement requirements for AI systems across G7 governments.