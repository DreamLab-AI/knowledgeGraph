---
okf_version: "0.2"
type: Class
title: Access Control Rule
resource: urn:ngm:class:access-control-rule
domain: artificial-intelligence
description: An access control rule is a rule that permits an agent or role to perform an action on a resource.[^1] visionGraph places it under [[Access Control Policy]] and as part of an [[Execution Context]], which holds its rules through `hasAccessControlRule`.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:access-control-policy
partOf:
  - urn:ngm:class:execution-context
---

# Access Control Rule

An access control rule is a rule that permits an agent or role to perform an action on a resource.[^1] visionGraph places it under [[Access Control Policy]] and as part of an [[Execution Context]], which holds its rules through `hasAccessControlRule`.
