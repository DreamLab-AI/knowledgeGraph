- ### OntologyBlock
  id:: marketcapitalization-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0535
    - filename-history:: ["BC-0535-marketcapitalization.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0535
    - preferred-term:: Market Capitalization
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: The total market value of a token calculated by multiplying circulating supply by current price. Primary metric for comparing token valuations.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:MarketCapitalization
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Tokenomics]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :MarketCapitalization))
      (SubClassOf :MarketCapitalization :Tokenomics)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :MarketCapitalization "Market Capitalization"@en)
      (AnnotationAssertion rdfs:comment :MarketCapitalization
        "The total market value of a token calculated by multiplying circulating supply by current price. Primary metric for comparing token valuations."@en)
      ```

- ## About Market Capitalization
  The total market value of a token calculated by multiplying circulating supply by current price. Primary metric for comparing token valuations.