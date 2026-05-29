- ### Definition
  The Account Model is a balance-based ledger paradigm in which each address maintains a persistent balance that is updated in-place when transactions execute. Unlike the UTXO model, accounts hold state across transactions, simplifying smart contract programming while introducing challenges around replay protection and nonce management.

- ### Semantic Classification
  - owl-class:: blockchain:AccountModel
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  The Account Model contrasts fundamentally with the [[UTXO Model]] used by Bitcoin, trading fine-grained output tracking for simpler stateful programming. It enables [[Smart Contract]] execution by providing addressable mutable state, and all state changes are driven by [[Transaction]] submissions. Account security depends on [[Wallet]] custody of private keys via [[Cryptographic Keys]]. The model simplifies [[Transaction Processing]] logic but requires nonce tracking to prevent [[Double Spending]]. [[Transaction Fee]] calculation is integrated as a gas mechanism in account-based chains like Ethereum.

- ### Content

  ## Class Declaration
  Declaration(Class(:AccountModel))

  ## Subclass Relationships
  SubClassOf(:AccountModel :DistributedDataStructure)
  SubClassOf(:AccountModel :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:AccountModel
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:AccountModel
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :AccountModel "BC-0008"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :AccountModel "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :AccountModel "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :AccountModel :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :AccountModel :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :AccountModel "Account Model"@en)
  AnnotationAssertion(rdfs:comment :AccountModel
    "Balance-based accounting model"@en)
  AnnotationAssertion(dct:description :AccountModel
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :AccountModel "BC-0008")
  AnnotationAssertion(:priority :AccountModel "1"^^xsd:integer)
  AnnotationAssertion(:category :AccountModel "blockchain-fundamentals"@en)
  )
      ```

  #### Design Principles
  In the account model every address—whether an externally owned account or a smart contract—holds a balance and associated state. A transaction decrements the sender's balance and increments the recipient's, with the net difference covering gas fees. Smart contracts store their internal state (mappings, arrays, variables) in the contract's storage trie, making the account model the natural substrate for programmable money and decentralised applications.

  #### Comparison with UTXO
  The UTXO model used by Bitcoin tracks individual unspent outputs, giving it superior parallelism for transaction validation and better privacy properties through output reuse avoidance. The account model sacrifices these properties for easier programmability: developers reason about balances and contract state rather than managing chains of unspent outputs. Ethereum chose the account model specifically to support Turing-complete smart contracts, while Bitcoin's scripting system is intentionally limited.

  #### Nonce and Replay Protection
  Each account maintains a transaction counter (nonce) that must be included in every outgoing transaction. The network rejects transactions whose nonce does not match the expected sequence, preventing replay attacks in which a signed transaction is submitted more than once. This mechanism ties transaction ordering to the account, unlike the UTXO model where outputs can be spent in any order.

  #### Security Considerations
  Because account balances are mutable global state, smart contracts operating on the account model must guard against reentrancy attacks, where a malicious contract recursively calls back into the victim before its state update is committed. Nonce management, access control patterns (checks-effects-interactions), and formal verification tools are the principal defences.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z