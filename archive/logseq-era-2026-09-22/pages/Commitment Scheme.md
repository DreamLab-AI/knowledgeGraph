public:: true

# Commitment Scheme
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:commitment-scheme",
  "@type": "Page",
  "vc:slug": "commitment-scheme",
  "title": "Commitment Scheme",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:commitment-scheme",
  "@type": "Class",
  "label": "Commitment Scheme",
  "definition": "A commitment scheme is a two-phase cryptographic primitive that allows a party (the committer) to bind itself to a chosen value by producing a short commitment string — analogous to sealing a value in an envelope — that is later opened by revealing the original value and a randomness parameter, with the scheme satisfying two security properties: binding (the committer cannot change the value after committing) and hiding (the commitment reveals nothing about the value before opening). Commitment schemes are foundational building blocks for zero-knowledge proofs, secure multi-party computation, and blockchain protocols.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:blockchain-anchoring",
        "label": "Blockchain Anchoring"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multi-Party Computation"
      },
      {
        "@id": "urn:ngm:class:verifiable-random-function",
        "label": "Verifiable Random Function"
      },
      {
        "@id": "urn:ngm:class:coin-flipping-protocol",
        "label": "Coin Flipping Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:randomness",
        "label": "Randomness"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:pedersen-commitment",
        "label": "Pedersen Commitment"
      },
      {
        "@id": "urn:ngm:class:kzg-polynomial-commitment",
        "label": "KZG Polynomial Commitment"
      },
      {
        "@id": "urn:ngm:class:vector-commitment",
        "label": "Vector Commitment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "zkSNARK"
      },
      {
        "@id": "urn:ngm:class:zk-starks",
        "label": "zkSTARK"
      },
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:encryption-scheme",
        "label": "Encryption Scheme"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge",
        "label": "Zero Knowledge"
      },
      {
        "@id": "urn:ngm:class:merkle-proof",
        "label": "Merkle Proof"
      },
      {
        "@id": "urn:ngm:class:information-theoretic-security",
        "label": "Information-Theoretic Security"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cryptographic-commitment",
      "label": "Cryptographic Commitment"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - A commitment scheme is a cryptographic protocol enabling a prover to commit to a secret value — producing a compact commitment using a [[Hash Function]] or algebraic construction — without disclosing it, and later open the commitment to prove the original value was known. The two core security properties are: binding, which prevents the committer from producing valid openings to two different values after committing (computational or perfect binding depending on the construction); and hiding, which ensures the commitment transcript is indistinguishable from random to an observer (computational or perfect hiding). Simple hash-based commitments use a [[Cryptographic Hash Function]] with a random salt; advanced polynomial commitment schemes such as KZG (Kate-Zaverucha-Goldberg) allow committed polynomials to be evaluated at arbitrary points with succinct proofs.

- ### Relationships
  - Commitment schemes are fundamental components of [[Cryptography]], serving as the binding mechanism beneath [[Zero-Knowledge Proof]] systems: a prover commits to witness values and later opens selected commitments to satisfy the verifier's challenge. [[Hash Function]] constructions (SHA-256, Poseidon) provide the collision resistance guaranteeing binding, while randomness ensures hiding. [[Merkle Tree]] structures are a recursive commitment scheme committing to an ordered list of values with logarithmic-sized membership proofs ([[Merkle Proof]]). [[Blockchain Anchoring]] exploits commitment schemes to permanently bind off-chain data to on-chain hashes. Polynomial commitments enable efficient [[Zero-Knowledge Proof]] systems (PLONK, Groth16, STARKs) by compressing large witness vectors into single field elements.

- ### Content
  - Commitment schemes were introduced to cryptography by Blum in 1983 as a mechanism for coin flipping over telephone, where neither party could cheat by learning the other's choice before committing their own. The formal definition with hiding and binding properties was crystallised by Brassard, Chaum, and Crépeau in their 1988 work on minimum disclosure proofs. Pedersen commitments (1991), based on the discrete logarithm assumption, introduced perfectly hiding and computationally binding commitments from algebraic structures, enabling the first efficient zero-knowledge proofs for committed values without hash functions. Polynomial commitment schemes — particularly KZG commitments introduced in 2010 — enabled the "succinct" part of zk-SNARKs by allowing a proof system to commit to a polynomial and later evaluate it at a verifier-chosen point with a constant-size proof.

  - Technically, a basic hash commitment works as follows: to commit to value `v`, the committer samples randomness `r` and computes `c = H(v || r)`, publishing `c`; to open, the committer reveals `(v, r)`, allowing the verifier to check `H(v || r) == c`. Collision resistance of `H` enforces binding; the randomness `r` ensures hiding. Vector commitments extend this to commit to an ordered vector of values with proofs of individual positions — Merkle trees achieve this logarithmically using [[Merkle Tree]] structures, while KZG polynomial commitments achieve constant-size proofs using pairing-based cryptography over elliptic curves. The Pedersen commitment `C = g^v * h^r` in a group where discrete logarithm is hard provides information-theoretic (perfect) hiding because any value can be opened from the same commitment by choosing the appropriate `r`.

  - Commitment schemes appear in blockchain protocols throughout the transaction and consensus lifecycle. Bitcoin's pay-to-script-hash (P2SH) is a hash commitment to a spending condition revealed only at redemption. Ethereum's state is committed in a Merkle Patricia Trie whose root hash is published in each block header, enabling light client verification. Rollup systems commit to transaction batches via state roots posted to Layer-1, while validity proofs using KZG commitments underpin data availability sampling in Ethereum's danksharding design. Commit-reveal patterns in smart contracts allow participants in auctions, randomness beacons, and voting protocols to submit commitments in an open phase and reveal them simultaneously, preventing front-running.

  - In 2024–2025, commitment schemes are central to the zk-proof renaissance. The PLONK proving system, using KZG polynomial commitments, has been adopted by zkSync, Polygon zkEVM, and Scroll. Transparent commitment schemes not requiring a trusted setup — using hash-based commitments in FRI (Fast Reed-Solomon IOP) — underpin StarkWare's STARK proof system. Lattice-based commitment schemes are in active research as post-quantum alternatives to pairing-based KZG. Commitment schemes also appear in threshold signature protocols, multi-party computation (MPC) for private key generation, and verifiable delay functions (VDFs) used for on-chain randomness in proof-of-stake consensus.

