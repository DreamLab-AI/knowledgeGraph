iri:: http://narrativegoldmine.com/blockchain#Halving
uri:: urn:visionclaw:concept:blockchain:halving
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:halving
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Halving
content-hash:: sha256-12-9e561be92b66
legacy-term-id:: BC-0103
status:: complete
maturity:: mature
quality-score:: 0.50
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-28T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Periodic reward reduction within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Halving
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[EconomicMechanism]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Halving))

  ## Subclass Relationships
  SubClassOf(:Halving :EconomicMechanism)
  SubClassOf(:Halving :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Halving
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Halving
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Halving "BC-0103"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Halving "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Halving "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Halving :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Halving :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Halving "Halving"@en)
  AnnotationAssertion(rdfs:comment :Halving
    "Periodic reward reduction"@en)
  AnnotationAssertion(dct:description :Halving
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Halving "BC-0103")
  AnnotationAssertion(:priority :Halving "1"^^xsd:integer)
  AnnotationAssertion(:category :Halving "economic-incentive"@en)
  )
      ```

  - ## About Halving

  - Periodic reward reduction within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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



  <!-- Merged from BC-0070-halving.md: ConsensusDomain, ConsensusProtocol, ProtocolLayer -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
