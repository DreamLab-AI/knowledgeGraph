A watchtower is a third-party service in payment-channel networks such as the Lightning Network that monitors the blockchain on a client's behalf and reacts to fraudulent channel-closure attempts. When a counterparty broadcasts a revoked, outdated channel state, the watchtower submits a penalty (justice) transaction that claims the cheater's funds, allowing the honest party to remain offline safely. Watchtowers store encrypted justice transactions indexed by transaction hints so they learn nothing about channel contents.

### Overview

- Lightning channels are secured by penalty transactions that punish broadcasting an old state; a watchtower enforces this even when the user is offline.
- Clients hand the tower an encrypted blob and a transaction hint; the tower can only decrypt and act once the matching breach appears on chain.
- This off-line safety property is essential for mobile and intermittently connected nodes.

### Mechanisms

- Continuous scanning of the chain for revoked commitment transactions.
- Encrypted storage of pre-signed justice transactions.
- Hint-based lookup that preserves channel privacy from the tower.
- Automatic broadcast of penalty transactions on detected fraud.

### Applications

- Protecting mobile Lightning wallets that cannot stay online.
- Outsourced channel monitoring for routing nodes.
- Reducing the liveness assumptions of layer-two payment systems.

### Trust model

- Towers are minimally trusted and learn nothing about balances.
- Multiple towers can be used for redundancy.
- Reward schemes can incentivise reliable monitoring.

### Provenance

