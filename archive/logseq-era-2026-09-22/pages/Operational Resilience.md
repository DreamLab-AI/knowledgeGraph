public:: true

# operational resilience
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:77cd453d4ba365fdb6024d565d93894e8e299e122e7a2e4554d5643e5f87e5c2",
  "@type": "Page",
  "vc:slug": "operational-resilience",
  "title": "operational resilience",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:operational-resilience",
  "@type": "Class",
  "label": "Operational Resilience",
  "definition": "Operational Resilience is the organisational and technical capacity to anticipate, prepare for, withstand, recover from, and adapt to disruptions—whether caused by cyber-attacks, infrastructure failures, natural disasters, or human error—while maintaining continuity of critical business services within pre-defined impact tolerances. It extends traditional Business Continuity Management and Disaster Recovery by demanding that organisations identify their most important business services, quantify the maximum tolerable disruption for each, and validate end-to-end resilience through realistic scenario testing. Regulatory frameworks such as the Bank of England's Supervisory Statement SS1/21, the EU Digital Operational Resilience Act (DORA), and NIST SP 800-160 Vol. 2 have transformed operational resilience from a best-practice aspiration into a legal compliance obligation. Technically it is realised through layered redundancy, fault-tolerant architectures, chaos engineering disciplines, and automated recovery orchestration.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:resilience",
      "label": "Resilience"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
      {
        "@id": "urn:ngm:class:disaster-recovery",
        "label": "Disaster Recovery"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:business-continuity",
        "label": "Business Continuity"
      },
      {
        "@id": "urn:ngm:class:reliability",
        "label": "Service Reliability"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:redundancy",
        "label": "Redundancy"
      },
      {
        "@id": "urn:ngm:class:chaos-engineering",
        "label": "Chaos Engineering"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-cybersecurity-framework",
        "label": "NIST Cybersecurity Framework"
      },
      {
        "@id": "urn:ngm:class:iso-27001",
        "label": "ISO 27001"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:disaster-recovery",
        "label": "Disaster Recovery"
      },
      {
        "@id": "urn:ngm:class:business-continuity-planning",
        "label": "Business Continuity Planning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:compliance-framework",
        "label": "Compliance Framework"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain Risk"
      },
      {
        "@id": "urn:ngm:class:third-party-risk-management",
        "label": "Third-Party Risk Management"
      },
      {
        "@id": "urn:ngm:class:service-level-agreement",
        "label": "Service Level Agreement"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:aiops",
        "label": "AIOps"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:organisational-resilience",
      "label": "Organisational Resilience"
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
  - Operational Resilience is the organisational and technical capacity to anticipate, prepare for, withstand, recover from, and adapt to disruptions while maintaining continuity of critical business services within pre-defined impact tolerances. It differs from narrower concepts such as [[Disaster Recovery]] and [[Business Continuity Planning]] by requiring that organisations identify their most important business services, set the maximum disruption each service may experience (an "impact tolerance"), and continuously validate end-to-end [[Service Reliability]] through realistic, scenario-based testing. It is underpinned by engineering disciplines including [[Fault Tolerance]], [[High Availability]], [[Redundancy]], and [[Chaos Engineering]], and is given legal force by frameworks such as the EU [[DORA Regulation]] and the UK FCA/PRA's Supervisory Statement SS1/21.

- ### Overview
  - Operational Resilience emerged as a distinct discipline in the late 2010s, driven by the recognition that classical [[Business Continuity Management]] and [[Disaster Recovery]] programmes were designed primarily to restore systems rather than to keep services available within acceptable limits throughout a disruption. The shift reframes the objective: instead of "how fast can we recover?", the question becomes "how long can a service be unavailable before unacceptable harm occurs, and are we certain we can stay within that limit?".
  - Three forces have converged to make operational resilience a mainstream priority:
    - **Regulatory mandate** — Financial supervisors in the UK, EU, and US have codified resilience requirements into binding rules, requiring impact-tolerance setting, scenario testing, and board-level accountability.
    - **Cloud and third-party dependency growth** — Organisations increasingly rely on external [[Cloud Computing]] providers and critical [[Third-Party Risk Management]] relationships, creating concentration risk that is invisible to traditional continuity plans.
    - **Rising cyber threat** — Ransomware, supply chain attacks, and advanced persistent threats can cripple services even when physical infrastructure is intact, requiring integration of [[Cyber Risk]] controls into resilience programmes.
  - The concept applies across sectors—finance, healthcare, energy, telecoms—but is most mature in financial services, where systemic failures can have economy-wide consequences.

- ### Key Components
  - #### Impact Tolerance Setting
    - Organisations identify **important business services** (IBS) — those whose disruption would cause significant harm to customers, markets, or society.
    - For each IBS an **impact tolerance** is defined: the maximum duration and scale of disruption beyond which harm becomes unacceptable.
    - This drives [[Risk Assessment]] at service level rather than system level, aligning [[Service Level Agreement]] obligations with resilience requirements.
  - #### Mapping and Dependency Analysis
    - End-to-end service maps trace every people, process, technology, facility, and data dependency that underpins each IBS.
    - Mapping reveals [[Single Point of Failure]] risks and third-party concentration risks, feeding into [[Supply Chain Risk]] assessments.
    - Tools: configuration management databases (CMDB), service topology graphs, [[Observability]] platforms.
  - #### Architecture and Engineering Controls
    - **[[Redundancy]]**: active-active or active-passive clusters; multi-availability-zone deployments; geographic replication of data.
    - **[[Fault Tolerance]]**: circuit-breaker patterns (Resilience4j, Hystrix), bulkhead isolation, retry logic with exponential back-off, and timeout enforcement prevent cascade failures in [[Distributed Systems]].
    - **[[High Availability]]**: load balancing, health checks, auto-scaling, and automated failover reduce [[Recovery Time Objective]] (RTO) targets toward near-zero.
    - **[[Chaos Engineering]]**: deliberate fault injection (pioneered by Netflix Chaos Monkey) tests whether resilience controls actually work under realistic failure conditions.
  - #### Scenario Testing and Exercising
    - Scenario tests simulate severe but plausible disruptions (cyber attack, major cloud-provider outage, pandemic-level staff absence) and verify the organisation can remain within impact tolerances.
    - Fire drills, tabletop exercises, and technical failover tests are run at varying levels of fidelity.
    - Results feed back into remediation roadmaps.
  - #### Monitoring and Observability
    - Real-time [[Monitoring and Observability]] with dashboards, alerting pipelines, and [[AIOps]] anomaly detection enables early detection of nascent failures.
    - [[Service Level Indicator]] (SLI) / [[Service Level Objective]] (SLO) tracking ties engineering metrics directly to impact-tolerance thresholds.
    - Post-incident [[Root Cause Analysis]] (blameless retrospectives, five-whys) closes the learning loop.
  - #### Incident Response and Recovery
    - [[Incident Response]] playbooks define roles, escalation paths, and communication protocols during active disruptions.
    - Automated runbooks (via site-reliability engineering practices) reduce mean time to recovery (MTTR).
    - [[Disaster Recovery]] procedures—backup strategies, [[Recovery Point Objective]] (RPO), offsite data replication—underpin the recovery phase.
  - #### Governance and Culture
    - Board-level accountability: senior management functions (SMFs) in UK regulation require executives to own resilience outcomes.
    - [[Regulatory Compliance]] reporting: annual self-assessments, regulatory submissions, and third-party audit evidence.
    - A resilience culture integrates [[Security by Design]] principles, encourages failure reporting, and rewards proactive risk identification.

- ### Regulatory and Standards Landscape
  - #### EU Digital Operational Resilience Act (DORA) — Regulation (EU) 2022/2554
    - Applies to financial entities and critical ICT third-party providers across the EU from January 2025.
    - Five pillars: ICT risk management, incident classification and reporting, digital operational resilience testing, ICT third-party risk, and information sharing.
    - Requires threat-led penetration testing (TLPT) for significant entities and mandatory contractual provisions for ICT service providers.
  - #### UK FCA/PRA Supervisory Statement SS1/21
    - Sets expectations for UK-regulated financial firms on impact tolerance, mapping, scenario testing, and lessons learned.
    - Firms must be able to demonstrate remaining within tolerance "even during severe but plausible disruption scenarios".
  - #### NIST SP 800-160 Vol. 2 — Developing Cyber-Resilient Systems
    - Provides a systems-engineering perspective on cyber resiliency aligned with [[NIST Cybersecurity Framework]] and SP 800-53.
    - Defines 14 cyber resiliency techniques including adaptive response, analytic monitoring, coordinated protection, and deception.
  - #### ISO 22301 — Business Continuity Management Systems
    - The international standard for [[Business Continuity Management]] BCMS; increasingly referenced as the process backbone beneath an operational resilience programme.
    - Specifies requirements for planning, implementing, monitoring, and improving continuity capabilities.
  - #### ISO/IEC 27001 — Information Security Management
    - Annex A control A.17 (business continuity aspects of information security) integrates resilience into the [[ISO 27001]] ISMS framework.
    - [[DORA Regulation]] and SS1/21 compliance programmes typically align with or leverage existing ISO 27001 certifications.

- ### Applications and Use Cases
  - **Retail banking and payments** — Maintaining payment processing and mobile banking services within tolerances; regulatory DORA compliance programmes; real-time incident dashboards tied to SLOs.
  - **Cloud infrastructure providers** — Multi-region active-active architectures, availability zone failover, chaos-engineering continuous-testing pipelines (AWS GameDay, Google DiRT).
  - **Healthcare systems** — Ensuring electronic patient records and life-critical monitoring systems remain available during ransomware attacks or data-centre failures, with [[Disaster Recovery]] RTO aligned to clinical risk.
  - **Energy and utilities** — Operational technology (OT) resilience programmes protecting [[Critical Infrastructure]] from cyber-physical disruptions; integration with [[Incident Response]] and crisis communication plans.
  - **Telecoms and internet exchange points** — BGP route diversity, peering redundancy, and [[DDoS]] mitigation to keep connectivity within SLA tolerances.
  - **Supply-chain-dependent manufacturing** — Mapping IT/OT dependency chains to detect concentration risk in tier-1 and tier-2 suppliers; scenario testing for geopolitical supply disruptions.

- ### Relationships
  - requires:: [[Fault Tolerance]]
  - requires:: [[High Availability]]
  - requires:: [[Risk Assessment]]
  - requires:: [[Incident Response]]
  - requires:: [[Disaster Recovery]]
  - enables:: [[Business Continuity]]
  - enables:: [[Service Reliability]]
  - enables:: [[Regulatory Compliance]]
  - dependsOn:: [[Redundancy]]
  - dependsOn:: [[Monitoring and Observability]]
  - dependsOn:: [[Chaos Engineering]]
  - implements:: [[DORA Regulation]]
  - implements:: [[ISO 22301]]
  - standardizedBy:: [[NIST Cybersecurity Framework]]
  - standardizedBy:: [[ISO 27001]]
  - contrastsWith:: [[Business Continuity Planning]]
  - relatedTo:: [[Compliance Framework]]
  - relatedTo:: [[Supply Chain Risk]]
  - relatedTo:: [[Third-Party Risk Management]]
  - relatedTo:: [[Cyber Risk]]
  - relatedTo:: [[Service Level Agreement]]
  - bridges-to:: [[AIOps]]
  - bridges-to:: [[Distributed Systems]]

- ### Provenance
  - sources:: Bank of England SS1/21 (2021); EU DORA Regulation 2022/2554; NIST SP 800-160 Vol. 2; ISO 22301:2019; ISO/IEC 27001:2022
  - updated:: 2026-06-13
