---
okf_version: "0.2"
type: Class
title: Online Certificate Status Protocol
resource: urn:ngm:class:online-certificate-status-protocol
domain: security
description: The Online Certificate Status Protocol (OCSP) is an internet protocol for obtaining the real-time revocation status of an X.509 digital certificate. A client queries an OCSP responder, which returns a signed good, revoked or unknown status, avoiding the need to download large certificate revocation lists. OCSP stapling allows a server to present a recent signed status during the TLS handshake to i
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-infrastructure
hasPart:
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:tls-handshake
requires:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:certificate-revocation
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:certificate-authority
implements:
  - urn:ngm:class:certificate-revocation
contrastsWith:
  - urn:ngm:class:trust-anchor
uses:
  - urn:ngm:class:tls
supports:
  - urn:ngm:class:tls-handshake
relatedTo:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:certificate-revocation
  - urn:ngm:class:ocsp
---

# Online Certificate Status Protocol

The Online Certificate Status Protocol (OCSP) is an internet protocol for obtaining the real-time revocation status of an X.509 digital certificate. A client queries an OCSP responder, which returns a signed good, revoked or unknown status, avoiding the need to download large certificate revocation lists. OCSP stapling allows a server to present a recent signed status during the TLS handshake to improve privacy and performance.
