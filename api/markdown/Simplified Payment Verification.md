
Simplified Payment Verification (SPV) is a technique that lets a lightweight client confirm that a transaction is included in a blockchain without downloading the entire chain, by holding only block headers and requesting a Merkle proof linking the transaction to a header's Merkle root. Described in the original Bitcoin design, it trades the full validation guarantees of a complete node for drastically reduced storage and bandwidth, relying on the proof-of-work in headers and the honest-majority assumption. It is what makes mobile and embedded cryptocurrency wallets practical.

- ### Overview
	- An SPV client stores the chain of block headers rather than every transaction, a tiny fraction of the full ledger.
	- To check a payment, it obtains a Merkle proof — the sibling hashes connecting the transaction to the Merkle root committed in a block header.
	- The presence of that header in the longest valid header chain, backed by accumulated proof-of-work, gives probabilistic assurance the transaction is confirmed.
- ### Mechanisms
	- Header synchronisation: the client validates header proof-of-work and linkage.
	- Merkle path verification: recomputing hashes up the [[Merkle Tree]] to match the root.
	- Bloom filters (BIP 37) historically let SPV wallets request relevant transactions while preserving some privacy.
- ### Applications
	- Mobile and embedded cryptocurrency wallets.
	- Resource-constrained or IoT blockchain clients.
	- Cross-chain bridges and light-client relays.
- ### Provenance

