public:: true

# Threat Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:threat-model",
  "@type": "Page",
  "vc:slug": "threat-model",
  "title": "Threat Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:threat-model",
  "@type": "Class",
  "label": "Threat Model",
  "definition": "A threat model is a structured representation of the security properties, assumptions, and adversarial conditions relevant to a system, used to identify potential attack vectors, prioritise mitigations, and reason systematically about security guarantees. It defines who the adversary is (capabilities, motivations, access), what assets are worth protecting, and what attacks — such as those catalogued in STRIDE or MITRE ATT&CK — could compromise confidentiality, integrity, or availability. Threat modelling is applied during system design to surface architectural weaknesses before implementation, and updated continuously as the threat landscape evolves. It is a prerequisite for sound security architecture, cryptographic protocol design, and regulatory compliance.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:security-framework", "label": "Security Framework"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:attack-vector", "label": "Attack Vector"},
      {"@id": "urn:ngm:class:vulnerability", "label": "Vulnerability"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:security-architecture", "label": "Security Architecture"},
      {"@id": "urn:ngm:class:risk-mitigation", "label": "Risk Mitigation"},
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:nist-cybersecurity-framework", "label": "NIST Cybersecurity Framework"},
      {"@id": "urn:ngm:class:threat-surface-map", "label": "Threat Surface Map"},
      {"@id": "urn:ngm:class:adversarial-robustness", "label": "Adversarial Robustness"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Threat Model]] is a structured security artefact that enumerates adversaries, their capabilities and motivations, the assets being protected, and the [[Attack Vector]] catalogue applicable to a system, providing the analytical basis for prioritised [[Security Architecture]] decisions and [[Risk Mitigation]] investment.

- ### Relationships
  - Threat models enumerate [[Vulnerability]] classes and [[Attack Vector]] patterns drawn from frameworks such as STRIDE and MITRE ATT&CK, feed directly into [[Risk Assessment]] processes to quantify likelihood and impact, inform [[Security Architecture]] design by highlighting weaknesses before implementation, and align with the [[NIST Cybersecurity Framework]] to support organisational [[Cybersecurity]] programmes; [[Adversarial Robustness]] analysis in AI systems extends threat modelling to machine learning attack surfaces captured in [[Threat Surface Map]] representations.

- ### Content
  - Formal threat modelling emerged as a discipline in the late 1990s, most influentially through Microsoft's STRIDE framework (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege), developed by Loren Kohnfelder and Praerit Garg in 1999 and later codified in the Microsoft SDL. The DREAD scoring model provided a complementary quantification of threat severity, though it has been largely superseded by CVSS in industry practice.

  - A threat modelling exercise follows a repeatable process: decompose the system into components and data flows using data flow diagrams (DFDs); enumerate threats against each element using a systematic classification; rate each threat by likelihood and impact; and identify countermeasures that reduce risk to acceptable levels. The output is a living document — the threat model — that records assumptions, trust boundaries, and mitigation commitments, updated as the system evolves.

  - Cryptographic protocol design relies especially heavily on formal threat models. The Dolev-Yao adversary model — a network-level attacker who can intercept, replay, and fabricate messages but cannot break sound cryptography — is a standard assumption in protocol analysis. Tools such as ProVerif, Tamarin, and CryptoVerif formally verify protocol security against stated threat model assumptions, catching design flaws before implementation.

  - In 2024-2025, threat modelling is being extended to AI systems, where adversarial examples, prompt injection, model extraction, and training data poisoning constitute a distinct threat taxonomy not captured by classical frameworks. MITRE ATLAS catalogues AI-specific attack techniques, and the NIST AI Risk Management Framework provides structured guidance for integrating AI threat modelling into organisational risk governance. Automated threat modelling tools using large language models are being developed to scale the process across large software portfolios.
