---
okf_version: "0.2"
type: Class
title: Attribute-Based Access Control
resource: urn:ngm:class:attribute-based-access-control
domain: security
description: "Attribute-Based Access Control (ABAC) is an authorisation model that grants or denies access by evaluating policies against attributes of the subject, resource, action, and environment rather than against static role assignments. Decisions are computed dynamically from these attributes at request time, enabling fine-grained, context-aware control. ABAC is a cornerstone of zero-trust architectures "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:access-control
hasPart:
  - urn:ngm:class:access-control-policy
  - urn:ngm:class:authorization
requires:
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:data-minimisation
dependsOn:
  - urn:ngm:class:identity-and-access-management
implements:
  - urn:ngm:class:authorization
contrastsWith:
  - urn:ngm:class:role-based-access-control
bridgesTo:
  - urn:ngm:class:zero-trust-architecture
uses:
  - urn:ngm:class:access-control-policy
supports:
  - urn:ngm:class:compliance-monitoring
partOf:
  - urn:ngm:class:identity-and-access-management
relatedTo:
  - urn:ngm:class:audit-logging
  - urn:ngm:class:cybersecurity
---

# Attribute-Based Access Control

Attribute-Based Access Control (ABAC) is an authorisation model that grants or denies access by evaluating policies against attributes of the subject, resource, action, and environment rather than against static role assignments. Decisions are computed dynamically from these attributes at request time, enabling fine-grained, context-aware control. ABAC is a cornerstone of zero-trust architectures because it can express rich conditional rules without proliferating roles.
