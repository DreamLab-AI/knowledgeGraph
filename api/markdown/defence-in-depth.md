- ### Definition
  - [[Defence In Depth]] is a layered [[Security Architecture]] strategy deploying multiple independent controls across physical, technical, and administrative domains.
  - Borrowed from military strategy: each layer slows, detects, or stops an adversary even if outer layers are breached.
  - Contrasts with [[Perimeter Security]], which relies on a single hardened boundary.
  - Endorsed by the [[NIST Cybersecurity Framework]] and foundational to enterprise security design.

- ### Overview
  - Core insight: no single control is infallible, so redundancy reduces the probability of successful compromise.
  - Controls are selected to be diverse (different vendors, mechanisms) to avoid common-mode failure.
  - Layers typically include: physical security, network controls, host hardening, application controls, and data protection.
  - Operational visibility (logging, monitoring) spans all layers to enable [[Incident Response]].

- ### Key Aspects
  - **Layering**: controls operate at network perimeter, internal segmentation, endpoint, application, and data levels.
  - **Diversity**: heterogeneous control types and vendors reduce the risk of a single vulnerability spanning layers.
  - **Least privilege**: each layer restricts access to only what is required, minimising blast radius.
  - **Detection**: each layer provides telemetry feeding [[Intrusion Detection System]] and SIEM pipelines.

- ### Mechanisms
  - [[Firewall]] rules segment network zones; [[Network Segmentation]] limits lateral movement.
  - [[Encryption]] protects data at rest and in transit independently of access controls.
  - [[Access Control]] enforces authorisation at application and resource level.
  - [[Threat Modelling]] drives control selection by mapping attacker paths to defensive responses.

- ### Applications
  - Enterprise cloud environments combining [[Zero Trust Architecture]] with layered network controls.
  - Industrial control systems protecting operational technology with air gaps, firewalls, and monitoring.
  - [[Regulatory Compliance]] frameworks (PCI DSS, NIS2) mandating layered controls.
  - AI system security combining model-level, API-level, and infrastructure-level controls.
  - [[Cloud Security]] posture management across multi-account environments.

- ### Relationships
  - implements:: [[Security Architecture]]
  - implements:: [[Risk Management]]
  - enables:: [[Resilience]]
  - enables:: [[Zero Trust Architecture]]
  - enables:: [[Incident Response]]
  - hasPart:: [[Access Control]]
  - hasPart:: [[Intrusion Detection System]]
  - hasPart:: [[Firewall]]
  - hasPart:: [[Encryption]]
  - requires:: [[Security Policy]]
  - requires:: [[Threat Modelling]]
  - relatedTo:: [[Network Segmentation]]
  - relatedTo:: [[Identity Management]]
  - relatedTo:: [[Vulnerability Management]]
  - contrastsWith:: [[Perimeter Security]]
  - supports:: [[Regulatory Compliance]]
  - supports:: [[Cloud Security]]
  - standardizedBy:: [[NIST Cybersecurity Framework]]

- ### Provenance
  - updated:: 2026-06-15