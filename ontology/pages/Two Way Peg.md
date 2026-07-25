public:: true

# Two Way Peg

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:two-way-peg",
  "@type": "Page",
  "title": "Two Way Peg",
  "vc:slug": "two-way-peg",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:two-way-peg",
  "@type": "Class",
  "label": "Two Way Peg",
  "definition": "A two-way peg (2WP) is a blockchain mechanism that enables assets to be transferred bidirectionally between a parent chain and a sidechain, with the asset supply conserved across both chains. When an asset is locked on the parent chain, an equivalent representation is minted on the sidechain; when returned to the parent chain, the sidechain representation is burned and the original asset is unlocked. Two-way pegs are the foundational primitive for sidechain interoperability, enabling specialised execution environments whilst tethering their native asset to a more secure base layer.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:sidechain",
      "label": "Sidechain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:lock-and-mint",
        "label": "Lock and Mint"
      },
      {
        "@id": "urn:ngm:class:burn-and-release",
        "label": "Burn and Release"
      },
      {
        "@id": "urn:ngm:class:federation",
        "label": "Federation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      },
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:cross-chain-interoperability",
        "label": "Cross-Chain Interoperability"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature Scheme"
      },
      {
        "@id": "urn:ngm:class:merkle-proof",
        "label": "Merkle Proof"
      },
      {
        "@id": "urn:ngm:class:spv-verification",
        "label": "SPV Verification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-rollup",
        "label": "Zero Knowledge Rollup"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:one-way-peg",
        "label": "One Way Peg"
      },
      {
        "@id": "urn:ngm:class:wrapped-token",
        "label": "Wrapped Token"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
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
  - A [[Two Way Peg]] is a blockchain protocol that locks assets on one chain and releases equivalent representations on another, enabling round-trip asset portability.
  - It is the core mechanism of [[Sidechain]] architecture: users peg assets to a sidechain to access its capabilities (lower fees, higher throughput, specialised features), then redeem back to the parent chain.
  - Implementations range from federated multisig custodians to trustless SPV-proof-driven or [[Smart Contract]]-enforced variants.

- ### Overview
  - Two-way pegs were formally described in the Blockstream sidechain whitepaper (Back et al., 2014). A federated peg relies on a set of functionaries (using [[Threshold Signature]] schemes) to attest peg-in and peg-out transactions. Drivechain proposed a miner-enforced variant using hashrate escrow. Trustless 2WPs require the parent chain to verify light-client proofs of sidechain state, which is not natively possible on Bitcoin without a soft fork. Modern rollups achieve near-trustless pegs via [[Merkle Proof]] verification or validity proofs. Security of the peg is bounded by the weaker of the two chains' security models.

- ### Key aspects
  - **Peg-in** — lock assets in parent-chain escrow; mint equivalent on sidechain.
  - **Peg-out** — burn sidechain representation; prove burn to parent; unlock original.
  - **Federated peg** — custodians hold keys, risk counterparty compromise.
  - **Drivechain** — miners vote on peg-out; slow but reduces custodian trust.
  - **Validity-proof peg** — ZK proof of sidechain execution ensures trustless exit.

- ### Mechanisms
  - Peg-in: user sends to a P2SH/script address; functionaries observe and collectively sign a transaction minting wrapped tokens on the sidechain. Peg-out: user burns wrapped tokens; SPV proof or threshold-signed attestation is submitted to the parent chain; escrow contract releases funds after challenge period or direct proof verification.

- ### Applications
  - Liquid Network (Bitcoin sidechain for exchanges and institutions).
  - RSK (Bitcoin-pegged EVM sidechain for smart contracts).
  - Ethereum bridge to Polygon PoS chain.
  - Layer-2 withdrawal bridges (Optimism, Arbitrum fraud-proof exits).

- ### Relationships
  - hasPart:: [[Lock and Mint]]
  - hasPart:: [[Federation]]
  - implements:: [[Sidechain]]
  - implements:: [[Cross-Chain Bridge]]
  - requires:: [[Smart Contract]]
  - requires:: [[Cryptographic Proof]]
  - enables:: [[Layer 2 Scaling]]
  - enables:: [[Cross-Chain Interoperability]]
  - enables:: [[Decentralised Finance]]
  - uses:: [[Threshold Signature]]
  - uses:: [[Merkle Proof]]
  - relatedTo:: [[Atomic Swap]]
  - relatedTo:: [[Optimistic Rollup]]
  - contrastsWith:: [[One Way Peg]]
  - dependsOn:: [[Consensus Mechanism]]

- ### Provenance
  - updated:: 2026-06-15
