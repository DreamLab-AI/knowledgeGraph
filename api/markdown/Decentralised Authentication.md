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

## Merged from Decentralized Authentication (needs reconciliation)
Decentralised Authentication is an approach to verifying identity claims without relying on a single central authority or identity provider. It uses cryptographic credentials, decentralised identifiers and distributed trust mechanisms so that users control their own authentication material and prove claims directly to relying parties. The model reduces single points of failure, limits data centralisation and aligns with self-sovereign identity principles.

### Overview

- Decentralised authentication verifies identity claims without a central identity provider acting as gatekeeper.
- Users hold cryptographic keys and credentials and present proofs directly to relying parties.
- Decentralised identifiers (DIDs) and verifiable credentials provide portable, provider-independent identity.
- The design removes honeypot credential stores and single points of compromise.

### Mechanisms

- Key-pair ownership where the user's private key proves control of an identifier.
- Verifiable credentials issued and verified through cryptographic signatures.
- Decentralised identifier resolution via ledgers, peer protocols or registries.
- Selective disclosure and zero-knowledge proofs that minimise data exposure.
- Challenge-response flows that authenticate without transmitting shared secrets.

### Applications

- Passwordless login backed by user-held cryptographic keys.
- Cross-platform identity portable between services without a federated hub.
- Privacy-preserving age or attribute verification using selective disclosure.
- Wallet-based authentication for Web3 applications and decentralised services.

### Provenance

