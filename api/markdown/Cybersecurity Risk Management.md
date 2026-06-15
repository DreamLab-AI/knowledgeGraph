public:: true

# Cybersecurity Risk Management

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:cybersecurity-risk-management",
  "@type": "Page",
  "title": "Cybersecurity Risk Management",
  "vc:slug": "cybersecurity-risk-management",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cybersecurity-risk-management",
  "@type": "Class",
  "label": "Cybersecurity Risk Management",
  "definition": "A structured discipline for identifying, assessing, prioritising, and treating risks to information systems, data assets, and digital infrastructure arising from threats such as malicious actors, system vulnerabilities, and operational failures. Cybersecurity risk management integrates threat modelling, vulnerability assessment, control selection, and residual risk acceptance into a repeatable governance cycle aligned with organisational risk appetite. Frameworks such as NIST CSF, ISO 27005, and FAIR provide structured methodologies. It bridges technical security practice with executive governance and regulatory compliance.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}],
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:security", "label": "Security"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"},
      {"@id": "urn:ngm:class:information-security-management", "label": "Information Security Management"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:threat-modelling", "label": "Threat Modelling"},
      {"@id": "urn:ngm:class:vulnerability-assessment", "label": "Vulnerability Assessment"},
      {"@id": "urn:ngm:class:continuous-monitoring", "label": "Continuous Monitoring"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:security-framework", "label": "Security Framework"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"},
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:supply-chain-security", "label": "Supply Chain Security"},
      {"@id": "urn:ngm:class:penetration-testing", "label": "Penetration Testing"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist-cybersecurity-framework", "label": "NIST Cybersecurity Framework"},
      {"@id": "urn:ngm:class:iso-27001", "label": "ISO 27001"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:resilience", "label": "Resilience"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:security-operations", "label": "Security Operations"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Cybersecurity Risk Management]] is the disciplined, repeatable process of identifying threats to digital assets, quantifying their likelihood and impact, selecting proportionate controls, and maintaining an auditable record of residual risk accepted by governance bodies.
  - It bridges operational [[Security]] practice with executive [[Governance]] by translating technical vulnerability signals into business risk language aligned with organisational risk appetite.

- ### Overview
  - Modern organisations face a continuously evolving threat landscape: ransomware groups, nation-state actors, insider threats, and supply chain compromises each demand tailored risk treatment strategies.
  - The NIST Cybersecurity Framework organises cybersecurity activities around five functions — Identify, Protect, Detect, Respond, Recover — providing a common language between security teams and boards.
  - Quantitative risk models such as FAIR (Factor Analysis of Information Risk) translate qualitative threat assessments into monetary loss estimates, enabling prioritisation against financial thresholds.
  - AI systems introduce novel risk surfaces — model inversion, adversarial inputs, data poisoning — that require extensions to classical cybersecurity risk taxonomies, bridging this domain with [[AI Safety]] concerns.

- ### Key Aspects
  - **Threat modelling** — structured identification of adversary capabilities, attack surfaces, and likely attack paths.
  - **Control mapping** — matching identified risks to preventive, detective, and corrective controls from established catalogues (CIS Controls, NIST 800-53).
  - **Residual risk acceptance** — formal sign-off by risk owners on risks that exceed treatment thresholds but are accepted as operationally necessary.
  - **Continuous improvement** — iterative risk register updates triggered by new threat intelligence, audit findings, or incident lessons learned.

- ### Applications
  - Enterprise security programme governance and board-level risk reporting.
  - Cloud migration risk assessments evaluating shared responsibility boundaries.
  - AI system deployment risk gates requiring threat model sign-off before production.
  - Third-party and [[Supply Chain Security]] risk assessments for vendor onboarding.

- ### Relationships
  - bridgesTo:: [[Governance]]
  - bridgesTo:: [[Security]]
  - implements:: [[Risk Management]]
  - implements:: [[Information Security Management]]
  - requires:: [[Threat Modelling]]
  - requires:: [[Vulnerability Assessment]]
  - requires:: [[Continuous Monitoring]]
  - uses:: [[Security Framework]]
  - uses:: [[Risk Assessment]]
  - enables:: [[Incident Response]]
  - enables:: [[Compliance Monitoring]]
  - relatedTo:: [[AI Safety]]
  - relatedTo:: [[Supply Chain Security]]
  - relatedTo:: [[Penetration Testing]]
  - standardizedBy:: [[NIST Cybersecurity Framework]]
  - standardizedBy:: [[ISO 27001]]
  - supports:: [[Resilience]]
  - supports:: [[Accountability]]
  - dependsOn:: [[Security Operations]]

- ### Provenance
  - updated:: 2026-06-15
