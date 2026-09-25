A two-way peg (2WP) is a blockchain mechanism that enables assets to be transferred bidirectionally between a parent chain and a sidechain, with the asset supply conserved across both chains. When an asset is locked on the parent chain, an equivalent representation is minted on the sidechain; when returned to the parent chain, the sidechain representation is burned and the original asset is unlocked. Two-way pegs are the foundational primitive for sidechain interoperability, enabling specialised execution environments whilst tethering their native asset to a more secure base layer.

### Overview

- Two-way pegs were formally described in the Blockstream sidechain whitepaper (Back et al., 2014). A federated peg relies on a set of functionaries (using [[Threshold Signature]] schemes) to attest peg-in and peg-out transactions. Drivechain proposed a miner-enforced variant using hashrate escrow. Trustless 2WPs require the parent chain to verify light-client proofs of sidechain state, which is not natively possible on Bitcoin without a soft fork. Modern rollups achieve near-trustless pegs via [[Merkle Proof]] verification or validity proofs. Security of the peg is bounded by the weaker of the two chains' security models.

### Key aspects

- **Peg-in** — lock assets in parent-chain escrow; mint equivalent on sidechain.
- **Peg-out** — burn sidechain representation; prove burn to parent; unlock original.
- **Federated peg** — custodians hold keys, risk counterparty compromise.
- **Drivechain** — miners vote on peg-out; slow but reduces custodian trust.
- **Validity-proof peg** — ZK proof of sidechain execution ensures trustless exit.

### Mechanisms

- Peg-in: user sends to a P2SH/script address; functionaries observe and collectively sign a transaction minting wrapped tokens on the sidechain. Peg-out: user burns wrapped tokens; SPV proof or threshold-signed attestation is submitted to the parent chain; escrow contract releases funds after challenge period or direct proof verification.

### Applications

- Liquid Network (Bitcoin sidechain for exchanges and institutions).
- RSK (Bitcoin-pegged EVM sidechain for smart contracts).
- Ethereum bridge to Polygon PoS chain.
- Layer-2 withdrawal bridges (Optimism, Arbitrum fraud-proof exits).

### Provenance

