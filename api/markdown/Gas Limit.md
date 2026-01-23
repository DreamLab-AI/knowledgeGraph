- ### OntologyBlock
  id:: gas-limit-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0107
    - filename-history:: ["BC-0107-gas-limit.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0107
    - preferred-term:: Gas Limit
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: The maximum amount of computational work (measured in gas units) that a user is willing to allocate for transaction execution on Ethereum and EVM-compatible blockchains.
    - maturity:: mature
    - source:: Chimera Prime Research, Ethereum Documentation
    - authority-score:: 0.86

  - **Semantic Classification**
    - owl:class:: bc:GasLimit
    - owl:physicality:: ConceptualEntity
    - owl:role:: Concept
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Resource Control]]
    - is-subclass-of:: [[Transaction Parameter]]
    - related-to:: [[Gas Price]]
    - related-to:: [[Transaction Fee]]
    - related-to:: [[Base Fee]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :GasLimit))
      (SubClassOf :GasLimit :ResourceControl)
      (SubClassOf :GasLimit :TransactionParameter)

      ; Object Properties
      (ObjectPropertyAssertion :implementedBy :GasLimit :Ethereum)
      (ObjectPropertyAssertion :implementedBy :GasLimit :BinanceSmartChain)
      (ObjectPropertyAssertion :implementedBy :GasLimit :Polygon)
      (ObjectPropertyAssertion :implementedBy :GasLimit :Arbitrum)
      (ObjectPropertyAssertion :implementedBy :GasLimit :Optimism)

      ; Annotations
      (AnnotationAssertion rdfs:label :GasLimit "Gas Limit"@en)
      (AnnotationAssertion rdfs:comment :GasLimit
        "Maximum computational work allocation for transaction execution on EVM blockchains."@en)
      ```

- ## About Gas Limit
  The maximum amount of computational work that a user authorizes for a blockchain transaction, acting as a safety mechanism and cost control measure.

	### Implementation Across Blockchains
	Gas limit is the maximum amount of computational work (measured in gas units) that a user is willing to allocate for transaction execution on Ethereum and EVM-compatible blockchains, acting as a safety mechanism to prevent runaway execution and control transaction costs. Implemented universally across Ethereum (with dynamic per-block gas limit around 30 million gas), Binance Smart Chain, Polygon, Arbitrum, Optimism, and all EVM chains, gas limit is user-defined for individual transactions (simple ETH transfers use 21,000 gas, complex smart contract interactions may require 100,000-500,000+ gas) and dynamically adjusted by validators for block-level capacity. Unused gas is refunded to users, while insufficient gas limits cause transaction failure without state changes, enabling predictable cost control and protecting against infinite loops in smart contract execution.

	### Key Characteristics
	- **Transaction-Level Control**: Users specify gas limit per transaction
	- **Block-Level Capacity**: Network enforces maximum gas per block
	- **Refund Mechanism**: Unused gas returned to sender
	- **Failure Protection**: Insufficient gas causes transaction reversion
	- **Cost Predictability**: Enables users to cap maximum transaction costs

	### Common Gas Limits
	- **Simple ETH Transfer**: 21,000 gas
	- **ERC-20 Transfer**: ~65,000 gas
	- **Complex Smart Contract**: 100,000-500,000+ gas
	- **Block Gas Limit (Ethereum)**: ~30 million gas

	### Related Concepts
	- [[Gas Price]] - Cost per unit of gas
	- [[Transaction Fee]] - Total cost (gas limit × gas price)
	- [[Base Fee]] - Minimum gas price in EIP-1559
	- [[Priority Fee]] - Additional tip for faster inclusion
