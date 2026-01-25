- ### OntologyBlock
  id:: pool-share-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0066
    - preferred-term:: Pool Share
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Mining contribution unit within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:PoolShare
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[ConsensusDomain]]
    - implementedInLayer:: [[ProtocolLayer]]

  - #### Relationships
    id:: pool-share-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[ConsensusProtocol]]

  - #### OWL Axioms
    id:: pool-share-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0066>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:PoolShare))

  ## Subclass Relationships
  SubClassOf(:PoolShare :ConsensusProtocol)
  SubClassOf(:PoolShare :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PoolShare
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PoolShare
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PoolShare "BC-0066"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PoolShare "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PoolShare "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PoolShare :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PoolShare :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PoolShare "Pool Share"@en)
  AnnotationAssertion(rdfs:comment :PoolShare
    "Mining contribution unit"@en)
  AnnotationAssertion(dct:description :PoolShare
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PoolShare "BC-0066")
  AnnotationAssertion(:priority :PoolShare "1"^^xsd:integer)
  AnnotationAssertion(:category :PoolShare "consensus-fundamentals"@en)
)
      ```

- ## About Pool Share
  id:: pool-share-about

  - Mining contribution unit within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: pool-share-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: pool-share-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: pool-share-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: pool-share-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -



<!-- Merged from Pool Share.md: community, innovation, software engineering -->
