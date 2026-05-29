- ### Definition
  - Zero Trust Architecture (ZTA) is a cybersecurity paradigm that abandons the notion of a trusted network perimeter and instead requires explicit, continuous verification of every principal (user, device, service) and every request, regardless of its network origin. Grounded in the principle of least-privilege access, ZTA evaluates contextual signals — identity, device health posture, location, and behavioural risk — at each access decision point, enforced by policy engines and micro-segmentation. The model was formalised in NIST SP 800-207 and is increasingly mandated by government and enterprise security frameworks as a response to lateral movement threats and cloud-native architectures that dissolve traditional perimeter boundaries.

- ### Semantic Classification
  - owl-class:: zero-trust-architecture:Zero Trust Architecture
  - owl-role:: Concept

- ### Relationships
  - requires [[Authentication]]
  - requires [[Identity and Access Management]]
  - uses [[Policy Engine]]
  - uses [[Access Control]]
  - relatedTo [[Confidential Computing]]

- ### Content
  - Zero Trust Architecture operationalises the principle "never trust, always verify" across all components of an organisation's IT environment. In the ZTA model, every access request is brokered through a Policy Decision Point (PDP) that evaluates real-time signals — device compliance certificates, user risk scores from behavioural analytics, time-of-day context, and data sensitivity labels — before issuing or denying access tokens. A Policy Enforcement Point (PEP) intercepts traffic and enforces the decision.
  - Key technical components include strong multi-factor authentication (MFA), device attestation via endpoint detection and response (EDR) platforms, micro-segmentation of network traffic to limit blast radius, mutual TLS for service-to-service communication, and just-in-time privileged access management (PAM) for administrative credentials. Software-Defined Perimeter (SDP) and Secure Access Service Edge (SASE) architectures provide infrastructure patterns for implementing ZTA in hybrid cloud environments.
  - NIST SP 800-207 defines three deployment models: identity-based (extending IAM as the sole control plane), micro-segmentation-based (using network segments as enforcement boundaries), and software-defined perimeter-based. Real-world deployments typically combine all three. ZTA adoption has accelerated following high-profile supply-chain and ransomware attacks that demonstrated the inadequacy of perimeter-only defences, and is now a foundational requirement in frameworks such as the US Executive Order on improving national cybersecurity and the UK government's minimum cyber security standards.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z