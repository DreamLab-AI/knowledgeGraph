- ### OntologyBlock
  id:: public-key-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0037
    - preferred-term:: Public Key
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Publicly-shared cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:PublicKey
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: public-key-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

  - #### OWL Axioms
    id:: public-key-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0037>
  Import(<http://metaverse-ontology.org/blockchain/core>)

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
  id:: public-key-about

  - Publicly-shared cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: public-key-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: public-key-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: public-key-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: public-key-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -
