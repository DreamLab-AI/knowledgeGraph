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
  "definition": "The General Data Protection Regulation (GDPR) is a comprehensive EU legal framework governing the collection, processing, and storage of personal data of individuals within the European Union and European Economic Area. It establishes rights for data subjects and obligations for organisations handling personal data, enforced by national supervisory authorities with significant financial penalties for non-compliance. GDPR represents the most influential data protection law globally, shaping privacy practice and inspiring similar legislation worldwide.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-protection-regulation", "label": "Data Protection Regulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:gdpr-compliance", "label": "GDPR Compliance"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"},
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-by-design", "label": "Privacy by Design"},
      {"@id": "urn:ngm:class:privacy-impact-assessment", "label": "Privacy Impact Assessment"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-minimisation", "label": "Data Minimisation"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - GDPR is the EU's General Data Protection Regulation, the foundational legal instrument governing personal data processing in Europe. It establishes comprehensive rights for individuals and obligations for organisations, backed by significant sanctions for non-compliance.
- ### Relationships
  - GDPR is a form of [[Data Protection Regulation]] and drives [[GDPR Compliance]] obligations across all sectors. It mandates [[Privacy by Design]] principles, requires [[Data Minimisation]], and demands [[Transparency]] and [[Accountability]] in data practices. Organisations must maintain [[Audit Trail]]s and conduct [[Privacy Impact Assessment]]s for high-risk processing. GDPR intersects significantly with [[AI Governance]] since AI systems that process personal data fall within its scope, creating obligations that complement or tension with [[AI Regulation]].
- ### Content
  - GDPR came into force on 25 May 2018, replacing the 1995 Data Protection Directive. It introduced a unified regulatory regime across all EU member states, eliminating fragmentation in data protection law. The regulation's extraterritorial reach—applying to any organisation processing EU residents' data, regardless of where the organisation is established—gave it global significance and prompted privacy law reforms in dozens of jurisdictions.

  - Core principles under GDPR include lawfulness, fairness and transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality; and accountability. These principles must underpin all personal data processing activities and are enforced through Data Protection Authorities (DPAs) in each member state, coordinated by the European Data Protection Board.

  - GDPR grants data subjects an extensive set of rights: the right to access their data, to rectify inaccurate data, to erasure ("right to be forgotten"), to restriction of processing, to data portability, and to object to processing including profiling. These rights create significant operational requirements for organisations and have spurred the development of privacy-enhancing technologies and compliance tooling.

  - For AI systems, GDPR creates particular challenges around automated decision-making. Article 22 restricts fully automated decisions that significantly affect individuals, requiring human oversight, the ability to contest decisions, and meaningful explanations. This intersects with AI explainability and interpretability requirements, making GDPR a key driver of responsible AI development practices.

  - The regulation's enforcement mechanism—fines of up to €20 million or 4% of global annual turnover, whichever is higher—gave it significant teeth. High-profile enforcement actions against major technology companies have established GDPR as a genuine constraint on data-intensive business models, and have prompted significant investment in data governance, privacy engineering, and compliance infrastructure across the technology industry.
