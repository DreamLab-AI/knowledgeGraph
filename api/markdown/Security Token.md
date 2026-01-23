- ### OntologyBlock
  id:: securitytoken-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0513
    - filename-history:: ["BC-0513-securitytoken.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0513
    - preferred-term:: Security Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A token designed to represent complete or fractional ownership interests in assets and/or entities. Subject to restrictions based on identity, jurisdiction, and asset category, and regulated by securities laws providing investors with entitlements like dividends, profit-sharing, or voting privileges.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:SecurityToken
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Fungible Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :SecurityToken))
      (SubClassOf :SecurityToken :FungibleToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :SecurityToken "Security Token"@en)
      (AnnotationAssertion rdfs:comment :SecurityToken
        "A token designed to represent complete or fractional ownership interests in assets and/or entities. Subject to restrictions based on identity, jurisdiction, and asset category, and regulated by securities laws providing investors with entitlements like dividends, profit-sharing, or voting privileges."@en)
      ```

- ## About Security Token
  A token designed to represent complete or fractional ownership interests in assets and/or entities. Subject to restrictions based on identity, jurisdiction, and asset category, and regulated by securities laws providing investors with entitlements like dividends, profit-sharing, or voting privileges.
  
  Represents equity, real estate, debt, or other securities. Standards like ERC-1400 and ERC-3643 tailored for regulatory compliance.
  
  ### Examples
  - Tokenized company shares, real estate tokens, tokenized bonds