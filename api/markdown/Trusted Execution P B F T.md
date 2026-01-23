- ### OntologyBlock
  id:: trustedexecutionpbft-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0561
    - filename-history:: ["BC-0561-trustedexecutionpbft.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0561
    - preferred-term:: Trusted Execution PBFT
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A parallel Byzantine Fault Tolerance protocol leveraging Trusted Execution Environments (TEEs), utilizing a Unique Sequential Identifier Generator (USIG) based on Intel Software Guard Extensions (SGX).
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:TrustedExecutionPBFT
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Practical Byzantine Fault Tolerance]]
    - also-known-as:: TEP-BFT

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :TrustedExecutionPBFT))
      (SubClassOf :TrustedExecutionPBFT :PracticalByzantineFaultTolerance)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :TrustedExecutionPBFT "Trusted Execution PBFT"@en)
      (AnnotationAssertion rdfs:comment :TrustedExecutionPBFT
        "A parallel Byzantine Fault Tolerance protocol leveraging Trusted Execution Environments (TEEs), utilizing a Unique Sequential Identifier Generator (USIG) based on Intel Software Guard Extensions (SGX)."@en)
      ```

- ## About Trusted Execution PBFT
  A parallel Byzantine Fault Tolerance protocol leveraging Trusted Execution Environments (TEEs), utilizing a Unique Sequential Identifier Generator (USIG) based on Intel Software Guard Extensions (SGX).