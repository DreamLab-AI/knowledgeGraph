public:: true

# State Proof
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:74d898e3370968c8a62bbaaf3149ae13b44f37d55310923da1770827bb49de68",
  "@type": "Page",
  "vc:slug": "state-proof",
  "title": "State Proof",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-proof",
      "vc:label": "Cryptographic Proof"
    },
    {
      "@id": "urn:visionflow:linked:light-client",
      "vc:label": "Light Client"
    },
    {
      "@id": "urn:visionflow:linked:algorand",
      "vc:label": "Algorand"
    },
    {
      "@id": "urn:visionflow:linked:merkle-tree",
      "vc:label": "Merkle Tree"
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
  "@id": "urn:ngm:class:state-proof",
  "@type": "Class",
  "label": "State Proof",
  "definition": "A compact cryptographic attestation that a particular state — an account balance, storage slot, or block commitment — is part of a blockchain's canonical history, verifiable by anyone without replaying the chain or trusting an intermediary; ranging from Merkle inclusion proofs against a state root to Algorand-style aggregate-signature certificates, state proofs are the primitive that lets light clients and cross-chain bridges verify one chain's state from another vantage point trustlessly.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-proof",
    "label": "Cryptographic Proof"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:light-client-verification",
        "label": "Light Client Verification"
      },
      {
        "@id": "urn:ngm:class:cross-chain-interoperability",
        "label": "Cross-Chain Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:vector-commitment",
        "label": "Vector Commitment"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:algorand",
        "label": "Algorand"
      },
      {
        "@id": "urn:ngm:class:light-client",
        "label": "Light Client"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A compact cryptographic attestation that a particular state — an account balance, storage slot, or block commitment — is part of a blockchain's canonical history, verifiable by anyone without replaying the chain or trusting an intermediary; ranging from Merkle inclusion proofs against a state root to Algorand-style aggregate-signature certificates, state proofs are the primitive that lets light clients and cross-chain bridges verify one chain's state from another vantage point trustlessly."

- ### Semantic Classification
  - owl-class:: blockchain:StateProof
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Cryptographic Proof]]
  - enables:: [[Light Client Verification]], [[Cross-Chain Interoperability]]
  - uses:: [[Merkle Tree]], [[Vector Commitment]]
  - related-to:: [[Algorand]], [[Light Client]]

- ### Content

  ## Definition

  A **state proof** is a succinct piece of evidence that some claimed state genuinely belongs to a blockchain's canonical history, checkable by a verifier who holds only a small trusted anchor — typically a state root or a validator-set commitment — rather than the full chain. The simplest form is a [[Merkle Tree]] inclusion proof: given a block header's state root, a logarithmic-size path of hashes proves that a specific account balance or storage value is committed under that root. Ethereum exposes exactly this via `eth_getProof`, and every major chain's light-client protocol is built on the same idea.

  The term also names a specific, more ambitious construction: **Algorand State Proofs**, introduced in 2022 from the "Compact Certificates of Collective Knowledge" research. Every 256 rounds, Algorand participants sign a [[Vector Commitment]] to the recent block history using post-quantum Falcon signatures; a relay aggregates a weighted sample of these signatures into a compact certificate proving that holders of a supermajority of stake attested to that history. Crucially, verifying such a proof requires no trust in validators' ongoing honesty beyond the chain's own assumptions, and no re-execution — which is what distinguishes proof-based bridging from the multisig and oracle bridges whose custodial trust has been the root cause of the largest DeFi exploits.

  State proofs are therefore the load-bearing primitive for [[Light Client Verification]] (a wallet on a phone verifying its balance without a full node) and trust-minimised [[Cross-Chain Interoperability]] (chain B's contracts verifying chain A's state on-chain, as in IBC or Algorand's State Proof-based bridges).

  ## Technical Details

  - **Merkle/Patricia proofs**: O(log n) sibling hashes against a state root; Ethereum's Merkle-Patricia trie, with Verkle trees (polynomial vector commitments) proposed to shrink witnesses dramatically.
  - **Consensus proofs**: evidence that a block header itself is canonical — sync-committee signatures (Ethereum light clients), Tendermint validator signatures (IBC), or Algorand's aggregated Falcon certificates.
  - **Algorand specifics**: post-quantum secure (Falcon), produced every 256 rounds, verifiable by a constant-size verifier; consumed by the London Bridge design for trustless cross-chain verification.
  - **ZK state proofs**: SNARK-based systems (e.g. zk light clients such as Succinct/Telepathy-style designs, Mina's recursive chain proof) compress consensus verification into a single succinct proof cheap enough to verify inside a smart contract.
  - **Trade-offs**: proof size and verification gas versus trust assumptions; multisig bridges are cheap but custodial, Merkle+consensus proofs are trust-minimised but heavier, ZK proofs minimise both at the cost of proving infrastructure.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
