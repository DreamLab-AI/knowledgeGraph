---
okf_version: "0.2"
type: Class
title: Certificate Revocation
resource: urn:ngm:class:certificate-revocation
domain: security
description: Certificate Revocation is the process by which a Certificate Authority (CA) invalidates a previously issued digital certificate before its natural expiry, typically due to key compromise, CA compromise, or change in the certificate holder's status. Revocation information is distributed via Certificate Revocation Lists (CRLs) or the Online Certificate Status Protocol (OCSP). It is a critical compon
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:certificate-revocation-list
  - urn:ngm:class:ocsp
requires:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:identity-management
  - urn:ngm:class:zero-trust-architecture
implements:
  - urn:ngm:class:pki
  - urn:ngm:class:trust-management
contrastsWith:
  - urn:ngm:class:certificate-transparency
  - urn:ngm:class:short-lived-certificate
supports:
  - urn:ngm:class:tls
  - urn:ngm:class:http
standardizedBy:
  - urn:ngm:class:x509
  - urn:ngm:class:rfc-5280
  - urn:ngm:class:x-509-certificate
relatedTo:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:key-management
  - urn:ngm:class:incident-response
---

# Certificate Revocation

Certificate Revocation is the process by which a Certificate Authority (CA) invalidates a previously issued digital certificate before its natural expiry, typically due to key compromise, CA compromise, or change in the certificate holder's status. Revocation information is distributed via Certificate Revocation Lists (CRLs) or the Online Certificate Status Protocol (OCSP). It is a critical component of public key infrastructure (PKI) lifecycle management.
