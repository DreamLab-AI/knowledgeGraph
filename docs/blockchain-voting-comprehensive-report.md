# Comprehensive Report: Blockchain-Based Voting and Electoral Systems

## Executive Summary

Blockchain-based voting has emerged as a proposed solution to modernise electoral systems, with implementations ranging from government elections to corporate governance. While proponents highlight increased accessibility, transparency, and reduced costs, security researchers and academics have raised significant concerns about vulnerabilities, scalability, and the fundamental security trade-offs inherent in electronic voting systems.

---

## 1. Global Election Integrity Challenges

### Traditional Voting System Problems

**High Costs:**
- The 2016 US elections cost approximately $6.5 million
- Traditional voting involves substantial logistics expenses: printing ballots, transportation, polling stations, human labour, and security
- Running national elections entails enormous costs in dispatching personnel and transporting supplies
- Manual verification and counting processes require significant administrative overhead

**Voter Turnout Issues:**
- Low participation rates, particularly among overseas voters, military personnel, and expatriates
- Accessibility barriers for voters in remote and rural areas
- Traditional polling requires physical presence during limited hours

**Security and Fraud Concerns:**
- Complex systems with numerous intermediaries (brokers, investment advisers, banks) between voters and vote tallying
- Vulnerability to errors in vote counting and transmission
- Lack of real-time verification and audit capabilities
- Paper-based systems susceptible to physical tampering

**Accessibility Problems:**
- Limited options for voters with disabilities
- Challenging for elderly voters to access polling stations
- Disenfranchisement of overseas citizens and military personnel
- Geographic barriers in rural and remote communities

---

## 2. Named Implementations and Real-World Trials

### United States

#### Voatz
**Overview:** Voatz is a blockchain-encrypted mobile voting application that became the first platform used in US federal elections.

**Deployment:**
- **2018 Midterm Elections (West Virginia):** 144 voters from 31 countries cast ballots via the Voatz app across four counties
- **May 2018 Primary (West Virginia):** First government-run, blockchain-supported vote in US history
- **2019 Denver Municipal Election (Colorado):** Over 100 voters used the system; absentee voting ran from 23 March to 7 May 2019
- **Utah County Pilot:** 22 out of 58 eligible overseas voters cast ballots (38% participation rate)

**Results:**
- Four separate audits confirmed ballot authenticity for West Virginia's 2018 votes
- Denver's overseas voter turnout doubled since the 2015 election
- Utah County achieved higher overseas voter turnout percentage than local voters
- National Cybersecurity Center audited both Denver and Utah results, finding "no issues with tabulation and recording"

**Security Audits:**
- **MIT Research (February 2020):** Identified high-severity vulnerabilities allowing adversaries to alter, stop, or expose votes
- **Trail of Bits Audit (March 2020):** Commissioned by Voatz and Tusk Philanthropies; yielded 79 findings (one-third high-severity, one-third medium-severity)

**Critical Vulnerabilities:**
- Administrative access to back-end servers enables vote deanonymisation, denial, alteration, and audit trail invalidation
- Eight-digit PIN encryption could be cracked within 15 minutes
- Clients do not interact with blockchain directly; no blockchain verification code in client
- Lack of software independence

**Outcome:**
Following MIT's security analysis, West Virginia and one Washington county discontinued Voatz use for the 2020 primaries.

**Total Deployment:**
According to Voatz, over 80,000 votes have been cast on their platform across more than 50 elections since June 2016.

### Estonia

**Overview:** Estonia became the first nation to hold legally binding general elections over the Internet in 2005.

**Technology:**
- Built on Estonian ID card infrastructure (mandatory national identity document and smart card)
- Uses public key infrastructure for secure remote authentication and legally binding digital signatures
- Employs KSI Blockchain for data integrity and non-repudiation
- Uses mixnet for tally verification with homomorphic encryption (ElGamal)
- Digital signatures ensure only authorised voters can participate

**Usage Statistics:**
- **2023 Parliamentary Elections:** For the first time, more than half of total votes (50%+) were cast over the Internet
- Historically, between 36% and 64% of eligible voters participate via i-voting
- Nearly half of all votes in recent elections are Internet votes
- Estonia leads globally with 99% online voting participation among eligible voters (2023)

**Security Record:**
- No proven cases of i-voter fraud
- Strong legal frameworks ensure data integrity
- External researchers have raised concerns about potential malware threats on voter devices

**Note:** While Estonia uses blockchain for data integrity, the core voting mechanism relies on traditional cryptographic methods rather than blockchain as the primary technology.

### Russia - Moscow

#### 2019 Moscow City Duma Election (8 September)

**Deployment:**
- Blockchain voting available to 65,000 voters (6% of electorate) in three voting districts
- Used as experimental alternative to paper ballots

**Results:**
- United Russia lost 13 seats; opposition candidates won 20 seats
- Statistical abnormalities detected between offline results and electronic submissions, favouring ruling party candidates

**Security Issues:**
- French researcher Pierrick Gaudry broke the encryption system in 20 minutes using a standard computer, one month before deployment
- System used weak encryption vulnerable to rapid cryptographic attacks

#### 2020 Constitutional Amendment Vote (25 June - 1 July)

**Deployment:**
- Moscow and Nizhny Novgorod Region participated
- System worked in 3 of 20 districts
- 17% turnout among eligible voters

**Technical Implementation:**
- Upgraded to Curve25519 elliptic curve encryption
- Vote decryption took approximately 10 minutes after voting closed
- Website went offline in the first minutes after voting started

**Platform:** Built on Ethereum blockchain

### Switzerland

#### Swiss Post E-Voting System

**Overview:** Developed by Barcelona-based company Scytl, the system has undergone multiple security audits.

**2019 Critical Vulnerability:**
- Discovered during public bug bounty programme (rewards up to $50,000)
- Researchers Sarah Jamie Lewis, Olivier Pereira, and Vanessa Teague identified vulnerability enabling undetectable vote manipulation
- Trapdoor commitment scheme allowed anyone with trapdoor values to alter votes without leaving traces
- Cryptographic design demonstrated "profound failure to understand basic premises" of non-interactive zero-knowledge proof systems

**Response:**
- Swiss Post suspended system for May 19 votes
- Committed to correcting source code and independent expert review

**Later Testing (2022):**
- No penetration of e-voting system or electronic ballot box during security tests
- Improved security posture following vulnerability remediation

**Note:** Security expert Bruce Schneier noted that "blockchain does not help—it makes security worse" in voting contexts. The Swiss Post system primarily uses zero-knowledge proofs rather than blockchain technology.

### Switzerland - Zug ("Crypto Valley")

**July 2018 Trial:**
- 72 out of 240 citizens with system access participated (30% participation)
- Non-binding trial vote conducted between 25 June and 1 July
- Voters downloaded blockchain-based smartphone app
- Used existing digital identities to verify voting rights
- Questionnaire addressed municipal matters and blockchain eID system adoption

### Japan - Tsukuba

**August 2018 Trial:**
- First Japanese city to test blockchain-based voting
- Residents voted for social development programmes
- 13 proposed initiatives including cancer diagnostic technology, outdoor sports facilities, and sound navigation systems

**Technology:**
- Integrated with Japan's "My Number" system (12-digit social security identifier)
- Credentials verified before securing votes via decentralised blockchain
- Successfully demonstrated feasibility for municipal decision-making

### Sierra Leone

**March 2018 Presidential Election:**

**Clarification:** Initial reports claiming Sierra Leone conducted their election using blockchain were widely retracted. The actual implementation:
- **Agora** (Swiss company spun from EPFL's Swiss Lab for Digital Democracy) acted as independent observer
- Counted votes from 280 polling locations in Western Sierra Leone
- Results closely matched official tallies
- Blockchain system used alongside paper ballots as backup, not as primary voting system
- Demonstrated observer and audit capabilities rather than direct voting implementation

### South Korea

**Multiple Blockchain Voting Initiatives:**

**Liberty Korea Party (LKP) - 2019:**
- Largest opposition party collaborated with ioeX (Taiwan-based startup)
- Built blockchain-based voting system using embedded dual-chain system
- Official launch in March 2019

**Democracy Seoul Platform:**
- Capital city's citizen engagement platform added blockchain support
- Prevents referendum voting fraud
- Revamped for enhanced security

**Research Investment (2022):**
- Government spent equivalent of $1.1 million USD on blockchain voting research
- Exploring nationwide implementation

**Civic Activities Trial:**
- Nationwide blockchain-based voting system tested
- Recorded 70% higher voter turnout than traditional methods

### Other Notable Implementations

#### Screven County, Georgia (USA)
- First US county to use Bitcoin blockchain to record election results
- Technology provided by Georgia startup Simple Proof

#### New York State
- Blockchain for election integrity bill proposed (multiple attempts)
- Focused on results verification rather than vote casting

#### Nasdaq
- Conducted e-voting trial in Estonia
- Recorded stock ownership on blockchain platform
- Tested digital voting right assets and tokens

#### Abu Dhabi Stock Exchange
- Unveiled blockchain-based voting service
- Allows shareholders to participate and observe processes

#### RChain Cooperative
- First cooperative election using blockchain voting system
- Four director positions, voting conducted October

---

## 3. Technical Architecture for Blockchain Voting

### Core Components

#### 1. Voter Authentication

**Identity Verification Methods:**
- **Biometric Authentication:**
  - Fingerprint verification (minutiae generation for identification)
  - Iris scanning
  - Facial recognition
  - Two-factor schemes combining biometrics with smart cards
  - Encryption methods for biometric image protection
  - Hashing techniques for template security

- **Government ID Integration:**
  - Estonian ID card (smart card with PKI)
  - Japan's "My Number" system (12-digit identifier)
  - European Digital Identity (EUDI) Wallet for Sybil-resistant verification

- **Digital Credentials:**
  - Public key infrastructure (PKI)
  - Multi-signature authentication schemes
  - Legally binding digital signatures

#### 2. Ballot Encryption

**Cryptographic Techniques:**

**Homomorphic Encryption:**
- Allows votes to be tabulated without exposing individual preferences
- BFV (Brakerski-Fan-Vercauteren) fully homomorphic encryption
- Acts as "sealed envelope" on public ledger
- ElGamal re-encryption mixnet for anonymity

**Zero-Knowledge Proofs (ZKPs):**
- Verify voter eligibility without revealing identity
- Ensure vote validity without disclosing content
- Maintain election process integrity
- Enable privacy-preserving validation
- Ring Learning with Errors (RLWE) for quantum resistance

**Advanced Encryption:**
- Elliptic curve cryptography (Curve25519)
- Quantum-resistant protocols based on RLWE
- Ring signatures for security and anonymity
- Fully Homomorphic Encryption (FHE) for encrypted computation

#### 3. Blockchain Infrastructure

**Blockchain Platforms Used:**
- Ethereum (Moscow 2020)
- Hyperledger Fabric
- Graphene Blockchain Framework (Follow My Vote)
- BitShares blockchain (Follow My Vote)
- NEM blockchain (Ukraine)
- Solana (average transaction cost: $0.00025)
- Custom implementations

**Smart Contract Functions:**
- Automated vote tallying
- Multi-signature verification
- Reduce manual verification costs by 35%
- Immutable vote recording
- Transparent audit trails

**Consensus Mechanisms:**
- Proof-of-Stake for sustainability
- Verifiable distributed key generation
- Cooperative decryption protocols

#### 4. Verifiability and Audit Systems

**End-to-End Verifiable (E2E) Systems:**
- Cast-as-intended verification: Voter confirms correct vote capture
- Recorded-as-cast verification: Voter confirms vote appears on blockchain
- Tallied-as-recorded verification: Anyone can verify correct tallying

**Audit Trail Features:**
- Immutable blockchain records prevent tampering
- Transparent, publicly auditable vote trails
- Real-time auditing capabilities reduce post-election audit time by 40%
- Append-only blockchain structure minimises trust in authorities
- Tamper-evident ledger with cryptographic verification

**Verifiable Decryption:**
- Mixnet for vote shuffling
- Homomorphic properties for tallying
- Distributed key generation
- Zero-knowledge proofs of correct decryption

---

## 4. Types of Elections Using Blockchain

### Government Elections

**National/Federal:**
- **Estonia:** Parliamentary elections (2005-present)
- **Sierra Leone:** Presidential election observer system (2018)
- **Russia:** Constitutional amendment vote (2020)

**State/Regional:**
- **West Virginia:** State-level midterm and primary elections (2018)
- **Moscow:** City Duma elections (2019)
- **Colorado/Denver:** Municipal elections (2019)
- **Utah:** County-level primaries

**Municipal:**
- **Zug, Switzerland:** Municipal referendum (2018)
- **Tsukuba, Japan:** Social development programme voting (2018)

### Corporate Governance

**Shareholder Voting:**
- Board of director elections
- Merger and acquisition votes (e.g., Dell 2013 privatisation)
- Proxy voting elimination
- Annual general meeting resolutions
- Real-time ownership tracking
- Dividend distribution decisions

**Benefits:**
- Eliminates proxy intermediaries (brokers, investment advisers, banks)
- Provides immutable, verifiable ownership ledger
- Distributes information to multiple parties in real time
- Saves millions in shareholder meeting costs and proxy compensation
- Increases transparency and efficiency
- Cuts agency costs

**Notable Implementations:**
- Nasdaq e-voting trial (Estonia)
- Abu Dhabi Stock Exchange shareholder voting service

### Union and Labour Organisation Voting

**Applications:**
- Union leadership elections
- Collective bargaining agreement ratification
- Strike authorisation votes
- Labour dispute resolutions
- Member referendum on union policies

**Characteristics:**
- Small to medium-sized elections where abstention is disrespectful
- Delegated board elections
- Enhanced member participation
- Transparent vote counting

### Cooperative Governance

**RChain Cooperative:**
- First blockchain-based cooperative election
- Director elections
- Member proposal voting
- Democratic governance decisions

**Forum Cooperative:**
- Provides blockchain voting platforms
- Secure, verifiable, persistent voting
- Member-owned organisation governance

### Other Applications

**Academic Institutions:**
- Student government elections
- Faculty senate voting
- University policy referenda

**Professional Associations:**
- Board elections
- Professional standards voting
- Membership policy decisions

**Community Organisations:**
- Homeowners association voting
- Resident board elections
- Local initiative approval

**Civic Participation:**
- Seoul's "Democracy Seoul" platform for citizen engagement
- Non-binding referenda
- Public consultation processes
- Budget allocation decisions

---

## 5. Security Measures

### Cryptographic Security

#### Zero-Knowledge Proofs

**Functions:**
- Verify voter eligibility without identity revelation
- Ensure vote validity without content disclosure
- Maintain election integrity
- Privacy-preserving validation
- Sybil-resistance

**Implementations:**
- **Non-interactive zero-knowledge proofs** in Swiss Post system
- **zkVoting systems** for coercion-resistant voting
- **Suffragium** combining ZKPs with FHE
- **SmartphoneDemocracy** protocol with EUDI Wallet integration

#### Homomorphic Encryption

**Capabilities:**
- Vote tabulation without decryption
- Encrypted computation on ballots
- Privacy-preserving tallying
- Mixnet integration for shuffling

**Standards:**
- BFV fully homomorphic encryption
- ElGamal re-encryption schemes
- Fully Homomorphic Encryption (FHE) for end-to-end privacy

**Security Properties:**
- Ballot secrecy maintained throughout process
- Client-side encryption
- Cooperative decryption by multiple authorities
- Quantum-resistant variants using RLWE

### Authentication Security

**Multi-Factor Authentication:**
- Biometric verification (fingerprint, iris, facial recognition)
- Smart card possession
- Government-issued ID validation
- Digital signature requirements
- Multi-signature schemes

**Identity Protection:**
- Template protection via hashing
- Biometric image encryption
- Privacy-preserving identity verification
- Sybil-attack resistance

### Network and Infrastructure Security

**Votem CastIron Platform:**
- Polymorphing and Polyscripting against zero-day attacks
- Protection against unpatched systems
- Complex supply-chain attack prevention
- Binary code scrambling
- Multiple layers of DoS protection
- Phishing-resistant security keys
- Automatic encryption at rest
- US Department of Homeland Security (CISA) approval

**General Measures:**
- Encrypted communications in transit
- Distributed ledger preventing single points of failure
- Decentralised validation nodes
- Byzantine fault tolerance
- Immutable record-keeping

### Privacy Protection

**Anonymisation Techniques:**
- Ring signatures for voter anonymity
- Mixnet shuffling of encrypted ballots
- Separation of identity verification from vote content
- Zero-knowledge proofs of eligibility
- Unlinkability between voter and ballot

**Data Protection:**
- No personally identifiable information on blockchain
- Encrypted ballot storage
- Secure key management
- Privacy-preserving audit mechanisms

### Attack Prevention

**Blockchain-Specific Security:**
- Immutability prevents vote alteration
- Distributed consensus prevents single-authority manipulation
- Cryptographic hashing ensures data integrity
- Hack attempts on blockchain voting had 90% failure rate (2023)
- Transparent, publicly auditable records

**Smart Contract Security:**
- Formal verification of voting logic
- Automated security checks
- Multi-signature requirements for critical operations
- Time-locked functions for result revelation

---

## 6. Verifiability Features

### Individual Verifiability

**Definition:** Voters can independently verify their vote was correctly recorded without revealing vote content.

**Mechanisms:**
- **Receipt Generation:** Voters receive cryptographic receipt/proof
- **Blockchain Lookup:** Voters can locate their encrypted vote on public ledger
- **Vote Tracking:** Real-time confirmation of vote inclusion
- **Mobile App Features:** Voatz and other apps provide vote confirmation

**Challenges:**
- Tension between verifiability and receipt-freeness
- Risk of vote-selling if receipts prove vote content
- Coercion concerns with provable voting choices

### Universal Verifiability

**Definition:** Any third party can verify the election outcome's correctness.

**Features:**
- **Public Audit Trail:** Entire blockchain accessible for independent verification
- **Open-Source Code:** Transparent voting algorithms (e.g., Netvote's 100% open-source)
- **Independent Tallying:** Anyone can recount votes from blockchain data
- **Real-Time Results:** Transparent election progress visibility

**Benefits:**
- Minimises trust in election authorities
- Append-only blockchain structure prevents manipulation
- 40% reduction in post-election audit time on average
- Multiple independent auditors can verify simultaneously

**Examples:**
- Agora's Sierra Leone observation: Independent count matched official results
- National Cybersecurity Center audits in Denver and Utah
- Follow My Vote's public ledger allowing voter self-verification

### Receipt-Free Voting

**Challenge:** Ensuring voters cannot prove how they voted (prevents vote-buying and coercion).

**Solutions:**

**Randomiser Token Approach:**
- Tamper-resistant randomness source acts as black box
- Voter cannot control randomness used in ballot creation
- Prevents ballot re-creation to prove voting choice
- Blocks coercer-specified randomness for tracking

**Technical Implementations:**
- **LOKI Vote:** Blockchain-based coercion-resistant, end-to-end verifiable protocol
- **VYV (Verify-Your-Vote):** Ensures receipt-freeness with individual and universal verifiability
- **Efficient, Coercion-free, Universally Verifiable systems** (academic research)

**Properties:**
- Voter cannot use receipt to re-create ballot
- Randomness not under voter control
- Verification possible without revealing vote content
- Balance between verifiability and coercion resistance

### End-to-End Verifiability (E2E)

**Definition:** Complete chain of verifiability from vote casting through tallying.

**Three Components:**

1. **Cast-as-Intended:**
   - Voter confirms their vote was correctly captured
   - Client-side verification before submission
   - Immediate feedback on vote recording

2. **Recorded-as-Cast:**
   - Voter verifies their vote appears on blockchain
   - Cryptographic proof of inclusion
   - Tamper-evident storage

3. **Tallied-as-Recorded:**
   - Anyone can verify correct vote tallying
   - Public recount capability
   - Transparent aggregation process

**Notable Systems:**
- **Provotum:** Fully distributed E2E verifiable system using smart contracts, distributed key generation, homomorphic encryption, and cooperative decryption
- **DemocracyGuard:** Framework ensuring transparency, privacy, universal verifiability
- Multiple academic proposals for secure E2E systems

### Audit Capabilities

**Real-Time Auditing:**
- Continuous monitoring during election period
- Immediate detection of anomalies
- 40% reduction in post-election audit time

**Independent Verification:**
- National Cybersecurity Center audits (US trials)
- Four separate audits for West Virginia 2018 votes
- Third-party observation capabilities (Agora in Sierra Leone)

**Transparency Features:**
- Public blockchain access
- Open-source code inspection
- Verifiable cryptographic proofs
- Immutable audit trails

---

## 7. Accessibility Improvements

### Remote Voting

**Benefits:**
- Eliminates need for physical polling station visits
- Enables voting from any location with internet access
- Particularly beneficial for military personnel and overseas citizens
- Increased participation during pandemic conditions

**Statistics:**
- West Virginia 2018: 144 voters from 31 countries participated
- Denver 2019: Overseas voter turnout doubled compared to 2015
- Utah County: 38% overseas voter participation (higher than local turnout)
- 78% of blockchain voting participants (2023) found digital platforms more convenient than traditional polling

### Mobile Voting Applications

**Platforms:**
- **Voatz:** iPhone and Android smartphone apps
- **Votem:** Desktop and mobile access options
- **Polys:** Web-based mobile-friendly interface
- **Follow My Vote:** Web-based platform with planned mobile support

**Features:**
- Smartphone camera for ID verification
- Biometric authentication (fingerprint, facial recognition)
- Voiceover accessibility for visually impaired voters
- Intuitive user interfaces
- Real-time vote confirmation

**User Experience:**
- Download app to smartphone
- Verify identity using biometrics and government ID
- Cast ballot securely
- Receive cryptographic receipt
- Track vote inclusion in real-time

### Disability Accommodations

**For Visually Impaired Voters:**
- Voiceover smartphone features
- Screen reader compatibility
- Audio ballot reading
- Large text options
- High contrast interfaces

**Statistics:**
- Utah County expanded programme to include voters with disabilities
- Europe pilot projects: 45% rise in disabled community participation
- Voatz described as "very accessible" by visually impaired voter

**General Accessibility:**
- Smartphone and computer compatibility reduces physical barriers
- Assistive technology integration
- Home-based voting eliminates transportation challenges
- Flexible voting timeframes

### Geographic Accessibility

**Remote and Rural Areas:**
- 30% increase in voter turnout in blockchain mobile voting pilots
- Eliminates travel requirements to distant polling stations
- Addresses limited polling location availability
- Remote voting centres in areas with limited internet

**Efforts to Expand Access:**
- Offline voting mechanisms in mobile apps
- Protocols for intermittent connectivity
- Distributed access points

### Enhanced Convenience

**Time Flexibility:**
- Extended voting periods (e.g., Denver: 23 March - 7 May)
- Vote from any time zone
- No queue waiting
- Reduced time commitment

**Voting Process Simplification:**
- Pre-marking ballots online (Votem)
- User-friendly interfaces
- Simple registration processes
- Reduced paperwork

**Statistics:**
- Estonia: 99% online voting participation among eligible voters (2023)
- 78% found blockchain voting more convenient (2023)
- Blockchain voting eliminated need for physical infrastructure

### Elderly Voters

**Benefits:**
- Reduced physical mobility requirements
- Home-based voting comfort
- Technology accessibility with assistance
- Simplified voting process

---

## 8. Regulatory Frameworks and Legal Recognition

### International Legal Recognition

#### Estonia (Leading Example)
**Legal Framework:**
- First nation with legally binding Internet elections (2005)
- Strong legal frameworks ensure data integrity
- KSI Blockchain integration for non-repudiation
- Mandatory ID card infrastructure providing legal foundation
- No proven fraud cases; robust legal protections

**Success Factors:**
- Comprehensive digital identity system
- Legal recognition of digital signatures
- Government-backed PKI infrastructure
- Clear electoral laws accommodating technology

#### Russia - Moscow
**Legal Status:**
- Officially sanctioned blockchain voting in 2019 Duma elections
- Government-approved trials for constitutional amendments (2020)
- Regulatory support from election commissions
- Integration with official electoral processes

#### United States
**Regulatory Landscape:**

**Help America Vote Act (HAVA) 2002:**
- Provides federal funds for modernising voting equipment
- Requirements not precluded by blockchain-enabled systems
- Grants support blockchain technology adoption
- Clarifications needed for explicit digital ballot inclusion

**State-Level Initiatives:**
- **West Virginia:** First state to authorise blockchain voting for federal elections (2018)
- **New York:** Multiple blockchain election integrity bill proposals
- **Utah, Colorado:** County and municipal-level authorisations
- **Screven County, Georgia:** First county to record election results on blockchain

**Federal Position:**
- US Department of Homeland Security (CISA) reviewed and approved Votem's CastIron platform
- Overall federal stance remains cautious
- Security agencies express concerns about large-scale deployment

#### Switzerland
**Regulatory Approach:**
- Government-sanctioned trials in Zug (2018)
- Swiss Post e-voting system under regulatory oversight
- Public intrusion testing requirements (bug bounty programmes)
- Suspension authority when vulnerabilities discovered
- Independent expert review mandates

#### Japan
**Legal Framework:**
- Government-approved trial in Tsukuba (2018)
- Integration with national "My Number" identification system
- Municipal authority for local voting implementations
- Regulatory support for blockchain innovation

#### South Korea
**Government Support:**
- Government investment: $1.1 million USD in 2022 research
- Capital city (Seoul) officially adopted blockchain for "Democracy Seoul"
- Party-level approvals (Liberty Korea Party)
- Exploration of nationwide implementation

### Regulatory Challenges

**Key Issues:**
- Updating electoral laws to accommodate blockchain technology
- Establishing legal validity for blockchain-enabled voting
- Clarifying digital ballot legal equivalence to paper ballots
- Defining responsibilities for system failures
- Data privacy legislation compliance
- Jurisdictional requirements management

**Standards and Compliance:**
- Need for standardised security requirements
- Certification processes for voting platforms
- Regular security audit mandates
- Open-source code requirements (proposed)

### Legal Requirements for Implementation

**Essential Elements:**

1. **Voter Consent:**
   - Obtaining agreement from government and opposition parties
   - Public consultation processes
   - Transparency in deployment decisions

2. **Data Protection Compliance:**
   - GDPR compliance (European implementations)
   - National data privacy laws
   - Voter anonymity guarantees
   - Secure data handling protocols

3. **Electoral Law Updates:**
   - Legal recognition of digital votes
   - Recount procedures for blockchain systems
   - Dispute resolution mechanisms
   - Certification requirements for platforms

4. **Audit and Oversight:**
   - Independent audit requirements
   - Regulatory body oversight
   - Public verifiability mandates
   - Incident reporting obligations

### Corporate and Private Sector

**Legal Framework:**
- **Shareholder Voting:** Generally permitted under corporate law
- **Union Elections:** Subject to labour law requirements
- **Cooperative Governance:** Follows cooperative association regulations
- **Private Organisation Votes:** Minimal regulatory constraints

**Examples:**
- RChain Cooperative: First cooperative to use blockchain voting
- Nasdaq trials: Regulatory approval for shareholder voting tests
- Abu Dhabi Stock Exchange: Government-sanctioned implementation

### Barriers to Adoption

**Regulatory Obstacles:**
- Lack of comprehensive legal frameworks in most jurisdictions
- Uncertainty about liability for system failures
- Resistance from traditional election infrastructure stakeholders
- Requirement for bipartisan/multi-party consensus
- Cost of legal framework development

**Jurisdictional Variations:**
- No international standards
- Country-specific electoral laws
- Federal vs. state authority conflicts (USA)
- Municipal autonomy limitations

### Future Regulatory Directions

**Proposed Developments:**
- International voting system standards
- Certification programmes for blockchain voting platforms
- Model legislation for adoption
- Cross-border voting agreements for expatriates
- Interoperability standards

---

## 9. Security Concerns and Academic Criticisms

### Academic Consensus

**Near-Universal Agreement:**
Research from MIT, Oxford Academic, PMC, and other peer-reviewed sources demonstrates strong academic criticism of blockchain voting security. There is nearly universal consensus that **no technology available today or in the reasonably foreseeable future, including blockchains, can adequately secure an online public election** against all potential threats.

### Major Security Concerns

#### 1. Fundamental Electronic Voting Vulnerabilities

**Core Problem:**
Blockchain technology **does not solve the fundamental security problems** suffered by all electronic voting systems. Not only do traditional online voting security risks persist, but blockchains may introduce additional problems for voting systems.

**Key Issues:**
- Internet- and blockchain-based voting would **greatly increase the risk of undetectable, nation-scale election failures**
- Attacks are **larger scale, harder to detect, and easier to execute** than analogous attacks against paper-ballot-based systems
- Online voting systems are more vulnerable to serious failures than available paper-ballot-based alternatives

#### 2. Lack of Software Independence

**Definition:** Software independence is the assurance that an undetected change or error in a system's software cannot cause an undetectable change in the election outcome.

**Problem:**
Blockchain systems lack this critical property. Lead MIT researcher Sunoo Park emphasised that blockchain voting systems cannot provide meaningful assurance that votes have been counted as cast.

**Implications:**
- Single vulnerability can lead to large-scale vote manipulation
- No reliable way to detect software-based attacks
- Cannot guarantee election outcome integrity

#### 3. Client-Side Vulnerabilities

**Device Security:**
- Smartphones and computers are **vulnerable to malware, phishing attacks, and hacking**
- While blockchain itself may be secure, **the devices used to access it are not**
- Personal devices lack the security controls of dedicated voting equipment

**Specific Vulnerabilities Identified:**

**Voatz Security Flaws (MIT Analysis, 2020):**
- Administrative access to back-end servers enables vote deanonymisation, denial, alteration, and audit trail invalidation
- Eight-digit PIN could be cracked within 15 minutes
- Clients do not interact with blockchain directly
- No blockchain verification code in client
- Multiple high-severity vulnerabilities allowing vote exposure

**Trail of Bits Audit (2020):**
- 79 findings total
- One-third high-severity
- One-third medium-severity
- Confirmed MIT findings and discovered additional vulnerabilities

#### 4. Complexity and Bug Management

**Increased Complexity:**
Blockchain technology introduces **more complexity into software and its management**, and this additional complexity introduces problems with fixing bugs and deploying new software.

**Coordination Challenges:**
Because decentralised systems do not have a single point of control, **changing the protocol, even for the sake of addressing vulnerabilities, requires coordination**. This makes rapid security patching difficult or impossible.

**Real-World Example:**
Swiss Post system's profound failure to understand basic premises of non-interactive zero-knowledge proof systems, allowing undetectable vote manipulation.

#### 5. Cryptographic Vulnerabilities

**Moscow 2019 Case Study:**
- System cracked by French researcher Pierrick Gaudry in **20 minutes using a standard computer**
- Vulnerability discovered one month before election deployment
- Weak encryption scheme easily broken

**Swiss Post 2019 Vulnerability:**
- Trapdoor commitment scheme allowed anyone with trapdoor values to alter votes without leaving traces
- Prover chose common reference string, violating security contract
- Enabled undetectable vote manipulation

**General Concerns:**
- Implementation errors in cryptographic protocols
- Vulnerabilities in zero-knowledge proof systems
- Weak key generation
- Inadequate entropy sources

#### 6. Coercion and Vote-Buying

**Challenge:**
While in-person voting provides privacy booths preventing coercion, remote blockchain voting enables vote-buying and coercion because:
- Coercers can observe voting process
- Screenshots or recordings can prove vote choice
- Family members can control voting process
- Criminal organisations can enforce voting compliance

**Receipt-Freeness Problem:**
Tension between providing voters with verification capabilities and preventing them from proving their vote choice to third parties.

#### 7. Blockchain-Specific Issues

**Limited Security Contributions:**
The security contributions offered by blockchains are **better obtained by other means**. Blockchain technology in voting scenarios would **do little to address the major security requirements**, such as voter verifiability.

**Bruce Schneier's Position:**
Security expert Bruce Schneier stated that **"blockchain does not help—it makes security worse"** in voting contexts.

**Specific Limitations:**
- Blockchain immutability prevents correcting errors
- Distributed consensus adds complexity without security benefit for voting
- Public ledger risks exposing voting patterns
- Transaction costs and scalability issues
- Environmental concerns (energy consumption)

#### 8. Scalability and Performance

**Most Often Mentioned Issues:**
- Privacy protection at scale
- Transaction speed limitations
- Network congestion during high-volume periods
- Energy consumption for vendors hosting applications

**Real-World Problems:**
- Moscow 2020: Website went offline immediately after voting started
- Limited capacity for simultaneous voters
- Latency in vote confirmation

### Academic Research and Expert Opinions

#### MIT Research (2020)

**Paper:** "Going from Bad to Worse: From Internet Voting to Blockchain Voting"

**Authors:** Sunoo Park, Michael Specter, Neha Narula, and Ronald L. Rivest (MIT)

**Conclusions:**
- Examines suggestions that "voting over the Internet" or "voting on the blockchain" would increase election security
- Finds such claims to be **wanting and misleading**
- **Any turnout increase would come at the cost of losing meaningful assurance that votes have been counted as they were cast**
- Internet- and blockchain-based voting would greatly increase the risk of undetectable, nation-scale election failures

#### Bruce Schneier (Security Expert)

**Position:** Consistently critical of blockchain voting on his blog

**Key Statements:**
- Blockchain does not help election security—**it makes security worse**
- Endorsed MIT research findings
- Advocates for paper-ballot systems with auditable trails

#### Oxford Academic (Journal of Cybersecurity)

**Publication:** "Going from bad to worse: from Internet voting to blockchain voting"

**Findings:**
- Electronic, online, and blockchain-based voting systems are more vulnerable to serious failures than paper-ballot alternatives
- **Adding new technologies to systems may create new potential for attacks**
- Blockchain introduces problems beyond traditional online voting risks

### Security Researcher Community Position

**Overwhelming Consensus:**
There is an **overwhelming consensus in the election security community that mobile voting using blockchain technology is not yet a reliable system**.

**Concerns:**
- Undetected vote manipulation potential
- Nation-state attack capabilities
- Insider threat risks
- Supply chain vulnerabilities
- Zero-day exploits
- Advanced persistent threats (APTs)

### Real-World Security Incidents

**Voatz (USA):**
- MIT discovered critical vulnerabilities before wider deployment
- West Virginia and Washington county discontinued use
- Multiple high-severity findings in professional audits

**Moscow (Russia):**
- Encryption broken pre-election
- Statistical abnormalities suggesting manipulation
- System deployment despite known vulnerabilities

**Swiss Post (Switzerland):**
- Critical vulnerability enabling undetectable manipulation
- System suspended pending fixes
- Profound cryptographic design failures

### Criticisms Summary

**From Academic and Security Community:**
1. **Fundamental insecurity** of all Internet voting systems
2. **Blockchain adds complexity** without solving core problems
3. **Device vulnerabilities** cannot be mitigated
4. **Software independence** impossible to achieve
5. **Large-scale undetectable attacks** are feasible
6. **Coercion and vote-buying** risks increased
7. **Better alternatives exist** (paper ballots with audits)
8. **Scalability issues** prevent nationwide deployment
9. **Cryptographic implementation errors** are common
10. **No adequate defence** against nation-state actors

**Recommendation:**
The overwhelming academic and security researcher consensus is that **paper-ballot-based voting systems with risk-limiting audits remain the gold standard** for election security.

---

## 10. Real-World Trial Results

### United States Trials

#### West Virginia (2018-2019)

**2018 Midterm Elections:**
- **Participation:** 144 voters from 31 countries
- **Counties:** Four counties participated
- **Audits:** Four separate audits confirmed ballot authenticity
- **Security Assessment:** MIT later discovered critical vulnerabilities
- **Outcome:** Discontinued for 2020 primaries following security review

**May 2018 Primary:**
- First government-run, blockchain-supported vote in US history
- Established proof-of-concept for statewide deployment
- Security concerns emerged after initial success

**Overall Assessment:**
- Demonstrated feasibility of overseas military/expatriate voting
- Security vulnerabilities outweighed accessibility benefits
- Pilot programme discontinued

#### Denver, Colorado (2019)

**Municipal Election:**
- **Dates:** Absentee voting 23 March - 7 May 2019
- **Participation:** Over 100 voters used system
- **Audit:** National Cybersecurity Center livestreamed audit; "no issues with tabulation and recording"
- **Key Result:** Overseas voter turnout **doubled since 2015 election**

**Cost-Benefit:**
- Increased overseas participation
- Successful security audit
- Demonstrated municipal-scale viability

**Status:** Programme assessed positively but not expanded

#### Utah County, Utah

**Pilot Programme:**
- **Eligible Voters:** 58 overseas voters
- **Participation:** 22 votes cast (38% turnout)
- **Comparison:** Higher percentage than local voter turnout
- **Audit:** National Cybersecurity Center verified results
- **Expansion:** Programme expanded to include voters with disabilities

**Assessment:**
- Successful small-scale implementation
- Higher overseas engagement than traditional methods
- Security audit passed

### Estonia (2005-Present)

**Deployment Scale:**
- Longest-running, largest-scale blockchain-adjacent voting system
- Legally binding since 2005

**Participation Statistics:**
- **2023 Parliamentary Elections:** First time over 50% of votes cast via Internet
- **Historical Range:** 36-64% of eligible voters use i-voting
- **Recent Trend:** Nearly half of all votes in recent elections are Internet votes
- **2023 Statistic:** 99% online voting participation among eligible voters

**Security Assessment:**
- **Successes:** No proven cases of i-voter fraud
- **Concerns:** External researchers raised potential malware threats
- **Outcome:** Continued use with ongoing security improvements

**Cost Analysis:**
- Reduced paper, printing, and manual counting expenses
- Infrastructure costs offset by long-term savings
- Specific cost figures not publicly available

**Overall Assessment:**
- **Most successful large-scale implementation**
- High public trust and adoption
- Model for other nations considering e-voting
- Note: Uses blockchain for data integrity, not as primary voting mechanism

### Russia - Moscow

#### 2019 City Duma Election

**Participation:**
- 65,000 eligible voters (6% of electorate) in three districts
- Actual turnout figures not specified

**Results:**
- United Russia lost 13 seats
- Opposition won 20 seats
- Statistical abnormalities detected favouring ruling party in electronic votes

**Security Assessment:**
- Encryption broken by researcher in 20 minutes one month prior
- Independent observers noted discrepancies between electronic and paper results
- Credibility questioned

#### 2020 Constitutional Amendment Vote

**Participation:**
- 17% turnout in three of 20 districts where available
- Website crashed immediately after voting opened

**Technical Performance:**
- Vote decryption: 10 minutes after closing
- System reliability issues (crash on opening)
- Upgraded encryption (Curve25519)

**Overall Assessment:**
- Demonstrated technical feasibility
- Security concerns undermine credibility
- Political manipulation suspected
- Limited success; not expanded

### Switzerland - Zug (2018)

**Trial Details:**
- **Dates:** 25 June - 1 July 2018
- **Eligible:** 240 citizens with system access
- **Participation:** 72 voters (30% participation rate)
- **Type:** Non-binding trial

**Voter Experience:**
- Downloaded blockchain-based smartphone app
- Used existing digital identities for verification
- Voted on municipal matters and future blockchain adoption

**Assessment:**
- Small-scale proof-of-concept
- Demonstrated technical viability
- Limited participation due to trial nature
- Not expanded to binding elections

### Switzerland - Swiss Post

**2019 Critical Vulnerability:**
- Security bug bounty programme identified critical flaw
- System suspended for scheduled elections
- Major credibility damage

**2022 Intrusion Test:**
- No successful penetration of system
- Improved security posture
- Limited deployment continues

**Overall Assessment:**
- Initial critical failures
- Successful remediation demonstrated
- Cautious, limited deployment approach
- Ongoing security scrutiny

### Japan - Tsukuba (2018)

**Trial Specifics:**
- First Japanese city to implement blockchain voting
- Focused on municipal social development programmes
- 13 proposed initiatives for resident voting

**Technical Success:**
- Successful integration with "My Number" system
- Demonstrated government ID blockchain integration
- Positive user experience reported

**Assessment:**
- Successful proof-of-concept
- Limited to non-binding municipal decisions
- Not expanded to binding elections
- Model for future Japanese implementations

### Sierra Leone (2018)

**Agora Observer System:**
- **Coverage:** 280 polling locations in Western Sierra Leone
- **Results:** Agora's blockchain count closely matched official results
- **Role:** Independent observer, not primary voting system
- **Technology:** Demonstration of audit/verification capabilities

**Assessment:**
- Successfully demonstrated blockchain as observer/audit tool
- Not a full blockchain voting implementation
- Proved concept for parallel verification systems
- Media misreporting initially claimed full blockchain election (later retracted)

### South Korea

**Liberty Korea Party (2019):**
- Party-level blockchain voting implementation
- Official launch March 2019
- Specifics on participation not publicly available

**Democracy Seoul:**
- Citizen engagement platform with blockchain support
- Used for non-binding referenda
- Ongoing implementation

**Civic Activities Trial:**
- **Result:** 70% higher voter turnout than traditional methods
- Demonstrated significant engagement improvement
- Limited to civic activities, not binding elections

**Research Investment:**
- $1.1 million USD government investment (2022)
- Exploration phase for nationwide implementation
- No large-scale deployment yet

### Corporate and Private Sector

#### RChain Cooperative
- First cooperative election using blockchain
- Four director positions
- October voting period
- Successfully completed without reported issues

#### Nasdaq (Estonia)
- E-voting trial for stock ownership
- Recorded on blockchain platform
- Digital voting right assets and tokens
- Successful proof-of-concept
- Not widely deployed

#### Abu Dhabi Stock Exchange
- Blockchain-based shareholder voting service launched
- Ongoing implementation
- Participation statistics not publicly available

### Aggregate Statistics (2023 Global Data)

**Adoption:**
- Blockchain-based mobile voting increased turnout by 30% in remote/rural areas
- 78% of participants found digital platforms more convenient than traditional polling
- 45% rise in disabled community participation (European pilots)
- Blockchain voting projects in US surged 37% in 2024
- Estonia: 99% online voting participation among eligible voters

**Cost Savings:**
- $300 million saved in election costs globally (2023 study)
- Smart contracts reduced manual verification costs by 35%
- Election costs reduced by up to 50%
- Cybersecurity costs 20% lower than traditional electronic voting
- Administrative overhead cut by 35%
- Post-election audit time reduced by 40%

**Security:**
- Hack attempts on blockchain voting systems had 90% failure rate (2023)
- Multi-signature authentication in over 60% of systems
- Environmental impact reduced by 40% due to decreased paper and energy use

**Transaction Costs:**
- Solana blockchain: $0.00025 per transaction
- Cost per vote reduced from $7-25 to under $0.50
- Blockchain implementation costs: €90,000-€207,000 development (one-time)
- Blockchain transaction costs: ~€3,400 per election

### Overall Trial Assessment

**Successes:**
- Estonia: Long-term, large-scale success with high participation
- Accessibility improvements demonstrated across multiple trials
- Cost savings potential validated
- Overseas/military voter participation significantly increased
- Technical feasibility proven at various scales

**Challenges:**
- Security vulnerabilities identified in multiple implementations (Voatz, Moscow, Swiss Post)
- Limited large-scale deployments beyond Estonia
- Academic and security community opposition
- Regulatory uncertainty
- Public trust concerns following security discoveries
- Scalability issues at national level

**Status:**
Most blockchain voting implementations remain **pilot programmes or limited deployments**. Only Estonia has achieved sustained, large-scale use. The overwhelming majority of academic and security experts advise **against widespread adoption** until fundamental security concerns are addressed.

**Trend:**
After initial enthusiasm (2016-2019), several jurisdictions **discontinued or limited programmes** following security audits and academic criticism. Current trend favours cautious, limited pilots with extensive security review rather than large-scale deployment.

---

## Conclusion

Blockchain-based voting presents significant potential benefits, including:
- Enhanced accessibility for overseas, military, disabled, and rural voters
- Substantial cost reductions compared to traditional voting
- Increased transparency and auditability
- Improved voter turnout in pilot programmes
- Real-time verification capabilities

However, these benefits are countered by serious security concerns:
- Near-universal academic consensus against large-scale deployment
- Critical vulnerabilities discovered in multiple implementations
- Fundamental challenges with software independence
- Client-side device security risks
- Coercion and vote-buying potential
- Complexity introducing new attack vectors

**Current State:** Estonia remains the only large-scale success story, whilst most other implementations are limited pilots or discontinued programmes. The security research community strongly recommends paper-ballot systems with risk-limiting audits as the gold standard.

**Future Outlook:** Continued research and development, particularly in cryptographic protocols (zero-knowledge proofs, homomorphic encryption), may address some concerns. However, fundamental issues with Internet-connected voting systems remain unresolved. Corporate governance and small-scale private elections show more promise than large-scale public elections.

**Recommendation:** Any jurisdiction considering blockchain voting should conduct extensive security audits, maintain paper ballot backups, implement risk-limiting audits, and proceed with extreme caution given the critical nature of democratic electoral systems.

---

## Named Companies and Platform Providers

**Primary Platforms:**
1. **Voatz** (USA) - Most widely deployed in US elections; discontinued after security audits
2. **Agora** (Switzerland) - EPFL spinout; Sierra Leone observer; focus on government partnerships
3. **Follow My Vote** (International) - Open-source platform; BitShares blockchain; transparency focus
4. **Votem** (USA) - CastIron platform; CISA-approved; desktop and mobile
5. **Polys** (International) - Simple blockchain voting; 100% secure claims
6. **Netvote** (USA) - 100% open-source; distributed populations focus
7. **Democracy Earth Foundation** (International) - Non-profit; liquid democracy; Colombian referendum
8. **VoteWatcher** (International) - Plaintext blockchain publishing
9. **SecureVote** (International) - Blockchain-based secure voting platform
10. **Swiss Post/Scytl** (Switzerland/Spain) - Government e-voting; significant security vulnerabilities discovered

**Technology Providers:**
- **ioeX** (Taiwan) - South Korea Liberty Korea Party system
- **Simple Proof** (USA/Georgia) - Screven County blockchain recording
- **Forum Cooperative** - Union and cooperative elections

**Research Organisations:**
- MIT Digital Currency Initiative - Critical security research
- EPFL Swiss Lab for Digital Democracy - Agora development
- National Cybersecurity Center (USA) - Audit services for Denver and Utah

**Blockchain Platforms Used:**
- Ethereum, Hyperledger Fabric, BitShares, Graphene Framework, NEM, Solana, Bitcoin (recording only)

---

**Report Compiled:** 2025
**UK English Spelling Used Throughout**
