
On chain settlement is the process by which the transfer of value or assets between parties is recorded directly on a distributed ledger and becomes economically irreversible according to the ledger's consensus rules. Unlike off-chain or netting arrangements that defer ledger updates, on chain settlement writes each transaction's final state into the canonical chain, removing the need for a trusted central clearing intermediary. Settlement is considered complete once the relevant transaction attains the chain's finality guarantee, after which reversal requires violating consensus. It underpins payment, securities, and decentralised finance flows on public and permissioned blockchains.

- On chain settlement records the final transfer of value directly on a [[Distributed Ledger]], achieving economic irreversibility through [[Consensus Mechanism]] rather than a central clearing house. It is a specialisation of [[Settlement Finality]] applied to [[Blockchain]] systems, and is central to [[Decentralized Finance]].
- ### Overview
- Traditional settlement relies on intermediaries that net positions and update internal ledgers over hours or days. On chain settlement collapses clearing and settlement into a single atomic ledger write, so once a transaction is included and finalised, ownership has provably changed.
- The model removes counterparty dependence on a custodian and replaces it with cryptographic and economic guarantees enforced by the network's validators.
- Settlement assurance scales with the depth of confirmations or the chain's deterministic finality, trading latency against certainty.
- ### Mechanisms
- Transactions are broadcast, ordered by consensus, and committed to a block.
- Finality is reached probabilistically (proof-of-work depth) or deterministically (BFT-style consensus).
- Atomic composability lets multiple transfers settle within a single [[Smart Contract]] call.
- Fees ([[Gas Fee]]) meter execution and prioritise inclusion.
- ### Applications
- Stablecoin payments and remittance corridors using [[Stablecoin]] rails.
- Tokenised securities and real-world-asset transfer via [[Tokenization]].
- Decentralised exchange trade settlement and lending liquidations in [[Decentralized Finance]].
- Cross-institution interbank settlement on permissioned ledgers.
- ### Provenance

