- ### Definition
  A Chain Reorganization (reorg) is the replacement of one or more blocks in the canonical blockchain by an alternative chain of equal or greater cumulative proof-of-work, occurring when competing miners produce valid chains of differing lengths and the network converges on the longest-chain rule to select the canonical history. Reorgs invalidate transactions confirmed only in the abandoned chain segment, enabling double-spend attacks when deliberately induced and posing settlement finality risks for exchanges and payment processors.

- ### Semantic Classification
  - owl-class:: blockchain:ChainReorganization
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[Distributed Data Structure]]
  - requires:: [[Proof Of Work]], [[Nakamoto Consensus]], [[Longest Chain Rule]]
  - enables:: [[Double Spending]], [[51% Attack]]
  - relatedTo:: [[Finality]], [[Transaction Finality]], [[Selfish Mining]], [[Fork Choice Rule]], [[Blockchain Scalability]]
  - partOf:: [[Consensus Mechanism]]
  - contrastsWith:: [[Byzantine Fault Tolerance]]

- ### Content

  ## Class Declaration
  Declaration(Class(:ChainReorganization))

  ## Subclass Relationships
  SubClassOf(:ChainReorganization :DistributedDataStructure)
  SubClassOf(:ChainReorganization :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:ChainReorganization
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:ChainReorganization
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :ChainReorganization "BC-0015"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :ChainReorganization "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :ChainReorganization "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :ChainReorganization :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :ChainReorganization :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :ChainReorganization "Chain Reorganization"@en)
  AnnotationAssertion(rdfs:comment :ChainReorganization
    "Replacement of blockchain segment"@en)
  AnnotationAssertion(dct:description :ChainReorganization
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :ChainReorganization "BC-0015")
  AnnotationAssertion(:priority :ChainReorganization "1"^^xsd:integer)
  AnnotationAssertion(:category :ChainReorganization "blockchain-fundamentals"@en)
  )
      ```

  ### About Chain Reorganization

  In proof-of-work blockchain networks, multiple miners may independently discover valid blocks at approximately the same height, producing competing chain tips. Each node initially appends the first valid block it receives to its local chain, creating a temporary fork where different subsets of the network have different views of the canonical chain. The longest-chain rule—more precisely, the heaviest-chain rule measuring cumulative proof-of-work—resolves this contention: when one chain accumulates more work than its competitors, all nodes adopting that chain orphan the competing blocks and any transactions exclusively confirmed therein, constituting a reorganisation.

  Shallow reorgs of one or two blocks occur naturally and frequently in any proof-of-work blockchain without adversarial intent, arising simply from network propagation latency. These natural reorgs are a fundamental feature of probabilistic finality: a transaction confirmed in a block at depth N has been reversed by a reorg of depth N, and the probability of such a reorg decays exponentially with depth assuming honest majority hash power. Bitcoin's convention of waiting six confirmations before treating a payment as final reflects this probabilistic model and corresponds to a reorg of at least six blocks, which requires an adversary controlling close to 50% of hash power even under optimistic assumptions.

  Adversarial reorgs are engineered by attackers who privately mine a competing chain and broadcast it after targets have accepted transactions in the public chain, invalidating those transactions. This double-spend attack requires controlling sufficient hash rate to outpace the honest network—approximately 51% for sustained attacks, though shorter reorgs are achievable with less hash power by exploiting network topology. Selfish mining strategies can amplify an attacker's effective share of block rewards, making attacks viable at lower hash rate thresholds than the naive 51% estimate suggests.

  Exchanges, payment processors, and merchants mitigate reorg risk by requiring multiple confirmations before crediting deposits and by monitoring blockchain analytics services that detect unusual chain-tip competition patterns. Proof-of-stake and Byzantine fault-tolerant consensus mechanisms achieve deterministic finality without reorgs by requiring supermajority validator signatures on each block, eliminating the probabilistic settlement model entirely at the cost of different security assumptions.

  ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z