- ### OntologyBlock
  id:: cbdc-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: 20131
	- source-domain:: metaverse
	- preferred-term:: Central Bank Digital Currency (CBDC)
	- definition:: Sovereign digital currency issued and backed by a central bank for use in retail or wholesale payment systems, functioning as legal tender in digital form.
	- maturity:: mature
	- source:: [[BIS CBDC Blueprint]], [[IMF CBDC Notes]], [[ISO 24165]]
	- owl:class:: mv:CBDC
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: mv:VirtualObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[VirtualEconomyDomain]], [[TrustAndGovernanceDomain]]
	- implementedInLayer:: [[DataLayer]], [[ProtocolLayer]]
	- #### Relationships
	  id:: cbdc-relationships
		- has-part:: [[Digital Currency Ledger]], [[Payment Protocol]], [[Identity System]], [[Transaction Validator]]
		- is-part-of:: [[Monetary System]], [[Payment Infrastructure]], [[Financial System]]
		- requires:: [[Central Bank]], [[Digital Wallet]], [[Distributed Ledger]], [[Identity Verification]], [[Regulatory Framework]]
		- depends-on:: [[Banking Infrastructure]], [[Settlement System]], [[Cryptographic Protocol]]
		- enables:: [[Digital Payments]], [[Financial Inclusion]], [[Monetary Policy Implementation]], [[Programmable Money]]
	- #### OWL Axioms
	  id:: cbdc-owl-axioms
	  collapsed:: true
		- ```clojure
		  Declaration(Class(mv:CBDC))

		  # Classification
		  SubClassOf(mv:CBDC mv:VirtualEntity)
		  SubClassOf(mv:CBDC mv:Object)
		  SubClassOf(mv:CBDC mv:DigitalCurrency)

		  # A CBDC must be issued by central bank
		  SubClassOf(mv:CBDC
		    ObjectSomeValuesFrom(mv:issuedBy mv:CentralBank)
		  )

		  # A CBDC must have legal tender status
		  SubClassOf(mv:CBDC
		    ObjectSomeValuesFrom(mv:hasStatus mv:LegalTender)
		  )

		  # A CBDC must use distributed ledger
		  SubClassOf(mv:CBDC
		    ObjectSomeValuesFrom(mv:requires mv:DistributedLedger)
		  )

		  # A CBDC must have payment protocol
		  SubClassOf(mv:CBDC
		    ObjectSomeValuesFrom(mv:hasPart mv:PaymentProtocol)
		  )

		  # A CBDC enables digital payments
		  SubClassOf(mv:CBDC
		    ObjectSomeValuesFrom(mv:enables mv:DigitalPayments)
		  )

		  # Domain classification
		  SubClassOf(mv:CBDC
		    ObjectSomeValuesFrom(mv:belongsToDomain mv:VirtualEconomyDomain)
		  )
		  SubClassOf(mv:CBDC
		    ObjectSomeValuesFrom(mv:belongsToDomain mv:TrustAndGovernanceDomain)
		  )
		  SubClassOf(mv:CBDC
		    ObjectSomeValuesFrom(mv:implementedInLayer mv:DataLayer)
		  )

		  # Supporting classes
		  Declaration(Class(mv:CentralBank))
		  SubClassOf(mv:CentralBank mv:PhysicalAgent)

		  Declaration(Class(mv:LegalTender))
		  SubClassOf(mv:LegalTender mv:VirtualObject)

		  Declaration(Class(mv:DigitalPayments))
		  SubClassOf(mv:DigitalPayments mv:VirtualProcess)

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)

  # Property characteristics
  AsymmetricObjectProperty(dt:requires)

  # Property characteristics
  AsymmetricObjectProperty(dt:dependson)

  # Property characteristics
  AsymmetricObjectProperty(dt:enables)

  # Property characteristics
  AsymmetricObjectProperty(dt:implements)
```
- ## About Central Bank Digital Currencies
  id:: cbdc-about
	- Central Bank Digital Currencies (CBDCs) are **state-issued digital currencies** that function as electronic forms of a nation's fiat currency, backed by the full faith and credit of the issuing government. Unlike cryptocurrencies or stablecoins, CBDCs are sovereign money issued and regulated by central banks, designed to coexist with or potentially replace physical cash while maintaining central bank control over monetary policy. CBDCs represent the digital evolution of traditional money in response to declining cash usage, rising cryptocurrency adoption, and the need for efficient cross-border payments.
	- CBDCs exist in two primary forms: retail CBDCs for public use in everyday transactions, and wholesale CBDCs for interbank settlement and financial institution operations. Retail CBDCs enable individuals and businesses to hold digital currency directly with the central bank or through intermediaries like commercial banks, offering financial inclusion benefits for unbanked populations. Wholesale CBDCs streamline settlement processes between financial institutions, reducing counterparty risk and enabling real-time gross settlement systems.
	- The design of CBDC systems involves fundamental choices about architecture (centralized vs. decentralized ledgers), access models (account-based vs. token-based), anonymity levels (ranging from full privacy to complete transparency), and technical infrastructure (distributed ledger technology, traditional databases, or hybrid systems). These decisions reflect national priorities balancing privacy, security, monetary sovereignty, financial stability, and regulatory compliance. As of 2024, over 130 countries representing 98% of global GDP are exploring CBDCs, with active pilots in China (digital yuan), European Union (digital euro), and numerous other jurisdictions.
	- ### Key Characteristics
	  id:: cbdc-characteristics
		- Sovereign digital money with legal tender status
		- Backed by full faith and credit of issuing government
		- Central bank issuance and regulatory oversight
		- Potential for programmable monetary policy
		- Real-time settlement capabilities
		- Financial inclusion for unbanked populations
		- Reduced transaction costs compared to traditional banking
		- Cross-border payment efficiency improvements
		- Privacy-preserving or fully transparent designs (policy choice)
		- Interoperability with existing payment infrastructure
		- Offline payment capabilities (for some designs)
		- Resilience against private payment system failures
	- ### Technical Components
	  id:: cbdc-components
		- [[Digital Currency Ledger]] - Distributed or centralized database recording all CBDC holdings and transactions
		- [[Payment Protocol]] - Technical specification for transferring CBDC between parties
		- [[Identity System]] - KYC/AML infrastructure linking digital currency to verified users
		- [[Transaction Validator]] - Nodes or central systems confirming transaction authenticity and preventing double-spending
		- [[Central Bank]] - Issuing authority controlling money supply and monetary policy
		- [[Distributed Ledger]] - Blockchain or DAG technology providing transparency and redundancy (in decentralized designs)
		- [[Identity Verification]] - Government ID, biometrics, or zero-knowledge proofs establishing user identity
		- [[Regulatory Framework]] - Legal and compliance infrastructure governing CBDC usage
		- [[Smart Contract Layer]] - Programmable rules for conditional payments and automated policy
		- [[Wallet Infrastructure]] - Custodial or non-custodial storage for user CBDC holdings
		- [[API Interfaces]] - Integration with existing banking systems and payment networks
		- [[Offline Payment Module]] - Hardware or software enabling transactions without internet connectivity
		- [[Cross-Border Settlement Rails]] - Interoperable protocols for international CBDC transfers
	- ### Architectural Models
	  id:: cbdc-architecture
		- **Direct CBDC (One-Tier)**: Central bank provides accounts directly to all users
		- **Indirect CBDC (Two-Tier)**: Commercial banks intermediate between central bank and public
		- **Hybrid CBDC**: Central bank maintains ledger with commercial banks providing interfaces
		- **Synthetic CBDC**: Private stablecoins backed by central bank reserves with regulatory oversight
		- **Token-Based**: Anonymous or pseudonymous bearer instruments like digital cash
		- **Account-Based**: Identity-linked accounts with central bank or intermediaries
		- **DLT-Based**: Distributed ledger technology (blockchain/DAG) for decentralization
		- **Centralized Database**: Traditional database architecture with higher performance
		- **Offline-Capable**: Hardware wallets or SIM cards enabling payments without connectivity
		- **Programmable CBDC**: Smart contract functionality for conditional payments and policy implementation
	- ### Functional Capabilities
	  id:: cbdc-capabilities
		- **Digital Payments**: Enable instant, low-cost person-to-person, person-to-business, and business-to-business transactions
		- **Financial Inclusion**: Provide banking services to unbanked populations via mobile phones or digital wallets
		- **Monetary Policy Implementation**: Direct transmission of central bank policy through programmable interest rates or stimulus payments
		- **Cross-Border Remittances**: Reduce costs and settlement times for international money transfers through interoperable CBDC networks
		- **Programmable Money**: Smart contracts enable conditional payments, escrow, automated tax collection, and regulatory compliance
		- **Real-Time Settlement**: Eliminate multi-day settlement cycles for financial transactions
		- **Payment System Resilience**: Provide backup to private payment networks during outages or crises
		- **Tax Collection**: Automated tax withholding and remittance directly to government accounts
		- **Social Welfare Distribution**: Efficient, targeted distribution of government benefits and stimulus payments
		- **Reduced Counterparty Risk**: Settlement in central bank money eliminates credit risk between financial institutions
		- **Transparency and Auditability**: Real-time visibility into money flows for regulatory and policy purposes
		- **Offline Payments**: Continue payment functionality during network disruptions
	- ### CBDC Implementations and Pilots
	  id:: cbdc-implementations
		- **China (Digital Yuan/e-CNY)**: Most advanced CBDC, used in over 260 million transactions worth $250B+ as of 2024
		- **European Union (Digital Euro)**: ECB preparation phase targeting 2027-2028 launch
		- **United States (Digital Dollar)**: Research and pilot programs by Federal Reserve and MIT
		- **United Kingdom (Britcoin)**: Bank of England and HM Treasury consultation and design phase
		- **Bahamas (Sand Dollar)**: First retail CBDC fully launched in 2020
		- **Nigeria (eNaira)**: Launched October 2025, focused on financial inclusion
		- **Sweden (e-Krona)**: Riksbank pilot addressing declining cash usage
		- **Eastern Caribbean (DCash)**: Regional CBDC for eight Caribbean nations
		- **India (Digital Rupee)**: RBI pilot launched 2025 with wholesale and retail variants
		- **Brazil (Digital Real)**: Banco Central pilot focusing on smart contract integration
		- **South Korea (Digital Won)**: Bank of Korea pilot completed, evaluating full deployment
		- **Singapore (Project Ubin)**: MAS wholesale CBDC experiments for interbank settlement
		- **Thailand (Project Inthanon)**: Bank of Thailand wholesale CBDC research
	- ### Use Cases
	  id:: cbdc-use-cases
		- **Consumer Payments**: Replace cash and card payments with instant digital currency transfers via mobile apps
		- **Government Disbursements**: Directly distribute social security, tax refunds, stimulus checks to citizens' CBDC wallets
		- **Cross-Border Remittances**: Low-cost international money transfers reducing reliance on correspondent banking (mBridge project)
		- **Financial Inclusion**: Bank the unbanked through free or low-cost CBDC accounts accessible via basic mobile phones
		- **Interbank Settlement**: Real-time gross settlement between financial institutions reducing systemic risk
		- **Programmable Treasury Operations**: Government expenditure with embedded compliance rules and spending restrictions
		- **Supply Chain Payments**: Automated payment release upon delivery confirmation using smart contracts
		- **Salary Payments**: Employers instantly transfer wages to employees' CBDC wallets eliminating check clearing delays
		- **Merchant Payments**: Point-of-sale transactions with lower fees than card networks
		- **Offline Payments**: Rural or disaster-affected areas using hardware wallets or SIM-based solutions
		- **Tourism**: Visitors access local CBDC without opening bank accounts or currency exchange
		- **Carbon Credits**: CBDCs integrated with environmental tokens for sustainability policy implementation
	- ### Policy Objectives
	  id:: cbdc-policy
		- **Monetary Sovereignty**: Counter threats from cryptocurrencies and foreign CBDCs
		- **Financial Stability**: Reduce risks from private stablecoins and shadow banking
		- **Payment System Efficiency**: Lower transaction costs and settlement times
		- **Financial Inclusion**: Extend banking access to unbanked and underbanked populations
		- **Monetary Policy Transmission**: Direct control over interest rates and stimulus distribution
		- **Tax Compliance**: Improved visibility into economic activity and tax collection
		- **Anti-Money Laundering**: Enhanced traceability of illicit financial flows
		- **Cross-Border Efficiency**: Reduce costs and complexity of international payments
		- **Digital Economy Enablement**: Provide programmable money infrastructure for innovation
		- **Cash Replacement**: Maintain public money option as physical cash usage declines
		- **Payment Privacy**: Balance privacy rights with regulatory oversight requirements
		- **Innovation Platform**: Enable third-party development of payment services
	- ### Risks and Challenges
	  id:: cbdc-risks
		- **Bank Disintermediation**: CBDC deposits competing with commercial bank deposits, disrupting banking business models
		- **Financial Stability**: Bank runs accelerated by instant CBDC conversion during crises
		- **Privacy Concerns**: Government surveillance of all transactions raising civil liberties issues
		- **Cybersecurity**: Large-scale attacks targeting national payment infrastructure
		- **Operational Complexity**: Central banks operating retail payment systems without commercial bank expertise
		- **Cross-Border Implications**: Currency competition and capital flow volatility between CBDC-issuing nations
		- **Digital Divide**: Excluding populations without smartphones or digital literacy
		- **Monetary Policy Constraints**: Interest-bearing CBDCs complicating traditional policy tools
		- **Technology Lock-In**: Long-term commitment to specific infrastructure and standards
		- **Legal Uncertainty**: Evolving regulatory frameworks and international coordination
		- **Adoption Resistance**: Public reluctance to abandon familiar payment methods
		- **Energy Consumption**: Environmental concerns if using energy-intensive consensus mechanisms
	- ### Privacy Models
	  id:: cbdc-privacy
		- **Full Anonymity (Cash-Like)**: Untraceable transactions like physical cash (raises AML concerns)
		- **Pseudonymous**: Transactions linked to addresses but not directly to identities (tiered anonymity)
		- **Privacy-Preserving Cryptography**: Zero-knowledge proofs enabling compliance without revealing transaction details
		- **Tiered Privacy**: Small transactions private, large transactions subject to monitoring
		- **Full Transparency**: All transactions visible to central bank (maximum regulatory control)
		- **Selective Disclosure**: Users control what information is shared with whom
		- **Data Minimization**: Only essential information collected and stored
		- **Third-Party Privacy**: Intermediaries see transaction details, central bank sees only aggregates
		- **Time-Limited Retention**: Transaction data deleted after regulatory retention period
		- **Auditable Privacy**: Privacy for individuals, transparency for auditors and courts
	- ### Interoperability Standards
	  id:: cbdc-interoperability
		- **ISO 20022**: Financial messaging standard for payment information exchange
		- **ISO 24165**: Digital token identifier standard for CBDCs and tokenized assets
		- **BIS Project mBridge**: Multi-CBDC platform for cross-border payments (China, Hong Kong, Thailand, UAE)
		- **Project Jura**: Swiss-French cross-border wholesale CBDC experiment
		- **Project Dunbar**: Singapore-led multi-CBDC platform for international settlement
		- **CBDC Bridge Model**: Direct CBDC-to-CBDC exchange without intermediary currencies
		- **Tokenized Deposit Integration**: Interoperability between CBDCs and tokenized bank deposits
		- **Corridor Models**: Bilateral CBDC arrangements between specific countries
		- **Hub-and-Spoke Models**: Common settlement infrastructure connecting multiple CBDCs
		- **Interlinking Solutions**: Technical protocols enabling CBDC systems to communicate
	- ### Metaverse Integration
	  id:: cbdc-metaverse
		- **Virtual World Payments**: CBDCs as legal tender for transactions in metaverse platforms
		- **Digital Asset Purchases**: Buying virtual real estate, NFTs, and in-game items with government-backed digital currency
		- **Cross-Platform Value Transfer**: Seamless movement of sovereign currency between physical and virtual economies
		- **Programmable Compliance**: Smart contracts enforcing tax collection and regulatory compliance in virtual environments
		- **Avatar Financial Identity**: Linking metaverse avatars to CBDC wallets with verified real-world identity
		- **Virtual Business Operations**: Metaverse businesses accepting CBDC payments with legal recognition
		- **Government Virtual Services**: Public services delivered in metaverse paid for with CBDC
		- **Decentralized Exchange Integration**: CBDC liquidity pools in DeFi protocols with regulatory oversight
		- **Mixed Reality Commerce**: Augmented reality shopping with instant CBDC settlement
		- **Gaming Economy Bridge**: CBDC as bridge between gaming virtual currencies and real-world money
	- ### Standards & References
	  id:: cbdc-standards
		- [[BIS CBDC Blueprint]] - Bank for International Settlements foundational principles
		- [[IMF CBDC Notes]] - International Monetary Fund policy guidance
		- [[ISO 24165]] - Digital token identifier standard
		- [[ISO 20022]] - Financial services messaging standard
		- [[W3C DID]] - Decentralized identifier specification for identity
		- [[BIS Innovation Hub]] - CBDC experimentation and technology research
		- [[CPMI-MC Report]] - Committee on Payments and Market Infrastructures recommendations
		- [[FSB Regulatory Framework]] - Financial Stability Board global stablecoin oversight
		- [[FATF Guidance]] - Financial Action Task Force AML/CFT standards
		- [[G7 Public Policy Principles]] - Retail CBDC design principles
		- [[Project Helvetia]] - Swiss National Bank DLT integration experiments
		- [[Atlantic Council CBDC Tracker]] - Global CBDC development monitoring
	- ### Related Concepts
	  id:: cbdc-related
		- [[VirtualObject]] - Inferred parent class as digital currency token
		- [[Digital Asset]] - Broader category including CBDCs and cryptocurrencies
		- [[Digital Currency]] - Direct parent class for all forms of digital money
		- [[Cryptocurrency]] - Related but decentralized alternative to CBDCs
		- [[Stablecoin]] - Private-sector digital currencies often pegged to fiat
		- [[Digital Wallet]] - Storage and transaction interface for CBDCs
		- [[Payment System]] - Infrastructure enabled and transformed by CBDCs
		- [[Blockchain]] - Technology underlying some CBDC implementations
		- [[Smart Contract]] - Enabling programmable money features
		- [[Identity Verification]] - Essential component for account-based CBDCs
		- [[Central Bank]] - Issuing and regulatory authority
		- [[Monetary Policy]] - Economic framework CBDCs implement and enhance
	- ### Technology Trends
	  id:: cbdc-trends
		- **Offline Functionality**: Hardware wallets and SIM-based solutions enabling payments without internet
		- **Quantum-Resistant Cryptography**: Post-quantum algorithms protecting CBDCs from future attacks
		- **Privacy-Enhancing Technologies**: Zero-knowledge proofs, homomorphic encryption, secure multi-party computation
		- **AI-Powered Fraud Detection**: Machine learning identifying suspicious transaction patterns in real-time
		- **Biometric Authentication**: Fingerprint, face, and voice recognition for secure CBDC access
		- **IoT Integration**: Machine-to-machine payments with CBDCs for autonomous vehicles and smart devices
		- **CBDC-Backed Stablecoins**: Private sector tokens fully backed by CBDC reserves
		- **Multi-CBDC Platforms**: Shared infrastructure for instant cross-border settlement
		- **Programmable Fiscal Policy**: Smart contracts automating tax collection, subsidies, and welfare distribution
		- **Green CBDCs**: Environmental sustainability features incentivizing carbon reduction
		- **Open Banking Integration**: APIs enabling third-party innovation on CBDC infrastructure
		- **Satellite-Based Offline Payments**: Extending CBDC access to remote regions via satellite connectivity
- ## Metadata
  id:: cbdc-metadata
	- imported-from:: [[Metaverse Glossary Excel]]
	- import-date:: [[2025-01-15]]
	- ontology-status:: migrated
    - public-access:: true
	- migration-date:: [[2025-10-14]]
	- classification-rationale:: Virtual (digital currency) + Object (sovereign monetary instrument) → VirtualObject

    - implements:: [[Payment System]]


## Academic Context

- Central Bank Digital Currency (CBDC) represents a **digital form of central bank money**, issued and backed by a sovereign monetary authority, designed to function as legal tender in digital form.
  - CBDCs are conceptualised as digital liabilities of central banks, analogous to physical banknotes but existing solely in electronic form.
  - The academic foundation draws from monetary theory, digital payment systems, and distributed ledger technology (DLT), with ongoing debates on implications for monetary policy, financial stability, and privacy.
  - Key developments include distinctions between **retail CBDCs** (for general public use) and **wholesale CBDCs** (restricted to financial institutions), with varying technological architectures ranging from centralised ledgers to permissioned DLT systems.

## Current Landscape (2025)

- CBDCs have moved beyond theoretical exploration into pilot phases and limited rollouts globally, with over 90 countries investigating or implementing versions of CBDCs.
  - Notable platforms include China’s digital yuan, the Bahamas’ Sand Dollar, and the Eastern Caribbean’s DCash.
  - The Bank for International Settlements (BIS) Innovation Hub continues to coordinate multi-jurisdictional research and experimentation on CBDCs, focusing on interoperability and cross-border payments.
- In the UK, the Bank of England remains cautious but actively researching CBDC feasibility, emphasising financial stability and privacy.
- Technical capabilities:
  - CBDCs enable **instant settlement**, enhanced traceability, and programmability of money.
  - Limitations include scalability challenges, cybersecurity risks, and the need to balance privacy with regulatory compliance.
- Standards and frameworks are evolving, with international bodies like the IMF and BIS providing guidance on design principles, legal frameworks, and data governance.

## Research & Literature

- Key academic papers and sources:
  - Mancini-Griffoli, T., et al. (2018). *Casting Light on Central Bank Digital Currency*. IMF Staff Discussion Note. [DOI:10.5089/9781484381626.006]
  - Auer, R., Cornelli, G., & Frost, J. (2020). *Rise of the Central Bank Digital Currencies: Drivers, Approaches and Technologies*. BIS Working Papers No. 880. [URL: https://www.bis.org/publ/bppdf/bispap880.pdf]
  - Kahn, C. M., McAndrews, J., & Roberds, W. (2025). *Money is Privacy*. Journal of Monetary Economics, 117, 1-15. [DOI:10.1016/j.jmoneco.2020.10.002]
- Ongoing research directions include privacy-preserving technologies, CBDC impact on commercial banks, cross-border interoperability, and programmable money applications.


- Emerging trends:
  - Increased emphasis on **cross-border CBDC interoperability** to facilitate faster, cheaper international payments.
  - Integration of CBDCs with **smart contracts** enabling programmable financial instruments.
  - Development of **privacy-enhancing technologies** balancing user anonymity with anti-money laundering (AML) requirements.
- Anticipated challenges:
  - Managing the impact on commercial bank deposits and credit provision.
  - Ensuring cybersecurity resilience against sophisticated attacks.
  - Navigating complex regulatory and legal landscapes across jurisdictions.
- Research priorities include:
  - Designing CBDCs that support financial inclusion without compromising security.
  - Evaluating macroeconomic effects of CBDC adoption.
  - Developing governance models that maintain public trust and transparency.

## References

1. Mancini-Griffoli, T., Peria, M. S. M., Agur, I., Ari, A., Kiff, J., Popescu, A., & Rochon, C. (2018). *Casting Light on Central Bank Digital Currency*. IMF Staff Discussion Note SDN/18/08. International Monetary Fund. https://doi.org/10.5089/9781484381626.006

2. Auer, R., Cornelli, G., & Frost, J. (2020). *Rise of the Central Bank Digital Currencies: Drivers, Approaches and Technologies*. BIS Working Papers No. 880. Bank for International Settlements. https://www.bis.org/publ/bppdf/bispap880.pdf

3. Kahn, C. M., McAndrews, J., & Roberds, W. (2025). *Money is Privacy*. Journal of Monetary Economics, 117, 1-15. https://doi.org/10.1016/j.jmoneco.2020.10.002

4. Bank of England & HM Treasury (2025). *Central Bank Digital Currency: A UK Perspective*. [Available on official websites]

5. BIS Innovation Hub (2025). *CBDC Projects and Research*. Bank for International Settlements. https://www.bis.org/about/bisih/topics/cbdc.htm


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
