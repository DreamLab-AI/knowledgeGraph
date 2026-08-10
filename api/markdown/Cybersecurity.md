public:: true

# Cybersecurity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9244dd4e7632e6d3c2660dfac1f35dc61d05f467ca5170cd86dbc09b72b73914",
  "@type": "Page",
  "vc:slug": "cybersecurity",
  "title": "Cybersecurity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9505"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cybersecurity"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cybersecurity",
  "@type": "Class",
  "label": "Cybersecurity",
  "definition": "Cybersecurity is the discipline concerned with protecting computer systems, networks, and data from unauthorised access, damage, and attack. In the AI governance context it addresses adversarial threats to machine learning models, data poisoning, model extraction, and the use of AI techniques for automated threat detection, vulnerability analysis, and intrusion detection. It overlaps strongly with privacy, encryption, access control, and authentication.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:information-security",
    "label": "Information Security"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:endpoint-security",
        "label": "Endpoint Security"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
      {
        "@id": "urn:ngm:class:threat-intelligence",
        "label": "Threat Intelligence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:intrusion-detection-system",
        "label": "Intrusion Detection System"
      },
      {
        "@id": "urn:ngm:class:firewall",
        "label": "Firewall"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-security",
        "label": "AI Security"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:digital-trust",
        "label": "Digital Trust"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-27001",
        "label": "ISO 27001"
      },
      {
        "@id": "urn:ngm:class:nist-cybersecurity-framework",
        "label": "NIST Cybersecurity Framework"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:adversarial-machine-learning",
        "label": "Adversarial Machine Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-governance-and-ethics",
        "label": "AI Governance and Ethics"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:information-security",
      "label": "Information Security"
    },
    {
      "@id": "urn:ngm:class:cyber-security",
      "label": "Cyber Security"
    }
  ],
  "quality": 0.68,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cybersecurity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9244dd4e7632e6d3c2660dfac1f35dc61d05f467ca5170cd86dbc09b72b73914"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Cybersecurity is the discipline concerned with protecting computer systems, networks, and data from unauthorised access, damage, and attack. In the AI governance context it addresses adversarial threats to machine learning models, data poisoning, model extraction, and the use of AI techniques for automated threat detection, vulnerability analysis, and intrusion detection. It overlaps strongly with privacy, encryption, access control, and authentication.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Cybersecurity
  - owl-role:: concept

- ### Relationships
  - uses [[Encryption]]
  - uses [[Authentication]]
  - uses [[Anomaly Detection]]
  - enables [[AI Security]]
  - enables [[Data Protection]]
  - relatedTo [[Privacy]]
  - relatedTo [[Access Control]]
  - relatedTo [[Vulnerability]]

- ### Content

  ## Overview

  Cybersecurity protects digital assets — systems, networks, data, and AI models — from adversarial actors. The field encompasses preventive controls (encryption, access control, authentication), detective controls (anomaly detection, intrusion detection systems), and responsive measures (incident response, vulnerability patching). AI introduces both new attack surfaces (adversarial attacks on models, data poisoning, model inversion) and new defences (AI-driven threat intelligence, automated vulnerability scanning). Privacy and data protection are tightly coupled concerns, governed by frameworks such as ISO 27001 and sector-specific regulations. In spatial and metaverse contexts, cybersecurity extends to securing XR hardware, protecting user biometric data, and ensuring integrity of shared virtual environments.

- ### Current Landscape (2026)
  - AI has become the dominant force reshaping the field: the World Economic Forum's Global Cybersecurity Outlook 2026 found 94% of respondents view AI as the most significant driver of change, and 87% named AI-related vulnerabilities the fastest-growing cyber risk of 2025, with genAI data leaks (34%) and adversarial-capability advances (29%) the leading 2026 concerns.
  - Agentic AI has emerged as the next major attack surface: autonomous agents now automate reconnaissance, payload delivery and privilege escalation, prompting frameworks such as the OWASP Agentic AI Security and Governance guidance, the OWASP AI Vulnerability Scoring System (AIVSS) and CSA's Agentic AI Red Teaming methodology, while "shadow AI" and risky enterprise prompts have become mainstream defensive concerns.
  - Post-quantum cryptography moved from theory to mandated rollout: following NIST's August 2024 finalisation of FIPS 203 (ML-KEM), 204 (ML-DSA) and 205 (SLH-DSA), the NSA's updated CNSA 2.0 guidance requires networking equipment (VPNs, routers) to support quantum-resistant algorithms by 2026, sets a 1 January 2027 procurement gate for National Security Systems, and targets full migration by 2035, driving "harvest now, decrypt later" defensive urgency.
  - Ransomware intensified and fragmented: Check Point's Cyber Security Report 2026 recorded a 48% year-on-year rise in extorted victims and a 50% increase in new ransomware-as-a-service groups, while Aon reported a roughly 95% jump in average ransom payments during 2025, with multi-extortion tactics and critical-infrastructure targeting (healthcare, manufacturing, energy) now standard.
  - Regulation shifted decisively toward accountability: the EU AI Act and US state transparency laws (e.g. California) now demand auditability of AI-agent decisions, the UN Convention against Cybercrime was adopted by the General Assembly in December 2024, and US Executive Order 14144 (January 2025) reinforced PQC and TLS 1.3 timelines, making cyber risk a board-level obligation.
  - Structural pressure grew from reduced public-sector support and rising attack volume: the termination of the MS-ISAC cooperative agreement left US state, local, tribal and territorial entities more exposed, while organisations faced an average of roughly 1,968 attack attempts per week in 2025 and infostealer/credential-harvesting malware surged.
  - Frontier challenges for 2026 centre on treating AI systems as insider threats, governing autonomous agents before the first high-profile agent-caused breach, closing identity-governance and supply-chain gaps, and executing genuine post-quantum migration rather than publishing policy alone.

- ### References
  - 1. World Economic Forum (2026). Global Cybersecurity Outlook 2026. https://www.weforum.org/publications/global-cybersecurity-outlook-2026/in-full/3-the-trends-reshaping-cybersecurity/
  - 2. National Security Agency (2025). Announcing the Commercial National Security Algorithm Suite 2.0 (CNSA 2.0). https://media.defense.gov/2025/May/30/2003728741/-1/-1/0/CSA_CNSA_2.0_ALGORITHMS.PDF
  - 3. Check Point (2026). The Trends Defining Cyber Security in 2026 — Cyber Security Report 2026. https://blog.checkpoint.com/research/the-trends-defining-cyber-security-in-2026-cyber-security-report-2026/
  - 4. Aon (2026). Cyber 2026: Evolving Threats Demand Strategic Leadership. https://www.aon.com/en/insights/articles/cyber-2026-evolving-threats-demand-strategic-leadership
  - 5. OWASP GenAI Security Project (2026). State of Agentic AI Security and Governance 2.0. https://genai.owasp.org/resource/state-of-agentic-ai-security-and-governance/
  - 6. PostQuantum.com (2026). CNSA 2.0: The Complete Guide to NSA's Post-Quantum Requirements. https://postquantum.com/cnsa-2-0/complete-guide/

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
