The TLS handshake is the negotiation phase of the Transport Layer Security protocol in which a client and server agree on protocol version and cipher suite, authenticate via certificates, and establish shared session keys. It combines public-key cryptography for authentication and key agreement with symmetric cryptography for the subsequent record protocol. Modern versions complete in fewer round trips and provide forward secrecy through ephemeral key exchange.

### Overview

- During the handshake the peers exchange supported versions and cipher suites, present certificates and run an authenticated key exchange.
- The result is a shared symmetric key that protects all subsequent application data via the record protocol.
- TLS 1.3 streamlines the handshake to one round trip and removes legacy, non-forward-secret key exchanges.

### Mechanisms

- Version and cipher-suite negotiation between client and server.
- Certificate-based authentication using public-key cryptography.
- Ephemeral Diffie-Hellman key agreement for forward secrecy.
- Nonce and transcript hashing to bind the session and prevent replay.

### Applications

- Securing HTTPS web traffic and APIs.
- Mutual-TLS authentication between microservices.
- Protecting messaging, email transport and VPN channels.

### Security notes

- Ephemeral key exchange provides forward secrecy.
- Downgrade protection prevents version rollback attacks.
- Certificate validation is critical to thwart impersonation.

### Provenance

