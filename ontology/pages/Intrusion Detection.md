public:: true

# Intrusion Detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:223cc249316a949fe9d9eb563748a79d67c4add0768da0d01f3a2ae68c40e3fc",
  "@type": "Page",
  "vc:slug": "intrusion-detection",
  "title": "Intrusion Detection",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:security-monitoring",
      "vc:label": "Security Monitoring"
    },
    {
      "@id": "urn:visionflow:linked:anomaly-detection",
      "vc:label": "Anomaly Detection"
    },
    {
      "@id": "urn:visionflow:linked:attack-vector",
      "vc:label": "Attack Vector"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:intrusion-detection",
  "@type": "Class",
  "label": "Intrusion Detection",
  "definition": "The security discipline of monitoring networks, hosts, and applications to identify unauthorised access, policy violations, and malicious activity in progress. Intrusion detection systems (IDS) combine signature matching against known attack patterns with anomaly detection over baselines of normal behaviour, raising alerts that feed incident response; inline variants (IPS) additionally block detected traffic, trading detection breadth against false-positive risk.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:security-monitoring",
    "label": "Security Monitoring"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:attack-vector",
        "label": "Attack Vector"
      },
      {
        "@id": "urn:ngm:class:threat-detection",
        "label": "Threat Detection"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The security discipline of monitoring networks, hosts, and applications to identify unauthorised access, policy violations, and malicious activity in progress. Intrusion detection systems (IDS) combine signature matching against known attack patterns with anomaly detection over baselines of normal behaviour, raising alerts that feed incident response; inline variants (IPS) additionally block detected traffic, trading detection breadth against false-positive risk."

- ### Semantic Classification
  - owl-class:: security:IntrusionDetection
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Security Monitoring]]
  - part-of:: [[Information Security]]
  - uses:: [[Anomaly Detection]]
  - related-to:: [[Attack Vector]]

- ### Content

  ## Definition

  **Intrusion detection** is the practice of observing systems for evidence that an attacker has gained, or is attempting to gain, unauthorised access. It is a detective control: rather than preventing compromise outright, it aims to shorten the window between initial breach and response by surfacing indicators — suspicious network flows, unexpected process execution, tampered files, anomalous logins — to security teams. Within [[Information Security]] programmes it complements preventive controls such as firewalls and access control, and forensic controls such as audit logging.

  Systems divide along two axes. By vantage point: **network-based IDS** (NIDS) such as Snort, Suricata, and Zeek inspect traffic at chokepoints, while **host-based IDS** (HIDS) such as OSSEC and Wazuh watch a single machine's logs, file integrity, and system calls. By detection method: **signature-based** detection matches traffic against curated rules describing known [[Attack Vector]] patterns, giving high precision but no coverage of novel attacks, whereas **anomaly-based** detection models normal behaviour statistically or with machine learning and flags deviations, catching zero-days at the cost of higher false-positive rates. Mature deployments layer both.

  An intrusion prevention system (IPS) sits inline and actively drops or resets connections it classifies as malicious. This changes the operational calculus: a false positive in detection mode wastes analyst time, but a false positive in prevention mode causes an outage, so IPS rulesets are typically tuned far more conservatively.

  ## Current Landscape

  - **Dominant open-source engines**: Suricata (multi-threaded NIDS/IPS), Zeek (network security monitoring and protocol analysis), and Wazuh (HIDS/XDR), frequently deployed together.
  - **Suricata 8.0 (GA 8 July 2025)**: the first major release in two years added a runtime plugin architecture (protocol parsers, loggers, and detection keywords registerable at runtime), eight new application-layer protocols, 107 new rule keywords, JA4 fingerprinting alongside JA3, an experimental inline firewall mode, and converted LibHTP plus several parsers to Rust for memory safety; the 7.0 branch remains a supported LTS line.
  - **Active security maintenance**: the 16 September 2025 releases (8.0.1 and 7.0.12) fixed four CVEs — CVE-2025-59147 through CVE-2025-59150, three rated high severity — and the 8.0.x line has continued with regular point releases into 2026.
  - **Convergence with EDR/XDR**: standalone IDS capability has been absorbed into endpoint detection and response and extended detection platforms, correlating network, host, and identity telemetry in SIEM/SOAR pipelines.
  - **Encrypted traffic**: pervasive TLS has pushed network detection towards metadata analysis (JA3/JA4 fingerprinting, flow analytics) rather than payload inspection.
  - **Machine learning**: anomaly-based detection increasingly uses unsupervised and sequence models, though alert triage cost and adversarial evasion remain unsolved research problems.
  - **Compliance drivers**: PCI DSS, NIS2, and ISO 27001 all effectively mandate intrusion detection capability, keeping it a baseline control in regulated environments.

  **Sources**:
  - https://suricata.io/2025/07/08/suricata-8-0-0-released/
  - https://suricata.io/2025/09/16/suricata-8-0-1-and-7-0-12-released/
  - https://suricata.io/2025/07/23/suricata-8-always-evolving-constantly-improving/
