- ### OntologyBlock
  id:: gasprice-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0525
    - filename-history:: ["BC-0525-gasprice.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0525
    - preferred-term:: Gas Price
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: The amount of native token a user is willing to pay per unit of gas to execute a transaction on Ethereum and EVM-compatible chains.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:GasPrice
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Transaction Fee]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :GasPrice))
      (SubClassOf :GasPrice :TransactionFee)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :GasPrice "Gas Price"@en)
      (AnnotationAssertion rdfs:comment :GasPrice
        "The amount of native token a user is willing to pay per unit of gas to execute a transaction on Ethereum and EVM-compatible chains."@en)
      ```

- ## About Gas Price
  The amount of native token a user is willing to pay per unit of gas to execute a transaction on Ethereum and EVM-compatible chains.
	
	### Implementation Across Blockchains
	Gas price is the cost per unit of computational work (measured in gas) that users are willing to pay for transaction execution on Ethereum and EVM-compatible blockchains, denominated in gwei (1 gwei = 0.000000001 ETH or 1 billion wei). Implemented in Ethereum, Binance Smart Chain, Polygon, Avalanche C-Chain, Arbitrum, Optimism, and all EVM-compatible networks, gas price fluctuates dynamically based on network congestion and user demand, with higher prices incentivizing faster transaction inclusion by validators. Post-EIP-1559, gas price comprises base fee (algorithmically determined and burned) plus priority fee (validator tip), enabling more predictable transaction costs while maintaining market-based prioritization mechanisms for efficient resource allocation.
	