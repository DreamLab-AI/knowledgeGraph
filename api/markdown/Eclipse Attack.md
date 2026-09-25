An Eclipse Attack is a peer-to-peer network attack in which an adversary monopolises all of a target node's inbound and outbound connections, isolating it from the honest network. The eclipsed node is fed a fabricated view of the blockchain, enabling the attacker to double-spend against that node, delay its transaction confirmations, or waste its mining resources on a private fork. Countermeasures include connection diversity, random peer selection, and detecting network-level routing anomalies.

### Semantic Classification

### Content

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

## About Eclipse Attack

- Node isolation attack within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

### Key Characteristics

- 1. **Definitional Property**: Core defining characteristic
- 2. **Functional Property**: Operational behavior
- 3. **Structural Property**: Compositional elements
- 4. **Security Property**: Security guarantees provided
- 5. **Performance Property**: Efficiency considerations

### Technical Components

- **Implementation**: How concept is realized technically
- **Verification**: Methods for validating correctness
- **Interaction**: Relationships with other components
- **Constraints**: Technical limitations and requirements

### Use Cases

- **1. Core Blockchain Operation**
- **Application**: Fundamental blockchain functionality
- **Example**: Practical implementation in major blockchains
- **Requirements**: Technical prerequisites
- **Benefits**: Value provided to blockchain systems

### Standards & References

- [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
- [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
- [[NIST NISTIR]] - Blockchain and distributed ledger technologies

### Provenance

