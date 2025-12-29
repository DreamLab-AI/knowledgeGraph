- ### OntologyBlock
  id:: relayer-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: bc
	- term-id:: BC-8015
	- preferred-term:: Relayer
	- definition:: Infrastructure operator that facilitates cross-chain message passing by monitoring source chains for events, generating cryptographic proofs of state, and submitting verified transactions to destination chains. Relayers provide non-custodial connectivity for interoperability protocols like IBC, LayerZero, and Chainlink CCIP without holding user assets.
	- status:: active
	- maturity:: reviewed
	- public-access:: true
	- belongsToDomain:: [[Blockchain]]
	- owl:class:: bc:Relayer

---
id: BC-1010
title: Relayer
type: ConceptNode
domain: Blockchain
created: 2025-11-24
status: active
---

# Relayer

## Definition
- Infrastructure operator facilitating cross-chain message passing and state verification between blockchains
- Monitors source chain for events and submits cryptographic proofs to destination chain
- Provides connectivity layer for interoperability protocols without custodying user assets

## Core Components
- **Event Listener**: Monitors source chain for cross-chain messages
- **Proof Generator**: Creates cryptographic proof of source chain state
- **Transaction Submitter**: Broadcasts proof transactions to destination chain
- **State Oracle**: Provides verified state information across chains

## Technical Characteristics
- **Non-Custodial**: Does not hold user funds
- **Incentive-Compatible**: Economically motivated to relay accurately
- **Permissionless**: Anyone can operate relayer in most protocols
- **Redundant**: Multiple relayers ensure liveness and censorship resistance

## Relayer Types
### Message Relayers
- Transmit cross-chain messages and events
- Execute instructions on destination chain
- Used in general message passing protocols

### State Relayers
- Relay block headers and state proofs
- Enable light client verification
- Used in trustless bridge protocols

### Transaction Relayers
- Submit transactions on behalf of users
- Enable gasless transactions (meta-transactions)
- Used in user experience improvements

## Protocol Examples
- **IBC Relayers**: Cosmos Inter-Blockchain Communication
- **Chainlink CCIP**: Cross-Chain Interoperability Protocol relayers
- **LayerZero Relayers**: Omnichain messaging relayers
- **Polkadot Relayers**: Parachain message relayers

## Relationships
- enables:: [[Cross-Chain Bridge]]
- component-of:: [[Interoperability Protocol]]
- uses:: [[Light Client]]
- coordinates-with:: [[Oracle]]
- implements:: [[Message Passing]]

## Economic Model
- **Fee-Based**: User pays fee for relaying service
- **Gas Reimbursement**: Relayer reimbursed for destination chain gas
- **Subsidy Model**: Protocol subsidizes relayer operations
- **Staking/Slashing**: Economic security through bonded stake

## Security Considerations
- Relayer liveness dependency
- Censorship by colluding relayers
- DoS attacks on relayer infrastructure
- Relayer signature key management
- MEV extraction by relayers

## Operational Requirements
- Full node access to source and destination chains
- High availability and low latency infrastructure
- Sufficient capital for gas fees
- Monitoring and alerting systems
- Key management and operational security

## Trust Assumptions
- **Optimistic Relayers**: Assume honest with fraud proofs
- **Verified Relayers**: Cryptographic proof validation
- **Threshold Relayers**: Require m-of-n relayer agreement
- **Bonded Relayers**: Economic stake slashed for misbehavior

## Performance Metrics
- Message relay latency
- Uptime and availability
- Cost per message relayed
- Number of supported chains
- Throughput (messages per second)

## Decentralization Strategies
- Open relayer networks
- Incentive mechanisms for diverse operators
- Slashing for malicious behavior
- Reputation systems
- Geographic and entity diversity

## Use Cases
- Cross-chain token transfers
- Cross-chain smart contract calls
- Interchain account management
- Cross-chain liquidations
- Multi-chain application synchronization

## Challenges
- Capital requirements for gas fees
- Operational complexity across multiple chains
- Handling chain reorganizations
- Optimizing for cost vs latency
- Managing relayer profitability

## Related Concepts
- [[Cross-Chain Bridge]]
- [[Light Client]]
- [[Oracle]]
- [[Interoperability]]

#blockchain #relayer #interoperability #cross-chain

### Relationships
- is-subclass-of:: [[Blockchain]]
