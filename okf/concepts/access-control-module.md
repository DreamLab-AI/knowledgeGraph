---
okf_version: "0.2"
type: Class
title: Access Control Module
resource: urn:ngm:class:access-control-module
domain: security
description: An Access Control Module is a self-contained software component that enforces authorization rules governing which principals may invoke which functions or read which resources. In smart-contract systems it is commonly implemented as a reusable mixin defining roles, ownership, and permission checks that other contracts inherit. It centralizes permission logic so that privileged operations such as t
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
relatedTo:
  - urn:ngm:class:timelock
  - urn:ngm:class:digital-rights-management-extended
---

# Access Control Module

An Access Control Module is a self-contained software component that enforces authorization rules governing which principals may invoke which functions or read which resources. In smart-contract systems it is commonly implemented as a reusable mixin defining roles, ownership, and permission checks that other contracts inherit. It centralizes permission logic so that privileged operations such as timelocked upgrades or rights revocation are gated behind verifiable on-chain conditions.
