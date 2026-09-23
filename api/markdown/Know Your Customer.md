
Know Your Customer (KYC) is a regulatory and compliance process by which financial institutions and other regulated entities verify the identity of their clients, assess their risk profiles, and understand the nature of their financial activities to prevent money laundering, terrorist financing, and other financial crimes. KYC encompasses identity document verification, biometric checks, beneficial ownership disclosure, and ongoing transaction monitoring. The process is mandated by the Financial Action Task Force (FATF) recommendations and implemented through national legislation including the EU Anti-Money Laundering Directives, the US Bank Secrecy Act, and equivalent statutes in over 200 jurisdictions.

- ### Overview
  - KYC exists to close the information gap between regulated institutions and their clients, ensuring that financial services are not used as conduits for [[Money Laundering]], terrorist financing, or other financial crimes. When an institution accepts a new customer, it must establish that person's or entity's true identity, understand the purpose of the business relationship, and assess the risk that relationship poses.
  - The requirement has roots in the US Bank Secrecy Act (1970), which first imposed record-keeping and reporting obligations on financial institutions. The [[Financial Action Task Force]], established in 1989 by the G7, produced the 40 Recommendations that became the de-facto global standard, subsequently adopted by over 200 jurisdictions through the FATF's Global Network of associate members.
  - KYC is not a one-time event but an ongoing cycle: initial onboarding checks, periodic review, and event-driven re-verification (e.g., when a customer's transaction patterns change unexpectedly). The intensity of due diligence scales with customer risk tier — standard, enhanced, or simplified — allowing institutions to calibrate operational cost against regulatory obligation.
  - The RegTech sector has matured around KYC, with specialised providers offering API-accessible identity orchestration, reducing onboarding times from days to minutes whilst improving accuracy through automation.

- ### Key Components
  - #### Identity Verification
    - **Document verification** — optical character recognition ([[Optical Character Recognition]]) extracts data from passports, national identity cards, and driving licences; format-validation logic checks against issuing authority templates to detect tampering or forgery.
    - **[[Biometric Verification]]** — liveness detection (passive or active challenge) compares a selfie or short video against the document photograph using [[Facial Recognition]] algorithms, guarding against identity spoofing with printed images or masks.
    - **Database cross-referencing** — extracted identity data is checked against issuing-country databases where accessible, credit reference agencies, and utility records to confirm the person exists and lives where stated.
  - #### Risk Classification
    - **[[Sanctions Screening]]** — real-time and batch matching against OFAC (US), UN, EU, HMT (UK), and OFSI consolidated lists to identify restricted or prohibited parties.
    - **[[Politically Exposed Person]] (PEP) checks** — identifying customers who hold or have held prominent public functions, or their immediate family and known associates, triggering enhanced due diligence.
    - **Adverse media screening** — natural language processing scans news sources for negative coverage associated with the customer's name or associated entities.
    - **Risk scoring** — aggregating signals (jurisdiction, industry, transaction type, ownership structure) into a composite [[Risk Assessment]] score that determines monitoring frequency and thresholds for suspicious activity reports (SARs).
  - #### [[Beneficial Ownership]]
    - Identifying ultimate beneficial owners (UBOs) behind corporate structures is a critical KYC component, preventing complex ownership chains from being used to obscure the true controller of funds. Jurisdictions enforce beneficial ownership registers (e.g., Companies House in the UK, FinCEN's BOI register in the US post-2024 Corporate Transparency Act).
  - #### Ongoing Monitoring
    - Transaction monitoring systems flag anomalies against expected customer behaviour profiles, using rules-based and [[Machine Learning]]-driven models. Trigger events prompt re-KYC: changes in beneficial ownership, entering sanctioned jurisdictions, or threshold-crossing transactions.

- ### Mechanisms
  - **Customer onboarding flow** — document capture (web/mobile SDK), liveness check, identity orchestration across data sources, risk scoring, compliance decision (approve / review / decline).
  - **Periodic review** — scheduled re-verification at intervals determined by risk tier; high-risk customers may require annual refresh; standard customers every three to five years.
  - **Event-driven re-KYC** — triggered by changes in beneficial ownership, adverse media hits, sanctions list additions, or unusual transaction patterns flagged by [[Anti-Money Laundering]] monitoring.
  - **[[Zero-Knowledge Proof]] integration (emerging)** — allows a customer to prove they have passed KYC without disclosing the underlying identity data; the verifier receives a cryptographic attestation rather than raw documents, preserving [[Privacy by Design]] whilst satisfying regulatory requirements.
  - **[[Verifiable Credential]] and [[Decentralised Identity]]** — W3C standards enabling portable, cryptographically signed KYC attestations issued by one regulated institution and presented to another, reducing duplication and friction; still in regulatory sandbox phase across most jurisdictions.
  - **FATF Travel Rule** — Recommendation 16 requires virtual asset service providers (VASPs) to transmit originator and beneficiary identity information alongside transfers above threshold values, analogous to SWIFT messaging requirements for traditional wire transfers.

- ### Applications and Use Cases
  - **Retail banking** — current account and savings account opening, mortgage and loan applications, mandatory refresh cycles.
  - **Investment and brokerage** — securities regulations (MiFID II in the EU, FINRA in the US) require suitability assessments layered on top of KYC identity checks.
  - **Cryptocurrency exchanges** — EU Markets in Crypto-Assets ([[MiCA]]) regulation mandates KYC for all crypto-asset service providers; equivalent requirements exist under US FinCEN rules and FATF guidance for VASPs.
  - **Insurance** — KYC applies at policy inception for higher-value products; Solvency II and local insurance codes specify scope.
  - **Payments and e-money** — electronic money institutions, payment service providers, and open banking participants conduct KYC proportionate to transaction value and risk (lighter-touch for small prepaid instruments under EU AMLD5 thresholds).
  - **Corporate onboarding** — KYC for legal entities involves document packs (certificate of incorporation, articles of association, shareholder registers), UBO identification, and director verification, often requiring months for complex multinational structures.
  - **RegTech API services** — third-party providers (Onfido, Jumio, Trulioo, Veriff, Sumsub, LexisNexis Risk Solutions) offer modular KYC pipelines integrated into onboarding portals via REST APIs, enabling banks and fintechs to outsource identity orchestration.
  - **Shared KYC utilities** — industry consortia (e.g., Swift's KYC Registry for correspondent banking) allow institutions to share verified corporate KYC data, reducing duplicate data collection and cost.

- ### Standards and Regulatory Context
  - **[[Financial Action Task Force]] (FATF)** — the intergovernmental body setting global AML/CFT standards; Recommendations 10–12 specify CDD (Customer Due Diligence) obligations; Recommendation 16 covers the Travel Rule; Recommendation 15 addresses virtual assets and VASPs. Countries are peer-reviewed (Mutual Evaluation Reports) and placed on grey or black lists for non-compliance.
  - **EU Anti-Money Laundering Directives (AMLD)** — the EU's legislative framework; AMLD5 (2018) extended KYC to cryptocurrency exchanges and custodian wallet providers; AMLD6 (2021) broadened predicate offences and increased criminal liability; the proposed EU AML Regulation (2024) would create a directly applicable EU-wide rulebook enforced by the new EU Anti-Money Laundering Authority (AMLA).
  - **US Bank Secrecy Act / FinCEN rules** — the foundational US statute; FinCEN's Customer Due Diligence Rule (2018) codified beneficial ownership requirements for US financial institutions; the Corporate Transparency Act (2021, effective 2024) required millions of US entities to file BOI reports with FinCEN.
  - **[[Basel Committee on Banking Supervision]]** — the BCBS Customer Due Diligence paper and subsequent guidance integrate KYC into broader Basel III risk management frameworks for correspondent banking.
  - **Markets in Crypto-Assets ([[MiCA]])** — EU Regulation 2023/1114, fully applicable from December 2024; mandates KYC for all CASPs (Crypto-Asset Service Providers) operating in the EU.
  - **SWIFT KYC Registry** — an industry utility enabling correspondent banks to share standardised KYC documents, reducing duplication in correspondent banking relationships.
  - **W3C Verifiable Credentials and DID standards** — emerging technical standards enabling privacy-preserving, portable KYC attestations; increasingly referenced in regulatory sandbox guidance from the FCA (UK), MAS (Singapore), and BIS.

- ### Challenges and Tensions
  - **Privacy vs. surveillance** — comprehensive identity collection creates honeypots for data breaches; regulators in some jurisdictions require data minimisation principles, creating tension with exhaustive KYC data retention obligations.
  - **Financial exclusion** — strict KYC requirements disproportionately affect populations without formal identity documents (the "unbanked"), particularly in developing economies; FATF has acknowledged proportionality and tiered approaches as mitigants.
  - **De-risking** — banks exiting entire markets or customer categories (e.g., remittance firms, correspondent banking relationships with smaller jurisdictions) to avoid high KYC costs or perceived risk, reducing financial access.
  - **Duplication** — each institution independently collecting and verifying the same identity data imposes enormous aggregate cost; shared KYC utilities and portable credentials are industry responses.
  - **Synthetic identity fraud** — AI-generated deepfake documents and spoofed biometrics challenge traditional KYC verification; counter-measures include injection attack detection and hardware attestation.
  - **Cross-border consistency** — divergent national implementations of FATF recommendations create compliance complexity for multinational institutions operating across many jurisdictions.

- ### Current Landscape (2026)
  - The dominant shift is from point-in-time onboarding to perpetual KYC (pKYC) — continuous, event-driven customer due diligence that refreshes a risk profile on triggers (beneficial-ownership change, sanctions update, adverse media, anomalous transactions) rather than on fixed 1-to-5-year cycles; Capgemini, KYC360 and vendors such as Avallone frame it as the 2026 baseline rather than a premium add-on.
  - The EU's single AML rulebook is now the reference framework: AMLA (the Authority for Anti-Money Laundering, based in Frankfurt) became operational on 1 July 2025, the AMLR (Regulation (EU) 2024/1624) applies from 10 July 2027 (2029 for some entities), and AMLA published its draft ongoing-monitoring guidelines on 3 June 2026 ahead of a 10 July 2026 deadline to submit 23 technical standards and guidelines to the European Commission.
  - Digital identity is being elevated over document and video checks: the draft RTS on customer due diligence makes eIDAS-compliant electronic identification (at Levels of Assurance Substantial or High) and EUDI Wallet credentials the default for remote onboarding, demoting video identification (e.g. Germany's BaFin Circular 3/2017 approach) to a justified fallback option from July 2027.
  - The US framework was redrawn between February and May 2026 via a FinCEN exemptive order, an April NPRM reforming the AML programme rule toward an effectiveness-based, risk-driven model, and executive orders; banks are now expected to cross-reference Ultimate Beneficial Owner claims against the FinCEN BOI registry under the Corporate Transparency Act rather than accept self-certification.
  - Other jurisdictions moved in parallel: FATF clarified in February 2025 that non-face-to-face onboarding is no longer inherently high-risk; the RBI issued Amendment Directions in June 2025 easing CKYCR-based periodic updation and Aadhaar/V-CIP e-KYC; and Australia's AML/CTF Amendment Rules took effect on 31 March 2026, adjusting KYC verification timeframes and PEP/virtual-asset obligations.
  - AI has moved from optional to a core expectation for alert triage, document extraction, NLP-based adverse-media and multilingual sanctions screening, with regulators emphasising auditable, explainable models and demonstrable evidence trails.
  - The frontier challenge is synthetic-identity and deepfake fraud: commercially available AI-generated identity documents and face-overlay injection attacks expose gaps in the draft AMLR RTS, which critics (including iProov and IDnow) note does not yet mandate injection-attack detection or robust anti-spoofing on the biometric feed.

- ### References
  - 1. KYC360 (2026). 2026 KYC/AML Outlook: Key Trends and Takeaways. https://kyc360.com/knowledge-hub/resources/2026-kyc-aml-outlook
  - 2. Encompass Corporation (2026). The US KYC landscape just shifted: here's what banks need to understand. https://www.encompasscorporation.com/blog/the-us-kyc-landscape-just-shifted-heres-what-banks-need-to-understand/
  - 3. IDnow (2026). AMLA is Rewriting Europe's AML Rules. Here's What it Means. https://idnow.io/insights/blog/amla-europes-aml-rules-rewritten/
  - 4. iProov (2026). AMLR Requires eIDAS-compliant Identity Verification. Is Your Business Ready? https://www.iproov.com/blog/eu-amlr-2027-eidas-digital-identity-verification
  - 5. timveroOS (2025). KYC and AML Compliance for Digital Lenders in 2026. https://timvero.com/blog/kyc-and-aml-compliance-in-digital-lending
  - 6. Grant Thornton Australia (2026). Understanding recent changes to the AML/CTF legislation and what reporting entities need to know. https://www.grantthornton.com.au/insights/blogs/understanding-recent-changes-to-the-amlctf-legislation-and-what-reporting-entities-need-to-know/

- ### Provenance

