public:: true

# secp256k1
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:383b27532153f353fa4cc689239f7365dfe924ebcf67807eb6916307a4e2701e",
  "@type": "Page",
  "vc:slug": "secp256k1",
  "title": "secp256k1",
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
  "@id": "urn:ngm:class:secp256k1",
  "@type": "Class",
  "label": "secp256k1",
  "definition": "secp256k1 is a Koblitz elliptic curve defined by the short Weierstrass equation y² = x³ + 7 over the 256-bit prime field ᴽₚ (where p = 2²⁵⁶ − 2³² − 977), standardised in SEC 2 by the Standards for Efficient Cryptography Group (SECG) and widely adopted as the asymmetric cryptographic backbone of Bitcoin, Ethereum, and dozens of subsequent blockchain protocols. Its specific Koblitz-form parameters permit the Frobenius endomorphism optimisation (GLV decomposition), yielding scalar multiplication roughly 30% faster than equivalent-security NIST curves without requiring a random-looking but opaque seed. The curve underpins both the Elliptic Curve Digital Signature Algorithm (ECDSA) used for transaction authorisation and, via BIP 340, the Schnorr signature scheme that enables key and signature aggregation in Taproot-based Bitcoin smart contracts.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:elliptic-curve-cryptography",
      "label": "Elliptic Curve Cryptography"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:ecdsa",
        "label": "ECDSA"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      },
      {
        "@id": "urn:ngm:class:finite-field-arithmetic",
        "label": "Finite Field Arithmetic"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:bitcoin-transaction",
        "label": "Bitcoin Transaction"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      },
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ed25519",
        "label": "Ed25519"
      },
      {
        "@id": "urn:ngm:class:curve25519",
        "label": "Curve25519"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:nostr-protocol",
        "label": "Nostr Protocol"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:multi-party-computation",
        "label": "Multi-Party Computation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:key-derivation-function",
        "label": "Key Derivation Function"
      },
      {
        "@id": "urn:ngm:class:hierarchical-deterministic-wallet",
        "label": "Hierarchical Deterministic Wallet"
      },
      {
        "@id": "urn:ngm:class:blockchain-security",
        "label": "Blockchain Security"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:secg-secp256k1",
      "label": "SECG secp256k1"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - secp256k1 is a Koblitz [[Elliptic Curve Cryptography]] curve defined by y² = x³ + 7 over a 256-bit prime field, standardised in SEC 2 by the [[Standards for Efficient Cryptography Group]] (SECG) and adopted as the cryptographic foundation of [[Bitcoin]], [[Ethereum]], and many successor [[Blockchain]] protocols. Its carefully chosen Koblitz-form parameters allow the Gallant-Lambert-Vanstone (GLV) decomposition to accelerate [[Scalar Multiplication]], offering a performance advantage over pseudo-random NIST curves of comparable security. The curve underpins both [[ECDSA]] for transaction authentication and, via [[Schnorr Signature]] (BIP 340), the Taproot-era smart contract and [[Threshold Signature]] capabilities.

- ### Overview
  - secp256k1 was defined by SECG in the document "SEC 2: Recommended Elliptic Curve Domain Parameters" (version 1.0, 2000; version 2.0, 2010).
  - The designation "secp256k1" encodes: "sec" (Standards for Efficient Cryptography), "p" (prime field), "256" (256-bit key size), "k" (Koblitz curve), "1" (first curve in the series with these parameters).
  - Satoshi Nakamoto chose secp256k1 for Bitcoin's implementation — a selection that influenced nearly all subsequent [[Proof-of-Work]] and [[Proof-of-Stake]] chains.
  - The curve's parameters are derived with minimal opaque structure, providing higher public confidence in the absence of potential backdoors compared to NIST curves whose seed derivation relies on unexplained constants.
  - Security level: approximately 128 bits of symmetric-equivalent security, meaning breaking the discrete logarithm problem on secp256k1 requires roughly 2¹²⁸ operations under the best-known algorithms.
  - The group order n = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141 (hex) has favourable prime factorisation for cryptographic use.

- ### Key Components
  - **Curve Parameters**
    - Prime modulus p = 2²⁵⁶ − 2³² − 977 (a pseudo-Mersenne prime enabling efficient modular reduction)
    - Curve equation: y² ≡ x³ + 7 (mod p) — coefficients a=0, b=7
    - Base point G (generator): a standardised point of prime order n on the curve
    - Cofactor h = 1 (all curve points except the identity lie in the prime-order subgroup — important for avoiding small-subgroup attacks)
    - Order n ≈ 1.158 × 10⁷⁷ ensures 256-bit private key space
  - **Koblitz Structure and GLV Optimisation**
    - Because a=0, secp256k1 admits an efficiently computable endomorphism λ such that λ(x, y) = (βx, y) where β is a cube root of unity mod p
    - The GLV (Gallant-Lambert-Vanstone) algorithm splits scalar multiplication k·G into two 128-bit multiplications, approximately halving the number of point doublings required
    - This yields scalar multiplication roughly 30% faster than NIST P-256 at the same security level — critical for embedded and high-throughput [[Blockchain]] nodes
  - **Key Generation**
    - [[Private Key]]: a uniformly random integer in the range [1, n−1], typically 32 bytes, generated via a cryptographically secure [[Random Number Generation]] source (CSPRNG)
    - [[Public Key]]: the elliptic curve point Q = k·G where k is the private key; transmitted as either a 65-byte uncompressed (04 || x || y) or 33-byte compressed (02/03 || x) encoding
    - [[Wallet Address Derivation]]: in Bitcoin, address = Base58Check(RIPEMD-160(SHA-256(pubkey))); in Ethereum, address = last 20 bytes of Keccak-256(uncompressed pubkey without prefix)
  - **Signature Algorithms**
    - [[ECDSA]] (original Bitcoin and Ethereum signing scheme): produces (r, s) pairs; requires a unique random nonce per signature; nonce reuse catastrophically exposes the private key
    - [[Schnorr Signature]] (BIP 340, Bitcoin Taproot): linear scheme enabling key aggregation (MuSig2), batch verification, and provably secure multi-party signing without interaction beyond a setup round
    - Recoverable ECDSA: Ethereum extends ECDSA with a recovery bit v, enabling public-key recovery from (r, s, v) — used by the ecrecover precompile in EVM smart contracts

- ### Mechanisms
  - **Point Multiplication (ECDLP Foundation)**
    - The one-way function at the core: given G and Q = k·G, computing k from Q is computationally infeasible (Elliptic Curve Discrete Logarithm Problem, ECDLP)
    - Best-known attacks (Pohlig-Hellman, Pollard's rho) have complexity O(√n) ≈ 2¹²⁸ — infeasible classically
    - Quantum threat: Shor's algorithm can solve ECDLP in polynomial time; motivating post-quantum migration discussions for long-term blockchain security (see [[Post-Quantum Cryptography]])
  - **Deterministic Nonce Generation (RFC 6979)**
    - To mitigate nonce reuse in ECDSA, RFC 6979 specifies deterministic nonce derivation from the private key and message hash using HMAC-DRBG
    - Widely implemented in Bitcoin and Ethereum signing libraries (libsecp256k1, ethereumjs, go-ethereum)
  - **Endomorphism Acceleration**
    - The Frobenius endomorphism on secp256k1 permits the GLV decomposition without a dedicated cofactor twist, distinguishing it from most other standardised curves
    - Bitcoin Core's libsecp256k1 library implements this optimisation in constant-time assembly for x86-64 and ARM architectures

- ### Applications and Use Cases
  - **Bitcoin Protocol**
    - Every Bitcoin [[Unspent Transaction Output]] (UTXO) is locked to a secp256k1 public key (or a script derived from one); spending requires a valid signature
    - Pay-to-Public-Key-Hash (P2PKH), Pay-to-Witness-Public-Key-Hash (P2WPKH, SegWit), and Pay-to-Taproot (P2TR) address types all ultimately rest on secp256k1 key pairs
    - [[Taproot]] (activated November 2021, block 709,632) added Schnorr-based P2TR, enabling MAST (Merklised Abstract Syntax Trees) and MuSig2 [[Threshold Signature]] aggregation
    - [[Hierarchical Deterministic Wallet]] (BIP 32/44/84): child key derivation via HMAC-SHA512 applied iteratively over the parent secp256k1 key and chain code
  - **Ethereum and EVM Chains**
    - Ethereum accounts are secp256k1 key pairs; the 20-byte address is derived by hashing the 64-byte uncompressed public key with Keccak-256
    - The EVM ecrecover precompile (address 0x01) recovers a signer's address from a recoverable ECDSA signature — foundational for [[Smart Contract]] authentication, gasless meta-transactions, and [[EIP-712]] typed data signing
    - Layer-2 solutions (Optimism, Arbitrum, zkSync) inherit Ethereum's secp256k1 key model; bridging and sequencer commitments also rely on secp256k1 signatures
  - **Nostr Protocol**
    - [[Nostr Protocol]] uses secp256k1 keypairs as the primary identity primitive; event IDs are SHA-256 hashes of serialised event JSON, and events are signed with Schnorr signatures per NIP-01
    - This creates a self-sovereign identity layer with no central registry, anchored purely in secp256k1 cryptographic ownership
  - **Lightning Network**
    - [[Lightning Network]] channel state commitments and HTLC (Hash Time-Locked Contract) scripts rely on secp256k1 ECDSA
    - Adaptor signatures (a Schnorr extension) enable atomic swaps and cross-chain protocols without on-chain revelation of secrets
  - **Hardware Security Modules and Custody**
    - Enterprise-grade custody relies on secp256k1 operations in [[Hardware Security Module]] (HSM) environments with FIPS-validated implementations
    - [[Multi-Party Computation]] (MPC) threshold signing (e.g., Fireblocks, Unbound Tech) distributes the private key across parties; each party contributes a share of the secp256k1 signing operation without any party ever holding the full key
  - **Zero-Knowledge Applications**
    - secp256k1 arithmetic is used in Pedersen commitments and related [[Zero-Knowledge Proof]] systems (e.g., Bulletproofs) for confidential transaction protocols (Monero uses a different curve but Bulletproofs are secp256k1-compatible)
    - zkSNARK circuits verifying Ethereum ECDSA signatures (e.g., for zkEmail, account abstraction proofs) embed secp256k1 group operations as field constraints

- ### Relationships
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[ECDSA]]
  - uses:: [[Schnorr Signature]]
  - uses:: [[Finite Field Arithmetic]]
  - enables:: [[Digital Signature]]
  - enables:: [[Public-Key Cryptography]]
  - enables:: [[Bitcoin Transaction]]
  - enables:: [[Wallet Address Derivation]]
  - enables:: [[Taproot]]
  - enables:: [[Threshold Signature]]
  - requires:: [[Private Key]]
  - requires:: [[Hash Function]]
  - requires:: [[Random Number Generation]]
  - implements:: [[SEC 2 Standard]]
  - standardizedBy:: [[Standards for Efficient Cryptography Group]]
  - contrastsWith:: [[NIST P-256]]
  - contrastsWith:: [[Ed25519]]
  - contrastsWith:: [[Curve25519]]
  - supports:: [[Bitcoin]]
  - supports:: [[Ethereum]]
  - supports:: [[Nostr Protocol]]
  - supports:: [[Lightning Network]]
  - bridgesTo:: [[Zero-Knowledge Proof]]
  - bridgesTo:: [[Multi-Party Computation]]
  - relatedTo:: [[Key Derivation Function]]
  - relatedTo:: [[Hierarchical Deterministic Wallet]]
  - relatedTo:: [[Blockchain Security]]

- ### Security Considerations
  - **ECDLP Hardness**: Security rests entirely on the infeasibility of solving the discrete logarithm on secp256k1; no sub-exponential classical algorithm is known for this curve
  - **Nonce Reuse Vulnerability**: In ECDSA, reusing the same nonce k for two signatures with the same private key allows trivial private-key recovery — addressed by [[RFC 6979]] deterministic nonce derivation
  - **Side-Channel Attacks**: Naive implementations leak timing and power information; production-grade libraries (libsecp256k1) use constant-time algorithms and scalar blinding
  - **Quantum Threat**: Shor's algorithm breaks ECDLP; long-term stored UTXOs with exposed public keys (P2PK outputs, reused P2PKH addresses) are vulnerable post-quantum; see [[Post-Quantum Cryptography]] migration proposals
  - **Implementation Trust**: The security of secp256k1-based systems depends heavily on CSPRNG quality for key generation; weak entropy sources have led to real-world key extraction (e.g., Android Bitcoin Wallet vulnerability, 2013)
  - **Parameter Transparency**: secp256k1 is chosen specifically because its parameters (a=0, b=7, prime p) are minimally structured, offering higher assurance against potential NIST-style trapdoor concerns

- ### Comparison with Related Curves
  - **NIST P-256 (secp256r1)**: Also 256-bit, but random-seed parameters with opaque derivation; used in TLS, X.509 certificates; slower scalar multiplication; standardised by NIST/NSA; perceived lower transparency
  - **Curve25519 / Ed25519**: Montgomery form curve, Edwards form for signatures; different design philosophy (speed and simplicity); used in TLS 1.3, SSH, Signal Protocol; not used in major Proof-of-Work chains; easier to implement safely
  - **BLS12-381**: Pairing-friendly curve used in Ethereum's consensus layer (BLS signatures for validator attestations); completely different from secp256k1; enables signature aggregation across thousands of validators
  - **secp256r1 vs secp256k1**: The 'r' vs 'k' distinction marks random-seed vs Koblitz construction — this single letter encodes a major philosophical divide in the blockchain cryptography community

- ### Standards and Context
  - **SEC 2 (SECG)**: Primary specification document "SEC 2: Recommended Elliptic Curve Domain Parameters", Certicom Research, versions 1.0 (2000) and 2.0 (2010)
  - **BIP 340**: Bitcoin Improvement Proposal defining Schnorr Signatures for secp256k1 — enables Taproot and MuSig2
  - **BIP 341 / BIP 342**: Taproot and Tapscript spending rules relying on BIP 340 Schnorr
  - **BIP 32**: Hierarchical Deterministic Wallets using secp256k1 child key derivation
  - **RFC 6979**: Deterministic nonce generation for ECDSA (IETF); widely implemented to prevent nonce reuse
  - **ANSI X9.62**: Broader standard for public-key cryptography using elliptic curves, within which secp256k1 parameters fit
  - **EIP-712**: Ethereum typed structured data hashing and signing — relies on secp256k1 ECDSA with a domain separator to prevent cross-protocol signature replay
  - **NIP-01 (Nostr)**: Nostr Implementation Possibility defining secp256k1 Schnorr signatures as the identity and event authentication primitive

- ### Provenance
  - sources:: SEC 2 v2.0 (SECG, 2010), Bitcoin Core libsecp256k1 documentation, BIP 340/341/342, RFC 6979, Ethereum Yellow Paper, NIP-01
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
