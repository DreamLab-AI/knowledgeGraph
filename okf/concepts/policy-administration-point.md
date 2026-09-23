---
okf_version: "0.2"
type: Class
title: Policy Administration Point
resource: urn:ngm:class:policy-administration-point
domain: security
description: A Policy Administration Point (PAP) is the component within an attribute-based or policy-based access control architecture responsible for authoring, storing, and distributing access control policies to Policy Decision Points. The PAP provides the administrative interface through which security administrators define rules governing which subjects may access which resources under what conditions. I
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:access-control
hasPart:
  - urn:ngm:class:governance
  - urn:ngm:class:data-schema
requires:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:data-management
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:encryption
dependsOn:
  - urn:ngm:class:biometric-data
implements:
  - urn:ngm:class:standards
contrastsWith:
  - urn:ngm:class:session-key
bridgesTo:
  - urn:ngm:class:distributed-ledger
supports:
  - urn:ngm:class:privacy
  - urn:ngm:class:personal-data
relatedTo:
  - urn:ngm:class:policy-information-point
  - urn:ngm:class:security
---

# Policy Administration Point

A Policy Administration Point (PAP) is the component within an attribute-based or policy-based access control architecture responsible for authoring, storing, and distributing access control policies to Policy Decision Points. The PAP provides the administrative interface through which security administrators define rules governing which subjects may access which resources under what conditions. It is distinct from policy enforcement and evaluation components, focusing solely on policy lifecycle management.
