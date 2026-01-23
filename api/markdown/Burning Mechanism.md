- ### OntologyBlock
  id:: burningmechanism-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0531
    - filename-history:: ["BC-0531-burningmechanism.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0531
    - preferred-term:: Burning Mechanism
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A process that permanently removes tokens from circulation by sending them to unspendable addresses or destroying them, reducing total supply.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:BurningMechanism
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Tokenomics]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :BurningMechanism))
      (SubClassOf :BurningMechanism :Tokenomics)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :BurningMechanism "Burning Mechanism"@en)
      (AnnotationAssertion rdfs:comment :BurningMechanism
        "A process that permanently removes tokens from circulation by sending them to unspendable addresses or destroying them, reducing total supply."@en)
      ```

- ## About Burning Mechanism
  A process that permanently removes tokens from circulation by sending them to unspendable addresses or destroying them, reducing total supply.
	
	### Implementation Across Blockchains
	The permanent and irreversible removal of cryptocurrency tokens from circulation by sending them to provably unspendable addresses (burn addresses), reducing total supply and creating deflationary pressure. Implemented through diverse mechanisms including Ethereum's EIP-1559 base fee burning (over 2.5M ETH burned since August 2021), Binance's quarterly BNB burns based on trading volume and profits, Shiba Inu's community-driven burn portals, proof-of-burn consensus protocols, transaction fee burning in layer-1 blockchains, and smart contract-triggered automatic burns, the burning mechanism serves as a core deflationary tool for managing token economics, reducing inflation, and increasing scarcity to support long-term value appreciation.
	
  
  ### Examples
  - EIP-1559 base fee burning, BNB quarterly burns, buyback-and-burn programs