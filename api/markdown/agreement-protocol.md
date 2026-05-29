- ### Definition
  An Agreement Protocol is a distributed protocol specifically designed to enable multiple independent nodes to reach consensus on a single value, decision, or sequence of events despite the presence of failures, network asynchrony, and potentially malicious participants. Agreement protocols must satisfy safety (all honest nodes agree on the same value), liveness (the protocol eventually terminates), and validity (the agreed value was proposed by some participant), and their design space is constrained by impossibility results such as the FLP theorem and Byzantine Agreement bounds requiring at least 3f+1 nodes to tolerate f Byzantine failures.

- ### Semantic Classification
  - owl-class:: blockchain:AgreementProtocol
  - owl-role:: Concept
  - owl-inferred:: ConceptualConcept
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Distributed Protocol]]
  - hasPart:: [[Consensus Mechanism]], [[Consensus Algorithm]]
  - requires:: [[Distributed Systems]], [[Fault Tolerance]], [[Byzantine Fault Tolerance]]
  - enables:: [[Finality]], [[Blockchain Protocol]], [[Blockchain Governance]]
  - implements:: [[Nakamoto Consensus]]
  - relatedTo:: [[Node]], [[Validator Node]], [[Blockchain Network]], [[Blockchain Scalability]]

- ### Content

  ## Class Declaration
  Declaration(Class(:AgreementProtocol))

  ## Subclass Relationships
  SubClassOf(:AgreementProtocol :DistributedProtocol)

  ## Fundamental Agreement Properties
  SubClassOf(:AgreementProtocol
    (DataHasValue :ensuresSafety "true"^^xsd:boolean))

  SubClassOf(:AgreementProtocol
    (DataHasValue :ensuresLiveness "true"^^xsd:boolean))

  SubClassOf(:AgreementProtocol
    (DataHasValue :ensuresValidity "true"^^xsd:boolean))

  ## Byzantine Fault Tolerance
  SubClassOf(:AgreementProtocol
    (DataSomeValuesFrom :hasByzantineThreshold xsd:decimal))

  SubClassOf(:AgreementProtocol
    (DataSomeValuesFrom :requiresMinimumNodes xsd:positiveInteger))

  ## Agreement Characteristics
  SubClassOf(:AgreementProtocol
    (ObjectSomeValuesFrom :reachesAgreementOn :AgreementValue))

  SubClassOf(:AgreementProtocol
    (DataSomeValuesFrom :hasFinality xsd:string))

  ## Data Properties
  DataPropertyAssertion(:hasByzantineThreshold :AgreementProtocol xsd:decimal)
  DataPropertyAssertion(:requiresMinimumNodes :AgreementProtocol xsd:positiveInteger)
  DataPropertyAssertion(:hasFinality :AgreementProtocol xsd:string)
  DataPropertyAssertion(:hasRounds :AgreementProtocol xsd:positiveInteger)
  DataPropertyAssertion(:hasTimeToFinality :AgreementProtocol xsd:duration)
  DataPropertyAssertion(:isDeterministic :AgreementProtocol xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:reachesAgreementOn :AgreementProtocol :AgreementValue)
  ObjectPropertyAssertion(:requires :AgreementProtocol :SynchronyAssumption)
  ObjectPropertyAssertion(:employs :AgreementProtocol :AgreementTechnique)
  ObjectPropertyAssertion(:achieves :AgreementProtocol :ConsensusProperty)

  ## Property Characteristics
  ObjectPropertyDomain(:reachesAgreementOn :AgreementProtocol)
  ObjectPropertyRange(:reachesAgreementOn :AgreementValue)

  FunctionalDataProperty(:hasByzantineThreshold)
  FunctionalDataProperty(:hasFinality)

  ## Annotations
  AnnotationAssertion(rdfs:label :AgreementProtocol "Agreement Protocol"@en)
  AnnotationAssertion(rdfs:comment :AgreementProtocol
    "Distributed protocol enabling independent nodes to reach consensus on shared values"@en)
  AnnotationAssertion(dct:description :AgreementProtocol
    "Protocol satisfying safety, liveness, and validity for distributed consensus"@en)
  AnnotationAssertion(:termID :AgreementProtocol "PC-0007")
  AnnotationAssertion(:authorityScore :AgreementProtocol "0.95"^^xsd:decimal)
  AnnotationAssertion(dct:created :AgreementProtocol "2025-11-08"^^xsd:date)
  AnnotationAssertion(skos:definition :AgreementProtocol
    "Distributed protocol for reaching consensus on values despite failures and malicious participants"@en)

  ## Protocol Categories by Synchrony Model
  SubClassOf(:AgreementProtocol
    (ObjectUnionOf :SynchronousAgreement :AsynchronousAgreement :PartiallySynchronousAgreement))

  ## Protocol Categories by Failure Model
  SubClassOf(:AgreementProtocol
    (ObjectUnionOf :CrashFaultTolerant :ByzantineFaultTolerant))

  ## Finality Types
  SubClassOf(:AgreementProtocol
    (DataHasValue :hasFinality
      (DataOneOf("deterministic" "probabilistic" "economic" "instant"))))

  ## Safety and Liveness Guarantees
  SubClassOf(:AgreementProtocol
    (DataMinCardinality 1 :ensuresSafety))

  SubClassOf(:AgreementProtocol
    (DataMinCardinality 1 :ensuresLiveness))
  )
      ```

  - ## About Agreement Protocol

  Agreement protocols are the theoretical infrastructure on which all blockchain consensus mechanisms are built. The canonical formulation originates with Lamport, Shostak, and Pease's 1982 Byzantine Generals Problem, which formalised the challenge of coordinating action among distributed parties when some participants may send contradictory messages. This abstraction maps directly onto the blockchain setting: validator nodes must agree on a canonical transaction ordering without any node being able to unilaterally determine the outcome, and despite some fraction of nodes potentially behaving arbitrarily.

  The classification of agreement protocols proceeds along two axes. The first is the failure model: crash-fault-tolerant (CFT) protocols such as Paxos and Raft tolerate nodes that stop responding but assume those that do respond are honest; Byzantine fault-tolerant (BFT) protocols such as PBFT, Tendermint, and HotStuff additionally tolerate nodes that send arbitrary, malicious messages. BFT protocols require at least 3f+1 total nodes to tolerate f Byzantine failures (versus 2f+1 for CFT), because a coalition of f malicious nodes must never be able to exceed the honest majority. The second axis is the synchrony assumption: synchronous protocols assume bounded message delays and can achieve consensus deterministically; asynchronous protocols make no timing assumptions but (by the FLP theorem) cannot guarantee termination with deterministic algorithms; partially synchronous protocols assume that the network eventually behaves synchronously, allowing practical deterministic protocols that are live under normal conditions and safe under all conditions.

  Blockchain deployments select agreement protocols based on the trade-offs between throughput, latency, finality guarantee, committee size, and decentralisation. Nakamoto consensus (Bitcoin) achieves massive decentralisation and probabilistic finality via proof-of-work, at the cost of high latency (6+ confirmation blocks, ~60 minutes) and energy expenditure. BFT-family protocols used in permissioned blockchains and proof-of-stake chains (Tendermint, Casper FFG, HotStuff) achieve instant deterministic finality in one to two seconds but at the cost of bounded committee sizes and communication overhead that grows with validator count. Research into scalable agreement protocols—sharding, threshold BLS aggregation, DAG-based consensus, and asynchronous BFT—aims to close this gap, enabling large decentralised validator sets with sub-second finality.

- ### Provenance
  - sources:: [[Byzantine Agreement Papers]], [[FLP Impossibility]], [[Paxos and Raft Consensus]], [[PBFT Algorithm]]
  - migration-date:: 2026-04-26T00:00:00Z