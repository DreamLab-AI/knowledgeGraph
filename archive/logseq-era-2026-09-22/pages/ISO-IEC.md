public:: true
alias:: ISO IEC, ISO/IEC

# ISO/IEC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:iso-iec",
  "@type": "Page",
  "vc:slug": "iso-iec",
  "title": "ISO/IEC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iso-iec",
  "@type": "Class",
  "label": "ISO/IEC",
  "definition": "ISO/IEC refers to the joint technical committee structure formed by the International Organisation for Standardisation (ISO) and the International Electrotechnical Commission (IEC) to develop international standards in information technology and related fields. The primary body is ISO/IEC JTC 1, which oversees standards in areas including software engineering, cybersecurity, artificial intelligence, and biometrics. ISO/IEC standards are developed through consensus among national standardisation bodies and carry significant weight in regulatory compliance, procurement, and international trade agreements. Landmark outputs include ISO/IEC 27001 for information security management and ISO/IEC 42001 for AI management systems.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:iso-iec-27001", "label": "ISO/IEC 27001"},
      {"@id": "urn:ngm:class:iso-iec-42001", "label": "ISO IEC 42001"},
      {"@id": "urn:ngm:class:cybersecurity-standard", "label": "Cybersecurity Standard"},
      {"@id": "urn:ngm:class:compliance-standards", "label": "Compliance Standards"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:information-security", "label": "Information Security"},
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:technical-standards", "label": "Technical Standards"},
      {"@id": "urn:ngm:class:data-standards", "label": "Data Standards"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - ISO/IEC denotes the joint standardisation body producing international technical standards in information technology, cybersecurity, and AI, including the landmark [[ISO/IEC 27001]] information security framework and [[ISO IEC 42001]] AI management system standard.
- ### Relationships
  - ISO/IEC standards form the backbone of global [[Information Security]] governance, with [[ISO/IEC 27001]] specifying information security management systems and [[ISO IEC 42001]] addressing AI management. The body publishes [[Cybersecurity Standard]] specifications adopted by regulators worldwide and referenced in [[Compliance Standards]] frameworks, underpinning [[AI Governance Framework]] development and providing [[Technical Standards]] that facilitate international interoperability.
- ### Content
  - ISO/IEC Joint Technical Committee 1 (JTC 1) was established in 1987 and is the world's largest developer of international IT standards. It operates through subcommittees covering topics including programming languages, software and systems engineering, information security techniques, artificial intelligence, and internet of things. National bodies such as BSI (UK), ANSI (USA), and DIN (Germany) participate as voting members, ensuring that standards reflect diverse industrial and governmental perspectives.

  - ISO/IEC 27001 is the most widely adopted information security standard globally, providing a systematic framework for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). Certification against ISO/IEC 27001 is frequently required in public sector procurement and financial services supply chains. The 2022 revision aligned the standard with the new Harmonised Structure for management system standards, improving integration with ISO 9001 and ISO 14001.

  - ISO/IEC 42001, published in 2023, is the first international management system standard specifically for artificial intelligence. It provides requirements and guidance for organisations developing, providing, or using AI systems, covering topics including risk management, impact assessment, transparency, and human oversight. The standard is designed to support compliance with emerging AI regulations such as the EU AI Act and aligns with the OECD AI Principles, providing a certifiable framework that regulators can reference as evidence of responsible AI governance.
