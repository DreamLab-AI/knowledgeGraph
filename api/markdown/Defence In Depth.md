Defence in Depth is a cybersecurity strategy that layers multiple independent security controls such that the failure of any single control does not expose the system to compromise. Originating from military doctrine, it applies redundancy and diversity across physical, technical, and administrative security dimensions. The strategy reduces the probability of successful attack by requiring adversaries to defeat multiple independent barriers sequentially.

### Overview

- Core insight: no single control is infallible, so redundancy reduces the probability of successful compromise.
- Controls are selected to be diverse (different vendors, mechanisms) to avoid common-mode failure.
- Layers typically include: physical security, network controls, host hardening, application controls, and data protection.
- Operational visibility (logging, monitoring) spans all layers to enable [[Incident Response]].

### Key Aspects

- **Layering**: controls operate at network perimeter, internal segmentation, endpoint, application, and data levels.
- **Diversity**: heterogeneous control types and vendors reduce the risk of a single vulnerability spanning layers.
- **Least privilege**: each layer restricts access to only what is required, minimising blast radius.
- **Detection**: each layer provides telemetry feeding [[Intrusion Detection System]] and SIEM pipelines.

### Mechanisms

- [[Firewall]] rules segment network zones; [[Network Segmentation]] limits lateral movement.
- [[Encryption]] protects data at rest and in transit independently of access controls.
- [[Access Control]] enforces authorisation at application and resource level.
- [[Threat Modelling]] drives control selection by mapping attacker paths to defensive responses.

### Applications

- Enterprise cloud environments combining [[Zero Trust Architecture]] with layered network controls.
- Industrial control systems protecting operational technology with air gaps, firewalls, and monitoring.
- [[Regulatory Compliance]] frameworks (PCI DSS, NIS2) mandating layered controls.
- AI system security combining model-level, API-level, and infrastructure-level controls.
- [[Cloud Security]] posture management across multi-account environments.

### Provenance

## Merged from Defense In Depth (needs reconciliation)
Defense in depth is a security strategy that layers multiple, independent controls across an environment so that the failure or bypass of any single control does not lead to compromise. Adapted from military doctrine, it spans physical, network, host, application, and data layers, combining preventive, detective, and responsive measures to slow attackers, increase the cost of intrusion, and provide redundancy. It assumes no control is infallible and complements modern paradigms such as zero trust by ensuring that defences are distributed rather than concentrated at a single perimeter.

### Overview

- The principle assumes every control can eventually fail, so overlapping defences provide resilience.
- Controls span physical, network, host, application, identity, and data layers.
- Each layer adds preventive, detective, and responsive capability, slowing and exposing attackers.
- It complements zero-trust thinking by ensuring defences are not concentrated at one point.

### Mechanisms

- Network segmentation and [[Firewall]] rules limit lateral movement.
- [[Access Control]] and least privilege constrain what compromised credentials can reach.
- [[Encryption]] protects data at rest and in transit even if other layers fail.
- [[Intrusion Detection]] and monitoring surface activity that bypasses prevention.

### Applications

- Enterprise network and data-centre protection.
- Cloud workload hardening across identity, network, and workload layers.
- Critical-infrastructure and industrial control system security.
- Endpoint and application protection programmes.

### Provenance

