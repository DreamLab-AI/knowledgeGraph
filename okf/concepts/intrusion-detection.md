---
okf_version: "0.2"
type: Class
title: Intrusion Detection
resource: urn:ngm:class:intrusion-detection
domain: security
description: The security discipline of monitoring networks, hosts, and applications to identify unauthorised access, policy violations, and malicious activity in progress. Intrusion detection systems (IDS) combine signature matching against known attack patterns with anomaly detection over baselines of normal behaviour, raising alerts that feed incident response; inline variants (IPS) additionally block detec
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:security-monitoring
uses:
  - urn:ngm:class:anomaly-detection
partOf:
  - urn:ngm:class:information-security
relatedTo:
  - urn:ngm:class:attack-vector
  - urn:ngm:class:threat-detection
---

# Intrusion Detection

The security discipline of monitoring networks, hosts, and applications to identify unauthorised access, policy violations, and malicious activity in progress. Intrusion detection systems (IDS) combine signature matching against known attack patterns with anomaly detection over baselines of normal behaviour, raising alerts that feed incident response; inline variants (IPS) additionally block detected traffic, trading detection breadth against false-positive risk.
