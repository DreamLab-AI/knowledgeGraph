public:: true
alias:: Zero-Trust Architecture, ZeroTrustArchitecture

# zero trust architecture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4f8cceeed9bbb8fe9715bd6c87d1aa5e9c920f8974060e6a755a24ea065709e7",
  "@type": "Page",
  "vc:slug": "zero-trust-architecture",
  "title": "zero trust architecture",
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
  "@id": "urn:ngm:class:zero-trust-architecture",
  "@type": "Class",
  "label": "Zero Trust Architecture",
  "definition": "Zero Trust Architecture (ZTA) is a cybersecurity paradigm that abandons the notion of a trusted network perimeter and instead requires explicit, continuous verification of every principal — user, device, or service — for every request regardless of network origin. Grounded in least-privilege access, ZTA evaluates contextual signals including identity assertions, device health posture, behavioural risk, and data sensitivity at each access decision point, enforced by a Policy Decision Point and Policy Enforcement Point pair operating across micro-segmented environments. Formalised in NIST SP 800-207, ZTA has become the dominant enterprise security reference model in response to the dissolution of traditional perimeter boundaries by cloud-native, remote-work, and supply-chain threat vectors.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cybersecurity",
      "label": "Cybersecurity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      },
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:policy-engine",
        "label": "Policy Engine"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:mutual-tls",
        "label": "Mutual TLS"
      },
      {
        "@id": "urn:ngm:class:behavioural-analytics",
        "label": "Behavioural Analytics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:continuous-monitoring",
        "label": "Continuous Monitoring"
      },
      {
        "@id": "urn:ngm:class:just-in-time-access",
        "label": "Just-in-Time Access"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:software-defined-perimeter",
        "label": "Software-Defined Perimeter"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cloud-security",
        "label": "Cloud Security"
      },
      {
        "@id": "urn:ngm:class:privileged-access-management",
        "label": "Privileged Access Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:perimeter-security",
        "label": "Perimeter Security"
      },
      {
        "@id": "urn:ngm:class:virtual-private-network",
        "label": "Virtual Private Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:confidential-computing",
        "label": "Confidential Computing"
      },
      {
        "@id": "urn:ngm:class:endpoint-detection-and-response",
        "label": "Endpoint Detection and Response"
      },
      {
        "@id": "urn:ngm:class:security-information-and-event-management",
        "label": "Security Information and Event Management"
      },
      {
        "@id": "urn:ngm:class:supply-chain-security",
        "label": "Supply Chain Security"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-sp-800-207",
        "label": "NIST SP 800-207"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:threat-detection",
        "label": "AI-Driven Threat Detection"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:zero-trust-network-access",
      "label": "Zero Trust Network Access"
    },
    {
      "@id": "urn:ngm:class:zta",
      "label": "ZTA"
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
  - Zero Trust Architecture (ZTA) is a cybersecurity paradigm that operationalises the principle "never trust, always verify" across every component of an organisation's IT environment. Rather than assuming any user, device, or service is trusted by virtue of being inside a network boundary, ZTA requires explicit, continuous verification of every access request regardless of its origin. It draws on [[Identity and Access Management]], [[Micro-Segmentation]], [[Policy Engine]] logic, and [[Continuous Monitoring]] to enforce [[Least Privilege Access]] dynamically — contrasting sharply with classical [[Perimeter Security]] models that collapse once an attacker gains initial footholds. The model was formalised in [[NIST SP 800-207]] (2020) and has since become the dominant reference framework in government and enterprise [[Cybersecurity]] strategy.

- ### Overview
  - ZTA emerged in response to the failure of castle-and-moat security models in which traffic inside the corporate network was implicitly trusted. The proliferation of [[Cloud Security]] workloads, remote working, and sophisticated supply-chain attacks — such as the SolarWinds compromise — demonstrated that perimeter defences alone are insufficient. Attackers who breach the perimeter can move laterally unchallenged for extended dwell periods.
  - Core operating principle: **no implicit trust**. Every access decision is mediated by a policy engine that evaluates real-time contextual signals before granting or denying access tokens. Access is scoped to the minimum necessary resource, for the minimum necessary time.
  - ZTA is architecture-agnostic: it applies equally to on-premises data centres, hybrid cloud, fully cloud-native, and operational technology (OT) environments. It is not a single product but a design philosophy implemented through a combination of technologies and governance controls.
  - Adoption has accelerated significantly since the US Executive Order 14028 (2021) mandated federal agencies to adopt ZTA, with equivalents emerging in UK, EU, and Australian government frameworks.

- ### Key Components
  - **Policy Decision Point (PDP)**
    - The control-plane component that evaluates all available context signals and returns an authorisation decision (permit / deny / challenge).
    - Inputs include identity assertions from [[Identity and Access Management]], device health from [[Endpoint Detection and Response]], risk scores from [[Behavioural Analytics]], and data-sensitivity labels.
  - **Policy Enforcement Point (PEP)**
    - The data-plane gateway that intercepts all resource requests, forwards context to the PDP, and enforces the decision — granting, blocking, or step-up challenging the request.
    - May be implemented as an API gateway, network proxy, or [[Software-Defined Perimeter]] controller.
  - **[[Identity and Access Management]]**
    - Strong identity is the primary control plane in ZTA. Every principal (human, service, device) must have a verifiable, authoritative identity.
    - Encompasses [[Multi-Factor Authentication]], [[Federated Identity]], and continuous re-authentication triggered by risk-score changes.
  - **[[Micro-Segmentation]]**
    - Divides the network into fine-grained segments so that even authenticated users or compromised services cannot reach resources beyond their authorised scope.
    - Limits blast radius if a principal is compromised, containing lateral movement.
  - **Device Attestation and [[Endpoint Detection and Response]]**
    - Devices must continuously assert compliance posture (patch level, EDR agent status, disk encryption, certificate validity).
    - Non-compliant devices receive degraded access or are quarantined even if the user credential is valid.
  - **[[Mutual TLS]]**
    - All service-to-service communication is authenticated using mutual certificate exchange, eliminating implicit trust between internal microservices.
    - Foundational to service mesh implementations (e.g., Istio, Linkerd) in cloud-native ZTA deployments.
  - **[[Behavioural Analytics]]**
    - Continuous analysis of user and entity behaviour (UEBA) feeds risk scores to the PDP, enabling dynamic policy adjustment when anomalous patterns are detected.
    - Integrates with [[Security Information and Event Management]] platforms for unified visibility.
  - **[[Privileged Access Management]]**
    - Administrative credentials are issued on a [[Just-in-Time Access]] basis, scoped to specific tasks, and automatically revoked on expiry — eliminating persistent privileged sessions.
  - **[[Secure Access Service Edge]] (SASE)**
    - A cloud-delivered architecture that collapses WAN connectivity and network security services (CASB, SWG, ZTNA) into a unified, globally distributed fabric.
    - Provides the infrastructure substrate for ZTA in distributed enterprise environments.

- ### Applications / Use Cases
  - **Remote and Hybrid Workforce**
    - Replaces [[Virtual Private Network]] (VPN) tunnels with identity-and-device-aware proxies that enforce least-privilege access to specific applications rather than full network access.
    - Reduces attack surface when employees access corporate resources from unmanaged networks.
  - **Cloud-Native and Multi-Cloud Environments**
    - ZTA enforces consistent policy across AWS, Azure, GCP, and on-premises resources without relying on network topology as a trust signal.
    - Service mesh + [[Mutual TLS]] + [[Micro-Segmentation]] provide east-west traffic control inside Kubernetes clusters.
  - **Supply Chain and Third-Party Access**
    - Third-party vendors, contractors, and automated pipelines receive scoped, time-limited credentials rather than broad network access.
    - Critical mitigation for [[Supply Chain Security]] threats of the SolarWinds class.
  - **Operational Technology (OT) and Industrial Control Systems**
    - ZTA principles extend to OT environments, enforcing strict segmentation between IT and OT networks and requiring device attestation for SCADA and PLC access.
  - **Healthcare and Financial Services**
    - Regulated industries use ZTA to enforce data-sovereignty, audit trails, and fine-grained access to sensitive records in compliance with GDPR, HIPAA, PCI-DSS.
  - **Government and Critical National Infrastructure**
    - US Cybersecurity and Infrastructure Security Agency (CISA) Zero Trust Maturity Model and UK NCSC guidance mandate ZTA as the target architecture for government systems.

- ### Mechanisms
  - **Continuous Verification Loop**
    - Trust is never static. Sessions are re-evaluated periodically or on risk-signal change (new IP, new device, privilege escalation).
    - Combines with [[Continuous Monitoring]] and SIEM telemetry to detect and respond to mid-session anomalies.
  - **Contextual Access Policies**
    - Policies encode conditions: "user X on compliant device Y in geography Z may access resource R with sensitivity S during time window T."
    - Policy-as-code is stored in centralised policy engines (e.g., Open Policy Agent, Cedar) integrated with the PDP.
  - **Encryption Everywhere**
    - All data in transit is encrypted regardless of whether it traverses a trusted or untrusted network segment.
    - [[Confidential Computing]] extends ZTA into the compute layer by protecting data in use via hardware-level enclaves.
  - **Immutable Audit Trails**
    - Every access decision (grant and deny) is logged with full context for forensic analysis and compliance reporting.
    - Feeds [[Security Information and Event Management]] and threat-hunting workflows.

- ### Relationships
  - requires:: [[Authentication]]
  - requires:: [[Identity and Access Management]]
  - requires:: [[Multi-Factor Authentication]]
  - requires:: [[Device Attestation]]
  - uses:: [[Policy Engine]]
  - uses:: [[Access Control]]
  - uses:: [[Micro-Segmentation]]
  - uses:: [[Mutual TLS]]
  - uses:: [[Behavioural Analytics]]
  - enables:: [[Least Privilege Access]]
  - enables:: [[Continuous Monitoring]]
  - enables:: [[Just-in-Time Access]]
  - implements:: [[Software-Defined Perimeter]]
  - implements:: [[Secure Access Service Edge]]
  - supports:: [[Cloud Security]]
  - supports:: [[Privileged Access Management]]
  - contrastsWith:: [[Perimeter Security]]
  - contrastsWith:: [[Virtual Private Network]]
  - relatedTo:: [[Confidential Computing]]
  - relatedTo:: [[Endpoint Detection and Response]]
  - relatedTo:: [[Security Information and Event Management]]
  - relatedTo:: [[Supply Chain Security]]
  - standardizedBy:: [[NIST SP 800-207]]
  - bridges-to:: [[AI-Driven Threat Detection]]
  - bridges-to:: [[Federated Identity]]

- ### Standards & Context
  - **NIST SP 800-207** — The primary normative reference for ZTA, defining the PDP/PEP model, seven tenets of zero trust, and three logical deployment archetypes (identity-based, micro-segmentation-based, software-defined perimeter-based). Published by the US National Institute of Standards and Technology in 2020.
  - **CISA Zero Trust Maturity Model** — US government five-pillar model (identity, devices, networks, applications, data) with maturity levels from Traditional through Optimal, guiding agency adoption.
  - **UK NCSC Zero Trust Principles** — Eight principles for network architecture aligned to NIST 800-207, targeted at UK public sector and critical infrastructure operators.
  - **DoD Zero Trust Strategy (2022)** — US Department of Defense target-level ZTA implementation roadmap covering all seven pillars by 2027.
  - **ISO/IEC 27001 / 27002** — Information security management standards that ZTA implementations align to; ZTA controls map to ISO Annex A controls on access management and network security.
  - **SABSA / TOGAF** — Enterprise architecture frameworks used to embed ZTA into broader organisational security architecture programmes.
  - **BeyondCorp (Google)** — Google's internal implementation of ZTA, published as a series of whitepapers (2014–2018), which served as the primary industry proof-of-concept before NIST formalisation.

- ### Provenance
  - sources:: NIST SP 800-207 (2020); CISA Zero Trust Maturity Model; Google BeyondCorp whitepaper series; UK NCSC Zero Trust Architecture guidance; DoD Zero Trust Strategy (2022)
  - updated:: 2026-06-13
