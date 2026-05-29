- ### Definition
  Block Propagation is the process by which a newly mined or validated block is broadcast across a blockchain peer-to-peer network so that all full nodes can update their local copy of the chain. Propagation latency directly influences the orphan/stale block rate, security against selfish mining, and the degree of centralisation pressure towards large, well-connected mining pools. Compact Block Relay (Bitcoin BIP 152) and Graphene reduce bandwidth by sending block sketches rather than full transaction lists.

- ### Semantic Classification
  - owl-class:: blockchain:BlockPropagation
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[ConsensusDomain]]
  - implemented-in-layer:: [[ProtocolLayer]]

- ### Relationships
  Block Propagation **requires** a Blockchain Network of Full Nodes to relay data. It **enables** Consensus Mechanism convergence and underpins Blockchain Scalability efforts. It **has part** the measurable Block Propagation Time metric. It is **related to** Block Time (propagation delay must be far shorter than the inter-block interval), Block Size (larger blocks propagate more slowly), the Mempool (receiver nodes reconstruct blocks from cached transactions), and Miners who initiate propagation upon finding a valid block. It **depends on** the Blockchain Protocol gossip layer. It **contrasts with** Light Node operation, which receives block headers without verifying full propagation.

- ### Content

  ## Class Declaration
  Declaration(Class(:BlockPropagation))

  ## Subclass Relationships
  SubClassOf(:BlockPropagation :ConsensusProtocol)
  SubClassOf(:BlockPropagation :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:BlockPropagation
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:BlockPropagation
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :BlockPropagation "BC-0062"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :BlockPropagation "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :BlockPropagation "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :BlockPropagation :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :BlockPropagation :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :BlockPropagation "Block Propagation"@en)
  AnnotationAssertion(rdfs:comment :BlockPropagation
    "Network block distribution"@en)
  AnnotationAssertion(dct:description :BlockPropagation
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :BlockPropagation "BC-0062")
  AnnotationAssertion(:priority :BlockPropagation "1"^^xsd:integer)
  AnnotationAssertion(:category :BlockPropagation "consensus-fundamentals"@en)
  )
      ```

  When a miner or validator produces a valid block, it must flood that block through the peer-to-peer gossip network as rapidly as possible. Every millisecond of delay increases the probability that another node discovers a competing block at the same height, creating a fork that the network must resolve by discarding one branch. The discarded branch's transactions return to the mempool and its miner's revenue is wasted, creating a strong economic incentive for fast propagation.

  Bitcoin's original block announcement protocol required sending the full block payload, wasting bandwidth on transactions the receiving peer already held. BIP 152 Compact Blocks (2016) addressed this by sending only short transaction identifiers; the receiver reconstructs the full block from its own mempool and requests only the small fraction of missing transactions. Graphene (a research proposal) further compresses the sketch using invertible Bloom lookup tables and Bloom filters, achieving compression ratios an order of magnitude better than Compact Blocks for typical mempool overlap.

  The relationship between block size and propagation time has significant security consequences. In the selfish mining attack, a pool that propagates its blocks faster than competitors can withhold discovered blocks briefly to gain a head start on the next block, earning more than its fair share of rewards. Geographic concentration of miners around high-bandwidth data centres reduces average propagation times for those miners, creating centralisation pressure that undermines the decentralisation goals of proof-of-work chains.

  Block propagation is a key variable in blockchain scalability research. Systems that tolerate high block frequencies (such as PHANTOM/GHOSTDAG DAG-based protocols) must propagate blocks before the next block arrives, requiring propagation to complete within seconds rather than the ten-minute Bitcoin interval. This imposes network topology constraints that large-scale deployments must carefully architect.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z