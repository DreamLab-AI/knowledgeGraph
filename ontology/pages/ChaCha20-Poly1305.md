public:: true

# ChaCha20-Poly1305
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cha-cha20-poly1305",
  "@type": "Page",
  "vc:slug": "cha-cha20-poly1305",
  "title": "ChaCha20-Poly1305",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cha-cha20-poly1305",
  "@type": "Class",
  "label": "ChaCha20-Poly1305",
  "definition": "ChaCha20-Poly1305 is an authenticated encryption with associated data (AEAD) cipher suite combining the ChaCha20 stream cipher for encryption with the Poly1305 message authentication code, providing both confidentiality and integrity in a single construction. Designed by Daniel J. Bernstein, it offers performance advantages over AES-GCM on systems lacking hardware AES acceleration (particularly mobile and embedded devices) whilst providing equivalent or superior security margins. It is standardised in RFC 7539 (IETF) and RFC 8439, and is widely deployed in TLS 1.3, QUIC, WireGuard, SSH, and numerous cryptographic libraries as an alternative to AES-based suites.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-algorithm", "label": "Cryptographic Algorithm"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:symmetric-encryption", "label": "Symmetric Encryption"},
      {"@id": "urn:ngm:class:nonce", "label": "Nonce"},
      {"@id": "urn:ngm:class:cryptographic-keys", "label": "Cryptographic Keys"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:tls-1-3", "label": "TLS 1.3"},
      {"@id": "urn:ngm:class:tls-encryption", "label": "TLS Encryption"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:aes-gcm", "label": "AES-GCM"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptographic-library", "label": "Cryptographic Library"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - ChaCha20-Poly1305 is an authenticated encryption with associated data (AEAD) construction that combines ChaCha20 (a stream cipher) with Poly1305 (a one-time message authentication code). The ChaCha20 stream cipher generates a pseudorandom keystream from a 256-bit key and a 96-bit [[Nonce]], which is XORed with the plaintext to produce ciphertext. Poly1305 then computes a 128-bit authentication tag over the ciphertext and any associated data using a one-time key derived from the same [[Cryptographic Keys]] and nonce. The combined construction provides [[Symmetric Encryption]] with both confidentiality and integrity guarantees, resisting both passive eavesdropping and active tampering.

- ### Relationships
  - ChaCha20-Poly1305 is a [[Cryptographic Algorithm]] that performs [[Symmetric Encryption]] and message authentication. It uses a [[Nonce]] and [[Cryptographic Keys]] for its operation and contrasts with [[AES-GCM]], which requires hardware AES acceleration for efficient performance. It is the preferred AEAD cipher in [[TLS 1.3]] and [[TLS Encryption]] implementations on devices lacking AES-NI instructions. Reference implementations appear across [[Cryptographic Library]] ecosystems including OpenSSL, BoringSSL, libsodium, and the Rust RustCrypto libraries.

- ### Content
  - Daniel J. Bernstein introduced ChaCha as a variant of his earlier Salsa20 stream cipher in 2008, with modifications to improve diffusion and resistance to certain cryptanalytic techniques. ChaCha20 (the 20-round variant) and the Poly1305 MAC (introduced in 2005) were combined by Bernstein and Tanja Lange into ChaCha20-Poly1305. The construction gained widespread recognition when Google adopted it for TLS connections to Android devices in 2014, motivated by the observation that AES-GCM was significantly slower than ChaCha20-Poly1305 on ARM processors lacking AES hardware extensions — then present in the majority of Android handsets. The IETF standardised the construction in RFC 7539 (2015) and its successor RFC 8439 (2018).

  - The ChaCha20 cipher operates on a 4×4 matrix of 32-bit words, applying 20 rounds of the quarter-round mixing function to produce a 512-bit keystream block. The quarter-round function uses only add, XOR, and rotate (ARX) operations — no S-boxes or table lookups — making it immune to cache-timing attacks that can afflict AES implementations without hardware support. Each 512-bit block encrypts 64 bytes of plaintext; the [[Nonce]] and block counter are incremented for each block, ensuring the keystream never repeats. The Poly1305 MAC uses the remaining 32 bytes of the keystream block (r and s values) to compute a Galois field polynomial evaluation over the message, producing a 16-byte authentication tag that is appended to the ciphertext.

  - ChaCha20-Poly1305 is now pervasive in internet security infrastructure. [[TLS 1.3]] mandates support for it as a mandatory AEAD cipher suite (TLS_CHACHA20_POLY1305_SHA256), ensuring its availability across the entire TLS ecosystem. WireGuard, the modern VPN protocol, uses ChaCha20-Poly1305 as its sole symmetric cipher, valuing its simplicity and software performance. QUIC (the transport protocol underlying HTTP/3) supports ChaCha20-Poly1305. OpenSSH added support in version 6.5 (2014). The Noise Protocol Framework — used in WhatsApp's end-to-end encryption and Signal — provides ChaCha20-Poly1305 as a core cipher option.

  - By 2025, ChaCha20-Poly1305 is one of only three AEAD constructions mandated by TLS 1.3 (alongside AES-128-GCM and AES-256-GCM). Its adoption has effectively eliminated the divide between high-performance AES-accelerated hardware and software-only environments — mobile devices, microcontrollers, and embedded systems achieve competitive AEAD performance without hardware acceleration. Post-quantum cryptography standardisation (NIST PQC, 2024) will replace asymmetric key exchange algorithms but leaves symmetric AEAD constructions such as ChaCha20-Poly1305 intact: with 256-bit keys, it maintains adequate security margins against Grover's algorithm. The algorithm's simplicity, auditability, and performance profile ensure its continued dominance in the authenticated encryption landscape.

