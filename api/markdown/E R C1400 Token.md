- ### OntologyBlock
  id:: erc1400token-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0518
    - filename-history:: ["BC-0518-erc1400token.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0518
    - preferred-term:: ERC-1400 Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A security token standard tailored for regulatory compliance, providing transfer restrictions, document management, and compliance hooks for securities law requirements.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:ERC1400Token
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Security Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ERC1400Token))
      (SubClassOf :ERC1400Token :SecurityToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ERC1400Token "ERC-1400 Token"@en)
      (AnnotationAssertion rdfs:comment :ERC1400Token
        "A security token standard tailored for regulatory compliance, providing transfer restrictions, document management, and compliance hooks for securities law requirements."@en)
      ```

- ## About ERC-1400 Token
  A security token standard tailored for regulatory compliance, providing transfer restrictions, document management, and compliance hooks for securities law requirements.
  
  ### Examples
  - Tokenized securities, regulated asset tokens