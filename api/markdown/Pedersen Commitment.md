public:: true

# Pedersen Commitment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c3d57a51ea2305882bfe0c69b4d9ee256a8d4b650ee1404e1e5ff5d6e7aa685f",
  "@type": "Page",
  "vc:slug": "pedersen-commitment",
  "title": "Pedersen Commitment",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:elliptic-curve-cryptography",
      "vc:label": "Elliptic Curve Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-commitment",
      "vc:label": "Cryptographic Commitment"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Pedersen Commitment"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pedersen-commitment",
  "@type": "Class",
  "label": "Pedersen Commitment",
  "definition": "A Pedersen commitment is a cryptographic commitment scheme in which a committer binds to a secret value v by computing C = g^v * h^r, where g and h are independent group generators and r is a random blinding factor. The scheme is computationally binding under the discrete logarithm assumption and unconditionally (information-theoretically) hiding, meaning an adversary with unlimited computation cannot determine the committed value from C alone. Crucially, Pedersen commitments are additively homomorphic: the product of two commitments C(v1, r1) * C(v2, r2) equals C(v1+v2, r1+r2), enabling arithmetic on committed values without revealing them. This property makes Pedersen commitments foundational to confidential transactions, range proofs, and zero-knowledge proof systems.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-commitment",
      "label": "Cryptographic Commitment"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:pedersen-commitment-scheme",
      "label": "Pedersen Commitment Scheme"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:discrete-logarithm-problem",
        "label": "Discrete Logarithm Problem"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:random-oracle",
        "label": "Random Oracle"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:confidential-transaction",
        "label": "Confidential Transaction"
      },
      {
        "@id": "urn:ngm:class:range-proof",
        "label": "Range Proof"
      },
      {
        "@id": "urn:ngm:class:bulletproofs",
        "label": "Bulletproofs"
      },
      {
        "@id": "urn:ngm:class:secure-multiparty-computation",
        "label": "Secure Multiparty Computation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      },
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Commitment Scheme"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-group",
        "label": "Elliptic Curve Group"
      },
      {
        "@id": "urn:ngm:class:blinding-factor",
        "label": "Blinding Factor"
      },
      {
        "@id": "urn:ngm:class:group-generator",
        "label": "Group Generator"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:privacy-preserving-protocol",
        "label": "Privacy-Preserving Protocol"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:verifiable-secret-sharing",
        "label": "Verifiable Secret Sharing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:hash-commitment",
        "label": "Hash Commitment"
      },
      {
        "@id": "urn:ngm:class:elgamal-encryption",
        "label": "ElGamal Encryption"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:schnorr-protocol",
        "label": "Schnorr Protocol"
      },
      {
        "@id": "urn:ngm:class:sigma-protocol",
        "label": "Sigma Protocol"
      },
      {
        "@id": "urn:ngm:class:non-interactive-zero-knowledge",
        "label": "Non-Interactive Zero-Knowledge"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain-privacy",
        "label": "Blockchain Privacy"
      },
      {
        "@id": "urn:ngm:class:monero",
        "label": "Monero"
      }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:pedersen-commitment:ca23ea684f43",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c3d57a51ea2305882bfe0c69b4d9ee256a8d4b650ee1404e1e5ff5d6e7aa685f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Elliptic Curve Cryptography]]",
      "resolved": "urn:visionflow:linked:elliptic-curve-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Commitment]]",
      "resolved": "urn:visionflow:linked:cryptographic-commitment",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A Pedersen commitment is a [[Cryptographic Commitment]] scheme that allows a prover to commit to a secret value without revealing it, while retaining the ability to open (reveal) the commitment at a later stage. Introduced by Torben Pryds Pedersen in 1991, it operates over a cyclic group — most commonly an [[Elliptic Curve Group]] — with two independent generators g and h, producing a commitment C = g^v · h^r where v is the secret value and r is a random [[Blinding Factor]]. The construction is computationally binding (under the [[Discrete Logarithm Problem]]) and unconditionally hiding, and its additive [[Homomorphic Encryption]] property makes it indispensable in [[Zero-Knowledge Proof]] systems, [[Confidential Transaction]] schemes, and [[Secure Multiparty Computation]] protocols.

- ### Overview
  - Pedersen commitments solve a fundamental challenge in cryptographic protocols: how can a party prove they have committed to a value without yet revealing it, and how can they later prove the opened value is genuine?
  - The scheme achieves this through two algebraic properties:
    - **Hiding**: the commitment C = g^v · h^r is statistically indistinguishable from a random group element when r is chosen uniformly, so C reveals no information about v whatsoever. This is unconditional — even a computationally unbounded adversary cannot recover v from C alone.
    - **Binding**: changing the committed value after publication requires finding a collision in the [[Discrete Logarithm Problem]], which is computationally infeasible for groups of cryptographic size. A committer is therefore bound to a single value once C is published.
  - The scheme was proposed by Pedersen in his 1991 paper "Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing" as part of a [[Verifiable Secret Sharing]] construction.
  - Unlike [[Hash Commitment]] schemes (which are computationally hiding but information-theoretically binding), Pedersen commitments swap these security levels: they are computationally binding but information-theoretically hiding. This trade-off is often preferable in protocols where hiding privacy must be preserved even against future quantum adversaries, while binding security only needs to hold computationally during the protocol's lifetime.
  - The additive homomorphic property — C(v1, r1) · C(v2, r2) = C(v1+v2, r1+r2) — enables arithmetic directly on committed values without ever decrypting them, which is a cornerstone of modern privacy-preserving cryptography.

- ### Key Mechanisms
  - **Setup (Common Reference String)**
    - Choose a prime-order group G of order q (typically derived from an [[Elliptic Curve Cryptography]] curve such as secp256k1 or Ristretto255).
    - Select two independent generators g and h such that the discrete log log_g(h) is unknown to all parties. This is critical: if any party knows log_g(h), they can break binding.
    - The pair (G, q, g, h) forms the public commitment key.
  - **Commit Phase**
    - The committer selects secret value v ∈ Z_q and blinding factor r ∈ Z_q uniformly at random.
    - Computes commitment C = g^v · h^r (in multiplicative notation) or v·G + r·H (in additive [[Elliptic Curve Group]] notation).
    - Publishes C; keeps (v, r) secret.
  - **Open Phase**
    - The committer reveals (v, r).
    - The verifier recomputes C' = g^v · h^r and checks C' = C.
  - **Additive Homomorphism**
    - Given C1 = g^v1 · h^r1 and C2 = g^v2 · h^r2, the product C1 · C2 = g^(v1+v2) · h^(r1+r2) is a valid commitment to v1+v2.
    - This enables verifiers to check arithmetic relationships between committed values without learning the values themselves.
  - **Vector Pedersen Commitments**
    - Generalise to commit to a vector (v1, …, vn) using n+1 generators: C = g1^v1 · g2^v2 · … · gn^vn · h^r. Used extensively in [[Bulletproofs]] and inner-product argument constructions.

- ### Applications and Use Cases
  - **Confidential Transactions ([[Blockchain Privacy]])**
    - [[Confidential Transaction]] schemes (pioneered by Greg Maxwell for Bitcoin and deployed in [[Monero]] via RingCT, and in MimbleWimble-based chains like Grin and Beam) use Pedersen commitments to hide transaction amounts while allowing network validators to verify that no coins are created from nothing (sum-to-zero checks exploit the homomorphic property).
  - **[[Range Proof]] Systems**
    - To prevent negative balances or overflow in confidential transactions, [[Range Proof]] protocols prove that a committed value v lies in [0, 2^n) without revealing v. [[Bulletproofs]] and Bulletproofs+ are efficient range proof constructions built directly on vector Pedersen commitments.
  - **[[Zero-Knowledge Proof]] Protocols**
    - Pedersen commitments are a building block in [[Sigma Protocol]] structures, [[Non-Interactive Zero-Knowledge]] proofs via the Fiat-Shamir transform, and polynomial commitment schemes used in STARKs and zk-SNARKs.
  - **[[Secure Multiparty Computation]]**
    - In MPC protocols, Pedersen commitments allow parties to commit to their secret inputs before revealing them, preventing adversarial adaptation of inputs after seeing others' commitments.
  - **[[Verifiable Secret Sharing]]**
    - Feldman's and Pedersen's own VSS schemes use commitments to allow shareholders to verify their shares are consistent without revealing the secret, foundational to distributed key generation (DKG) in threshold cryptography.
  - **[[Digital Signature]] Schemes**
    - The [[Schnorr Protocol]] nonce commitment step uses a Pedersen-like structure. Modern threshold Schnorr schemes (e.g. FROST) use Pedersen commitments for binding participants to their nonce contributions.
  - **Anonymous Credential Systems**
    - [[Privacy-Preserving Protocol]] systems such as CL signatures and BBS+ signatures rely on Pedersen vector commitments to encode attribute sets that can be selectively disclosed in zero-knowledge.
  - **Voting and Auction Protocols**
    - Electronic voting schemes use commitments to seal ballots before tallying; the homomorphic property allows encrypted votes to be tallied without decrypting individual ballots.

- ### Relationships
  - subClassOf:: [[Cryptographic Commitment]]
  - requires:: [[Discrete Logarithm Problem]]
  - requires:: [[Elliptic Curve Cryptography]]
  - requires:: [[Random Oracle]]
  - enables:: [[Zero-Knowledge Proof]]
  - enables:: [[Confidential Transaction]]
  - enables:: [[Range Proof]]
  - enables:: [[Bulletproofs]]
  - enables:: [[Secure Multiparty Computation]]
  - implements:: [[Homomorphic Encryption]]
  - implements:: [[Commitment Scheme]]
  - uses:: [[Elliptic Curve Group]]
  - uses:: [[Blinding Factor]]
  - uses:: [[Group Generator]]
  - supports:: [[Privacy-Preserving Protocol]]
  - supports:: [[Digital Signature]]
  - supports:: [[Verifiable Secret Sharing]]
  - contrastsWith:: [[Hash Commitment]]
  - contrastsWith:: [[ElGamal Encryption]]
  - relatedTo:: [[Schnorr Protocol]]
  - relatedTo:: [[Sigma Protocol]]
  - relatedTo:: [[Non-Interactive Zero-Knowledge]]
  - bridges-to:: [[Blockchain Privacy]]
  - bridges-to:: [[Monero]]

- ### Security Properties
  - **Computational Binding** — security reduces to the hardness of the [[Discrete Logarithm Problem]] in the underlying group. A cheating committer who can open C to two different values (v, r) and (v', r') would know log_g(h), which is assumed infeasible.
  - **Unconditional (Perfect) Hiding** — for any committed value v, there exists a blinding factor r such that C = g^v · h^r equals any target group element. The distribution of commitments is independent of v, so C reveals zero information.
  - **Post-Quantum Considerations** — Pedersen commitments are insecure against a quantum adversary with access to Shor's algorithm, which solves the discrete log problem in polynomial time. Research into lattice-based commitment schemes (e.g. Ajtai commitments) explores post-quantum alternatives that preserve homomorphism.
  - **Trusted Setup Requirement** — the generators g and h must be chosen such that log_g(h) is unknown. Schemes using a [[Random Oracle]] (hash-to-curve) or verifiable random beacons ensure this without a trusted third party.

- ### Variants and Extensions
  - **Pedersen Hash** — a collision-resistant hash function C(v) = g^v · h using a fixed blinding factor, used in Zcash's Sapling circuit.
  - **Vector Pedersen Commitment** — commits to a tuple of values simultaneously using multiple generators, the foundation of [[Bulletproofs]].
  - **KZG Polynomial Commitment** — a pairing-based extension enabling succinct openings at arbitrary points; shares the Pedersen philosophy of hiding-then-reveal but uses bilinear pairings rather than discrete logs alone.
  - **Lattice-Based Commitments** — Ajtai-style commitments over module lattices preserve additive homomorphism and are conjectured post-quantum secure, an active research direction.
  - **Generalised Pedersen (GSW)** — extensions over groups with efficiently computable pairings support multiplication of committed values, bridging towards fully [[Homomorphic Encryption]].

- ### Standards and Context
  - No single ISO or IETF RFC specifically standardises Pedersen commitments, but they appear in:
    - **IETF draft-irtf-cfrg-voprf** — verifiable oblivious PRF constructions referencing Pedersen-style binding.
    - **BIP-0340 (Schnorr/Taproot)** — Bitcoin's Schnorr signature standard uses the same discrete-log group and commitment discipline.
    - **MimbleWimble protocol specification** — defines confidential transaction rules based on Pedersen commitment balancing.
    - **Bulletproofs paper (Bünz et al., 2018)** — the canonical specification for range proofs over Pedersen vector commitments.
    - **NIST PQC standardisation** — indirectly drives research into post-quantum commitment alternatives.
  - Deployed in production systems: [[Monero]] (RingCT), Grin, Beam, Liquid Network (Bitcoin sidechain), and zkVM proving systems such as RISC Zero.

- ### Provenance
  - sources:: Pedersen 1991 "Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing"; Bünz et al. 2018 "Bulletproofs: Short Proofs for Confidential Transactions and More"; Maxwell 2015 "Confidential Transactions"
  - updated:: 2026-06-13
