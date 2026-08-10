public:: true
alias:: IncidentResponse

# Incident Response
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:incident-response",
  "@type": "Page",
  "vc:slug": "incident-response",
  "title": "Incident Response",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:incident-response",
  "@type": "Class",
  "label": "Incident Response",
  "definition": "Incident Response is the structured organisational process for detecting, containing, eradicating, and recovering from cybersecurity incidents, followed by post-incident analysis to prevent recurrence and strengthen defensive posture. It is operationalised through lifecycle models such as NIST SP 800-61 and the SANS PICERL framework (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned), enacted via security operations centre (SOC) playbooks, SIEM-driven detection pipelines, and SOAR-automated response actions. Effective incident response minimises dwell time—the interval between initial compromise and detection—limits lateral movement and data exfiltration, and satisfies regulatory notification obligations under frameworks such as GDPR and NIS2. AI-assisted triage, automated containment orchestration, and threat-intelligence enrichment have become defining characteristics of mature programmes.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cybersecurity",
      "label": "Cybersecurity"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:threat-detection",
        "label": "Threat Detection"
      },
      {
        "@id": "urn:ngm:class:digital-forensics",
        "label": "Digital Forensics"
      },
      {
        "@id": "urn:ngm:class:post-incident-review",
        "label": "Post-Incident Review"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:security-information-and-event-management",
        "label": "Security Information and Event Management"
      },
      {
        "@id": "urn:ngm:class:security-operations-centre",
        "label": "Security Operations Centre"
      },
      {
        "@id": "urn:ngm:class:threat-intelligence",
        "label": "Threat Intelligence"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-forensics-framework",
        "label": "Digital Forensics Framework"
      },
      {
        "@id": "urn:ngm:class:ai-trust-risk-and-security-management",
        "label": "AI Trust Risk and Security Management"
      },
      {
        "@id": "urn:ngm:class:endpoint-detection-and-response",
        "label": "Endpoint Detection and Response"
      },
      {
        "@id": "urn:ngm:class:user-and-entity-behaviour-analytics",
        "label": "User and Entity Behaviour Analytics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:business-continuity",
        "label": "Business Continuity"
      },
      {
        "@id": "urn:ngm:class:cyber-resilience",
        "label": "Cyber Resilience"
      },
      {
        "@id": "urn:ngm:class:incident-reporting",
        "label": "Incident Reporting"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cybersecurity-standard",
        "label": "Cybersecurity Standard"
      },
      {
        "@id": "urn:ngm:class:data-security",
        "label": "Data Security"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      },
      {
        "@id": "urn:ngm:class:data-breach",
        "label": "Data Breach"
      },
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-cybersecurity-framework",
        "label": "NIST Cybersecurity Framework"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      },
      {
        "@id": "urn:ngm:class:threat-hunting",
        "label": "Threat Hunting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "AI Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:machine-learning-operations",
        "label": "Machine Learning Operations"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cyber-incident-response",
      "label": "Cyber Incident Response"
    },
    {
      "@id": "urn:ngm:class:security-incident-management",
      "label": "Security Incident Management"
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

- ### Definition
  - [[Incident Response]] is the structured lifecycle process through which an organisation detects, analyses, contains, eradicates, and recovers from [[Cybersecurity]] incidents, followed by post-incident review to strengthen future defences. It operationalises [[Information Security]] policy into concrete, time-critical procedures executed by [[Security Operations Centre]] teams and automated [[Security Orchestration Automation and Response]] platforms. Foundational frameworks include NIST SP 800-61 and the SANS PICERL model, which partition the lifecycle into Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned phases. Incident response is central to maintaining [[Business Continuity]] and satisfying regulatory obligations—including mandatory [[Incident Reporting]] to supervisory authorities—following qualifying [[Data Breach]] events.

- ### Overview
  - Incident response sits at the operational heart of enterprise [[Cybersecurity]], transforming risk controls into real-time defensive action. Without it, detected threats accumulate without resolution; with it, organisations can bound the damage radius of intrusions, recover verified-clean systems, and systematically reduce the probability and impact of future events.
  - The concept of a structured response lifecycle emerged from computer emergency response teams (CERTs) in the late 1980s and has since been codified into multiple international frameworks. NIST SP 800-61 remains the dominant US government reference; ISO/IEC 27035 provides the international standard; the SANS PICERL model is widely used in practitioner training and SOC design.
  - Modern incident response increasingly blends human analyst judgement with machine-speed automation. [[Security Information and Event Management]] (SIEM) systems aggregate and correlate telemetry across endpoints, networks, and cloud environments; [[Security Orchestration Automation and Response]] (SOAR) platforms execute playbook steps automatically; and [[Endpoint Detection and Response]] agents provide deep host-level visibility. [[Threat Intelligence]] feeds enrich alerts with adversary context, enabling faster triage decisions.
  - The primary operational metrics are Mean Time to Detect (MTTD), Mean Time to Respond (MTTR), and dwell time (the interval between initial compromise and detection). Reducing these metrics is the core engineering challenge of incident response programmes.

- ### Key Components
  - #### Preparation
    - Deploying detection infrastructure: [[Endpoint Detection and Response]], [[Security Information and Event Management]], network detection and response (NDR) sensors
    - Developing and rehearsing playbooks for anticipated incident types: ransomware, credential phishing, insider threat, [[Data Breach]], supply-chain compromise
    - Conducting tabletop exercises and purple team engagements against incident scenarios
    - Establishing communication trees, escalation paths, and legal/PR response protocols
    - Integrating regulatory requirements—GDPR 72-hour notification, NIS2 obligations—into playbook templates from the outset
  - #### Identification
    - Alert triage using [[Security Information and Event Management]] correlation rules and [[User and Entity Behaviour Analytics]]
    - [[Threat Intelligence]] enrichment to classify alerts by adversary TTPs (Tactics, Techniques, and Procedures) using the MITRE ATT&CK framework
    - [[AI Anomaly Detection]] to surface low-and-slow attacker behaviour that evades signature-based rules
    - Escalation from Tier 1 analyst triage to Tier 2/3 investigation based on confidence and severity scoring
    - Incident declaration criteria: clearly defined thresholds distinguishing security events from confirmed incidents
  - #### Containment
    - Short-term containment: isolating compromised hosts at the network layer while preserving system state for [[Digital Forensics]] analysis
    - Long-term containment: resetting credentials, rotating secrets, patching exploited [[Vulnerability]] pathways across the affected blast radius
    - Network segmentation to prevent lateral movement to adjacent systems or domains
    - Coordination with [[Identity and Access Management]] to revoke attacker-controlled accounts and tokens
    - Balancing containment speed against operational disruption for business-critical systems
  - #### Eradication
    - Removing malicious artefacts: malware binaries, persistence mechanisms, backdoors, and attacker-placed credentials
    - Validating eradication completeness through [[Digital Forensics Framework]] timeline reconstruction
    - Identifying and closing the initial access vector to prevent re-compromise
    - Correlating with [[Threat Hunting]] to discover any parallel intrusion paths not surfaced during initial detection
  - #### Recovery
    - Restoring systems from verified-clean backups or re-imaging compromised hosts
    - Staged return to production with enhanced monitoring to confirm attacker absence
    - Regression testing of critical business workflows after system restoration
    - Coordinating with [[Business Continuity]] plans for any extended outage scenarios
  - #### Lessons Learned
    - Post-incident review: timeline reconstruction, root-cause analysis, attribution assessment
    - Detection rule updates to catch similar activity earlier in future incidents
    - Playbook and runbook refinement based on what worked and what failed
    - Feeding findings into [[Risk Management]] and [[Vulnerability Management]] backlogs
    - [[Post-Incident Review]] documentation for regulatory evidence and internal governance

- ### Mechanisms & Tools
  - **SIEM Platforms**: [[Security Information and Event Management]] aggregates logs from across the estate, applies correlation rules, and surfaces prioritised alerts. Major platforms include Splunk, Microsoft Sentinel, and IBM QRadar.
  - **SOAR Platforms**: [[Security Orchestration Automation and Response]] automates repetitive playbook steps—IP blocking, ticket creation, user suspension—freeing analysts for higher-order decisions.
  - **EDR/XDR**: [[Endpoint Detection and Response]] and extended detection and response (XDR) provide deep host telemetry, process-level event chains, and remote containment capabilities.
  - **UEBA**: [[User and Entity Behaviour Analytics]] baselines normal user and system behaviour, flagging statistical deviations that may indicate credential theft or insider threat.
  - **Threat Intelligence Platforms**: Aggregating and operationalising [[Threat Intelligence]] feeds (commercial, open-source, government-sharing) to enrich alerts with adversary context.
  - **Digital Forensics**: [[Digital Forensics Framework]] tooling—memory capture, disk imaging, log preservation—provides the evidentiary record for timeline reconstruction and legal proceedings.
  - **AI-Assisted Triage**: [[AI Anomaly Detection]] and [[AI Trust Risk and Security Management]] platforms reduce alert fatigue and surface novel attacker behaviours.

- ### Applications / Use Cases
  - **Ransomware Response**: Detecting encryption activity, isolating affected segments, preserving forensic evidence, coordinating ransom negotiation decisions, and restoring from backup—a common and high-consequence scenario driving playbook investment.
  - **Data Breach Management**: Containing exfiltration in progress, quantifying the scope of data affected, and triggering regulatory [[Incident Reporting]] obligations under GDPR, NIS2, or sector-specific regulations.
  - **Supply Chain Compromise**: Responding to incidents where the initial access vector is a trusted supplier or software dependency, requiring coordinated response across multiple organisations.
  - **Insider Threat**: Applying [[User and Entity Behaviour Analytics]] and [[Digital Forensics]] to investigate anomalous privileged-user behaviour, balancing speed of containment against HR and legal considerations.
  - **Cloud Environment Incidents**: Responding to misconfigurations, credential compromise, and API abuse in cloud-native environments, requiring cloud-provider forensic tooling and IR-aware architecture.
  - **Critical Infrastructure**: Sector-specific incident response in energy, healthcare, and financial services, where regulatory obligations and operational impact thresholds differ materially from commercial IT environments.
  - **OT/ICS Incidents**: Responding to incidents in operational technology environments where standard IT containment actions (host isolation, re-imaging) may cause physical safety consequences.

- ### Relationships
  - hasPart:: [[Threat Detection]]
  - hasPart:: [[Digital Forensics]]
  - hasPart:: [[Incident Containment]]
  - hasPart:: [[Post-Incident Review]]
  - requires:: [[Security Information and Event Management]]
  - requires:: [[Security Operations Centre]]
  - requires:: [[Threat Intelligence]]
  - uses:: [[Digital Forensics Framework]]
  - uses:: [[Security Orchestration Automation and Response]]
  - uses:: [[AI Trust Risk and Security Management]]
  - uses:: [[Endpoint Detection and Response]]
  - uses:: [[User and Entity Behaviour Analytics]]
  - enables:: [[Business Continuity]]
  - enables:: [[Cyber Resilience]]
  - enables:: [[Incident Reporting]]
  - supports:: [[Cybersecurity Standard]]
  - supports:: [[Data Security]]
  - supports:: [[Risk Management]]
  - relatedTo:: [[Information Security]]
  - relatedTo:: [[Data Breach]]
  - relatedTo:: [[Vulnerability]]
  - relatedTo:: [[Network Security]]
  - relatedTo:: [[Identity and Access Management]]
  - standardizedBy:: [[NIST Cybersecurity Framework]]
  - standardizedBy:: [[ISO IEC 27035]]
  - contrastsWith:: [[Vulnerability Management]]
  - contrastsWith:: [[Threat Hunting]]
  - bridges-to:: [[AI Anomaly Detection]]
  - bridges-to:: [[Machine Learning Operations]]

- ### Standards & Context
  - **NIST SP 800-61 Rev 2** (Computer Security Incident Handling Guide): The primary US government reference, defining the four-phase lifecycle (Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-Incident Activity).
  - **ISO/IEC 27035**: The international standard for information security incident management, structured across planning, detection, assessment, response, and lessons-learned phases.
  - **SANS PICERL Model**: Widely adopted practitioner framework extending the NIST lifecycle with explicit Identification and Eradication phases; used extensively in SOC training and certifications (GCIH, GCFE).
  - **MITRE ATT&CK Framework**: The adversary behaviour taxonomy used to classify incidents by TTP, prioritise detection rules, and communicate threat actor characterisation during and after incidents.
  - **NIS2 Directive** (EU): Mandates significant incident notification obligations for operators of essential services and digital service providers, with 24-hour early warning and 72-hour full notification timescales.
  - **GDPR Article 33**: Requires notification of personal data breaches to supervisory authorities within 72 hours of becoming aware, directly driving [[Incident Reporting]] integration into playbooks.
  - **FIRST (Forum of Incident Response and Security Teams)**: The global association of incident response teams, publishing guidelines on incident coordination, vulnerability disclosure, and cross-organisational response.
  - **Cybersecurity & Infrastructure Security Agency (CISA)**: US federal agency publishing sector-specific IR guidance, coordinating national-level response to major incidents, and operating the Government Emergency Response Team (GERT).

- ### Current Landscape (2026)
  - NIST finalised SP 800-61 Revision 3 in April 2025, the first major revision since 2012, withdrawing the 2012 Computer Security Incident Handling Guide and reframing incident response as a CSF 2.0 Community Profile organised around the six Govern-Identify-Protect-Detect-Respond-Recover functions rather than the old four-phase lifecycle; it explicitly endorses automation of alerts, triage and information sharing.
  - The market has pivoted from static SOAR runbooks to agentic AI SOC platforms that reason across SIEM, EDR and identity data and run investigations they have not seen before; Gartner retired the SOAR Magic Quadrant in 2025 as native platform automation absorbed standalone SOAR.
  - Vendor consolidation around the agentic SOC accelerated through 2025-2026: Palo Alto Cortex XSIAM with AgentiX, CrowdStrike Charlotte AI and Agentic SOAR (Fall 2025 release), SentinelOne Purple AI over OCSF-normalised data, Microsoft Sentinel/Defender, and Splunk AI SOC now anchor the field, alongside challengers such as Prophet Security, Stellar Cyber and Torq.
  - Regulatory notification clocks are now designed into playbooks rather than bolted on: the SEC Form 8-K Item 1.05 four-business-day materiality-disclosure rule (with Inline XBRL tagging mandatory from December 2024), EU NIS2 24-hour early warning and 72-hour report (transposed October 2024, moving to active enforcement in 2026), and DORA's 4-hour classification, 24-hour advance and 72-hour detailed report windows (effective 17 January 2025).
  - Governance of autonomous response tightened: teams use a trust-gradient model (auto-execute, auto-execute-with-notify, approve-then-execute, human-only) to keep irreversible actions such as regulatory notification and public disclosure with humans, driven partly by the EU AI Act treating high-stakes cyber decision systems as high-risk from June 2026, which mandates auditable reasoning traces and human oversight.
  - CISA replaced flat KEV remediation deadlines with a risk-tiered model under Binding Operational Directive 26-04 (June 2026): assets meeting all four criteria (publicly exposed, KEV-listed, automatable exploit, serious post-exploitation impact) must be remediated within three days with forensic triage for prior compromise.
  - The frontier challenge as of 2026 is documented agentic cybercrime (per Anthropic's 2025-2026 threat-intelligence reporting on AI-orchestrated attack chains) colliding with faster auto-remediation, which starts disclosure clocks sooner and raises, not lowers, the evidentiary bar; auditors are beginning to demand automation-coverage metrics the way they demand patching cadence.

- ### References
  - 1. National Institute of Standards and Technology (2025). SP 800-61 Rev. 3, Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile. https://csrc.nist.gov/pubs/sp/800/61/r3/final
  - 2. Vectra AI (2026). Incident response automation: from SOAR to agentic AI. https://www.vectra.ai/topics/incident-response-automation
  - 3. Palo Alto Networks (2026). Best AI SOC Tools: Top 10 Platforms for 2026 (Compared). https://www.paloaltonetworks.com/cyberpedia/ai-soc-tools-comparison
  - 4. Security Boulevard (2026). Auto-Remediation Doesn't Lower Your Disclosure Bar. It Raises It. https://securityboulevard.com/2026/08/auto-remediation-doesnt-lower-your-disclosure-bar-it-raises-it/
  - 5. Simbian (2026). Automated Incident Response in 2026: The End of Playbooks. https://simbian.ai/blog/automated-incident-response-2026
  - 6. KuppingerCole (2026). Advisory Note: Research Compass Cybersecurity 2026. https://www.kuppingercole.com/research/an82014/research-compass-cybersecurity-2026

- ### Provenance
  - sources:: NIST SP 800-61 Rev 2; ISO/IEC 27035-1:2023; SANS Institute PICERL Model; MITRE ATT&CK Framework; NIS2 Directive (EU) 2022/2555; GDPR Article 33; FIRST Guidelines
  - updated:: 2026-06-13
