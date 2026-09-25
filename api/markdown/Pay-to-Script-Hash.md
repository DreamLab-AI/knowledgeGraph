Pay-to-Script-Hash (P2SH) is a Bitcoin transaction type, introduced in BIP 16, that locks funds to the hash of a redeem script rather than to a public key or full script. The spender must later provide both the original redeem script, whose hash matches the locking output, and the data that satisfies it. P2SH shifts the burden and storage cost of complex spending conditions from the sender to the recipient and underpins multi-signature and other advanced locking schemes.

### Overview

- P2SH locks an output to the 20-byte hash of a redeem script encoded as a special script address.
- Spending requires revealing the redeem script and its satisfying inputs at redemption time.
- It enables compact, standardised addresses for arbitrarily complex spending policies.

### Mechanisms

- Redeem script hashing and locking output
- Address encoding (Base58Check, prefix 3)
- Two-phase reveal-and-satisfy spending
- Backward-compatible soft-fork activation
- Composition with multisig redeem scripts

### Applications

- Multi-signature custody and escrow
- Conditional and time-locked payments
- Wrapped SegWit (P2SH-P2WPKH) addresses
- Atomic swaps and payment channels

### Provenance

