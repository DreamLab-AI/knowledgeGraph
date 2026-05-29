- ### Definition
  - Cross-Border Payments are financial transactions that originate in one country and are settled in another, requiring currency conversion and multi-jurisdiction clearing. Traditional correspondent banking routes incur multi-day settlement cycles and layered fees; blockchain-based rails—including stablecoins, payment channels, and CBDCs—reduce settlement to minutes and lower intermediary costs. They sit at the intersection of monetary policy, regulatory compliance, and distributed-ledger technology.

- ### Semantic Classification
  - owl-class:: cross-border-payments:Cross-Border Payments
  - owl-role:: Concept

- ### Relationships
  - uses [[Stablecoin]]
  - uses [[Lightning Network]]
  - requires [[Smart Contract]]
  - dependsOn [[Consensus Mechanism]]
  - relatedTo [[Decentralised Finance]]

- ### Content
  - Cross-Border Payments represent one of the highest-friction areas in global finance, relying historically on SWIFT messaging and chains of correspondent banks. Each intermediary in the correspondent chain adds cost, delay, and opacity. Blockchain-based alternatives address these pain points through atomic settlement, programmable escrow via smart contracts, and stablecoin denomination that avoids FX volatility during transit.
  - Payment channels such as the Lightning Network offer near-instant micro-payment settlement with negligible fees, making them suitable for remittance corridors where transaction values are small. Stablecoins pegged to major fiat currencies allow senders and receivers to transact without holding speculative cryptocurrency.
  - Regulatory considerations are significant: cross-border flows trigger AML/KYC obligations in both originating and destination jurisdictions, and FATF Travel Rule requirements apply above threshold amounts. Interoperability between domestic payment systems and blockchain rails—such as ISO 20022 integration—remains an active area of standardisation. Central Bank Digital Currencies (CBDCs) represent a government-backed variant that could reshape correspondent banking by enabling direct central-bank-to-central-bank settlement.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z