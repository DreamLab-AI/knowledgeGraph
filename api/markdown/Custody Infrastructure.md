Custody infrastructure refers to the integrated technological, operational, and regulatory systems that enable the secure holding, management, and transfer of digital assets on behalf of third parties. It encompasses hardware security modules (HSMs), multi-signature and multi-party computation (MPC) key management schemes, cold and warm storage tiers, policy engines, and compliance workflows that satisfy fiduciary and regulatory obligations. As the institutional-grade equivalent of a traditional custodian bank applied to blockchain-native assets, custody infrastructure underpins every regulated digital asset vehicle—from spot ETFs to tokenised real-world assets. Its design must simultaneously satisfy cryptographic security requirements, operational resilience, regulatory auditability, and the settlement latency demands of professional financial markets.

### Overview

- Custody infrastructure emerged from the failures of informal cryptocurrency custody arrangements. The collapses of Mt. Gox (2014), Bitfinex (2016), and FTX (2022) demonstrated that exchange-based custody—where client funds are commingled in operator-controlled hot wallets—creates systemic risk. The traditional financial system separates custody from trading; professional digital asset custody infrastructure replicates this separation.
- The core purpose is to ensure that [[Cryptographic Key]] material—the only mechanism by which digital assets can be authorised for transfer on a [[Blockchain Network]]—is generated, stored, and used in a manner that is:
  - Secure against external attack (theft of keys) and internal fraud (rogue employees)
  - Available for authorised transactions within acceptable latency windows
  - Auditable by regulators, auditors, and clients
  - Resilient against disaster (hardware failure, fire, geographic disruption)
- Custody infrastructure is foundational to the regulated digital asset economy. Regulated investment vehicles require [[Qualified Custodian]] relationships under securities law in most jurisdictions. Without reliable institutional custody, pension funds, endowments, and insurance companies cannot allocate to digital assets regardless of investment mandate. The launch of spot Bitcoin ETFs in the United States in January 2024 created a step-change in regulated custody demand.

### Key Components

#### Hardware Security Modules (HSMs)

- [[Hardware Security Module]] devices are tamper-resistant physical units that generate, store, and use cryptographic keys without ever exposing key material in plaintext. They are the foundational hardware component.
- HSMs used in digital asset custody include FIPS 140-2 or 140-3 Level 3 and Level 4 certified devices from vendors such as Thales, Utimaco, and nCipher.
- Custom silicon HSMs designed specifically for blockchain key operations (e.g., Ledger Enterprise Vault) offer improved throughput and support for non-standard elliptic curves.

#### Storage Tiers

- [[Cold Storage]]: key material held on air-gapped HSMs or hardware wallets in physically secured vaults, with no network connectivity. Signing ceremonies require physical presence and multi-party authorisation. Maximum security but high operational latency (hours to days for large movements).
- Warm storage: HSMs connected to internal networks but isolated from the public internet. Supports faster settlement (minutes) with reduced but still meaningful security controls.
- Hot wallets: network-connected signing infrastructure for high-frequency, low-value operations. Minimal percentage of custodied assets typically held here; often backed by insurance.

#### Key Management Systems

- [[Key Management System]] components handle the full lifecycle of cryptographic key material: generation (in HSM), backup and recovery (using Shamir Secret Sharing or equivalent), rotation, and destruction.
- Key ceremonies—formal, audited procedures for generating master keys—are a critical operational control, typically requiring multiple senior officers, external auditors, and recorded video evidence.

#### Multi-Party Authorisation

- [[Multi-Signature]] schemes require M-of-N independent signatories to co-sign a transaction before it is broadcast, distributing trust so no single person can act unilaterally.
- [[Multi-Party Computation]] (MPC) and [[Threshold Signature Scheme]] (TSS) approaches achieve equivalent security without on-chain visibility of the multi-party nature, improving privacy and reducing transaction fees.
- [[Multi-Party Computation]] custody has become the dominant paradigm for institutional providers as of 2024, with major platforms including Fireblocks, Copper, and Qredo building on MPC-TSS foundations.

#### Policy Engines

- [[Policy Engine]] components enforce governance rules before any signing operation: withdrawal limits per time period, counterparty whitelists, time-locks, and multi-level approval workflows.
- Policy engines integrate with identity and access management (IAM) systems, requiring authenticated human approvals for operations above defined thresholds.

#### Blockchain Analytics Integration

- [[Blockchain Analytics]] tools (Chainalysis, Elliptic, TRM Labs) are embedded into withdrawal workflows to screen destination addresses against sanctions lists, known illicit wallets, and risk-scoring models.
- Integration satisfies anti-money laundering (AML) and counter-terrorism financing (CTF) obligations under FATF Travel Rule requirements.

#### Compliance and Audit

- Custody infrastructure includes comprehensive logging, immutable audit trails, and reporting modules for regulatory examination, SOC 2 Type II certification, and client reporting.
- Smart contract-based custody solutions (e.g., [[Gnosis Safe]]) provide on-chain auditability through transparent policy enforcement.

### Applications and Use Cases

#### Spot Digital Asset ETFs

- Regulated ETF products (e.g., spot Bitcoin and Ether ETFs approved by the SEC in 2024) require assets to be held with a [[Qualified Custodian]]. Coinbase Custody serves as custodian for the majority of US-approved spot Bitcoin ETF products.
- Custody infrastructure must meet the operational and reporting requirements of fund administrators and prime brokers alongside the cryptographic requirements of digital asset security.

#### Institutional Asset Management

- Hedge funds, family offices, and asset managers with fiduciary obligations require segregated custody accounts with clear legal title. Custody infrastructure providers offer segregated sub-accounts with individual key sets per client.

#### Tokenised Real-World Assets (RWAs)

- [[Tokenised Real-World Assets]] such as tokenised government bonds, money market funds, and real estate tokens require custody infrastructure that can hold digital asset tokens alongside (or in lieu of) traditional securities positions.
- Emerging omnibus custody models allow tokenised securities and native crypto assets to be held within unified custody infrastructure.

#### Exchange Settlement and Prime Brokerage

- Custody infrastructure underpins the settlement layer for institutional over-the-counter (OTC) desks and prime brokerage services, enabling off-exchange settlement that reduces counterparty risk.

#### Institutional DeFi

- [[Institutional DeFi]] participation requires custody infrastructure that can interface with on-chain protocols while maintaining compliance controls. Smart contract-based custody (programmable custody) uses verified smart contracts as a policy layer, with custody keys held in HSMs but governed by on-chain logic.

#### Central Bank Digital Currencies (CBDCs)

- CBDC infrastructure design borrows from custody infrastructure patterns for managing institutional and wholesale CBDC holdings with appropriate authorisation controls.

### Standards and Regulatory Context

#### United States

- The OCC Interpretive Letter 1170 (July 2020) clarified that national banks may provide custody services for digital assets, establishing a foundation for bank-affiliated custody providers.
- The SEC's Qualified Custodian requirements under the Investment Advisers Act apply to advisers managing client digital assets; the 2023 proposed custodian rule extension to crypto assets generated significant industry response.
- SAB 121 (2022) required banks to record custody of client crypto assets as balance sheet liabilities, creating capital cost disincentives for bank custodians; partial legislative relief was pursued in 2024.
- NYDFS BitLicense framework and NYDFS Trust Company charter (held by, e.g., Paxos, BitGo NY Trust) provide state-level regulatory anchors for crypto custody in New York.
- Anchorage Digital became the first federally chartered digital asset bank under the OCC's conditional national trust charter in 2021.

#### European Union

- [[MiCA Regulation]] (Markets in Crypto-Assets Regulation, fully applicable from December 2024) establishes CASP (Crypto-Asset Service Provider) licensing requirements including explicit custody service authorisation.
- MiCA custody requirements mandate segregation of client assets, capital requirements, and operational resilience standards harmonised across EU member states.

#### Switzerland

- FINMA's 2019 guidance on stable coins and crypto banking created an early institutional custody framework. SEBA Bank and Sygnum Bank hold Swiss banking licences covering digital asset custody.

#### International Standards

- FATF Recommendation 16 (Travel Rule) applies to virtual asset service providers including custodians, requiring originator and beneficiary information to accompany transfers above threshold values.
- ISO/TC 307 (Blockchain and Distributed Ledger Technologies) is developing standards relevant to custody key management.
- SOC 2 Type II certification (AICPA) is the de facto operational assurance standard demanded by institutional clients of custody providers.

### Key Providers and Ecosystem

- Pioneering institutional custody providers include BitGo (founded 2013, first multi-sig custody), Coinbase Custody (2018), Fidelity Digital Assets (2018), and Anchorage Digital (2017).
- MPC-native platforms include Fireblocks (enterprise MPC wallet infrastructure), Copper (UK-based institutional), and Qredo (decentralised MPC network).
- Prime brokerage custody integration is offered by Galaxy Digital, Hidden Road, and Zodia Custody (Standard Chartered joint venture).
- On-chain / programmable custody is exemplified by [[Gnosis Safe]] (multi-sig smart contract with institutional modules) and emerging institutional DeFi custody rails.

### Security Threat Model

- External threats: network-based attacks on signing infrastructure, supply-chain compromise of HSM firmware, social engineering of operations staff.
- Internal threats: rogue employees with access to key shards or HSM administrative credentials; collusion between multiple key holders.
- Operational threats: disaster recovery failure, key ceremony process failure, geographic concentration of cold storage facilities.
- Cryptographic threats: advances in [[Quantum Computing]] threatening ECDSA and EdDSA schemes used for most blockchain transaction signing; post-quantum signature migration is a long-term concern for custody infrastructure design.
- Mitigations include geographic distribution of [[Cold Storage]] vaults, insurance coverage (Lloyd's of London syndicates offer crypto custody insurance), penetration testing programmes, and third-party audits.

### Current Landscape (2026)

- On 23 January 2025 the SEC issued Staff Accounting Bulletin 122, rescinding SAB 121 and removing the requirement that banks gross up custodied crypto onto their own balance sheets, which had effectively blocked bank-scale custody since 2022; the FDIC then rescinded FIL-16-2022 in March 2025, reopening the door for regulated custodians.
- US federal chartering advanced sharply: on 12 December 2025 the OCC conditionally approved five national trust bank charters for digital-asset custody — BitGo Bank & Trust, Fidelity Digital Assets, Paxos Trust, Circle's First National Digital Bank and Ripple National Trust Bank — joining Anchorage Digital, which held the only such charter (since January 2021) for over four years.
- The GENIUS Act (Senate 68-30 on 17 June 2025, signed 18 July 2025, effective January 2027) created the first federal payment-stablecoin regime, specifying permitted federal and state custodial categories, mandating 1:1 high-quality-liquid-asset reserves and seize/freeze/burn capability, and firewalling stablecoin issuance into capital-segregated bank subsidiaries.
- In the EU, MiCA's Title V custody rules applied from 30 December 2024 with a transitional window closing at the hard enforcement deadline of 1 July 2026 (ESMA confirming no extension); Article 75 uniquely codifies on-chain segregation of client assets onto separate ledger addresses, sets a €125,000 minimum for custody services and makes custodians liable for client asset loss.
- The definition of qualified custody shifted from mere key possession toward legal/operational segregation, bankruptcy-remoteness and verifiable proof of reserves; SEC staff no-action relief on 29 September 2025 confirmed state-chartered trust companies can serve as qualified custodians for RIAs, and NYDFS updated its virtual-currency custody guidance on 30 September 2025.
- Market structure consolidated around MPC-plus-HSM and multi-sig architectures: Fireblocks (MPC-CMP with TEE, NYDFS trust charter secured 2025, ~$1bn aggregate insurance), BitGo (~$90bn AUC by July 2025), Coinbase Custody (over $220bn AUC), and Anchorage lead, while incumbents BNY Mellon (tokenised deposits announced January 2026) and US Bank (custody resumed September 2025) re-entered.
- Open challenges centre on governance rather than cryptography — the Bybit breach was a transaction-authorisation failure, not a key-compromise — driving focus on policy-enforcement layers, transaction simulation, tested recovery/key-refresh ceremonies, MiCA's ban on delegating custody to unauthorised sub-providers, and reconciling omnibus wallet structures with per-client segregation expectations.

### References

- 1. Clifford Chance (2025). SEC rescinds 2022 accounting guidance regarding crypto-assets under custody and issues new guidance (SAB 122). https://www.cliffordchance.com/content/dam/cliffordchance/briefings/2025/01/SEC%20rescinds%202022%20accounting%20guidance%20regarding%20crypto-assets%20under%20custody%20and%20issues%20new%20guidance.pdf
- 2. Ankura (2026). SEC Rescinds Crypto Accounting Rule: What It Means for Money Transmitters and Digital Asset Custody. https://ankura.com/insights/sec-rescinds-crypto-accounting-rule-what-it-means-for-money-transmitters-and-digital-asset-custody
- 3. CoinLaw (2026). Crypto Custody Regulations 2026: US vs EU. https://coinlaw.io/crypto-custody-regulations/
- 4. CertiK (2025). Skynet U.S. Digital Asset Policy Report. https://www.certik.com/skynet-report/certik-us-digital-asset-policy-report
- 5. StateBay (2026). Crypto Custody Licensing 2026: MiCA, FCA, FINMA, MAS. https://statebay.com/blog/crypto-custody-license-requirements-institutional-2026
- 6. Changelly (2026). Crypto Custody in 2026: Multisig, MPC, and Qualified Custodians. https://changelly.com/blog/crypto-custody-in-details/

### Provenance

