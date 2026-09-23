
Miner extractable value, now more broadly termed maximal extractable value, is the profit that block producers (miners or validators) and other actors can capture by reordering, inserting or censoring transactions within the blocks they produce. Because the producer controls transaction ordering, they can exploit pending transactions in the mempool through strategies such as front-running, back-running and sandwich attacks, especially around decentralised exchanges. MEV has significant implications for fairness, network economics, censorship resistance and protocol design.

- ### Overview
  - MEV arises because whoever assembles a block has discretion over which transactions to include and in what order, and that discretion has monetary value. Searchers monitor the public mempool for profitable opportunities — arbitrage between exchanges, liquidations, or sandwiching a large swap — and bid for favourable placement, often paying block producers a share of the proceeds. Left unmanaged, MEV degrades user outcomes and centralises power; mitigations include private transaction relays, proposer-builder separation and encrypted mempools.
- ### Mechanisms
  - Transaction ordering as a source of value
  - Front-running, back-running and sandwich attacks
  - Searchers, builders and proposer-builder separation
  - Arbitrage and liquidation opportunities
  - Impact on fairness and censorship resistance
  - Mitigations: private relays, encrypted mempools
- ### Applications
  - Arbitrage across decentralised exchanges
  - Liquidation of undercollateralised positions
  - Designing MEV-resistant protocols and auctions
  - Analysing validator and miner incentives
  - Informing fee-market and ordering reforms
- ### Provenance

