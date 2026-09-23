---
okf_version: "0.2"
type: Class
title: Privileged Access Management
resource: urn:ngm:class:privileged-access-management
domain: security
description: Privileged Access Management (PAM) is a cybersecurity discipline and category of technology solutions that controls, monitors, and audits the access rights of users, accounts, and systems with elevated permissions in IT environments. PAM encompasses vaulting of privileged credentials, just-in-time access provisioning, session recording, and anomaly detection for privileged sessions. It addresses t
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:identity-and-access-management
hasPart:
  - urn:ngm:class:credential-store
  - urn:ngm:class:session-recording
  - urn:ngm:class:just-in-time-access
requires:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:digital-certificate
enables:
  - urn:ngm:class:compliance-audit-trail
dependsOn:
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-management
  - urn:ngm:class:cryptographic-infrastructure
contrastsWith:
  - urn:ngm:class:discretionary-access-control
bridgesTo:
  - urn:ngm:class:identity-and-access-management
uses:
  - urn:ngm:class:session-management
  - urn:ngm:class:behavioural-analytics
  - urn:ngm:class:security-information-and-event-management
supports:
  - urn:ngm:class:iso-iec-27001
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:sox-compliance
partOf:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:information-security
relatedTo:
  - urn:ngm:class:endpoint-detection-and-response
  - urn:ngm:class:network-access-control
---

# Privileged Access Management

Privileged Access Management (PAM) is a cybersecurity discipline and category of technology solutions that controls, monitors, and audits the access rights of users, accounts, and systems with elevated permissions in IT environments. PAM encompasses vaulting of privileged credentials, just-in-time access provisioning, session recording, and anomaly detection for privileged sessions. It addresses the risk that compromised administrator accounts represent the most damaging attack vector in enterprise breaches. PAM solutions enforce the principle of least privilege and provide forensic audit trails required by compliance frameworks such as ISO/IEC 27001 and SOX.
