public:: true
alias:: NetworkSecurity

# Network Security
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:network-security",
  "@type": "Page",
  "vc:slug": "network-security",
  "title": "Network Security",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-security",
  "@type": "Class",
  "label": "Network Security",
  "definition": "Network security is the practice of protecting computer networks and the data transmitted across them from unauthorised access, misuse, modification, or denial of service through a combination of hardware controls, software policies, and operational procedures. It encompasses perimeter defence, intrusion detection and prevention, traffic analysis, encryption of data in transit, and access control applied at network boundaries and within internal segments. As networks have evolved from isolated LANs to globally distributed cloud and edge architectures, network security has broadened to encompass zero-trust models, software-defined perimeters, and AI-driven anomaly detection. It forms a foundational layer of broader cybersecurity strategy, intersecting with identity management, cryptographic standards, and regulatory compliance frameworks.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cybersecurity",
      "label": "Cybersecurity"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:network-defence",
      "label": "Network Defence"
    },
    {
      "@id": "urn:ngm:class:network-protection",
      "label": "Network Protection"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:firewall",
        "label": "Firewall"
      },
      {
        "@id": "urn:ngm:class:intrusion-detection-system",
        "label": "Intrusion Detection System"
      },
      {
        "@id": "urn:ngm:class:virtual-private-network",
        "label": "Virtual Private Network"
      },
      {
        "@id": "urn:ngm:class:network-segmentation",
        "label": "Network Segmentation"
      },
      {
        "@id": "urn:ngm:class:security-information-and-event-management",
        "label": "Security Information and Event Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authentication-mechanism",
        "label": "Authentication Mechanism"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-security",
        "label": "Data Security"
      },
      {
        "@id": "urn:ngm:class:digital-security",
        "label": "Digital Security"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Secure Communication"
      },
      {
        "@id": "urn:ngm:class:compliance-management",
        "label": "Compliance Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      },
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      },
      {
        "@id": "urn:ngm:class:endpoint-security",
        "label": "Endpoint Security"
      },
      {
        "@id": "urn:ngm:class:threat-intelligence",
        "label": "Threat Intelligence"
      },
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
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
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:software-defined-networking",
        "label": "Software-Defined Networking"
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
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Network Security]] is the discipline of defending computer networks and the data they carry from unauthorised access, disruption, misuse, and exploitation through layered controls spanning hardware, software, and operational policy. It draws on [[Encryption]], [[Firewall]] technologies, [[Intrusion Detection System]]s, and [[Authentication Mechanism]]s applied across the full network stack — from physical layer to application layer. Modern network security has evolved well beyond classical perimeter defence to embrace [[Zero Trust Architecture]], software-defined controls, and AI-driven [[Anomaly Detection]] capable of identifying novel threats in real time. It is a foundational subdiscipline of [[Cybersecurity]] and intersects with [[Information Security]], [[Identity Management]], and regulatory compliance.

- ### Overview
  - Network security addresses the challenge that virtually every modern digital service depends on reliable, tamper-resistant network communication. Compromise at the network layer can expose credentials, customer data, intellectual property, and operational systems at scale.
  - Early network security (1980s–1990s) focused on perimeter defences — [[Firewall]]s and access control lists — separating trusted internal networks from untrusted external ones. This perimeter model assumed internal traffic was inherently safe.
  - The growth of the internet, mobile computing, cloud services, and remote working shattered the perimeter assumption. Threats now originate from within as well as outside; lateral movement inside a supposedly trusted network is a hallmark of advanced persistent threats.
  - The response has been a shift toward [[Zero Trust Architecture]]: "never trust, always verify." Every network connection — regardless of source — is authenticated, authorised, and continuously validated. Micro-segmentation and identity-aware proxies enforce this model at scale.
  - AI and machine learning now underpin network detection and response (NDR) tools, baselining normal traffic behaviour and identifying anomalies indicative of sophisticated attacks. [[Machine Learning]] classification complements rule-based signature detection to catch unknown threat patterns.

- ### Key Components
  - **[[Firewall]]** — packet filtering, stateful inspection, and next-generation firewalls (NGFW) that enforce policy at network boundaries, inspecting layer 3–7 attributes.
  - **[[Intrusion Detection System]]** / Intrusion Prevention System (IDS/IPS) — passive or active monitors that analyse traffic for attack signatures and behavioural anomalies, alerting or blocking automatically.
  - **[[Virtual Private Network]]** — encrypted tunnels (IPsec, WireGuard, SSL/TLS) that extend private network connectivity over public infrastructure, protecting data in transit.
  - **[[Network Segmentation]]** — dividing a network into zones (VLANs, subnets, micro-segments) to contain breaches and limit lateral movement between segments.
  - **[[Transport Layer Security]]** (TLS) — the dominant protocol for encrypting data in transit; TLS 1.3 removed legacy cipher suites and is now the baseline for secure communication.
  - **[[Deep Packet Inspection]]** (DPI) — inspection of packet payloads to detect malware, policy violations, and covert channels; limited by end-to-end [[Encryption]] but supplemented by encrypted traffic analysis.
  - **[[Security Information and Event Management]]** (SIEM) — centralised log aggregation, correlation, and alerting platforms that give analysts a unified view of network activity across heterogeneous environments.
  - **[[Anomaly Detection]]** — statistical and machine-learning-based methods that identify deviations from baseline traffic patterns, surfacing zero-day exploits and insider threats invisible to signature detection.
  - **[[Access Control]]** — network-level policies (ACLs, role-based access, attribute-based access) governing which hosts, users, and services may communicate.
  - **[[Public Key Infrastructure]]** (PKI) — the certificate authority ecosystem underpinning TLS and other cryptographic authentication on networks.
  - **DNS Security** (DNSSEC, DNS over HTTPS/TLS) — protecting the Domain Name System from cache poisoning, hijacking, and eavesdropping.
  - **Network Access Control** (NAC) — enforcement of security posture requirements (patch level, AV status) before allowing devices onto the network.

- ### Mechanisms
  - **Packet filtering** — matching packets against rules (source/destination IP, port, protocol) to permit or deny traffic at line rate.
  - **Stateful inspection** — tracking connection state so that replies to legitimate outbound requests are permitted while unsolicited inbound packets are blocked.
  - **Application-layer gateways** — proxies that understand application protocols (HTTP, SMTP, DNS) and can enforce application-specific security policy.
  - **Network Address Translation** (NAT) — mapping private addresses to public ones, incidentally hiding internal topology from external observers.
  - **Rate limiting and traffic shaping** — mitigating volumetric denial-of-service attacks and preventing bandwidth abuse.
  - **Encrypted traffic analysis** — inferring threat signals (malware command-and-control patterns, data exfiltration) from packet metadata, timing, and flow statistics without decrypting payloads — critical when TLS 1.3 limits DPI.
  - **Software-Defined Networking** ([[Software-Defined Networking]]) — centralised programmable control planes that dynamically enforce network security policy, enable rapid segmentation changes, and integrate with orchestration systems.
  - **Microsegmentation** — fine-grained workload-to-workload policy enforcement inside data centres and cloud environments, replacing coarse VLAN-based segmentation.

- ### Applications and Use Cases
  - **Enterprise network protection** — firewalling, IDS/IPS, SIEM, and VPN provide baseline security for corporate networks connecting distributed offices and remote workers.
  - **Data centre and cloud security** — microsegmentation, cloud-native security groups, and service meshes enforce east-west traffic policy inside virtualised and containerised environments.
  - **Industrial control systems (ICS) / OT security** — protecting operational technology networks (SCADA, PLC) that control physical infrastructure (power grids, water treatment); air-gapping or strict unidirectional data-flow controls are common given safety implications.
  - **Telecommunications network security** — securing 4G/5G core networks, roaming interfaces, and signalling protocols (SS7, Diameter) against interception and subscriber tracking.
  - **IoT network security** — segmenting IoT devices on isolated VLANs, enforcing strict outbound-only or device-class-specific policies, and monitoring for anomalous device behaviour.
  - **Secure remote access** — VPNs, Zero Trust Network Access (ZTNA) solutions, and identity-aware proxies replacing legacy VPN concentrators for cloud-first remote workforces.
  - **Anti-DDoS** — scrubbing centres, anycast routing, and rate-limiting defences absorbing volumetric distributed denial-of-service floods.
  - **Forensics and incident response** — packet capture (PCAP), NetFlow records, and SIEM event trails enabling post-incident reconstruction of attack timelines.

- ### Relationships
  - uses:: [[Encryption]]
  - uses:: [[Network Protocol]]
  - uses:: [[Anomaly Detection]]
  - uses:: [[Transport Layer Security]]
  - uses:: [[Deep Packet Inspection]]
  - hasPart:: [[Firewall]]
  - hasPart:: [[Intrusion Detection System]]
  - hasPart:: [[Virtual Private Network]]
  - hasPart:: [[Network Segmentation]]
  - hasPart:: [[Security Information and Event Management]]
  - requires:: [[Authentication Mechanism]]
  - requires:: [[Access Control]]
  - requires:: [[Identity Management]]
  - enables:: [[Data Security]]
  - enables:: [[Digital Security]]
  - enables:: [[Secure Communication]]
  - enables:: [[Compliance Management]]
  - dependsOn:: [[Public Key Infrastructure]]
  - dependsOn:: [[Cryptography]]
  - relatedTo:: [[Zero Trust Architecture]]
  - relatedTo:: [[Information Security]]
  - relatedTo:: [[Endpoint Security]]
  - relatedTo:: [[Threat Intelligence]]
  - relatedTo:: [[Vulnerability Management]]
  - contrastsWith:: [[Perimeter Security]]
  - bridges-to:: [[Machine Learning]]
  - bridges-to:: [[Software-Defined Networking]]
  - standardizedBy:: [[NIST Cybersecurity Framework]]
  - standardizedBy:: [[ISO/IEC 27001]]

- ### Standards and Context
  - **[[NIST Cybersecurity Framework]]** (CSF 2.0, 2024) — provides a risk-based framework for managing cybersecurity risk across Identify, Protect, Detect, Respond, and Recover functions; widely adopted for network security programme governance.
  - **[[ISO/IEC 27001]]** — the international standard for information security management systems; Annex A controls include network security management (A.8.20–A.8.22 in the 2022 edition).
  - **NIST SP 800-41** — guidelines on firewalls and firewall policies.
  - **NIST SP 800-94** — guide to intrusion detection and prevention systems.
  - **NIST SP 800-77** — guide to IPsec VPNs.
  - **RFC 8446** — defines TLS 1.3, the current standard for transport security.
  - **PCI DSS** — Payment Card Industry Data Security Standard; mandates specific network segmentation and monitoring controls for cardholder data environments.
  - **IEC 62443** — industrial cybersecurity standard series defining security levels for industrial automation and control system networks.
  - **Post-Quantum Cryptography migration** — NIST finalised ML-KEM (CRYSTALS-Kyber), ML-DSA, and SLH-DSA in 2024; organisations must inventory cryptographic dependencies across network stacks to plan migration before quantum computers threaten RSA/ECC.
  - Key standardisation bodies: IETF (protocol standards), IEEE 802.1X (port-based NAC), NIST, ISO/IEC JTC 1/SC 27, ETSI (telecommunications).

- ### Current Landscape (2026)
  - Post-quantum cryptography has moved from standard to deployment: after NIST finalised FIPS 203 (ML-KEM), 204 (ML-DSA) and 205 (SLH-DSA) in August 2024 and added HQC as a fourth-round selection in March 2025, network vendors are now shipping quantum-resistant transport — Cloudflare declared Cloudflare One the first SASE platform with end-to-end hybrid ML-KEM encryption across Zero Trust, Secure Web Gateway and IPsec/WAN in February 2026.
  - Migration deadlines are now hard drivers of procurement: NIST and NSA's CNSA 2.0 timeline deprecates RSA/ECC after 2030 and disallows classical public-key cryptography in national security systems by 2035, pushing "harvest now, decrypt later" defence and crypto-agility (automated rotation, short-lived certificates) into 2026 network roadmaps.
  - AI has become a force multiplier on both sides: the Unit 42 2026 Global Incident Response Report (17 February 2026, based on 750+ incidents) found AI compressed the fastest attacks to just 72 minutes from access to exfiltration — a 4x speed-up year on year — with 87% of attacks spanning two or more attack surfaces.
  - The perimeter has decisively shifted to identity and the browser: identity weaknesses featured in 89% of Unit 42 investigations, 65% of initial access was identity-driven, 48% of attacks involved the browser, and SaaS supply-chain attacks abusing OAuth tokens and API keys have surged 3.8x since 2022.
  - Zero Trust and SASE are now mainstream architecture rather than aspiration: AlgoSec's 2025 State of Network Security report found 56% of organisations fully or partially implementing zero trust, with Zscaler leading SASE at ~35%, and NIST NCCoE published SP 1800-35 ("Implementing a Zero Trust Architecture") with 24 vendors.
  - The threat landscape is increasingly AI-augmented and ransomware-centric: ENISA's Threat Landscape 2025 (1 October 2025, 4,875 incidents) reported phishing driving ~60% of intrusions, infostealers dominant, and threat groups using jailbroken LLMs such as WormGPT, EscapeGPT and FraudGPT to automate social engineering.
  - Open frontier as of 2026: securing "agentic" AI identities and runtime AI firewalls (Palo Alto Networks' 2026 predictions warn of compromised agents as an "autonomous insider"), closing east-west inspection and visibility gaps (71% of teams cite visibility struggles), and completing PQC migration across TLS, SSH and IPsec before the 2030 deadline while maintaining crypto-agility as algorithms evolve (e.g. the HAWK signature candidate was withdrawn in July 2026 after an AI-discovered flaw).

- ### References
  - 1. Cloudflare (2026). Cloudflare One is the first SASE offering modern post-quantum encryption. https://blog.cloudflare.com/post-quantum-sase/
  - 2. Palo Alto Networks Unit 42 (2026). Unit 42 Report: AI and Attack Surface Complexity Fuel Majority of Breaches (2026 Global Incident Response Report). https://www.paloaltonetworks.com/company/press/2026/unit-42-report--ai-and-attack-surface-complexity-fuel-majority-of-breaches
  - 3. NIST (2025-2026). Post-Quantum Cryptography — standards, HQC selection and migration timeline. https://csrc.nist.gov/Projects/post-quantum-cryptography/news
  - 4. ENISA (2025). ENISA Threat Landscape 2025. https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025
  - 5. AlgoSec (2025). The State of Network Security Report 2025. https://www.algosec.com/press-release/algosec-2025-state-of-network-security-report

- ### Provenance
  - sources:: NIST SP 800-series; ISO/IEC 27001:2022; RFC 8446; NIST PQC Final Standards 2024; IETF working group publications; established cybersecurity literature
  - updated:: 2026-06-13
