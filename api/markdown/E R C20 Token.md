- ### OntologyBlock
  id:: erc20token-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0515
    - filename-history:: ["BC-0515-erc20token.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0515
    - preferred-term:: ERC-20 Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A fungible token implementing the ERC-20 standard on Ethereum blockchain. The most widely used Ethereum token standard providing uniform API for token operations within smart contracts.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:ERC20Token
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Fungible Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ERC20Token))
      (SubClassOf :ERC20Token :FungibleToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ERC20Token "ERC-20 Token"@en)
      (AnnotationAssertion rdfs:comment :ERC20Token
        "A fungible token implementing the ERC-20 standard on Ethereum blockchain. The most widely used Ethereum token standard providing uniform API for token operations within smart contracts."@en)
      ```

- ## About ERC-20 Token
  A fungible token implementing the ERC-20 standard on Ethereum blockchain. The most widely used Ethereum token standard providing uniform API for token operations within smart contracts.
  
  Standard methods: transfer, balanceOf, approve, allowance, transferFrom, totalSupply. Events: Transfer, Approval.
  
  ### Examples
  - USDC, LINK, UNI, DAI
  
  ### Historical Context
  - Proposed by Fabian Vogelsteller in 2015 as EIP-20.