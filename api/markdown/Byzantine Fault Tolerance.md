- ### OntologyBlock
  id:: byzantinefaulttolerance-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0544
    - filename-history:: ["BC-0544-byzantinefaulttolerance.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0544
    - preferred-term:: Byzantine Fault Tolerance
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: The feature of a distributed network to reach consensus on the same value even when some nodes fail to respond or respond with incorrect information. Enables networks to function correctly despite malicious or faulty nodes comprising less than one-third of the network.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:ByzantineFaultTolerance
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Consensus Mechanism]]
    - also-known-as:: BFT

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ByzantineFaultTolerance))
      (SubClassOf :ByzantineFaultTolerance :ConsensusMechanism)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ByzantineFaultTolerance "Byzantine Fault Tolerance"@en)
      (AnnotationAssertion rdfs:comment :ByzantineFaultTolerance
        "The feature of a distributed network to reach consensus on the same value even when some nodes fail to respond or respond with incorrect information. Enables networks to function correctly despite malicious or faulty nodes comprising less than one-third of the network."@en)
      ```

- ## About Byzantine Fault Tolerance
  The feature of a distributed network to reach consensus on the same value even when some nodes fail to respond or respond with incorrect information. Enables networks to function correctly despite malicious or faulty nodes comprising less than one-third of the network.
  
  Solves the Byzantine Generals Problem. Functions correctly when malicious nodes < 1/3 of total nodes.
  
  ### Historical Context
  - Classical problem formalized by Lamport, Shostak, and Pease (1982). First practical implementation by Castro and Liskov (1999).