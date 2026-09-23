---
okf_version: "0.2"
type: Class
title: Identity Provider
resource: urn:ngm:class:identity-provider
domain: infrastructure
description: An Identity Provider (IdP) is a specialised security system that authenticates principals — humans, service accounts, devices, and workloads — and issues cryptographically signed tokens or assertions that downstream service providers accept as proof of identity and authorised attributes, oper...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:security-infrastructure
  - urn:ngm:class:identity-management-system
  - urn:ngm:class:access-control-system
  - urn:ngm:class:authentication-service
  - urn:ngm:class:trust-service
hasPart:
  - urn:ngm:class:audit-log
  - urn:ngm:class:credential-store
  - urn:ngm:class:session-manager
  - urn:ngm:class:user-directory
  - urn:ngm:class:authentication-engine
  - urn:ngm:class:token-issuance-service
  - urn:ngm:class:mfa-module
  - urn:ngm:class:federation-gateway
  - urn:ngm:class:risk-engine
requires:
  - urn:ngm:class:directory-service
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:network-security
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:continuous-authentication
  - urn:ngm:class:authorization
  - urn:ngm:class:federated-identity
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:passkey-authentication
  - urn:ngm:class:privileged-access-management
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:authorization
  - urn:ngm:class:identity-and-access-management
dependsOn:
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:tls
  - urn:ngm:class:directory-service
implements:
  - urn:ngm:class:fido2
  - urn:ngm:class:kerberos
  - urn:ngm:class:ldap
  - urn:ngm:class:oauth
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:saml
  - urn:ngm:class:scim
  - urn:ngm:class:web-authn
contrastsWith:
  - urn:ngm:class:decentralized-identity-did
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:distributed-authentication-architecture
uses:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:pkce
  - urn:ngm:class:push-notification
supports:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:passwordless-authentication
  - urn:ngm:class:risk-based-authentication
  - urn:ngm:class:social-login
  - urn:ngm:class:api-gateway
  - urn:ngm:class:b2c-identity
  - urn:ngm:class:b2e-identity
standardizedBy:
  - urn:ngm:class:fido-alliance
  - urn:ngm:class:ietf
  - urn:ngm:class:nist
  - urn:ngm:class:oasis
  - urn:ngm:class:open-id-foundation
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:cross-platform-identity
  - urn:ngm:class:digital-identity
  - urn:ngm:class:digital-identity-framework
  - urn:ngm:class:identity-federation
  - urn:ngm:class:identity-management
  - urn:ngm:class:identity-verification
---

# Identity Provider

An Identity Provider (IdP) is a specialised security system that authenticates principals — humans, service accounts, devices, and workloads — and issues cryptographically signed tokens or assertions that downstream service providers accept as proof of identity and authorised attributes, oper...
