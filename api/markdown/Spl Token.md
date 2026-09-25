SPL Token is the token standard of the Solana Program Library, defining how fungible and non-fungible tokens are created and managed on the Solana blockchain through a shared on-chain program. Rather than deploying a separate contract per token as in ERC-20, all SPL tokens share a single canonical program and store balances in token accounts associated with each owner and mint. This account-model design enables high-throughput, low-cost token operations native to Solana's runtime.

### Overview

- SPL Token defines a canonical on-chain program that all tokens on Solana invoke, rather than each token deploying its own contract.
- A mint account describes a token's supply and decimals; token accounts hold balances for a specific owner and mint.
- The associated-token-account convention deterministically derives a user's account for any mint.
- This design leverages Solana's account model and parallel runtime for high throughput and low fees.

### Mechanisms

- Shared program — one canonical SPL Token program serves all tokens.
- Mint accounts — define total supply, decimals, and mint/freeze authorities.
- Token accounts — per-owner, per-mint balance holders.
- Associated token accounts — deterministic derivation of a user's account for a mint.
- Both fungible and non-fungible tokens supported under the same standard.

### Applications

- Stablecoins and utility tokens issued on Solana.
- Decentralised exchange liquidity and trading pairs.
- NFT collections using SPL with metadata extensions.
- Wallet and payment integrations across the Solana ecosystem.

### Provenance

