- ### OntologyBlock
  id:: block-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0003
    - preferred-term:: Block
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Fundamental unit containing transactions within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 1.0

  - **Semantic Classification**
    - owl:class:: bc:Block
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[BlockchainDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: block-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]

  - #### OWL Axioms
    id:: block-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0003>
  Import(<http://metaverse-ontology.org/blockchain/core>)

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
  id:: block-about

  - Fundamental unit containing transactions within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: block-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: block-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: block-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: block-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -
