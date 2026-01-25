- ### OntologyBlock
  id:: selfish-mining-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0085
    - preferred-term:: Selfish Mining
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Strategic block withholding within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:SelfishMining
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: selfish-mining-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

  - #### OWL Axioms
    id:: selfish-mining-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0085>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:SelfishMining))

  ## Subclass Relationships
  SubClassOf(:SelfishMining :NetworkComponent)
  SubClassOf(:SelfishMining :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:SelfishMining
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:SelfishMining
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :SelfishMining "BC-0085"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :SelfishMining "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :SelfishMining "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :SelfishMining :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :SelfishMining :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :SelfishMining "Selfish Mining"@en)
  AnnotationAssertion(rdfs:comment :SelfishMining
    "Strategic block withholding"@en)
  AnnotationAssertion(dct:description :SelfishMining
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :SelfishMining "BC-0085")
  AnnotationAssertion(:priority :SelfishMining "1"^^xsd:integer)
  AnnotationAssertion(:category :SelfishMining "network-security"@en)
)
      ```

- ## About Selfish Mining
  id:: selfish-mining-about

  - Strategic block withholding within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: selfish-mining-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: selfish-mining-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: selfish-mining-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: selfish-mining-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -
