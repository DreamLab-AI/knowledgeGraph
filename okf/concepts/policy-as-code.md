---
okf_version: "0.2"
type: Class
title: Policy As Code
resource: urn:ngm:class:policy-as-code
domain: data
description: Policy as code is the practice of expressing governance, security, and compliance rules in a machine-readable, version-controlled language so that they can be automatically evaluated and enforced. By treating policy as a software artefact, organisations gain testability, auditability, and consistent enforcement across infrastructure, data, and application pipelines. Decisions are computed by polic
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-governance
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:infrastructure-as-code
enables:
  - urn:ngm:class:compliance-automation
  - urn:ngm:class:access-control
implements:
  - urn:ngm:class:governance-framework
  - urn:ngm:class:regulatory-compliance
uses:
  - urn:ngm:class:policy-engine
  - urn:ngm:class:open-policy-agent
supports:
  - urn:ngm:class:audit
  - urn:ngm:class:data-governance
relatedTo:
  - urn:ngm:class:devops
  - urn:ngm:class:governance-framework
  - urn:ngm:class:access-control
---

# Policy As Code

Policy as code is the practice of expressing governance, security, and compliance rules in a machine-readable, version-controlled language so that they can be automatically evaluated and enforced. By treating policy as a software artefact, organisations gain testability, auditability, and consistent enforcement across infrastructure, data, and application pipelines. Decisions are computed by policy engines at admission or runtime, replacing manual review with deterministic, repeatable checks.
