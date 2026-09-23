---
okf_version: "0.2"
type: Class
title: Role-Based Access Control
resource: urn:ngm:class:role-based-access-control
domain: security
description: Role-Based Access Control (RBAC) is an access control paradigm in which permissions to perform operations on system resources are assigned to roles rather than to individual users, and users acquire those permissions by being assigned to one or more roles that reflect their organisational function. It enforces the principle of least privilege and separation of duties by decoupling user identity fr
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:access-control
hasPart:
  - urn:ngm:class:separation-of-duties
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:identity-and-access-management
enables:
  - urn:ngm:class:authorisation
  - urn:ngm:class:access-control-decisions
  - urn:ngm:class:least-privilege
implements:
  - urn:ngm:class:access-control-policy
  - urn:ngm:class:ansi-incits-359
contrastsWith:
  - urn:ngm:class:attribute-based-access-control
  - urn:ngm:class:discretionary-access-control
  - urn:ngm:class:mandatory-access-control
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:verifiable-credentials
uses:
  - urn:ngm:class:directory-service
supports:
  - urn:ngm:class:multi-tenancy
  - urn:ngm:class:audit-logging
relatedTo:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:policy-enforcement
  - urn:ngm:class:governance-framework
  - urn:ngm:class:open-policy-agent
  - urn:ngm:class:kubernetes
---

# Role-Based Access Control

Role-Based Access Control (RBAC) is an access control paradigm in which permissions to perform operations on system resources are assigned to roles rather than to individual users, and users acquire those permissions by being assigned to one or more roles that reflect their organisational function. It enforces the principle of least privilege and separation of duties by decoupling user identity from resource authorisation through an intermediate role abstraction.
