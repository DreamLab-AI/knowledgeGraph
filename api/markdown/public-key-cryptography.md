- ### Definition
  - Asymmetric encryption system within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Public-keyCryptography
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Public-KeyCryptography))

  ## Subclass Relationships
  SubClassOf(:Public-KeyCryptography :CryptographicPrimitive)
  SubClassOf(:Public-KeyCryptography :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Public-KeyCryptography
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Public-KeyCryptography
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Public-KeyCryptography "BC-0031"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Public-KeyCryptography "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Public-KeyCryptography "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Public-KeyCryptography :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Public-KeyCryptography :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Public-KeyCryptography "Public-Key Cryptography"@en)
  AnnotationAssertion(rdfs:comment :Public-KeyCryptography
    "Asymmetric encryption system"@en)
  AnnotationAssertion(dct:description :Public-KeyCryptography
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Public-KeyCryptography "BC-0031")
  AnnotationAssertion(:priority :Public-KeyCryptography "1"^^xsd:integer)
  AnnotationAssertion(:category :Public-KeyCryptography "cryptographic-foundations"@en)
  )
      ```

  - ## About Public-Key Cryptography

  - Asymmetric encryption system within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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