A Fork in the context of blockchain and distributed systems is a divergence in the protocol rules or chain history that results in two or more distinct execution paths from a common ancestor state. Hard forks introduce backward-incompatible rule changes requiring all participants to upgrade, potentially creating a permanently divergent chain. Soft forks introduce backward-compatible tightening of rules. Forks can be planned governance events (protocol upgrades) or unintended consequences of network partitions or competing miner/validator behaviour.

### Overview

- Forks are a fundamental governance mechanism in permissionless blockchains: when stakeholder groups disagree on protocol direction, they can fork rather than concede.
- Notable hard forks include Ethereum/Ethereum Classic (2016) after The DAO hack reversal, and Bitcoin/Bitcoin Cash (2017) over block size.
- In practice, soft forks are safer for network cohesion; hard forks carry the risk of community and asset fragmentation.

### Key Aspects

- **Hard Fork**: Backward-incompatible; requires network-wide upgrade; may produce two live chains.
- **Soft Fork**: Backward-compatible tightening; only miners/validators need upgrade.
- **Accidental Fork**: Temporary divergence due to simultaneous valid block production; resolved by longest-chain rule.
- **Contentious vs coordinated**: Social [[Governance]] determines whether a fork is accepted by the community.

### Mechanisms

- Nodes evaluate the canonical chain according to the heaviest or longest chain rule under their local protocol version.
- Replay protection mechanisms prevent transactions on one fork from being valid on another.
- [[Cryptographic Hash]] linkage ensures forks can be traced to their common ancestor block.

### Applications

- Protocol upgrades (EIP activations on Ethereum, BIP activations on Bitcoin).
- Recovery from catastrophic smart contract exploits.
- Creation of alternative blockchain networks with modified parameters.

### Provenance

