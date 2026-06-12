- ### Definition
  - Arbitrum is a family of Ethereum layer-2 scaling solutions developed by Offchain Labs that use optimistic rollup technology to increase transaction throughput and reduce fees. Its flagship network, Arbitrum One, launched on mainnet in 2021 and executes transactions in a custom virtual machine while posting transaction data and state commitments to Ethereum. Arbitrum's interactive multi-round fraud-proof protocol distinguishes it from other optimistic rollups by narrowing disputes to a single instruction before on-chain resolution. The ARB token governs the network through the Arbitrum DAO, and Arbitrum Nitro and Orbit extend the technology to custom chains.

- ### Semantic Classification
  - owl-class:: bc:Arbitrum
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Optimism]], [[zkSync]], [[Polygon]]
  - requires:: [[Ethereum Smart Contract Platform]], [[Rollup]], [[Fraud Proof]]
  - enables:: [[Decentralised Finance Domain]]

- ### Content
  - Arbitrum scales Ethereum by moving computation and state off the base layer while still settling on it. Transactions are sequenced and executed off-chain, and batches of data are posted to Ethereum so that the layer-2 state can be reconstructed and verified by anyone. Because the system is optimistic, results are accepted unless a validator submits a fraud proof during the challenge window.
  - Its dispute mechanism uses interactive bisection: when two parties disagree about a computation, they repeatedly narrow the disagreement until it concerns a single virtual-machine step, which Ethereum then adjudicates cheaply. The Nitro upgrade replaced the original custom VM stack with a system that compiles to WebAssembly and reuses the standard Geth execution engine for closer Ethereum compatibility.
  - Arbitrum is one of the largest layer-2 networks by total value locked and hosts many decentralised finance protocols. The Orbit framework lets developers deploy application-specific chains that settle to Arbitrum One or Nova, extending the rollup design to bespoke environments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z