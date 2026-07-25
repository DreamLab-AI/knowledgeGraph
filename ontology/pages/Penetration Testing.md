public:: true

# Penetration Testing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b5c2f77a4f3cf8ced9df9bea5003765006bec2f3e713ca13ee4144f67843c759",
  "@type": "Page",
  "vc:slug": "penetration-testing",
  "title": "Penetration Testing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cybersecurity",
      "vc:label": "Cybersecurity"
    },
    {
      "@id": "urn:visionflow:linked:information-security",
      "vc:label": "Information Security"
    },
    {
      "@id": "urn:visionflow:linked:software-testing",
      "vc:label": "Software Testing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Penetration Testing"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:penetration-testing",
  "@type": "Class",
  "label": "Penetration Testing",
  "definition": "Penetration testing is an authorised, structured simulation of real-world adversarial attacks against computing systems, networks, or applications, conducted to identify exploitable vulnerabilities before malicious actors can leverage them. Skilled practitioners — called penetration testers or ethical hackers — follow an agreed scope and rules of engagement, systematically applying the same techniques, tools, and thought processes used by genuine threat actors. Findings are documented with severity ratings, proof-of-concept evidence, and remediation guidance, directly informing an organisation's risk management and security improvement programme. The discipline bridges theoretical vulnerability knowledge with practical risk quantification, distinguishing it from automated scanning or passive audit activities.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cybersecurity",
      "label": "Cybersecurity"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:security-assessment",
        "label": "Security Assessment"
      },
      {
        "@id": "urn:ngm:class:red-teaming",
        "label": "Red Teaming"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:vulnerability-scanning",
        "label": "Vulnerability Scanning"
      }
    ],
    "requires": [
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
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:social-engineering",
        "label": "Social Engineering"
      },
      {
        "@id": "urn:ngm:class:network-analysis",
        "label": "Network Protocol Analysis"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:owasp",
        "label": "OWASP"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:vulnerability-scanning",
        "label": "Vulnerability Scanning"
      },
      {
        "@id": "urn:ngm:class:security-audit",
        "label": "Security Audit"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:threat-intelligence",
        "label": "Threat Intelligence"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
      {
        "@id": "urn:ngm:class:zero-day-exploits",
        "label": "Zero-Day Vulnerability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-security",
        "label": "AI Security"
      },
      {
        "@id": "urn:ngm:class:software-testing",
        "label": "Software Testing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ethical-hacking",
      "label": "Ethical Hacking"
    },
    {
      "@id": "urn:ngm:class:pen-testing",
      "label": "Pen Testing"
    }
  ],
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:penetration-testing:1576699565d0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b5c2f77a4f3cf8ced9df9bea5003765006bec2f3e713ca13ee4144f67843c759"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cybersecurity]]",
      "resolved": "urn:visionflow:linked:cybersecurity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security]]",
      "resolved": "urn:visionflow:linked:information-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Testing]]",
      "resolved": "urn:visionflow:linked:software-testing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Penetration testing is an authorised, goal-directed simulation of adversarial attacks carried out against information systems, networks, or applications to identify exploitable weaknesses before real attackers do. Practitioners operate within an agreed [[Rules of Engagement]] and scope, applying [[Ethical Hacking]] techniques — from [[Reconnaissance]] through exploitation to [[Post-Exploitation]] — with the aim of demonstrating actual risk rather than theoretical exposure. Unlike automated [[Vulnerability Scanning]], a penetration test exercises chained weaknesses, business logic flaws, and realistic attack paths, producing a prioritised report that drives [[Risk Management]] and [[Security Hardening]] decisions. It is a cornerstone practice within the broader [[Cybersecurity]] and [[Information Security]] disciplines.

- ### Overview
  - Penetration testing exists because automated tools cannot faithfully replicate the creative, contextual reasoning of an intelligent adversary. Human testers chain individually low-risk weaknesses into high-impact attack paths, assess business impact, and surface logic vulnerabilities invisible to scanners.
  - The engagement lifecycle follows a repeatable methodology: scoping and authorisation, [[Reconnaissance]] and information gathering, [[Vulnerability Scanning]], exploitation (manual and tool-assisted), [[Post-Exploitation]] analysis (lateral movement, privilege escalation, data exfiltration simulation), and reporting.
  - Results are presented as a written report containing an executive summary for leadership, a technical findings section with proof-of-concept evidence, CVSS severity ratings, and prioritised remediation recommendations.
  - Penetration tests are typically commissioned annually or after major system changes, M&A events, or regulatory requirements. They complement continuous [[Vulnerability Management]] and ongoing [[Threat Intelligence]] feeds.
  - The practice maps directly onto attacker playbooks described in frameworks such as [[MITRE ATT&CK]], helping defenders validate their detection and response capabilities.

- ### Key Components
  - **Scoping and Authorisation**
    - Written authorisation (a statement of work or penetration-testing agreement) defines the target systems, permitted techniques, time windows, and emergency contacts. This distinguishes legal [[Ethical Hacking]] from criminal intrusion.
    - [[Threat Modelling]] during scoping identifies likely adversaries and attack surfaces relevant to the client's business context.
  - **Reconnaissance**
    - Passive [[Reconnaissance]] collects open-source intelligence (OSINT) — domain records, certificate transparency logs, social media, job postings — without touching target systems.
    - Active reconnaissance uses port scanning, service fingerprinting, and directory enumeration against in-scope targets.
  - **Vulnerability Identification**
    - [[Vulnerability Scanning]] tools (e.g. Nessus, OpenVAS) automate detection of known CVEs. Testers then manually validate and contextualise findings.
    - Web application testing follows [[OWASP]] Testing Guide methodology, covering injection, authentication flaws, IDOR, SSRF, and deserialisation vulnerabilities.
  - **Exploitation**
    - [[Exploit Framework]] platforms such as Metasploit provide ready-made exploits and payloads; testers also write custom proof-of-concept code for novel findings.
    - [[Social Engineering]] (phishing, vishing, pretexting) tests the human layer of defences alongside technical controls.
    - Wireless testing assesses 802.11 and Bluetooth attack surfaces, including WPA handshake capture and rogue access points.
  - **Post-Exploitation**
    - After gaining a foothold, testers assess lateral movement potential, privilege escalation paths, credential harvesting, and data exfiltration feasibility.
    - [[Post-Exploitation]] activities simulate the dwell-time and impact a real attacker would achieve, quantifying blast radius.
  - **Reporting**
    - Findings are graded using CVSS or a bespoke rating scale and presented with business-risk context, reproduction steps, and remediation guidance.
    - A re-test validates that critical findings have been effectively remediated.

- ### Engagement Types
  - **Black-Box** — testers have no prior knowledge of the target, simulating an external attacker. Realistic but slower; may miss deeper logic flaws.
  - **White-Box** — full access to source code, architecture diagrams, and credentials is granted, enabling comprehensive coverage and efficient use of tester time.
  - **Grey-Box** — partial knowledge (e.g. low-privilege user account) mimics an insider threat or post-phishing attacker.
  - **External Network** — focuses on internet-facing infrastructure: firewalls, VPNs, web servers, mail gateways.
  - **Internal Network** — simulates a compromised internal host or rogue insider, testing segmentation, [[Active Directory]] attack paths, and lateral movement controls.
  - **Web Application** — targets HTTP/HTTPS endpoints using [[OWASP]] methodology; may include REST APIs and GraphQL surfaces.
  - **Mobile Application** — assesses Android or iOS apps for insecure data storage, improper authentication, and API vulnerabilities.
  - **Cloud Infrastructure** — evaluates misconfigured IAM policies, exposed storage buckets, container escapes, and serverless function attack paths on AWS, Azure, or GCP.
  - **Social Engineering** — phishing campaigns, pretexting calls, and physical access tests targeting human and process controls.
  - **Red Team Exercise** — an extended, full-scope engagement combining multiple vectors to test detection, [[Incident Response]], and organisational resilience; distinct from a time-boxed penetration test.

- ### Applications / Use Cases
  - **Regulatory Compliance** — PCI DSS, HIPAA, ISO 27001, and DORA mandate periodic penetration testing of in-scope systems.
  - **Pre-Production Validation** — testing new products or APIs before launch catches critical flaws before public exposure.
  - **Merger and Acquisition Due Diligence** — assessing the security posture of an acquisition target surfaces hidden liabilities.
  - **Supplier and Third-Party Assurance** — organisations test critical SaaS or supply-chain partners to validate security commitments.
  - **Security Control Validation** — confirming that SIEM rules, EDR, and [[Intrusion Detection Systems]] actually detect expected attack techniques.
  - **AI and ML System Testing** — emerging practice applying penetration testing methodology to [[AI Security]], including prompt injection, model extraction, and adversarial input attacks against [[Large Language Models]] and ML inference APIs. This bridges traditional penetration testing with [[AI Security]] concerns.

- ### Relationships
  - partOf:: [[Security Assessment]]
  - partOf:: [[Red Teaming]]
  - hasPart:: [[Reconnaissance]]
  - hasPart:: [[Vulnerability Scanning]]
  - hasPart:: [[Exploit Development]]
  - hasPart:: [[Post-Exploitation]]
  - requires:: [[Threat Modelling]]
  - requires:: [[Rules of Engagement]]
  - requires:: [[Vulnerability Management]]
  - enables:: [[Information Security]]
  - enables:: [[Risk Management]]
  - enables:: [[Security Hardening]]
  - uses:: [[Exploit Framework]]
  - uses:: [[Social Engineering]]
  - uses:: [[Network Protocol Analysis]]
  - standardizedBy:: [[PTES]]
  - standardizedBy:: [[OWASP]]
  - standardizedBy:: [[NIST SP 800-115]]
  - contrastsWith:: [[Vulnerability Scanning]]
  - contrastsWith:: [[Security Audit]]
  - contrastsWith:: [[Bug Bounty Programme]]
  - relatedTo:: [[Ethical Hacking]]
  - relatedTo:: [[Threat Intelligence]]
  - relatedTo:: [[Incident Response]]
  - relatedTo:: [[Zero-Day Vulnerability]]
  - bridges-to:: [[AI Security]]
  - bridges-to:: [[Software Testing]]

- ### Standards & Context
  - **PTES (Penetration Testing Execution Standard)** — community-developed standard defining seven phases: pre-engagement interactions, intelligence gathering, threat modelling, vulnerability analysis, exploitation, post-exploitation, and reporting.
  - **OWASP Testing Guide** — authoritative methodology for web application penetration testing, maintained by the [[OWASP]] foundation and updated to reflect current vulnerability patterns.
  - **NIST SP 800-115** — US government technical guide for [[Information Security]] testing and assessment, used widely in federal and regulated environments.
  - **PTES / OSSTMM** — Open Source Security Testing Methodology Manual provides quantitative metrics for security measurement across multiple testing channels.
  - **CBEST / TIBER-EU** — threat-intelligence-led penetration testing frameworks mandated for financial institutions by UK FCA and European Central Bank respectively, requiring scenario design based on real threat actor TTPs from [[Threat Intelligence]] reporting.
  - **MITRE ATT&CK** — adversary behaviour framework used to structure penetration test scenarios around real-world attacker tactics, techniques, and procedures, improving [[Security Hardening]] prioritisation.
  - **Certifications** — OSCP (Offensive Security Certified Professional), CREST, CHECK, CEH, and GPEN are industry-recognised credentials that validate penetration tester competence.

- ### Provenance
  - sources:: PTES standard; OWASP Testing Guide v4; NIST SP 800-115; MITRE ATT&CK framework; CREST professional standards; established practitioner knowledge
  - updated:: 2026-06-13
