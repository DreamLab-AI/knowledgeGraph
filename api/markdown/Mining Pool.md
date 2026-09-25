A cooperative arrangement in which multiple miners aggregate their computational resources to increase the probability of successfully mining a block, sharing the resulting block reward proportionally to contributed hash rate. Mining pools reduce variance in miner income but introduce centralisation risks and hash-rate concentration that can threaten network security.

### Semantic Classification

### Content

## Class Declaration
Declaration(Class(:MiningPool))

## Subclass Relationships
SubClassOf(:MiningPool :ConsensusProtocol)
SubClassOf(:MiningPool :BlockchainEntity)

## Essential Properties
SubClassOf(:MiningPool
  (ObjectSomeValuesFrom :partOf :Blockchain))

SubClassOf(:MiningPool
  (ObjectSomeValuesFrom :hasProperty :Property))

## Data Properties
DataPropertyAssertion(:hasIdentifier :MiningPool "BC-0064"^^xsd:string)
DataPropertyAssertion(:hasAuthorityScore :MiningPool "1.0"^^xsd:decimal)
DataPropertyAssertion(:isFoundational :MiningPool "true"^^xsd:boolean)

## Object Properties
ObjectPropertyAssertion(:enablesFeature :MiningPool :BlockchainFeature)
ObjectPropertyAssertion(:relatesTo :MiningPool :RelatedConcept)

## Annotations
AnnotationAssertion(rdfs:label :MiningPool "Mining Pool"@en)
AnnotationAssertion(rdfs:comment :MiningPool
  "Collaborative mining group"@en)
AnnotationAssertion(dct:description :MiningPool
  "Foundational blockchain concept with formal ontological definition"@en)
AnnotationAssertion(:termID :MiningPool "BC-0064")
AnnotationAssertion(:priority :MiningPool "1"^^xsd:integer)
AnnotationAssertion(:category :MiningPool "consensus-fundamentals"@en)
)

## About Mining Pool

- Collaborative mining group within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

### Key Characteristics

- 1. **Definitional Property**: Core defining characteristic
- 2. **Functional Property**: Operational behavior
- 3. **Structural Property**: Compositional elements
- 4. **Security Property**: Security guarantees provided
- 5. **Performance Property**: Efficiency considerations

### Technical Components

- **Implementation**: How concept is realized technically
- **Verification**: Methods for validating correctness
- **Interaction**: Relationships with other components
- **Constraints**: Technical limitations and requirements

### Use Cases

- **1. Core Blockchain Operation**
- **Application**: Fundamental blockchain functionality
- **Example**: Practical implementation in major blockchains
- **Requirements**: Technical prerequisites
- **Benefits**: Value provided to blockchain systems

### Standards & References

- [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
- [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
- [[NIST NISTIR]] - Blockchain and distributed ledger technologies

### Current Landscape (2026)

- Pool concentration remains the defining concern: as of mid-2026 Foundry USA (~24-30% of ~900-1,000 EH/s network hashrate) and AntPool (~15-19%) together produce over half of all blocks, with the top four pools (adding F2Pool and SpiderPool/ViaBTC) covering roughly 75%, giving block-template construction a Nakamoto coefficient of just three.
- Stratum V2 moved from theory to deployment: Braiins Pool shipped full V2 support including Job Declaration in February 2026, and DEMAND (DMND) launched in November 2025 as the first purpose-built V2-native pool (SRI codebase), with roughly 15-20% of network hashrate now running V2 in some form per the project tracker.
- Landmark decentralisation milestone: on 25 June 2026 GoMining and DMND mined block 955,318 using the Job Declaration feature, the first known Bitcoin block built from a miner-constructed template in a live Stratum V2 production environment.
- Industry alignment accelerated on 7-11 May 2026 when seven major pools representing roughly 75% of global hashrate (Foundry USA, AntPool, F2Pool, SpiderPool, MARA Pool, Block Inc. and DMND) joined the Stratum V2 Working Group, though most remain in testing rather than live user access.
- Bitcoin Core v30 (released October 2025) added experimental Stratum V2 support, lowering the barrier for pools and miners to run miner-side template construction and expected to accelerate adoption.
- Payout-model debate sharpened around transparency: dominant custodial FPPS is being challenged by verifiable non-custodial schemes such as OCEAN's TIDES (with its DATUM protocol requiring miners to run a full node) and DMND's provably-fair SLICE, positioned against FPPS's opaque insurance-style economics.
- Open frontier as of 2026: converting Working Group membership into production miner-selected templates at the large custodial pools, closing the custody and censorship-resistance gap, and realising Braiins' measured ~7.4% profitability uplift (via ~60-70% bandwidth savings and encrypted, hijack-resistant transport) at scale.

### References

- 1. Spark (2026). How a New Mining Protocol Returns Block Construction to Miners. https://www.spark.money/research/bitcoin-stratum-v2-mining-decentralization
- 2. Spark (2026). The Hidden Centralization Risk in Bitcoin Mining. https://www.spark.money/research/bitcoin-block-template-mining-centralization
- 3. Bitcoin.com News (2026). Bitcoin Mining Pool Giants Foundry, Antpool and F2pool Signal Stratum V2 Shift. https://news.bitcoin.com/bitcoin-mining-pool-giants-foundry-antpool-and-f2pool-signal-stratum-v2-shift/
- 4. D-Central (2026). Bitcoin Mining Pool Comparison 2026: Foundry USA vs OCEAN vs Luxor. https://d-central.tech/mining-pool-comparison/
- 5. Simplemining.io (2026). Bitcoin Mining Pool Stats & Rankings. https://www.simplemining.io/bitcoin-mining-pools

### Provenance

