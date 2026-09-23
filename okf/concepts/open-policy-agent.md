---
okf_version: "0.2"
type: Class
title: Open Policy Agent
resource: urn:ngm:class:open-policy-agent
domain: security
description: "Open Policy Agent (OPA) is an open-source, general-purpose policy engine that decouples authorisation and policy decisions from application code by evaluating declarative policies against structured input. Policies are written in its purpose-built language, Rego, and OPA returns decisions that calling services enforce. As a graduated Cloud Native Computing Foundation project, it is widely used to "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:policy-engine
requires:
  - urn:ngm:class:policy-enforcement-point
enables:
  - urn:ngm:class:authorization
  - urn:ngm:class:access-control
implements:
  - urn:ngm:class:policy-as-code
  - urn:ngm:class:policy-decision-point
uses:
  - urn:ngm:class:security-policy
  - urn:ngm:class:policy-as-code
supports:
  - urn:ngm:class:attribute-based-access-control
  - urn:ngm:class:role-based-access-control
standardizedBy:
  - urn:ngm:class:open-source
relatedTo:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:api-gateway
  - urn:ngm:class:microservices
---

# Open Policy Agent

Open Policy Agent (OPA) is an open-source, general-purpose policy engine that decouples authorisation and policy decisions from application code by evaluating declarative policies against structured input. Policies are written in its purpose-built language, Rego, and OPA returns decisions that calling services enforce. As a graduated Cloud Native Computing Foundation project, it is widely used to implement policy-as-code across Kubernetes admission control, microservice authorisation, and API gateways. OPA acts as a policy decision point, leaving enforcement to integrated policy enforcement points.
