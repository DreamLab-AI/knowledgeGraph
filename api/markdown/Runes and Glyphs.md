public:: true

- ### OntologyBlock
  id:: Runes and Glyphs
  - ontology:: true
  - public-access:: true
  - term-id:: BC-9903
  - preferred-term:: public:: true
  - source-domain:: bc
  - owl:class:: bc:PublicTrue
  - status:: draft

### Origins and Design Philosophy
- Created by [[Casey Rodarmor]] in response to [[BRC-20]]'s inefficient use of Bitcoin [[blockspace]], which stored token state in [[Ordinals]] [[inscription]] [[metadata]]
	- Announced in September 2023 via [[Bitcoin]] improvement proposal discussions, officially launched April 20, 2024 coinciding with fourth Bitcoin [[halving]]
	- Design goals: [[UTXO]]-native implementation, minimal [[blockchain]] footprint, no dependency on off-chain indexers for basic functionality, compatibility with [[Lightning Network]]
	- Philosophy emphasises Bitcoin's [[UTXO]] model as superior foundation for [[fungible tokens]] compared to account-based approaches borrowed from [[Ethereum]]
	- Intentionally simple specification to minimise [[consensus]] risks and maintain Bitcoin's [[security]] guarantees without requiring [[soft fork]] or [[hard fork]]
	- Built on Bitcoin's existing [[OP_RETURN]] [[opcode]] functionality, ensuring compatibility with all Bitcoin [[nodes]] without protocol changes

- ### Core Technical Mechanisms
	- **[[OP_RETURN]] Storage**: Runes uses [[OP_RETURN]] outputs to store protocol messages, allowing up to 80 bytes of arbitrary data per [[transaction]]
	- **Runestone Structure**: Each Runes transaction contains a "runestone" - protocol message encoded in [[OP_RETURN]] specifying token operations (mint, transfer, burn)
	- **[[UTXO]]-Based Balances**: Token balances stored directly in Bitcoin [[UTXOs]], each UTXO can carry multiple Runes simultaneously
	- **Protocol Buffers Encoding**: Uses efficient [[varint]] encoding scheme to minimise data size, critical given [[OP_RETURN]]'s 80-byte limitation
	- **Edicts System**: Transactions contain "edicts" specifying how Runes transfer between [[inputs]] and [[outputs]], deterministically processing token flows
	- **Cenotaph Mechanism**: Invalid Runes transactions marked as "cenotaphs" - protocol errors that burn tokens to prevent accidental loss through malformed transactions

- ### Transaction Flow and Processing
	- Runes [[minting]]: Deployment transaction creates new Rune with parameters (name, symbol, supply, divisibility), stored in [[OP_RETURN]]
	- Name encoding uses [[base26]] alphabet with bullet separator (•), creating distinctive names like "UNCOMMON•GOODS" or "DOG•GO•TO•THE•MOON"
	- **Etching**: Initial deployment of Rune defines total supply, divisibility (0-38 decimal places), mint terms (open mint vs premine), and transfer rules
	- **Transfer mechanism**: Standard Bitcoin transactions with Runestone in [[OP_RETURN]] specifying which Runes move to which outputs
	- **Batch operations**: Single transaction can transfer multiple different Runes simultaneously, significantly more efficient than [[BRC-20]] which required separate transactions per token
	- **[[Indexer]] requirements**: While protocol is [[UTXO]]-native, practical wallets and explorers run indexers to track Runes across [[blockchain]] history

- ### Advanced Protocol Features
	- **Divisibility control**: Tokens support 0-38 decimal places, enabling everything from whole-number NFTs to micro-payments
	- **Supply caps**: Hard caps on maximum supply enforced at protocol level, preventing inflation beyond initial parameters
	- **Mint terms**: Flexible minting - closed (premine), open (anyone can mint until cap), or time-limited open mints
	- **Burning mechanism**: Explicit burn operations reduce circulating supply, useful for [[deflationary]] [[tokenomics]]
	- **[[Lightning Network]] compatibility**: [[UTXO]]-based design enables future [[Layer 2]] integration, potentially allowing Runes in [[Lightning]] channels
	- **[[Atomic swaps]]**: Native support for trustless cross-Rune swaps within single Bitcoin transaction, foundation for [[decentralized exchange]] functionality

- ## Glyphs Protocol: Alternative Approach

- ### Protocol Overview
	- Developed by [[Melvin Carvalho]], prominent Bitcoin developer and [[Nostr]] protocol contributor
	- Explores alternative encoding schemes and token management approaches complementary to Runes
	- Focused on experimental features and community-driven token standards on Bitcoin [[testnet]]
	- Emphasises compatibility with [[decentralized identity]] systems and [[Nostr]] [[social networks]]
	- Provides testing ground for innovations before potential [[mainnet]] deployment

- ### Technical Implementation
	- Uses similar [[OP_RETURN]]-based messaging but with different encoding schemes optimised for specific use cases
	- Integration with [[Nostr]] protocol for [[decentralized]] token metadata and [[social]] features
	- Testnet-first approach allows rapid iteration without risking real Bitcoin value
	- Explores [[NFT]]-like properties within [[fungible token]] framework - hybrid token models
	- Community governance features enabling token holder voting on protocol parameters

- ### Relationship to Runes
	- Both protocols share [[UTXO]]-native philosophy, departing from [[Ordinals]]/[[BRC-20]] inscription model
	- Glyphs serves as experimental laboratory for features that may influence Runes development
	- Cross-compatible indexing infrastructure - many tools support both protocols
	- Complementary rather than competitive - different use cases and risk profiles
	- Glyphs more experimental, Runes more production-focused with larger ecosystem

- ## Deep Dive: OP_RETURN and UTXO Architecture

- ### OP_RETURN Mechanism
	- [[OP_RETURN]] is Bitcoin [[opcode]] that marks [[transaction]] [[output]] as provably unspendable, allowing arbitrary data storage
	- Originally limited to 40 bytes, increased to 80 bytes in 2015 after community consensus
	- Enables "colored coins" concept - associating metadata with specific [[UTXOs]] to represent assets
	- Runes optimises 80-byte limit through clever encoding: protocol identifier (0x52) + compressed [[varint]] messages
	- Critical advantage: [[OP_RETURN]] outputs prunable by [[nodes]] running pruned mode, reducing long-term storage burden compared to [[witness]] data
	- Does not bloat [[UTXO set]] since [[OP_RETURN]] outputs immediately unspendable, unlike [[Ordinals]] which create spend-able outputs carrying data

- ### UTXO Model Integration
	- Bitcoin's [[UTXO]] (Unspent Transaction Output) model tracks discrete "coins" rather than account balances
	- Each [[UTXO]] in Runes can carry multiple token types simultaneously - "multiplexing" different Runes on same output
	- Token transfers follow Bitcoin's [[transaction]] flow: consume input UTXOs, create output UTXOs with new token distributions
	- **Key efficiency**: Consolidating multiple token transfers in single transaction amortizes Bitcoin [[transaction fees]]
	- [[Coin selection]] algorithms extended to optimise both Bitcoin and Runes balances simultaneously
	- [[Privacy]] implications: Similar to Bitcoin UTXOs, Runes transfers can be analysed on-chain, but [[CoinJoin]] techniques applicable

- ### Comparison: UTXO vs Account Model
	- Account-based tokens ([[Ethereum]] [[ERC-20]]) maintain global state mapping addresses to balances
	- [[UTXO]]-based tokens (Runes) distribute state across individual transaction outputs
	- **Parallelism**: [[UTXO]] model enables better transaction parallelization - non-overlapping UTXOs process concurrently
	- **State bloat**: Account models accumulate state indefinitely, [[UTXO]] models only track unspent outputs
	- **[[Smart contract]] complexity**: Account models easier for complex [[DeFi]], [[UTXO]] models simpler and more auditable
	- Runes embraces Bitcoin's [[UTXO]] philosophy rather than forcing account semantics through [[Ordinals]] inscriptions

- ## Comparative Analysis: Bitcoin Token Standards

- ### Runes vs Ordinals
	- [[Ordinals]]: Theory assigning unique identifiers to individual [[satoshis]], enabling [[NFT]]-like collectibles on Bitcoin
	- [[Ordinals]] creates [[non-fungible]] assets by inscribing data in [[witness]] field of [[Taproot]] transactions
	- Runes explicitly designed for [[fungible tokens]], Ordinals for unique digital artefacts
	- **Storage location**: Ordinals uses [[witness]] data (bloats [[blockchain]] permanently), Runes uses [[OP_RETURN]] (prunable)
	- **Use case overlap**: Some projects launched as Ordinals collections, then issued Runes tokens for community governance
	- Created by same developer ([[Casey Rodarmor]]), designed as complementary standards - Ordinals for [[NFTs]], Runes for [[fungible tokens]]
	- [Updated 2025] Many [[NFT]] projects now issue companion Runes tokens for [[utility]] and [[governance]]

- ### Runes vs BRC-20
	- [[BRC-20]]: Earlier [[fungible token]] standard built atop [[Ordinals]] protocol, launched March 2023
	- [[BRC-20]] stores token ledger as [[JSON]] inscriptions in [[Ordinals]], requiring off-chain indexers to track balances
	- **Efficiency crisis**: Each [[BRC-20]] transfer requires new inscription, consuming significant [[blockspace]] - single transfer can exceed 1 KB
	- Runes transfers typically 200-300 bytes including Bitcoin overhead, 70% reduction vs [[BRC-20]]
	- [[BRC-20]] triggered Bitcoin [[mempool]] congestion in May 2023, driving [[transaction fees]] to multi-year highs
	- **Indexer centralization**: [[BRC-20]] requires complex indexers parsing all [[Ordinals]] inscriptions, Runes indexing more straightforward
	- Market impact: Runes launched with goal to "replace [[BRC-20]]", offering superior technical design for same use cases
	- [Updated 2025] [[BRC-20]] volume declining 68% year-over-year as projects migrate to Runes for lower fees

- ### Runes vs Taproot Assets
	- [[Taproot Assets]]: Protocol by [[Lightning Labs]] for issuing assets on Bitcoin, leveraging [[Taproot]] [[Schnorr signatures]]
	- Stores asset data in [[Taproot]] [[script trees]], more private than [[OP_RETURN]] but more complex
	- **[[Lightning]] integration**: [[Taproot Assets]] designed for seamless [[Lightning Network]] compatibility from inception
	- Runes simpler specification, [[Taproot Assets]] more feature-rich but requires specialized wallet support
	- [[Taproot Assets]] supports both [[fungible]] and [[non-fungible]] assets in unified framework
	- **Privacy model**: [[Taproot Assets]] transactions indistinguishable from normal Bitcoin transactions, Runes visible via [[OP_RETURN]]
	- Different philosophies: Runes emphasises simplicity and UTXO-native design, [[Taproot Assets]] emphasises privacy and [[Layer 2]] scalability
	- [Updated 2025] [[Taproot Assets]] gaining traction for institutional [[stablecoins]], Runes dominates retail [[memecoin]] market

- ### Runes vs RGB Protocol
	- [[RGB Protocol]]: Client-side validation protocol for Bitcoin assets, pioneered by [[Giacomo Zucco]] and [[LNP/BP Standards Association]]
	- [[RGB]] stores asset state off-chain, using Bitcoin as commitment layer - radical departure from on-chain token models
	- **Scalability**: [[RGB]] theoretically unlimited throughput since validation happens off-chain, only commitments on Bitcoin
	- Complexity trade-off: [[RGB]] requires sophisticated client software and complex [[cryptographic]] proofs
	- Runes fully on-chain, simpler to implement and verify, but limited by Bitcoin's [[block size]]
	- **Use case divergence**: [[RGB]] targets enterprise asset issuance and high-frequency [[DeFi]], Runes targets community tokens and [[NFT]] ecosystems
	- [[RGB]] leverages [[Lightning Network]] for instant transfers, Runes currently limited to Bitcoin [[block time]]
	- [Updated 2025] [[RGB]] seeing adoption for [[security tokens]] and [[stablecoins]] requiring regulatory compliance

- ## Use Cases and Applications

- ### Memecoins and Community Tokens
	- **DOG•GO•TO•THE•MOON**: Largest Rune by market cap, launched at halving block, represents [[memecoin]] culture on Bitcoin
	- Community-driven tokens leverage Bitcoin's [[security]] and [[decentralization]] without [[Ethereum]] [[gas fees]]
	- [[Fair launch]] mechanisms: Open mints allow community participation without [[venture capital]] pre-allocation
	- Bitcoin's [[proof-of-work]] [[consensus]] provides robust foundation for [[speculative]] token [[trading]]
	- Lower barrier to entry vs [[Ethereum]] tokens: No need to learn [[Solidity]] or [[smart contract]] development
	- [Updated 2025] Over 8,000 [[memecoin]] Runes launched, total market cap exceeding $400 million

- ### Gaming and Virtual Economies
	- **In-game currencies**: Runes as [[fungible]] assets for [[blockchain gaming]], backed by Bitcoin's [[security]]
	- **Achievement tokens**: Represent player accomplishments, tradeable on open markets
	- Integration with [[NFT]] gaming: [[Ordinals]] for unique items, Runes for currencies and consumables
	- **Cross-game economies**: Bitcoin's neutrality enables tokens used across multiple games
	- [[Lightning Network]] future: Instant micro-transactions for real-time gaming applications
	- Lower [[transaction costs]] than [[Ethereum]] [[Layer 1]] making feasible for high-frequency game actions

- ### DeFi Primitives
	- **[[Decentralized exchanges]]**: [[Atomic swap]] functionality enables trustless Rune-to-Rune and Rune-to-[[Bitcoin]] trading
	- **[[Liquidity pools]]**: [[UTXO]]-based [[AMM]] protocols emerging, offering [[decentralized]] trading without [[smart contracts]]
	- **[[Yield farming]]**: Time-locked Bitcoin transactions with Runes rewards create staking-like mechanisms
	- **[[Lending]] protocols**: Collateralized loans using Runes as collateral, Bitcoin as borrowed asset
	- [[Wrapped assets]]: Bridge tokens representing [[Ethereum]] [[ERC-20]] tokens or [[stablecoins]] on Bitcoin via [[federated]] [[sidechains]]
	- [Updated 2025] Total Value Locked (TVL) in Runes-based [[DeFi]] protocols reached $180 million

- ### NFT Ecosystem Integration
	- **Collection tokens**: [[NFT]] projects issue companion Runes for [[governance]], [[royalties]], or [[utility]]
	- [[Ordinals]] for unique art, Runes for fungible project tokens - complementary standards by same creator
	- **Fractionalization**: Runes enable fractional ownership of high-value [[Ordinals]] [[inscriptions]]
	- [[Royalty]] mechanisms: Creators receive Runes tokens on secondary sales, programmable via protocol conventions
	- **Community rewards**: [[NFT]] holders receive airdrops of project Runes, aligning incentives

- ### Cross-Domain Innovation: AI and Robotics

- #### AI/GenAI Applications
	- **AI-generated tokens**: [[Generative AI]] creates token artwork, [[metadata]], and [[marketing]] materials for Runes launches
	- **Algorithmic trading bots**: [[Machine learning]] models predict Runes price movements, execute [[arbitrage]] across [[exchanges]]
	- **[[Smart agents]]**: [[AI]] agents autonomously manage Runes portfolios, rebalancing based on market conditions
	- **[[Metadata]] generation**: [[Large language models]] generate token descriptions, [[whitepaper]] content, and community narratives
	- **Fraud detection**: [[AI]] analyses Runes transactions patterns to identify [[rug pull]] schemes and [[scam]] tokens
	- **[[Tokenomics]] optimization**: [[Machine learning]] suggests optimal supply curves, minting schedules based on historical data
	- [Updated 2025] 34% of new Runes launches incorporate [[AI]]-generated branding and [[metadata]]

- #### Robotics Integration
	- **Token-gated services**: Robots provide services only to Runes token holders - physical world [[utility]]
	- **[[Decentralized]] robot swarms**: Robots coordinate using Runes tokens as [[economic incentives]] for collaborative tasks
	- **Pay-per-use robotics**: Manufacturing robots accept Runes payments via [[Lightning Network]] for micro-tasks
	- **[[Autonomous]] delivery**: Drone delivery networks use Runes for trustless payment settlement
	- **Robot [[marketplaces]]**: Robots trade compute resources, sensor data using Runes as native currency
	- **[[IoT]] device payments**: Internet of Things devices transact using Runes on Bitcoin's [[censorship-resistant]] network

- ## Market Dynamics and Ecosystem Growth

- ### Trading Volume and Liquidity
	- **Launch impact**: Runes protocol went live at Bitcoin halving (April 20, 2024), immediately capturing 68% of Bitcoin block space for first 24 hours
	- Peak trading day (April 21, 2024): Over $135 million in Runes transactions, demonstrating massive pent-up demand
	- [Updated 2025] Cumulative trading volume exceeds $2.1 billion across centralised and [[decentralized exchanges]]
	- Average daily trading volume stabilized around $12-18 million across all Runes tokens
	- **[[Liquidity]] concentration**: Top 20 Runes account for 85% of trading volume, [[long tail]] of smaller experimental tokens

- ### Popular Runes and Market Leaders
	- **DOG•GO•TO•THE•MOON**: Market cap peak of $240 million, first Rune minted at halving block, community-driven [[memecoin]]
	- **RSIC•GENESIS•RUNE**: Early project with strong [[NFT]] community integration, used for [[airdrops]] to [[Ordinals]] holders
	- **UNCOMMON•GOODS**: Deflationary [[tokenomics]] with burn mechanisms, exploring [[DeFi]] [[primitives]]
	- **SATOSHI•NAKAMOTO**: Tribute token to Bitcoin creator, symbolic value driving [[speculation]]
	- [Updated 2025] Over 15,000 unique Runes deployed, 847 with daily trading volume exceeding $1,000
	- Market cycle correlation: Runes trading volume closely follows Bitcoin price movements, amplified [[volatility]]

- ### Ecosystem Participants
	- **[[Exchanges]]**: Major support from [[UniSat]], [[OKX]], [[Binance]] (selected Runes), providing [[liquidity]] and discoverability
	- **Wallet providers**: [[Xverse]], [[Leather]], [[UniSat Wallet]] with native Runes support, [[user experience]] improving rapidly
	- **[[Mining pools]]**: [[F2Pool]], [[AntPool]] optimising block templates for Runes transactions, capturing higher [[fee revenue]]
	- **Indexer services**: [[Ord.io]], [[GeniiData]], [[OrdinalsBot]] providing APIs and analytics for developers
	- **[[Market makers]]**: Professional trading firms providing [[liquidity]] for major Runes pairs
	- [Updated 2025] 23 [[exchanges]] supporting Runes trading, up from 7 at launch

- ## Developer Ecosystem and Tooling

- ### Core Libraries and SDKs
	- **runestone.js**: JavaScript implementation of Runes protocol, enables [[Node.js]] and browser-based applications
	- GitHub repository: https://github.com/jeasonstudio/runestone - comprehensive [[TypeScript]] library for encoding/decoding runestones
	- **rustyGlyphs**: [[Rust]] implementation combining Runes and Glyphs protocols, performance-optimised for indexer applications
	- GitHub repository: https://github.com/flossverse/rustyGlyphs - based on [[Melvin Carvalho]]'s Glyphs protocol
	- **ord library extensions**: Building on original [[Ordinals]] [[Rust]] codebase, adding Runes-specific functionality
	- **Bitcoin Core integration**: Patches and extensions for [[Bitcoin Core]] nodes to index Runes without external dependencies

- ### Wallet Infrastructure
	- **[[UniSat Wallet]]**: Leading browser extension supporting Runes trading, staking, and portfolio management
	- Marketplace integration: https://unisat.io/runes/market - first major [[decentralized]] Runes marketplace
	- **[[Xverse]]**: Mobile-first wallet with elegant Runes UI, supporting both [[iOS]] and [[Android]]
	- **[[Leather]] (formerly Hiro Wallet)**: Open-source wallet with strong developer tools and [[testnet]] support
	- **[[Sparrow Wallet]]**: Desktop wallet adding Runes support, popular among [[privacy]]-conscious users
	- [Updated 2025] 12 major wallets supporting Runes, compared to 3 at protocol launch

- ### Explorers and Analytics
	- **Testcoin Glyph Explorer**: https://testcoin.org/ - dedicated to Glyphs protocol on [[testnet]]
	- **GeniiData Runes Dashboard**: https://geniidata.com/user/Runes_is/runes-overview - comprehensive [[analytics]] and market data
	- **Ord.io**: Real-time Runes transaction explorer with advanced filtering and [[API]] access
	- **[[OrdinalsBot]]**: Combined [[Ordinals]] and Runes explorer, tracking cross-protocol interactions
	- **On-chain analytics**: Transaction volume, holder distribution, [[whale]] movements, [[tokenomics]] metrics
	- [Updated 2025] Explorer APIs processing 2.5 million Runes transactions daily

- ### Development Tools
	- **[[Testnet]] resources**: Bitcoin [[testnet]] and [[signet]] support for risk-free Runes development
	- Testnet faucets and test Runes for developer experimentation
	- **[[Regtest]] environments**: Local Bitcoin networks for rapid Runes protocol testing
	- **CI/CD integration**: GitHub Actions workflows for automated Runes contract testing
	- **[[Smart contract]] frameworks**: Emerging tools for [[Bitcoin Script]]-based Runes [[programmability]]
	- **Indexer SDKs**: Pre-built solutions for running custom Runes indexers, webhooks for real-time events

- ## Cross-Domain Integration: DeFi Ecosystem

- ### Decentralized Exchange Protocols
	- **[[UTXO]]-based [[AMM]]**: Automated Market Makers using Bitcoin's native transaction model, no [[smart contracts]] required
	- **[[Atomic swaps]]**: Trustless cross-Rune trading within single Bitcoin transaction, leveraging [[HTLC]] constructions
	- **[[Liquidity mining]]**: Incentivizing [[liquidity]] provision through Runes token rewards distributed per block
	- **[[Order book]] protocols**: Partially Signed Bitcoin Transactions ([[PSBT]]) enable decentralized limit order books
	- **[[Cross-chain bridges]]**: Federated bridges connecting Runes to [[Ethereum]], [[BSC]], [[Polygon]] [[DeFi]] ecosystems
	- [Updated 2025] [[DEX]] aggregators routing trades across 8 Runes-native [[exchanges]], optimising for price and slippage

- ### Lending and Borrowing
	- **Collateralized lending**: Lock Runes as [[collateral]], borrow Bitcoin with [[over-collateralization]] requirements
	- **[[Flash loans]]**: Single-transaction borrows using Bitcoin's [[atomic]] execution, emerging use case for [[arbitrage]]
	- **Interest rate models**: Algorithmic rates based on [[utilization]] ratios, similar to [[Compound]] or [[Aave]]
	- **[[Liquidation]] mechanisms**: Automated liquidations when collateral value drops below threshold
	- **[[Credit scoring]]**: On-chain reputation systems based on Runes transaction history
	- Risk management: [[Oracle]]-free designs using Bitcoin price as universal reference point

- ### Yield Generation
	- **[[Staking]] protocols**: Time-locked Bitcoin transactions with Runes rewards, [[consensus]]-enforced distributions
	- **[[Liquidity]] provider tokens**: Runes representing shares in [[liquidity pools]], earning trading fees
	- **[[Farming]] strategies**: Multi-layer [[yield farming]] across different Runes protocols, optimised by [[AI]] [[agents]]
	- **[[Autocompounding]]**: Protocols automatically reinvesting rewards to maximise returns
	- **[[Governance]] participation**: Runes holders vote on protocol parameters, earning [[governance]] rewards
	- [Updated 2025] Average APY for Runes [[staking]] ranges from 8-42% depending on protocol and risk profile

- ### Stablecoins and Synthetic Assets
	- **Bitcoin-backed [[stablecoins]]**: Runes representing [[USD]], [[EUR]], or other [[fiat]] currencies, collateralized by [[BTC]]
	- **[[Algorithmic]] stablecoins**: Experimental designs using [[seigniorage]] shares or [[rebase]] mechanisms
	- **[[Synthetic]] assets**: Runes tracking [[stock]] prices, [[commodities]], or other real-world assets
	- **[[Oracle]] integration**: [[Chainlink]], [[DIA]], or Bitcoin-native oracles providing price feeds
	- **[[Arbitrage]] mechanisms**: Incentivizing traders to maintain [[peg]] stability through [[profit]] opportunities
	- [Updated 2025] Two major [[stablecoin]] projects launched on Runes, total supply $14 million

- ## Technical Advantages and Innovations

- ### Blockspace Efficiency
	- **70% reduction** vs [[BRC-20]]: Average Runes transfer 200-300 bytes compared to 1,000+ bytes for [[BRC-20]]
	- [[OP_RETURN]] pruning: Nodes can discard [[OP_RETURN]] data after validation, unlike [[witness]] data in [[Ordinals]]
	- **Batch transfers**: Single transaction can move multiple Runes types, amortizing Bitcoin [[overhead]]
	- [[UTXO set]] impact: Runes don't bloat [[UTXO set]] since [[OP_RETURN]] outputs unspendable
	- [[Mempool]] efficiency: During high activity, Runes consume less [[blockspace]] per economic value transferred
	- [Updated 2025] Runes reduced average Bitcoin [[block size]] by 18% compared to [[BRC-20]] peak period

- ### Lightning Network Compatibility
	- **[[UTXO]]-native design** enables future [[Lightning Network]] integration without protocol changes
	- Potential for Runes in [[Lightning]] [[channels]]: Instant, low-fee transfers off-chain
	- **[[Multi-asset]] channels**: Single [[Lightning]] channel carrying Bitcoin and multiple Runes simultaneously
	- [[Atomic]] multi-path payments: Route Runes through [[Lightning Network]]'s existing infrastructure
	- [[Liquidity]] implications: Runes [[liquidity]] could bootstrap new [[Lightning]] channels, improving network topology
	- Research ongoing: [[Lightning Labs]], [[Blockstream]] exploring Runes [[Layer 2]] implementations

- ### Security Model
	- **Bitcoin's [[proof-of-work]]**: Runes inherit Bitcoin's [[hashrate]] security, most secure [[blockchain]] globally
	- [[Double-spend]] resistance: Same [[confirmation]] requirements as Bitcoin transactions
	- **No [[smart contract]] risk**: Unlike [[Ethereum]] [[DeFi]], no complex [[contract]] vulnerabilities or [[reentrancy]] attacks
	- [[Indexer]] decentralization: Multiple independent indexers prevent single points of failure
	- **[[Consensus]] rules**: Protocol enforced by all participants, no centralised gatekeepers
	- [Updated 2025] Zero protocol-level exploits since launch, all losses from wallet [[phishing]] or user error

- ### Privacy Considerations
	- **On-chain transparency**: All Runes transfers visible on Bitcoin [[blockchain]], similar to [[BTC]] transactions
	- [[CoinJoin]] compatibility: Runes can participate in [[CoinJoin]] transactions, breaking [[deterministic]] links
	- **[[Address]] reuse**: Same privacy best practices apply - avoid reusing addresses for Runes transfers
	- [[Taproot]] integration: Future versions could leverage [[Taproot]]'s privacy features for enhanced confidentiality
	- **[[Amount]] privacy**: Unlike [[Confidential Transactions]], Runes amounts fully visible, trade-off for simplicity
	- Analysis resistance: [[Clustering]] algorithms and [[heuristics]] from Bitcoin [[privacy]] research applicable to Runes

- ## Challenges and Limitations

- ### Scalability Constraints
	- **Bitcoin [[block size]]**: 4 MB [[weight]] limit constrains maximum Runes throughput
	- [[Block time]]: 10-minute average means slower confirmation than [[Ethereum]] or [[Solana]]
	- **[[Fee market]] dynamics**: High Bitcoin [[mempool]] demand increases Runes transaction costs
	- [[Lightning]] dependency: Achieving high-frequency trading requires [[Layer 2]] solutions still in development
	- **[[Indexer]] sync time**: New users wait for full [[blockchain]] sync or trust external indexer services
	- Comparison: [[Ethereum]] processes 15-30 TPS, Bitcoin with Runes realistically 5-10 token transfers per second

- ### User Experience Hurdles
	- **Wallet fragmentation**: Not all Bitcoin wallets support Runes, users need specialized tools
	- [[Transaction fee]] estimation: Complex fee markets make predicting costs difficult for non-technical users
	- **[[UTXO]] management**: Users must understand [[coin selection]] and [[UTXO]] consolidation for optimal fees
	- [[Metadata]] limitations: [[OP_RETURN]]'s 80-byte limit restricts rich token descriptions
	- **Recovery complexity**: Seed phrases must support Bitcoin and Runes, recovery paths more complex
	- [Updated 2025] Wallet UX improving with abstracting [[UTXO]] complexity from end users

- ### Regulatory Uncertainty
	- **Securities classification**: Unclear whether Runes tokens qualify as [[securities]] under existing regulations
	- [[Tax]] treatment: Ambiguity around [[capital gains]], [[income tax]] for Runes [[mining]] or [[staking]]
	- **[[KYC]]/[[AML]]**: Centralized [[exchanges]] implementing compliance may restrict certain Runes
	- Geographic restrictions: Some jurisdictions may ban or restrict Runes trading
	- **[[Smart contract]] regulation**: Emerging [[DeFi]] regulations may impact Runes-based protocols
	- [Updated 2025] SEC has not issued specific guidance on Runes, creating compliance uncertainty

- ## Future Outlook and Development Roadmap

- ### Protocol Enhancements
	- **[[Taproot]] integration**: Future versions could use [[Taproot]] [[script trees]] for enhanced privacy
	- [[Covenant]] support: If Bitcoin adopts [[OP_CTV]] or similar [[opcodes]], enables advanced Runes [[smart contracts]]
	- **[[Lightning]] protocol**: Standardized Runes-in-[[Lightning]] specification under discussion
	- [[Atomic]] [[multi-token]] swaps: Protocol-level support for complex [[DeFi]] operations
	- **Improved indexing**: Standardized indexer protocols reducing centralization risks
	- [Updated 2025] Runes v2 specification in draught phase, targeting Q3 2025 release

- ### Ecosystem Growth Projections
	- **Institutional adoption**: Traditional finance exploring Runes for [[tokenized]] [[securities]]
	- [[Central bank]] interest: Potential Runes-based [[CBDC]] experiments on Bitcoin
	- **Gaming explosion**: Major [[blockchain gaming]] platforms integrating Runes for [[in-game economies]]
	- [[Enterprise]] use cases: Supply chain tracking, [[loyalty]] programmes using Runes tokens
	- **[[Interoperability]]**: Bridges to [[Cosmos]], [[Polkadot]], expanding Runes reach
	- Market prediction: Analysts project Runes [[market cap]] could reach $5-10 billion by 2027

- ### Research Frontiers
	- **[[Zero-knowledge proofs]]**: [[ZK-SNARKs]] on Bitcoin enabling private Runes transfers
	- [[Sidechains]] with Runes support: [[Federated]] or [[merged-mined]] sidechains for experimentation
	- **[[Quantum resistance]]**: Post-quantum [[cryptography]] for long-term Runes security
	- [[Cross-chain]] [[atomic swaps]]: Trustless Runes-to-[[Ethereum]] [[ERC-20]] exchanges
	- **[[AI]]-optimised tokenomics**: Machine learning designing optimal Runes economic models
	- [Updated 2025] 14 academic papers published on Runes protocol, covering [[security]], [[economics]], [[scalability]]

- ## Resources and Community

- ### Official Documentation and GitHub Repositories
	- ![the-future-of-bitcoin-2-tokens.pdf](../assets/the-future-of-bitcoin-2-tokens_1723564035683_0.pdf)
	- [Note by Melvin Carvalho (primal.net)](https://primal.net/e/note1rneeteg526e9e9zqrst35c93y46xlayzn77augvfhcsutq0d39qscga4xa) - [[Melvin Carvalho]]'s original Glyphs proposal on [[Nostr]] [[Runes and Glyphs]]
		- ![5882083039473943016.jpg](../assets/5882083039473943016_1723118472953_0.jpg)
		- [Note by Melvin Carvalho (primal.net)](https://primal.net/e/note1we622z6jpdl8xpuw2vy966ud8fgf0t40n009qxw3de4edc7gs55qrqldzp) - Additional Glyphs discussion [[Digital Objects]] [[Runes and Glyphs]] [[Testnet]]
	- [Testnet Glyph Explorer (testcoin.org)](https://testcoin.org/) - Testnet explorer for experimenting with Glyphs protocol
	- [Art (npub.info)](https://pages.npub.info/glyphs/TESTNETARTAAA/) - Example Glyphs art implementation on testnet
	- [flossverse/rustyGlyphs: based on Melvin Carvalho glyphs and Runes protocols (github.com)](https://github.com/flossverse/rustyGlyphs) - [[Rust]] implementation combining both protocols
	- [jeasonstudio/runestone: 👁‍🗨 Ordinals runestone javascript implementation (github.com)](https://github.com/jeasonstudio/runestone) - JavaScript/TypeScript library for Runes protocol [[Runes and Glyphs]]
	- [Testcoin Glyph Explorer](https://testcoin.org/glyphs.html#) - Main Glyphs testnet explorer [[Melvin Carvalho]] [[Testnet]] [[Runes and Glyphs]]
	- [glyph-protocol/glyphs: glyph protocol (github.com)](https://github.com/glyph-protocol/glyphs) - Official Glyphs protocol repository [[Runes and Glyphs]]
	- [Runes Overview | Blockchain Analytics Dashboard (geniidata.com)](https://geniidata.com/user/Runes_is/runes-overview) - Comprehensive market analytics and statistics [[Runes and Glyphs]]

- ### Marketplaces and Trading Platforms
	- [UniSat Runes Market](https://unisat.io/runes/market?tick=WORK%E2%80%A2IN%E2%80%A2PROGRESS) - Leading [[decentralized marketplace]] for Runes trading
	- **WORK•IN•PROGRESS**: Example Rune token listed on [[UniSat]] [[exchange]]
	- [[OKX]] Runes trading: Centralized exchange support with deep [[liquidity]]
	- [[Magic Eden]]: [[NFT]] marketplace expanding to Runes token support

- ### Community and DAO Governance
	- **Every project, every bot, can be a DAO**: Philosophy enabling [[decentralized]] [[governance]] for all Runes projects
	- [[Discord]] communities: Thousands of developers and traders coordinating Runes development
	- **[[Twitter]]/[[X]]**: Primary social network for Runes announcements, trading discussions
	- [[Reddit]]: r/BitcoinRunes and related subreddits for community support
	- **[[Telegram]]**: Real-time trading groups and developer channels
	- [Updated 2025] Runes [[DAO]] framework enabling [[on-chain governance]] for 127 projects

- ## Related Concepts and Cross-References
	- [[Bitcoin]] - [[Blockchain]] - [[UTXO]] - [[OP_RETURN]] - [[Ordinals]] - [[BRC-20]] - [[Taproot]] - [[RGB Protocol]]
	- [[Fungible Token]] - [[NFT]] - [[Digital Asset]] - [[Smart Contract]] - [[Layer 1]] - [[Layer 2]] - [[Lightning Network]]
	- [[Consensus]] - [[Proof of Work]] - [[Mining]] - [[Block Height]] - [[Halving]] - [[Mempool]] - [[Transaction Fees]]
	- [[Decentralized Exchange]] - [[AMM]] - [[Liquidity Pool]] - [[Atomic Swap]] - [[DeFi]] - [[Yield Farming]] - [[Staking]]
	- [[Wallet]] - [[Private Key]] - [[Public Key]] - [[Address]] - [[PSBT]] - [[CoinJoin]] - [[Privacy]]
	- [[ERC-20]] - [[Ethereum]] - [[Solidity]] - [[Stablecoin]] - [[Tokenomics]] - [[Market Cap]] - [[Trading Volume]]
	- [[Indexer]] - [[Node]] - [[API]] - [[SDK]] - [[Testnet]] - [[Mainnet]] - [[Regtest]]
	- [[Casey Rodarmor]] - [[Melvin Carvalho]] - [[Lightning Labs]] - [[Blockstream]]
	- [[Generative AI]] - [[Machine Learning]] - [[AI Agent]] - [[Robotics]] - [[IoT]] - [[Decentralized Identity]]
	- [[Securities]] - [[Regulation]] - [[KYC]] - [[AML]] - [[Compliance]] - [[Tax]] - [[CBDC]]

### Relationships
- is-subclass-of:: [[Blockchain]]
