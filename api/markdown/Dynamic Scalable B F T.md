- ### OntologyBlock
  id:: dynamicscalablebft-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0559
    - filename-history:: ["BC-0559-dynamicscalablebft.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0559
    - preferred-term:: Dynamic Scalable BFT
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: An optimized SBFT protocol using Distributed Key Generation (DKG) technology and BLS aggregate signature scheme for enhanced scalability with dynamic node management.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:DynamicScalableBFT
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Practical Byzantine Fault Tolerance]]
    - also-known-as:: D-SBFT

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :DynamicScalableBFT))
      (SubClassOf :DynamicScalableBFT :PracticalByzantineFaultTolerance)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :DynamicScalableBFT "Dynamic Scalable BFT"@en)
      (AnnotationAssertion rdfs:comment :DynamicScalableBFT
        "An optimized SBFT protocol using Distributed Key Generation (DKG) technology and BLS aggregate signature scheme for enhanced scalability with dynamic node management."@en)
      ```

- ## About Dynamic Scalable BFT
  An optimized SBFT protocol using Distributed Key Generation (DKG) technology and BLS aggregate signature scheme for enhanced scalability with dynamic node management.
  
  2025 advancement addressing dynamic validator sets in permissioned blockchains.