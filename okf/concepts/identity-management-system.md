---
okf_version: "0.2"
type: Class
title: Identity Management System
resource: urn:ngm:class:identity-management-system
domain: infrastructure
description: An Identity Management System (IdM/IAM — Identity and Access Management) is a comprehensive technology framework that governs the full lifecycle of digital identities—creation, provisioning, authentication, authorisation, federation, delegation, and decommissioning—across enterprise, cloud, c...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:access-control-system
  - urn:ngm:class:governance-framework
  - urn:ngm:class:security-architecture
  - urn:ngm:class:digital-infrastructure
hasPart:
  - urn:ngm:class:directory-service
  - urn:ngm:class:policy-decision-point
  - urn:ngm:class:privileged-access-management
  - urn:ngm:class:session-manager
  - urn:ngm:class:audit-trail
  - urn:ngm:class:authentication-service
  - urn:ngm:class:identity-provider
  - urn:ngm:class:authorisation-engine
  - urn:ngm:class:provisioning-engine
  - urn:ngm:class:mfa-service
  - urn:ngm:class:privileged-access-management
requires:
  - urn:ngm:class:directory-service
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:api-gateway
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:risk-assessment
enables:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:passwordless-authentication
  - urn:ngm:class:privileged-access-management
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:audit-trail
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:user-lifecycle-management
dependsOn:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:graph-database
  - urn:ngm:class:api-gateway
  - urn:ngm:class:metadata-management
  - urn:ngm:class:distributed-system
implements:
  - urn:ngm:class:fido2
  - urn:ngm:class:ldap
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:saml-2-0
  - urn:ngm:class:web-authn
  - urn:ngm:class:scim-2-0
  - urn:ngm:class:fapi-2-0
contrastsWith:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:perimeter-security
uses:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:graph-database
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:metadata-management
  - urn:ngm:class:risk-assessment
supports:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:dev-sec-ops
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:digital-identity
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:fido-alliance
  - urn:ngm:class:ietf
  - urn:ngm:class:nist
  - urn:ngm:class:oasis
  - urn:ngm:class:open-id-foundation
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:access-control-system
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:digital-currency
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:verifiable-credentials
---

# Identity Management System

An Identity Management System (IdM/IAM — Identity and Access Management) is a comprehensive technology framework that governs the full lifecycle of digital identities—creation, provisioning, authentication, authorisation, federation, delegation, and decommissioning—across enterprise, cloud, c...
