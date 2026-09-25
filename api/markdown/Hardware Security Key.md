A hardware security key is a dedicated physical authenticator — typically a USB, NFC, or Bluetooth device — that stores cryptographic keys and performs origin-bound public-key challenge responses to prove possession of a second factor. By keeping private keys in tamper-resistant hardware and signing only challenges scoped to the legitimate web origin, it provides strong resistance to phishing, credential replay, and man-in-the-middle attacks that defeat one-time-password methods. Hardware keys implement open standards such as FIDO2 and U2F and are a core enabler of passwordless and passkey-based authentication.

### Overview

- Hardware Security Key sits within the broader category of [[Multi-Factor Authentication]], which it specialises.
- It connects to a network of 12 related classes across the knowledge graph, anchoring edges that previously pointed to an undefined node.

### Key aspects

- hasPart: [[YubiKey]]
- uses: [[Public Key Cryptography]]
- uses: [[Security Token]]
- requires: [[Authentication]]
- implements: [[FIDO2]]
- implements: [[WebAuthn]]
- implements: [[U2F]]

### Mechanisms

- Hardware Security Key operates through its constituent parts and dependencies, integrating with adjacent systems to deliver its function within security.

### Applications

- Applied to advance [[Passkey]].
- Applied to advance [[Phishing Resistance]].

### Provenance

