---
okf_version: "0.2"
type: Class
title: Access Control
resource: urn:ngm:class:access-control
domain: security
description: Access control is a fundamental security mechanism that regulates which users, systems, or processes can view, use, or modify resources within a computing environment. It encompasses the policies, procedures, and technologies that govern the granting and restricting of access rights, ensuring that only authorised entities can perform specific actions on protected resources based on their identity,
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:authentication
  - urn:ngm:class:authorisation
  - urn:ngm:class:audit-logging
  - urn:ngm:class:identity-and-access-management
requires:
  - urn:ngm:class:identity-management
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:compliance
  - urn:ngm:class:security
  - urn:ngm:class:data-protection
  - urn:ngm:class:least-privilege
  - urn:ngm:class:separation-of-duties
  - urn:ngm:class:security
implements:
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:attribute-based-access-control
  - urn:ngm:class:mandatory-access-control
  - urn:ngm:class:authorisation
  - urn:ngm:class:identity-and-access-management
contrastsWith:
  - urn:ngm:class:open-access
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:smart-contract
  - urn:ngm:class:cryptography
uses:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:privileged-access-management
  - urn:ngm:class:access-control-list
supports:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:nist-sp-800-53
  - urn:ngm:class:iso-iec-27001
relatedTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:security
---

# Access Control

Access control is a fundamental security mechanism that regulates which users, systems, or processes can view, use, or modify resources within a computing environment. It encompasses the policies, procedures, and technologies that govern the granting and restricting of access rights, ensuring that only authorised entities can perform specific actions on protected resources based on their identity, role, or attributes.
