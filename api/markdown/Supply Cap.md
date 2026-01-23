- ### OntologyBlock
  id:: supplycap-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0529
    - filename-history:: ["BC-0529-supplycap.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0529
    - preferred-term:: Supply Cap
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A predetermined maximum limit on the total number of tokens that can ever exist, enforced by protocol rules.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:SupplyCap
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Tokenomics]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :SupplyCap))
      (SubClassOf :SupplyCap :Tokenomics)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :SupplyCap "Supply Cap"@en)
      (AnnotationAssertion rdfs:comment :SupplyCap
        "A predetermined maximum limit on the total number of tokens that can ever exist, enforced by protocol rules."@en)
      ```

- ## About Supply Cap
  A predetermined maximum limit on the total number of tokens that can ever exist, enforced by protocol rules.
  
  ### Examples
  - Bitcoin's 21 million BTC cap