- ### OntologyBlock
  id:: priorityfee-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0527
    - filename-history:: ["BC-0527-priorityfee.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0527
    - preferred-term:: Priority Fee
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: The optional additional payment beyond base fee that users can offer to block producers (validators/miners) to prioritize their transaction inclusion.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:PriorityFee
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Transaction Fee]]
    - also-known-as:: Tip

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :PriorityFee))
      (SubClassOf :PriorityFee :TransactionFee)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :PriorityFee "Priority Fee"@en)
      (AnnotationAssertion rdfs:comment :PriorityFee
        "The optional additional payment beyond base fee that users can offer to block producers (validators/miners) to prioritize their transaction inclusion."@en)
      ```

- ## About Priority Fee
  The optional additional payment beyond base fee that users can offer to block producers (validators/miners) to prioritize their transaction inclusion.
	
	### Implementation Across Blockchains
	Priority fee (also called miner tip or validator tip) is the optional additional gas price users pay above the base fee to incentivize faster transaction inclusion in Ethereum blocks following EIP-1559, paid directly to block producers as compensation for their work. Implemented in Ethereum, Polygon, Binance Smart Chain, Avalanche C-Chain, Arbitrum, Optimism, and all EIP-1559-compatible chains, priority fees are market-determined tips typically ranging from 1-5 gwei during normal conditions and surging to 50-200+ gwei during high network congestion. Unlike base fees which are burned, priority fees compensate validators directly and enable transaction prioritization through competitive market mechanisms, with higher tips ensuring faster block inclusion while maintaining the predictability benefits of algorithmic base fee pricing for overall transaction cost estimation.
	