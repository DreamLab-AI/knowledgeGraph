---
okf_version: "0.2"
type: Class
title: Identity Verification System
resource: urn:ngm:class:identity-verification-system
domain: security
description: An Identity Verification System (IVS) is an integrated set of processes, technologies, and controls that establish with high assurance that a person presenting a claimed identity is genuinely that individual. It typically orchestrates document authentication, biometric matching with liveness detection, and cross-referential data validation against authoritative databases to produce a risk-scored t
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:identity-management
hasPart:
  - urn:ngm:class:document-authentication
  - urn:ngm:class:liveness-detection
  - urn:ngm:class:risk-scoring
requires:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:optical-character-recognition
  - urn:ngm:class:database-lookup
enables:
  - urn:ngm:class:kyc
  - urn:ngm:class:aml
  - urn:ngm:class:digital-onboarding
  - urn:ngm:class:access-control
dependsOn:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:cryptographic-infrastructure
implements:
  - urn:ngm:class:identity-proofing
contrastsWith:
  - urn:ngm:class:authentication
  - urn:ngm:class:authorisation
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:facial-recognition
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:cryptographic-signature
supports:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:nist-sp-800-63
  - urn:ngm:class:iso-iec
  - urn:ngm:class:eidas-regulation
  - urn:ngm:class:iso-iec
partOf:
  - urn:ngm:class:identity-management
relatedTo:
  - urn:ngm:class:synthetic-identity-fraud
  - urn:ngm:class:privacy-preserving-computation
---

# Identity Verification System

An Identity Verification System (IVS) is an integrated set of processes, technologies, and controls that establish with high assurance that a person presenting a claimed identity is genuinely that individual. It typically orchestrates document authentication, biometric matching with liveness detection, and cross-referential data validation against authoritative databases to produce a risk-scored trust signal. IVSs operate across regulated sectors — financial services, healthcare, government, and telecommunications — where Know Your Customer (KYC) and Anti-Money Laundering (AML) obligations mandate identity proofing at onboarding and at trust-elevation events. Modern IVSs increasingly integrate machine-learning fraud-detection models, cryptographic document signatures, and decentralised identity standards to resist synthetic-identity fraud and deepfake attacks.
