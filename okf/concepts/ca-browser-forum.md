---
okf_version: "0.2"
type: Class
title: Ca Browser Forum
resource: urn:ngm:class:ca-browser-forum
domain: security
description: The CA/Browser Forum (CA/B Forum) is a voluntary industry consortium of Certification Authorities (CAs), web browser vendors, and other relying parties that collaboratively develops and enforces minimum standards for the issuance and management of X.509 digital certificates used in TLS/HTTPS, code signing, and S/MIME email. Its Baseline Requirements documents define mandatory technical and procedu
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security
requires:
  - urn:ngm:class:audit-compliance
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:web-security
  - urn:ngm:class:http
  - urn:ngm:class:code-signing
contrastsWith:
  - urn:ngm:class:ietf
  - urn:ngm:class:w3-c
uses:
  - urn:ngm:class:cryptographic-infrastructure
supports:
  - urn:ngm:class:internet-security
  - urn:ngm:class:digital-identity
standardizedBy:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:root-store
  - urn:ngm:class:x509
  - urn:ngm:class:certificate-transparency
  - urn:ngm:class:extended-validation
  - urn:ngm:class:x-509-certificate
---

# Ca Browser Forum

The CA/Browser Forum (CA/B Forum) is a voluntary industry consortium of Certification Authorities (CAs), web browser vendors, and other relying parties that collaboratively develops and enforces minimum standards for the issuance and management of X.509 digital certificates used in TLS/HTTPS, code signing, and S/MIME email. Its Baseline Requirements documents define mandatory technical and procedural controls that CAs must meet to remain trusted by member browsers such as Chrome, Firefox, Safari, and Edge. Compliance is a prerequisite for inclusion in browser root stores, giving the Forum significant de facto regulatory power over internet PKI.
