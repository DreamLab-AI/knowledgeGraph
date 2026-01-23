- ### OntologyBlock
  id:: totalsupply-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0533
    - filename-history:: ["BC-0533-totalsupply.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0533
    - preferred-term:: Total Supply
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: The total number of tokens that have been created, including all tokens in circulation plus those locked, reserved, or held by the project.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:TotalSupply
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Tokenomics]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :TotalSupply))
      (SubClassOf :TotalSupply :Tokenomics)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :TotalSupply "Total Supply"@en)
      (AnnotationAssertion rdfs:comment :TotalSupply
        "The total number of tokens that have been created, including all tokens in circulation plus those locked, reserved, or held by the project."@en)
      ```

- ## About Total Supply
  The total number of tokens that have been created, including all tokens in circulation plus those locked, reserved, or held by the project.
	
	### Implementation Across Blockchains
	The complete quantity of tokens that have been created for a cryptocurrency, including all tokens in circulation, held in reserve, locked, vested, or otherwise allocated, representing the maximum theoretical supply at any given moment. Exemplified by Bitcoin's hard-capped 21 million BTC (with approximately 19.5M already mined), Ethereum's uncapped but controlled supply (approximately 120M ETH post-Merge with net issuance influenced by EIP-1559 burning), Cardano's maximum 45 billion ADA, and Ripple's pre-mined 100 billion XRP, total supply serves as a fundamental tokenomics metric for assessing scarcity, calculating market capitalization, understanding monetary policy, and evaluating the relationship between available tokens and economic value.
	