A stealth address is a privacy-enhancing technique that lets a recipient publish a single static address while every payment is sent to a unique, unlinkable one-time address derived on-chain. The sender combines the recipient's public scan and spend keys with ephemeral randomness, using elliptic-curve Diffie-Hellman to compute a destination only the recipient can detect and spend. Stealth addresses break the public linkage between a recipient's identity and their incoming transactions without requiring interaction or a shared secret beforehand.

### Overview

- Stealth addresses provide recipient privacy by ensuring that no two payments to the same recipient share an on-chain destination, defeating naive address-clustering analysis.
- The recipient scans the chain for outputs addressed to keys it can derive, then spends them with a key only it can reconstruct from its private spend key.
- Because derivation uses one-shot Diffie-Hellman with ephemeral keys, the scheme needs no prior coordination between sender and recipient.

### Mechanisms

- Dual-key design separating a view (scan) key for detecting funds from a spend key for moving them.
- Ephemeral key generation per transaction so each payment lands at a fresh address.
- Elliptic-curve Diffie-Hellman shared-secret derivation to compute the one-time output key.
- On-chain scanning by the recipient to identify owned outputs without revealing ownership.

### Applications

- Privacy-focused cryptocurrencies such as Monero for recipient anonymity.
- Confidential payments and donations on otherwise transparent ledgers.
- Wallet designs that decouple a publishable receiving identity from observable transaction history.

### Provenance

