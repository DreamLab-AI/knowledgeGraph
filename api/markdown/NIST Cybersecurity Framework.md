public:: true

# NIST Cybersecurity Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:nist-cybersecurity-framework",
  "@type": "Page",
  "vc:slug": "nist-cybersecurity-framework",
  "title": "NIST Cybersecurity Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nist-cybersecurity-framework",
  "@type": "Class",
  "label": "NIST Cybersecurity Framework",
  "definition": "The NIST Cybersecurity Framework (CSF) is a voluntary risk-based framework published by the US National Institute of Standards and Technology that provides organisations with a common taxonomy and structured approach for managing cybersecurity risk. It organises security activities around six core functions—Govern, Identify, Protect, Detect, Respond, and Recover—each decomposed into categories and subcategories aligned to industry standards. Version 2.0, published in 2024, added the Govern function and broadened applicability beyond critical infrastructure to all sectors and organisation sizes globally. The framework is widely adopted as a baseline for cybersecurity programme assessment and communication with leadership.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:security-framework", "label": "Security Framework"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:nist", "label": "NIST"},
      {"@id": "urn:ngm:class:nist-ai-rmf", "label": "NIST AI RMF"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist", "label": "NIST"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[NIST Cybersecurity Framework]] is a voluntary, outcomes-based [[Security Framework]] published by [[NIST]] that organises cybersecurity risk management across six core functions—Govern, Identify, Protect, Detect, Respond, and Recover—providing a common language for [[Risk Assessment]] and programme communication across organisations of all sizes.

- ### Relationships
  - The NIST Cybersecurity Framework sits within a family of [[NIST]] standards alongside the [[NIST AI RMF]], and maps to other [[Compliance Framework]] instruments such as ISO/IEC 27001 and SOC 2. It enables structured [[Incident Response]] planning and systematic [[Risk Assessment]], and organisations use it to demonstrate [[Regulatory Compliance]] to auditors and regulators. [[Compliance Monitoring]] tools frequently reference CSF tiers and profiles to measure programme maturity.

- ### Content
  - The NIST Cybersecurity Framework was first released in February 2014 pursuant to Executive Order 13636, which directed NIST to work with the private sector on protecting critical infrastructure. The initial version drew heavily on existing standards—including ISO 27001, COBIT, and NIST SP 800-53—synthesising them into an accessible, technology-neutral structure. Adoption spread far beyond the critical infrastructure sectors originally targeted, with hospitals, universities, small businesses, and multinational corporations using the framework as a programme assessment and board-level communication tool.

  - The framework operates on three levels: the Core (what to do), Tiers (how mature the organisation is), and Profiles (current versus target state). Organisations construct a Current Profile representing existing security activities and a Target Profile reflecting desired outcomes, then use the gap as a prioritised improvement roadmap. The Core functions decompose into 23 categories and over 100 subcategories, each cross-referenced to specific controls in companion standards. This mapping structure enables organisations to translate CSF language into actionable technical requirements without prescribing specific technology choices.

  - The CSF's significance derives from its role as a lingua franca between security practitioners, executives, and regulators. By framing cybersecurity as risk management rather than technical compliance, it shifted board-level conversations from check-box audits to continuous risk posture assessment. Federal agencies use it as a baseline for supply-chain risk management requirements, and insurance underwriters reference CSF tier attainment in cyber policy pricing. Its international influence is evident in derivative frameworks adopted by the EU Agency for Cybersecurity (ENISA) and regulators across Asia-Pacific.

  - CSF 2.0, released in February 2024, introduced the Govern function to address the gap in accountability and enterprise risk oversight identified in post-mortems of major incidents. The update also expanded supply-chain cybersecurity guidance and published profiles tailored to specific sectors. In 2025, NIST began work on AI-specific implementation guidance mapping CSF 2.0 to the NIST AI RMF, recognising that AI systems introduce novel attack surfaces—adversarial inputs, model extraction, and data poisoning—not captured by conventional security controls.

