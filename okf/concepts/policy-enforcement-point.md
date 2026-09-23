---
okf_version: "0.2"
type: Class
title: Policy Enforcement Point
resource: urn:ngm:class:policy-enforcement-point
domain: security
description: A Policy Enforcement Point (PEP) is a runtime architectural component in access control systems that intercepts every request for a protected resource, forwards a structured authorisation query to a Policy Decision Point (PDP), and enforces the returned permit, deny, or obligation decision at the resource boundary. The PEP–PDP separation, first formalised in the OASIS XACML standard, decouples pol
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:access-control
requires:
  - urn:ngm:class:policy-decision-point
  - urn:ngm:class:policy-information-point
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:attribute-based-access-control
  - urn:ngm:class:privileged-access-management
  - urn:ngm:class:least-privilege
  - urn:ngm:class:continuous-verification
implements:
  - urn:ngm:class:authorisation
  - urn:ngm:class:access-control-policy
contrastsWith:
  - urn:ngm:class:network-perimeter-security
  - urn:ngm:class:role-based-access-control
bridgesTo:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:data-mesh
uses:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:api-gateway
  - urn:ngm:class:service-mesh
  - urn:ngm:class:mutual-tls
supports:
  - urn:ngm:class:audit-logging
  - urn:ngm:class:data-governance
  - urn:ngm:class:compliance-enforcement
standardizedBy:
  - urn:ngm:class:xacml
  - urn:ngm:class:nist-sp-800-207
partOf:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:xacml-architecture
relatedTo:
  - urn:ngm:class:policy-administration-point
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:software-defined-perimeter
  - urn:ngm:class:reverse-proxy
  - urn:ngm:class:policy-enforcement
---

# Policy Enforcement Point

A Policy Enforcement Point (PEP) is a runtime architectural component in access control systems that intercepts every request for a protected resource, forwards a structured authorisation query to a Policy Decision Point (PDP), and enforces the returned permit, deny, or obligation decision at the resource boundary. The PEP–PDP separation, first formalised in the OASIS XACML standard, decouples policy logic from enforcement infrastructure and enables centralised policy management across heterogeneous systems. In zero-trust architectures every network transaction passes through a PEP, which may be realised as a reverse proxy, API gateway, service mesh sidecar, network firewall, or identity-aware proxy. The model extends naturally to software-defined perimeters, ABAC deployments, and AI governance enforcement layers where model prompts and outputs must satisfy content policies before reaching end users.
