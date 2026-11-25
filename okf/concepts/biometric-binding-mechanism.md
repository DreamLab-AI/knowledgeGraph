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
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:authentication-server
partOf:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:identity-management-system
  - urn:ngm:class:zero-trust-architecture
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Biometric Binding Mechanism

Physical hardware device that captures and verifies biometric traits (fingerprints, iris patterns, facial geometry) to bind digital identities to authenticated users.
