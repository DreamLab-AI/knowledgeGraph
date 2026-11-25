---
okf_version: "0.2"
type: Class
title: Security Operations Centre
resource: urn:ngm:class:security-operations-centre
domain: security
description: A Security Operations Centre (SOC) is a centralised function, combining people, processes and technology, that continuously monitors, detects, analyses and responds to cybersecurity threats across an organisation. Analysts triage alerts from telemetry sources, investigate incidents, and coordinate containment and remediation, typically aided by SIEM and SOAR platforms. The SOC is the operational h
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cybersecurity
hasPart:
  - urn:ngm:class:siem
  - urn:ngm:class:soar
  - urn:ngm:class:threat-intelligence
requires:
  - urn:ngm:class:monitoring
  - urn:ngm:class:telemetry
enables:
  - urn:ngm:class:incident-response
  - urn:ngm:class:threat-detection
implements:
  - urn:ngm:class:security
uses:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:vulnerability-management
supports:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:data-breach
  - urn:ngm:class:cloud-security
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Security Operations Centre

A Security Operations Centre (SOC) is a centralised function, combining people, processes and technology, that continuously monitors, detects, analyses and responds to cybersecurity threats across an organisation. Analysts triage alerts from telemetry sources, investigate incidents, and coordinate containment and remediation, typically aided by SIEM and SOAR platforms. The SOC is the operational hub of an enterprise security programme, providing the situational awareness and response capability needed to limit the impact of attacks.
