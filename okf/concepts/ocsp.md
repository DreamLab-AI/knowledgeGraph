---
okf_version: "0.2"
type: Class
title: Ocsp
resource: urn:ngm:class:ocsp
domain: security
description: The Online Certificate Status Protocol (OCSP) is an internet protocol for obtaining the real-time revocation status of a digital certificate from a responder operated by or on behalf of the issuing certificate authority. A client queries the responder for a specific certificate and receives a signed reply stating whether it is good, revoked, or unknown. OCSP offers a more immediate and bandwidth-e
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:certificate-revocation
requires:
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:mutual-tls
implements:
  - urn:ngm:class:certificate-revocation
contrastsWith:
  - urn:ngm:class:certificate-revocation-list
uses:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:public-key-cryptography
supports:
  - urn:ngm:class:tls
  - urn:ngm:class:trust-model
  - urn:ngm:class:tls
relatedTo:
  - urn:ngm:class:online-certificate-status-protocol
  - urn:ngm:class:security
  - urn:ngm:class:privacy
---

# Ocsp

The Online Certificate Status Protocol (OCSP) is an internet protocol for obtaining the real-time revocation status of a digital certificate from a responder operated by or on behalf of the issuing certificate authority. A client queries the responder for a specific certificate and receives a signed reply stating whether it is good, revoked, or unknown. OCSP offers a more immediate and bandwidth-efficient alternative to downloading full certificate revocation lists, and OCSP stapling lets servers present a recent status to avoid client-side lookups.
