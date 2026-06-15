- ### Definition
  - A [[Fork]] is a divergence in a [[Blockchain]] or [[Distributed Systems]] protocol where two or more valid but incompatible execution paths emerge from the same prior state.
  - [[Hard Fork]] events require all nodes to upgrade to continue on the canonical chain; nodes that do not upgrade follow the old rules on a divergent chain.
  - [[Soft Fork]] events tighten validation rules in a backward-compatible manner, so non-upgraded nodes still follow the longest chain.

- ### Overview
  - Forks are a fundamental governance mechanism in permissionless blockchains: when stakeholder groups disagree on protocol direction, they can fork rather than concede.
  - Notable hard forks include Ethereum/Ethereum Classic (2016) after The DAO hack reversal, and Bitcoin/Bitcoin Cash (2017) over block size.
  - In practice, soft forks are safer for network cohesion; hard forks carry the risk of community and asset fragmentation.

- ### Key Aspects
  - **Hard Fork**: Backward-incompatible; requires network-wide upgrade; may produce two live chains.
  - **Soft Fork**: Backward-compatible tightening; only miners/validators need upgrade.
  - **Accidental Fork**: Temporary divergence due to simultaneous valid block production; resolved by longest-chain rule.
  - **Contentious vs coordinated**: Social [[Governance]] determines whether a fork is accepted by the community.

- ### Mechanisms
  - Nodes evaluate the canonical chain according to the heaviest or longest chain rule under their local protocol version.
  - Replay protection mechanisms prevent transactions on one fork from being valid on another.
  - [[Cryptographic Hash]] linkage ensures forks can be traced to their common ancestor block.

- ### Applications
  - Protocol upgrades (EIP activations on Ethereum, BIP activations on Bitcoin).
  - Recovery from catastrophic smart contract exploits.
  - Creation of alternative blockchain networks with modified parameters.

- ### Relationships
  - relatedTo:: [[Consensus Mechanism]]
  - relatedTo:: [[Governance]]
  - relatedTo:: [[Blockchain Data]]
  - relatedTo:: [[Distributed Ledger]]
  - contrastsWith:: [[Backward Compatibility]]
  - hasPart:: [[Hard Fork]]
  - hasPart:: [[Soft Fork]]
  - requires:: [[Social Consensus]]
  - enables:: [[Protocol Upgrade]]
  - dependsOn:: [[Peer-to-Peer Network]]
  - bridgesTo:: [[Distributed Systems]]
  - uses:: [[Cryptographic Hash]]

- ### Provenance
  - updated:: 2026-06-15