The Proxy Pattern is a smart-contract design technique that separates a contract's persistent storage and address from its executable logic, allowing the logic to be upgraded without migrating state or changing the public address. A lightweight proxy contract holds the state and forwards calls via delegatecall to a swappable implementation contract. The pattern enables upgradeable contracts but introduces storage-layout, initialisation and access-control hazards that must be managed carefully.

### Overview

- A proxy contract holds storage and delegates execution to a separate implementation contract via delegatecall.
- Because storage lives in the proxy, the implementation can be replaced to ship bug fixes and new features without state migration.
- Common variants include transparent proxies, UUPS (Universal Upgradeable Proxy Standard) and beacon proxies.
- The pattern is the basis of most production upgradeable contract systems on Ethereum.

### Mechanisms

- delegatecall executes implementation code in the proxy's storage and msg.sender context.
- Storage-layout compatibility must be preserved across upgrades to avoid corruption.
- Initialiser functions replace constructors, which do not run in the proxy's context.
- Admin and upgrade authority are gated by access control to prevent hostile takeover.
- Function-selector clashes between proxy and implementation are resolved by transparent or UUPS designs.

### Applications

- Upgradeable DeFi protocols and token contracts that must evolve post-deployment.
- Gas-efficient minimal proxies (clones) for deploying many identical contract instances.
- Beacon proxies that upgrade many instances by pointing them at a single implementation.
- Governance-controlled protocol upgrades coordinated through timelocks and multisigs.

### Provenance

