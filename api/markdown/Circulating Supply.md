- ### OntologyBlock
  id:: circulatingsupply-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0534
    - filename-history:: ["BC-0534-circulatingsupply.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0534
    - preferred-term:: Circulating Supply
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: The number of tokens available for trading and in public hands, excluding locked, reserved, or unvested tokens.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:CirculatingSupply
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Tokenomics]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :CirculatingSupply))
      (SubClassOf :CirculatingSupply :Tokenomics)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :CirculatingSupply "Circulating Supply"@en)
      (AnnotationAssertion rdfs:comment :CirculatingSupply
        "The number of tokens available for trading and in public hands, excluding locked, reserved, or unvested tokens."@en)
      ```

- ## About Circulating Supply
  The number of tokens available for trading and in public hands, excluding locked, reserved, or unvested tokens.
  
  Used for market capitalization calculations.