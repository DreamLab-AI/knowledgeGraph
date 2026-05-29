- ### Definition
  A Light Node is a blockchain network participant that downloads and verifies only block headers rather than the full transaction history, using Simplified Payment Verification (SPV) to confirm transaction inclusion via Merkle proofs. This design allows resource-constrained devices—mobile wallets, IoT devices, embedded clients—to interact securely with a blockchain without the storage and bandwidth demands of a Full Node.

- ### Relationships
  Light Nodes contrast sharply with Full Nodes and Archival Nodes, which maintain complete transaction histories. They require a Cryptographic Hash Function to verify Merkle proofs embedded in block headers and depend on the Peer-to-Peer Network to obtain header data from honest peers. They operate as participants within the broader Blockchain Infrastructure and are closely related to Bootstrap Nodes, which supply initial peer discovery, and Validator Nodes, which produce the blocks light nodes consume. The digital wallet use-case is the primary consumer of the light-node pattern, enabling mobile and browser-based wallets to verify payments trustlessly.

- ### Content

  A Light Node implements Simplified Payment Verification as described in Section 8 of the original Bitcoin whitepaper. Rather than downloading every transaction, the node fetches only the chain of block headers—each an 80-byte structure containing the previous block hash, Merkle root, timestamp, difficulty target, and nonce. To verify that a specific transaction appears in a block, the light node requests a Merkle branch from a full node: a minimal set of sibling hashes that, when hashed together in the correct order, reproduce the Merkle root stored in the header. Because the header is part of the longest proof-of-work chain, the transaction's inclusion is considered probabilistically confirmed to the same security depth as the chain length.

  The principal trade-off is trust assumption. A light node inherits the security of the majority-honest full-node network; it cannot independently detect invalid transactions or double-spends unless it requests additional data. This makes light nodes appropriate for end-user wallets where convenience outweighs the marginal security benefit of running a full node, but unsuitable for exchange back-ends or high-value custody systems that demand full independent verification.

  From a network-topology perspective, light nodes are consumers rather than contributors: they do not relay unconfirmed transactions, do not store historical blocks for other peers, and do not participate in block propagation. This means large populations of light nodes add negligible load to the peer-to-peer network while still benefiting from its security guarantees—a key scalability property supporting mass consumer adoption of blockchain-based payments.

  Implementation variants include compact block filters (BIP 157/158), which allow light clients to download compressed summaries of block contents and determine locally whether any transactions are relevant, reducing privacy leakage compared to classical Bloom-filter SPV (BIP 37). This evolution addresses a recognised weakness wherein BIP-37 light clients could reveal their wallet addresses to the full nodes they queried.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z