---
okf_version: "0.2"
type: Class
title: Access Control Decisions
resource: urn:ngm:class:access-control-decisions
domain: security
description: "Access Control Decisions are the runtime determinations made by a policy engine or decision point as to whether a particular subject—user, process, or device—is permitted to perform a requested action on a protected resource, based on evaluated policies, attributes, and contextual signals. These decisions are the operational output of an access control architecture and are typically produced by a "
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:access-control
enables:
  - urn:ngm:class:authorisation
  - urn:ngm:class:zero-trust-architecture
dependsOn:
  - urn:ngm:class:identity-management
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:policy-engine
  - urn:ngm:class:policy-decision-point
relatedTo:
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:policy-enforcement-point
---

# Access Control Decisions

Access Control Decisions are the runtime determinations made by a policy engine or decision point as to whether a particular subject—user, process, or device—is permitted to perform a requested action on a protected resource, based on evaluated policies, attributes, and contextual signals. These decisions are the operational output of an access control architecture and are typically produced by a Policy Decision Point (PDP) and enforced by a Policy Enforcement Point (PEP).
