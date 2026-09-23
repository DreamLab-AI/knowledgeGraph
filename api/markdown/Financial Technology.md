
Financial Technology (FinTech) is the application of digital innovation — including mobile computing, cloud infrastructure, cryptographic protocols, AI, and distributed ledger technology — to the design, delivery, and automation of financial products and services. It spans consumer-facing layers such as digital payments, neobanking, and robo-advisory, and infrastructure layers such as real-time payment rails, open banking APIs, regulatory technology, and central bank digital currency systems. FinTech fundamentally restructures the value chain of financial intermediation by reducing friction, lowering costs, and enabling programmable, data-driven financial interactions at global scale.

- ### Overview
  - Financial Technology represents the convergence of software engineering, data science, and financial services innovation into a distinct industry vertical. The term gained mainstream usage in the 2010s with the rise of mobile banking, peer-to-peer lending platforms, and algorithmic trading, but the underlying impulse — applying technology to reduce friction in financial systems — predates digital computing.
  - FinTech operates across multiple layers:
    - **Infrastructure layer**: [[Cloud Computing]], [[Application Programming Interface]] standards (e.g. [[ISO 20022]]), real-time gross settlement rails, and [[Cryptography]] primitives.
    - **Protocol layer**: [[Blockchain]] networks, [[Smart Contract]] execution environments, and tokenisation frameworks underpinning [[Digital Asset]] markets and [[Decentralised Finance]].
    - **Application layer**: consumer banking apps, [[Robo-Advisory]] platforms, peer-to-peer lending, [[Digital Payment]] wallets, and [[InsurTech]] underwriting engines.
    - **Compliance layer**: [[Regulatory Technology]] tools automating AML, KYC, transaction monitoring, and regulatory reporting to [[Financial Services Regulatory Body]] mandates.
  - The sector is characterised by rapid iteration cycles, network-effects-driven scale, and regulatory arbitrage dynamics — incumbents and challengers engage in co-opetition through [[Open Banking]] frameworks that mandate API access to account data.

- ### Key Components
  - **[[Digital Payment]]**: Electronic transfer of value including card networks, mobile wallets (e.g. Apple Pay, Google Pay), instant payment rails (SEPA Instant, FedNow), and QR-code-based systems prevalent in Asia.
  - **[[Open Banking]]**: Regulatory-driven API ecosystem allowing third-party providers to access bank account data and initiate payments with customer consent, enabling account aggregation, credit scoring, and embedded finance.
  - **[[Decentralised Finance]] (DeFi)**: Permissionless financial protocols running on programmable [[Blockchain]] networks, offering lending, borrowing, decentralised exchanges, and yield strategies via [[Smart Contract]] automation without custodial intermediaries.
  - **[[Regulatory Technology]] (RegTech)**: Software automating compliance workflows — [[Identity Management]] (KYC/AML), transaction surveillance, sanctions screening, and regulatory reporting — reducing manual overhead and error rates.
  - **[[Robo-Advisory]]**: Algorithmic portfolio management applying [[Machine Learning]] and modern portfolio theory to deliver low-cost investment advice and automated rebalancing at scale.
  - **[[Central Bank Digital Currency]] (CBDC)**: State-issued digital fiat money, combining programmable payment rails with monetary policy levers; distinct from [[Digital Asset]] tokens in that sovereign backing is retained.
  - **[[Neobank]]**: Fully digital, branchless banking institutions delivering retail banking products through mobile-first applications, typically licensed as banks or operating under banking-as-a-service frameworks.
  - **[[InsurTech]]**: Technology-led disruption of insurance underwriting, distribution, and claims handling, using [[Machine Learning]] for risk modelling and IoT data for real-time pricing.
  - **[[Supply Chain Finance]]**: FinTech instruments — invoice financing, dynamic discounting, supply chain tokenisation — that optimise working capital across extended supplier networks.
  - **[[Fraud Detection]]**: Real-time behavioural analytics and [[Machine Learning]] classification models that identify anomalous transaction patterns, reducing card fraud, account takeover, and synthetic identity fraud.

- ### Applications and Use Cases
  - **Consumer payments**: Instant P2P transfers, contactless payments, cross-border remittances with reduced FX spread via stablecoin rails or specialist corridors.
  - **SME lending**: Alternative credit scoring using transactional data, [[Machine Learning]] underwriting, and embedded loan products delivered at point of sale or within accounting software.
  - **Capital markets**: Algorithmic trading, pre-trade risk analytics, post-trade [[Smart Contract]] settlement, and tokenised securities issuance on [[Blockchain]] infrastructure.
  - **Wealth management**: [[Robo-Advisory]] platforms democratising access to diversified portfolios; AI-driven financial planning assistants personalising savings goals.
  - **Insurance**: Usage-based motor insurance via telematics; parametric crop insurance triggered automatically by satellite weather data; claims automation via computer vision.
  - **Trade finance**: Digitising letters of credit and bills of lading on distributed ledger platforms; [[Supply Chain Finance]] programmes reducing supplier payment delays.
  - **Regulatory reporting**: RegTech dashboards aggregating transaction data and auto-generating FINREP, COREP, MiFID II, and DORA submissions.
  - **[[Financial Inclusion]]**: Mobile money services (e.g. M-Pesa model) providing savings, credit, and payment access to populations without formal banking relationships.
  - **[[Central Bank Digital Currency]]**: Retail and wholesale CBDC pilots enabling programmable monetary policy, instant settlement finality, and traceable government disbursements.

- ### Standards and Regulatory Context
  - **[[ISO 20022]]**: Universal financial messaging standard replacing legacy SWIFT MT formats; adopted by major payment systems globally for richer, structured transaction data.
  - **PSD2 / PSD3 (EU)**: Payment Services Directives mandating [[Open Banking]] API access and strong customer authentication (SCA) across the European Economic Area.
  - **DORA (EU Digital Operational Resilience Act)**: Operational resilience and ICT risk management requirements for financial entities and critical third-party providers.
  - **MiFID II**: Markets in Financial Instruments Directive regulating algorithmic trading, best-execution obligations, and transaction reporting within EU capital markets.
  - **GDPR / UK GDPR**: [[Data Privacy]] regulation governing customer data processing, directly constraining FinTech data pipelines and consent management.
  - **Basel III / IV**: Capital adequacy frameworks shaping how FinTech-originated assets (e.g. digital loans, tokenised securities) are treated on bank balance sheets.
  - **FATF Recommendations**: International AML/CFT standards applied to virtual asset service providers (VASPs) and digital payment operators.
  - **[[Financial Services Regulatory Body]] examples**: FCA (UK), SEC/CFTC (US), MAS (Singapore), BaFin (Germany) — each applying sandbox frameworks and licensing regimes to FinTech entrants.
  - **Open Finance Standards**: Consumer Data Right (Australia), Financial Data Exchange (FDX, US), and STET PSD2 API specifications standardising [[Open Banking]] implementations.

- ### Domain Remapping Note
  - The original domain classification was `blockchain`, reflecting the file's initial focus on blockchain-adjacent FinTech subsets. This enrichment remaps the domain to `finance`, the correct primary classification for Financial Technology as a broad industry concept. Blockchain remains a key component (captured in `uses` relations) but does not define the domain.

- ### Current Landscape (2026)
  - The GENIUS Act (Public Law 119-27), signed 18 July 2025, created the first US federal framework for payment stablecoins, restricting issuance to Permitted Payment Stablecoin Issuers (PPSIs) with full 1-to-1 reserve backing and BSA/AML obligations; agencies moved fast, with the OCC issuing a 350-plus-page Notice of Proposed Rulemaking on 25 February 2026 and the FDIC, NCUA, Treasury and a joint FinCEN/OFAC rule all publishing proposals through early 2026 ahead of the Act's effective date of 18 January 2027.
  - Agentic commerce became the defining frontier, with AI agents autonomously discovering, deciding and transacting; competing open protocols emerged including Anthropic's Model Context Protocol (MCP), the Agentic Commerce Protocol (ACP) from OpenAI and Stripe, and Google's Agent Payments Protocol (AP2) and Universal Commerce Protocol (UCP).
  - Card networks operationalised agentic payments: Mastercard launched its Agent Pay programme, partnering with Microsoft and IBM to embed tokenised, AI-initiated payments inside conversational and enterprise AI systems for both consumer and B2B use.
  - Stablecoin transaction volume more than quadrupled in under three years per J.P. Morgan's 2026 fintech report, and fintech's share of overall venture dollars reached 13.4% in Q1, as the 2025 IPO window reopened and M&A accelerated toward full-stack, infrastructure-focused platforms.
  - In Europe, PSD3 and the Payment Services Regulation (PSR) reached political agreement in November 2025, with the PSR expected to enter force in summer 2026 and PSD3 applying around 2027-2028 after transposition, alongside continued ISO 20022 migration and instant-payment schemes (SEPA Instant, FedNow).
  - Embedded finance and open banking hardened into default API-first, event-driven architecture, with A2A payments at checkout beginning to bypass card interchange, particularly in open-banking-mature markets.
  - Open challenges as of 2026 include agent authorisation and liability (the IMF flags authorisation traceability, opacity and correlated agent behaviour as systemic risks), reconciling probabilistic AI with deterministic settlement rails, AI-powered cyberattacks on authentication flows, and cross-jurisdictional regulatory fragmentation across AML/KYC, the EU AI Act and identity frameworks such as eIDAS 2.0.

- ### References
  - 1. US Congress (2025). S.1582 — GENIUS Act, Public Law 119-27. https://www.congress.gov/bill/119th-congress/senate-bill/1582/text
  - 2. Morgan Lewis (2026). GENIUS Act Implementation: Key Proposals and What Comes Next. https://www.morganlewis.com/pubs/2026/04/genius-act-implementation-key-proposals-and-what-comes-next
  - 3. FintechFutures (2026). Agentic commerce in 2026: Where we stand and what lies ahead. https://www.fintechfutures.com/ai-in-fintech/agentic-commerce-in-2026-where-we-stand-and-what-lies-ahead
  - 4. J.P. Morgan (2026). Sector spotlight: Fintech 2026 — industry trends report. https://www.jpmorgan.com/content/dam/jpmorgan/documents/cb/insights/technology/jpm-2026-fintech-industry-trends-report.pdf
  - 5. Finacle / Infosys (2026). Payments Trends 2026. https://www.finacle.com/insights/research-reports/banking-trends-2026/payments-trends-2026/
  - 6. International Monetary Fund (2026). How Agentic AI Will Reshape Payments. https://www.imf.org/-/media/files/publications/imf-notes/2026/english/insea2026004.pdf

- ### Provenance

