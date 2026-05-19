- ### Definition
  - Fundamental unit containing transactions within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Block
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]
  - bridges-to:: [[Telecollaboration]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Block))

  ## Subclass Relationships
  SubClassOf(:Block :DistributedDataStructure)
  SubClassOf(:Block :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Block
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Block
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Block "BC-0003"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Block "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Block "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Block :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Block :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Block "Block"@en)
  AnnotationAssertion(rdfs:comment :Block
    "Fundamental unit containing transactions"@en)
  AnnotationAssertion(dct:description :Block
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Block "BC-0003")
  AnnotationAssertion(:priority :Block "1"^^xsd:integer)
  AnnotationAssertion(:category :Block "blockchain-fundamentals"@en)
  )
      ```

  - ## About Block

  - Fundamental unit containing transactions within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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