---
okf_version: "0.2"
type: Class
title: Policy Information Point
resource: urn:ngm:class:policy-information-point
domain: security
description: A Policy Information Point (PIP) is the component in a policy-based access control architecture that retrieves and supplies attribute values needed by a Policy Decision Point to evaluate access requests against policies. The PIP acts as an attribute authority, querying identity stores, databases, and external services to resolve subject attributes, resource properties, and environmental conditions
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:access-control
hasPart:
  - urn:ngm:class:personal-data
  - urn:ngm:class:data-schema
requires:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:biometric-data
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:governance
dependsOn:
  - urn:ngm:class:data-management
  - urn:ngm:class:encryption
contrastsWith:
  - urn:ngm:class:session-key
bridgesTo:
  - urn:ngm:class:distributed-ledger
uses:
  - urn:ngm:class:session-key
supports:
  - urn:ngm:class:privacy
  - urn:ngm:class:session-management
relatedTo:
  - urn:ngm:class:policy-administration-point
  - urn:ngm:class:security
---

# Policy Information Point

A Policy Information Point (PIP) is the component in a policy-based access control architecture that retrieves and supplies attribute values needed by a Policy Decision Point to evaluate access requests against policies. The PIP acts as an attribute authority, querying identity stores, databases, and external services to resolve subject attributes, resource properties, and environmental conditions at decision time. It decouples the decision logic from the data sources that inform it.
