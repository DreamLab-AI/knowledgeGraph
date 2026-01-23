- ### OntologyBlock
  id:: utilitytoken-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0574
    - filename-history:: ["BC-0574-utilitytoken.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0574
    - preferred-term:: Utility Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Tokens providing access to services.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:UtilityToken
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Cryptocurrency Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :UtilityToken))
      (SubClassOf :UtilityToken :CryptocurrencyToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :UtilityToken "Utility Token"@en)
      (AnnotationAssertion rdfs:comment :UtilityToken
        "Tokens providing access to services."@en)
      ```

- ## About Utility Token
  Tokens providing access to services.