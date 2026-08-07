public:: true

# KZG Polynomial Commitment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:228b6c8e223c72d4da64bc37ae20b5171b276972a27c322613a08bd6ec47a499",
  "@type": "Page",
  "vc:slug": "kzg-polynomial-commitment",
  "title": "KZG Polynomial Commitment",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:polynomial-commitment",
      "vc:label": "Polynomial Commitment"
    },
    {
      "@id": "urn:visionflow:linked:trusted-setup",
      "vc:label": "Trusted Setup"
    },
    {
      "@id": "urn:visionflow:linked:data-availability",
      "vc:label": "Data Availability"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kzg-polynomial-commitment",
  "@type": "Class",
  "label": "KZG Polynomial Commitment",
  "definition": "The Kate-Zaverucha-Goldberg polynomial commitment scheme, which uses elliptic curve pairings and a structured reference string from a trusted setup to commit to a polynomial with a single constant-size group element and prove any evaluation with a constant-size opening proof; its succinctness underpins SNARK constructions such as PLONK and Ethereum's data availability sampling via blob commitments in proto-danksharding.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:polynomial-commitment",
    "label": "Polynomial Commitment"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:trusted-setup",
        "label": "Trusted Setup"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-availability-sampling",
        "label": "Data Availability Sampling"
      },
      {
        "@id": "urn:ngm:class:danksharding",
        "label": "Danksharding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Commitment Scheme"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The Kate-Zaverucha-Goldberg polynomial commitment scheme, which uses elliptic curve pairings and a structured reference string from a trusted setup to commit to a polynomial with a single constant-size group element and prove any evaluation with a constant-size opening proof; its succinctness underpins SNARK constructions such as PLONK and Ethereum's data availability sampling via blob commitments in proto-danksharding."

- ### Semantic Classification
  - owl-class:: blockchain:KZGPolynomialCommitment
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Polynomial Commitment]]
  - requires:: [[Trusted Setup]]
  - enables:: [[Data Availability]] sampling
  - related-to:: [[Commitment Scheme]]

- ### Content

  ## Definition

  The **KZG polynomial commitment**, introduced by Kate, Zaverucha, and Goldberg in 2010, lets a prover commit to a polynomial f(X) of bounded degree and later convince a verifier of any evaluation f(z) = y without revealing the polynomial. The commitment is a single elliptic curve group element — the polynomial evaluated "in the exponent" at a secret point τ embedded in a structured reference string — and each opening proof is likewise one group element, verified with a pairing equation. Both commitment and proof are constant size regardless of the polynomial's degree, which is the property that sets KZG apart from Merkle-tree or FRI-based alternatives.

  The price of this succinctness is a **trusted setup**: someone must generate powers of the secret τ and then destroy it. If τ leaks, false evaluation proofs can be forged. Production deployments mitigate this with large multi-party ceremonies — Ethereum's KZG ceremony for EIP-4844 attracted over 140,000 contributors, and the setup remains sound if even one participant discarded their secret honestly.

  KZG is the workhorse commitment inside pairing-based SNARKs (PLONK, Marlin, and their descendants), where circuit constraints are encoded as polynomial identities checked at a random point. It is also the foundation of Ethereum's rollup data layer: each blob introduced by proto-danksharding (EIP-4844) is committed with KZG, and because KZG behaves linearly under erasure coding, light clients can verify small random samples of a blob against the commitment — the core trick behind [[Data Availability]] sampling and full danksharding.

  ## Technical Details

  Setup publishes {g^(τ^i)} for i up to the degree bound. Committing to f computes C = g^f(τ) as a linear combination of these powers. To open at z, the prover computes the quotient q(X) = (f(X) − y)/(X − z) — a polynomial precisely when f(z) = y — and sends π = g^q(τ). The verifier checks one pairing equation, e(C / g^y, h) = e(π, h^(τ−z)), in constant time. Batch openings amortise many evaluations into a single proof.

  Trade-offs against alternatives are well mapped: FRI-based commitments (used in STARKs) need no trusted setup and are plausibly post-quantum but have larger, logarithmic-size proofs; inner-product arguments (Bulletproofs) avoid setup at the cost of linear verification. KZG's pairing dependence means it is not post-quantum secure, which motivates ongoing research into lattice-based and hash-based successors for Ethereum's longer-term roadmap.

  ## Current Landscape

  - **Mainnet debut**: KZG blob commitments went live with the Cancun-Deneb ("Dencun") upgrade on 13 March 2024 (EIP-4844, proto-danksharding), each blob committing 4,096 field elements; blob data is pruned after 4,096 epochs (~18 days) while the KZG commitment persists in the execution layer.
  - **Trusted setup ceremony**: the EIP-4844 KZG Summoning Ceremony ran January–March 2023 and drew over 141,000 contributions, operating under a 1-of-N trust assumption (secure if at least one participant discarded their secret).
  - **Capacity scaling**: the Pectra upgrade (7 May 2025, EIP-7691) doubled the blob target from 3 to 6 and the maximum from 6 to 9.
  - **Data availability sampling shipped**: the Fusaka upgrade (3 December 2025) activated PeerDAS (EIP-7594), the 1-D data-availability-sampling scheme that lets nodes verify random blob samples against KZG commitments — the first production step toward full danksharding.
  - **Security assurance**: in 2025 the Ethereum Foundation commissioned zkSecurity to audit the PeerDAS KZG libraries (blst, c-kzg-4844, rust-eth-kzg, go-eth-kzg), reflecting KZG's status as safety-critical consensus infrastructure.

  **Sources**:
  - https://ethereum.org/roadmap/danksharding/
  - https://security.ethereum.org/audits/2025_KZG_Audit_Report_zkSecurity.pdf

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
