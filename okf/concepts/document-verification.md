---
okf_version: "0.2"
type: Class
title: Document Verification
resource: urn:ngm:class:document-verification
domain: finance
description: Document verification is the process of confirming that an identity or supporting document presented by a customer is authentic, unaltered, and belongs to the presenting individual. In financial onboarding it combines optical capture, security-feature and template checks, data extraction, and cross-referencing against issuing-authority records or biometric liveness, forming a core step within know
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:kyc
hasPart:
  - urn:ngm:class:fraud-detection
requires:
  - urn:ngm:class:compliance
enables:
  - urn:ngm:class:onboarding
dependsOn:
  - urn:ngm:class:fraud-detection
bridgesTo:
  - urn:ngm:class:digital-signature
uses:
  - urn:ngm:class:machine-learning-discipline
supports:
  - urn:ngm:class:aml
  - urn:ngm:class:compliance
  - urn:ngm:class:aml
partOf:
  - urn:ngm:class:kyc
  - urn:ngm:class:onboarding
relatedTo:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:verifiable-credential-vc
---

# Document Verification

Document verification is the process of confirming that an identity or supporting document presented by a customer is authentic, unaltered, and belongs to the presenting individual. In financial onboarding it combines optical capture, security-feature and template checks, data extraction, and cross-referencing against issuing-authority records or biometric liveness, forming a core step within know-your-customer and anti-money-laundering controls.
