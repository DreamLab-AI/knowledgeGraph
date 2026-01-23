- ### OntologyBlock
  id:: deflationarytoken-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0522
    - filename-history:: ["BC-0522-deflationarytoken.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0522
    - preferred-term:: Deflationary Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A token with mechanisms that permanently remove tokens from circulation (burning), reducing total supply over time to create scarcity and potential value appreciation.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:DeflationaryToken
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Fungible Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :DeflationaryToken))
      (SubClassOf :DeflationaryToken :FungibleToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :DeflationaryToken "Deflationary Token"@en)
      (AnnotationAssertion rdfs:comment :DeflationaryToken
        "A token with mechanisms that permanently remove tokens from circulation (burning), reducing total supply over time to create scarcity and potential value appreciation."@en)
      ```

- ## About Deflationary Token
  A token with mechanisms that permanently remove tokens from circulation (burning), reducing total supply over time to create scarcity and potential value appreciation.
	
	### Implementation Across Blockchains
	A cryptocurrency or token with a decreasing supply over time through systematic token burning mechanisms, creating deflationary price pressure by permanently removing tokens from circulation. Implemented prominently in Ethereum's EIP-1559 (burning base transaction fees since August 2021), Binance Coin's quarterly burns (over $50B burned since 2017), MakerDAO's MKR governance token burns, and Terra's LUNA buyback-and-burn mechanism, deflationary tokenomics aim to increase scarcity, reduce supply, and create value appreciation as demand meets diminishing availability.
	
  
  Ethereum became deflationary post-EIP-1559 due to base fee burning exceeding issuance.
  
  ### Examples
  - Ethereum (net deflationary), BNB (quarterly burns)