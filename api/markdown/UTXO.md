UTXO (Unspent Transaction Output) is an accounting model used by Bitcoin and several other blockchains in which the ledger state consists of discrete unspent outputs rather than account balances. Each transaction consumes one or more existing unspent outputs as inputs and creates new outputs, and a coin is simply an output that has not yet been spent. Ownership is established by satisfying the locking script attached to an output, typically by providing a valid signature. The model contrasts with the account-based approach used by Ethereum and supports straightforward parallel validation and privacy techniques.

### Semantic Classification

### Content

- In the UTXO model the global state is the set of all outputs that have been created but not yet spent. A wallet's balance is not stored directly; it is the sum of the unspent outputs that the wallet can unlock. Spending consumes whole outputs as inputs and produces new outputs, with any difference returned as change to the spender.
- Each output carries a locking condition, often a script requiring a signature from a particular key, and an input must supply data that satisfies it. Because outputs are independent, transactions that touch disjoint sets of outputs can be validated in parallel, and the model avoids certain ordering issues present in account-based systems.
- The UTXO approach originates with Bitcoin and is also used, in extended forms, by chains such as Cardano, whose EUTXO model attaches arbitrary data and scripts to outputs. It contrasts with the account and balance model of Ethereum, and the two designs imply different trade-offs in programmability, concurrency and privacy.

### Current Landscape (2026)

- Bitcoin's UTXO set ballooned from ~80-90 million entries pre-2023 to roughly 173 million (peaking near 187 million in January 2025), occupying ~11 GB of chainstate on disk; Mempool Research found ~49% of UTXOs now hold under 1,000 sats and ~30% (over 51 million) are inscription-related dust worth only ~415 BTC in aggregate, turning UTXO-set bloat into a live decentralisation concern.
- The Runes protocol (launched at the April 2024 halving) was deliberately engineered to be more UTXO-friendly than 2023-era BRC-20/Ordinals by encoding data in OP_RETURN outputs rather than minting millions of unspendable dust UTXOs; Bitcoin Core 29.0 (April 2025) added an "ephemeral dust" TRUC/CPFP policy, and the v30 branch merged an increased OP_RETURN data limit (~100 KB) in June 2025.
- Node-scaling responses to set growth matured: Utreexo (Tadge Dryja's hash-based accumulator that compresses the whole set to under a kilobyte) reached draft BIPs and a beta utreexod implementation in 2025, complementing AssumeUTXO snapshot bootstrapping now shipping in Bitcoin Core.
- Cardano's extended UTXO (eUTXO) programme advanced with the Ouroboros Leios roadmap (published June 2026), which adds UTXO sharding to distribute state maintenance, plus SNARK-based sublinear verification and Data Availability Sampling, aiming at horizontal scalability on consumer hardware; IOG's January 2025 "Six reasons why EUTXO wins" reasserted determinism and locality as the model's core advantages.
- Fuel brought UTXO to Ethereum L2 scaling: the FuelVM-powered Ignition rollup went live on mainnet in October 2024 (benchmarking ~21,000 TPS per core via strict-access-list parallel execution), migrated to EigenDA in May 2025, and positioned itself as a sub-100ms "real-time" rollup with 6-51ms soft pre-confirmations.
- Hybrid and privacy-oriented designs proliferated: Midnight adopted a dual architecture using shielded/unshielded UTXOs with a nullifier set at the ledger layer plus an account model for contracts (docs updated 2026), while 2024 academic work formalised "hybrid UTXO" (hUTXO), separating distributed contract state in UTXOs from an account-style contract balance to cut transaction size and enable parallel validation.
- Open frontier as of 2026: no consensus-level cap on UTXO-set growth means dust-mitigation proposals (e.g. consensus-enforced pruning of sub-dust "non-monetary" outputs at halvings) remain contested; making smart-contract state on UTXO chains scale without contention, and reconciling the model's parallelism with account-model developer ergonomics, are still active research and engineering battlegrounds.

### References

- 1. Mempool Research (2025). UTXO Set Report. https://research.mempool.space/utxo-set-report/
- 2. Spark (2026). UTXO Set — Glossary. https://www.spark.money/glossary/utxo-set
- 3. Cardano / IOG (2026). The Leios roadmap to solving the blockchain trilemma. https://cardano.org/news/2026-06-04-leios-roadmap-solving-blockchain-trilemma/
- 4. IOHK (2025). Six reasons why EUTXO wins. https://iohk.io/en/blog/posts/2025/01/08/six-reasons-why-eutxo-wins/
- 5. The Block (2024). Fuel Labs debuts 'Ignition' rollup network with focus on parallelisation, UTXO-based model. https://www.theblock.co/post/321365/fuel-labs-debuts-ignition-rollup-network-with-focus-on-parallellization-utxo-based-model
- 6. Midnight Network (2026). UTXO model — Midnight Docs. https://docs.midnight.network/concepts/utxo

### Provenance

