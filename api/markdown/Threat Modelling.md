public:: true

# Threat Modelling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:threat-modelling",
  "@type": "Page",
  "vc:slug": "threat-modelling",
  "title": "Threat Modelling",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:threat-modelling",
  "@type": "Class",
  "label": "Threat Modelling",
  "definition": "Threat modelling is a structured security engineering process that identifies, enumerates, and prioritises potential threats to a system by reasoning systematically about adversaries, attack vectors, and mitigations before or during design. It produces an explicit model of what can go wrong, enabling security controls to be allocated proportionally to risk, and is applied across software, hardware, and AI systems throughout the development lifecycle.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:attack-vector", "label": "Attack Vector"},
      {"@id": "urn:ngm:class:threat-model", "label": "Threat Model"},
      {"@id": "urn:ngm:class:data-flow-diagram", "label": "Data Flow Diagram"},
      {"@id": "urn:ngm:class:attack-tree", "label": "Attack Tree"},
      {"@id": "urn:ngm:class:stride", "label": "STRIDE"},
      {"@id": "urn:ngm:class:cvss", "label": "CVSS"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:threat-enumeration", "label": "Threat Enumeration"},
      {"@id": "urn:ngm:class:trust-boundary", "label": "Trust Boundary"},
      {"@id": "urn:ngm:class:attack-surface-analysis", "label": "Attack Surface Analysis"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:vulnerability-management", "label": "Vulnerability Management"},
      {"@id": "urn:ngm:class:security-by-design", "label": "Security by Design"},
      {"@id": "urn:ngm:class:risk-mitigation", "label": "Risk Mitigation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:system-architecture", "label": "System Architecture"},
      {"@id": "urn:ngm:class:adversary-model", "label": "Adversary Model"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:secure-software-development-lifecycle", "label": "Secure Software Development Lifecycle"},
      {"@id": "urn:ngm:class:security-controls", "label": "Security Controls"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist-sp-800-30", "label": "NIST SP 800-30"},
      {"@id": "urn:ngm:class:iso-27001", "label": "ISO 27001"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:vulnerability-assessment", "label": "Vulnerability Assessment"},
      {"@id": "urn:ngm:class:penetration-testing", "label": "Penetration Testing"},
      {"@id": "urn:ngm:class:security-risk-management", "label": "Security Risk Management"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:vulnerability-analysis", "label": "Vulnerability Analysis"},
      {"@id": "urn:ngm:class:reactive-security", "label": "Reactive Security"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:supply-chain-risk-management", "label": "Supply Chain Risk Management"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:threat-analysis", "label": "Threat Analysis"},
    {"@id": "urn:ngm:class:security-threat-modelling", "label": "Security Threat Modelling"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  Threat modelling is a proactive [[Risk Assessment]] discipline that systematically identifies assets, adversaries, [[Attack Vector]]s, and mitigations for a system, enabling security-by-design rather than reactive patching.

- ### Relationships
  Threat modelling instantiates a [[Threat Model]] as its primary artefact and uses [[Attack Vector]] enumeration as its core analytical tool. It feeds into [[Vulnerability Management]] by establishing a risk baseline that prioritises remediation. It is a complement to, rather than substitute for, [[Vulnerability Assessment]] and [[Penetration Testing]], and is conceptually distinct from [[Vulnerability Analysis]] which focuses on specific known weaknesses rather than systemic design reasoning.

- ### Content
  - Threat modelling has roots in Microsoft's security development lifecycle (SDL) work of the early 2000s, where it was formalised as a mandatory design-phase activity. The STRIDE framework (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege), developed by Loren Kohnfelder and Praerit Garg at Microsoft in 1999, became the canonical taxonomy for categorising threats against system components. Concurrent with STRIDE, attack trees (proposed by Bruce Schneier) provided a hierarchical decomposition of how goals could be achieved by adversaries. These foundational frameworks remain widely used alongside newer approaches such as PASTA, VAST, and LINDDUN.
  - A threat modelling exercise typically follows four questions: What are we building? What can go wrong? What are we going to do about it? Did we do a good enough job? Practitioners begin by creating a data flow diagram (DFD) or architecture diagram that identifies trust boundaries, data stores, processes, and external entities. Each component and data flow is then analysed using a threat enumeration method to identify attack scenarios. Threats are rated using scoring systems such as DREAD or CVSS to prioritise them. Mitigations—architectural changes, security controls, monitoring—are mapped to each threat, and residual risks are documented for acceptance or escalation.
  - Threat modelling is applied across system types: web applications, APIs, cloud infrastructure, embedded systems, AI/ML pipelines, and supply chains. For AI systems, specialised extensions address adversarial attacks, data poisoning, model extraction, and prompt injection—categories absent from traditional frameworks. In regulated industries (finance, healthcare, defence), threat modelling is often mandated by compliance frameworks including ISO 27001, NIST SP 800-30, and the EU AI Act's risk classification requirements.
  - Between 2024 and 2025, the field has adapted rapidly to AI-specific threats. Frameworks such as MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems) extend ATT&CK-style threat catalogues to ML attack chains. Automated threat modelling tools—including AI-assisted diagram analysis that generates STRIDE annotations automatically—have lowered the barrier to adoption for smaller teams. Regulatory pressure from the EU Cyber Resilience Act and US Executive Order on AI safety is driving broader mandatory adoption. The challenge of threat modelling agentic AI systems, which have non-deterministic behaviour and complex tool interactions, remains an active research and standards concern.
