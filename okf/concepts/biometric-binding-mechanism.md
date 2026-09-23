---
okf_version: "0.2"
type: Class
title: Biometric Binding Mechanism
resource: urn:ngm:class:biometric-binding-mechanism
domain: spatial-computing
description: Physical hardware device that captures and verifies biometric traits (fingerprints, iris patterns, facial geometry) to bind digital identities to authenticated users.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-governance-and-safety
hasPart:
  - urn:ngm:class:facial-recognition
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:fingerprint-scanner
  - urn:ngm:class:iris-recognition-camera
  - urn:ngm:class:facial-recognition
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:template-matching-processor
requires:
  - urn:ngm:class:encrypted-storage
  - urn:ngm:class:infrared-illuminator
  - urn:ngm:class:optical-sensor-array
  - urn:ngm:class:power-supply
  - urn:ngm:class:anti-spoofing-module
enables:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-verification
  - urn:ngm:class:non-repudiation
dependsOn:
  - urn:ngm:class:biometric-template-database
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:authentication-server
partOf:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:identity-management-system
  - urn:ngm:class:zero-trust-architecture
---

# Biometric Binding Mechanism

Physical hardware device that captures and verifies biometric traits (fingerprints, iris patterns, facial geometry) to bind digital identities to authenticated users.
