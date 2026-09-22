public:: true

# Fiat Shamir Heuristic

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:fiat-shamir-heuristic",
  "@type": "Page",
  "title": "Fiat Shamir Heuristic",
  "vc:slug": "fiat-shamir-heuristic",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fiat-shamir-heuristic",
  "@type": "Class",
  "label": "Fiat Shamir Heuristic",
  "definition": "The Fiat-Shamir heuristic is a cryptographic technique that transforms an interactive public-coin proof or identification protocol into a non-interactive one by replacing the verifier's random challenges with the output of a cryptographic hash function applied to the prover's messages. This removes the need for live interaction, allowing proofs and signatures to be generated and verified offline. It is foundational to many digital signature schemes and non-interactive zero-knowledge proofs, with security analysed in the random oracle model.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-protocol",
      "label": "Cryptographic Protocol"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:interactive-proof-system",
        "label": "Interactive Proof System"
      },
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Commitment Scheme"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:bulletproofs",
        "label": "Bulletproofs"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:interactive-proof-system",
        "label": "Interactive Proof System"
      }
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
- The Fiat-Shamir heuristic converts an [[Interactive Proof System]] into a non-interactive one by deriving the verifier's challenge from a [[Hash Function]] over the transcript, drawing on [[Public Key Cryptography]].
- It is foundational to [[Digital Signature]] schemes and non-interactive [[Zero-Knowledge Proof]] systems.
- ### Overview
- In an interactive sigma protocol the verifier sends random challenges; Fiat-Shamir replaces these with a hash of the commitment, making the challenge unpredictable yet reproducible without a live verifier.
- The transformation yields self-contained proofs and signatures that anyone can verify offline, at the cost of relying on the random oracle assumption for the hash.
- It generalises identification schemes into signatures and underpins succinct proof systems.
- ### Key aspects
- Replacement of interactive challenges with hash-derived values.
- Security argued in the random oracle model.
- Conversion of sigma protocols into signatures.
- Need to bind all relevant context into the hash input to prevent forgeries.
- ### Mechanisms
- The prover computes a commitment, hashes it (with the statement and any public context) to obtain the challenge, then produces the response, packaging all three as the proof.
- ### Applications
- Schnorr and EdDSA-style [[Schnorr Signature]] constructions.
- Non-interactive zero-knowledge proofs and [[Bulletproofs]].
- Blockchain identity and authentication protocols.
- Efficient proof systems over [[Elliptic Curve Cryptography]].
- ### Relationships
- uses:: [[Hash Function]]
- uses:: [[Public Key Cryptography]]
- requires:: [[Hash Function]]
- implements:: [[Digital Signature]]
- enables:: [[Zero-Knowledge Proof]]
- enables:: [[Bulletproofs]]
- supports:: [[Schnorr Signature]]
- supports:: [[Elliptic Curve Cryptography]]
- relatedTo:: [[Interactive Proof System]]
- relatedTo:: [[Commitment Scheme]]
- dependsOn:: [[Cryptography]]
- contrastsWith:: [[Interactive Proof System]]
- ### Provenance
- updated:: 2026-06-15
