iri:: http://narrativegoldmine.com/blockchain#CbdcFrameworks
uri:: urn:visionclaw:concept:blockchain:cbdc-frameworks
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:cbdc-frameworks
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: CBDC Frameworks
content-hash:: sha256-12-2dad1e65cfbd
legacy-term-id:: BC-0480
status:: stub-needs-content
maturity:: draft
quality-score:: 0.40
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T17:00:00Z
public:: true

- ### Definition
  - Structured approach for central banks implementing Central Bank Digital Currency (CBDC) systems, encompassing design specifications, technical architecture, and regulatory governance. These [[Frameworks]] address [[Digital Money]], [[Monetary Policy]] transmission, and [[Financial Stability]].

- ### Semantic Classification
  - owl-class:: blockchain:CBDCFrameworks
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - bridges-to:: [[Virtual Economy]]

- ### Content
  - Central Bank Digital Currencies (CBDCs) represent sovereign digital money issued directly by central banks as legal tender, combining the trust and stability of government-backed fiat currency with the technological advantages of digital payment systems. Unlike cryptocurrencies such as Bitcoin or Ethereum, which operate on decentralised networks without central authority, CBDCs are centralised digital representations of national currencies fully controlled by monetary authorities. As of 2024, over 130 countries representing 98% of global GDP are exploring CBDCs, with 64 countries in advanced development phases, 11 countries having launched retail CBDCs, and dozens operating wholesale CBDC pilots. This unprecedented global interest reflects central banks' recognition that digital transformation of money and payments is inevitable, with questions focusing not on whether to issue CBDCs but how to design them to achieve policy objectives whilst managing risks.

  - CBDC frameworks vary dramatically across jurisdictions, reflecting differing policy priorities, institutional structures, financial system characteristics, and technological capabilities. China's e-CNY (digital yuan) leads in scale with over 260 million digital wallets, more than $250 billion in cumulative transactions, and deployment across 26 cities, pursuing objectives including financial inclusion, payment system efficiency, internationalisation of the renminbi, and enhanced monetary policy transmission. The European Central Bank's digital euro project, currently in the preparation phase, emphasises complementing cash, preserving privacy, supporting European payment autonomy, and enabling innovative services whilst maintaining financial stability. The Bank of England explores retail CBDC designs balancing privacy, programmability, and financial stability, whilst the US Federal Reserve conducts research without commitment to issuance, reflecting political sensitivity and concerns about disrupting the banking system.

  - The fundamental design choices in CBDC frameworks include retail versus wholesale focus, account-based versus token-based architecture, direct central bank issuance versus two-tier intermediated models, degree of anonymity versus transaction monitoring, programmability features, interest-bearing versus non-interest-bearing, and interoperability with existing payment systems and potential cross-border arrangements. These choices profoundly affect CBDCs' impact on monetary policy transmission, financial stability, banking sector disintermediation, payment system competition, financial inclusion, privacy, and government surveillance capabilities. Early implementations in the Bahamas (Sand Dollar), Eastern Caribbean (DCash), Nigeria (eNaira), and Jamaica (JAM-DEX) provide valuable lessons about design trade-offs, adoption challenges, and operational considerations, informing larger economies' CBDC development efforts.

  - ### Regulatory Framework

    - **Bank for International Settlements Principles (2020)**: The BIS published foundational principles for CBDC design emphasising: "do no harm" to monetary and financial stability; coexistence with cash and other payment methods; supporting innovation and efficiency; alignment with broader policy objectives including financial inclusion, competition, and consumer protection; clearly defined legal frameworks; and international coordination for cross-border payments. The principles provide high-level guidance whilst acknowledging that specific designs will vary based on national circumstances.

    - **Financial Stability Board Recommendations (2023)**: The FSB issued recommendations addressing financial stability implications of CBDCs including: assessing impacts on bank funding and credit provision; designing holding limits and remuneration structures to mitigate disintermediation risks; ensuring operational resilience and cyber security; establishing clear legal frameworks defining CBDC status as legal tender; coordinating internationally on cross-border CBDC arrangements; and monitoring systemic implications as CBDCs scale. The recommendations reflect concerns about unintended consequences of poorly designed CBDCs, particularly risks to financial intermediation.

    - **International Monetary Fund Analysis**: The IMF has published extensive CBDC research examining design choices, policy implications, and implementation considerations. Key themes include: managing bank disintermediation through holding limits, tiered remuneration, or restricted CBDC functionality; preserving monetary policy effectiveness; ensuring financial inclusion without compromising AML compliance; coordinating globally to avoid fragmentation of cross-border payments; and maintaining capital flow management capabilities. The IMF emphasises that CBDC design should reflect country-specific circumstances rather than one-size-fits-all approaches.

    - **People's Bank of China Legal Framework**: China's digital yuan operates under the People's Bank of China Law, which grants the PBOC exclusive authority to issue currency. e-CNY is legal tender with the same status as physical renminbi. The framework establishes "controllable anonymity"—small transactions enjoy privacy from commercial entities but not from the PBOC, whilst larger transactions require identity verification. The legal framework prohibits refusal of e-CNY payments and ensures offline payment capability for resilience.

    - **European Central Bank Digital Euro Regulation (Proposed)**: The ECB proposed legislation establishing the digital euro as legal tender alongside cash, with universal acceptance obligations for merchants and businesses. The framework would guarantee privacy for offline payments equivalent to cash, whilst online payments would involve intermediaries (banks, payment service providers) managing customer relationships and AML compliance. Holding limits would prevent excessive bank disintermediation, whilst design features would support programmability and smart contract integration. The regulation requires European Parliament and Council approval.

    - **Bank of England Consultation (2023)**: The BoE's consultation on retail CBDC design examined architecture options including platform models (central bank provides core infrastructure and rules, private sector provides user interfaces and services) versus two-tier models (intermediaries maintain customer relationships whilst the central bank provides settlement). The consultation addressed privacy (pseudonymous transactions with proportionate law enforcement access), programmability (supporting conditional payments and smart contracts), offline capability, and interoperability with existing payment systems. No final decision on issuance has been made.

    - **US Federal Reserve Research**: The Fed's research, culminating in a 2022 discussion paper, examines potential CBDC benefits (faster, cheaper, safer payments; financial inclusion; payment system resilience) and risks (bank disintermediation; operational and cyber risks; implementation costs; privacy concerns). The Fed emphasised that US CBDC would require Congressional authorisation and indicated no urgency to issue, reflecting concerns about disrupting the dollar's role and the banking system. The Fed's cautious approach contrasts with China's aggressive deployment.

  - ### CBDC Categories and Architectures

    - **Retail CBDCs**: Designed for general public use, retail CBDCs provide digital central bank money accessible to individuals and businesses for everyday transactions. Retail CBDCs compete with commercial bank deposits, raising disintermediation concerns. Design considerations include holding limits (restricting total CBDC holdings per person to limit bank disintermediation), remuneration structures (paying zero or negative interest to discourage hoarding), and distribution models (two-tier systems where commercial banks and payment service providers distribute CBDC whilst the central bank provides underlying infrastructure).

    - **Wholesale CBDCs**: Restricted to financial institutions for interbank settlements, securities transactions, and cross-border payments. Wholesale CBDCs essentially digitise central bank reserves, potentially improving settlement efficiency, reducing counterparty risk, and enabling atomic delivery-versus-payment in securities transactions. Several central banks are piloting wholesale CBDCs including Project Aber (Saudi Arabia-UAE), Project Jura (France-Switzerland), Project Dunbar (multi-lateral cross-border settlements), and Project Inthanon-LionRock (Thailand-Hong Kong).

    - **Account-Based Architecture**: Users hold accounts directly with the central bank or with intermediaries (banks, payment service providers) that maintain accounts on behalf of customers whilst settling through central bank infrastructure. Account-based systems rely on identity verification—transactions require authenticating the account holder rather than possessing tokens or keys. This architecture facilitates AML compliance and transaction monitoring but raises privacy concerns and requires robust customer authentication.

    - **Token-Based Architecture**: Digital tokens represent claims on the central bank that can be transferred peer-to-peer without accounts. Token-based systems verify the validity of the token itself rather than the identity of the holder, enabling greater anonymity similar to cash. However, token-based architectures complicate AML compliance and require robust cryptographic security to prevent counterfeiting, double-spending, and theft. Some CBDC designs combine architectures, using accounts for online transactions and tokens for offline payments.

    - **Direct CBDC Model**: The central bank provides all CBDC infrastructure, customer accounts, user interfaces, and support functions. This model gives central banks maximum control but requires enormous operational capacity, cybersecurity capabilities, and customer service infrastructure—capabilities most central banks lack. Few jurisdictions pursue direct models, with most favouring intermediated approaches leveraging existing private sector infrastructure and expertise.

    - **Two-Tier (Intermediated) Model**: Commercial banks, payment service providers, and fintech companies manage customer relationships, provide user interfaces, conduct KYC/AML compliance, and offer value-added services, whilst the central bank provides underlying settlement infrastructure and maintains the CBDC ledger. This model preserves banking sector roles, leverages existing customer relationships and infrastructure, and allows innovation in user-facing services whilst the central bank focuses on monetary policy and payment system stability. Most major CBDC projects adopt two-tier models.

  - ### Major CBDC Implementations

    - **China e-CNY (Digital Yuan)**: The world's most advanced retail CBDC programme, e-CNY has progressed from pilots beginning in 2020 to widespread deployment:
      - **Scale**: Over 260 million digital wallets opened, cumulative transactions exceeding $250 billion (CNY 1.8 trillion), and deployment across 26 major cities including Beijing, Shanghai, Shenzhen, and pilot locations for the 2022 Winter Olympics.
      - **Architecture**: Two-tier system where the PBOC issues e-CNY to commercial banks and payment providers (including Alibaba's Alipay and Tencent's WeChat Pay), which distribute to end-users. The PBOC maintains the central ledger whilst intermediaries manage customer interfaces.
      - **Technical Features**: Controllable anonymity with small transactions (under CNY 10,000) enjoying privacy from commercial intermediaries but not the central bank. Offline payments using near-field communication (NFC) without internet connectivity. Smart contract functionality enabling programmable money (conditional payments, automatic disbursements, targeted fiscal transfers).
      - **Use Cases**: Government salary payments, public transport, retail purchases, cross-border tourism payments (Hong Kong trials), and targeted fiscal stimulus (digital red envelopes distributed during COVID-19).
      - **Policy Objectives**: Financial inclusion (extending payment access to unbanked populations), reducing reliance on Alipay/WeChat Pay duopoly, enhancing monetary policy transmission, combating money laundering and tax evasion, and supporting renminbi internationalisation.
      - **Privacy Concerns**: International observers highlight surveillance implications of PBOC's visibility into all e-CNY transactions, raising concerns about state monitoring of citizens' economic activities. China emphasises controllable anonymity balancing privacy with AML compliance.

    - **European Central Bank Digital Euro**: Currently in a two-year preparation phase (launched November 2023) following investigation and experimentation phases:
      - **Timeline**: Investigation phase (2021-2023) examined design options and conducted technical experimentation. Preparation phase (2023-2025) will finalise regulatory framework, select technology providers, and test prototypes. Potential issuance decision anticipated in 2025-2026, with launch several years later if approved.
      - **Design Principles**: Complement (not replace) cash, ensuring continued availability of central bank money in digital form. Provide free basic payment services. Ensure pan-European reach and usability. Support European payment autonomy reducing reliance on non-European payment schemes. Enable offline payments with privacy equivalent to cash. Maintain financial stability through holding limits preventing excessive bank disintermediation.
      - **Architecture**: Two-tier model with banks and payment service providers distributing digital euros whilst ECB provides central infrastructure. Both account-based (for online payments) and token-based (for offline payments) features. Pseudonymous transactions with privacy protection and proportionate law enforcement access.
      - **Holding Limits**: Discussions suggest limits of €3,000-€4,000 per person, sufficient for transaction needs whilst preventing large-scale deposit flight from banks. Tiered remuneration structures might apply negative interest to large holdings to discourage hoarding.
      - **Cross-Border**: Exploring interoperability with other CBDC projects and integration with existing cross-border payment systems. The digital euro could facilitate cross-border retail payments within and beyond the Eurozone.
      - **Political Challenges**: Concerns from commercial banks about disintermediation, privacy advocates about surveillance, and some member states about centralising payment infrastructure. Success requires balancing diverse stakeholder interests across 27 member states.

    - **Bank of England Consultation**: The BoE is exploring retail CBDC ("Britcoin") through consultations and research:
      - **Platform Model**: Proposed architecture where the BoE provides core ledger and rule-setting whilst private sector firms ("Payment Interface Providers") deliver user-facing services, wallets, and value-added features. This leverages private sector innovation whilst maintaining central bank oversight.
      - **Privacy Design**: Pseudonymous transactions where the BoE cannot see transaction details, only aggregate flows. PIPs manage customer KYC and AML compliance. Law enforcement access subject to legal safeguards. Offline payments for resilience and privacy.
      - **Programmability**: Supporting smart contracts and conditional payments for innovative services (automated bill payments, instant settlements, machine-to-machine payments).
      - **Financial Inclusion**: Free basic CBDC wallets and services ensuring universal access. Digital pound could serve unbanked populations and reduce cash handling costs for businesses.
      - **Timeline**: No decision on issuance. Further consultations and experimentation planned. Implementation, if approved, would take several years.

    - **US Federal Reserve Research**: The Fed maintains a cautious, research-focused approach:
      - **Project Hamilton**: MIT collaboration developing CBDC technology prototypes demonstrating feasibility of high-throughput, scalable CBDC systems (processing 170,000 transactions per second in experimental tests).
      - **Discussion Paper (2022)**: Examined benefits (improved payment speed, lower costs, financial inclusion), risks (bank disintermediation, operational risks, privacy concerns, implementation costs), and design choices. Emphasised that any US CBDC would be privacy-protected, intermediated, transferable, and identity-verified.
      - **Congressional Requirement**: The Fed indicated that US CBDC would require Congressional authorisation, reflecting political sensitivity and concerns about government overreach. Some legislators support CBDC for financial inclusion and competitiveness; others oppose it citing privacy and government surveillance concerns.
      - **International Competitiveness**: Debates about whether China's e-CNY and potential digital euro require US response to maintain dollar dominance, or whether existing dollar infrastructure and network effects suffice.

    - **Bahamas Sand Dollar**: The first nationwide retail CBDC launched in October 2020:
      - **Motivation**: Financial inclusion in archipelago nation with dispersed population and limited banking infrastructure. Sand Dollar provides digital payment access to remote communities where physical bank branches are impractical.
      - **Design**: Token-based architecture using mobile wallets. Tiered access with lower KYC requirements for small-balance wallets (BSD 500 limit), higher requirements for larger wallets (BSD 8,000 limit). 1:1 parity with Bahamian dollar.
      - **Adoption Challenges**: Limited adoption (fewer than 20% of population using Sand Dollar regularly) due to preference for existing payment methods, limited merchant acceptance, and competition from established banking and payment systems. The experience highlights that building infrastructure is insufficient—adoption requires addressing user needs and preferences.

    - **Eastern Caribbean DCash**: Launched in March 2021 across 8 Eastern Caribbean Currency Union member countries:
      - **Architecture**: Blockchain-based system enabling cross-border CBDC payments across member states. Wallet-based access with varying KYC tiers.
      - **Operational Challenges**: DCash faced operational disruptions in 2022 due to technical issues with the technology provider, leading to temporary suspension. The experience demonstrated risks of relying on external technology vendors and the importance of operational resilience.
      - **Regional Coordination**: DCash illustrates challenges and benefits of multi-country CBDC cooperation—shared infrastructure reduces costs but requires coordinating diverse regulatory and operational requirements.

    - **Nigeria eNaira**: Launched in October 2021 for Africa's largest economy:
      - **Design**: Two-tier system with commercial banks distributing eNaira through mobile wallet applications. Tiered KYC requirements balancing financial inclusion with AML compliance.
      - **Adoption**: Limited uptake despite aggressive promotion, with fewer than 1% of population using eNaira regularly. Challenges include preference for cash, limited merchant acceptance, competition from mobile money providers, and insufficient value proposition for users accustomed to existing payment methods.
      - **Lessons**: Technology alone does not guarantee adoption. CBDCs must address genuine user needs and offer compelling advantages over existing alternatives.

  - ### Privacy and Surveillance Considerations

    - **Privacy-Surveillance Spectrum**: CBDC designs exist on a spectrum from complete anonymity (cash-equivalent) to full transparency (every transaction visible to authorities). Most frameworks pursue intermediate positions offering conditional privacy:
      - **Tiered Privacy**: Small-value transactions enjoy anonymity or pseudonymity, whilst larger transactions require identity disclosure. The ECB's digital euro proposes offline cash-like privacy, whilst online transactions involve intermediaries knowing customer identities but not the central bank observing individual transactions.
      - **Zero-Knowledge Techniques**: Cryptographic methods enabling verification of transaction legitimacy (e.g., sender has sufficient funds, not on sanctions lists) without revealing transaction details. Research explores whether zero-knowledge proofs could enable privacy-preserving CBDC compliance.
      - **Controlled Anonymity**: China's model where small transactions are private from commercial entities but visible to the PBOC, whilst larger transactions require identity verification. This approach prioritises state monitoring over individual privacy.

    - **AML/CFT Compliance**: Regulatory requirements for anti-money laundering and counter-terrorist financing create tension with privacy. CBDCs must implement transaction monitoring, sanctions screening, and suspicious activity reporting, requiring some degree of transaction visibility. Design choices determine whether central banks, intermediaries, or both conduct monitoring.

    - **Data Protection Laws**: European GDPR and similar privacy regulations impose constraints on CBDC data collection, storage, and usage. CBDCs must comply with data minimisation principles (collecting only necessary data), purpose limitations (using data only for specified purposes), and deletion requirements (removing data when no longer needed). These requirements may conflict with AML record-keeping mandates.

    - **Surveillance Concerns**: Civil liberties advocates warn that CBDCs could enable unprecedented government monitoring of citizens' economic activities, potentially facilitating authoritarian control, political persecution, or social credit systems. China's e-CNY particularly raises these concerns given the government's surveillance infrastructure and human rights record. Democratic nations' CBDC frameworks attempt to embed privacy protections, though sceptics question whether technical safeguards can reliably prevent government overreach.

  - ### Cross-Border CBDC Arrangements

    - **mBridge (Multi-CBDC Bridge)**: BIS Innovation Hub project involving central banks of China, Hong Kong, Thailand, and UAE developing platform for cross-border wholesale CBDC settlements. mBridge enables atomic delivery-versus-payment across borders, reducing settlement times and costs whilst maintaining monetary sovereignty. The project demonstrates technical feasibility of multi-CBDC arrangements.

    - **Project Dunbar**: BIS collaboration exploring shared platform for cross-border payments using multiple CBDCs. The project tests whether common technical standards and governance arrangements can enable seamless cross-border CBDC transactions whilst respecting jurisdictional differences.

    - **Bilateral Arrangements**: Several central banks are exploring bilateral CBDC connections for cross-border payments. Examples include PBOC-HKMA cooperation on e-CNY cross-border usage, ECB-Federal Reserve discussions on digital euro-digital dollar interoperability (if implemented), and regional arrangements in Asia-Pacific and Africa.

    - **Interoperability Challenges**: Cross-border CBDC arrangements must address technical interoperability (compatible systems and standards), legal interoperability (recognition of foreign CBDCs, cross-border legal enforceability), and regulatory coordination (harmonised AML requirements, capital controls, exchange regulations). Achieving interoperability whilst preserving monetary sovereignty and regulatory autonomy presents significant challenges.

  - ### Compliance Challenges and Risks

    - **Bank Disintermediation**: If CBDC proves more attractive than bank deposits (higher security, potentially interest-bearing, government backing), large-scale deposit flight from commercial banks could impair banks' ability to provide credit, threatening economic growth. Mitigations include holding limits, tiered remuneration (zero or negative interest on CBDC holdings), and restricted CBDC functionality (preventing CBDC use for savings or lending).

    - **Monetary Policy Transmission**: CBDCs could improve monetary policy effectiveness by enabling direct central bank interaction with economy (bypassing banking system), facilitating negative interest rates, and allowing targeted stimulus (helicopter money distributed as CBDC). However, disintermediation could impair credit channels of monetary policy transmission.

    - **Operational and Cyber Risks**: CBDCs represent critical infrastructure requiring near-perfect uptime, robust cybersecurity, and resilience against attacks. Operational failures or successful cyberattacks could threaten financial stability and public confidence in the currency. Central banks must develop unprecedented operational capabilities or rely on private sector expertise through intermediated models.

    - **Financial Inclusion vs. AML Compliance**: Extending CBDC access to unbanked populations requires reducing KYC burdens and accepting limited-function wallets with small holding limits. This creates tension with AML compliance requiring customer identification and transaction monitoring. Designs must balance inclusion and compliance through tiered approaches.

    - **Technology Lock-In**: Early CBDC design choices may prove difficult to reverse, creating path dependencies. Selecting specific technologies, architectures, or vendors may limit future options. Central banks must balance moving quickly (to remain relevant) with maintaining flexibility for technological evolution.

    - **Political Economy**: CBDC deployment affects powerful interests including commercial banks (facing disintermediation), payment service providers (facing competition from CBDC), fintech companies (gaining or losing opportunities depending on design), and civil liberties advocates (concerned about surveillance). Navigating political opposition whilst achieving policy objectives challenges central banks unaccustomed to operating highly visible public-facing services.

  - ### Best Practices for CBDC Design

    - **Clear Policy Objectives**: Define specific problems CBDC will address (financial inclusion, payment efficiency, monetary policy, financial stability) and design features to achieve those objectives. Avoid pursuing CBDC simply because other countries are doing so.

    - **Extensive Stakeholder Engagement**: Consult with commercial banks, payment providers, fintech companies, consumer advocates, privacy groups, and the public throughout design processes. Broad consultation builds understanding, identifies concerns early, and improves final designs.

    - **Pilot Before Scaling**: Conduct extensive pilots testing technology, user experience, operational processes, and integration with existing systems before nationwide deployment. Pilots identify issues that can be addressed before they affect millions of users.

    - **Two-Tier Distribution**: Leverage existing banking and payment infrastructure through intermediated models rather than attempting direct central bank distribution. Two-tier models preserve private sector roles, enable innovation in user-facing services, and allow central banks to focus on core infrastructure and policy functions.

    - **Privacy by Design**: Embed privacy protections into CBDC architecture from inception rather than adding them later. Minimise data collection, implement pseudonymous transactions where appropriate, establish clear legal frameworks restricting government access, and provide transparency about data practices.

    - **Interoperability Planning**: Design CBDCs to interoperate with existing payment systems, other countries' CBDCs, and future technologies. Open standards, modular architectures, and API-based integration enable evolution and cross-border coordination.

    - **Operational Resilience**: Implement redundancy, backup systems, disaster recovery capabilities, and offline functionality ensuring CBDC availability even during disruptions. Critical payment infrastructure must exceed normal IT system reliability standards.

  - ### Future Developments

    - **Proliferation of Retail CBDCs**: Major economies' CBDC launches could accelerate global adoption, with the digital euro (if approved) particularly influential for European and international standards. Conversely, if major economies delay or abandon CBDC projects, momentum could stall.

    - **Programmable Money Evolution**: CBDC smart contract capabilities could enable automated tax collection, conditional government transfers, instant cross-border settlements, machine-to-machine payments for Internet of Things devices, and novel financial instruments. The extent of programmability will depend on regulatory frameworks and central bank risk tolerance.

    - **Cross-Border Integration**: Successful multi-CBDC platforms could transform international payments, potentially reducing reliance on correspondent banking and SWIFT messaging. However, geopolitical tensions may fragment the landscape into competing blocs (Western CBDCs interoperating separately from Chinese-led arrangements).

    - **Stablecoin Competition**: Private stablecoins (discussed in [[BC-0479-stablecoin-regulation]]) will compete with or complement CBDCs. Some jurisdictions may prohibit private stablecoins favouring public CBDCs; others may allow coexistence. The interaction between public and private digital money will shape the future payment landscape.

    - **Privacy Technology Integration**: Advances in zero-knowledge proofs, secure multi-party computation, and privacy-preserving technologies could enable CBDCs balancing transaction privacy with regulatory compliance more effectively than current designs permit.

    - **Wholesale CBDC Expansion**: Wholesale CBDCs for interbank settlements and securities transactions may progress faster than retail CBDCs, facing fewer political obstacles and disintermediation risks. Wholesale CBDC platforms could revolutionise securities settlement, cross-border payments, and financial market infrastructure.

  - ### References and Standards

    - [[BC-0476-aml-kyc-compliance]] - AML/KYC considerations for CBDC frameworks
    - [[BC-0477-travel-rule]] - Travel Rule implications for cross-border CBDC
    - [[BC-0479-stablecoin-regulation]] - Private stablecoin competition with CBDCs
    - [[BC-0401-blockchain]] - Distributed ledger technology underlying some CBDCs
    - [[People's Bank of China]] - e-CNY issuing authority
    - [[European Central Bank]] - Digital euro project
    - [[Bank of England]] - UK CBDC research
    - [[Federal Reserve]] - US CBDC research
    - [[Bank for International Settlements]] - CBDC principles and innovation hub
    - [[Financial Stability Board]] - CBDC financial stability recommendations
    - [[Digital Yuan]] - China's e-CNY implementation
    - [[Digital Euro]] - ECB's CBDC project
    - [[Central Bank Digital Currency]] - General CBDC concepts

- ### Provenance
  - sources:: [[AML (Anti-Money Laundering)]], [[GDPR (General Data Protection Regulation)]], [[KYC (Know Your Customer)]]
  - migration-date:: 2026-04-26T00:00:00Z
