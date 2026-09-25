A cryptographic hash function is a deterministic, one-way algorithm that maps an input of arbitrary length to a fixed-size digest (typically 160–512 bits), satisfying three core security properties: preimage resistance (infeasibility of recovering input from digest), second-preimage resistance (infeasibility of finding a distinct input that maps to the same digest as a known input), and collision resistance (infeasibility of finding any two distinct inputs that share a digest). These properties make hash functions foundational primitives for data integrity verification, digital signatures, message authentication codes, and proof-of-work consensus. Widely deployed algorithms include SHA-256 (Bitcoin), Keccak-256 (Ethereum), BLAKE2, and SHA-3 (NIST FIPS 202); Grover's algorithm on quantum hardware reduces effective security by half, motivating ongoing standardisation of quantum-resistant alternatives by NIST.

### Overview

- Hash functions occupy a unique position in cryptography because they are deliberately non-invertible: unlike [[Symmetric Encryption]], there is no corresponding decryption operation. The digest (also called a hash, fingerprint, or checksum) is a compact, fixed-length representation of potentially gigabytes of input data.
- They are considered mature, standardised primitives deployed universally across computing infrastructure, from TLS certificate verification to software package integrity checks, [[Blockchain]] transaction linking, and [[Password Hashing]] systems.
- Their efficiency on modern hardware (SHA-256 processes gigabytes per second on commodity CPUs) combined with their strong security guarantees makes them among the most widely deployed algorithms in software engineering.
- The long-term concern is [[Post-Quantum Cryptography]]: [[Grover's Algorithm]] on a sufficiently powerful quantum computer can find a preimage in O(2^(n/2)) operations, halving the effective security level of an n-bit hash. For SHA-256 (256-bit output), this yields 128-bit post-quantum security — still considered sufficient but motivating interest in larger output sizes and ongoing [[NIST]] post-quantum standardisation work.

### Key Security Properties

- **[[Preimage Resistance]]** (one-way property): Given a digest h, it is computationally infeasible to find any input m such that H(m) = h.
- **[[Second-Preimage Resistance]]** (weak collision resistance): Given an input m1, it is computationally infeasible to find a distinct m2 such that H(m1) = H(m2).
- **[[Collision Resistance]]** (strong collision resistance): It is computationally infeasible to find any two distinct inputs m1 ≠ m2 such that H(m1) = H(m2). Collision resistance implies second-preimage resistance but is a strictly stronger property.
- **[[Avalanche Effect]]**: Changing a single bit in the input produces a digest that differs in approximately half of its bits, ensuring there is no exploitable correlation between similar inputs and their outputs.
- **Determinism**: The same input always produces the same digest; this is essential for verification workflows where the recipient independently recomputes and compares.
- **Efficiency**: Computation of the digest must be tractable on commodity hardware (milliseconds or less for typical inputs).

### Major Algorithms

- **[[SHA-256]]** (Secure Hash Algorithm 256-bit): Standardised by [[NIST]] in FIPS 180-4; used in Bitcoin's [[Proof of Work]] and block linking, [[Public Key Infrastructure]] certificate fingerprinting, and Git object storage.
- **[[Keccak-256]]**: The Keccak sponge construction selected as SHA-3 by NIST (FIPS 202). Ethereum uses Keccak-256 specifically (a slightly different parameterisation than the official SHA-3 standard) for address derivation and transaction hashing.
- **[[SHA-3]]** (FIPS 202): The official NIST standardisation of the Keccak sponge construction, offering a structurally different design from the Merkle-Damgård construction used by SHA-2, providing algorithmic diversity against class-wide attacks.
- **[[BLAKE2]]**: A speed-optimised alternative to SHA-2/SHA-3, offering competitive security with higher throughput in software implementations. Widely used in [[Password Hashing]] constructions and file integrity tools such as b2sum.
- **[[BLAKE3]]**: Successor to BLAKE2 with additional parallelism support (via a Merkle tree internal structure), enabling hardware and multi-core acceleration.
- **MD5 / SHA-1** (deprecated): Both have known practical collisions and are considered cryptographically broken for security-sensitive applications, though they persist in non-security checksums.
- **[[Argon2]] / bcrypt / scrypt**: Password-specific hash functions incorporating memory-hard and time-hard properties to resist GPU-accelerated brute-force attacks; distinguished from general-purpose cryptographic hash functions by their intentional slowness.

### Internal Constructions

- **Merkle-Damgård Construction**: The internal structure of SHA-1, SHA-2 (MD5, SHA-256, SHA-512). Input is padded and divided into fixed-size blocks; a compression function iteratively updates a running state (chaining variable). Length-extension attacks are possible against naive Merkle-Damgård hash-based MACs.
- **Sponge Construction**: Used by Keccak/SHA-3. The state is divided into a rate (absorbed input) and a capacity (security parameter). After absorbing all input blocks, output is squeezed from the rate portion. Inherently resistant to length-extension attacks.
- **HAIFA Construction**: An iterated hash design that incorporates a bit-count and a salt into each compression call, used in BLAKE and other SHA-3 competition candidates.

### Applications and Use Cases

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

### Standards and Governance

- **NIST FIPS 180-4**: Defines the Secure Hash Standard (SHS), specifying SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, and SHA-512/256.
- **NIST FIPS 202**: Defines SHA-3 (Keccak-based sponge construction), published 2015 following a public competition.
- **[[IETF]] RFC 6234**: Provides C implementations and test vectors for SHA-256/384/512, commonly referenced in protocol implementations.
- **[[IETF]] RFC 2104**: Defines HMAC, specifying how any cryptographic hash function may be used to construct a keyed MAC.
- **NIST SP 800-107**: Guidance on the security properties of approved hash functions and their use in digital signature applications.
- **NIST Post-Quantum Standardisation**: FIPS 203/204/205 (2024) standardise lattice-based and hash-based signature schemes; SPHINCS+ (FIPS 205) is entirely hash-based, underscoring the enduring role of cryptographic hash functions in post-quantum infrastructure.
- **Ethereum Yellow Paper**: Specifies the use of Keccak-256 throughout the Ethereum Virtual Machine, including transaction hashing, state trie nodes, and address derivation.
- **Bitcoin Developer Reference**: Documents the dual application of SHA-256 (SHA-256d) in Bitcoin's proof-of-work and block-header chain linkage.

### Security Considerations

- **Length-Extension Attacks**: Merkle-Damgård hash functions (SHA-256, SHA-512) are vulnerable to length-extension: given H(secret || message), an attacker can compute H(secret || message || extension) without knowing the secret. HMAC mitigates this by design; SHA-3 (sponge) is inherently immune.
- **Birthday Attacks**: The probability of finding a collision scales with the square root of the output size (birthday paradox). For an n-bit hash, collision resistance is approximately 2^(n/2); a 128-bit hash provides only 64-bit collision security.
- **Quantum Threats**: Grover's algorithm reduces preimage security from 2^n to 2^(n/2) operations on a quantum computer. SHA-256 retains ~128-bit post-quantum preimage security; collision finding benefits more from classical Rho/birthday techniques. No currently known quantum algorithm breaks the collision resistance of well-designed hash functions faster than 2^(n/3).
- **Algorithm Agility**: Systems should be designed to allow hash function substitution without architectural changes, enabling migration from deprecated algorithms (MD5, SHA-1) or in response to future cryptanalytic advances.
- **Chosen-Prefix Collisions**: Practical chosen-prefix collisions against MD5 and SHA-1 have been demonstrated (SHAttered, 2017); these are the attacks that rendered those algorithms cryptographically broken for certificate issuance.

### Current Landscape (2026)

- On 13 August 2024 NIST finalised FIPS 205, standardising SLH-DSA (derived from SPHINCS+), the first quantum-resistant signature scheme whose security rests solely on the second-preimage resistance of the SHA-2 (FIPS 180-4) and SHA-3/SHAKE (FIPS 202) hash families, elevating hash functions to the security foundation of post-quantum signatures.
- NIST's PQC transition roadmap (IR 8547, draft November 2024) and SP 800-131A Rev. 3 (draft October 2024) set a schedule to deprecate SHA-1 and the 224-bit hash functions (SHA-224, SHA-3-224, SHA-512/224) and to remove quantum-vulnerable algorithms by 2035; SHA-1 is to be withdrawn entirely by 31 December 2030, with FIPS 180-5 planned to delete its specification.
- As of 2026 SHA-256 (SHA-2) remains the practical default for general hashing, TLS and signatures, while SHA-3/Keccak stays the standardised backup with newer members TupleHash and ParallelHash promoted as replacements for retiring 224-bit variants; NIST maintains there is still no need to migrate applications from SHA-2 to SHA-3.
- BLAKE3 has become the de facto high-throughput non-cryptographic-compliance choice (roughly 3-6x faster than SHA-256), but NIST has not opened a standardisation process and confirmed (per January 2026 guidance) it will not be eligible for FIPS 140-3 validation before 2028, so regulated, PCI-DSS 4.0 and government workloads remain on SHA-2/SHA-3.
- Hardware acceleration is a live frontier: research such as the SLotH accelerator (NIST 5th PQC conference, 2024) shows dedicated Keccak/SHAKE and SHA-2 cores can speed SLH-DSA hashing up to ~300x, while the shift to Arm (e.g. AWS Graviton4, announced December 2025) erodes x86 SHA-NI advantages and reshapes hashing performance economics.
- Key standards players remain NIST/CSRC (FIPS 180-4, FIPS 202, FIPS 205) alongside ecosystem adoption signals such as Git's SHA-256 repository support and xxHash3-128 becoming the default in Zstandard 1.6 (November 2025); open challenges centre on migrating long-lived legacy SHA-1/MD5 code, provisioning crypto-agility (NIST CSWP 39 on crypto agility, updated June 2026), and validating faster designs like BLAKE3 for regulated use.

### References

- 1. National Institute of Standards and Technology (2024). FIPS 205: Stateless Hash-Based Digital Signature Standard. https://csrc.nist.gov/pubs/fips/205/final
- 2. NIST CSRC (2024). Transition to Post-Quantum Cryptography Standards (NIST IR 8547, initial public draft). https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf
- 3. NIST CSRC (2024). SP 800-131A Rev. 3 (Initial Public Draft): Transitioning the Use of Cryptographic Algorithms and Key Lengths. https://csrc.nist.gov/pubs/sp/800/131/a/r3/ipd
- 4. NIST (2022, updated 2026). NIST Retires SHA-1 Cryptographic Algorithm. https://www.nist.gov/news-events/news/2022/12/nist-retires-sha-1-cryptographic-algorithm
- 5. DevToolsPro (2026). SHA-256 Alternatives 2026: Which Hash Function to Use. https://devtoolspro.org/articles/sha256-alternatives-2026-guide/

### Provenance

