- ### OntologyBlock
  id:: private-key-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0036
    - preferred-term:: Private Key
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Secret cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:PrivateKey
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: private-key-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

  - #### OWL Axioms
    id:: private-key-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0036>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:PrivateKey))

  ## Subclass Relationships
  SubClassOf(:PrivateKey :CryptographicPrimitive)
  SubClassOf(:PrivateKey :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PrivateKey
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PrivateKey
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PrivateKey "BC-0036"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PrivateKey "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PrivateKey "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PrivateKey :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PrivateKey :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PrivateKey "Private Key"@en)
  AnnotationAssertion(rdfs:comment :PrivateKey
    "Secret cryptographic key"@en)
  AnnotationAssertion(dct:description :PrivateKey
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PrivateKey "BC-0036")
  AnnotationAssertion(:priority :PrivateKey "1"^^xsd:integer)
  AnnotationAssertion(:category :PrivateKey "cryptographic-foundations"@en)
)
      ```

- ## About Private Key
  id:: private-key-about

  - Secret cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: private-key-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: private-key-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: private-key-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: private-key-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -
