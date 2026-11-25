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
  - urn:ngm:class:public-key-infrastructure
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
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:certificate-authority
implements:
  - urn:ngm:class:certificate-revocation
contrastsWith:
  - urn:ngm:class:trust-anchor
uses:
  - urn:ngm:class:transport-layer-security
supports:
  - urn:ngm:class:tls-handshake
relatedTo:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:certificate-revocation
  - urn:ngm:class:ocsp
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Online Certificate Status Protocol

The Online Certificate Status Protocol (OCSP) is an internet protocol for obtaining the real-time revocation status of an X.509 digital certificate. A client queries an OCSP responder, which returns a signed good, revoked or unknown status, avoiding the need to download large certificate revocation lists. OCSP stapling allows a server to present a recent signed status during the TLS handshake to improve privacy and performance.
