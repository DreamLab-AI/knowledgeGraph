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