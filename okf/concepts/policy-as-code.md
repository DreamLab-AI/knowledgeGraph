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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Policy As Code

Policy as code is the practice of expressing governance, security, and compliance rules in a machine-readable, version-controlled language so that they can be automatically evaluated and enforced. By treating policy as a software artefact, organisations gain testability, auditability, and consistent enforcement across infrastructure, data, and application pipelines. Decisions are computed by policy engines at admission or runtime, replacing manual review with deterministic, repeatable checks.
