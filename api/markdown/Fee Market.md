- ### OntologyBlock
  id:: feemarket-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0528
    - filename-history:: ["BC-0528-feemarket.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0528
    - preferred-term:: Fee Market
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: The economic mechanism determining transaction fees through supply and demand dynamics, where users bid for limited block space.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:FeeMarket
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Tokenomics]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :FeeMarket))
      (SubClassOf :FeeMarket :Tokenomics)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :FeeMarket "Fee Market"@en)
      (AnnotationAssertion rdfs:comment :FeeMarket
        "The economic mechanism determining transaction fees through supply and demand dynamics, where users bid for limited block space."@en)
      ```

- ## About Fee Market
  The economic mechanism determining transaction fees through supply and demand dynamics, where users bid for limited block space.
	
	### Implementation Across Blockchains
	Fee market is the economic mechanism and price discovery system for blockchain transaction fees, where users competitively bid for limited block space through dynamic pricing to achieve desired transaction inclusion speeds and ordering. Implemented across all major blockchains including Bitcoin's auction-based mempool system (satoshi-per-byte bidding), Ethereum's EIP-1559 hybrid model (combining algorithmic base fees with market-driven priority fees), Binance Smart Chain, Polygon, Solana's priority fee systems, and Arbitrum/Optimism Layer-2 solutions, fee markets balance supply (block capacity measured in gas or bytes) with demand (transaction volume) to achieve efficient resource allocation. The market mechanism enables price discovery through congestion-based dynamics (fees rising during high demand to 100+ gwei and falling to <1 gwei during low usage), spam prevention through economic costs, validator incentivization, and predictable transaction ordering while adapting to varying network conditions and user urgency requirements.
	
  
  EIP-1559 improved fee market by introducing base fee mechanism for better price discovery.