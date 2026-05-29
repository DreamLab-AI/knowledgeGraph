public:: true

# NIST
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:nist",
  "@type": "Page",
  "vc:slug": "nist",
  "title": "NIST",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nist",
  "@type": "Class",
  "label": "NIST",
  "definition": "The National Institute of Standards and Technology (NIST) is a US federal agency within the Department of Commerce responsible for developing measurement standards, metrology, and technology guidelines. NIST produces widely adopted frameworks for cybersecurity, risk management, and artificial intelligence that are referenced by industry, academia, and regulators worldwide. Its outputs include voluntary standards, special publications, and the NIST AI Risk Management Framework.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:standardization-bodies", "label": "Standardization Bodies"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:nist-ai-rmf", "label": "NIST AI RMF"},
      {"@id": "urn:ngm:class:cybersecurity-standard", "label": "Cybersecurity Standard"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:information-security", "label": "Information Security"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - NIST is the US federal standards body that produces voluntary technical guidelines and frameworks—most notably the Cybersecurity Framework and AI Risk Management Framework—that are adopted globally by both public and private sector organisations as authoritative benchmarks for responsible technology governance.
- ### Relationships
  - NIST is a [[Standardization Bodies]] entity that directly enables the [[NIST AI RMF]], [[Cybersecurity Standard]] practices, and [[Risk Management]] methodology. Its work underpins [[AI Governance]] and [[AI Risk Management]] efforts, and its frameworks are adopted as [[Technical Standard]] references within [[Compliance Framework]] programmes. NIST outputs support [[AI Safety]], [[Information Security]], and [[Regulatory Compliance]] initiatives.
- ### Content
  - Founded in 1901 as the National Bureau of Standards, NIST is one of the oldest physical science laboratories in the United States. It operates under the Department of Commerce and has a dual mandate: advancing measurement science and disseminating technology standards to support US industry competitiveness. Over time, its remit expanded from physical metrology into digital infrastructure, cybersecurity, and, most recently, artificial intelligence.

  - NIST's Cybersecurity Framework (CSF), first published in 2014, became the de-facto baseline for enterprise cybersecurity risk management globally. Its voluntary, outcome-based structure—Identify, Protect, Detect, Respond, Recover—was influential enough that it was referenced in executive orders, insurance requirements, and international standards. The CSF 2.0 update, released in 2024, added a Govern function and explicitly addressed supply chain and AI-adjacent risks.

  - The NIST AI Risk Management Framework (AI RMF), published in January 2023, provides a structured vocabulary and process for mapping, measuring, managing, and governing AI-related risks. It is organised around four core functions (Govern, Map, Measure, Manage) and is explicitly sector-agnostic. The AI RMF has been cited in the EU AI Act's technical documentation, US Executive Order 14110 on Safe, Secure, and Trustworthy AI, and multiple national AI strategies.

  - NIST also maintains SP 800-series special publications covering topics from cryptographic standards to privacy engineering. These documents are mandatory references for US federal contractors and widely adopted by private industry. In the AI space, NIST is developing additional guidance on synthetic content, AI auditing, and bias testing, making it a living source of evolving technical standards.

  - As AI regulation matures, NIST occupies a critical convening role: it runs the AI Safety Institute Consortium (AISIC), bringing together hundreds of companies and research institutions to contribute to evaluation methodologies. This positions NIST not merely as a publisher of standards but as an ongoing infrastructure for multi-stakeholder AI governance.
