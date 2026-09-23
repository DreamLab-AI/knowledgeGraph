
A Blockchain Transaction is an atomic, cryptographically signed instruction that encodes a state-change on a distributed ledger — such as a transfer of digital assets, invocation of a smart contract function, or mutation of on-chain data. Transactions are broadcast to a peer-to-peer network, validated against protocol rules and the active consensus mechanism, and permanently recorded in an ordered block once accepted. The transaction model differs fundamentally between UTXO-based chains (e.g. Bitcoin) and account-based chains (e.g. Ethereum), affecting parallelism, privacy, and composability.

- ### Overview
  - Blockchain Transactions serve as the indivisible record of intent in any distributed ledger protocol. Without valid, ordered transactions there is no shared state and no meaningful [[Blockchain]].
  - A transaction is initiated off-chain: a user constructs a data structure specifying source of funds, destination, amount or calldata, and pays a [[Transaction Fee]] to incentivise block producers to include the instruction. The transaction is then cryptographically signed with the user's private key (see [[Public-Key Cryptography]]) to prove authorisation.
  - Once broadcast, the transaction enters a [[Mempool]] — a node-local queue of unconfirmed operations. Miners or validators select transactions (commonly by fee-per-byte or gas price) and package them into a candidate [[Block]]. When the block is confirmed and propagated, the transaction achieves on-chain finality — the degree of which varies between probabilistic finality (proof-of-work chains) and deterministic finality (BFT-based [[Consensus Algorithm]]s).
  - Blockchain transactions differ fundamentally from [[Database Transaction]]s: they require no trusted central coordinator, are publicly auditable, and cannot be reversed by any single party.

- ### Key Components
  - #### UTXO Model (Bitcoin et al.)
    - [[UTXO (Unspent Transaction Output)]] — each transaction consumes one or more unspent outputs from prior transactions and creates new outputs, forming a directed acyclic graph of value flows.
    - [[Transaction Input]] — references a previous output (txid + output index) and supplies an unlocking script (scriptSig or witness) proving the right to spend.
    - [[Transaction Output]] — specifies amount and a locking script (scriptPubKey, e.g. P2PKH, P2SH, P2WPKH) defining conditions for future spending.
    - Enables deterministic verification and natural parallelism; state of every UTXO can be checked independently.
  - #### Account Model (Ethereum et al.)
    - Global state maps account addresses to balances and contract storage.
    - [[Transaction Nonce]] — a monotonically incrementing counter per sender preventing replay and enforcing ordering.
    - Transactions target either externally owned accounts (value transfer) or contract accounts (function invocations with calldata).
    - [[Gas]] — an internal metering unit capping computation and storage consumption; the fee = gas used × gas price.
  - #### Cryptographic Components
    - [[Digital Signature]] (ECDSA over secp256k1 in Bitcoin; ECDSA and BLS in Ethereum post-Merge) authenticates the sender and prevents tampering.
    - [[Elliptic Curve Cryptography]] underpins key generation and signature schemes.
    - [[Cryptographic Hash Function]] (SHA-256, Keccak-256) creates the txid/hash that uniquely identifies each transaction and is embedded in the block's [[Merkle Tree]].
    - [[Zero-Knowledge Proof]]s (zk-SNARKs, zk-STARKs) enable private transactions (Zcash shielded transfers, zkEVM rollup proofs).
  - #### Lifecycle Stages
    - Construction → Signing → Broadcast → [[Mempool]] queuing → Block inclusion → Confirmation accumulation → Finality.
    - Finality depth (e.g. 6 blocks on Bitcoin for high-value transfers) reflects the economic cost to reorganise the chain.

- ### Mechanisms
  - #### Fee Markets
    - Miner/validator selection is primarily fee-driven; during congestion, a fee auction emerges.
    - [[Ethereum]] EIP-1559 introduced a base fee (burned) plus optional tip (priority fee to validators), creating more predictable pricing.
    - Bitcoin's fee market is purely competitive; SegWit introduced the concept of virtual bytes to normalise witness data discount.
  - #### Transaction Types
    - **Standard value transfer** — move native currency between accounts.
    - **Smart contract deployment** — includes bytecode payload; creates a new contract account.
    - **Smart contract call** — calldata encodes function selector and ABI-encoded arguments for [[Smart Contract]] execution.
    - **Multi-signature transactions** — require m-of-n cryptographic authorisations (P2MS, Schnorr MuSig) for enhanced security.
    - **Confidential transactions** — use [[Zero-Knowledge Proof]]s or Pedersen commitments to hide amounts while proving solvency.
    - **Atomic swaps** — [[Atomic Swap]] via hash-time-locked contracts (HTLCs) enables trustless cross-chain exchanges without an intermediary.
  - #### Batching and Compression
    - [[Layer-2 Protocol]]s (Optimistic Rollups, ZK-Rollups) batch hundreds or thousands of transactions into a single on-chain proof, dramatically increasing [[Transaction Throughput]] while inheriting base-layer security.
    - Signature aggregation (BLS, Schnorr) reduces on-chain footprint for multi-input or multi-participant transactions.
    - Payment channels (Lightning Network) allow off-chain bilateral transaction streams, settling the net result on-chain.

- ### Applications / Use Cases
  - **Cryptocurrency payments** — peer-to-peer transfer of [[Bitcoin]], ETH, stablecoins, or other tokens without banks or clearinghouses.
  - **[[Decentralised Finance]]** — lending, borrowing, decentralised exchange (DEX swaps), yield farming, and derivatives, all encoded as sequences of [[Smart Contract]] calls.
  - **[[Tokenisation]]** — issuance and transfer of NFTs, security tokens, and real-world asset representations; each transfer is a transaction modifying token ownership state.
  - **[[Supply Chain Traceability]]** — recording provenance events (manufacture, shipment, customs clearance) as immutable transactions on a permissioned or public ledger.
  - **[[Digital Identity]]** — credential issuance and revocation anchored as transactions on-chain (DID documents, verifiable credential registries).
  - **Cross-border remittance** — low-cost, near-instant settlement reducing correspondent banking friction, especially for corridors lacking domestic clearing infrastructure.
  - **Governance voting** — on-chain DAO proposals, weighted votes, and fund disbursements encoded as transactions on a [[Distributed Ledger]].
  - **Gaming and virtual economies** — in-game asset trades, marketplace settlements, and reward distributions in blockchain-native games and metaverse platforms.

- ### Standards & Context
  - [[Bitcoin]] transactions follow the original Nakamoto specification (Bitcoin Core BIPs: BIP-141 SegWit, BIP-340 Schnorr, BIP-341 Taproot).
  - [[Ethereum]] transaction encoding is defined in the Yellow Paper (RLP serialisation) and updated via EIPs (EIP-2930 access lists, EIP-1559 fee market, EIP-4844 blob-carrying transactions for rollup data).
  - [[IEEE (Institute of Electrical and Electronics Engineers)]] and ISO/TC 307 (Blockchain and DLT) publish standards relevant to transaction security and interoperability.
  - FATF (Financial Action Task Force) Recommendation 16 (Travel Rule) governs information accompanying virtual asset transfers, influencing how transaction metadata is structured for regulatory compliance.
  - W3C Decentralised Identifiers (DIDs) and Verifiable Credentials specifications intersect with [[Digital Identity]] anchoring via blockchain transactions.

- ### Current Landscape (2026)
  - Ethereum's Pectra hard fork (activated on mainnet 7 May 2025, epoch 364032) introduced EIP-7702 and a new transaction type 0x04 (SetCode), letting ordinary externally-owned accounts temporarily borrow smart-contract code to enable transaction batching, gas sponsorship, session keys and social recovery without migrating wallets.
  - EIP-7702 adoption was rapid: over 11,000 authorisations appeared within a week of launch, and by early 2026 major wallets (Coinbase Wallet, Safe, Argent, Rabby, Zerion, MetaMask) had shipped support, with sponsored ("gasless") transactions where a dApp pays fees becoming a significant share of activity and reshaping onboarding.
  - Blob-based data availability continued to reprice transactions: Pectra's EIP-7691 doubled blob throughput (target 3 to 6, max 6 to 9 per block), and the Fusaka upgrade with PeerDAS (activated 8 December 2025) distributed blob data across nodes, driving L2 fees down further so median L2 fees now sit near $0.001-0.01 on Arbitrum, Base and Optimism.
  - Ethereum L1 base-layer throughput remains modest (roughly 15-30 TPS), keeping the scaling thesis firmly modular: rollups such as Arbitrum, Optimism and Base handle execution while L1 provides settlement and data availability, with combined L2 capacity pushed toward the 100,000 TPS range.
  - On the high-throughput side, Solana crossed 1 billion transactions in a single week (27 July-2 August 2026) and sustains roughly 1,000-3,000 non-vote TPS at sub-cent fees; the Firedancer/Frankendancer client (Jump) has demonstrated bursts above 100,000 TPS on mainnet and over 1 million TPS in testing, with the Alpenglow consensus proposal targeting sub-150ms finality.
  - Regulation moved from enforcement to statute: the US GENIUS Act (Public Law 119-27, signed 18 July 2025) set the first federal framework for payment stablecoins, mandating full reserve backing and monthly disclosure, while the EU's MiCA transitional period closed on 1 July 2026.
  - Open challenges as of 2026 include L1 throughput still lagging (forecasts put mainnet below 100 TPS for years absent aggressive gas-limit increases like EIP-7938), fragmentation of user experience and liquidity across many L2s, security surface expanded by delegated EOA code under EIP-7702, and cross-chain interoperability and MEV on transaction ordering remaining unresolved.

- ### References
  - 1. Ethereum Foundation (2025). Pectra Mainnet Announcement. https://blog.ethereum.org/2025/04/23/pectra-mainnet
  - 2. The Block (2025). Ethereum developers activate Pectra upgrade with 11 changes to improve UX, validator ops and Layer 2 scaling. https://www.theblock.co/news/ecosystems/2025-05-07-ethereum-pectra-upgrade-353407
  - 3. Ethereum.org (2026). Building on Ethereum in 2026: what has changed. https://ethereum.org/latest/building-on-ethereum-in-2026/
  - 4. Memeburn (2026). Solana Hits 1 Billion Weekly Transactions While Tokenized Equities Dominate at 82%. https://memeburn.com/solana-hits-1-billion-weekly-transactions/
  - 5. The Blockchain History (2025). Chapter 9: Latest Development Trends and Future Outlook (2024-2026). https://theblockchainhistory.com/history/latest-trends

- ### Provenance

