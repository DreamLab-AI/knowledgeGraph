iri:: http://narrativegoldmine.com/blockchain#BaseFee
uri:: urn:visionclaw:concept:blockchain:base-fee
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:base-fee
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Base Fee
content-hash:: sha256-12-4e03f487d733
legacy-term-id:: BC-0108
status:: complete
maturity:: mature
quality-score:: 0.50
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-28T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Minimum transaction fee within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:BaseFee
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[EconomicMechanism]]
  - bridges-to:: [[Virtual Economy]]

- ### Content

  ## Class Declaration
  Declaration(Class(:BaseFee))

  ## Subclass Relationships
  SubClassOf(:BaseFee :EconomicMechanism)
  SubClassOf(:BaseFee :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:BaseFee
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:BaseFee
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :BaseFee "BC-0108"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :BaseFee "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :BaseFee "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :BaseFee :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :BaseFee :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :BaseFee "Base Fee"@en)
  AnnotationAssertion(rdfs:comment :BaseFee
    "Minimum transaction fee"@en)
  AnnotationAssertion(dct:description :BaseFee
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :BaseFee "BC-0108")
  AnnotationAssertion(:priority :BaseFee "1"^^xsd:integer)
  AnnotationAssertion(:category :BaseFee "economic-incentive"@en)
  )
      ```

  - ## About Base Fee

  - Minimum transaction fee within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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



  <!-- Merged from BC 0108 base fee.md: MetaverseDomain -->


  <!-- Merged from Base Fee.md: Blockchain, Transaction Fee -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
