- ### OntologyBlock
  id:: public-key-cryptography-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0031
    - preferred-term:: Public-Key Cryptography
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Asymmetric encryption system within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:Public-keyCryptography
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: public-key-cryptography-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

  - #### OWL Axioms
    id:: public-key-cryptography-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0031>
  Import(<http://metaverse-ontology.org/blockchain/core>)

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
  id:: public-key-cryptography-about

  - Asymmetric encryption system within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: public-key-cryptography-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: public-key-cryptography-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: public-key-cryptography-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: public-key-cryptography-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -
