- ### OntologyBlock
  id:: federatedbyzantinefaulttolerance-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0556
    - filename-history:: ["BC-0556-federatedbyzantinefaulttolerance.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0556
    - preferred-term:: Federated Byzantine Fault Tolerance
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A consensus mechanism enhancing scalability, speed, and security of blockchain networks by using a trusted set of federated nodes for consensus rather than the entire network.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:FederatedByzantineFaultTolerance
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Byzantine Fault Tolerance]]
    - also-known-as:: fBFT

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :FederatedByzantineFaultTolerance))
      (SubClassOf :FederatedByzantineFaultTolerance :ByzantineFaultTolerance)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :FederatedByzantineFaultTolerance "Federated Byzantine Fault Tolerance"@en)
      (AnnotationAssertion rdfs:comment :FederatedByzantineFaultTolerance
        "A consensus mechanism enhancing scalability, speed, and security of blockchain networks by using a trusted set of federated nodes for consensus rather than the entire network."@en)
      ```

- ## About Federated Byzantine Fault Tolerance
  A consensus mechanism enhancing scalability, speed, and security of blockchain networks by using a trusted set of federated nodes for consensus rather than the entire network.
  
  ### Examples
  - Stellar (SCP), Ripple