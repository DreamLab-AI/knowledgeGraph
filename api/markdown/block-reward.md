- ### Definition
  A Block Reward is the cryptoeconomic incentive paid to the producer of a valid block—comprising a protocol-specified subsidy (newly minted tokens) plus the aggregate transaction fees included in that block—which compensates validators or miners for expending resources to extend the canonical chain and maintain network security. Block reward schedules are a core parameter of a blockchain's monetary policy, directly governing token inflation, miner revenue, and the long-run security budget of the network.

- ### Semantic Classification
  - owl-class:: blockchain:BlockReward
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]
  - hasPart:: [[Transaction Fee]], [[Mining Reward]]
  - requires:: [[Consensus Mechanism]], [[Proof Of Work]]
  - enables:: [[Mining]], [[Blockchain Economics]], [[Tokenomics]]
  - supports:: [[Blockchain Governance]]
  - relatedTo:: [[Cryptocurrency]], [[Blockchain Transaction]], [[Proof of Stake]], [[Validator Node]]

- ### Content

  ## Class Declaration
  Declaration(Class(:BlockReward))

  ## Subclass Relationships
  SubClassOf(:BlockReward :DistributedDataStructure)
  SubClassOf(:BlockReward :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:BlockReward
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:BlockReward
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :BlockReward "BC-0012"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :BlockReward "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :BlockReward "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :BlockReward :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :BlockReward :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :BlockReward "Block Reward"@en)
  AnnotationAssertion(rdfs:comment :BlockReward
    "Incentive for block creation"@en)
  AnnotationAssertion(dct:description :BlockReward
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :BlockReward "BC-0012")
  AnnotationAssertion(:priority :BlockReward "1"^^xsd:integer)
  AnnotationAssertion(:category :BlockReward "blockchain-fundamentals"@en)
  )
      ```

  - ## About Block Reward

  The block reward mechanism is Bitcoin's foundational innovation for bootstrapping decentralised network security without a pre-existing authority. Satoshi Nakamoto's original design mints new coins and awards them to the miner who solves the proof-of-work puzzle first. This dual function—new money issuance and security incentive—is elegant: miners are paid to protect the very chain that denomates their reward in value, creating a self-reinforcing security budget proportional to the market capitalisation of the native token.

  Bitcoin's block subsidy halves approximately every four years (every 210,000 blocks): from 50 BTC at genesis, to 25, 12.5, 6.25, 3.125, and so on. This programmatic halving schedule encodes a disinflationary monetary policy with a hard cap of 21 million BTC. As the subsidy trends toward zero over the coming decades, Bitcoin's security budget will increasingly depend on transaction fees—a regime transition whose consequences for long-run network security are an active area of economic research. Ethereum's transition to proof-of-stake in 2022 (The Merge) replaced miner block rewards with validator attestation rewards and proposer rewards, reducing annual issuance by approximately 90% while maintaining network security through staked collateral rather than compute expenditure.

  In proof-of-stake systems, block rewards accrue to the validator selected as the block proposer in a given slot, with additional smaller rewards distributed to attesters who vote for the correct chain head. The reward rate is typically a function of the total amount of staked capital: as more validators stake, the reward per validator decreases (preventing runaway inflation), while the aggregate security budget increases. EIP-1559 (Ethereum) further restructured the fee component by burning the base fee and allowing validators to capture only the priority fee (tip), turning the fee market from a pure revenue stream into a partial ETH deflationary mechanism.

  <!-- Merged from BC-0055-block-reward.md: ConsensusDomain, ConsensusProtocol, ProtocolLayer -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z