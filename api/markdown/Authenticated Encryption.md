Authenticated encryption is a class of symmetric cryptographic schemes that simultaneously provide confidentiality, integrity and authenticity of a message in a single operation. Authenticated encryption with associated data (AEAD) additionally binds unencrypted header data to the ciphertext, so any tampering with the message or its context is detected on decryption. Modern AEAD constructions such as AES-GCM and ChaCha20-Poly1305 are the recommended default for secure communication because they avoid the pitfalls of composing encryption and authentication separately.

### Overview

- Naively composing encryption and a MAC is error-prone; authenticated encryption packages the correct construction.
- AEAD modes take a key, a unique [[Nonce]], plaintext and optional associated data, and return ciphertext plus an authentication tag.
- Decryption verifies the tag before releasing plaintext, so forged or modified messages are rejected.
- It is the default in protocols such as [[TLS 1.3]], SSH and disk and message encryption systems.

### Mechanisms

- Encrypt-then-MAC and dedicated AEAD constructions guarantee that authentication covers the ciphertext.
- Nonce uniqueness per key is mandatory; reuse can catastrophically break confidentiality and integrity.
- Galois/Counter Mode pairs counter-mode encryption with a polynomial authenticator for high throughput.
- Poly1305-based modes provide a fast, side-channel-resistant alternative on platforms without AES acceleration.

### Applications

- Transport security in [[TLS 1.3]] cipher suites and QUIC packet protection.
- At-rest encryption of files, databases and backups with integrity guarantees.
- Secure messaging and VPN tunnels that must detect any in-transit modification.
- Token and session protection where forgery resistance is as important as secrecy.

### Provenance

