- ### OntologyBlock
  id:: double-spending-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0076
    - preferred-term:: Double Spending
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Fraudulent duplicate payment within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:DoubleSpending
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: double-spending-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

  - #### OWL Axioms
    id:: double-spending-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0076>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:DoubleSpending))

  ## Subclass Relationships
  SubClassOf(:DoubleSpending :NetworkComponent)
  SubClassOf(:DoubleSpending :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:DoubleSpending
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:DoubleSpending
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :DoubleSpending "BC-0076"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :DoubleSpending "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :DoubleSpending "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :DoubleSpending :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :DoubleSpending :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :DoubleSpending "Double Spending"@en)
  AnnotationAssertion(rdfs:comment :DoubleSpending
    "Fraudulent duplicate payment"@en)
  AnnotationAssertion(dct:description :DoubleSpending
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :DoubleSpending "BC-0076")
  AnnotationAssertion(:priority :DoubleSpending "1"^^xsd:integer)
  AnnotationAssertion(:category :DoubleSpending "network-security"@en)
)
      ```

- ## About Double Spending
  id:: double-spending-about

  - Fraudulent duplicate payment within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: double-spending-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: double-spending-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: double-spending-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: double-spending-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

