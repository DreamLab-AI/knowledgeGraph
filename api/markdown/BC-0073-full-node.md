- ### OntologyBlock
  id:: full-node-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0073
    - preferred-term:: Full Node
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Complete blockchain copy maintainer within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:FullNode
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: full-node-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

  - #### OWL Axioms
    id:: full-node-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0073>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:FullNode))

  ## Subclass Relationships
  SubClassOf(:FullNode :NetworkComponent)
  SubClassOf(:FullNode :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:FullNode
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:FullNode
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :FullNode "BC-0073"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :FullNode "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :FullNode "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :FullNode :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :FullNode :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :FullNode "Full Node"@en)
  AnnotationAssertion(rdfs:comment :FullNode
    "Complete blockchain copy maintainer"@en)
  AnnotationAssertion(dct:description :FullNode
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :FullNode "BC-0073")
  AnnotationAssertion(:priority :FullNode "1"^^xsd:integer)
  AnnotationAssertion(:category :FullNode "network-security"@en)
)
      ```

- ## About Full Node
  id:: full-node-about

  - Complete blockchain copy maintainer within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: full-node-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: full-node-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: full-node-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: full-node-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

