- ### Definition
  - A digital asset representation built on an existing blockchain platform that represents ownership, utility, or access rights, typically adhering to standardized protocols for transferability and interoperability, implemented as a cryptographically-secured unit that can be owned, transferred, and programmably controlled through smart contracts according to defined rules and token standards.
- ### Semantic Classification
  - owl-class:: blockchain:Token
  - owl-role:: Concept
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[EconomicLayer]]
- ### Relationships
  - is-subclass-of:: [[Digital Asset]], [[Blockchain Entity]], [[Transferable Right]]
  - enables:: [[Decentralized Exchange]], [[Liquidity Pool]], [[Staking]], [[Yield Farming]]
- ### Content
  ## Class Declaration
  Declaration(Class(:Token))
  ## Subclass Relationships
  SubClassOf(:Token :DigitalAsset)
  SubClassOf(:Token :BlockchainEntity)
  SubClassOf(:Token :TransferableRight)
  ## Defining Characteristics (Equivalent Class)
  EquivalentClasses(:Token
    ObjectIntersectionOf(:DigitalAsset
      ObjectSomeValuesFrom(:existsOn :BlockchainPlatform)
      ObjectSomeValuesFrom(:implementsStandard :TokenStandard)
      ObjectSomeValuesFrom(:hasTransferability :Transferable)))
  ## Essential Properties
  SubClassOf(:Token
    (ObjectExactCardinality 1 :deployedOn :Blockchain))
  SubClassOf(:Token
    (ObjectExactCardinality 1 :conformsTo :TokenStandard))
  SubClassOf(:Token
    (ObjectSomeValuesFrom :hasOwner :Address))
  SubClassOf(:Token
    (ObjectSomeValuesFrom :enablesOperation :TokenOperation))
  SubClassOf(:Token
    (DataHasValue :isTransferable "true"^^xsd:boolean))
  SubClassOf(:Token
    (ObjectSomeValuesFrom :hasSupply :TokenSupply))
  SubClassOf(:Token
    (ObjectSomeValuesFrom :ownedBy :TokenHolder))
  ## Token Properties with Constraints
  SubClassOf(:Token
    (DataSomeValuesFrom :hasTotalSupply
      DatatypeRestriction(xsd:decimal xsd:minInclusive "0"^^xsd:decimal)))
  SubClassOf(:Token
    (DataSomeValuesFrom :hasDecimals
      DatatypeRestriction(xsd:integer xsd:minInclusive "0"^^xsd:integer xsd:maxInclusive "18"^^xsd:integer)))
  SubClassOf(:Token
    (ObjectSomeValuesFrom :implementedBy :SmartContract))
  SubClassOf(:Token
    (DataHasValue :divisible "true"^^xsd:boolean))
  ## Data Properties
  DataPropertyAssertion(:tokenName :Token xsd:string)
  DataPropertyAssertion(:tokenSymbol :Token xsd:string)
  DataPropertyAssertion(:totalSupply :Token xsd:decimal)
  DataPropertyAssertion(:decimals :Token xsd:nonNegativeInteger)
  DataPropertyAssertion(:circulatingSupply :Token xsd:decimal)
  DataPropertyAssertion(:isMintable :Token xsd:boolean)
  DataPropertyAssertion(:isBurnable :Token xsd:boolean)
  DataPropertyAssertion(:transferable :Token xsd:boolean)
  ## Object Properties
  ObjectPropertyAssertion(:ownedBy :Token :Address)
  ObjectPropertyAssertion(:transferredTo :Token :Address)
  ObjectPropertyAssertion(:governedBy :Token :TokenGovernance)
  ObjectPropertyAssertion(:representsRight :Token :Right)
  ObjectPropertyAssertion(:hasSmartContract :Token :SmartContract)
  ObjectPropertyAssertion(:tradedOn :Token :Exchange)
  ObjectPropertyAssertion(:hasUtility :Token :UtilityFunction)
  ## Annotations
  AnnotationAssertion(rdfs:label :Token "Token"@en)
  AnnotationAssertion(rdfs:comment :Token
    "Digital asset representation on blockchain with transferable rights and standardized protocols"@en)
  AnnotationAssertion(:termID :Token "BC-0096")
  ## Token Type Subclasses
  Declaration(Class(:FungibleToken))
  SubClassOf(:FungibleToken :Token)
  SubClassOf(:FungibleToken
    (DataHasValue :isFungible "true"^^xsd:boolean))
  SubClassOf(:FungibleToken
    (DataHasValue :divisible "true"^^xsd:boolean))
  Declaration(Class(:NonFungibleToken))
  SubClassOf(:NonFungibleToken :Token)
  SubClassOf(:NonFungibleToken
    (DataHasValue :isFungible "false"^^xsd:boolean))
  SubClassOf(:NonFungibleToken
    (DataHasValue :decimals "0"^^xsd:integer))
  Declaration(Class(:SemiFungibleToken))
  SubClassOf(:SemiFungibleToken :Token)
  Declaration(Class(:SecurityToken))
  SubClassOf(:SecurityToken :Token)
  SubClassOf(:SecurityToken
    (ObjectSomeValuesFrom :hasCompliance :RegulatoryCompliance))
  Declaration(Class(:UtilityToken))
  SubClassOf(:UtilityToken :FungibleToken)
  Declaration(Class(:GovernanceToken))
  SubClassOf(:GovernanceToken :FungibleToken)
  SubClassOf(:GovernanceToken
    (ObjectSomeValuesFrom :hasUtility :VotingRights))
  Declaration(Class(:Stablecoin))
  SubClassOf(:Stablecoin :FungibleToken)
  SubClassOf(:Stablecoin
    (ObjectSomeValuesFrom :hasMechanism :PriceStabilityMechanism))
  Declaration(Class(:WrappedToken))
  SubClassOf(:WrappedToken :FungibleToken)
  ## Token Standard Subclasses
  Declaration(Class(:ERC20Token))
  SubClassOf(:ERC20Token :FungibleToken)
  SubClassOf(:ERC20Token
    (ObjectSomeValuesFrom :implementsStandard :ERC20))
  Declaration(Class(:ERC721Token))
  SubClassOf(:ERC721Token :NonFungibleToken)
  SubClassOf(:ERC721Token
    (ObjectSomeValuesFrom :implementsStandard :ERC721))
  Declaration(Class(:ERC1155Token))
  SubClassOf(:ERC1155Token :SemiFungibleToken)
  SubClassOf(:ERC1155Token
    (ObjectSomeValuesFrom :implementsStandard :ERC1155))
  ## Axioms and Constraints
  # Fungible tokens must be divisible
  SubClassOf(:FungibleToken
    (DataHasValue :divisible "true"^^xsd:boolean))
  # Tokens on Ethereum implement ERC standard
  SubClassOf(
    ObjectIntersectionOf(:Token
      ObjectSomeValuesFrom(:existsOn :EthereumBlockchain))
    (ObjectSomeValuesFrom :implementsStandard :ERCStandard))
  # Security tokens require regulatory compliance
  SubClassOf(:SecurityToken
    (ObjectSomeValuesFrom :hasCompliance :RegulatoryCompliance))
  # Circulating supply cannot exceed total supply
  SubClassOf(:Token
    (DataSomeValuesFrom :circulatingSupply
      DatatypeRestriction(xsd:decimal
        xsd:minInclusive "0"^^xsd:decimal
        xsd:maxExclusive :totalSupply)))
  ## Disjoint Classes
  DisjointClasses(:FungibleToken :NonFungibleToken :SemiFungibleToken)
  DisjointClasses(:UtilityToken :SecurityToken :GovernanceToken)
  )
      ```
  - ## About Token
  - A token is a digital asset representation on a blockchain that confers specific rights, utility, or value to its holder, implemented as a cryptographically-secured unit that can be owned, transferred, and programmably controlled through smart contracts according to defined rules and protocols.
  - ### Key Characteristics
    - 1. **Digital Representation**: Exists as blockchain data
    - 2. **Transferability**: Can be sent between addresses
    - 3. **Ownership**: Cryptographically controlled by private keys
    - 4. **Programmability**: Logic defined by smart contracts
    - 5. **Scarcity**: Supply controlled by token economics
  - ### Technical Components
    - **Fungibility**: Interchangeability of token units
    - **Divisibility**: Ability to split into smaller units
    - **Minting**: Creation of new token units
    - **Burning**: Permanent removal from supply
    - **Standard Compliance**: Adherence to token standards
  - ### Use Cases
    - **1. Fungible Tokens (ERC-20)**
    - **Application**: Currency, points, shares
    - **Standard**: ERC-20 (Ethereum), SPL (Solana)
    - **Examples**: USDT, USDC, DAI, UNI, LINK
    - **Properties**: Interchangeable, divisible
    - **Use Cases**: Payments, DeFi, rewards
  - ### 2024-2025: The RWA Tokenization Breakthrough
    The period from 2024 through 2025 witnessed the most significant transformation in token utility since DeFi Summer 2020: the explosive growth of **Real World Asset (RWA) tokenization**. What began as experimental pilots matured into production infrastructure managing billions in traditional financial assets on-chain, fundamentally bridging legacy finance with blockchain technology.
    #### Market Scale and Growth
    By April 2025, the RWA tokenization market—including stablecoins—reached a market capitalisation of nearly **$250 billion**, representing approximately 69% growth since 2024. Excluding stablecoins, the RWA tokenization market surged past **$50 billion in total assets by end-2024**, a 67% increase from the $30 billion recorded at the start of the year. This trajectory positioned RWAs as one of the fastest-growing sectors in cryptocurrency, demonstrating sustainable product-market fit beyond speculative trading.
    #### Stablecoin Dominance
    The stablecoin sector achieved a market capitalisation of **$224.9 billion by April 2025**, a 76% increase since January 2024. Stablecoins comprised **95% of the RWA market**, with **Tether's USDT and Circle's USDC** collectively accounting for 93.5% of all issuance. This concentration reflected network effects and regulatory compliance moats, though it raised centralisation concerns within the cryptocurrency community.
    Stablecoins processed **$46 trillion in total transaction volume** over the past year, up 106% from the previous year. This volume exceeded Visa's annual payment volume, establishing stablecoins as critical infrastructure for global commerce, remittances, and cross-border transactions—particularly in jurisdictions with currency volatility or limited banking access.
    #### Tokenised Treasuries: Institutional DeFi
    The tokenised treasuries sector's market capitalisation climbed by an impressive **539% since early 2024**, reaching an all-time high of **$5.6 billion by April 2025**. This growth reflected institutional appetite for yield-bearing blockchain-native assets backed by U.S. government securities. Products combined Treasury yields with blockchain composability, enabling collateralised borrowing, instant settlement, and 24/7 liquidity—features impossible with traditional Treasury holdings.
    **BlackRock's entry** into RWA tokenization with its tokenised fund **BUIDL** on the Ethereum network marked a watershed moment. The world's largest asset manager ($10 trillion AUM) validating blockchain infrastructure for traditional securities catalysed further institutional adoption and regulatory acceptance.
    #### Real Estate and Commodity Tokenization
    Real estate dominated the RWA space in 2024, with issuers announcing **$24 billion in tokenisation projects**, of which **$5.4 billion were already live on-chain**. Platforms including **RealT** enabled fractional property ownership with on-chain dividends, democratising access to real estate investment previously restricted to accredited investors.
    Commodity-backed tokens emerged as the third major RWA category alongside stablecoins and tokenised securities, with gold-backed tokens and agricultural commodity tokens providing inflation hedges and portfolio diversification on-chain.
    #### Regulatory Momentum
    The industry awaited Senate approval of the **GENIUS Act (Guiding and Establishing National Innovation for US Stablecoins)**, which aimed to establish clear rules for stablecoin collateralisation. The House approval of the **CLARITY Act** signalled bipartisan consensus that cryptocurrency was "both here to stay and ready to thrive in the U.S." These frameworks established guidelines for stablecoins, market structure, and digital asset oversight balancing innovation with investor protection.
    The passage of clarity-focused legislation accelerated institutional deployment. Legal certainty around token classification, custody requirements, and investor protection enabled large financial institutions to offer tokenised products without existential regulatory risk.
    #### Leading Projects and Infrastructure
    Key RWA projects included **Chainlink** (oracle infrastructure), **Centrifuge** (asset financing), **Goldfinch** (credit protocols), **Ondo Finance** (institutional-grade tokenised securities), **Franklin Templeton** (tokenised money market fund), **Mountain Protocol** (yield-bearing stablecoin), **RealT** (fractional real estate), and **Maple Finance** (undercollateralised lending).
    The ecosystem matured from novelty to necessity, with tokenization becoming the assumed method for issuing, trading, and settling traditional securities on public blockchains. The trajectory suggested that by 2027-2028, the majority of new security issuance would occur natively on-chain, with traditional settlement infrastructure relegated to legacy asset support.
    #### Token Standard Evolution: Beyond ERC-20
    Whilst **ERC-20** remained the "golden standard" for fungible token issuance (deployed in 2015, battle-tested across billions in value transferred), 2024-2025 witnessed **specialised token standards** emerging to address RWA-specific requirements:
    **Advanced RWA Token Standards:**
    - **ERC-4626** (Tokenized Vault Standard): Standardised **yield-bearing vaults**, enabling pooled RWA products (e.g., diversified Treasury portfolios, real estate investment trusts) with unified interfaces for deposits, withdrawals, and accounting. This simplified DeFi protocol integration—lending protocols could accept any ERC-4626-compliant vault as collateral without custom integration code
    - **ERC-7540** (Asynchronous Tokenized Vault): **Finalised by Ethereum in 2024**, this standard enabled **on-chain structured finance** with features impossible in traditional markets:
      - **Asynchronous operations**: Deposits/withdrawals processed over time (matching T+2 settlement of underlying assets) rather than instant execution, mirroring traditional finance clearing whilst maintaining on-chain auditability
      - **Multi-asset baskets**: Single token representing diversified portfolio (e.g., mixed commercial real estate across geographies)
      - **Secondary distributions**: Built-in dividend/interest payment mechanisms
      - **Compliance hooks**: Programmable whitelist/blacklist enforcement, KYC verification, accredited investor checks
    - **ERC-3643** (Permissioned Token Standard): Implemented **allow-lists** and **off-chain compliance hooks**, enabling issuers to enforce securities regulations (transfer restrictions, accredited investor requirements) at smart contract level. This addressed regulatory requirements whilst maintaining blockchain transparency
    - **ERC-1400** (Security Token Standard): Although pre-dating 2024, ERC-1400 achieved widespread institutional adoption through 2024-2025 as the **de facto security token implementation**, supporting **partitions** (different tranches with distinct rights), **controller operations** (forced transfers for legal compliance), and **document management** (attaching legal agreements to on-chain tokens)
    **Blockchain Platform Dominance:**
    - **Ethereum** maintained **overwhelming dominance** for RWA tokenization due to:
      - **Developer ecosystem**: Largest pool of smart contract developers (over 4,000 active monthly)
      - **Institutional trust**: Battle-tested infrastructure securing hundreds of billions
      - **Token standard maturity**: ERC-20, ERC-721, ERC-1155, ERC-1400, ERC-4626, ERC-7540 comprehensive coverage
      - **DeFi composability**: Tokenized assets immediately compatible with lending, trading, derivatives protocols
    - **Polygon, Avalanche, Solana**: Emerged as **secondary platforms** offering lower transaction costs and faster finality, attracting use cases prioritising cost over maximal decentralisation (e.g., high-frequency trading of tokenized commodities, micro-transactions for fractional real estate shares)
    #### Security Token Offerings and Secondary Market Challenges
    **Primary Issuance: Security Token Offerings (STOs):**
    - **STOs** represented **regulated alternative** to 2017-2018's unregulated Initial Coin Offerings (ICOs), whereby issuers offered tokens directly to **accredited investors** or retail investors under regulatory exemptions (Regulation D, Regulation S, Regulation A+ in U.S.)
    - By 2024-2025, STOs achieved **institutional respectability**: law firms (Latham & Watkins, Kirkland & Ellis), investment banks (Goldman Sachs Digital Assets), and asset managers (BlackRock, Franklin Templeton) routinely participated in tokenized security issuances, something unthinkable during the ICO era
    - **Buy-and-hold limitation**: Most tokenization projects operated as **buy-and-hold investments** where investors purchased tokens directly from issuer and could only **sell back to the same entity**, not trade freely on secondary markets. This limitation reflected regulatory constraints rather than technical barriers
    **Secondary Market Regulatory Barriers:**
    - **Free trading restrictions**: Secondary market trading—where investors trade tokens peer-to-peer without issuer intermediation—faced **significantly stricter regulatory hurdles**:
      - **Securities exchange requirements**: In most jurisdictions, platforms facilitating secondary trading of security tokens must register as **securities exchanges** or **alternative trading systems (ATS)**, requiring substantial capital, compliance infrastructure, and regulatory approval
      - **Central Securities Depository (CSD) requirements**: Under **UK and EU law**, securities traded on secondary markets must be issued into a **Central Securities Depository**, which becomes the **authoritative record of ownership**. This requirement created **tension with blockchain's distributed ledger** (which blockchain is authoritative—CSD's permissioned ledger or public blockchain?)
      - **Regulatory sandboxes**: Recognising this tension, both **UK's Digital Securities Sandbox** (launched 2023) and **EU DLT Pilot Regime** (launched 2023 under MiCA) provided **temporary exemptions** from CSD requirements, enabling experimentation with blockchain-native settlement. By 2025, approximately **15-20 projects** participated in these sandboxes, testing **atomic settlement** (simultaneous asset and cash transfer), **fractional ownership**, and **instant clearing**
    - **Liquidity premium paradox**: The illiquidity of most tokenized securities—due to secondary market restrictions—created **ironic underperformance** compared to traditional securities. Whilst tokenization promised **24/7 trading** and **instant settlement**, regulatory constraints meant most tokenized assets traded **less frequently** than equivalent traditional securities on established exchanges
    #### Utility Tokens and Governance Evolution
    Beyond RWA representation, **utility tokens** and **governance tokens** matured through 2024-2025:
    **Utility Token Legitimation:**
    - DeFi protocols increasingly positioned native tokens as **utility mechanisms** rather than speculative assets, offering:
      - **Discounted trading fees**: Token holders paid 10-50% lower fees (e.g., Binance BNB offering 25% trading fee discount)
      - **Priority access**: Exclusive access to new product launches, leveraged trading tiers, early token sales
      - **Governance rights**: Voting on protocol parameters, treasury allocations, upgrade proposals
    - This "utility theatre" faced **regulatory scepticism**: authorities argued many utility claims were **post-hoc rationalisations** for what fundamentally remained **investment contracts** under securities law (Howey test: investment of money in common enterprise with expectation of profit from others' efforts)
    **Governance Token Challenges:**
    - Governance tokens faced **persistent paradoxes** explored in depth through DAO governance literature:
      - **Low participation**: Only 5-15% of token holders typically voted on proposals
      - **Whale dominance**: Top 1% controlled 70-85% voting power across major protocols
      - **Apathy-activism imbalance**: Routine maintenance proposals saw minimal participation whilst controversial changes triggered coordinated campaigns—creating governance instability
    #### Regulatory Frameworks: Jurisdictional Fragmentation
    Token regulation remained **highly fragmented** across jurisdictions through 2024-2025, with no unified global framework:
    **European Union (MiCA and DLT Pilot Regime):**
    - **Markets in Crypto-Assets Regulation (MiCA)**: Effective 2024, established:
      - **Asset-referenced tokens (ARTs)**: Stablecoins backed by basket of assets, subject to reserve requirements
      - **E-money tokens (EMTs)**: Stablecoins backed by single fiat currency, treated as e-money under existing frameworks
      - **Utility tokens**: Tokens providing access to goods/services, lighter regulatory treatment if no investment characteristics
      - **Issuer authorisation**: Token issuers must obtain **license from national regulators** before operating in EU
    - **DLT Pilot Regime**: Temporary framework (2023-2029) allowing **market infrastructure experimentation** with distributed ledger technology, exempting participants from certain CSD and MiFID II requirements whilst requiring **BaFin (Germany), AMF (France), or equivalent** oversight
    **Singapore (MAS Framework):**
    - **Monetary Authority of Singapore** classified tokenized RWAs as **securities** under Securities and Futures Act, requiring platforms to hold:
      - **Capital Markets Services (CMS) license**: For dealing, custody, or fund management
      - **Recognized Market Operator (RMO) license**: For operating secondary trading platforms
    - Singapore's **clear regulatory taxonomy** attracted substantial RWA tokenization activity, with platforms including iSTOX, ADDX, and Tokeny operating licensed tokenization infrastructure
    **United States (Fragmented State/Federal Approach):**
    - **Federal level**: SEC maintained **aggressive enforcement** posture, treating most tokens as unregistered securities and pursuing civil enforcement actions against issuers. The 2024 **Ripple case** partial victory (XRP programmatic sales not securities) provided limited relief but left most tokens in legal limbo
    - **State level**: Wyoming's **DAO LLC law** and **Digital Asset Depository Charter** attracted tokenization projects, offering state-chartered custody and legal entity frameworks. Other states (Texas, Colorado, Arizona) pursued competing pro-crypto frameworks, creating **regulatory arbitrage** opportunities
    **KYC and Compliance Requirements:**
    - Unlike permissionless DeFi (where anonymous users interact with smart contracts), **RWA tokenization required rigorous KYC/AML compliance**:
      - **Identity verification**: Users must provide government-issued ID, proof of address, selfie verification
      - **Accredited investor checks**: For Regulation D offerings in U.S., platforms must verify investors meet income ($200K+ annually) or net worth ($1M+ excluding primary residence) thresholds
      - **Ongoing monitoring**: Platforms must monitor for suspicious transactions, file Suspicious Activity Reports (SARs) with financial intelligence units
      - **Sanctions screening**: Real-time checks against OFAC, UN, EU sanctions lists before allowing transfers
    This compliance burden created **centralisation tension**: whilst blockchain promised disintermediation, RWA tokenization required **trusted intermediaries** (custodians, KYC providers, compliance officers) comparable to traditional finance, undermining decentralisation narratives.
    #### Market Projections: The $2 Trillion Decade
    **McKinsey's $2 Trillion Projection:**
    - McKinsey & Company projected tokenized asset markets could reach **$2 trillion by 2030**, representing approximately **2% of global financial assets** ($100+ trillion). This forecast assumed:
      - **Regulatory clarity** achieved by 2026-2027 in major jurisdictions
      - **Institutional custody infrastructure** maturation (Coinbase Custody, BitGo, Fireblocks achieving bank-grade security)
      - **Traditional finance integration**: Major exchanges (NYSE, Nasdaq, LSE) offering tokenized security trading
      - **Network effects**: Once critical mass achieved, tokenization becomes default for new issuances
    **2025 Milestones:**
    - Industry analysts projected **$500 billion tokenized RWAs (excluding stablecoins) by end-2025**, up from approximately $15 billion (December 2024), requiring **3,200% growth**—ambitious but reflecting exponential adoption curves typical of network-effect technologies
    - **Stablecoins** already exceeded $250 billion by mid-2025, demonstrating that token infrastructure could support massive value transfer at scale
    #### Challenges and Persistent Skepticism
    Despite explosive growth and institutional validation, RWA tokenization faced **persistent challenges**:
    **Technical Risks:**
    - **Smart contract vulnerabilities**: Bugs in token contracts could enable theft, unauthorized minting, or transfer freezes—with billion-dollar consequences for institutional RWAs
    - **Oracle dependence**: Off-chain data (asset valuations, NAVs, compliance status) required **trusted oracles** (Chainlink, Tellor), reintroducing centralisation
    - **Chain finality**: Blockchain reorganizations (reorgs) could invalidate ownership records, creating legal ambiguity
    **Economic Questions:**
    - **Value proposition skepticism**: Critics argued tokenization offered **marginal improvements** over existing infrastructure (e.g., T+0 settlement vs. T+2) whilst introducing **new risks** (smart contract exploits, key management)—insufficient value for institutional migration costs
    - **Liquidity fragmentation**: Tokenized versions of assets traded on **multiple chains** (Ethereum, Polygon, Avalanche) **fragmented liquidity**, reducing price efficiency compared to centralised exchanges concentrating order books
    **Regulatory Uncertainty:**
    - **Jurisdictional arbitrage risks**: Platforms incorporated in permissive jurisdictions (Cayman Islands, BVI) whilst serving global users created **enforcement challenges** and potential for regulatory evasion
    - **Securities law evolution**: Unclear whether tokenized assets represented **new asset class** requiring bespoke regulation or **existing securities** in new form—with profound implications for custody, disclosure, insider trading rules
    The 2024-2025 period represented tokenization's **transition from proof-of-concept to production infrastructure**, yet fundamental questions remained about whether blockchain offered **revolutionary efficiency** justifying migration costs or merely **incremental improvements** destined to remain niche use cases within broader traditional finance dominance.
  - ### Token Taxonomy and Standards
    #### Token Types by Fungibility
    - **[[Fungible Token]]**: Interchangeable units (ERC-20, RGB20, BRC-20, Runes, SPL Token)
      - Examples: USDC, DAI, UNI, LINK, AAVE, WBTC
      - Use Cases: Payments, DeFi, stablecoins, governance, utility
    - **[[Non-Fungible Token]] (NFT)**: Unique, indivisible assets (ERC-721, RGB21, Taproot Assets, Ordinals)
      - Examples: Bored Ape Yacht Club, CryptoPunks, Art Blocks, Bitcoin Ordinals
      - Use Cases: Digital art, collectibles, gaming assets, virtual real estate, domain names
    - **[[Semi-Fungible Token]]**: Hybrid tokens (ERC-1155, ERC-3525)
      - Examples: Event tickets, gaming items, fractional NFTs, carbon credits
      - Use Cases: Items fungible before event, unique after (POAP); limited edition gaming items
    #### Token Types by Purpose
    - **[[Security Token]]**: Regulated ownership in real-world assets (ERC-3643, ERC-1400, Polymesh)
      - Asset Classes: Equity tokens, debt tokens, real estate, commodities, fund tokens, revenue sharing
      - Compliance: KYC/AML verification, accredited investor checks, transfer restrictions, regulatory reporting
    - **[[Utility Token]]**: Platform access and services (LINK, FIL, BAT, MANA, SAND)
      - Categories: Oracle services, storage networks, compute networks, advertising, gaming, privacy, interoperability
    - **[[Governance Token]]**: DAO and protocol voting rights (UNI, AAVE, MKR, CRV, COMP, SNX)
      - Mechanisms: On-chain voting, delegation, quadratic voting, time-locked voting power (veTokenomics)
    - **[[Stablecoin]]**: Price-stable tokens pegged to fiat/commodities
      - Fiat-Backed: USDC, USDT, PYUSD (fully reserved, regulated)
      - Crypto-Collateralized: DAI, FRAX, sUSD (over-collateralized with crypto assets)
      - Algorithmic: USDD, historical failures (UST/Terra collapse May 2022)
    #### Ethereum Token Standards
    - **[[ERC-20]]** (2015): Fungible tokens - transfer(), approve(), balanceOf(), totalSupply()
    - **[[ERC-721]]** (2018): NFTs - ownerOf(), safeTransferFrom(), tokenURI(), metadata JSON
    - **[[ERC-1155]]** (2018): Multi-token - batch transfers, multiple types in one contract, gas efficiency
    - **[[ERC-3643]]** (2021): Security tokens - on-chain identity verification, transfer restrictions, KYC/AML
    - **[[ERC-4626]]** (2022): Tokenized vaults - standardized yield-bearing vaults for DeFi integration
    - **[[ERC-7540]]** (2024): Asynchronous vaults - on-chain structured finance, T+2 settlement, compliance hooks
    #### Bitcoin Token Standards
    - **[[RGB Protocol]]** (2023 mainnet): Client-side validation, Lightning Network integration, UTXO-based
      - **RGB20**: Fungible tokens on Bitcoin with privacy and scalability
      - **RGB21**: Non-fungible tokens on Bitcoin with client-side validation
    - **[[Taproot Assets]]** (2024): Taproot-based asset issuance by Lightning Labs
      - Features: Multi-asset Lightning channels, atomic swaps, privacy-preserving transfers
      - Use Cases: Stablecoins on Lightning Network, tokenized assets, cross-border payments
    - **[[BRC-20]]** (2023): JSON inscriptions on satoshis via Ordinals
      - Popular Tokens: ORDI, SATS, RATS
      - Limitations: No smart contracts, manual indexing, high fees
    - **[[Runes Protocol]]** (2024): UTXO-based fungible tokens by Casey Rodarmor
      - Design: More efficient than BRC-20, native Bitcoin without inscriptions
      - Launch: April 2024 halving block 840,000
    - **[[Ordinals]]** (2023): Serial numbering of satoshis, immutable data inscription
      - Collections: Ordinal Punks, Bitcoin Frogs, Taproot Wizards, NodeMonkes
    #### Other Platform Standards
    - **[[SPL Token]]** (Solana): 65,000 TPS, sub-second finality, token extensions (transfer fees, confidential transfers)
    - **[[Metaplex]]** (Solana NFTs): Compressed NFTs, candy machine minting, 1M NFTs for $110
    - **[[BEP-20]]** (Binance Smart Chain): ERC-20 compatible, faster and cheaper
    - **[[TRC-20]]** (TRON): High throughput, low fees for stablecoins (largest USDT supply)
    #### Token Use Cases
    - **DeFi**: Uniswap (UNI), Aave (AAVE), Curve (CRV), MakerDAO (MKR/DAI), Lido (stETH/LDO)
    - **NFT Marketplaces**: OpenSea, Blur (BLUR), Magic Eden, LooksRare (LOOKS)
    - **Gaming & Metaverse**: Axie Infinity (AXS/SLP), The Sandbox (SAND), Decentraland (MANA), Illuvium (ILV)
    - **Real-World Assets (RWA)**: Ondo Finance (OUSG), Franklin Templeton (BENJI), PAXG (gold), Toucan Protocol (carbon credits)
    #### Token Analytics Platforms
    - **Multi-Chain**: CoinGecko, CoinMarketCap, Messari, DeFiLlama (TVL tracking)
    - **Ethereum**: Dune Analytics, Nansen, Etherscan, Glassnode
    - **Bitcoin**: Blockchain.com, Mempool.space, Ordinals.com, UniSat (BRC-20 indexer)
    - **NFT**: NFTGo, Icy.tools, Blur Analytics
  - ### Related Concepts and Ecosystem
    **Token Infrastructure**:
    - [[Smart Contract]], [[ERC-20]], [[ERC-721]], [[ERC-1155]], [[RGB Protocol]], [[Taproot Assets]]
    - [[BRC-20]], [[Runes Protocol]], [[Ordinals]], [[SPL Token]], [[Metaplex]]
    **DeFi Ecosystem**:
    - [[DeFi]], [[Decentralized Exchange]], [[Liquidity Pool]], [[Automated Market Maker]]
    - [[Yield Farming]], [[Staking]], [[Lending Protocol]], [[Bridge]]
    **Token Economics**:
    - [[Tokenomics]], [[Token Distribution]], [[Token Burn]], [[Vesting Schedule]], [[Liquidity Mining]]
    **Governance & DAOs**:
    - [[DAO]], [[Governance]], [[Proposal]], [[Voting]], [[veTokenomics]]
    **Bitcoin Ecosystem**:
    - [[Bitcoin Proof-of-Work Protocol]], [[Lightning Network]], [[Taproot]], [[UTXO]], [[Satoshi]]
    **Platforms**:
    - [[Ethereum Smart Contract Platform]], [[Solana]], [[Polygon]], [[Arbitrum]], [[Optimism]], [[Avalanche]], [[Polkadot]], [[Cosmos]]
    **NFT Ecosystem**:
    - [[NFT]], [[NFT Marketplace]], [[Metadata]], [[IPFS]], [[Royalties]]
    **Notable Projects**:
    - [[Uniswap]], [[Aave]], [[MakerDAO]], [[Curve Finance]], [[Compound]], [[Chainlink]], [[Lido]], [[OpenSea]]
    **Regulatory**:
    - [[KYC]], [[AML]], [[SEC]], [[MiCA]], [[Howey Test]]
  - ### Standards & References
- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z