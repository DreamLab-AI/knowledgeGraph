- ### OntologyBlock
  id:: basefee-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0526
    - filename-history:: ["BC-0526-basefee.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0526
    - preferred-term:: Base Fee
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: The minimum gas price per unit required for transaction inclusion in a block, introduced by EIP-1559. Dynamically adjusts based on block gas usage, increasing if blocks exceed target size and decreasing if below target. Base fee is burned, not transferred to validators.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:BaseFee
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Transaction Fee]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :BaseFee))
      (SubClassOf :BaseFee :TransactionFee)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :BaseFee "Base Fee"@en)
      (AnnotationAssertion rdfs:comment :BaseFee
        "The minimum gas price per unit required for transaction inclusion in a block, introduced by EIP-1559. Dynamically adjusts based on block gas usage, increasing if blocks exceed target size and decreasing if below target. Base fee is burned, not transferred to validators."@en)
      ```

- ## About Base Fee
  The minimum gas price per unit required for transaction inclusion in a block, introduced by EIP-1559. Dynamically adjusts based on block gas usage, increasing if blocks exceed target size and decreasing if below target. Base fee is burned, not transferred to validators.
	
	### Implementation Across Blockchains
	Base fee is the algorithmically determined minimum gas price required for transaction inclusion in Ethereum blocks following the EIP-1559 upgrade (London hard fork, August 2021), dynamically adjusting based on network congestion with up to 12.5% changes per block rather than auction-based pricing. Implemented in Ethereum, Polygon, Binance Smart Chain (post-upgrade), Avalanche C-Chain, and other EIP-1559-compatible chains, base fee increases when blocks exceed 50% capacity and decreases when below, with all base fees burned (permanently removed from circulation) rather than paid to validators. This mechanism has burned over 3 million ETH since implementation, creates deflationary pressure on token supply, provides predictable transaction pricing through algorithmic adjustment, and separates minimum cost from validator incentivization (priority fees).
	
  
  Creates deflationary pressure by permanently removing ETH from circulation.