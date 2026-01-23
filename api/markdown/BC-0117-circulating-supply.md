- ### OntologyBlock
  id:: circulating-supply-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0117
    - preferred-term:: Circulating Supply
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Publicly available tokens within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:CirculatingSupply
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[TokenEconomicsDomain]]
    - implementedInLayer:: [[EconomicLayer]]

  - #### Relationships
    id:: circulating-supply-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[EconomicMechanism]]

  - #### OWL Axioms
    id:: circulating-supply-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0117>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:CirculatingSupply))

  ## Subclass Relationships
  SubClassOf(:CirculatingSupply :EconomicMechanism)
  SubClassOf(:CirculatingSupply :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:CirculatingSupply
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:CirculatingSupply
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :CirculatingSupply "BC-0117"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :CirculatingSupply "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :CirculatingSupply "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :CirculatingSupply :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :CirculatingSupply :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :CirculatingSupply "Circulating Supply"@en)
  AnnotationAssertion(rdfs:comment :CirculatingSupply
    "Publicly available tokens"@en)
  AnnotationAssertion(dct:description :CirculatingSupply
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :CirculatingSupply "BC-0117")
  AnnotationAssertion(:priority :CirculatingSupply "1"^^xsd:integer)
  AnnotationAssertion(:category :CirculatingSupply "economic-incentive"@en)
)
      ```

- ## About Circulating Supply
  id:: circulating-supply-about

  - Publicly available tokens within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: circulating-supply-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: circulating-supply-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: circulating-supply-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: circulating-supply-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

