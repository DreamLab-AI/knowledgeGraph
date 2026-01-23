- ### OntologyBlock
  id:: paymenttoken-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0575
    - filename-history:: ["BC-0575-paymenttoken.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0575
    - preferred-term:: Payment Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Tokens used for payments.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:PaymentToken
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Cryptocurrency Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :PaymentToken))
      (SubClassOf :PaymentToken :CryptocurrencyToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :PaymentToken "Payment Token"@en)
      (AnnotationAssertion rdfs:comment :PaymentToken
        "Tokens used for payments."@en)
      ```

- ## About Payment Token
  Tokens used for payments.