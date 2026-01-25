- ### OntologyBlock
  id:: transaction-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0006
    - preferred-term:: Transaction
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:Transaction
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[BlockchainDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: transaction-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]

  - #### OWL Axioms
    id:: transaction-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0006>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:Transaction))

  ## Subclass Relationships
  SubClassOf(:Transaction :DistributedDataStructure)
  SubClassOf(:Transaction :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Transaction
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Transaction
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Transaction "BC-0006"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Transaction "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Transaction "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Transaction :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Transaction :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Transaction "Transaction"@en)
  AnnotationAssertion(rdfs:comment :Transaction
    "State-changing operation on blockchain"@en)
  AnnotationAssertion(dct:description :Transaction
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Transaction "BC-0006")
  AnnotationAssertion(:priority :Transaction "1"^^xsd:integer)
  AnnotationAssertion(:category :Transaction "blockchain-fundamentals"@en)
)
      ```

- ## About Transaction
  id:: transaction-about

  - State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: transaction-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: transaction-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: transaction-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: transaction-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -
