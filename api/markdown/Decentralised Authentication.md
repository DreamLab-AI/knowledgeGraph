Decentralised authentication verifies the identity of a party without relying on a single central identity provider, instead using cryptographic keys, decentralised identifiers and verifiable credentials controlled by the user. The holder proves control of an identifier and presents credentials that a verifier checks against a distributed trust registry rather than a federated login service. This shifts control of identity from platforms to individuals while preserving cryptographic assurance.

### Overview

- In decentralised authentication a user holds a decentralised identifier whose corresponding public key is published in a verifiable, often distributed, registry. To authenticate, the user signs a challenge or presents a verifiable credential; the verifier resolves the identifier's document, checks the signature and validates the credential's issuer against trusted anchors. No password is shared with the relying party and no central provider mediates the session, reducing phishing and single-point-of-failure risk.

### Mechanisms

- Holder control of identifiers and signing keys
- Decentralised identifier resolution to a DID document
- Verifiable-credential issuance and presentation
- Challenge-response proof of key control
- Trust registries and anchors in place of federated providers

### Applications

- Passwordless, phishing-resistant login
- Cross-platform portable digital identity
- Selective-disclosure credential presentation
- Self-sovereign identity wallets and access control

### Provenance

