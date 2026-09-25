A hierarchical deterministic (HD) wallet is a cryptocurrency wallet that derives a tree of key pairs from a single master seed using a deterministic algorithm, as standardised in BIP-32 and related proposals. From one human-readable mnemonic phrase the wallet can regenerate an effectively unlimited hierarchy of addresses, allowing backup of an entire wallet from a single seed. The structure improves privacy by using fresh addresses while keeping recovery and organisation manageable.

### Overview

- HD wallets solve the backup and address-management problems of early wallets, where each key had to be stored individually. A single high-entropy seed, usually encoded as a BIP-39 mnemonic, deterministically generates a hierarchy of child keys via repeated key derivation. Standard derivation paths organise keys by purpose, coin type and account, so the same seed can manage many assets and accounts. Restoring the seed alone reconstructs the entire wallet.

### Mechanisms

- A single master seed, typically a BIP-39 mnemonic, anchors the wallet.
- BIP-32 derivation produces a deterministic tree of child key pairs.
- Standard derivation paths separate purpose, coin type and account.
- Fresh addresses per transaction improve on-chain privacy.
- Whole-wallet backup and recovery from the seed phrase alone.

### Applications

- Consumer self-custody wallets managing multiple assets.
- Hardware wallets storing the seed in a secure element.
- Exchange and custodial systems organising many accounts.
- Deterministic address generation for merchant payment systems.

### Provenance

