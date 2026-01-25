- ### OntologyBlock
  id:: smart-contracts-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: BC-7013
	- preferred-term:: Smart Contracts
	- source-domain:: bc
	- status:: active
	- public-access:: true
	- definition:: Self-executing programs stored on a blockchain that automatically enforce and execute the terms of an agreement when predetermined conditions are met, eliminating the need for intermediaries and enabling trustless, transparent, and immutable transaction automation. Smart contracts encode business logic in deterministic code that runs identically across all network nodes, ensuring consensus on execution outcomes.
	- maturity:: reviewed
	- owl:class:: bc:SmartContracts
	- owl:role:: Process
	- belongsToDomain:: [[Blockchain]]
	- belongsToDomain:: [[Decentralized Finance]]
	- belongsToDomain:: [[Distributed Systems]]

## Core Components
- **Contract Code**: Deterministic program logic written in Solidity, Vyper, Rust, or Move
- **State Variables**: Persistent data stored on-chain representing contract state
- **Functions**: Callable methods that read/modify state or perform computations
- **Events**: Logging mechanisms for off-chain indexing and monitoring
- **Modifiers**: Access control and validation patterns

## Execution Model
- **Deterministic Execution**: Same inputs always produce identical outputs across all nodes
- **Gas Mechanism**: Computational resource metering preventing infinite loops (Ethereum)
- **Atomic Transactions**: All-or-nothing execution ensuring consistency
- **Immutability**: Deployed code cannot be modified (upgradeable patterns exist via proxies)

## Programming Languages
| Language | Platform | Features |
|----------|----------|----------|
| Solidity | Ethereum, EVM chains | Object-oriented, most widely adopted |
| Vyper | Ethereum | Python-like, security-focused, simpler |
| Rust | Solana, Near, Polkadot | Systems language, high performance |
| Move | Aptos, Sui | Resource-oriented, formal verification |
| Cairo | StarkNet | ZK-proof friendly, STARK-based |

## DeFi Applications
- **Decentralized Exchanges (DEXs)**: Automated market makers (Uniswap, SushiSwap)
- **Lending Protocols**: Collateralized borrowing (Aave, Compound)
- **Yield Farming**: Liquidity provision rewards (Yearn, Convex)
- **Stablecoins**: Algorithmic and collateralized pegs (DAI, FRAX)
- **Derivatives**: Options, futures, perpetuals (dYdX, GMX)

## Other Use Cases
- **NFTs**: Digital asset ownership and provenance
- **DAOs**: Decentralized governance and treasury management
- **Supply Chain**: Automated tracking and payment release
- **Insurance**: Parametric policies with automatic claims
- **Gaming**: In-game assets and play-to-earn mechanics

## Security Considerations
- **Reentrancy Attacks**: External call vulnerabilities (DAO hack)
- **Integer Overflow/Underflow**: Arithmetic boundary conditions
- **Front-Running**: Transaction ordering exploitation
- **Oracle Manipulation**: External data feed attacks
- **Access Control**: Proper permission management

## Audit & Verification
- Formal verification tools (Certora, Halmos)
- Static analysis (Slither, Mythril)
- Professional audits (Trail of Bits, OpenZeppelin)
- Bug bounty programs (Immunefi)

## Market Scale (2025)
- Over $100 billion total value locked (TVL) in DeFi smart contracts
- Ethereum dominates with 60%+ TVL share
- 500,000+ unique smart contracts deployed monthly
- Growing enterprise adoption in supply chain and finance

## Relationships
- is-subclass-of:: [[Blockchain]]
- is-subclass-of:: [[Distributed Computing]]
- related-to:: [[Decentralized Finance]]
- related-to:: [[Ethereum]]
- uses:: [[Cryptographic Hash Function]]
- uses:: [[Digital Signature]]
- enables:: [[Decentralized Application]]
- enables:: [[Tokenization]]
- enables:: [[Automated Market Maker]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from research
- **References**: 8 pages reference this concept
