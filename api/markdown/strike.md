- ### Definition
  - Strike is a [[FinTech]] payments platform built atop the [[Bitcoin]] [[Lightning Network]] that enables instant, globally accessible money transfers at near-zero cost. Founded by Jack Mallers, it functions as an abstraction layer that converts fiat currency at the point of entry, routes value across [[Lightning Network]] [[Payment Channel]] topology, and reconverts to the recipient's preferred currency at the point of exit. This edge-conversion model means end users may interact entirely in [[Fiat Currency]] without ever touching [[Cryptocurrency]] directly, while still benefiting from the settlement speed and cost efficiency of Bitcoin's second-layer protocol. Strike positions itself as a challenger to [[Correspondent Banking]] and legacy [[Remittance]] operators on both price and speed.

- ### Overview
  - Strike was founded in 2019 by Jack Mallers and is headquartered in Chicago, Illinois. It provides consumer-facing mobile applications and a developer-facing API under the [[Open Payments Protocol]] standard, enabling businesses and individuals to send and receive money internationally.
  - The platform's core innovation is the use of [[Bitcoin]] and the [[Lightning Network]] as a neutral, permissionless monetary rail, invisible to end users who interact only with their local currency. This allows Strike to route a US-dollar payment to El Salvador in seconds at a fraction of the cost of a traditional [[Remittance]] transfer via services such as [[Western Union]] or [[SWIFT Network]].
  - Strike played a prominent role in El Salvador's adoption of Bitcoin as legal tender in 2021, providing the technology behind the Chivo wallet and advising the Salvadoran government on [[Bitcoin]] adoption policy.
  - The company holds money-transmitter licences in multiple US states and operates under [[KYC/AML Compliance]] regimes, distinguishing it from purely self-custodial [[Lightning Network]] wallets. This regulatory posture enables institutional and business integrations but introduces custodial risk for end-user funds.
  - Strike's developer API supports programmatic [[Instant Settlement]] into bank accounts, enabling e-commerce and payroll applications to leverage [[Lightning Network]] without building their own [[Node Operation]] infrastructure.

- ### Key Mechanisms
  - **Edge Conversion Model** — the sender pays in their local [[Fiat Currency]]; Strike converts to [[Bitcoin]] satoshis internally, routes via the [[Lightning Network]], and the recipient's Strike account or connected bank account receives the destination currency. Neither party need manage [[Cryptocurrency]].
  - **[[Lightning Network]] Settlement** — value flows through pre-funded [[Payment Channel]] networks, exploiting [[Hash Time-Locked Contracts]] (HTLCs) to enforce atomic multi-hop routing. This is the mechanism that provides [[Instant Settlement]] and near-zero fees.
  - **[[BOLT Protocol]] Compliance** — Strike's infrastructure adheres to Basis of Lightning Technology ([[BOLT Protocol]]) specifications, ensuring interoperability with third-party [[Lightning Network]] nodes, wallets, and services.
  - **[[Liquidity Management]]** — Strike maintains inbound and outbound [[Lightning Network]] liquidity across payment corridors to ensure routing success rates. This is a capital-intensive operational requirement that functions as a moat against smaller competitors.
  - **Invoicing and LNURL** — Strike supports Lightning invoices (BOLT-11) and LNURL-pay extensions, enabling interoperability with wallets such as Phoenix, Breez, and Muun, as well as point-of-sale integrations.
  - **Fiat On-Ramp / Off-Ramp** — domestic bank-account linkage (ACH in the US) and card funding provide the fiat interface, with regulatory compliance enforced at these entry and exit points.
  - **[[API Integration]] for Merchants** — Strike's merchant API enables e-commerce platforms to accept payments in any currency and settle in their preferred currency, abstracting [[Cryptocurrency]] volatility.

- ### Applications and Use Cases
  - **International [[Remittance]]** — workers in the United States send money to family members in El Salvador, the Philippines, Nigeria, and elsewhere at dramatically lower fees than traditional [[Remittance]] operators. The [[Lightning Network]] corridor removes [[Correspondent Banking]] intermediary fees and multi-day settlement delays.
  - **[[Merchant Payments]]** — physical and online merchants in supported markets accept Strike payments, settling to bank accounts in local currency, without needing to hold [[Bitcoin]] or manage [[Cryptocurrency Exchange]] exposure.
  - **[[Micropayments]]** — Strike's Lightning integration supports value transfers below one US cent, enabling use cases such as pay-per-article media, streaming-money for API consumption, and machine-to-machine payments that are impractical on traditional payment rails.
  - **Payroll** — employers use Strike's API to pay international contractors and employees in their local currency, funding payroll in USD and routing via [[Lightning Network]] to recipients who receive local currency equivalents in seconds.
  - **Bitcoin Savings** — Strike offers a "buy Bitcoin" feature that allows users to accumulate [[Bitcoin]] as a savings instrument, separate from the payments function, addressing the store-of-value narrative distinct from the medium-of-exchange narrative.
  - **Humanitarian and [[Financial Inclusion]] Payments** — in regions with limited banking infrastructure, Strike accounts can be opened with a mobile phone and an email address, lowering the barrier to [[Financial Inclusion]] for unbanked populations.
  - **Point-of-Sale Integration** — retail merchants integrate Strike via QR-code-based Lightning invoice flows, enabling tap-to-pay and scan-to-pay at low marginal cost.

- ### Relationships
  - requires:: [[Lightning Network]], [[Bitcoin]], [[Payment Channel]], [[Liquidity Management]]
  - uses:: [[Hash Time-Locked Contracts]], [[BOLT Protocol]], [[Fiat Currency]], [[API Integration]]
  - enables:: [[Remittance]], [[Instant Settlement]], [[Micropayments]], [[Merchant Payments]]
  - dependsOn:: [[Bitcoin Blockchain]], [[Node Operation]], [[KYC/AML Compliance]]
  - contrastsWith:: [[Western Union]], [[SWIFT Network]], [[Correspondent Banking]], [[PayPal]]
  - relatedTo:: [[Open Payments Protocol]], [[Financial Inclusion]], [[Digital Dollar]], [[Cryptocurrency Exchange]]
  - bridges-to:: [[Open Banking]], [[Decentralised Finance]]
  - subClassOf:: [[Cross-Border Payments]]

- ### Competitive and Strategic Context
  - Strike occupies a position distinct from self-custodial [[Lightning Network]] wallets (e.g. Phoenix, Breez) in that it holds user funds in a regulated custodial account, enabling compliance-grade integrations but sacrificing the self-sovereignty that Bitcoin proponents prioritise.
  - Versus [[Decentralised Finance]] platforms, Strike is deliberately centralised at the application layer, accepting regulatory friction in exchange for accessibility and fiat interoperability.
  - Versus [[Open Banking]] rails such as SEPA Instant or FedNow, Strike's advantage is global reach in corridors where domestic faster-payment rails are absent or unconnected, and in cross-currency flows where [[Correspondent Banking]] fees remain high.
  - The [[Financial Inclusion]] dimension is significant: Strike accounts are accessible to individuals without a traditional bank account, provided they have a mobile device, offering a pathway into the global payments system for underbanked populations.
  - Competition includes other Lightning-native payment processors (BitPay, OpenNode), as well as [[FinTech]] remittance platforms (Wise, Remitly), though Strike's direct Lightning routing and edge-conversion architecture differentiates it on cost in specific corridors.

- ### Standards and Regulatory Context
  - **[[BOLT Protocol]]** — Strike's Lightning implementation follows the Basis of Lightning Technology specifications (BOLTs 1–12) maintained by the Lightning Network developer community, ensuring wire-level interoperability.
  - **Money Transmitter Licences** — Strike holds licences in the majority of US states and operates under FinCEN (Financial Crimes Enforcement Network) regulations as a money services business, requiring [[KYC/AML Compliance]] for all account holders.
  - **[[Open Payments Protocol]]** — Strike is a contributor to and adopter of the Open Payments Protocol standard, enabling interoperable payment initiation across different wallet and bank implementations via open web standards (Interledger Protocol lineage).
  - **El Salvador Bitcoin Law (2021)** — Strike's involvement in El Salvador's legal-tender Bitcoin framework constitutes a real-world regulatory pilot for Lightning-native national payments infrastructure.
  - **BIP-21 URI Scheme** — Strike supports the [[Bitcoin]] Improvement Proposal 21 URI scheme for payment request encoding, enabling interoperability with Bitcoin wallet software.
  - **LNURL Standards** — Strike implements LNURL-pay and LNURL-withdraw, community-driven Lightning interoperability extensions that simplify payment flows across wallet implementations.

- ### Provenance
  - sources:: Strike official documentation; Lightning Network BOLT specifications; El Salvador Bitcoin Law coverage; Jack Mallers public presentations; Open Payments Protocol specification
  - updated:: 2026-06-13
  - migration-date:: 2026-05-29T00:00:00Z