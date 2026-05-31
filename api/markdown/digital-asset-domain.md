- ### Definition
  - The Digital Asset Domain classifies concepts relating to value representations that are recorded, transferred, and settled on distributed ledgers. It covers tokens, their issuance and lifecycle, and the standards that define their behaviour. As a subject classification under the Blockchain Domain, it scopes the asset abstraction itself rather than the trading venues or regulatory regimes that surround it.

- ### Semantic Classification
  - owl-class:: asset:DigitalAssetDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Decentralised Finance Domain]], [[Capital Markets Domain]], [[Payment Systems Domain]]
  - has-part:: [[Fungible Token]], [[Non-Fungible Token]], [[Stablecoin]], [[Tokenised Security]], [[Token Standard]]
  - requires:: [[Smart Contract]], [[Distributed Ledger]], [[Cryptographic Primitive]]
  - enables:: [[Asset Tokenisation]], [[Programmable Ownership]], [[Atomic Settlement]]

- ### Content
  - The Digital Asset Domain treats the token as the unit of analysis. Fungible tokens represent interchangeable value, non-fungible tokens encode unique ownership, and tokenised securities and stablecoins bind on-ledger units to off-ledger claims or reference values. Token standards specify the interfaces and behaviours that wallets, exchanges, and contracts can rely upon, allowing assets to circulate across applications.
  - An asset has a lifecycle: issuance, transfer, custody, and redemption or burning. Each stage is enforced by smart contracts and recorded on a distributed ledger, which provides a tamper-evident history and supports atomic settlement between parties. The properties of the underlying ledger, including finality and throughput, shape what asset designs are practical.
  - Positioned beneath the Blockchain Domain, this domain supplies the value objects that decentralised finance composes and that capital markets and payment systems consume. Keeping the asset abstraction separate from market structure and regulation lets the ontology describe a tokenised bond and a meme token with the same vocabulary while attaching different obligations elsewhere in the graph.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]]
  - migration-date:: 2026-05-29T00:00:00Z