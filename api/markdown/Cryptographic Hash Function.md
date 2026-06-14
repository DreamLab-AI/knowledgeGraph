public:: true
alias:: Cryptographic Hash Functions

# cryptographic hash function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:294331f69a3d317a97028c31eab8e95153de3066fb5d0b5b5f0e35a6315b690d",
  "@type": "Page",
  "vc:slug": "cryptographic-hash-function",
  "title": "cryptographic hash function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptographic-hash-function",
  "@type": "Class",
  "label": "Cryptographic Hash Function",
  "definition": "A cryptographic hash function is a deterministic, one-way algorithm that maps an input of arbitrary length to a fixed-size digest (typically 160–512 bits), satisfying three core security properties: preimage resistance (infeasibility of recovering input from digest), second-preimage resistance (infeasibility of finding a distinct input that maps to the same digest as a known input), and collision resistance (infeasibility of finding any two distinct inputs that share a digest). These properties make hash functions foundational primitives for data integrity verification, digital signatures, message authentication codes, and proof-of-work consensus. Widely deployed algorithms include SHA-256 (Bitcoin), Keccak-256 (Ethereum), BLAKE2, and SHA-3 (NIST FIPS 202); Grover's algorithm on quantum hardware reduces effective security by half, motivating ongoing standardisation of quantum-resistant alternatives by NIST.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:message-authentication-code", "label": "Message Authentication Code"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:commitment-scheme", "label": "Commitment Scheme"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:collision-resistance", "label": "Collision Resistance"},
      {"@id": "urn:ngm:class:preimage-resistance", "label": "Preimage Resistance"},
      {"@id": "urn:ngm:class:second-preimage-resistance", "label": "Second-Preimage Resistance"},
      {"@id": "urn:ngm:class:avalanche-effect", "label": "Avalanche Effect"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:one-way-function", "label": "One-Way Function"},
      {"@id": "urn:ngm:class:pseudorandom-function", "label": "Pseudorandom Function"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:keccak-256", "label": "Keccak-256"},
      {"@id": "urn:ngm:class:blake2", "label": "BLAKE2"},
      {"@id": "urn:ngm:class:sha-3", "label": "SHA-3"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:password-hashing", "label": "Password Hashing"},
      {"@id": "urn:ngm:class:content-addressed-storage", "label": "Content-Addressed Storage"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist", "label": "NIST"},
      {"@id": "urn:ngm:class:ietf", "label": "IETF"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:symmetric-encryption", "label": "Symmetric Encryption"},
      {"@id": "urn:ngm:class:checksums", "label": "Checksums"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:post-quantum-cryptography", "label": "Post-Quantum Cryptography"},
      {"@id": "urn:ngm:class:verifiable-credential", "label": "Verifiable Credential"},
      {"@id": "urn:ngm:class:decentralised-identifier", "label": "Decentralised Identifier"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:hmac", "label": "HMAC"},
      {"@id": "urn:ngm:class:key-derivation-function", "label": "Key Derivation Function"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
    {"@id": "urn:ngm:class:one-way-hash-function", "label": "One-Way Hash Function"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **Cryptographic Hash Function** is a deterministic, one-way algorithm that maps an input of arbitrary length to a fixed-size digest, satisfying the three essential security properties of [[Preimage Resistance]], [[Second-Preimage Resistance]], and [[Collision Resistance]]. These properties collectively ensure that the digest cannot be reversed to recover the input, cannot be exploited to substitute a different input, and cannot be used to find two distinct inputs sharing the same output. Hash functions are a foundational [[Cryptographic Primitive]] underpinning [[Digital Signature]] schemes, [[Merkle Tree]] constructions, [[Message Authentication Code]] (MAC) generation, and [[Proof of Work]] consensus in blockchain networks. The [[Avalanche Effect]] — where a single-bit change in input produces a completely different digest — is an additional desirable property that reinforces unpredictability.

- ### Overview
  - Hash functions occupy a unique position in cryptography because they are deliberately non-invertible: unlike [[Symmetric Encryption]], there is no corresponding decryption operation. The digest (also called a hash, fingerprint, or checksum) is a compact, fixed-length representation of potentially gigabytes of input data.
  - They are considered mature, standardised primitives deployed universally across computing infrastructure, from TLS certificate verification to software package integrity checks, [[Blockchain]] transaction linking, and [[Password Hashing]] systems.
  - Their efficiency on modern hardware (SHA-256 processes gigabytes per second on commodity CPUs) combined with their strong security guarantees makes them among the most widely deployed algorithms in software engineering.
  - The long-term concern is [[Post-Quantum Cryptography]]: [[Grover's Algorithm]] on a sufficiently powerful quantum computer can find a preimage in O(2^(n/2)) operations, halving the effective security level of an n-bit hash. For SHA-256 (256-bit output), this yields 128-bit post-quantum security — still considered sufficient but motivating interest in larger output sizes and ongoing [[NIST]] post-quantum standardisation work.

- ### Key Security Properties
  - **[[Preimage Resistance]]** (one-way property): Given a digest h, it is computationally infeasible to find any input m such that H(m) = h.
  - **[[Second-Preimage Resistance]]** (weak collision resistance): Given an input m1, it is computationally infeasible to find a distinct m2 such that H(m1) = H(m2).
  - **[[Collision Resistance]]** (strong collision resistance): It is computationally infeasible to find any two distinct inputs m1 ≠ m2 such that H(m1) = H(m2). Collision resistance implies second-preimage resistance but is a strictly stronger property.
  - **[[Avalanche Effect]]**: Changing a single bit in the input produces a digest that differs in approximately half of its bits, ensuring there is no exploitable correlation between similar inputs and their outputs.
  - **Determinism**: The same input always produces the same digest; this is essential for verification workflows where the recipient independently recomputes and compares.
  - **Efficiency**: Computation of the digest must be tractable on commodity hardware (milliseconds or less for typical inputs).

- ### Major Algorithms
  - **[[SHA-256]]** (Secure Hash Algorithm 256-bit): Standardised by [[NIST]] in FIPS 180-4; used in Bitcoin's [[Proof of Work]] and block linking, [[Public Key Infrastructure]] certificate fingerprinting, and Git object storage.
  - **[[Keccak-256]]**: The Keccak sponge construction selected as SHA-3 by NIST (FIPS 202). Ethereum uses Keccak-256 specifically (a slightly different parameterisation than the official SHA-3 standard) for address derivation and transaction hashing.
  - **[[SHA-3]]** (FIPS 202): The official NIST standardisation of the Keccak sponge construction, offering a structurally different design from the Merkle-Damgård construction used by SHA-2, providing algorithmic diversity against class-wide attacks.
  - **[[BLAKE2]]**: A speed-optimised alternative to SHA-2/SHA-3, offering competitive security with higher throughput in software implementations. Widely used in [[Password Hashing]] constructions and file integrity tools such as b2sum.
  - **[[BLAKE3]]**: Successor to BLAKE2 with additional parallelism support (via a Merkle tree internal structure), enabling hardware and multi-core acceleration.
  - **MD5 / SHA-1** (deprecated): Both have known practical collisions and are considered cryptographically broken for security-sensitive applications, though they persist in non-security checksums.
  - **[[Argon2]] / bcrypt / scrypt**: Password-specific hash functions incorporating memory-hard and time-hard properties to resist GPU-accelerated brute-force attacks; distinguished from general-purpose cryptographic hash functions by their intentional slowness.

- ### Internal Constructions
  - **Merkle-Damgård Construction**: The internal structure of SHA-1, SHA-2 (MD5, SHA-256, SHA-512). Input is padded and divided into fixed-size blocks; a compression function iteratively updates a running state (chaining variable). Length-extension attacks are possible against naive Merkle-Damgård hash-based MACs.
  - **Sponge Construction**: Used by Keccak/SHA-3. The state is divided into a rate (absorbed input) and a capacity (security parameter). After absorbing all input blocks, output is squeezed from the rate portion. Inherently resistant to length-extension attacks.
  - **HAIFA Construction**: An iterated hash design that incorporates a bit-count and a salt into each compression call, used in BLAKE and other SHA-3 competition candidates.

- ### Applications and Use Cases
  - **[[Blockchain]] Block Linking**: Each block header contains the hash of the previous block header (in Bitcoin, SHA-256d — double SHA-256). Altering any historical block requires recomputing all subsequent hashes, making the chain tamper-evident.
  - **[[Merkle Tree]] Construction**: Transactions within a block are hashed into a binary Merkle tree; the Merkle root committed in the block header enables efficient [[Simplified Payment Verification]] (SPV) proofs without downloading the full block.
  - **[[Proof of Work]] Mining**: Miners iterate over nonce values until SHA-256(block header) ≤ network difficulty target. The hash function's unpredictability ensures this is a probabilistic lottery.
  - **Address Derivation**: Ethereum derives account addresses by applying Keccak-256 to the 64-byte uncompressed public key and taking the lower 20 bytes (160 bits).
  - **[[Digital Signature]] Pre-Hashing**: RSA, ECDSA, and EdDSA sign a digest of the message rather than the raw message, combining hash function efficiency with asymmetric key security.
  - **[[Message Authentication Code]] (HMAC)**: [[HMAC]] constructs a keyed MAC by applying a hash function twice with a derived key, providing both authenticity and integrity guarantees.
  - **[[Key Derivation Function]]**: Functions such as HKDF (RFC 5869) and PBKDF2 use cryptographic hash functions internally to stretch or expand key material securely.
  - **[[Content-Addressed Storage]]**: Systems such as IPFS and Git identify objects by their hash digest rather than by location, ensuring content integrity and enabling deduplication.
  - **[[Commitment Scheme]]**: A prover commits to a value v by publishing H(v || nonce); the nonce prevents dictionary lookup while enabling later reveal and verification. Used in [[Zero-Knowledge Proof]] protocols, sealed-bid auctions, and multi-party computation.
  - **[[Password Hashing]]**: Storing H(password) instead of passwords protects against database breaches; specialised constructions (bcrypt, [[Argon2]]) add memory-hardness and configurable cost factors.
  - **Software Integrity**: Package managers (apt, npm, pip) distribute SHA-256 or SHA-512 checksums alongside packages; users independently verify digests before installation.
  - **[[Verifiable Credential]] Binding**: DID-based credential systems use hash digests to commit to credential content in on-chain anchors, linking [[Decentralised Identifier]] infrastructure to verifiable data.
  - **[[Public Key Infrastructure]]**: X.509 certificate fingerprints and certificate transparency logs use SHA-256 digests to identify and pin certificates without exposing keys.

- ### Relationships
  - enables:: [[Merkle Tree]]
  - enables:: [[Digital Signature]]
  - enables:: [[Message Authentication Code]]
  - enables:: [[Proof of Work]]
  - enables:: [[Commitment Scheme]]
  - enables:: [[Zero-Knowledge Proof]]
  - requires:: [[Collision Resistance]]
  - requires:: [[Preimage Resistance]]
  - requires:: [[Second-Preimage Resistance]]
  - requires:: [[Avalanche Effect]]
  - implements:: [[One-Way Function]]
  - implements:: [[Pseudorandom Function]]
  - uses:: [[SHA-256]]
  - uses:: [[Keccak-256]]
  - uses:: [[BLAKE2]]
  - uses:: [[SHA-3]]
  - supports:: [[Blockchain]]
  - supports:: [[Public Key Infrastructure]]
  - supports:: [[Password Hashing]]
  - supports:: [[Content-Addressed Storage]]
  - standardizedBy:: [[NIST]]
  - standardizedBy:: [[IETF]]
  - contrastsWith:: [[Symmetric Encryption]]
  - contrastsWith:: [[Checksums]]
  - bridges-to:: [[Post-Quantum Cryptography]]
  - bridges-to:: [[Verifiable Credential]]
  - bridges-to:: [[Decentralised Identifier]]
  - relatedTo:: [[HMAC]]
  - relatedTo:: [[Key Derivation Function]]

- ### Standards and Governance
  - **NIST FIPS 180-4**: Defines the Secure Hash Standard (SHS), specifying SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, and SHA-512/256.
  - **NIST FIPS 202**: Defines SHA-3 (Keccak-based sponge construction), published 2015 following a public competition.
  - **[[IETF]] RFC 6234**: Provides C implementations and test vectors for SHA-256/384/512, commonly referenced in protocol implementations.
  - **[[IETF]] RFC 2104**: Defines HMAC, specifying how any cryptographic hash function may be used to construct a keyed MAC.
  - **NIST SP 800-107**: Guidance on the security properties of approved hash functions and their use in digital signature applications.
  - **NIST Post-Quantum Standardisation**: FIPS 203/204/205 (2024) standardise lattice-based and hash-based signature schemes; SPHINCS+ (FIPS 205) is entirely hash-based, underscoring the enduring role of cryptographic hash functions in post-quantum infrastructure.
  - **Ethereum Yellow Paper**: Specifies the use of Keccak-256 throughout the Ethereum Virtual Machine, including transaction hashing, state trie nodes, and address derivation.
  - **Bitcoin Developer Reference**: Documents the dual application of SHA-256 (SHA-256d) in Bitcoin's proof-of-work and block-header chain linkage.

- ### Security Considerations
  - **Length-Extension Attacks**: Merkle-Damgård hash functions (SHA-256, SHA-512) are vulnerable to length-extension: given H(secret || message), an attacker can compute H(secret || message || extension) without knowing the secret. HMAC mitigates this by design; SHA-3 (sponge) is inherently immune.
  - **Birthday Attacks**: The probability of finding a collision scales with the square root of the output size (birthday paradox). For an n-bit hash, collision resistance is approximately 2^(n/2); a 128-bit hash provides only 64-bit collision security.
  - **Quantum Threats**: Grover's algorithm reduces preimage security from 2^n to 2^(n/2) operations on a quantum computer. SHA-256 retains ~128-bit post-quantum preimage security; collision finding benefits more from classical Rho/birthday techniques. No currently known quantum algorithm breaks the collision resistance of well-designed hash functions faster than 2^(n/3).
  - **Algorithm Agility**: Systems should be designed to allow hash function substitution without architectural changes, enabling migration from deprecated algorithms (MD5, SHA-1) or in response to future cryptanalytic advances.
  - **Chosen-Prefix Collisions**: Practical chosen-prefix collisions against MD5 and SHA-1 have been demonstrated (SHAttered, 2017); these are the attacks that rendered those algorithms cryptographically broken for certificate issuance.

- ### Provenance
  - sources:: NIST FIPS 180-4; NIST FIPS 202; RFC 2104; RFC 6234; NIST SP 800-107; Ethereum Yellow Paper; Bitcoin Developer Reference; SHAttered (Stevens et al., 2017)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
