- ### Definition
  - The Financial Infrastructure Domain classifies concepts concerning the systems that move, clear and settle value between parties. It covers payment rails, settlement, clearing and the messaging standards that connect institutions. As a top-level subject axis it provides the operational substrate on which financial services and markets depend.

- ### Semantic Classification
  - owl-class:: fininf:FinancialInfrastructureDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Blockchain Domain]], [[Financial Regulation Domain]]
  - has-part:: [[Payment Rail]], [[Settlement]], [[Clearing]], [[Messaging Standard]], [[Central Counterparty]]
  - requires:: [[Distributed Systems Domain]], [[Security Domain]]
  - enables:: [[Value Transfer]], [[Real Time Settlement]]

- ### Content
  - Financial infrastructure comprises the systems through which obligations between parties are recorded, netted and discharged. Payment rails transmit instructions, clearing determines net positions, and settlement transfers final value to extinguish obligations. These functions must be highly available, consistent and resilient to failure.
  - The domain relies on standardised messaging so that institutions can exchange instructions unambiguously across borders and systems. Central counterparties and settlement systems concentrate and manage risk, applying collateral and netting to limit exposure. Finality, the point at which a transfer becomes irrevocable, is a defining concern.
  - Financial infrastructure bridges to blockchain, which proposes alternative settlement models, and to financial regulation that supervises systemically important systems. It depends on distributed systems for consistency under failure and on security to protect high-value transfers.

- ### Provenance
  - sources:: [[ISO 20022]], [[CPMI-IOSCO PFMI]]
  - migration-date:: 2026-05-29T00:00:00Z