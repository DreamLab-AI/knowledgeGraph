- ### Definition
  - Partial history storage node within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:PrunedNode
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

- ### Content

  ## Class Declaration
  Declaration(Class(:PrunedNode))

  ## Subclass Relationships
  SubClassOf(:PrunedNode :NetworkComponent)
  SubClassOf(:PrunedNode :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PrunedNode
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PrunedNode
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PrunedNode "BC-0094"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PrunedNode "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PrunedNode "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PrunedNode :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PrunedNode :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PrunedNode "Pruned Node"@en)
  AnnotationAssertion(rdfs:comment :PrunedNode
    "Partial history storage node"@en)
  AnnotationAssertion(dct:description :PrunedNode
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PrunedNode "BC-0094")
  AnnotationAssertion(:priority :PrunedNode "1"^^xsd:integer)
  AnnotationAssertion(:category :PrunedNode "network-security"@en)
  )
      ```

  - ## About Pruned Node

  - Partial history storage node within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z