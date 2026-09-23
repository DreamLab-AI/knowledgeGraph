---
okf_version: "0.2"
type: Class
title: Access Control System
resource: urn:ngm:class:access-control-system
domain: infrastructure
description: An Access Control System is the assemblage of policies, decision engines, enforcement points, identity providers, attribute sources, audit pipelines, and cryptographic primitives that determines wher a subject (human user, service account, autonomous agent, device) is permitted to perform a r...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:security-control
  - urn:ngm:class:authorisation-mechanism
  - urn:ngm:class:information-security-system
  - urn:ngm:class:governance-control
hasPart:
  - urn:ngm:class:audit-log
  - urn:ngm:class:identity-system
  - urn:ngm:class:policy-administration-point
  - urn:ngm:class:policy-decision-point
  - urn:ngm:class:policy-enforcement-point
  - urn:ngm:class:policy-information-point
  - urn:ngm:class:session-manager
  - urn:ngm:class:token-service
  - urn:ngm:class:policy-engine
  - urn:ngm:class:attribute-evaluation
  - urn:ngm:class:identity-system
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:trusted-timestamping
  - urn:ngm:class:api-gateway
  - urn:ngm:class:identity-provider
  - urn:ngm:class:metadata-management
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:trusted-timestamping
enables:
  - urn:ngm:class:auditability
  - urn:ngm:class:least-privilege
  - urn:ngm:class:separation-of-duties
  - urn:ngm:class:accountability
  - urn:ngm:class:distributed-system
  - urn:ngm:class:quality-assurance
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:risk-assessment
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:directory-service
  - urn:ngm:class:cryptography
  - urn:ngm:class:secure-logging
  - urn:ngm:class:time-synchronisation
implements:
  - urn:ngm:class:rbac
  - urn:ngm:class:abac
  - urn:ngm:class:rebac
  - urn:ngm:class:dac
  - urn:ngm:class:mac
  - urn:ngm:class:pbac
  - urn:ngm:class:capability-based-security
contrastsWith:
  - urn:ngm:class:capability-based-security
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:passwordless-authentication
bridgesTo:
  - urn:ngm:class:training-data
  - urn:ngm:class:control-theory
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:kerberos
  - urn:ngm:class:ldap
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:open-policy-agent
  - urn:ngm:class:saml
  - urn:ngm:class:web-authn
  - urn:ngm:class:xacml
  - urn:ngm:class:zanzibar
supports:
  - urn:ngm:class:forensic-investigation
  - urn:ngm:class:incident-response
  - urn:ngm:class:privileged-access-management
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:compliance-framework
standardizedBy:
  - urn:ngm:class:ansi-incits-359
  - urn:ngm:class:ietf
  - urn:ngm:class:iso-iec-27002
  - urn:ngm:class:nist
  - urn:ngm:class:nist-sp-800-207
  - urn:ngm:class:oasis
  - urn:ngm:class:web-authn
  - urn:ngm:class:nist
  - urn:ngm:class:oasis
  - urn:ngm:class:ietf-rfc-6749
  - urn:ngm:class:ietf
  - urn:ngm:class:web-authn
relatedTo:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:privileged-access-management
  - urn:ngm:class:secrets-management
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:identity-management
  - urn:ngm:class:identity-and-access-management
---

# Access Control System

An Access Control System is the assemblage of policies, decision engines, enforcement points, identity providers, attribute sources, audit pipelines, and cryptographic primitives that determines wher a subject (human user, service account, autonomous agent, device) is permitted to perform a r...
