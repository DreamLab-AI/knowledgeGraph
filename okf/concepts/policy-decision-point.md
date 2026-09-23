---
okf_version: "0.2"
type: Class
title: Policy Decision Point
resource: urn:ngm:class:policy-decision-point
domain: security
description: "A Policy Decision Point (PDP) is the logical component in an attribute-based or policy-based access control architecture that evaluates access requests against a set of authorisation policies and returns a permit, deny, or indeterminate decision. The PDP receives a request context—including subject attributes, resource attributes, action, and environment conditions—from a Policy Enforcement Point "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:access-control-system
enables:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:policy-framework
  - urn:ngm:class:authorization
dependsOn:
  - urn:ngm:class:authentication
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:identity-management
implements:
  - urn:ngm:class:attribute-based-access-control
  - urn:ngm:class:xacml
contrastsWith:
  - urn:ngm:class:network-perimeter-security
bridgesTo:
  - urn:ngm:class:service-mesh
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:open-policy-agent
  - urn:ngm:class:json-data-interchange-format-web-token
supports:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:identity-federation
standardizedBy:
  - urn:ngm:class:oasis
relatedTo:
  - urn:ngm:class:policy-enforcement-point
  - urn:ngm:class:policy-enforcement
  - urn:ngm:class:policy-engine
  - urn:ngm:class:access-control
  - urn:ngm:class:policy-administration-point
  - urn:ngm:class:policy-information-point
---

# Policy Decision Point

A Policy Decision Point (PDP) is the logical component in an attribute-based or policy-based access control architecture that evaluates access requests against a set of authorisation policies and returns a permit, deny, or indeterminate decision. The PDP receives a request context—including subject attributes, resource attributes, action, and environment conditions—from a Policy Enforcement Point (PEP), retrieves applicable policies from a Policy Information Point (PIP) or Policy Administration Point (PAP), and applies the XACML combining algorithms or equivalent logic to reach a binding decision. PDPs are the computational core of fine-grained, dynamic authorisation systems used in zero-trust security architectures, identity federation, API gateways, and cloud IAM platforms.
