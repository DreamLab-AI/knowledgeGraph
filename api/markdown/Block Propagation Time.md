iri:: http://narrativegoldmine.com/blockchain#BlockPropagationTime
uri:: urn:visionclaw:concept:blockchain:block-propagation-time
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:block-propagation-time
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Block Propagation Time
content-hash:: sha256-12-7fc3e07af2e8
legacy-term-id:: BC-0082
status:: complete
maturity:: mature
quality-score:: 0.50
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-28T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Network distribution duration within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:BlockPropagationTime
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]
  - bridges-to:: [[AI Energy Optimisation]]

- ### Content

  ## Class Declaration
  Declaration(Class(:BlockPropagationTime))

  ## Subclass Relationships
  SubClassOf(:BlockPropagationTime :NetworkComponent)
  SubClassOf(:BlockPropagationTime :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:BlockPropagationTime
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:BlockPropagationTime
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :BlockPropagationTime "BC-0082"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :BlockPropagationTime "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :BlockPropagationTime "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :BlockPropagationTime :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :BlockPropagationTime :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :BlockPropagationTime "Block Propagation Time"@en)
  AnnotationAssertion(rdfs:comment :BlockPropagationTime
    "Network distribution duration"@en)
  AnnotationAssertion(dct:description :BlockPropagationTime
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :BlockPropagationTime "BC-0082")
  AnnotationAssertion(:priority :BlockPropagationTime "1"^^xsd:integer)
  AnnotationAssertion(:category :BlockPropagationTime "network-security"@en)
  )
      ```

  - ## About Block Propagation Time

  - Network distribution duration within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
