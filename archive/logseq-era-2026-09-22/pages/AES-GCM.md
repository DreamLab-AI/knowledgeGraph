public:: true

# AES-GCM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aes-gcm",
  "@type": "Page",
  "vc:slug": "aes-gcm",
  "title": "AES-GCM",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:aes-gcm",
  "@type": "Class",
  "label": "AES-GCM",
  "definition": "AES-GCM (Advanced Encryption Standard – Galois/Counter Mode) is an authenticated encryption with associated data (AEAD) cipher mode that combines the AES block cipher operating in Counter Mode with the Galois Message Authentication Code. It provides both confidentiality and data integrity in a single pass, making it the dominant symmetric encryption scheme in modern secure communications.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:symmetric-encryption", "label": "Symmetric Encryption"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:nonce", "label": "Nonce"},
      {"@id": "urn:ngm:class:message-authentication-code", "label": "Message Authentication Code"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:end-to-end-encryption", "label": "End-to-End Encryption"},
      {"@id": "urn:ngm:class:network-security", "label": "Network Security"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"},
      {"@id": "urn:ngm:class:cryptographic-key-management", "label": "Cryptographic Key Management"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[AES-GCM]] is an authenticated encryption scheme built on the [[Symmetric Encryption]] foundation, combining Counter Mode (CTR) operation of the [[Cryptography]] block cipher AES with a Galois field-based [[Message Authentication Code]]. It produces a ciphertext alongside a 128-bit authentication tag, enabling recipients to simultaneously decrypt and verify the integrity of received data. The use of a unique [[Nonce]] (number used once) per encryption operation is critical to security; nonce reuse is a catastrophic vulnerability that can expose the plaintext and authentication key.

- ### Relationships
  - [[AES-GCM]] is a subclass of [[Symmetric Encryption]] and underpins [[End-to-End Encryption]] across TLS 1.3, QUIC, SSH, and numerous application-layer protocols. Its efficient parallelisable design makes it a core enabler of [[Network Security]] at scale. Correct deployment depends on rigorous [[Cryptographic Key Management]] to prevent key and nonce exhaustion. It contrasts with unauthenticated modes such as AES-CBC, which require separate MAC constructions.

- ### Content
  - AES-GCM was standardised by NIST in Special Publication 800-38D (2007), drawing on Galois/Counter Mode work by McGrew and Viega. It emerged as a response to the operational complexity of combining separate encryption and authentication algorithms, unifying both functions with a provably secure construction under chosen-ciphertext attack models. Its incorporation into TLS 1.2 cipher suites drove rapid adoption across the internet infrastructure.

  - Technically, AES-GCM operates by encrypting a counter block with AES for each 128-bit plaintext block (CTR mode), XORing the result with plaintext to produce ciphertext. The authentication tag is computed over associated data and ciphertext using multiplication in GF(2¹²⁸), keyed by a block derived from AES applied to a zero counter. Hardware acceleration via Intel AES-NI and ARM Crypto Extensions allows encryption speeds exceeding 10 Gbit/s on modern processors, making it practical for high-throughput applications.

  - AES-GCM is the mandated cipher suite in TLS 1.3, DTLS, IPsec, and SSH, and is specified in numerous IETF RFCs. Cloud storage providers, VPN gateways, and messaging platforms rely on it for bulk data encryption. The 96-bit nonce is typically constructed as a combination of a fixed sender identifier and a monotonically increasing counter, managed through disciplined [[Cryptographic Key Management]] pipelines. Libraries including OpenSSL, BoringSSL, and libsodium expose stable APIs for safe use.

  - As of 2024–2025, AES-GCM remains the gold standard for symmetric authenticated encryption in classical computing environments. Research into [[Post-Quantum Cryptography]] does not displace AES-GCM directly, as AES-256-GCM is considered quantum-resistant under Grover's algorithm with its effective 128-bit quantum security. Efforts focus on pairing post-quantum key encapsulation mechanisms (KEMs) with AES-GCM for hybrid schemes. Nonce-misuse-resistant alternatives such as AES-GCM-SIV are gaining traction in contexts where nonce uniqueness is difficult to guarantee.