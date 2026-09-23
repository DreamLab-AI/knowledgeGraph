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
---

# Security Operations Centre

A Security Operations Centre (SOC) is a centralised function, combining people, processes and technology, that continuously monitors, detects, analyses and responds to cybersecurity threats across an organisation. Analysts triage alerts from telemetry sources, investigate incidents, and coordinate containment and remediation, typically aided by SIEM and SOAR platforms. The SOC is the operational hub of an enterprise security programme, providing the situational awareness and response capability needed to limit the impact of attacks.
