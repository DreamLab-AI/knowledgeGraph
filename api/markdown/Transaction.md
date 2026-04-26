iri:: http://narrativegoldmine.com/blockchain#Transaction
uri:: urn:visionclaw:concept:blockchain:transaction
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:transaction
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Transaction
content-hash:: sha256-12-1ef6f3f29529
legacy-term-id:: BC-0006
status:: complete
maturity:: mature
quality-score:: 0.50
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-28T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Transaction
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]
  - bridges-to:: [[Virtual Economy]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Transaction))

  ## Subclass Relationships
  SubClassOf(:Transaction :DistributedDataStructure)
  SubClassOf(:Transaction :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Transaction
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Transaction
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Transaction "BC-0006"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Transaction "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Transaction "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Transaction :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Transaction :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Transaction "Transaction"@en)
  AnnotationAssertion(rdfs:comment :Transaction
    "State-changing operation on blockchain"@en)
  AnnotationAssertion(dct:description :Transaction
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Transaction "BC-0006")
  AnnotationAssertion(:priority :Transaction "1"^^xsd:integer)
  AnnotationAssertion(:category :Transaction "blockchain-fundamentals"@en)
  )
      ```

  - ## About Transaction

  - State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
