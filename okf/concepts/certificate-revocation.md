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
  - urn:ngm:class:transport-layer-security
  - urn:ngm:class:http
standardizedBy:
  - urn:ngm:class:x509
  - urn:ngm:class:rfc-5280
  - urn:ngm:class:x-509-certificate
relatedTo:
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:key-management
  - urn:ngm:class:incident-response
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Certificate Revocation

Certificate Revocation is the process by which a Certificate Authority (CA) invalidates a previously issued digital certificate before its natural expiry, typically due to key compromise, CA compromise, or change in the certificate holder's status. Revocation information is distributed via Certificate Revocation Lists (CRLs) or the Online Certificate Status Protocol (OCSP). It is a critical component of public key infrastructure (PKI) lifecycle management.
