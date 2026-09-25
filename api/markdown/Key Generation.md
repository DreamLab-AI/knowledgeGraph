Key generation is the cryptographic process of creating the keys used by symmetric and asymmetric algorithms, deriving them from high-quality randomness so that they are unpredictable to an adversary. For symmetric schemes it produces a single secret value, while for public-key schemes it produces a mathematically linked private and public key pair. The security of every downstream cryptographic operation rests on the entropy and correctness of this step.

### Overview

- The process draws on a source of entropy, expands or conditions it, and maps it to a key of the required length and structure for the chosen algorithm.
- Asymmetric generation runs a mathematical procedure, such as elliptic-curve point selection or prime generation, to derive a linked key pair.
- Weak randomness is the classic failure mode, allowing attackers to reconstruct keys regardless of algorithm strength.

### Mechanisms

- Collection of entropy from hardware and operating-system sources.
- Cryptographically secure random number generation seeded from that entropy.
- Key derivation functions that stretch passwords or seeds into keys.
- Algorithm-specific parameter selection for symmetric and asymmetric keys.

### Applications

- Provisioning keys inside a [[Hardware Security Module]] for tamper resistance.
- Issuing certificates within a [[Public Key Infrastructure]].
- Establishing session secrets ahead of [[Key Exchange]].
- Producing signing keys for [[Digital Signature]] and wallets.

### Provenance

