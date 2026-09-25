A root certificate is a self-signed X.509 certificate that identifies a root certificate authority and serves as the trust anchor at the top of a certificate chain. Relying parties pre-install trusted root certificates in trust stores, and any certificate that chains back to a trusted root is accepted as authentic. Because a compromised root undermines all certificates beneath it, root keys are protected with the highest assurance and kept offline.

### Overview

- Root certificates sit at the apex of the chain of trust. They are not signed by any higher authority but are instead distributed and pre-trusted by operating systems and browsers.
- Validation succeeds when a leaf certificate chains, through any intermediate certificates, up to a root present in the relying party's trust store.

### Key aspects

- Self-signed: the issuer and subject are identical, with the root's own key.
- Trust store distribution: roots are bundled into platforms and curated by root programmes.
- Offline key protection: root private keys are stored in HSMs and used sparingly to sign intermediates.

### Applications

- TLS server authentication and the public web PKI.
- Enterprise and government PKI hierarchies for device and user identity.
- Code-signing and document trust ecosystems.

### Provenance

