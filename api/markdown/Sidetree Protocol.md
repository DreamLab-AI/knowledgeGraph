
The Sidetree Protocol is a layer-two protocol for operating scalable decentralised identifier networks on top of any existing decentralised ledger without requiring trusted intermediaries or special-purpose consensus. It batches large numbers of DID create, update, recover, and deactivate operations, anchors a single compact commitment to the underlying chain, and stores the operation data in content-addressed storage so that any node can deterministically replay the operation log to compute current DID states. This separation of anchoring from data lets identifier throughput scale far beyond the base chain's transaction capacity.

- ### Overview
	- Sidetree decouples anchoring from data: only a compact reference is written on-chain, dramatically increasing identifier throughput.
	- Operation files are organised with a [[Merkle Tree]] so a single anchor commits to many operations.
	- The data layer typically uses [[IPFS]] or comparable content-addressed storage.
- ### Mechanisms
	- Aggregate create, update, recover, and deactivate operations into batches.
	- Build a [[Merkle Tree]] over the batch and publish the operation data to [[Content-Addressed Storage]].
	- Anchor the batch root to a base chain such as [[Bitcoin]] or another [[Distributed Ledger]].
	- Nodes process anchors in order and replay operations to compute deterministic DID states.
- ### Applications
	- Implementing W3C-conformant [[DID Method]] networks under [[W3C DID]].
	- Providing scalable identifiers for [[Public Key Infrastructure]] and verifiable credentials.
	- Resolving [[DID Document]] state for self-sovereign identity wallets.
- ### Provenance

