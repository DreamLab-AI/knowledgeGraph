---
okf_version: "0.2"
type: Class
title: secp256k1 Elliptic Curve
resource: urn:ngm:class:secp256k1-elliptic-curve
domain: blockchain
description: secp256k1 is a specific elliptic curve defined over a 256-bit prime field, standardised by the SEC and chosen for its efficient, verifiable parameters. It underpins ECDSA and Schnorr signatures used by Bitcoin, Nostr, and many other systems for key generation and digital signing. Its near-rigid, low-entropy parameters reduce concern about hidden weaknesses.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
relatedTo:
  - urn:ngm:class:sovereign-keyset
  - urn:ngm:class:nostr-protocol
---

# secp256k1 Elliptic Curve

secp256k1 is a specific elliptic curve defined over a 256-bit prime field, standardised by the SEC and chosen for its efficient, verifiable parameters. It underpins ECDSA and Schnorr signatures used by Bitcoin, Nostr, and many other systems for key generation and digital signing. Its near-rigid, low-entropy parameters reduce concern about hidden weaknesses.
