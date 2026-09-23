
A blockchain node that independently downloads, validates, and stores the complete transaction history of the chain from the genesis block, enforcing all consensus rules without trusting external parties. Full nodes are the gold standard for trustless participation and are the backbone of decentralisation.

- ### Semantic Classification

- ### Content

  ## Class Declaration
  Declaration(Class(:FullNode))

  ## Subclass Relationships
  SubClassOf(:FullNode :NetworkComponent)
  SubClassOf(:FullNode :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:FullNode
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:FullNode
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :FullNode "BC-0073"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :FullNode "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :FullNode "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :FullNode :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :FullNode :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :FullNode "Full Node"@en)
  AnnotationAssertion(rdfs:comment :FullNode
    "Complete blockchain copy maintainer"@en)
  AnnotationAssertion(dct:description :FullNode
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :FullNode "BC-0073")
  AnnotationAssertion(:priority :FullNode "1"^^xsd:integer)
  AnnotationAssertion(:category :FullNode "network-security"@en)
  )

  - ## About Full Node

  - Complete blockchain copy maintainer within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance

