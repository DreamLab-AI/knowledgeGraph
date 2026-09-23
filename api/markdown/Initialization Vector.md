
An initialization vector (IV) is a fixed-size input to a symmetric encryption mode of operation that randomises the encryption process so that identical plaintexts produce different ciphertexts under the same key. By introducing fresh, unpredictable variation for each message, it prevents an attacker from detecting repetition and defeats certain chosen-plaintext attacks. Depending on the mode, an IV must be unpredictable, unique, or both, and is typically transmitted in the clear alongside the ciphertext because its secrecy is not required, only its non-repetition. Misusing an IV, such as reusing it, can catastrophically undermine the security of an otherwise sound cipher.

- An initialization vector is a per-message input that randomises [[Symmetric Encryption]] so identical plaintexts encrypt to different ciphertexts under one key. It is a building block of secure [[Encryption]] modes within [[Cryptography]].
- It is closely related to the [[Nonce]] and contrasted with the [[Salt]] used in password hashing.
- ### Overview
- Without per-message variation, deterministic encryption leaks information: equal plaintext blocks yield equal ciphertext blocks, revealing structure. An IV breaks this by injecting fresh state at the start of each encryption.
- The required property depends on the mode: some demand an unpredictable IV drawn from a strong source of [[Entropy]], others only a unique, never-repeated value.
- An IV is not secret and is usually sent alongside the ciphertext; what matters is that it is never reused with the same key, since reuse can expose plaintext or keystream.
- ### Mechanisms
- Randomised generation from a cryptographically secure source.
- Counter-derived IVs guaranteeing uniqueness in counter and GCM modes.
- Transmission in the clear prepended to the ciphertext.
- Mode-specific requirements: unpredictability for CBC, uniqueness for CTR.
- ### Applications
- Block-cipher modes of operation such as CBC, CTR, and GCM.
- Disk and file encryption with per-sector or per-block IVs.
- Secure transport protocols protecting record streams.
- Authenticated encryption schemes that combine confidentiality and [[Data Integrity]].
- ### Provenance

