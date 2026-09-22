public:: true

# Bilinear Pairing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:bilinear-pairing",
  "@type": "Page",
  "title": "Bilinear Pairing",
  "vc:slug": "bilinear-pairing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bilinear-pairing",
  "@type": "Class",
  "label": "Bilinear Pairing",
  "definition": "A bilinear pairing is a mathematical map between two groups to a third group that is linear in each argument separately, commonly realised as the Weil or Tate pairing on elliptic curves over finite fields. Bilinear pairings enable advanced cryptographic constructions including identity-based encryption, short signature schemes (BLS), and zero-knowledge proof systems. They form the algebraic foundation of pairing-based cryptography, which underpins threshold signatures and SNARKs used in modern blockchain protocols.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:security", "label": "Security"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"},
      {"@id": "urn:ngm:class:finite-field-arithmetic", "label": "Finite Field Arithmetic"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:pairing-based-cryptography", "label": "Pairing-Based Cryptography"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:identity-based-encryption", "label": "Identity-Based Encryption"},
      {"@id": "urn:ngm:class:bls-signature", "label": "BLS Signature"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero Knowledge Proof"},
      {"@id": "urn:ngm:class:threshold-signature-scheme", "label": "Threshold Signature Scheme"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:weil-pairing", "label": "Weil Pairing"},
      {"@id": "urn:ngm:class:ate-pairing", "label": "Ate Pairing"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:snark", "label": "SNARK"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptographic-accumulator", "label": "Cryptographic Accumulator"},
      {"@id": "urn:ngm:class:multi-party-computation", "label": "Multi-Party Computation"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rsa", "label": "RSA"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:bn254-curve", "label": "BN254 Curve"},
      {"@id": "urn:ngm:class:bls12-381-curve", "label": "BLS12-381 Curve"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Bilinear Pairing]] is an algebraic map e: G₁ × G₂ → Gₜ between elliptic-curve groups satisfying bilinearity, non-degeneracy, and computability.
  - This structure, realised via the Weil or Tate pairing on specific [[Elliptic Curve Cryptography]] curves, is the engine behind [[Pairing-Based Cryptography]].
  - It enables constructions otherwise infeasible: [[BLS Signature]] aggregation, [[Zero Knowledge Proof]] systems (Groth16, PLONK), and [[Identity-Based Encryption]].

- ### Overview
  - Bilinear pairings were introduced to cryptography by Joux (2000) for tripartite Diffie–Hellman, then weaponised constructively by Boneh–Franklin for IBE and Boneh–Lynn–Shacham for short signatures. The hardness assumptions (decisional Diffie–Hellman in pairing-friendly curves, q-Strong Diffie–Hellman) underpin security proofs. Practical deployment uses pairing-friendly curves such as BN254 (Ethereum, Zcash legacy) and BLS12-381 (Ethereum 2.0, Zcash Sapling). Efficient ate-pairing algorithms reduce the Miller loop cost to roughly 1–2 ms on modern CPUs.

- ### Key aspects
  - **Bilinearity** — e(aP, bQ) = e(P, Q)^(ab) for scalars a, b.
  - **Pairing-friendly curves** — BN254, BLS12-381, MNT curves; chosen for efficient Miller loop.
  - **Security levels** — 128-bit security requires BLS12-381 due to subfield attacks on BN254.
  - **Aggregatability** — BLS signatures can be aggregated: verify n signatures with one pairing check.
  - **SNARK enablement** — polynomial commitment schemes (KZG) use pairings for verification.

- ### Mechanisms
  - The Miller algorithm evaluates a rational function on the curve to compute the pairing value in the extension field Gₜ. A final exponentiation maps to the cyclic subgroup of prime order r. Constant-time implementations guard against side-channel attacks during the loop iterations.

- ### Applications
  - Ethereum 2.0 validator BLS signature aggregation.
  - Groth16 and PLONK zero-knowledge proof verification in blockchains.
  - IBE and attribute-based encryption in enterprise key management.
  - Threshold signature schemes in MPC wallets.

- ### Relationships
  - requires:: [[Elliptic Curve Cryptography]]
  - requires:: [[Finite Field Arithmetic]]
  - uses:: [[Pairing-Based Cryptography]]
  - uses:: [[Public Key Cryptography]]
  - enables:: [[Identity-Based Encryption]]
  - enables:: [[BLS Signature]]
  - enables:: [[Zero Knowledge Proof]]
  - enables:: [[Threshold Signature]]
  - hasPart:: [[Weil Pairing]]
  - supports:: [[Blockchain]]
  - supports:: [[SNARK]]
  - relatedTo:: [[Multi-Party Computation]]
  - relatedTo:: [[Digital Signature]]
  - contrastsWith:: [[RSA]]

- ### Provenance
  - updated:: 2026-06-15
