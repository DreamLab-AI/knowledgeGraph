- ### Definition
  A Nonce (Number used ONCE) is an arbitrary value included in a cryptographic computation to prevent replay attacks or to satisfy a target condition. In proof-of-work blockchains, miners iterate the nonce in the block header until the resulting hash falls below the difficulty target. In communications protocols, nonces prevent ciphertext replay.

- ### Relationships
  The Nonce is the variable field that miners iterate in Proof Of Work, so it requires both Proof Of Work as its operational context and a Cryptographic Hash Function to evaluate each candidate. It is closely related to the Salt, which serves an analogous uniqueness function in password hashing but with a random rather than sequential generation strategy. The Nonce is embedded in the Block Header and is integral to the Mining process; monitoring the nonce space exhaustion is part of Bitcoin Mining difficulty adjustment. It enables Cryptographic Verification of block validity and is part of the Cryptography domain.

- ### Content

  In Bitcoin's block header, the nonce occupies a 32-bit field that miners increment from 0 to 2^32−1 searching for a header hash (double SHA-256) that starts with a sufficient number of leading zero bits as determined by the current difficulty target. A Bitcoin block header is only 80 bytes and is hashed approximately 10^18 times per second by the combined mining network, exhausting the 32-bit nonce space in microseconds. When nonce space is exhausted, miners modify the extraNonce field in the coinbase transaction—which changes the Merkle root in the header—effectively extending the search space beyond 32 bits.

  In symmetric encryption and authenticated encryption schemes (AES-GCM, ChaCha20-Poly1305), a nonce is a unique value—typically 96 or 128 bits—that must never be reused with the same key. Nonce reuse in GCM is catastrophic: an attacker who observes two ciphertexts encrypted under the same key-nonce pair can recover the authentication key and forge arbitrary messages. Protocols that risk nonce collision under random generation use deterministic nonce generation (e.g. counter-based) or nonce misuse-resistant modes such as AES-GCM-SIV.

  In challenge-response authentication, a verifier issues a fresh random nonce to a claimant, who must sign or hash it to prove possession of a private credential. The nonce's freshness prevents an adversary from replaying a previously recorded valid response to a different challenge session.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z