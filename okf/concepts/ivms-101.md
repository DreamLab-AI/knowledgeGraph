---
okf_version: "0.2"
type: Class
title: IVMS 101
resource: urn:ngm:class:ivms-101
domain: blockchain
description: IVMS 101 (interVASP Messaging Standard 101) is an open data model and schema specification developed by the Joint Working Group on interVASP Messaging Standards (JWG) to enable Virtual Asset Service Providers (VASPs) to exchange originator and beneficiary identity information in compliance with the FATF Travel Rule. Published in 2020 and subsequently adopted by the FATF as the preferred global sta
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:compliance-framework
enables:
  - urn:ngm:class:cross-border-compliance
  - urn:ngm:class:compliance-verification
uses:
  - urn:ngm:class:digital-identity-standards
supports:
  - urn:ngm:class:aml
  - urn:ngm:class:regulatory-compliance
relatedTo:
  - urn:ngm:class:fatf-travel-rule
  - urn:ngm:class:fatf
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:virtual-asset
---

# IVMS 101

IVMS 101 (interVASP Messaging Standard 101) is an open data model and schema specification developed by the Joint Working Group on interVASP Messaging Standards (JWG) to enable Virtual Asset Service Providers (VASPs) to exchange originator and beneficiary identity information in compliance with the FATF Travel Rule. Published in 2020 and subsequently adopted by the FATF as the preferred global standard for Travel Rule data transmission, IVMS 101 defines canonical field names, value types, and encoding rules for natural persons, legal persons, and address objects in a technology-neutral JSON schema. It is designed to be embedded within any Travel Rule messaging protocol — including TRP, TRUST, VerifyVASP, and Sygna Bridge — ensuring semantic interoperability across different technical implementations.
