Anti-Money Laundering (AML) encompasses the legislative frameworks, regulatory obligations, and operational procedures that financial institutions and other regulated entities must implement to detect, prevent, and report the concealment and integration of proceeds from criminal activity. AML programmes are built around customer due diligence (CDD), enhanced due diligence (EDD) for high-risk relationships, continuous transaction monitoring, suspicious activity reporting (SAR), and sanctions screening against watch-lists maintained by bodies such as OFAC, the EU, and the UN. International standards are promulgated by the Financial Action Task Force (FATF) through its Forty Recommendations and transposed into national law by member jurisdictions, covering banks, virtual asset service providers (VASPs), lawyers, accountants, and real-estate agents. Modern AML increasingly relies on machine learning, graph analytics, and RegTech automation to surface complex layering schemes that evade traditional rule-based systems.

### Overview

- AML as a formal regulatory discipline emerged from the US Bank Secrecy Act 1970 and was internationalised through the FATF's establishment in 1989 by the G7.
- The core policy rationale is that financial systems should not serve as conduits for converting criminal proceeds — from drug trafficking, corruption, fraud, tax evasion, human trafficking, and terrorism financing — into apparently legitimate assets.
- Regulated entities are not merely passive reporters; they are co-opted into law enforcement as private gate-keepers who must apply a risk-based approach (RBA) calibrated to their specific customer base, geography, products, and delivery channels.
- Non-compliance carries severe consequences: regulatory fines (frequently in the billions for systemic failures), loss of banking licence, personal criminal liability for senior compliance officers, and reputational damage that can trigger bank runs.
- The FATF Mutual Evaluation process peer-reviews national AML regimes and publishes public ratings that affect sovereign credit standing and correspondent banking relationships.
- AML obligations extend beyond traditional banks to cover money services businesses (MSBs), real estate agents, lawyers, accountants, trust and company service providers, casinos, and — via the FATF Travel Rule — virtual asset service providers (VASPs).

### Key Components

#### Customer Due Diligence (CDD) and KYC

- [[Know Your Customer]] (KYC) is the entry point: verifying the legal identity of customers through government-issued documents, biometric checks, and database lookups against PEP (politically exposed persons) and sanctions lists.
- Simplified CDD applies to lower-risk customers; [[Enhanced Due Diligence]] (EDD) applies to higher-risk relationships such as PEPs, correspondent banking, and high-value private banking.
- Beneficial ownership determination — identifying the natural persons who ultimately own or control a legal entity — is a critical obligation under FATF Recommendation 24, increasingly enforced through public beneficial ownership registries.
- Customer risk-rating models assign scores based on customer type, source of funds, product usage, and geography; these ratings drive monitoring intensity.

#### Transaction Monitoring

- [[Transaction Monitoring]] systems apply rule-based and statistical detection scenarios to flag payments, transfers, or account-level behaviours indicative of placement, layering, or structuring.
- Classical rules include cash structuring alerts (deposits just below reporting thresholds), rapid in-and-out flows, use of multiple jurisdictions in short time windows, and round-dollar transactions.
- Modern systems overlay [[Machine Learning]] — particularly unsupervised [[Anomaly Detection]] and [[Graph Neural Network]] analysis of the transaction network — to detect novel typologies and reduce false-positive rates, which in legacy systems can exceed 95%.
- Network-link analysis exposes hidden relationships between accounts, revealing beneficial ownership structures, shell company chains, and money mule networks.

#### Suspicious Activity Reporting (SAR)

- When investigation confirms suspicious activity cannot be explained, compliance officers file a [[Suspicious Activity Reporting]] (SAR/STR) with the national financial intelligence unit (FIU) — e.g., the NCA in the UK, FinCEN in the US.
- Tipping off — alerting the customer that a SAR has been filed — is a criminal offence in most jurisdictions.
- FIUs (coordinated globally by the Egmont Group) analyse SAR data to generate tactical and strategic financial intelligence for law enforcement.

#### Sanctions Screening

- [[Sanctions Screening]] checks customers and counterparties against consolidated watch-lists published by OFAC (US), HMRC/OFSI (UK), the EU, and the UN Security Council.
- Real-time payment screening must process transactions within milliseconds, requiring highly optimised fuzzy-matching algorithms to catch name variants and transliteration differences.
- Evasion typologies include use of front companies, third-party intermediaries, and — increasingly — virtual assets to break the chain to sanctioned entities.

#### Beneficial Ownership and Corporate Transparency

- Shell companies and opaque corporate structures are a primary money-laundering vehicle; FATF Recommendations 24 and 25 require national registries to capture beneficial ownership data.
- The EU Corporate Sustainability Reporting Directive and the US Corporate Transparency Act represent recent legislative advances pushing beneficial ownership into public domain.

### Applications and Use Cases

- **Retail Banking**: automated KYC onboarding with document OCR and liveness detection; real-time transaction monitoring with ML-tuned alert thresholds.
- **Correspondent Banking**: enhanced due diligence on respondent banks to prevent nested account abuse; automated SWIFT payment filtering against sanctions lists.
- **Virtual Asset Service Providers (VASPs)**: FATF Travel Rule compliance requiring originator and beneficiary wallet attribution on transfers; blockchain analytics tools (Chainalysis, Elliptic) tracing on-chain flows to known illicit addresses.
- **Trade Finance**: detection of trade-based money laundering (TBML) through price comparison databases and dual-use goods screening.
- **Real Estate**: due diligence on high-value property transactions to prevent use of real estate as a store for criminal proceeds.
- **Private Banking**: EDD and source-of-wealth verification for high-net-worth individuals, particularly those with PEP exposure.
- **Insurance**: life insurance premium cycling as a layering technique; AML controls on large single premium policies and early redemptions.
- **RegTech Platforms**: cloud-native case management, automated regulatory reporting, AI-driven alert prioritisation; vendors include NICE Actimize, Temenos Financial Crime Mitigation, and Oracle Financial Services.
- **Federated AML**: financial institutions exploring [[Federated Learning]] to train shared detection models across institution boundaries without sharing raw transaction data, preserving confidentiality while improving detection coverage.
- **Zero-Knowledge Compliance**: research into [[Zero-Knowledge Proof]] protocols that allow compliance attestations (e.g., "customer is not on a sanctions list") to be shared with counterparties without revealing underlying PII.

### Mechanisms and Regulatory Architecture

- **Risk-Based Approach (RBA)**: the FATF paradigm under which institutions calibrate AML controls proportionally to assessed risk rather than applying uniform, tick-box rules. National risk assessments inform sector-level risk appetite.
- **Four Eyes Principle**: suspicious activity decisions must be reviewed by at least two qualified persons (analyst + compliance officer) before SAR filing.
- **Derisking**: a systemic negative externality where banks exit entire customer categories (MSBs, charities, correspondent relationships with certain jurisdictions) rather than manage complex AML risk; reduces financial inclusion.
- **Regulatory Arbitrage**: laundering schemes deliberately exploit gaps between national AML regimes; FATF mutual evaluation and technical assistance aims to close asymmetries.
- **Typologies**: FATF and the Egmont Group publish recurring money-laundering typologies — real estate, crypto, professional money laundering networks (PMLNs), TBML — guiding detection scenario design.
- **Consolidation and Pooled Utilities**: industry-level KYC utilities (e.g., SWIFT KYC Registry, Encompass) allow institutions to pool identity verification costs and share data under strict legal frameworks.

### Standards and Context

- **FATF Forty Recommendations**: the global standard for AML/CFT, structured around risk assessment, financial institution requirements, transparency, international co-operation, and enforcement. FATF Recommendation 15 explicitly brings virtual assets into scope.
- **FATF Travel Rule (Recommendation 16)**: requires VASPs to pass originator and beneficiary information with virtual asset transfers above threshold (USD/EUR 1,000 in most jurisdictions). Implementation protocols include TRISA, OpenVASP, and TRUST.
- **EU AML Directives**: the EU has enacted six successive AML Directives (AMLD1–AMLD6), progressively expanding scope, harmonising beneficial ownership registration, and criminalising self-laundering and aiding and abetting.
- **EU AML Package (2024)**: the EU adopted a new regulation (AMLR) directly applicable without national transposition, and established a new EU AML Authority (AMLA) to directly supervise high-risk financial institutions and coordinate FIUs from 2026.
- **US Bank Secrecy Act / Patriot Act**: foundational US framework; FinCEN administers reporting requirements; the Anti-Money Laundering Act of 2020 modernised beneficial ownership reporting and enhanced FinCEN powers.
- **Egmont Group**: international network of 166 FIUs enabling cross-border financial intelligence sharing under bilateral agreements.
- **Wolfsberg Group**: association of 13 global banks publishing private-sector AML guidance on correspondent banking, trade finance, private banking, and virtual assets.
- **Basel AML Index**: annual independent ranking of country-level AML/CFT risk maintained by the Basel Institute on Governance, used by financial institutions for jurisdiction risk-rating.
- **FATF Grey List / Black List**: public listing of jurisdictions under increased monitoring (grey) or subject to a call for countermeasures (black/IQSQ); material impact on correspondent banking access and sovereign risk.

### Provenance

## Merged from AML (needs reconciliation)
Anti-Money Laundering (AML) is the body of laws, regulations, policies, and operational controls that obligate financial institutions to detect, prevent, and report the process by which criminals disguise proceeds of illegal activity as legitimate income. AML frameworks encompass Know Your Customer (KYC) identity verification, ongoing transaction monitoring, suspicious activity reporting (SAR), and risk-based compliance programmes overseen by regulators such as the Financial Action Task Force (FATF), FinCEN, and national supervisory authorities. Machine learning and network analytics have become central to modern AML systems, enabling real-time anomaly detection and entity-resolution across large transaction graphs. Regulated entities that fail to meet AML obligations face substantial financial penalties, licence revocations, and criminal liability.

### Overview

- Money laundering is estimated by the United Nations Office on Drugs and Crime to represent a large fraction of global GDP annually, channelling proceeds of drug trafficking, corruption, fraud, and organised crime back into the legitimate economy.
- AML frameworks emerged from the Bank Secrecy Act (1970, United States), the Vienna Convention (1988), and subsequent FATF Recommendations (1989–present), which established a global baseline of controls now adopted by over 200 jurisdictions.
- Financial institutions bear primary responsibility for compliance. Regulators — including [[FinCEN]] (US), the FCA (UK), BaFin (Germany), and MAS (Singapore) — supervise implementation and levy penalties for deficiencies.
- The three-stage laundering model — *placement*, *layering*, and *integration* — guides the design of detection controls. Placement moves illicit cash into the financial system; layering obscures trails through multiple transactions; integration reintroduces funds as apparently legitimate assets.
- AML compliance is distinct from but complementary to [[Fraud Detection]] and [[Sanctions Screening]]; together these form a broader financial-crime compliance (FCC) programme.

### Key Components

#### Customer Due Diligence (CDD) and KYC

- [[Know Your Customer]] establishes and verifies customer identity at onboarding using government-issued documents, biometric checks, and data-matching against watchlists.
- Enhanced Due Diligence (EDD) applies to higher-risk customers such as Politically Exposed Persons (PEPs) and high-net-worth individuals from high-risk jurisdictions.
- [[Customer Due Diligence]] is an ongoing obligation, not a one-time check — periodic refreshes and trigger-event reviews are required.

#### Transaction Monitoring

- [[Transaction Monitoring]] systems apply rules and statistical models to detect transaction patterns indicative of layering or structuring (e.g. smurfing — splitting large sums into sub-threshold deposits).
- Rule-based systems set thresholds (e.g. cash transactions above $10,000 in the US) but generate high false-positive rates. [[Machine Learning]] models — including gradient-boosted trees, [[Anomaly Detection]] autoencoders, and recurrent neural networks — improve precision.
- [[Graph Analytics]] and network analysis reveal indirect relationships: identifying shell-company networks, beneficial ownership chains, and circular fund flows that evade per-transaction rules.

#### Suspicious Activity Reporting (SAR)

- When monitoring systems flag suspicious activity, compliance officers file SARs with financial intelligence units (FIUs) such as FinCEN or the National Crime Agency (NCA, UK).
- SAR quality — specificity, timeliness, and actionability — is a regulatory focus. [[Natural Language Processing]] tools assist analysts in drafting and enriching SAR narratives.

#### Risk Scoring

- [[Risk Scoring]] models assign customers, accounts, and counterparties an ongoing risk rating that governs monitoring intensity and review frequency.
- Factors include geography, industry, transaction velocity, PEP status, adverse media, and deviation from expected behaviour (customer risk profiling).

#### Identity Verification

- [[Identity Verification]] underpins KYC and increasingly leverages digital identity standards, liveness detection, and cross-border identity federation.

### Applications and Use Cases

- **Retail banking**: transaction monitoring for personal and SME accounts, flagging unusual cash deposits, rapid fund movements, and international wire patterns.
- **Correspondent banking**: screening of cross-border payment flows and de-risking decisions where AML costs outweigh expected revenue.
- **Cryptocurrency exchanges**: FATF's Travel Rule (Recommendation 16) requires virtual-asset service providers (VASPs) to transmit originator and beneficiary information alongside transfers, integrating [[Blockchain]] analytics tools (Chainalysis, Elliptic) for on-chain tracing.
- **Trade finance**: detection of trade-based money laundering (TBML), where invoices are falsified to move value across borders under the cover of goods and services.
- **Insurance**: screening for premium-payment laundering and suspicious claim patterns.
- **Federated compliance**: [[Federated Learning]] enables banks to train shared AML models on pooled signals without sharing raw customer data — addressing privacy constraints under GDPR and equivalent regimes.
- **Regulatory technology (RegTech)**: purpose-built AML platforms (e.g. NICE Actimize, Oracle Financial Services, Temenos) provide integrated CDD, monitoring, and case management.

### Standards and Context

- **FATF Recommendations**: The Financial Action Task Force's 40 Recommendations are the primary international standard. FATF mutual evaluations assess country-level compliance; poor ratings result in grey- or blacklisting with severe economic consequences.
- **EU AMLD series**: The EU Anti-Money Laundering Directives (4AMLD, 5AMLD, 6AMLD) harmonise AML obligations across member states, expanding beneficial ownership registers, crypto-asset coverage, and criminal liability.
- **Bank Secrecy Act / FinCEN**: US regulations require Currency Transaction Reports (CTR) and SARs; FinCEN's Customer Due Diligence rule (2018) mandated beneficial ownership identification for legal-entity customers.
- **Basel III/IV**: The Basel Committee on Banking Supervision integrates AML risk into broader operational risk and governance frameworks, requiring documented AML risk appetites and board oversight.
- **FATF Travel Rule (R.16)**: Requires payment and VASP originators to transmit identifying information with transfers above threshold — extending AML obligations into the crypto-asset ecosystem.
- **Wolfsberg Group Principles**: Industry principles (by major correspondent banks) on correspondent banking, trade finance, and payment transparency that operationalise FATF guidance.
- **ISO 20022**: Richer payment messaging standard facilitating better structured data for AML screening and reducing false positives from poorly formatted SWIFT messages.

### Challenges and Open Problems

- **False positive overload**: Rule-based systems generate 90–95 % false-positive rates; analyst alert fatigue leads to genuine SAR under-filing.
- **Data silos**: AML signals are fragmented across product lines and jurisdictions; data-sharing between institutions is legally constrained in many markets.
- **Explainability vs accuracy**: Regulators expect human-understandable rationale for alerts; complex ensemble or deep-learning models create tension with [[Explainability]] requirements.
- **Typology evolution**: Criminals adapt rapidly; layering via decentralised finance (DeFi), NFT markets, and privacy coins creates new detection challenges.
- **Correspondent de-risking**: Banks exit high-risk markets entirely rather than invest in AML systems, reducing financial inclusion and shifting risk underground.
- **Beneficial ownership opacity**: Shell companies and nominee arrangements remain exploited; public registers vary in quality and update frequency across jurisdictions.

### Provenance

