- ### Definition
  - Smart contract execution is the deterministic, on-chain processing of immutable bytecode deployed at a blockchain address, triggered by an inbound transaction and evaluated by every validating node in the network. Execution occurs inside a sandboxed virtual machine—such as the Ethereum Virtual Machine (EVM)—which enforces gas metering to bound computation costs, ensures state isolation, and guarantees identical outputs across all nodes given the same inputs. Because execution is transparent and auditable, smart contracts can automate trustless multi-party agreements including token transfers, DeFi protocol logic, decentralised governance, and RWA settlement without relying on a central intermediary.

- ### Semantic Classification
  - owl-class:: smart-contract-execution:Smart Contract Execution
  - owl-role:: Concept

- ### Relationships
  - uses [[Smart Contract]]
  - uses [[Blockchain Transaction]]
  - requires [[Consensus Mechanism]]
  - requires [[Gas]]
  - enables [[Decentralised Finance]]

- ### Content
  - Smart contract execution on EVM-compatible networks proceeds as follows: a user submits a transaction specifying the target contract address, calldata encoding the function selector and arguments, and a gas limit. The network's consensus mechanism orders the transaction into a block; each validating node then replays execution of the contract bytecode in its local EVM instance, applying state transitions atomically. If execution runs out of gas, the state changes are reverted and gas consumed up to that point is not refunded.
  - Gas metering serves dual purposes: it prevents infinite loops (the halting problem) by requiring every opcode to consume gas, and it creates a fee market that compensates validators for computation. EIP-1559 introduced a base fee that adjusts dynamically with network congestion and is burned, coupled with a priority tip to validators, replacing the earlier first-price auction model.
  - Beyond the EVM, alternative smart contract runtimes include the Solana Virtual Machine (SVM) using the Berkeley Packet Filter (BPF) bytecode, Move-based VMs on Aptos and Sui, and Cosmos SDK modules that extend native chain logic. Cross-chain smart contract execution, enabled by protocols such as the Inter-Blockchain Communication (IBC) protocol and bridging solutions, allows contracts on one chain to invoke state changes on another. Formal verification tools—such as Certora Prover and Halmos—are increasingly used to mathematically prove correctness of smart contract logic before deployment, reducing the risk of exploitable bugs in high-value DeFi protocols.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z