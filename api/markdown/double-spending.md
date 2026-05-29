- ### Definition
  Double spending is the fraudulent attempt to spend the same digital asset more than once by broadcasting conflicting transactions to different parts of a blockchain network before they are confirmed. It represents the fundamental security problem that consensus mechanisms are designed to prevent in distributed ledger systems.

- ### Semantic Classification
  - owl-class:: blockchain:DoubleSpending
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  Double Spending requires a functioning [[Consensus Mechanism]] and [[Transaction Finality]] to be prevented. It enables [[Attack Vector]] scenarios and is closely related to [[Selfish Mining]], [[Sybil Attack]], and [[Eclipse Attack]] as complementary adversarial strategies. Successful double-spend attacks undermine [[Transaction Confirmation]] guarantees. [[Cryptographic Signature]] schemes make undetected double-spending of individual outputs cryptographically infeasible; the attack instead relies on network-level race conditions.

- ### Content

  ## Class Declaration
  Declaration(Class(:DoubleSpending))

  ## Subclass Relationships
  SubClassOf(:DoubleSpending :NetworkComponent)
  SubClassOf(:DoubleSpending :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:DoubleSpending
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:DoubleSpending
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :DoubleSpending "BC-0076"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :DoubleSpending "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :DoubleSpending "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :DoubleSpending :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :DoubleSpending :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :DoubleSpending "Double Spending"@en)
  AnnotationAssertion(rdfs:comment :DoubleSpending
    "Fraudulent duplicate payment"@en)
  AnnotationAssertion(dct:description :DoubleSpending
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :DoubleSpending "BC-0076")
  AnnotationAssertion(:priority :DoubleSpending "1"^^xsd:integer)
  AnnotationAssertion(:category :DoubleSpending "network-security"@en)
  )
      ```

  #### Attack Mechanics
  In a double-spend attempt, an attacker sends a transaction to a merchant and simultaneously—or shortly after—broadcasts a conflicting transaction returning the same funds to an address they control. If the attacker can ensure their conflicting transaction is included in the canonical chain (e.g., by commanding sufficient hash power in a 51% attack, or by exploiting propagation delays), the first transaction is orphaned and the merchant's payment reversed.

  #### Prevention Mechanisms
  The primary defence is waiting for sufficient block confirmations before considering a transaction final—six blocks is the conventional standard for Bitcoin. Byzantine Fault Tolerant consensus systems eliminate probabilistic finality entirely by requiring a supermajority vote before a block is committed, making double-spending cryptographically impossible once a block is finalised. Payment channels and Layer 2 networks introduce additional on-chain anchors that make double-spending off-chain transactions detectable and punishable.

  #### Relationship to Network Attacks
  Double spending is closely intertwined with Eclipse Attack (isolating nodes to control their view of the chain) and Partition Attack (splitting the network into disconnected subgraphs). Both network-level attacks can be used to facilitate double spending by preventing honest nodes from seeing the conflicting transaction until after the malicious branch is established. Selfish Mining can also increase the probability of a successful double spend by enabling an attacker to build a private chain advantage.

  #### Economic Considerations
  The cost of a successful double-spend attack is bounded by the expense of achieving network dominance (hash power or stake) multiplied by the probability of success, weighed against the value of assets spent. High-value transactions therefore warrant longer confirmation windows. Networks with lower total hash rate or stake are more vulnerable, motivating the design of Hybrid Consensus schemes that add BFT finality to proof-based chains.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z