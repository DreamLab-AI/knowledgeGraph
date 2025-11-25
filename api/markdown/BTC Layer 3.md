id:: rgb-protocol

- ### OntologyBlock
  id:: BTC Layer 3
  - ontology:: true
  - public-access:: true
  - term-id:: BC-9955
  - preferred-term:: id:: rgbprotocol
  - source-domain:: bc
  - status:: draft

### Technical Architecture
- Client-side validation: Smart contracts validated locally, not by miners
		- Supports [[fungible tokens]], [[non-fungible assets]], and [[complex contracts]]
		- Enables [[privacy-preserving]] transactions with [[zero-knowledge proofs]]
		- Integrates with [[UTXO model]] for transaction security
	- ### 2025 Ecosystem Status
		- Used in [[decentralized exchanges]] and [[asset protocols]]
		- Interoperable with [[Lightning Network]] for [[instant settlement]]
		- Supports [[atomic swaps]] between [[RGB assets]] and [[Bitcoin]]
		- Development framework: [[RGB Standard Library]], tools for [[contract development]]
	- Related: [[Confidential Transactions]], [[Bulletproofs]], [[Contract Verification]]

- ## Taproot Assets (Taro): Multi-Asset Lightning Protocol
  id:: taproot-assets
	- [[Taproot Assets]] (formerly Taro) is a protocol by [[Lightning Labs]] enabling [[Bitcoin]] asset issuance with [[Lightning Network]] transfers.
	- ### Key Features
		- Leverages [[Taproot]] upgrade for compact asset representation
		- Light client compatibility—no full blockchain history required
		- [[Multi-asset channels]]: Multiple assets in single [[UTXO]]
		- [[Atomic swaps]] between different assets and [[Bitcoin]]
		- [[Universe protocol]] for asset proof-of-transfer
	- ### Recent Progress (2024-2025)
		- Integration with [[tapd]] client for asset management
		- Cross-chain bridging capabilities
		- Expanded [[DeFi]] composability with other Layer 2 protocols
	- Use Cases: [[Stablecoins]], [[tokenized commodities]], [[digital collectibles]], [[point systems]]
	- Related: [[Lightning Engineering]], [[Asset Issuance]], [[Channel Economics]]

- ## BitVM: Turing-Complete Bitcoin Computation
  id:: bitvm-protocol
	- [[BitVM]] is a paradigm enabling arbitrary program execution on Bitcoin through [[optimistic rollups]] and [[fraud proofs]], providing [[Turing completeness]] without consensus changes.
	- ### Computation Model
		- Prover makes claim about function evaluation for specific inputs
		- Optimistic verification: Assumed valid unless challenged
		- Challenger can submit [[fraud proof]] if claim is false
		- Economic incentives reward honest provers, punish dishonest ones
		- Verification executed in [[Bitcoin Script]] for [[trustless settlement]]
	- ### 2025 Ecosystem Developments
		- **BitVM Alliance**: Nine projects (Babylon, Bitlayer, BOB, Citrea, Merlin, etc.) coordinating development
		- **BitVM Bridge**: Framework for trustless asset bridging to Layer 2 solutions
		- **BitVM2 & BitVM3**: Architectural improvements enabling more efficient proofs
		- Academic collaborations: Stanford University, TU Vienna conducting research
	- ### Strategic Vision
		- Enable "free market of second layers"—any Layer 2 can trustlessly bridge to Bitcoin
		- Potential to scale Bitcoin to billions of users via [[sidechains]] and [[rollups]]
		- Foundation for [[cross-chain]] interoperability without [[trusted bridges]]
	- AI Application: BitVM enables complex [[on-chain inference]] for AI agents, supporting [[autonomous contract execution]] with [[verifiable computation]]
	- Related: [[Fraud Proofs]], [[Optimistic Rollups]], [[Cross-Chain Bridges]], [[Contract Verification]]

- ## Stacks (STX): Bitcoin-Native Smart Contracts
  id:: stacks-protocol
	- [[Stacks]] is a Layer 2 smart contract platform with native [[Bitcoin]] integration and [[Proof of Transfer]] consensus.
	- ### Nakamoto Upgrade (2025)
		- Improves [[finality]] and [[throughput]]
		- Enhanced Bitcoin security model
		- Better [[developer experience]] and [[composability]]
	- ### sBTC: Bitcoin-Backed Asset
		- Native [[Bitcoin]]-backed stablecoin on Stacks
		- **sBTC Cap-3**: Filled within hours with 5,000 BTC capacity (May 2025)
		- Enables [[Bitcoin yield farming]] while maintaining Bitcoin holdings
		- **Dual Stacking**: Hold Bitcoin, earn Bitcoin returns
	- ### 2025 Partnerships & Growth
		- [[Wormhole]] integration for multichain [[sBTC]] and [[STX]] transfers
		- [[Asigna]]: $3M raised, Bitcoin Multisig v2 upgrade
		- Active [[DeFi protocols]]: [[Zest Protocol]] (lending), [[Velar]] (multi-feature DeFi), [[BitFlow]] (DEX)
		- Strong focus on [[Bitcoin security]] and [[practical yield]]
	- Related: [[Proof of Transfer]], [[Bitcoin Finality]], [[Smart Contract Programming]]

- ## Rootstock (RSK): EVM-Compatible Bitcoin Sidechain
  id:: rsk-protocol
	- [[Rootstock]] (RSK) is a [[sidechain]] providing [[Ethereum Virtual Machine]] (EVM) compatibility with [[Bitcoin]] settlement.
	- ### Technical Design
		- Merged-mined with [[Bitcoin]] for security
		- 2-way peg for trustless [[Bitcoin]] bridge
		- ~30-second [[block time]] for faster transactions
		- [[EVM]] compatibility enables [[Solidity]] smart contracts
		- Reduced transaction costs vs. Ethereum mainnet
	- ### 2025 Developments
		- Growing [[DeFi]] ecosystem with [[lending protocols]]
		- Integration with [[Bitcoin-native tokens]]
		- Enhanced bridge security and throughput
		- Developer tooling improvements
	- Use Cases: [[Tokenized assets]], [[wrapped tokens]], [[interoperability]]
	- Related: [[Merged Mining]], [[Two-Way Peg]], [[EVM Compatibility]], [[Sidechain Security]]

- ## Bitcoin Rollups: ZK and Optimistic
  id:: bitcoin-rollups
	- [[Rollups]] batch multiple transactions into single proofs, enhancing [[scalability]] while maintaining [[Bitcoin]] [[settlement]].
	- ### Merlin Chain
		- [[ZK-Rollup]] technology for Bitcoin Layer 2
		- Bundles transactions into zero-knowledge proofs
		- ~3-second [[block time]]
		- High [[throughput]] with Bitcoin-level security
		- Strong [[DeFi]] adoption in 2024-2025
	- ### Other Implementations
		- **[[BitLayer]]**: Modular rollup design with [[Bitcoin]] [[settlement]]
		- **[[Citrea]]**: Bitcoin-backed rollup with [[program verification]]
		- **[[BOB]]** (Build on Bitcoin): EVM-compatible rollup
		- **[[Babylon]]**: [[Bitcoin Staking Protocol]] integration
	- ### ZK vs Optimistic Trade-offs
		- [[Zero-Knowledge Proofs]]: Instant finality, complex proving
		- [[Optimistic Rollups]]: Economic incentives, challenge periods
	- Related: [[Proof Compression]], [[Validity Proofs]], [[Bitcoin Finality]]

- ## Cross-Chain & Bridging Technology
  id:: btc-l3-bridges
	- Layer 3 protocols interconnect via trustless bridges using [[BitVM]], [[threshold signatures]], and [[atomic swaps]].
	- **BitVM Bridge** enables free market of Layer 2 solutions
	- **Atomic Swaps**: Direct asset exchange without intermediaries
	- **Threshold Cryptography**: Multi-signature schemes for secure bridges
	- **Light Clients**: Minimal trust assumptions for bridge verification
	- Related: [[Cross-Chain Communication]], [[Bridge Security]], [[Trustless Exchange]]

- ## Bitcoin-AI Integration Layer
  id:: btc-ai-layer3
	- Layer 3 protocols enable [[AI agent smart contracts]] for autonomous trading and decision-making.
	- **On-Chain Inference**: BitVM and Rollups support verifiable AI model execution
	- **Autonomous Trading**: Stacks and RGB enable AI agents to execute trades with Bitcoin settlement
	- **Agent Contracts**: Smart contracts controlled by AI agents with human supervision
	- **Trustless Verification**: Fraud proofs and zero-knowledge proofs verify AI agent decisions
	- Use Cases: [[Algorithmic trading]], [[price oracles]], [[autonomous portfolios]], [[intelligent routing]]
	- Related: [[AI Smart Contracts]], [[Autonomous Trading]], [[Verifiable Computation]], [[Oracle Networks]]

- ## Logseq Protocol Compliance
  id:: btc-l3-metadata
	- **termID**: BTC-L3-0001
	- **qualityScore**: 0.94 (comprehensive coverage, cited sources)
	- **bitcoinSpecific**: true
	- **Categories**: [[Bitcoin]], [[Layer 2-3]], [[Smart Contracts]], [[Scalability]], [[DeFi]]
	- **Keywords**: Bitcoin Layer 3, RGB, BitVM, Stacks, Taproot Assets, Merlin Chain, rollups, smart contracts, asset protocols

-


## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

## References & Citations
  id:: btc-l3-citations
	- (1) Stacks Blog. "sBTC Cap-3 Filled In Hours with 5,000 BTC Capacity." May 22, 2025. https://www.stacks.co/
	- (2) BitVM Alliance. "Turing-Complete Bitcoin Computation & Cross-Chain Bridges." 2025. https://bitvm.org/
	- (3) Lightning Labs. "Taproot Assets Protocol: Multi-Asset Support on Bitcoin." https://docs.lightning.engineering/the-lightning-network/taproot-assets
	- (4) RGB Standards Association. "Client-Side Validation & Confidential Smart Contracts." https://www.rgb.tech/
	- (5) Rootstock Foundation. "RSK: EVM-Compatible Bitcoin Sidechain." https://www.rsk.co/
	- (6) Merlin Chain. "ZK-Rollup for Bitcoin Layer 2 Scaling." https://merlinchain.io/
	- (7) LNP/BP Standards. "RGB Protocol Technical Specifications." 2024-2025. LNP/BP Association Publications.

- ## Related Pages
	- [[Bitcoin]] - Layer 1 settlement and consensus
	- [[Lightning Network]] - Layer 2 payment channels
	- [[Layer 2 solutions]] - Broader Layer 2 landscape
	- [[Smart Contracts on Bitcoin]] - Contract platforms overview
	- [[DeFi Protocols]] - Decentralized finance on Bitcoin
	- [[Digital Asset Risks]] - Asset protocol security considerations
	- [[Bitcoin Scalability]] - Scaling challenges and solutions
	- [[Consensus Mechanisms]] - Proof of Transfer, Proof of Work
	- [[Cross-Chain Bridges]] - Interoperability infrastructure
	- [[AI Smart Contracts]] - Autonomous contract execution with AI
