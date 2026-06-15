public:: true

# Cryptographic Signing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cryptographic-signing",
  "@type": "Page",
  "vc:slug": "cryptographic-signing",
  "title": "Cryptographic Signing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptographic-signing",
  "@type": "Class",
  "label": "Cryptographic Signing",
  "definition": "Cryptographic signing is the process of producing a verifiable proof of authorship and integrity over a message or document using a private key, such that anyone holding the corresponding public key can confirm the signature without being able to forge it. It underpins authentication, non-repudiation, software-supply-chain integrity, and blockchain transaction authorisation. Signing schemes include RSA, ECDSA, EdDSA, and Schnorr, each defining how a hash of the message is transformed under the signer's secret key into a compact, publicly verifiable signature.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      }
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Cryptographic signing produces a publicly verifiable, unforgeable proof of authorship and integrity over data by transforming a message hash under the signer's private key.

- ### Relationships
  - Cryptographic Signing is a subclass of [[Cryptographic Primitive]] and uses [[Digital Signature]] algorithms, [[Public-Key Cryptography]] key pairs, and a [[Hash Function]] to compress arbitrary messages before signing. It enables disciplined [[Key Management]] practices and relates to the broader [[Cryptographic Protocol]] layer that composes signatures into authentication and authorisation flows.

- ### Content
  - The core asymmetry of cryptographic signing is what makes it useful: the holder of a secret key can produce a signature that anyone with the public key can verify, yet no one without the secret key can forge. A signature binds a specific message to a specific key, so any later tampering with the message invalidates the signature. This single property delivers authentication (who signed), integrity (the content is unaltered), and non-repudiation (the signer cannot credibly deny it).

  - In practice, signatures are computed over a fixed-length digest produced by a collision-resistant hash function rather than the raw message, both for efficiency and to fit the algebraic structure of the signing algorithm. The security of the whole scheme therefore depends jointly on the hardness of the underlying public-key problem and on the collision resistance of the hash, which is why deprecated hashes like MD5 and SHA-1 are dangerous in signing contexts.

  - Modern deployments favour elliptic-curve schemes — ECDSA and the deterministic, side-channel-resistant EdDSA (Ed25519) — for their small keys and signatures, while Schnorr signatures have gained prominence in blockchain systems for their linearity, which enables efficient signature aggregation and multi-signature constructions. The choice of scheme involves trade-offs between signature size, verification speed, hardware support, and resistance to implementation pitfalls such as nonce reuse, which catastrophically leaks the private key in ECDSA.

  - Cryptographic signing is the trust anchor for vast swathes of digital infrastructure: TLS certificates, signed software releases and container images, code-signing for operating systems, document signing in e-government and finance, and the authorisation of every blockchain transaction. As supply-chain attacks have grown, signing has become central to provenance frameworks that attest where code came from and who approved it, making robust key management — generation, storage in hardware, rotation, and revocation — as important as the signing algorithm itself.
