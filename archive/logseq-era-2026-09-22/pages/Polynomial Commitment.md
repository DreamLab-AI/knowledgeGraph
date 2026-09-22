public:: true

# Polynomial Commitment
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:polynomial-commitment",
  "@type": "Page",
  "title": "Polynomial Commitment",
  "vc:slug": "polynomial-commitment",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:polynomial-commitment",
  "@type": "Class",
  "label": "Polynomial Commitment",
  "definition": "A Polynomial Commitment is a cryptographic scheme that lets a prover commit to a polynomial with a short, binding value and later open the commitment at chosen evaluation points without revealing the whole polynomial. Verification of an opening is succinct and the commitment hides the polynomial until opened. Polynomial commitments are a core building block of modern succinct proof systems such as zk-SNARKs and zk-STARKs.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-commitment",
      "label": "Cryptographic Commitment"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Commitment Scheme"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:cryptographic-commitment",
        "label": "Cryptographic Commitment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:finite-field",
        "label": "Finite Field"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "zk-SNARK"
      },
      {
        "@id": "urn:ngm:class:verifiable-computation",
        "label": "Verifiable Computation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:verifiable-computation",
        "label": "Verifiable Computation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:trusted-setup",
        "label": "Trusted Setup"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:finite-field",
        "label": "Finite Field"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:kzg-commitment",
        "label": "KZG Commitment"
      },
      {
        "@id": "urn:ngm:class:reed-solomon-codes",
        "label": "Reed-Solomon Codes"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - A Polynomial Commitment is a cryptographic scheme that lets a prover commit to a polynomial with a short, binding value and later open the commitment at chosen evaluation points without revealing the whole polynomial. Verification of an opening is succinct and the commitment hides the polynomial until opened. Polynomial commitments are a core building block of modern succinct proof systems such as zk-SNARKs and zk-STARKs.
  - Related concepts: [[Cryptographic Commitment]] [[Commitment Scheme]] [[KZG Commitment]] [[Zero-Knowledge Proof]] [[Finite Field]]
- ### Overview
  - A polynomial commitment binds a prover to a polynomial via a compact commitment, then allows them to prove the value of the polynomial at any point with a short proof the verifier checks efficiently. Schemes such as KZG rely on elliptic-curve pairings and a structured reference string, while FRI-based schemes built on Reed-Solomon codes avoid a trusted setup. These primitives let proof systems compress statements about computation into constant or logarithmic-size proofs.
- ### Mechanisms
  - **Commit phase** — produce a short binding, hiding commitment to a polynomial.
  - **Evaluation opening** — prove the polynomial's value at a queried point.
  - **Succinct verification** — check openings far faster than recomputing the polynomial.
  - **Binding and hiding** — the prover cannot equivocate and the polynomial stays hidden.
  - **Setup variants** — pairing-based with trusted setup versus hash-based transparent schemes.
- ### Applications
  - Underpinning zk-SNARK and zk-STARK proof systems.
  - Data availability sampling in scalable blockchains.
  - Verifiable computation and succinct argument protocols.
  - Vector commitments and accumulators derived from polynomials.
- ### Relationships
  - subClassOf:: [[Cryptographic Commitment]]
  - partOf:: [[Commitment Scheme]]
  - implements:: [[Cryptographic Commitment]]
  - uses:: [[Finite Field]]
  - uses:: [[Elliptic Curve Cryptography]]
  - supports:: [[zk-SNARK]]
  - supports:: [[Verifiable Computation]]
  - enables:: [[Zero-Knowledge Proof]]
  - enables:: [[Verifiable Computation]]
  - requires:: [[Trusted Setup]]
  - dependsOn:: [[Finite Field]]
  - relatedTo:: [[KZG Commitment]]
  - relatedTo:: [[Reed-Solomon Codes]]
  - relatedTo:: [[Merkle Tree]]
  - contrastsWith:: [[Merkle Tree]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
