- ### OntologyBlock
  id:: base-fee-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0108
    - preferred-term:: Base Fee
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Minimum transaction fee within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:BaseFee
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[TokenEconomicsDomain]]
    - implementedInLayer:: [[EconomicLayer]]

  - #### Relationships
    id:: base-fee-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[EconomicMechanism]]

  - #### OWL Axioms
    id:: base-fee-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0108>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:BaseFee))

  ## Subclass Relationships
  SubClassOf(:BaseFee :EconomicMechanism)
  SubClassOf(:BaseFee :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:BaseFee
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:BaseFee
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :BaseFee "BC-0108"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :BaseFee "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :BaseFee "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :BaseFee :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :BaseFee :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :BaseFee "Base Fee"@en)
  AnnotationAssertion(rdfs:comment :BaseFee
    "Minimum transaction fee"@en)
  AnnotationAssertion(dct:description :BaseFee
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :BaseFee "BC-0108")
  AnnotationAssertion(:priority :BaseFee "1"^^xsd:integer)
  AnnotationAssertion(:category :BaseFee "economic-incentive"@en)
)
      ```

- ## About Base Fee
  id:: base-fee-about

  - Minimum transaction fee within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: base-fee-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: base-fee-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: base-fee-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: base-fee-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

