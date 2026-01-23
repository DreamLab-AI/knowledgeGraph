- ### OntologyBlock
  id:: stablecointoken-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0514
    - filename-history:: ["BC-0514-stablecointoken.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0514
    - preferred-term:: Stablecoin Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A token designed to maintain stable value by pegging to external assets like fiat currencies, commodities, or using algorithmic mechanisms.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:StablecoinToken
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Fungible Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :StablecoinToken))
      (SubClassOf :StablecoinToken :FungibleToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :StablecoinToken "Stablecoin Token"@en)
      (AnnotationAssertion rdfs:comment :StablecoinToken
        "A token designed to maintain stable value by pegging to external assets like fiat currencies, commodities, or using algorithmic mechanisms."@en)
      ```

- ## About Stablecoin Token
  A token designed to maintain stable value by pegging to external assets like fiat currencies, commodities, or using algorithmic mechanisms.
  
  ### Examples
  - USDC (fiat-backed), DAI (crypto-collateralized), USDT (Tether)