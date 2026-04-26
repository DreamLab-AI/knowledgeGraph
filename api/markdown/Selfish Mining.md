iri:: http://narrativegoldmine.com/blockchain#SelfishMining
uri:: urn:visionclaw:concept:blockchain:selfish-mining
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:selfish-mining
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Selfish Mining
content-hash:: sha256-12-76be0de419cf
legacy-term-id:: BC-0085
status:: complete
maturity:: mature
quality-score:: 0.50
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-28T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Strategic block withholding within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:SelfishMining
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]
  - bridges-to:: [[AI Agent System]]

- ### Content

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

  - Strategic block withholding within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
