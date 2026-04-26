iri:: http://narrativegoldmine.com/blockchain#DoubleSpending
uri:: urn:visionclaw:concept:blockchain:double-spending
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:double-spending
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Double Spending
content-hash:: sha256-12-48b45fbb65da
legacy-term-id:: BC-0076
status:: complete
maturity:: mature
quality-score:: 0.50
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-28T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Fraudulent duplicate payment within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:DoubleSpending
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

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

  - Fraudulent duplicate payment within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
