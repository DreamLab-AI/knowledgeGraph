BIP-39 is a Bitcoin Improvement Proposal that defines how to encode wallet entropy as a human-readable mnemonic seed phrase and how to derive a binary seed from it. It maps random entropy plus a checksum onto words drawn from a fixed wordlist, then stretches the phrase and an optional passphrase into a seed via a key derivation function. The resulting seed feeds hierarchical deterministic wallets, making secrets easier to back up and transcribe.

### Overview

- BIP-39 begins with random entropy of 128 to 256 bits. It appends a checksum derived from a [[Hash Function]], splits the result into 11-bit groups, and maps each group to a word from a fixed 2048-word list. The checksum lets wallets detect transcription errors.
- The mnemonic, combined with an optional passphrase, is passed through a [[Key Derivation Function]] using many iterations to produce a 512-bit seed. That seed is the master input to deterministic key generation, ultimately producing [[Cryptographic Key]] material and a [[Private Key]] hierarchy.
- By turning opaque entropy into words, BIP-39 makes backup and recovery practical for users of a [[Hardware Wallet]] or any [[Cryptocurrency Wallet]], underpinning self-custody across [[Bitcoin]] and many other chains.

### Mechanisms

- Entropy generation and checksum appending using a hash of the entropy.
- Wordlist mapping of 11-bit groups to mnemonic words.
- Passphrase-salted key stretching through a [[Key Derivation Function]].
- Deterministic seed output that initialises hierarchical key trees.
- Error detection via the embedded checksum during recovery.

### Applications

- Backing up and recovering self-custodial [[Wallet]] secrets.
- Initialising a [[Hierarchical Deterministic Wallet]] across many accounts.
- Provisioning a [[Hardware Wallet]] securely offline.
- Enabling cross-wallet portability of the same key hierarchy.

### Provenance

