The X.509 standard defines the format of public-key certificates that bind a public key to an identity, together with the structures for certificate paths and revocation lists used in public-key infrastructure. An X.509 certificate carries fields such as subject, issuer, validity period, public key and extensions, and is signed by a certificate authority so that relying parties can verify it by tracing a chain to a trusted root. It is the foundational certificate format underlying TLS, secure email and many authentication systems.

### Overview

- X.509 specifies a structured certificate carrying the subject and issuer identities, validity dates, the subject's public key, and extensions that constrain how the certificate may be used.
- A relying party trusts a certificate by verifying the issuer's signature and following the certification path up to a root it already trusts, while consulting revocation information.
- The format is the backbone of internet trust: it secures web connections, signs code and email, and authenticates devices and people.

### Key aspects

- Certificate fields: subject, issuer, serial number, validity period and subject public key.
- Extensions: key usage, basic constraints, subject alternative names and policy identifiers.
- Certification path: the chain from an end-entity certificate to a trusted root.
- Revocation: certificate revocation lists and online status checking to invalidate compromised certificates.
- Hierarchical trust: root and intermediate certificate authorities issuing along a chain.

### Mechanisms

- A [[Certificate Authority]] signs the certificate so its authenticity can be cryptographically verified.
- Verification recomputes and checks signatures along the path to a trusted anchor.
- [[Cryptography]] provides the digital signatures and key material that bind identity to key.
- During a [[TLS]] handshake the server presents its X.509 chain for the client to validate.

### Applications

- Server and client authentication in [[TLS]]-secured web and API traffic.
- Digitally signed and encrypted email and document signing.
- Device and machine identity in enterprise and IoT deployments.
- Identity material in permissioned blockchains and federated [[Trust Infrastructure]].

### Provenance

