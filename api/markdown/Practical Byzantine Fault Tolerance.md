- ### OntologyBlock
  id:: practicalbyzantinefaulttolerance-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0555
    - filename-history:: ["BC-0555-practicalbyzantinefaulttolerance.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0555
    - preferred-term:: Practical Byzantine Fault Tolerance
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A consensus algorithm providing high-performance Byzantine state machine replication, processing thousands of requests per second with sub-millisecond latency increases. Designed for asynchronous systems with low latency optimization.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:PracticalByzantineFaultTolerance
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Byzantine Fault Tolerance]]
    - also-known-as:: PBFT

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :PracticalByzantineFaultTolerance))
      (SubClassOf :PracticalByzantineFaultTolerance :ByzantineFaultTolerance)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :PracticalByzantineFaultTolerance "Practical Byzantine Fault Tolerance"@en)
      (AnnotationAssertion rdfs:comment :PracticalByzantineFaultTolerance
        "A consensus algorithm providing high-performance Byzantine state machine replication, processing thousands of requests per second with sub-millisecond latency increases. Designed for asynchronous systems with low latency optimization."@en)
      ```

- ## About Practical Byzantine Fault Tolerance
  A consensus algorithm providing high-performance Byzantine state machine replication, processing thousands of requests per second with sub-millisecond latency increases. Designed for asynchronous systems with low latency optimization.
  
  Introduced by Castro and Liskov (1999). Functions when malicious nodes < 1/3 of total. Three-phase protocol: pre-prepare, prepare, commit.
  
  ### Examples
  - Hyperledger Fabric (option), Zilliqa
  
  ### Historical Context
  - Seminal paper at OSDI 1999 made BFT practical for real-world systems.