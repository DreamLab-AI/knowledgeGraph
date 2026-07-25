public:: true

# Security Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ced5ad266c8c42d17406e07300ddb9e28aefa37420769dcbd6e68a473bebf99e",
  "@type": "Page",
  "vc:slug": "security-framework",
  "title": "Security Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9136"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Security Framework"
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
  "@id": "urn:ngm:class:security-framework",
  "@type": "Class",
  "label": "Security Framework",
  "definition": "A Security Framework is a structured, normative system of policies, controls, standards, and procedural guidelines that an organisation applies to protect digital assets, information systems, and users from adversarial threats and accidental harm. It integrates risk management principles with technical controls across identity, access, cryptography, monitoring, and incident response to establish a cohesive defence posture. Widely adopted frameworks such as NIST CSF, ISO/IEC 27001, and CIS Controls provide systematic vocabularies for assessing security maturity and aligning investment with threat landscape. In emergent domains such as spatial computing, decentralised infrastructure, and AI-mediated platforms, security frameworks extend to cover smart-contract auditing, decentralised identity, privacy-preserving computation, and supply-chain integrity.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:audit-logging",
        "label": "Audit Logging"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:threat-modelling",
        "label": "Threat Modelling"
      },
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:privacy-preserving-technology",
        "label": "Privacy Preserving Technology"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:supply-chain-security",
        "label": "Supply Chain Security"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-cybersecurity-framework",
        "label": "NIST Cybersecurity Framework"
      },
      {
        "@id": "urn:ngm:class:iso-iec-27001",
        "label": "ISO/IEC 27001"
      },
      {
        "@id": "urn:ngm:class:cis-controls",
        "label": "CIS Controls"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:perimeter-security",
        "label": "Perimeter Security"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cyber-resilience",
        "label": "Cyber Resilience"
      },
      {
        "@id": "urn:ngm:class:security-operations-centre",
        "label": "Security Operations Centre"
      },
      {
        "@id": "urn:ngm:class:penetration-testing",
        "label": "Penetration Testing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cybersecurity-framework",
      "label": "Cybersecurity Framework"
    },
    {
      "@id": "urn:ngm:class:information-security-framework",
      "label": "Information Security Framework"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:security-framework:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ced5ad266c8c42d17406e07300ddb9e28aefa37420769dcbd6e68a473bebf99e"
  },
  "vc:resolutions": [],
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
  - A Security Framework is a structured, normative system of policies, controls, standards, and procedural guidelines that an organisation implements to protect digital assets, information systems, and users from adversarial threats and accidental harm. It unifies [[Risk Management]], [[Access Control]], [[Cryptography]], [[Incident Response]], and continuous monitoring into a cohesive and auditable defence posture. Widely adopted frameworks such as the [[NIST Cybersecurity Framework]], [[ISO/IEC 27001]], and [[CIS Controls]] provide systematic vocabularies enabling organisations to assess maturity and direct security investment proportional to threat exposure. In emergent domains including [[Spatial Computing]], [[Decentralised Identity]], and [[AI Safety]], security frameworks are extending to cover smart-contract auditing, privacy-preserving computation, and algorithmic accountability.

- ### Overview
  - Security Frameworks emerged from the recognition that point-solution security (firewalls, antivirus, patching) creates gaps exploitable by sophisticated adversaries. A framework approach instead defines a lifecycle — identify, protect, detect, respond, recover — applied consistently across people, processes, and technology.
  - Core value: they provide a shared language between technical teams, risk officers, executives, and regulators, allowing security posture to be communicated, measured, and compared.
  - A mature framework is not a checklist but a continuous programme: threats evolve, new attack surfaces appear (cloud, IoT, spatial interfaces), and controls must adapt accordingly.
  - Modern frameworks are risk-based rather than compliance-based: organisations choose controls proportional to their threat model, asset criticality, and risk appetite rather than following a one-size-fits-all prescription.
  - The interplay between security frameworks and [[Digital Sovereignty]] is increasingly significant as cross-border data flows, AI systems, and decentralised platforms introduce jurisdictional complexity.

- ### Key Components
  - **Identify** — asset inventory, risk assessments, [[Threat Modelling]], and governance structures that establish what needs protection and at what priority.
  - **Protect** — preventative controls including [[Authentication]], [[Access Control]] (RBAC/ABAC), [[Cryptography]] (TLS, AES, PKI), endpoint hardening, and secure-by-design architecture.
  - **Detect** — continuous monitoring, [[Intrusion Detection System|IDS/IPS]], [[Security Information and Event Management|SIEM]] platforms, anomaly detection, and [[Audit Logging]] enabling timely discovery of incidents.
  - **Respond** — [[Incident Response]] plans, playbooks, communication protocols, forensic capabilities, and containment procedures that limit damage when breaches occur.
  - **Recover** — business continuity planning, disaster recovery, post-incident reviews, and lessons-learned cycles that restore operations and strengthen future resilience.
  - **Supply Chain Security** — frameworks increasingly incorporate [[Software Supply Chain Security|software supply chain]] controls (SBOM, vendor vetting, dependency auditing) recognising that third-party components are a primary attack vector.
  - **Identity Layer** — [[Zero Trust Architecture]] re-centres security on identity rather than network perimeter; every request is authenticated and authorised regardless of origin network.
  - **Privacy Controls** — integration of [[Privacy Preserving Technology]] and data-minimisation principles ensures frameworks align with GDPR, CCPA, and sector-specific regulations.

- ### Applications and Use Cases
  - **Enterprise IT** — NIST CSF and ISO 27001 are the dominant frameworks for large organisations seeking to systematise security governance, achieve certification, and satisfy board-level accountability.
  - **Critical Infrastructure** — power grids, water systems, and healthcare rely on IEC 62443 and NIST SP 800-82 for operational technology (OT) environments where traditional IT controls do not directly apply.
  - **Cloud and DevSecOps** — CIS Benchmarks, the AWS Well-Architected Security Pillar, and SOC 2 Type II provide controls aligned to cloud-native deployments and continuous delivery pipelines.
  - **Financial Services** — PCI DSS governs payment card data; DORA (Digital Operational Resilience Act) mandates resilience testing and [[Incident Response]] reporting for EU financial entities.
  - **Spatial Computing and Metaverse Platforms** — security frameworks are adapting to address avatar impersonation, virtual goods theft, cross-world asset portability risks, and content moderation at scale within immersive environments.
  - **Blockchain and Web3** — [[Smart Contract Auditing]] practices (Trail of Bits, OpenZeppelin standards) and on-chain governance controls extend security frameworks into decentralised protocol stacks.
  - **AI Systems** — [[AI Safety]] and model governance frameworks (e.g. NIST AI RMF) apply security-framework thinking to risks from model poisoning, adversarial inputs, and unintended model behaviours.
  - **Public Sector and Defence** — CMMC (Cybersecurity Maturity Model Certification) requires defence contractors to implement tiered security controls mapped to NIST SP 800-171.

- ### Mechanisms and Control Families
  - **Access Management** — [[Privileged Access Management]], least-privilege enforcement, just-in-time access, and multi-factor [[Authentication]] reduce the blast radius of compromised credentials.
  - **Cryptographic Controls** — key lifecycle management, certificate authority hierarchies, [[Public Key Infrastructure|PKI]], and hardware security modules (HSMs) underpin confidentiality and integrity.
  - **Network Security** — micro-segmentation, software-defined perimeters, and [[Zero Trust Architecture]] replace flat network architectures that allowed lateral movement.
  - **Vulnerability Management** — regular scanning, patch cadence SLAs, and [[Penetration Testing]] identify weaknesses before adversaries can exploit them.
  - **Security Awareness Training** — human-layer controls addressing phishing, social engineering, and insider threat remain essential complements to technical controls.
  - **Threat Intelligence Integration** — [[Cyber Threat Intelligence]] feeds update defensive controls dynamically, enabling proactive rather than purely reactive security postures.
  - **Security Operations** — [[Security Operations Centre|SOC]] functions aggregate telemetry, triage alerts, and orchestrate response using SOAR (Security Orchestration, Automation, and Response) tooling.

- ### Relationships
  - hasPart:: [[Access Control]]
  - hasPart:: [[Incident Response]]
  - hasPart:: [[Risk Management]]
  - hasPart:: [[Audit Logging]]
  - requires:: [[Authentication]]
  - requires:: [[Cryptography]]
  - requires:: [[Threat Modelling]]
  - requires:: [[Vulnerability Management]]
  - enables:: [[Data Governance]]
  - enables:: [[Regulatory Compliance]]
  - enables:: [[Zero Trust Architecture]]
  - supports:: [[Privacy Preserving Technology]]
  - supports:: [[Digital Identity]]
  - supports:: [[Supply Chain Security]]
  - standardizedBy:: [[NIST Cybersecurity Framework]]
  - standardizedBy:: [[ISO/IEC 27001]]
  - standardizedBy:: [[CIS Controls]]
  - contrastsWith:: [[Perimeter Security]]
  - bridges-to:: [[AI Safety]]
  - bridges-to:: [[Smart Contract Auditing]]
  - bridges-to:: [[Decentralised Identity]]
  - relatedTo:: [[Cyber Resilience]]
  - relatedTo:: [[Security Operations Centre]]
  - relatedTo:: [[Penetration Testing]]

- ### Standards and Context
  - **NIST Cybersecurity Framework (CSF 2.0)** — the US NIST framework, now in version 2.0, is the most widely cited voluntary framework globally; its Govern-Identify-Protect-Detect-Respond-Recover functions structure organisational security programmes.
  - **ISO/IEC 27001:2022** — the international standard for Information Security Management Systems (ISMS); certification provides third-party assurance of systematic control implementation.
  - **CIS Critical Security Controls v8** — an opinionated, prioritised set of 18 control families distilled from real-world attack data, particularly useful for resource-constrained organisations.
  - **NIST SP 800-53** — a comprehensive catalogue of security and privacy controls for US federal information systems, also widely adopted outside government.
  - **SOC 2 (AICPA)** — a trust-services-criteria attestation commonly required by cloud service providers to demonstrate security, availability, and confidentiality controls to customers.
  - **PCI DSS** — Payment Card Industry Data Security Standard; mandatory for entities processing card payments, covering 12 high-level requirements and hundreds of sub-controls.
  - **GDPR / UK GDPR** — while primarily a privacy regulation, GDPR Article 32 mandates appropriate technical and organisational security measures, linking security frameworks directly to [[Data Protection]] law.
  - **NIST AI RMF** — the NIST AI Risk Management Framework extends security-framework thinking to [[Artificial Intelligence]] systems, addressing trustworthiness, bias, and adversarial robustness alongside traditional security controls.
  - **IEC 62443** — industrial cybersecurity standard addressing operational technology environments (SCADA, ICS) where safety and security intersect.
  - Relevant bodies: ENISA (EU), NCSC (UK), CISA (US), ISO/IEC JTC 1/SC 27.

- ### Provenance
  - sources:: NIST CSF 2.0 (csrc.nist.gov), ISO/IEC 27001:2022, CIS Controls v8, OWASP (owasp.org), SANS Institute (sans.org), NIST AI RMF 1.0
  - updated:: 2026-06-13
