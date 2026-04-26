iri:: http://narrativegoldmine.com/blockchain#FullNode
uri:: urn:visionclaw:concept:blockchain:full-node
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:full-node
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Full Node
content-hash:: sha256-12-5f69c507f7d0
legacy-term-id:: BC-0073
status:: complete
maturity:: mature
quality-score:: 0.50
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-28T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Complete blockchain copy maintainer within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:FullNode
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

- ### Content

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

  - Complete blockchain copy maintainer within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
