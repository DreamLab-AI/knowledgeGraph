public:: true

# Asymmetric Cryptography
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:asymmetric-cryptography",
  "@type": "Page",
  "vc:slug": "asymmetric-cryptography",
  "title": "Asymmetric Cryptography",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:asymmetric-cryptography",
  "@type": "Class",
  "label": "Asymmetric Cryptography",
  "definition": "Asymmetric Cryptography is a cryptographic paradigm in which mathematically related key pairs — a public key and a private key — serve distinct roles: the public key may be freely shared and used to encrypt messages or verify signatures, while the private key is kept secret and used to decrypt or sign. Security rests on the computational intractability of reversing the underlying mathematical problems without knowledge of the private key.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key", "label": "Public Key"},
      {"@id": "urn:ngm:class:private-key", "label": "Private Key"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:tls", "label": "TLS"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"},
      {"@id": "urn:ngm:class:key-management", "label": "Key Management"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Asymmetric Cryptography]] — also known as public-key cryptography — uses paired [[Public Key]] and [[Private Key]] values derived from a one-way mathematical relationship. Encrypting a message with a recipient's [[Public Key]] produces ciphertext that only their [[Private Key]] can decrypt; conversely, signing data with a [[Private Key]] produces a [[Digital Signature]] that anyone holding the [[Public Key]] can verify. The security of RSA rests on integer factorisation difficulty; [[Elliptic Curve Cryptography]] (ECC) rests on the elliptic-curve discrete-logarithm problem and achieves equivalent security at much shorter key lengths.

- ### Relationships
  - Asymmetric Cryptography is a subclass of [[Cryptography]] and decomposes into [[Public Key]], [[Private Key]], and [[Digital Signature]] components. It underpins [[Public Key Infrastructure]], the trust hierarchy used to issue and validate certificates across the internet. [[TLS]] relies on asymmetric cryptography for key exchange and server authentication during the handshake phase. [[Elliptic Curve Cryptography]] is the dominant modern instance of the paradigm, and [[Key Management]] practices govern the generation, storage, rotation, and revocation of key pairs in production systems.

- ### Content
  - The concept of asymmetric cryptography was independently developed by Whitfield Diffie and Martin Hellman (Diffie-Hellman key exchange, 1976) and by Rivest, Shamir, and Adleman (RSA, 1977), following classified parallel work at GCHQ by James Ellis, Clifford Cocks, and Malcolm Williamson. These publications transformed cryptography from a military discipline into an engineering field open to civilian application. The fundamental insight — that two parties who have never met can establish a shared secret over a public channel — resolved the key-distribution problem that had constrained symmetric cryptography for decades.

  - RSA-2048 and RSA-4096 remain widely deployed for certificate signing and email encryption (S/MIME, PGP), though key generation and decryption are computationally expensive relative to elliptic-curve alternatives. ECDSA (Elliptic Curve Digital Signature Algorithm) over curves such as P-256 and secp256k1 dominates modern TLS certificates and blockchain transaction signing. EdDSA (Edwards-curve Digital Signature Algorithm) over Curve25519 (Ed25519) is preferred in high-security contexts for its resistance to implementation side-channel attacks and deterministic signature generation. ECDH and X25519 are standard for Diffie-Hellman key exchange in TLS 1.3.

  - In blockchain systems, asymmetric cryptography is the foundational primitive: every wallet address is derived from a public key, and every transaction is authorised by a digital signature produced with the corresponding private key. Bitcoin uses secp256k1 ECDSA; Ethereum uses the same curve; newer chains (Solana, Cardano) use Ed25519. Certificate transparency logs, SSH, code-signing pipelines, hardware security modules (HSMs), and secure enclave attestation all depend critically on asymmetric primitives. The FIDO2/WebAuthn standard for passwordless authentication exposes asymmetric key pairs via hardware authenticators.

  - As of 2024–2025, the cryptographic community is actively transitioning towards post-quantum cryptography (PQC) in anticipation of sufficiently capable quantum computers breaking RSA and ECC via Shor's algorithm. NIST finalised its PQC standards in 2024, standardising ML-KEM (Kyber) for key encapsulation and ML-DSA (Dilithium) and SLH-DSA (SPHINCS+) for digital signatures. Major cloud providers (AWS, Google, Cloudflare) and TLS implementations are deploying hybrid classic/PQC handshakes to provide harvest-now-decrypt-later protection, while blockchain ecosystems are exploring quantum-resistant signature schemes for future migration.

