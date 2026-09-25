Monero (XMR) is an open-source, privacy-preserving cryptocurrency launched in April 2014 as a fork of the Bytecoin codebase, distinguished by making confidentiality mandatory for every transaction rather than optional. It achieves unlinkability and untraceability through three complementary cryptographic primitives: ring signatures that blend the spender's output among decoys drawn from the blockchain history, one-time stealth addresses that prevent linking payments to a recipient's public key, and Ring Confidential Transactions (RingCT) that hide transferred amounts using Pedersen commitments. The protocol employs a proof-of-work algorithm — originally CryptoNight, later RandomX — engineered to maintain parity between CPUs and GPUs while resisting ASIC specialisation, thereby preserving decentralised mining participation.

### Overview

- Monero emerged from a desire to rectify the privacy shortcomings of early cryptocurrencies, where all transaction data is publicly visible on-chain and therefore amenable to blockchain analytics. The fundamental insight of the CryptoNote design — later extended by the Monero research community — is that confidentiality should be a baseline property of money, not an optional add-on.
- The network is maintained by a decentralised open-source community with no founding company or pre-mine. Development is coordinated through the Monero Research Lab (MRL), which produces peer-reviewed cryptographic work that feeds into protocol upgrades.
- Monero conducts scheduled hard forks roughly twice per year, enabling the community to upgrade cryptographic primitives, introduce efficiency improvements, and respond to ASIC mining threats. Notable upgrades include the introduction of RingCT in 2017, Bulletproofs range proofs in 2018, and the RandomX mining algorithm in 2019.
- The mandatory privacy model creates genuine [[Fungibility]]: every XMR unit is indistinguishable from every other, a property that transparent cryptocurrencies cannot guarantee because individual coins may be blacklisted based on their transaction history.

### Key Cryptographic Mechanisms

- **[[Ring Signature]]**
  - Each spend combines the user's actual output with a set of decoy outputs (ring members) drawn from the blockchain UTXO set. An outside observer can verify the ring is valid and that one member signed it, but cannot determine which member.
  - The ring size has grown over successive upgrades to increase the anonymity set.
- **[[Stealth Address]]**
  - The sender derives a one-time public key for each payment using the recipient's public view key and spend key, so payments sent to a published address never appear linked on-chain. Only the recipient, scanning the blockchain with their private view key, can identify incoming funds.
- **[[Ring Confidential Transactions]] (RingCT)**
  - Introduced in 2017 and made mandatory in 2018, RingCT hides transaction amounts using [[Pedersen Commitment]] values. The network can verify that inputs equal outputs without learning the amounts, using homomorphic properties of the commitments.
- **[[Bulletproofs]] Range Proofs**
  - Replaced the earlier Borromean ring signature range proofs in 2018. Bulletproofs are logarithmically-sized zero-knowledge proofs that demonstrate committed values are positive without revealing them, dramatically reducing transaction size and fee costs.
- **[[Dandelion++]] Transaction Propagation**
  - A privacy-preserving peer-to-peer propagation protocol that randomises the network path of new transactions before they flood the mempool, obscuring the originating IP address from network-level observers.
- **[[RandomX]] Proof of Work**
  - A CPU-optimised proof-of-work algorithm adopted in 2019. RandomX executes random programmes on a virtual machine architecture that exploits features present in general-purpose CPUs (large instruction caches, branch predictors, floating-point units) while being inefficient on GPUs and extremely costly to implement in custom silicon, thereby resisting ASIC centralisation.

### Applications and Use Cases

- **Private peer-to-peer payments** — individuals transacting without exposing financial history to third parties, counterparties, or on-chain analysts.
- **Merchant payments** — businesses that wish to protect commercial transaction data from competitors or other observers.
- **[[Decentralised Finance]] and cross-chain bridges** — XMR-to-other-asset atomic swaps (notably XMR–BTC atomic swap protocols developed by the community) enable privacy-preserving interoperability without custodians.
- **Regulatory and compliance research** — regulators and [[Anti-Money Laundering]] (AML) researchers study Monero to develop detection heuristics and policy frameworks for privacy-preserving assets; several academic collaborations with the Monero Research Lab have contributed to understanding traceability limits.
- **Mining on commodity hardware** — individuals running RandomX on desktop CPUs can participate in block production, contrasting with the industrial mining pools that dominate [[Bitcoin]] and many other [[Proof of Work]] chains.
- **Digital cash analogue** — proponents argue that Monero most closely replicates the fungibility and privacy properties of physical banknotes in a digital bearer instrument.

### Comparison with Other Privacy Approaches

- Monero's mandatory-privacy model contrasts with [[Zcash]]'s optional shielded transactions: Zcash uses [[Zero-Knowledge Proof]] (zk-SNARKs) to achieve stronger theoretical anonymity for shielded transfers, but most Zcash transactions are transparent, limiting the practical anonymity set.
- [[Dash]] offers an optional CoinJoin-based mixing service (PrivateSend) that provides weaker privacy than Monero's cryptographic guarantees.
- [[Bitcoin]] and [[Ethereum]] are fully transparent by default; privacy on these chains requires additional layers such as mixers, layer-2 protocols, or external tools, none of which match Monero's baseline privacy.
- The tradeoff of mandatory privacy is larger transaction sizes and higher on-chain verification cost compared to transparent chains, though Bulletproofs significantly reduced this overhead.

### Governance and Development

- Monero has no single controlling entity, foundation with formal power, or venture-backed development team. Governance is loosely structured around the Monero Research Lab for cryptographic development and a community forum (IRC, Reddit, GitHub) for broader decisions.
- The Community Crowdfunding System (CCS) coordinates funded development proposals: contributors submit proposals, the community donates XMR, and work is completed for milestone payments.
- The scheduled hard fork model gives the community a strong mechanism for protocol upgrades without requiring miner supermajorities — a meaningful structural distinction from [[Bitcoin]]'s upgrade process.
- [[Regulatory Compliance]] tensions: multiple regulated exchanges have delisted XMR in response to pressure from financial regulators, citing inability to comply with travel-rule and AML requirements. This represents an ongoing governance challenge between the technical design goals and integration with regulated financial infrastructure.

### Standards and Context

- Built on the CryptoNote v2.0 white paper (2013) by pseudonymous author Nicolas van Saberhagen.
- Monero Research Lab publications are the primary academic source for protocol specifications and cryptographic proofs.
- FATF (Financial Action Task Force) guidance on virtual assets explicitly identifies privacy coins as higher-risk; national implementations of FATF standards have driven exchange delistings.
- The XMR–BTC atomic swap protocol (implemented in the Farcaster and COMIT projects) relies on adaptor signatures and cross-chain scripting with no Monero script changes required.

### Provenance

