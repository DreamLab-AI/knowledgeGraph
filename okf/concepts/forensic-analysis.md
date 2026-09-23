---
okf_version: "0.2"
type: Class
title: Forensic Analysis
resource: urn:ngm:class:forensic-analysis
domain: security
description: Forensic analysis is the disciplined investigation of digital systems and data to reconstruct events, attribute actions and preserve evidence to an evidentiary standard. In security it follows an incident to determine how a breach occurred, what was affected and who was responsible, maintaining a defensible chain of custody throughout. It draws on log analysis, memory and disk examination, and tim
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:incident-response
requires:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:incident-response
enables:
  - urn:ngm:class:root-cause-analysis
  - urn:ngm:class:threat-detection
dependsOn:
  - urn:ngm:class:audit-trail
implements:
  - urn:ngm:class:incident-response
contrastsWith:
  - urn:ngm:class:threat-detection
bridgesTo:
  - urn:ngm:class:root-cause-analysis
uses:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:siem
supports:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:compliance
partOf:
  - urn:ngm:class:incident-response
relatedTo:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:threat-detection
  - urn:ngm:class:audit-trail
  - urn:ngm:class:root-cause-analysis
---

# Forensic Analysis

Forensic analysis is the disciplined investigation of digital systems and data to reconstruct events, attribute actions and preserve evidence to an evidentiary standard. In security it follows an incident to determine how a breach occurred, what was affected and who was responsible, maintaining a defensible chain of custody throughout. It draws on log analysis, memory and disk examination, and timeline reconstruction.
