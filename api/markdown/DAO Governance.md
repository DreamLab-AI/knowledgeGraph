- ### OntologyBlock
  id:: dao-governance-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: NGM-7016
	- preferred-term:: DAO Governance
	- source-domain:: ngm
	- status:: active
	- public-access:: true
	- definition:: DAO governance refers to the decision-making structures and voting mechanisms within Decentralised Autonomous Organisations, enabling token holders to collectively govern protocol parameters, treasury allocations, and organisational direction through on-chain and off-chain processes. DAOs are non-hierarchical organisations that perform and record routine tasks on peer-to-peer, cryptographically secure networks, with governance rules encoded as smart contracts that automatically execute approved decisions.
	- maturity:: reviewed
	- owl:class:: ngm:DaoGovernance
	- owl:role:: Concept
	- belongsToDomain:: [[Blockchain]]

### Relationships
	- relatedTo:: [[Platform Governance]]
	- relatedTo:: [[Smart Contracts]]
	- relatedTo:: [[Token Economy]]
	- implementedBy:: [[Voting Mechanisms]]
	- enables:: [[Decentralised Decision-Making]]
	- subclassOf:: [[Decentralised Governance]]

## Overview

Decentralised Autonomous Organisations (DAOs) represent an extreme example of decentralised governance, fundamentally altering how organisations are created, managed, and operated. As of 2025, over 13,000 DAOs manage $24.5 billion in combined treasuries with 11.1 million governance token holders collectively making decisions about protocol upgrades, grant funding, and partnerships.

## Voting Mechanisms

### Token-Based Voting
- Most common mechanism where one token equals one vote
- Creates plutocratic systems where large holders wield significant influence
- Simple to implement but susceptible to wealth concentration

### Quadratic Voting
- Cost of votes increases quadratically: buying N votes costs N squared tokens
- Reduces whale influence whilst empowering smaller community members
- Encourages broader participation in governance decisions

### Conviction Voting
- Vote weight increases the longer a vote remains unchanged
- Changing votes is possible but sacrifices accumulated weight
- Eliminates last-minute vote manipulation
- Encourages long-term thinking over short-term speculation

### Delegated Voting
- Token holders transfer voting rights to delegates who vote on their behalf
- Form of liquid democracy blending direct and representative democracy
- Delegation can be revoked or reassigned at any time
- Addresses voter apathy whilst maintaining decentralisation principles

### Holographic Consensus
- Designed to screen and focus attention on proposals most likely to pass
- Members predict whether proposals will pass or fail using tokens
- Solves governance scalability-resilience problem in decentralised organisations
- Prioritises high-value proposals whilst filtering low-priority items

## Governance Challenges

### Whale Influence
- Large token holders can dominate governance outcomes
- Concentrated ownership creates unique agency problems
- Interests of whales may diverge from smaller token holders (users)
- Results in governance vulnerabilities and potential cartel formation

### Centralisation Concerns
- DAOs are neither perfectly decentralised nor completely autonomous in practice
- Off-chain governance solutions still require trusted parties
- Non-algorithmic off-chain voting leads to substantial discount in DAO value
- Critical decisions often rely on centralised bodies despite decentralisation aspirations

### Participation Rates
- Voter apathy affects all DAO governance systems
- Token holders often prefer passive holding over active participation
- Solutions include delegation, reduced quorum requirements, and participation incentives

## Emerging Innovations

### Reputation-Based Governance
- Voting power earned through contribution rather than token purchase
- Contributors gain influence by completing bounties and demonstrating expertise
- Meritocratic approach rewards value creation
- Requires complex tracking systems for reputation management

### Weighted Delegation Constraints
- Limits on how much voting power can be delegated to single delegates
- Prevents concentration of delegated power
- Maintains distributed decision-making even with delegation

### Soulbound Tokens
- Non-transferable tokens representing credentials or achievements
- Provides governance rights based on participation rather than wealth
- Addresses plutocracy concerns in token-based systems

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Comprehensive review completed
- **References**: 7 pages reference this concept
