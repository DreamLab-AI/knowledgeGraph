public:: true

# Attack Vector
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0ddb504bfb4cc25a16292a7c3c655d32db3fa74a575bbcdfde3df7c1e88a8134",
  "@type": "Page",
  "vc:slug": "attack-vector",
  "title": "Attack Vector",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso",
      "vc:label": "ISO"
    },
    {
      "@id": "urn:visionflow:linked:nist",
      "vc:label": "NIST"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:resilience",
      "vc:label": "Resilience"
    },
    {
      "@id": "urn:visionflow:owl:class:risk",
      "vc:label": "Risk"
    },
    {
      "@id": "urn:visionflow:owl:class:security",
      "vc:label": "Security"
    },
    {
      "@id": "urn:visionflow:owl:class:threat-actor",
      "vc:label": "Threat Actor"
    },
    {
      "@id": "urn:visionflow:owl:class:vulnerability",
      "vc:label": "Vulnerability"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Attack Vector"
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
  "@id": "urn:ngm:class:attack-vector",
  "@type": "Class",
  "label": "Attack Vector",
  "definition": "A specific path, method, or mechanism that a threat actor uses to gain unauthorised access, exploit vulnerabilities, or cause damage to a system, network, or organisation. Attack vectors span network-based exploitation, social engineering, supply-chain compromise, and AI-specific techniques such as prompt injection or model poisoning, and are categorised by access method, target layer, and sophistication.",
  "domain": "security",
  "maturity": "emerging",
  "qualityScore": 0.72,
  "subClassOf": {
    "@id": "urn:ngm:class:threat",
    "label": "Threat"
  },
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:vulnerability", "label": "Vulnerability"},
      {"@id": "urn:ngm:class:threat-actor", "label": "Threat Actor"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:exploit", "label": "Exploit"},
      {"@id": "urn:ngm:class:data-breach", "label": "Data Breach"},
      {"@id": "urn:ngm:class:lateral-movement", "label": "Lateral Movement"},
      {"@id": "urn:ngm:class:privilege-escalation", "label": "Privilege Escalation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:network-attack", "label": "Network Attack"},
      {"@id": "urn:ngm:class:social-engineering", "label": "Social Engineering"},
      {"@id": "urn:ngm:class:supply-chain-attack", "label": "Supply Chain Attack"},
      {"@id": "urn:ngm:class:insider-threat", "label": "Insider Threat"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:threat-model", "label": "Threat Model"},
      {"@id": "urn:ngm:class:cyber-kill-chain", "label": "Cyber Kill Chain"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:malware", "label": "Malware"},
      {"@id": "urn:ngm:class:zero-day", "label": "Zero-Day"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:mitre-attack", "label": "MITRE ATT&CK"},
      {"@id": "urn:ngm:class:cvss", "label": "CVSS"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:resilience", "label": "Resilience"},
      {"@id": "urn:ngm:class:security", "label": "Security"},
      {"@id": "urn:ngm:class:defense-in-depth", "label": "Defense in Depth"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:risk", "label": "Risk"},
      {"@id": "urn:ngm:class:adversarial-robustness", "label": "Adversarial Robustness"},
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"},
      {"@id": "urn:ngm:class:intrusion-detection", "label": "Intrusion Detection"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:adversarial-machine-learning", "label": "Adversarial Machine Learning"},
      {"@id": "urn:ngm:class:smart-contract-vulnerability", "label": "Smart Contract Vulnerability"},
      {"@id": "urn:ngm:class:sensor-spoofing", "label": "Sensor Spoofing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:attack-method", "label": "Attack Method"},
    {"@id": "urn:ngm:class:exploitation-technique", "label": "Exploitation Technique"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:attack-vector:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0ddb504bfb4cc25a16292a7c3c655d32db3fa74a575bbcdfde3df7c1e88a8134"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO]]",
      "resolved": "urn:visionflow:linked:iso",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST]]",
      "resolved": "urn:visionflow:linked:nist",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Resilience]]",
      "resolved": "urn:visionflow:owl:class:resilience",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk]]",
      "resolved": "urn:visionflow:owl:class:risk",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Security]]",
      "resolved": "urn:visionflow:owl:class:security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Threat Actor]]",
      "resolved": "urn:visionflow:owl:class:threat-actor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Vulnerability]]",
      "resolved": "urn:visionflow:owl:class:vulnerability",
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
  - Attack Vector is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AttackVector
  - owl-role:: Concept

- ### Relationships
  - **requires** [[Vulnerability]] — an attack vector exploits one or more vulnerabilities
  - **requires** [[Threat Actor]] — attack vectors are exercised by threat actors
  - **contrastsWith** [[Resilience]] — resilience is the defensive counterpart to attack vectors
  - **contrastsWith** [[Security]] — security controls aim to block or detect attack vectors
  - **relatedTo** [[Risk]] — successful exploitation of an attack vector realises risk
  - **relatedTo** [[Adversarial Robustness]] — AI-specific attack vectors are countered by robustness
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Blockchain]] (domain: bc)

- ### Content

  ## Definition

  An **Attack Vector** is a specific path, method, or mechanism that a threat actor uses to gain unauthorized access, exploit vulnerabilities, or cause damage to a system, network, or organization.

  ## Cross-Domain Manifestations

  ### Artificial Intelligence
  - **Adversarial Attacks**: Crafted inputs causing model misclassification
  - **Prompt Injection**: Malicious instructions embedded in LLM prompts
  - **Model Poisoning**: Corrupting training data to compromise model integrity
  - **Data Exfiltration**: Extracting training data through membership inference
  - **API Abuse**: Overwhelming inference endpoints with malicious queries

  ### Blockchain
  - **51% Attacks**: Controlling majority of network hash power
  - **Smart Contract Exploits**: Reentrancy, integer overflow, access control flaws
  - **Bridge Hacks**: Exploiting cross-chain communication protocols
  - **Private Key Theft**: Social engineering, malware, hardware compromise
  - **Front-Running**: Manipulating transaction ordering for profit

  ### Robotics
  - **Sensor Spoofing**: Feeding false data to perception systems
  - **Command Injection**: Manipulating control protocol communications
  - **Physical Tampering**: Direct hardware modification or damage
  - **GPS Jamming**: Disrupting positioning and navigation systems
  - **Firmware Exploitation**: Compromising embedded system software

  ### Metaverse
  - **Avatar Hijacking**: Stealing virtual identity credentials
  - **Virtual Property Theft**: Exploiting system bugs to steal digital assets
  - **Griefing**: Intentional harassment and disruption of user experiences
  - **Cross-Reality Phishing**: Social engineering in immersive environments
  - **Exploit Chaining**: Combining multiple vulnerabilities for escalated access

  ### Telecommunications
  - **Meeting Bombing**: Unauthorized joining of video conferences
  - **Man-in-the-Middle**: Intercepting and modifying communications
  - **VoIP Fraud**: Exploiting voice protocol vulnerabilities
  - **SIM Swapping**: Social engineering to transfer phone numbers
  - **Eavesdropping**: Passive surveillance of unencrypted communications

  ## Attack Vector Taxonomy

  ### By Access Method
  1. **Network-Based**: Remote exploitation over communication channels
  2. **Physical**: Direct hardware access and tampering
  3. **Social Engineering**: Human manipulation and deception
  4. **Supply Chain**: Compromising third-party components
  5. **Insider Threat**: Exploitation by authorized users

  ### By Target Layer
  1. **Application**: Software vulnerability exploitation
  2. **Protocol**: Communication standard weaknesses
  3. **Infrastructure**: System and network component attacks
  4. **Data**: Information theft or manipulation
  5. **Identity**: Credential compromise and impersonation

  ### By Sophistication
  1. **Opportunistic**: Automated scanning for common vulnerabilities
  2. **Targeted**: Specific victim reconnaissance and attack planning
  3. **Advanced Persistent**: Long-term stealthy compromise campaigns
  4. **Zero-Day**: Exploiting previously unknown vulnerabilities
  5. **Supply Chain**: Complex multi-stage attacks through dependencies

  ## Defensive Strategies

  ### Prevention
  - **Attack Surface Reduction**: Minimize exposed interfaces and services
  - **Security Architecture**: Defense-in-depth and zero-trust models
  - **Input Validation**: Rigorous sanitization and bounds checking
  - **Access Control**: Principle of least privilege enforcement
  - **Security Awareness**: Training against social engineering

  ### Detection
  - **Intrusion Detection**: Signature and anomaly-based monitoring
  - **Behavioral Analysis**: Identifying unusual activity patterns
  - **Threat Intelligence**: Leveraging known attack indicators
  - **Security Logging**: Comprehensive audit trail collection
  - **Honeypots**: Decoy systems for attacker observation

  ### Response
  - **Incident Response**: Prepared procedures for breach containment
  - **Forensic Analysis**: Understanding attack methods and scope
  - **System Isolation**: Quarantining compromised components
  - **Threat Hunting**: Proactive searching for hidden compromises
  - **Recovery Planning**: Restoration of normal operations

  #### Related Concepts
  - [[Vulnerability]]: Weaknesses that attack vectors exploit
  - [[Threat Actor]]: Entities using attack vectors
  - [[Resilience]]: System ability to withstand attack vectors
  - [[Security]]: Overall protection framework
  - [[Risk]]: Potential impact of successful attacks

  #### References
  - MITRE ATT&CK Framework: Comprehensive attack vector taxonomy
  - OWASP Top 10: Common web application attack vectors
  - NIST Cybersecurity Framework: Attack vector mitigation strategies
  - CWE (Common Weakness Enumeration): Vulnerability and attack vector catalog

- ### Provenance
  - sources:: [[ISO]], [[NIST]]
  - migration-date:: 2026-04-26T00:00:00Z
