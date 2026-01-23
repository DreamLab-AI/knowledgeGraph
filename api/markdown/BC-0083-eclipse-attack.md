- ### OntologyBlock
  id:: eclipse-attack-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0083
    - preferred-term:: Eclipse Attack
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Node isolation attack within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:EclipseAttack
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: eclipse-attack-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

  - #### OWL Axioms
    id:: eclipse-attack-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0083>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:EclipseAttack))

  ## Subclass Relationships
  SubClassOf(:EclipseAttack :NetworkComponent)
  SubClassOf(:EclipseAttack :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:EclipseAttack
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:EclipseAttack
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :EclipseAttack "BC-0083"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :EclipseAttack "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :EclipseAttack "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :EclipseAttack :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :EclipseAttack :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :EclipseAttack "Eclipse Attack"@en)
  AnnotationAssertion(rdfs:comment :EclipseAttack
    "Node isolation attack"@en)
  AnnotationAssertion(dct:description :EclipseAttack
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :EclipseAttack "BC-0083")
  AnnotationAssertion(:priority :EclipseAttack "1"^^xsd:integer)
  AnnotationAssertion(:category :EclipseAttack "network-security"@en)
)
      ```

- ## About Eclipse Attack
  id:: eclipse-attack-about

  - Node isolation attack within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: eclipse-attack-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: eclipse-attack-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: eclipse-attack-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: eclipse-attack-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -
