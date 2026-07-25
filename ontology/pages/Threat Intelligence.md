public:: true

# Threat Intelligence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e27dcfa38a0696b849c8acf527cf8d56cceac814114024a005789cd8ec2ad2d3",
  "@type": "Page",
  "vc:slug": "threat-intelligence",
  "title": "Threat Intelligence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-security",
      "vc:label": "Network Security"
    },
    {
      "@id": "urn:visionflow:linked:information-security",
      "vc:label": "Information Security"
    },
    {
      "@id": "urn:visionflow:linked:cybersecurity",
      "vc:label": "Cybersecurity"
    },
    {
      "@id": "urn:visionflow:linked:https-www-cisa-gov-topics-cyber-threats-and-advisories",
      "vc:label": "https://www.cisa.gov/topics/cyber-threats-and-advisories"
    },
    {
      "@id": "urn:visionflow:linked:https-attack-mitre-org",
      "vc:label": "https://attack.mitre.org/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Threat Intelligence"
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
  "@id": "urn:ngm:class:threat-intelligence",
  "@type": "Class",
  "label": "Threat Intelligence",
  "definition": "Threat intelligence is the disciplined process of collecting, processing, analysing, and disseminating information about adversaries, their capabilities, intentions, and tactics in order to enable organisations to make informed defensive and strategic decisions. It transforms raw threat data — indicators of compromise, malware signatures, actor profiles, campaign timelines — into contextualised, actionable knowledge tailored to a specific audience. Intelligence is typically classified by time horizon and consumer: strategic intelligence informs executive risk decisions, operational intelligence guides incident response planning, and tactical intelligence feeds real-time detection and blocking systems. Sharing platforms such as STIX/TAXII and ISACs enable cross-organisational distribution of finished intelligence to raise collective defensive posture.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cybersecurity",
      "label": "Cybersecurity"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:cyber-threat-intelligence",
      "label": "Cyber Threat Intelligence"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:threat-actor",
        "label": "Threat Actor Profiling"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:open-source-intelligence",
        "label": "Open Source Intelligence"
      },
      {
        "@id": "urn:ngm:class:data-aggregation",
        "label": "Data Aggregation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
      {
        "@id": "urn:ngm:class:security-operations-centre",
        "label": "Security Operations Centre"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      },
      {
        "@id": "urn:ngm:class:threat-modelling",
        "label": "Threat Modelling"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:stix-taxii",
        "label": "STIX/TAXII"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:security-information-and-event-management",
        "label": "Security Information and Event Management"
      },
      {
        "@id": "urn:ngm:class:endpoint-detection-and-response",
        "label": "Endpoint Detection and Response"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:oasis",
        "label": "OASIS Open"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:threat-hunting",
        "label": "Threat Hunting"
      },
      {
        "@id": "urn:ngm:class:dark-web-monitoring",
        "label": "Dark Web Monitoring"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:threat-intelligence:a02f9aafc870",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e27dcfa38a0696b849c8acf527cf8d56cceac814114024a005789cd8ec2ad2d3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Security]]",
      "resolved": "urn:visionflow:linked:network-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security]]",
      "resolved": "urn:visionflow:linked:information-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cybersecurity]]",
      "resolved": "urn:visionflow:linked:cybersecurity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.cisa.gov/topics/cyber-threats-and-advisories]]",
      "resolved": "urn:visionflow:linked:https-www-cisa-gov-topics-cyber-threats-and-advisories",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://attack.mitre.org/]]",
      "resolved": "urn:visionflow:linked:https-attack-mitre-org",
      "kind": "StubLink"
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
  - Threat intelligence is the disciplined process of collecting, processing, analysing, and disseminating evidence-based knowledge about adversaries and cyber threats, enabling organisations to make informed defensive and strategic decisions. It contextualises raw data — [[Indicators of Compromise]], malware signatures, actor profiles, and campaign observations — into actionable knowledge for specific audiences. Grounded in the intelligence cycle, it bridges [[Information Security]] operational practice and [[Risk Management]] strategy, feeding systems from [[Security Information and Event Management]] platforms to executive briefing decks. Standards such as [[STIX/TAXII]] and frameworks like the [[MITRE ATT&CK Framework]] provide shared vocabularies that make intelligence machine-readable and interoperable across organisations.

- ### Overview
  - Threat intelligence emerged as a formal discipline from military and national-intelligence tradecraft applied to the cyber domain. Where [[Cybersecurity]] encompasses the broad set of controls and practices for protecting digital assets, threat intelligence specifically concerns the adversary: who they are, what they want, how they operate, and what they have done previously.
  - The intelligence life cycle has four to six canonical phases depending on the framework used:
    - **Direction** — defining intelligence requirements based on what the organisation needs to protect and from whom
    - **Collection** — gathering raw data from technical feeds ([[Open Source Intelligence]], commercial threat feeds, honeypots, dark-web sensors, malware sandboxes) and human sources
    - **Processing** — normalising, deduplicating, and structuring raw data into a common representation ([[Data Aggregation]])
    - **Analysis** — applying analyst expertise, statistical tools, and increasingly [[Machine Learning]] to derive meaning, attribution, and prediction
    - **Dissemination** — delivering finished intelligence in formats tailored to consumers (STIX bundles for tools, PDF reports for executives, structured feeds for [[Security Operations Centre]] teams)
    - **Feedback** — iterating requirements based on consumer response
  - Finished intelligence products are classified by time horizon:
    - **Strategic** — long-horizon analysis of threat actor motivations, geopolitical context, and sector-level risk; audience is board and C-suite
    - **Operational** — analysis of specific campaigns and attack sequences used to plan defensive posture; audience is security management and IR teams
    - **Tactical** — technical [[Indicators of Compromise]] (IP addresses, domain names, file hashes, YARA rules) for near-real-time detection; audience is SOC analysts and automated tooling

- ### Key Components
  - **Indicators of Compromise (IoCs)**
    - Machine-readable artefacts that signal a breach or malicious activity: IP addresses, domains, URLs, file hashes, registry keys, TLS certificate fingerprints
    - Typically the most perishable form of intelligence; adversaries rotate infrastructure rapidly
    - Distributed via [[STIX/TAXII]], OpenIOC, MISP, and [[Information Sharing and Analysis Centre]] feeds
  - **Threat Actor Profiling**
    - Structured attribution and characterisation of adversary groups: nation-state APTs, financially motivated criminal organisations, hacktivists
    - [[MITRE ATT&CK Framework]] provides a shared taxonomy of tactics, techniques, and procedures (TTPs) for consistent actor description
    - Profiles include motivation, capability assessment, preferred targets, observed toolchains, and campaign history
  - **Vulnerability Intelligence**
    - Contextualises [[Vulnerability Management]] data with adversary exploitation likelihood, active exploit availability, and targeting patterns
    - Prioritises patch cycles beyond raw CVSS scores by adding threat-context: is this CVE being actively exploited in the wild against organisations like ours?
  - **Malware Intelligence**
    - [[Malware Analysis]] (static and dynamic) produces signatures, behavioural profiles, and code lineage data
    - Sandboxes and detonation chambers generate automated reports; reverse-engineering produces deeper understanding of capabilities and C2 infrastructure
  - **Campaign Tracking**
    - Linking IoCs, TTPs, and infrastructure to named adversary campaigns enables predictive analysis of future targets and methods
    - Graph-based correlation in [[Graph Database]] systems uncovers shared infrastructure across campaigns
  - **Dark Web and Underground Monitoring**
    - [[Dark Web Monitoring]] of criminal forums, paste sites, and marketplaces surfaces early warnings of planned attacks, credential leaks, and ransomware affiliate activity
  - **Open Source Intelligence (OSINT)**
    - [[Open Source Intelligence]] from social media, code repositories, paste sites, news feeds, and vendor advisories forms the bulk of collection for many programmes
    - [[Natural Language Processing]] automates extraction of threat-relevant entities from unstructured text at scale

- ### Intelligence Sharing Ecosystem
  - **ISACs and ISAOs**
    - [[Information Sharing and Analysis Centre]] bodies (FS-ISAC, H-ISAC, E-ISAC, etc.) are sector-specific organisations that facilitate bi-directional sharing between members and with government
    - ISAOs (Information Sharing and Analysis Organisations) provide a more flexible, non-sector-specific sharing model
  - **STIX and TAXII**
    - Structured Threat Information eXpression (STIX) is the dominant JSON-based serialisation format for cyber threat intelligence objects
    - Trusted Automated eXchange of Intelligence Information (TAXII) is the companion transport protocol for STIX content over HTTPS
    - Both are maintained by [[OASIS Open]] and widely implemented in commercial and open-source threat intelligence platforms (TIPs)
  - **MISP**
    - Malware Information Sharing Platform is an open-source TIP enabling community-run sharing networks; widely deployed by national CERTs and sector groups
  - **Traffic Light Protocol (TLP)**
    - A four-level colour-coded labelling scheme (TLP:RED, TLP:AMBER, TLP:GREEN, TLP:CLEAR) that governs who can redistribute shared intelligence and to whom

- ### Applications and Use Cases
  - **Security Operations Centre Enrichment**
    - [[Security Information and Event Management]] platforms ingest threat intelligence feeds to enrich security alerts with adversary context, accelerating triage and reducing false positive investigation time
    - [[Endpoint Detection and Response]] tools use IoC and TTP feeds to improve detection logic without requiring new signatures per variant
  - **Incident Response**
    - [[Incident Response]] teams use intelligence to rapidly attribute attacks, understand actor goals, predict lateral movement paths, and scope the full compromise
    - Post-incident intelligence publication allows other organisations to defend against the same campaign
  - **Threat Hunting**
    - [[Threat Hunting]] is intelligence-led proactive searching for adversary TTPs within an environment before automated detections fire
    - Hypotheses are derived from actor profiles and campaign intelligence
  - **Vulnerability Prioritisation**
    - Combining NVD/CVE data with exploitation intelligence allows security teams to focus patching effort on vulnerabilities actively exploited against peer organisations
  - **Supply Chain Risk**
    - Third-party risk programmes consume intelligence about supplier compromises, software supply chain attacks (e.g., dependency confusion, typosquatting), and sector-wide targeting campaigns
  - **Executive and Board Reporting**
    - Strategic threat intelligence translates adversary landscape shifts into business risk language, informing board-level [[Risk Management]] decisions about investment and insurance
  - **AI-Augmented Analysis**
    - [[Artificial Intelligence]] models automate correlation across large IoC datasets, classify malware families, cluster intrusion sets, and extract structured data from unstructured threat reports at scale, complementing human analyst expertise

- ### MITRE ATT&CK Framework Integration
  - ATT&CK is the most widely adopted public knowledge base of adversary behaviours, organised into Tactics (why), Techniques (how), and Sub-techniques (specific implementation)
  - The Enterprise, Mobile, and ICS matrices cover different target environments
  - Threat intelligence teams map observed adversary behaviours to ATT&CK technique IDs, producing reusable, interoperable descriptions that feed detection engineering, [[Red Teaming]], and control-gap analysis
  - [[MITRE Corporation]] continuously updates the framework with new techniques drawn from published incident reports and government disclosures

- ### AI and Machine Learning Integration
  - [[Machine Learning]] is applied across multiple phases of the intelligence cycle:
    - Automated IoC extraction from unstructured text using [[Natural Language Processing]] (named entity recognition, relation extraction)
    - Malware family classification from static and dynamic features using supervised classifiers
    - Adversary infrastructure clustering via graph analytics and unsupervised learning on shared [[Graph Database]] representations
    - Predictive models estimating likelihood of exploitation for newly disclosed vulnerabilities
  - [[Artificial Intelligence]] integration raises concerns about adversarial manipulation of training data (data poisoning) and overconfident automated attribution
  - [[Data Governance]] frameworks are critical to ensuring responsible use of shared intelligence data, particularly when it includes personal data or attribution claims

- ### Relationships
  - partOf:: [[Information Security]]
  - subClassOf:: [[Cybersecurity]]
  - enables:: [[Network Security]]
  - enables:: [[Incident Response]]
  - enables:: [[Security Operations Centre]]
  - enables:: [[Risk Management]]
  - hasPart:: [[Indicators of Compromise]]
  - hasPart:: [[Threat Actor Profiling]]
  - hasPart:: [[Vulnerability Intelligence]]
  - hasPart:: [[Malware Analysis]]
  - requires:: [[Open Source Intelligence]]
  - requires:: [[Data Aggregation]]
  - dependsOn:: [[Data Collection]]
  - dependsOn:: [[Threat Modelling]]
  - implements:: [[STIX/TAXII]]
  - implements:: [[MITRE ATT&CK Framework]]
  - uses:: [[Machine Learning]]
  - uses:: [[Natural Language Processing]]
  - uses:: [[Graph Database]]
  - supports:: [[Security Information and Event Management]]
  - supports:: [[Endpoint Detection and Response]]
  - standardizedBy:: [[MITRE Corporation]]
  - standardizedBy:: [[OASIS Open]]
  - contrastsWith:: [[Vulnerability Management]]
  - bridges-to:: [[Artificial Intelligence]]
  - bridges-to:: [[Data Governance]]
  - relatedTo:: [[Threat Hunting]]
  - relatedTo:: [[Information Sharing and Analysis Centre]]
  - relatedTo:: [[Dark Web Monitoring]]

- ### Standards and Context
  - **STIX 2.1** (OASIS) — current version of the STIX serialisation format; defines domain objects (SDOs) for threat actors, campaigns, attack patterns, malware, tools, and relationships
  - **TAXII 2.1** (OASIS) — REST API specification for STIX content distribution; defines Collection and Channel models
  - **MITRE ATT&CK** — adversary behaviour framework used globally by vendors, governments, and enterprises; updated multiple times per year
  - **OpenIOC** — XML-based IoC schema developed by Mandiant (now Google); less prevalent than STIX but still encountered in legacy integrations
  - **MISP** — open-source threat intelligence platform and sharing standard with wide government and CERT adoption in Europe
  - **Traffic Light Protocol (TLP)** — FIRST (Forum of Incident Response and Security Teams) governs the TLP standard for information sharing marking
  - **ISO/IEC 27001** — broader [[Information Security]] management standard within which threat intelligence programmes operate
  - **NIST SP 800-150** — NIST guidance on cyber threat intelligence sharing, establishing a foundation for US federal agency programmes
  - **EU NIS2 Directive** — European regulatory framework mandating threat intelligence sharing obligations for operators of essential services

- ### Provenance
  - sources:: [[https://www.cisa.gov/topics/cyber-threats-and-advisories]], [[https://attack.mitre.org/]]
  - updated:: 2026-06-13
  - migration-date:: 2026-05-29T00:00:00Z
