---
okf_version: "0.2"
type: Class
title: Digital Onboarding
resource: urn:ngm:class:digital-onboarding
domain: security
description: Digital onboarding is the remote, self-service process by which an organisation enrols a new customer or user, capturing and verifying their identity entirely through digital channels rather than in person. It typically combines document capture, biometric checks, liveness detection and database lookups to satisfy regulatory know-your-customer obligations while minimising friction. The aim is to c
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:identity-verification
requires:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:kyc
  - urn:ngm:class:biometric-authentication
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:digital-identity
dependsOn:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:compliance
contrastsWith:
  - urn:ngm:class:biometric-authentication
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
supports:
  - urn:ngm:class:aml
  - urn:ngm:class:user-experience
relatedTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:authentication
  - urn:ngm:class:compliance
---

# Digital Onboarding

Digital onboarding is the remote, self-service process by which an organisation enrols a new customer or user, capturing and verifying their identity entirely through digital channels rather than in person. It typically combines document capture, biometric checks, liveness detection and database lookups to satisfy regulatory know-your-customer obligations while minimising friction. The aim is to convert a prospect into a verified, account-holding user quickly and securely.
