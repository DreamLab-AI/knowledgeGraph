
A ledger is a structured, authoritative record of financial transactions or state changes, historically maintained as a physical or centralised book of accounts and now realised as a distributed, cryptographically secured data structure in blockchain systems. In the distributed-ledger paradigm, every participating node holds a replica of the same append-only log, with consensus mechanisms ensuring that all copies remain consistent and tamper-evident. The concept spans traditional double-entry bookkeeping, centralised database ledgers (as in banking core systems), and fully decentralised [[Distributed Ledger Technology]] implementations such as [[Bitcoin]] and [[Ethereum]]. Ledger (the company, Ledger SAS) is a notable specific instantiation of hardware-wallet technology designed to protect the cryptographic keys that authorise writes to a blockchain ledger.

- ### Overview
  - The ledger is arguably the oldest information technology still in active use, tracing back to cuneiform accounting tablets of ancient Mesopotamia. Every banking system, stock exchange, and public registry ultimately reduces to a ledger — an ordered sequence of accepted writes whose cumulative state determines who owns what.
  - [[Blockchain]] extends the ledger concept with three properties absent from traditional databases:
    - **Append-only immutability** — accepted entries are secured by [[Cryptographic Hash]] chaining so that retroactive alteration breaks the hash chain and is detectable by any participant.
    - **Decentralised replication** — every full node holds a complete copy; no single party can selectively withhold or alter history.
    - **Permissionless write access** — in public chains, anyone can submit a transaction; validity is determined by protocol rules rather than institutional gatekeeping.
  - The specific company **Ledger SAS** (founded 2014, Paris) manufactures hardware security modules marketed as hardware wallets — physical devices containing a secure element chip that stores [[Private Key]] material and signs transactions without ever exposing the key to the host computer. This is a hardware product designed to protect access to a blockchain ledger, but should not be conflated with the ledger concept itself.

- ### Key Components
  - **Transaction Record** — the atomic unit; records sender, receiver, amount/asset, timestamp, and [[Digital Signature]] authorising the transfer. In Bitcoin these are [[UTXO]]-based; in Ethereum they follow the [[Account Model]].
  - **Block** — a batched, ordered set of validated transaction records, linked to its predecessor via a hash pointer, forming the [[Blockchain]] chain structure.
  - **[[Merkle Tree]]** — the data structure used within each block to hash-summarise all transactions, enabling efficient proof of inclusion (Simplified Payment Verification) without downloading the full ledger.
  - **[[Consensus Mechanism]]** — the protocol (Proof-of-Work, Proof-of-Stake, PBFT, etc.) that achieves agreement among nodes on the canonical order of entries, preventing double-spend.
  - **State Database** — derived from replaying the ledger; represents current balances or smart-contract storage. Ethereum maintains a global state trie; Bitcoin computes the UTXO set.
  - **[[Public-Key Cryptography]]** — every account or address is a public key; ownership is proven by possession of the corresponding [[Private Key]] and the ability to produce a valid [[Digital Signature]].

- ### Mechanisms
  - **Double-Entry Bookkeeping Implementation** — blockchain ledgers implicitly implement [[Double-Entry Bookkeeping]]: every debit from one account is a credit to another; the sum of all UTXOs or account balances is conserved (minus fees destroyed or redistributed).
  - **Append-Only Log Semantics** — entries are never mutated or deleted; history is permanent. This contrasts sharply with a [[Centralised Database]] where rows may be updated or rolled back by an administrator.
  - **Fork Resolution** — competing chains (forks) arise when two miners find valid blocks simultaneously; the protocol's longest-chain or heaviest-chain rule resolves ambiguity deterministically.
  - **Finalisation** — in Proof-of-Stake systems (e.g. post-Merge Ethereum), economic finality is achieved when a supermajority of validators have attested to a checkpoint; reversal would require slashing a third of staked value.
  - **Sharding and Layer-2** — to scale throughput, ledgers may be partitioned (sharding) or transaction batching may be delegated to off-chain [[Layer-2 Protocol]] systems (rollups, payment channels) that periodically commit summaries back to the main ledger.

- ### Applications / Use Cases
  - **Cryptocurrency Transfers** — [[Bitcoin]] and [[Ethereum]] ledgers record peer-to-peer value transfers without banks; settlement is final within minutes rather than days.
  - **[[Smart Contract]] Execution** — programmable ledgers (Ethereum, Solana, Cardano) record not only value transfers but also the execution results of self-enforcing code, enabling [[Decentralised Finance]] protocols, NFT registries, and DAO governance.
  - **[[Tokenisation]]** — real-world assets (real estate, bonds, carbon credits) can be represented as tokens on a ledger, enabling fractional ownership and 24/7 secondary market trading.
  - **[[Central Bank Digital Currency]]** — central banks are exploring permissioned ledgers (e.g. the Digital Pound, Digital Euro pilots) that retain state control while offering programmable money features.
  - **[[Supply Chain Traceability]]** — permissioned ledgers (Hyperledger Fabric, R3 Corda) record custody transfers, provenance attestations, and compliance certificates across multi-party supply chains without requiring a trusted intermediary.
  - **[[Digital Identity]]** — self-sovereign identity systems use ledgers to anchor decentralised identifiers (DIDs) and verifiable credential schemas, enabling [[Data Provenance]] and auditability without centralised registries.
  - **Hardware Wallet Key Protection (Ledger SAS)** — the company Ledger produces the Ledger Nano and Ledger Stax devices; these are [[Cold Storage]] hardware security modules that protect [[Private Key]] material used to authorise writes to blockchain ledgers, supporting [[Self-Custody]] of [[Digital Asset|digital assets]].

- ### Standards & Context
  - **ISO 22739:2020** — the ISO Blockchain and DLT Vocabulary standard, which defines 'ledger', 'distributed ledger', and related terms for normative use.
  - **W3C DID Core** — specifies decentralised identifiers anchored to ledgers, enabling self-sovereign identity without centralised registrars.
  - **FATF Travel Rule (Recommendation 16)** — financial-action task-force guidance that treats blockchain ledger records as subject to the same anti-money-laundering requirements as traditional financial records.
  - **MiCA (EU Markets in Crypto-Assets Regulation)** — EU regulation (effective 2024) that governs assets issued on public ledgers, treating blockchain records as legally binding ownership evidence.
  - **Hyperledger** — Linux Foundation umbrella project hosting permissioned ledger frameworks (Fabric, Besu, Indy) targeting enterprise and consortium deployments.
  - **Ledger SAS** — private company founded 2014; products include Ledger Nano S Plus, Ledger Nano X, Ledger Stax; the Ledger Connect Kit supply-chain attack of December 2023 highlighted the security criticality of [[Key Management]] in hardware wallet ecosystems.

- ### Current Landscape (2026)
  - The distributed-ledger standards stack matured sharply: ISO/TC 307 published ISO/TS 23516:2026, a formal blockchain/DLT interoperability framework, on 11 March 2026, approved a Web3.0 Reference Architecture in February 2026, and in August 2026 opened a new Blockchain-as-a-Service technical-framework project (project lead China) aimed at reducing vendor lock-in across the 100,000+ enterprise deployments now running on BaaS.
  - The dominant 2024-2026 shift is from speculative chains to ledgers as settlement infrastructure for real-world assets (RWA): tokenised RWA value rose from roughly $5.8bn in January 2025 to over $30bn by late 2025 and past the $26bn threshold on some stricter counts by March 2026, led by private credit (~$17-18bn) and tokenised US Treasuries (~$8-15bn).
  - Institutional issuers now dominate the ledger: BlackRock's BUIDL tokenised Treasury fund (live March 2024) surpassed $2bn, Fidelity launched its FDIT token in September 2025, and Apollo, Franklin Templeton, Goldman Sachs, BNY Mellon and Societe Generale moved money-market funds and bonds on-chain across Ethereum, Solana, XRP Ledger, Canton Network and Provenance.
  - Regulation crystallised into concrete ledger rules: the US GENIUS Act (July 2025) set a federal stablecoin settlement framework, the EU's MiCA and DORA (applicable from January 2025) plus the DLT Pilot Regime governed on-chain market infrastructure, and the UK passed the Property (Digital Assets etc.) Act 2025 with cryptoasset regulation now penciled for an October 2027 go-live.
  - Enterprise architecture consolidated around permissioned and hybrid ledgers (Hyperledger Fabric, Besu, Corda-style networks) using public-chain anchoring for notarisation; private blockchains held roughly 54% of the enterprise supply-chain segment in 2025 as that market scaled from about $3.27bn (2025) to $5.23bn (2026).
  - Concrete infrastructure milestones landed in Europe: Switzerland's FINMA granted its first DLT trading-facility licence to BX Digital in 2025 under the amended Financial Market Infrastructure Act, enabling integrated trading and settlement of tokenised securities on a regulated ledger.
  - Open frontiers as of 2026 remain cross-ledger interoperability and common data standards (driven by ISO/TC 307, ICMA and AFME), privacy-preserving compliance on shared ledgers, avoiding technology lock-in, and reconciling immutability with GDPR, AML and the EU Data Act's smart-contract requirements.

- ### References
  - 1. TechTimes (2026). China Wins ISO Project Lead on Blockchain Standard Targeting Vendor Lock-In. https://www.techtimes.com/articles/322755/20260803/china-wins-iso-project-lead-blockchain-standard-targeting-vendor-lock.htm
  - 2. ISO / iTeh (2026). ISO/TS 23516:2026 — Blockchain and distributed ledger technology — Interoperability framework. https://standards.iteh.ai/catalog/standards/iso/6c5ccbb2-7e68-495d-bc58-1b0a799c1db6/iso-ts-23516-2026
  - 3. InvestaX (2026). Q3 2025 Real World Asset Tokenization Market Report. https://investax.io/blog/q3-2025-real-world-asset-tokenization-market-report
  - 4. Cointelegraph / TradingView (2026). Tokenized RWA market grows 420% since 2025 on regulatory clarity, access. https://www.tradingview.com/news/cointelegraph:e1463c753094b:0-tokenized-rwa-market-grows-420-since-2025-on-regulatory-clarity-access/
  - 5. Ashurst / Perkins Coie (2026). Digital Assets in 2026: What to Watch. https://www.ashurstperkinscoie.com/en/insights/digital-assets-in-2026-what-to-watch/
  - 6. KPMG (2025). DLT Report 2025 (FINMA BX Digital DLT trading facility licence). https://assets.kpmg.com/content/dam/kpmgsites/ch/pdf/kpmg-dlt-report-2025.pdf.coredownload.inline.pdf

- ### Provenance

