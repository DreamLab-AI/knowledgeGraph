public:: true

# ZK-SNARK
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:139ed6b7bd7576c1b5dfdd562d3ee6a61de775ffb45c2dd77763a535309ec5ce",
  "@type": "Page",
  "vc:slug": "zk-snark",
  "title": "ZK-SNARK",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:elliptic-curve-cryptography",
      "vc:label": "Elliptic Curve Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:groth-16",
      "vc:label": "Groth16"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ZK-SNARK"
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
  "@id": "urn:ngm:class:zk-snark",
  "@type": "Class",
  "label": "ZK-SNARK",
  "definition": "A ZK-SNARK (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) is a cryptographic proof system that allows a prover to convince a verifier that a computational statement is true without revealing any information beyond the validity of the statement itself. The proof is succinct — its size and verification time are sub-linear (often constant or logarithmic) relative to the underlying computation — and non-interactive, requiring no back-and-forth messages between prover and verifier. Most constructions rely on bilinear pairings over elliptic curves and require a one-time trusted setup ceremony to generate a structured reference string.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:zero-knowledge-proof",
      "label": "Zero-Knowledge Proof"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:trusted-setup",
        "label": "Trusted Setup"
      },
      {
        "@id": "urn:ngm:class:arithmetic-circuit",
        "label": "Arithmetic Circuit"
      },
      {
        "@id": "urn:ngm:class:bilinear-pairing",
        "label": "Bilinear Pairing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:groth-16",
        "label": "Groth16"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:private-transaction",
        "label": "Private Transaction"
      },
      {
        "@id": "urn:ngm:class:verifiable-computation",
        "label": "Verifiable Computation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:succinct-argument",
        "label": "Succinct Argument"
      },
      {
        "@id": "urn:ngm:class:non-interactive-proof",
        "label": "Non-Interactive Proof"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rank-1-constraint-system",
        "label": "Rank-1 Constraint System"
      },
      {
        "@id": "urn:ngm:class:polynomial-commitment",
        "label": "Polynomial Commitment"
      },
      {
        "@id": "urn:ngm:class:fiat-shamir-heuristic",
        "label": "Fiat-Shamir Heuristic"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:zk-stark",
        "label": "ZK-STARK"
      },
      {
        "@id": "urn:ngm:class:interactive-proof",
        "label": "Interactive Proof"
      },
      {
        "@id": "urn:ngm:class:bulletproof",
        "label": "Bulletproof"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:machine-learning-privacy",
        "label": "Machine Learning Privacy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:plonk",
        "label": "PLONK"
      },
      {
        "@id": "urn:ngm:class:groth-16",
        "label": "Groth16"
      },
      {
        "@id": "urn:ngm:class:zcash",
        "label": "Zcash"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:zero-knowledge-succinct-non-interactive-argument-of-knowledge",
      "label": "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge"
    }
  ],
  "quality": 0.76,
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
  "@id": "urn:visionflow:annotation:link-resolutions:zk-snark:4a358ba9abd9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:139ed6b7bd7576c1b5dfdd562d3ee6a61de775ffb45c2dd77763a535309ec5ce"
  },
  "vc:resolutions": [
    {
      "raw": "[[Elliptic Curve Cryptography]]",
      "resolved": "urn:visionflow:linked:elliptic-curve-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Groth16]]",
      "resolved": "urn:visionflow:linked:groth-16",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
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
  - A ZK-SNARK (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) is a cryptographic proof system that enables a prover to demonstrate knowledge of a witness satisfying a relation — such as knowledge of a secret input to a computation — without disclosing the witness itself. The proof is *succinct* (compact size, fast verification independent of computation complexity) and *non-interactive* (single message from prover to verifier), making ZK-SNARKs far more practical than earlier [[Interactive Proof]] systems. They form a specialised sub-class of [[Zero-Knowledge Proof]] and underpin modern [[Privacy-Preserving Computation]] and [[Verifiable Computation]] at scale.

- ### Overview
  - ZK-SNARKs emerged from theoretical work in the 1980s–1990s on [[Zero-Knowledge Proof]] and interactive argument systems, but became practically deployable only after the 2012–2016 wave of efficient constructions (Pinocchio, [[Groth16]], [[PLONK]]).
  - The defining properties are:
    - **Zero-knowledge**: a valid proof leaks no information about the secret witness beyond the truth of the statement.
    - **Succinct**: proof size is typically hundreds of bytes; verification runs in milliseconds regardless of the computation's complexity.
    - **Non-interactive**: derived via the [[Fiat-Shamir Heuristic]] applied to an interactive protocol, or through a [[Common Reference String]] model generated in a [[Trusted Setup]] ceremony.
    - **Argument of knowledge**: the prover cannot generate a valid proof without actually knowing the witness (computational soundness, not information-theoretic).
  - The practical deployment of ZK-SNARKs was catalysed by [[Zcash]], which used them for shielded transactions on a [[Blockchain]], proving that a transaction is valid (balances, ownership) without disclosing sender, receiver, or amount.
  - Today ZK-SNARKs are central to [[Rollup]] architectures (zkEVM, zkSync, StarkNet, Polygon zkEVM) that compress large batches of [[Smart Contract]] transactions into a single succinct proof, drastically reducing on-chain costs while inheriting [[Blockchain]] security guarantees.

- ### Key Components
  - **[[Arithmetic Circuit]]** — the computation to be proved is first compiled into a flat circuit over a finite field. Every gate is an addition or multiplication.
  - **[[Rank-1 Constraint System]] (R1CS)** — the circuit is translated into a system of rank-1 quadratic constraints: `(A·z) ○ (B·z) = C·z`. This is the canonical intermediate representation for SNARK backends.
  - **[[Polynomial Commitment]]** — the prover commits to polynomials encoding the witness, and the verifier checks relations among committed values. KZG (Kate-Zaverucha-Goldberg) commitments over [[Bilinear Pairing]]-friendly curves (BN254, BLS12-381) are most common.
  - **[[Bilinear Pairing]]** — pairing-based cryptography allows the verifier to check polynomial identities via a small number of pairing operations. This is the algebraic engine that makes sub-linear verification possible.
  - **[[Trusted Setup]] / Structured Reference String (SRS)** — most pairing-based SNARKs require a one-time ceremony (Powers-of-Tau, Zcash Sprout/Sapling ceremonies) producing a common reference string. Compromise of toxic waste in the ceremony would break soundness.
  - **[[Fiat-Shamir Heuristic]]** — converts interactive proof protocols into non-interactive ones by replacing verifier's random challenges with a cryptographic hash, securing the construction in the random oracle model.
  - **Proving key / Verification key** — the SRS is split into a circuit-specific proving key (large, used by prover) and a compact verification key (used by verifier and published on-chain).

- ### Prominent Constructions
  - **[[Groth16]]** — the most efficient pairing-based SNARK for fixed circuits; proof consists of three elliptic curve group elements; fastest on-chain verification; requires circuit-specific trusted setup.
  - **[[PLONK]]** — universal SNARK with a single trusted setup reusable across circuits; uses permutation arguments and [[Polynomial Commitment]]; easier to update to new circuits than Groth16.
  - **Marlin / Spartan / Nova** — more recent constructions offering recursion-friendliness, transparent setups, or folding-scheme efficiency for incremental verifiable computation.
  - **[[ZK-STARK]]** — transparent alternative (no trusted setup) using hash functions; proofs are larger but post-quantum secure; contrasts with ZK-SNARKs on the trust assumption axis.
  - **[[Bulletproof]]** — another trustless argument but not succinct for general computation; more commonly used for range proofs in [[Confidential Transaction]] systems.

- ### Applications / Use Cases
  - **[[Rollup]] / Layer-2 Scaling** — zkSync, Polygon zkEVM, Scroll, and Linea use ZK-SNARKs (or STARKs) to batch thousands of transactions off-chain and post a single validity proof to Ethereum [[Blockchain]], achieving orders-of-magnitude cost reduction while preserving security.
  - **[[Zcash]] Shielded Transactions** — the pioneering production use: ZK-SNARKs prove that shielded notes are unspent and correctly authorised without revealing transaction graph. Sapling used [[Groth16]]; Orchard uses Halo2.
  - **[[Identity Verification]] / Anonymous Credentials** — a user proves they satisfy a credential predicate (e.g. age ≥ 18, nationality) without disclosing the raw credential; ZK-SNARKs enable privacy-preserving KYC.
  - **[[Decentralised Finance]]** — private order books (e.g. Penumbra), dark pools, and private auctions use ZK-SNARKs to enforce correct execution without revealing bids or balances.
  - **[[Smart Contract]] Integrity** — verifiable computation allows off-chain execution of heavy logic (machine-learning inference, genomics) with on-chain SNARK proof of correctness, bridging to [[Machine Learning Privacy]].
  - **[[Supply Chain]] Provenance** — proving product attributes (origin, certifications) without disclosing commercially sensitive supplier data; ZK-SNARKs allow selective disclosure against committed records.
  - **Recursive Proof Composition** — SNARK-within-SNARK (Halo, Nova, SuperNova) enables incremental verifiable computation: each step proves the correctness of all preceding steps, scaling to unbounded-length computations with a constant-size proof.
  - **[[Blockchain]] Interoperability** — light-client bridges prove the validity of a source chain's state transitions to a target chain without running a full node, dramatically reducing trust assumptions.

- ### Relationships
  - subClassOf:: [[Zero-Knowledge Proof]]
  - requires:: [[Elliptic Curve Cryptography]]
  - requires:: [[Trusted Setup]]
  - requires:: [[Arithmetic Circuit]]
  - requires:: [[Bilinear Pairing]]
  - enables:: [[Groth16]]
  - enables:: [[Rollup]]
  - enables:: [[Private Transaction]]
  - enables:: [[Verifiable Computation]]
  - implements:: [[Succinct Argument]]
  - implements:: [[Non-Interactive Proof]]
  - uses:: [[Rank-1 Constraint System]]
  - uses:: [[Polynomial Commitment]]
  - uses:: [[Fiat-Shamir Heuristic]]
  - supports:: [[Blockchain]]
  - supports:: [[Privacy-Preserving Computation]]
  - supports:: [[Identity Verification]]
  - contrastsWith:: [[ZK-STARK]]
  - contrastsWith:: [[Interactive Proof]]
  - contrastsWith:: [[Bulletproof]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[Decentralised Finance]]
  - bridges-to:: [[Machine Learning Privacy]]
  - relatedTo:: [[PLONK]]
  - relatedTo:: [[Zcash]]

- ### Standards & Context
  - No single ISO/NIST standard governs ZK-SNARKs; the field is standardised through academic peer review, open-source libraries, and community-governed specification documents.
  - **ZKProof Standards** (zkproof.org) — community initiative to standardise zero-knowledge proof systems, publishing reference implementations and security definitions.
  - **EIP-196 / EIP-197** (Ethereum Improvement Proposals) — added precompiled contracts for BN254 elliptic curve operations and bilinear pairings to the Ethereum Virtual Machine, making on-chain [[Groth16]] verification economically viable.
  - **Bellman / arkworks / gnark / halo2** — prominent open-source Rust/Go ZK circuit libraries used to implement SNARK-based systems in production; de facto reference implementations.
  - **Powers-of-Tau** — the multi-party computation ceremony for generating universal [[Trusted Setup]] parameters, performed publicly with many independent participants to minimise trust assumptions.
  - Regulatory interest is growing: [[Decentralised Finance]] regulators are examining whether ZK-SNARK privacy features satisfy AML/CFT obligations, creating tension between cryptographic privacy and compliance.

- ### Security Considerations
  - **Trusted Setup Risk** — the [[Trusted Setup]] ceremony produces toxic waste (trapdoor randomness) that must be destroyed; if any single participant colludes or is compromised and retains it, a malicious prover can fabricate valid proofs. Multi-party ceremonies mitigate but do not eliminate this risk.
  - **Soundness Assumptions** — security rests on hardness of the discrete logarithm problem over [[Elliptic Curve Cryptography]] groups and hardness of the knowledge-of-exponent assumption; not post-quantum secure (contrast [[ZK-STARK]]).
  - **Circuit Bugs** — errors in the [[Arithmetic Circuit]] encoding of the statement can silently weaken soundness, allowing provers to prove false statements. Formal verification of circuits (e.g. with Lean, Coq) is an active research area.
  - **Side-Channel Attacks** — prover implementations must be constant-time to avoid leaking witness information through timing or power analysis.
  - **Proof Malleability** — some constructions produce malleable proofs that can be transformed into new valid proofs; protocols must include proof-binding mechanisms where malleability is a concern.

- ### Provenance
  - sources:: Groth (2016) "On the Size of Pairing-Based Non-Interactive Arguments", Ben-Sasson et al. (2014) "Succinct Non-Interactive Zero Knowledge for a von Neumann Architecture", Parno et al. (2013) "Pinocchio", IACR ePrint archive
  - updated:: 2026-06-13
