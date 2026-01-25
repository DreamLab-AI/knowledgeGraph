- ### OntologyBlock
  id:: pruned-node-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0094
    - preferred-term:: Pruned Node
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Partial history storage node within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:PrunedNode
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: pruned-node-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

  - #### OWL Axioms
    id:: pruned-node-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0094>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:PrunedNode))

  ## Subclass Relationships
  SubClassOf(:PrunedNode :NetworkComponent)
  SubClassOf(:PrunedNode :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PrunedNode
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PrunedNode
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PrunedNode "BC-0094"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PrunedNode "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PrunedNode "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PrunedNode :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PrunedNode :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PrunedNode "Pruned Node"@en)
  AnnotationAssertion(rdfs:comment :PrunedNode
    "Partial history storage node"@en)
  AnnotationAssertion(dct:description :PrunedNode
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PrunedNode "BC-0094")
  AnnotationAssertion(:priority :PrunedNode "1"^^xsd:integer)
  AnnotationAssertion(:category :PrunedNode "network-security"@en)
)
      ```

- ## About Pruned Node
  id:: pruned-node-about

  - Partial history storage node within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: pruned-node-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: pruned-node-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: pruned-node-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: pruned-node-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -
