Cryptographic identity is an identity model in which an actor is represented and authenticated through possession of a private key rather than through a centrally issued credential. Control of the corresponding public key — or an identifier derived from it — proves the actor's identity by producing verifiable digital signatures. This model underpins blockchain accounts, decentralized identifiers and self-sovereign identity, removing the need for a trusted registry to vouch for who someone is.

### Overview

- Cryptographic identity inverts the conventional trust relationship: instead of a directory asserting an identity, the holder demonstrates control of a secret. A challenge-response over a digital signature proves key possession without revealing the key, and an address derived from the public key by hashing serves as a stable, pseudonymous handle. The model gives individuals direct custody of their identity but shifts the burden of security to key management — loss or compromise of the private key is equivalent to loss or theft of the identity itself.

### Mechanisms

- Key-pair binding where the private key is the secret and the public key (or its hash) is the public identifier.
- Signature-based proof of possession that authenticates without disclosing the key.
- Address derivation through hashing to produce compact, pseudonymous identifiers.
- Self-custody, placing responsibility for backup and recovery on the holder.
- Composability with decentralized identifiers and verifiable credentials for richer claims.

### Applications

- Blockchain account ownership and transaction authorisation.
- Decentralized identity and self-sovereign identity wallets.
- Passwordless authentication using key-pair challenge-response.
- Pseudonymous reputation and signing in peer-to-peer networks.

### Provenance

