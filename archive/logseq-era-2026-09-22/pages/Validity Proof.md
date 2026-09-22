public:: true

# Validity Proof
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:validity-proof", "@type":"Page", "title":"Validity Proof", "vc:slug":"validity-proof", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:validity-proof",
  "@type": "Class",
  "label": "Validity Proof",
  "definition": "A validity proof is a cryptographic proof, typically a succinct zero-knowledge proof, that attests that a batch of state transitions was computed correctly according to the rules of a system. In layer-2 rollups it allows a base chain to accept a compressed state update after verifying a single proof, without re-executing the underlying transactions. Validity proofs give immediate, trustless finality in contrast to optimistic schemes that rely on fraud challenges.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-proof-system",
      "label": "Cryptographic Proof System"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "zk-SNARK"
      },
      {
        "@id": "urn:ngm:class:zk-starks",
        "label": "zk-STARK"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proof"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK-Rollup"
      },
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer-2 Scaling"
      }
    ],
    "verifies": [
      {
        "@id": "urn:ngm:class:state-transition",
        "label": "State Transition"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zk-sync",
        "label": "zkSync"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK-Rollup"
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
  - A validity proof is a [[Cryptographic Proof System]] output attesting that a batch of [[State Transition]] computations followed the system's rules.
  - It is realised with succinct [[Zero-Knowledge Proof]] constructions such as [[zk-SNARK]] and [[zk-STARK]].
  - It gives a base chain immediate, trustless finality without re-executing transactions.
- ### Overview
  - In a [[ZK-Rollup]], an operator executes many transactions off-chain, computes a new state root, and generates a validity proof that the transition is correct.
  - The base chain verifies only the compact proof, which is far cheaper than re-running the transactions, achieving large throughput gains.
  - Because correctness is proven cryptographically, withdrawals and state updates finalise as soon as the proof is verified.
  - This contrasts with optimistic rollups, which assume validity and rely on a challenge window during which fraud proofs may dispute a batch.
- ### Mechanisms
  - Circuit: the state-transition function is expressed as an arithmetic circuit or trace.
  - Proving: a prover generates a succinct argument that a satisfying witness exists.
  - Verification: an on-chain verifier checks the proof in time independent of the batch size.
  - Aggregation: proofs may be recursively composed to amortise verification cost.
- ### Applications
  - Layer-2 scaling of blockchains via ZK-rollups with fast finality.
  - Trustless bridges and cross-domain messaging proving correct state.
  - Verifiable off-chain computation and privacy-preserving applications.
- ### Relationships
  - hasPart:: [[zk-SNARK]]
  - hasPart:: [[zk-STARK]]
  - implements:: [[Zero-Knowledge Proof]]
  - uses:: [[Zero-Knowledge Proof]]
  - contrastsWith:: [[Fraud Proof]]
  - enables:: [[ZK-Rollup]]
  - enables:: [[Scalability]]
  - supports:: [[Layer-2 Scaling]]
  - verifies:: [[State Transition]]
  - relatedTo:: [[zkSync]]
  - relatedTo:: [[Blockchain]]
  - bridgesTo:: [[ZK-Rollup]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
