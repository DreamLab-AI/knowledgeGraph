- ### Definition
  - Publicly-shared cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:PublicKey
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

- ### Content

  ## Class Declaration
  Declaration(Class(:PublicKey))

  ## Subclass Relationships
  SubClassOf(:PublicKey :CryptographicPrimitive)
  SubClassOf(:PublicKey :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PublicKey
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PublicKey
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PublicKey "BC-0037"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PublicKey "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PublicKey "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PublicKey :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PublicKey :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PublicKey "Public Key"@en)
  AnnotationAssertion(rdfs:comment :PublicKey
    "Publicly-shared cryptographic key"@en)
  AnnotationAssertion(dct:description :PublicKey
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PublicKey "BC-0037")
  AnnotationAssertion(:priority :PublicKey "1"^^xsd:integer)
  AnnotationAssertion(:category :PublicKey "cryptographic-foundations"@en)
  )
      ```

  - ## About Public Key

  - Publicly-shared cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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