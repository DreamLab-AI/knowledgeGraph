public:: true

# SHA-256 Hashing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sha-256-hashing",
  "@type": "Page",
  "vc:slug": "sha-256-hashing",
  "title": "SHA-256 Hashing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sha-256-hashing",
  "@type": "Class",
  "label": "SHA-256 Hashing",
  "definition": "SHA-256 Hashing refers to the application of the SHA-256 (Secure Hash Algorithm 256-bit) cryptographic hash function — a member of the SHA-2 family standardised by NIST in 2001 — to produce a fixed-length 256-bit (32-byte) message digest from an arbitrary-length input, with the properties of determinism, pre-image resistance, second pre-image resistance, and collision resistance. The algorithm operates via 64 rounds of bit manipulation, modular addition, and nonlinear functions over a 512-bit block schedule. SHA-256 is the foundational hash function of Bitcoin's proof-of-work mining, block header commitments, and Merkle tree construction, as well as a critical primitive in TLS, code signing, and certificate transparency.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining", "label": "Bitcoin Mining"},
      {"@id": "urn:ngm:class:data-integrity", "label": "Data Integrity"},
      {"@id": "urn:ngm:class:merkle-proof", "label": "Merkle Proof"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"},
      {"@id": "urn:ngm:class:blockchain-security", "label": "Blockchain Security"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[SHA-256 Hashing]] applies the NIST-standardised SHA-256 cryptographic hash function to produce a 256-bit collision-resistant digest from arbitrary inputs, serving as the foundational primitive for [[Bitcoin Mining]]'s [[Proof Of Work]], [[Merkle Tree]] block commitments, and broad-spectrum [[Data Integrity]] verification in security infrastructure.

- ### Relationships
  - [[SHA-256 Hashing]] is an instantiation of the general [[Cryptographic Hash Function]] class and is tightly related to [[SHA-256]] the algorithm specification. Bitcoin applies double-SHA-256 (hash of a hash) throughout its protocol: block headers are hashed by miners seeking a nonce that produces an output below the difficulty target, constituting [[Proof Of Work]]. [[Merkle Tree]] structures in Bitcoin blocks use SHA-256 to recursively hash transaction pairs into a single commitment, enabling compact [[Merkle Proof]] of transaction inclusion. [[Bitcoin Mining]] hardware (ASICs) is designed almost entirely around optimised SHA-256 computation circuits, and the network's collective hash rate represents an enormous physical investment in [[Blockchain Security]]. Beyond Bitcoin, SHA-256 appears in TLS handshakes, X.509 certificates, HMAC constructions, and key derivation functions.

- ### Content
  - SHA-256 belongs to the SHA-2 family designed by the US National Security Agency (NSA) and published by NIST in 2001 as FIPS PUB 180-2, in part as a response to identified weaknesses in SHA-1. The function processes input padded to a multiple of 512 bits, initialises eight 32-bit hash values from fractional parts of square roots of the first eight primes, and executes 64 compression rounds per block mixing message schedule words through bitwise operations (AND, OR, XOR, NOT), circular right shifts (ROTR), and modular 32-bit addition with round constants derived from fractional parts of cube roots of the first 64 primes. The design philosophy follows a Davies-Meyer construction applied to a custom block cipher (SHACAL-2), inheriting the cipher's studied diffusion and confusion properties.

  - The security properties that make SHA-256 valuable are: pre-image resistance (given a hash output, infeasible to find input producing it), second pre-image resistance (given input x, infeasible to find y≠x with same hash), and collision resistance (infeasible to find any two inputs with same hash). The 256-bit output space means that a birthday attack on collisions requires approximately 2^128 operations — computationally infeasible with classical hardware. No practical attack against SHA-256 has been found; it remains secure under current cryptanalytic understanding and is expected to remain secure against classical computers for the foreseeable future.

  - Bitcoin's adoption of SHA-256 as its proof-of-work function (via Hashcash) was pivotal in the cryptocurrency ecosystem. Satoshi Nakamoto's 2008 whitepaper made SHA-256 synonymous with blockchain immutability: changing any historical transaction would require recomputing the hash chain from that point forward, an infeasible task given the network's cumulative hash rate. This use case also created the world's largest deployment of a single hash function in terms of raw computational throughput — Bitcoin mining has historically consumed hash rates measured in hundreds of exahashes per second (10^20 hashes/second), dwarfing all other SHA-256 applications combined.

  - In 2024–2025 SHA-256 remains one of the most trusted and widely deployed cryptographic primitives despite the ongoing post-quantum transition. Quantum computers applying Grover's algorithm could theoretically reduce the effective pre-image security to 128 bits — still considered acceptable. NIST's post-quantum standardisation efforts focus on asymmetric cryptography (key exchange and signatures) rather than hash functions, reflecting SHA-256's continued robustness. Bitcoin's ASIC industry has produced SHA-256 computation hardware with extraordinary energy efficiency (sub-20 joules per terahash), driving research into ASIC design and the economics of proof-of-work security under energy constraints.