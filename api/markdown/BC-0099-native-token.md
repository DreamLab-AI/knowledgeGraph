- ### OntologyBlock
  id:: native-token-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0099
    - preferred-term:: Native Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Blockchain-native cryptocurrency within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:NativeToken
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[TokenEconomicsDomain]]
    - implementedInLayer:: [[EconomicLayer]]

  - #### Relationships
    id:: native-token-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[EconomicMechanism]]

  - #### OWL Axioms
    id:: native-token-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0099>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:NativeToken))

  ## Subclass Relationships
  SubClassOf(:NativeToken :EconomicMechanism)
  SubClassOf(:NativeToken :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:NativeToken
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:NativeToken
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :NativeToken "BC-0099"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :NativeToken "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :NativeToken "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :NativeToken :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :NativeToken :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :NativeToken "Native Token"@en)
  AnnotationAssertion(rdfs:comment :NativeToken
    "Blockchain-native cryptocurrency"@en)
  AnnotationAssertion(dct:description :NativeToken
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :NativeToken "BC-0099")
  AnnotationAssertion(:priority :NativeToken "1"^^xsd:integer)
  AnnotationAssertion(:category :NativeToken "economic-incentive"@en)
)
      ```

- ## About Native Token
  id:: native-token-about

  - Blockchain-native cryptocurrency within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: native-token-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: native-token-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: native-token-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: native-token-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

