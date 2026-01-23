- ### OntologyBlock
  id:: erc3643token-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0519
    - filename-history:: ["BC-0519-erc3643token.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0519
    - preferred-term:: ERC-3643 Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A permissioned token standard for security tokens with on-chain identity verification and compliance rules, enabling compliant transfer restrictions based on investor identity and jurisdiction.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:ERC3643Token
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Security Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ERC3643Token))
      (SubClassOf :ERC3643Token :SecurityToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ERC3643Token "ERC-3643 Token"@en)
      (AnnotationAssertion rdfs:comment :ERC3643Token
        "A permissioned token standard for security tokens with on-chain identity verification and compliance rules, enabling compliant transfer restrictions based on investor identity and jurisdiction."@en)
      ```

- ## About ERC-3643 Token
  A permissioned token standard for security tokens with on-chain identity verification and compliance rules, enabling compliant transfer restrictions based on investor identity and jurisdiction.