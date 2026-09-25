A symmetric key is a single shared secret used by both the sender and receiver to encrypt and decrypt data in symmetric-key cryptography. Because the same key performs both operations, it must be kept secret and distributed securely between the communicating parties. Symmetric-key algorithms such as AES are fast and efficient for bulk data encryption, which makes them the workhorse of confidentiality in practice, often combined with asymmetric techniques that solve the problem of securely exchanging the shared key.

- A symmetric key is the single shared secret that both encrypts and decrypts data in [[Symmetric Encryption]]. As a kind of [[Cryptographic Key]] it powers fast bulk [[Encryption]] using algorithms like [[AES]], and it contrasts sharply with the [[Public Key]] approach where two different keys are used.

### Overview

- Symmetric cryptography is efficient because the same operation, run in reverse with the same key, recovers the plaintext. The cost is the key-distribution problem: the secret must reach both parties without interception, which is why symmetric keys are commonly established through [[Key Exchange]] protocols or wrapped by [[Asymmetric Encryption]].
- In real systems such as [[TLS]], asymmetric techniques negotiate a fresh symmetric session key, and that key then protects the bulk of the traffic, combining the security of public-key exchange with the speed of symmetric ciphers.

### Key aspects

- A shared secret of fixed length, e.g. 128 or 256 bits for [[AES]].
- Realisation through a [[Block Cipher]] or [[Stream Cipher]] mode of operation.
- Strong dependence on secure [[Key Management]] and rotation.
- The key-distribution problem resolved via [[Key Exchange]].
- Speed advantage over public-key operations for large payloads.

### Applications

- Bulk confidentiality of data in transit within [[TLS]] sessions.
- Encryption of data at rest on disks and databases.
- Session protection after a [[Key Exchange]] handshake.
- Authenticated encryption when combined with a [[Hash Function]].

### Provenance

