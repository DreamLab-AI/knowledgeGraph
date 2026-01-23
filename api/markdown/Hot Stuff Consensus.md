- ### OntologyBlock
  id:: hotstuffconsensus-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0558
    - filename-history:: ["BC-0558-hotstuffconsensus.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0558
    - preferred-term:: HotStuff Consensus
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: The first state machine replication protocol with linear view transformation complexity and optimistic responsiveness, simplifying PBFT for better performance.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:HotStuffConsensus
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Byzantine Fault Tolerance]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :HotStuffConsensus))
      (SubClassOf :HotStuffConsensus :ByzantineFaultTolerance)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :HotStuffConsensus "HotStuff Consensus"@en)
      (AnnotationAssertion rdfs:comment :HotStuffConsensus
        "The first state machine replication protocol with linear view transformation complexity and optimistic responsiveness, simplifying PBFT for better performance."@en)
      ```

- ## About HotStuff Consensus
  The first state machine replication protocol with linear view transformation complexity and optimistic responsiveness, simplifying PBFT for better performance.
  
  ### Examples
  - Diem (formerly Libra), Flow blockchain