- ### Definition
  A Permissioned Network is a distributed ledger architecture in which participation—whether as a validator, transaction submitter, or read-only observer—is restricted to entities that have been explicitly authorised by a governing body or membership protocol. Unlike public blockchains, nodes must satisfy identity verification, legal agreement, or technical credentialing requirements before joining, enabling stronger privacy guarantees, higher throughput, and deterministic finality than open networks while sacrificing censorship resistance. Permissioned networks are the dominant choice for enterprise and consortium deployments such as trade finance, healthcare data exchange, and central-bank digital currency infrastructure.

- ### Semantic Classification
  - owl-class:: blockchain:PermissionedNetwork
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]
  - requires:: [[Access Control]], [[Identity Management]]
  - enables:: [[Blockchain Governance]], [[Blockchain Compliance]]
  - uses:: [[Consensus Mechanism]], [[Smart Contract]]
  - hasPart:: [[Validator Node]]
  - contrastsWith:: [[Public Blockchain]]
  - relatedTo:: [[Private Blockchain]], [[Distributed Ledger Technology]], [[Blockchain Interoperability]]

- ### Content

  ## Class Declaration
  Declaration(Class(:PermissionedNetwork))

  ## Subclass Relationships
  SubClassOf(:PermissionedNetwork :NetworkComponent)
  SubClassOf(:PermissionedNetwork :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PermissionedNetwork
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PermissionedNetwork
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PermissionedNetwork "BC-0091"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PermissionedNetwork "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PermissionedNetwork "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PermissionedNetwork :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PermissionedNetwork :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PermissionedNetwork "Permissioned Network"@en)
  AnnotationAssertion(rdfs:comment :PermissionedNetwork
    "Restricted access blockchain"@en)
  AnnotationAssertion(dct:description :PermissionedNetwork
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PermissionedNetwork "BC-0091")
  AnnotationAssertion(:priority :PermissionedNetwork "1"^^xsd:integer)
  AnnotationAssertion(:category :PermissionedNetwork "network-security"@en)
  )
      ```

  - ## About Permissioned Network

  A Permissioned Network sits at the intersection of traditional enterprise IT governance and decentralised ledger technology. The core design premise is that not all blockchain use cases benefit from open participation: where nodes are already known counterparties—banks in a payment network, hospitals in a health data consortium, or ministries in a government interoperability initiative—the overhead of global proof-of-work or proof-of-stake consensus is unnecessary and the privacy implications of a public ledger are unacceptable.

  Access control is the defining mechanism. Membership services—such as those provided by Hyperledger Fabric's Certificate Authority or R3 Corda's Doorman—issue cryptographic certificates to approved nodes, and the consensus layer rejects any message not bearing a valid certificate. This allows the network operator to enforce regulatory requirements, conduct KYC checks, and revoke nodes that violate terms of service, none of which are possible on a fully public chain.

  The trade-off is centralisation risk: if the membership authority is compromised or acts maliciously, it can exclude legitimate participants or admit bad actors. Well-designed permissioned networks mitigate this through multi-party governance—requiring a threshold of existing members to approve new joiners—and through smart-contract-encoded governance rules that limit unilateral operator power.

  Performance characteristics of permissioned networks substantially exceed those of public chains. With a known, bounded validator set, BFT-derived consensus algorithms such as Raft or PBFT variants can achieve thousands of transactions per second with sub-second finality, compared to the minutes-to-hours probabilistic finality of proof-of-work networks. This performance profile makes permissioned networks practical for high-frequency enterprise workflows including real-time gross settlement, intraday liquidity management, and IoT sensor data provenance.
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z