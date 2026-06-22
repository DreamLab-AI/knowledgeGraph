- ### Definition
  - The Payment Systems Domain classifies concepts concerned with the transfer and settlement of monetary value between parties. It covers payment instruments, clearing and settlement arrangements, and the rails over which value moves, including both ledger-based and conventional channels. As a subject classification under the Blockchain Domain, it scopes the movement and finality of value rather than the assets themselves or the regulation that governs them.

- ### Semantic Classification
  - owl-class:: pay:PaymentSystemsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Decentralised Finance Domain]], [[Financial Regulation Domain]], [[Capital Markets Domain]]
  - has-part:: [[Settlement Layer]], [[Payment Channel]], [[Stablecoin]], [[Central Bank Digital Currency]], [[Clearing Mechanism]]
  - requires:: [[Distributed Ledger]], [[Consensus Mechanism]], [[Digital Asset Domain]]
  - enables:: [[Value Transfer]], [[Cross-Border Settlement]], [[Micropayments]]

- ### Content
  - The Payment Systems Domain describes how value is moved and made final. Settlement layers record the definitive transfer of ownership, while payment channels and second-layer arrangements batch or net interactions to reduce cost and latency. Instruments such as stablecoins and central bank digital currencies provide units of account that participants accept for everyday transactions.
  - Settlement finality is the central property of the domain: a payment is complete only when it cannot be reversed under the system's rules. Distributed ledgers achieve finality through consensus, whereas conventional rails rely on clearing and settlement institutions. Throughput, fees, and confirmation time determine which mechanism suits retail, wholesale, or cross-border use.
  - Sitting beneath the Blockchain Domain, payment systems consume the digital assets defined elsewhere and provide the rails on which decentralised finance and commerce operate. The domain bridges to financial regulation because payment activity attracts anti-money-laundering and consumer-protection obligations. Separating the movement of value from the asset and the rulebook keeps each concern independently describable.

- ### Provenance
  - sources:: [[ISO 20022]], [[CPMI-IOSCO PFMI]]
  - migration-date:: 2026-05-29T00:00:00Z