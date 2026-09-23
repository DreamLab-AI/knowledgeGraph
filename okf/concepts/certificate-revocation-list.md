---
okf_version: "0.2"
type: Class
title: Certificate Revocation List
resource: urn:ngm:class:certificate-revocation-list
domain: security
description: A Certificate Revocation List (CRL) is a digitally signed, periodically published list of digital certificates that a certificate authority has revoked before their scheduled expiry. Each entry records the serial number of a revoked certificate, the revocation date, and an optional reason code, allowing relying parties to reject certificates that are no longer trustworthy. CRLs are a core revocati
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:revocation-registry
hasPart:
  - urn:ngm:class:digital-signature
requires:
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:digital-certificate
dependsOn:
  - urn:ngm:class:certificate-authority
implements:
  - urn:ngm:class:rfc-5280
contrastsWith:
  - urn:ngm:class:ocsp
uses:
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:trust-anchor
standardizedBy:
  - urn:ngm:class:ietf
partOf:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:cryptographic-infrastructure
relatedTo:
  - urn:ngm:class:certificate-transparency
  - urn:ngm:class:certificate-authority
---

# Certificate Revocation List

A Certificate Revocation List (CRL) is a digitally signed, periodically published list of digital certificates that a certificate authority has revoked before their scheduled expiry. Each entry records the serial number of a revoked certificate, the revocation date, and an optional reason code, allowing relying parties to reject certificates that are no longer trustworthy. CRLs are a core revocation mechanism of X.509 public key infrastructure, complemented or replaced in many deployments by the Online Certificate Status Protocol.
