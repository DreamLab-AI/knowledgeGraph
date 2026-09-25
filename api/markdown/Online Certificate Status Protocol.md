The Online Certificate Status Protocol (OCSP) is an internet protocol for obtaining the real-time revocation status of an X.509 digital certificate. A client queries an OCSP responder, which returns a signed good, revoked or unknown status, avoiding the need to download large certificate revocation lists. OCSP stapling allows a server to present a recent signed status during the TLS handshake to improve privacy and performance.

### Overview

- OCSP answers "is this certificate still valid?" by querying a responder rather than downloading a full certificate revocation list, lowering latency and bandwidth.
- It is integral to the TLS trust model: browsers and clients consult OCSP (or stapled responses) before trusting a server certificate.

### Mechanisms

- Request/response: client sends a certificate identifier; responder returns a CA-signed good, revoked or unknown status.
- OCSP stapling: the server caches and presents a fresh signed status during the TLS handshake, improving privacy.
- Nonce and validity windows guard against replay of stale responses.

### Applications

- TLS server and client certificate validation in web and API security.
- Code-signing and document-signing revocation checks.
- Enterprise PKI and device-identity certificate lifecycles.

### Provenance

