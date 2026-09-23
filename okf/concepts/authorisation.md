---
okf_version: "0.2"
type: Class
title: Authorisation
resource: urn:ngm:class:authorisation
domain: security
description: Authorisation is the process of determining and enforcing whether an authenticated principal—user, service, or device—has the right to perform a requested action on a protected resource. It operates downstream of authentication, translating verified identity claims into permitted operations according to configured access policies. Modern authorisation frameworks encompass role-based, attribute-bas
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:access-control
hasPart:
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:attribute-based-access-control
  - urn:ngm:class:access-control
  - urn:ngm:class:access-control
  - urn:ngm:class:relationship-based-access-control
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:identity-management
  - urn:ngm:class:policy-engine
enables:
  - urn:ngm:class:privacy-controls
  - urn:ngm:class:audit-trail
  - urn:ngm:class:compliance-monitoring
  - urn:ngm:class:least-privilege
  - urn:ngm:class:zero-trust-architecture
dependsOn:
  - urn:ngm:class:cryptography
  - urn:ngm:class:digital-identity
  - urn:ngm:class:secure-token-service
contrastsWith:
  - urn:ngm:class:authentication
  - urn:ngm:class:accountability
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ai-agent
uses:
  - urn:ngm:class:access-token
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-policy-agent
  - urn:ngm:class:compliance-framework
standardizedBy:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:xacml
  - urn:ngm:class:iso-iec-27001
relatedTo:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:data-governance
  - urn:ngm:class:privilege-escalation
  - urn:ngm:class:separation-of-duties
---

# Authorisation

Authorisation is the process of determining and enforcing whether an authenticated principal—user, service, or device—has the right to perform a requested action on a protected resource. It operates downstream of authentication, translating verified identity claims into permitted operations according to configured access policies. Modern authorisation frameworks encompass role-based, attribute-based, relationship-based, and policy-as-code access control models, each balancing expressiveness with enforcement performance. Robust authorisation design underpins regulatory compliance, auditability, and the principle of least privilege across distributed digital systems.
