---
okf_version: "0.2"
type: Class
title: Code Signing
resource: urn:ngm:class:code-signing
domain: security
description: Code Signing is a cryptographic practice in which software publishers digitally sign executables, scripts, container images, and other software artefacts using a private key, enabling recipients to verify the artefact's authenticity and integrity through the corresponding public key certificate. Implemented via asymmetric cryptography and X.509 certificate chains anchored to trusted Certificate Au
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-signing
requires:
  - urn:ngm:class:key-management
  - urn:ngm:class:certificate-revocation
enables:
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:tee
  - urn:ngm:class:secure-boot
implements:
  - urn:ngm:class:supply-chain-security
  - urn:ngm:class:non-repudiation
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:supply-chain
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:cryptographic-hash-function
supports:
  - urn:ngm:class:software-bill-of-materials
  - urn:ngm:class:slsa-framework
relatedTo:
  - urn:ngm:class:notary-service
  - urn:ngm:class:supply-chain
  - urn:ngm:class:sigstore
---

# Code Signing

Code Signing is a cryptographic practice in which software publishers digitally sign executables, scripts, container images, and other software artefacts using a private key, enabling recipients to verify the artefact's authenticity and integrity through the corresponding public key certificate. Implemented via asymmetric cryptography and X.509 certificate chains anchored to trusted Certificate Authorities or transparency logs, code signing is a fundamental control in software supply chain security, preventing the distribution of tampered or malicious software. Modern approaches include keyless signing via short-lived certificates and cryptographic transparency logs.
