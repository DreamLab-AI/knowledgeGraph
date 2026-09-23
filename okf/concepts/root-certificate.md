---
okf_version: "0.2"
type: Class
title: Root Certificate
resource: urn:ngm:class:root-certificate
domain: security
description: A root certificate is a self-signed X.509 certificate that identifies a root certificate authority and serves as the trust anchor at the top of a certificate chain. Relying parties pre-install trusted root certificates in trust stores, and any certificate that chains back to a trusted root is accepted as authentic. Because a compromised root undermines all certificates beneath it, root keys are pr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:digital-certificate
hasPart:
  - urn:ngm:class:digital-certificate
requires:
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:tls
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
implements:
  - urn:ngm:class:trust-anchor
uses:
  - urn:ngm:class:digital-certificate
supports:
  - urn:ngm:class:ocsp
  - urn:ngm:class:certificate-revocation
partOf:
  - urn:ngm:class:cryptographic-infrastructure
relatedTo:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:trust-anchor
  - urn:ngm:class:x-509-certificate
---

# Root Certificate

A root certificate is a self-signed X.509 certificate that identifies a root certificate authority and serves as the trust anchor at the top of a certificate chain. Relying parties pre-install trusted root certificates in trust stores, and any certificate that chains back to a trusted root is accepted as authentic. Because a compromised root undermines all certificates beneath it, root keys are protected with the highest assurance and kept offline.
