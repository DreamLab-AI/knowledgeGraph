---
okf_version: "0.2"
type: Class
title: Smart Contract Execution
resource: urn:ngm:class:smart-contract-execution
domain: blockchain
description: "Smart contract execution is the deterministic, on-chain processing of immutable bytecode deployed at a specific blockchain address, triggered by an inbound transaction and evaluated identically by every validating node in the network. Execution occurs within a sandboxed virtual machine—such as the Ethereum Virtual Machine (EVM) or Solana Virtual Machine (SVM)—which enforces gas or fee metering to "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:gas
  - urn:ngm:class:blockchain-node
  - urn:ngm:class:cryptographic-signature
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:token-transfer
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:cross-chain-messaging
dependsOn:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:state-machine
  - urn:ngm:class:merkle-tree
implements:
  - urn:ngm:class:solidity
  - urn:ngm:class:eip-1559
contrastsWith:
  - urn:ngm:class:traditional-contract
  - urn:ngm:class:centralised-execution
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:tee
  - urn:ngm:class:decentralised-ai-inference
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:bytecode
  - urn:ngm:class:application-binary-interface
supports:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:oracle-network
relatedTo:
  - urn:ngm:class:smart-contract-audit
  - urn:ngm:class:mev
  - urn:ngm:class:inter-blockchain-communication
  - urn:ngm:class:mev
---

# Smart Contract Execution

Smart contract execution is the deterministic, on-chain processing of immutable bytecode deployed at a specific blockchain address, triggered by an inbound transaction and evaluated identically by every validating node in the network. Execution occurs within a sandboxed virtual machine—such as the Ethereum Virtual Machine (EVM) or Solana Virtual Machine (SVM)—which enforces gas or fee metering to bound computation costs, maintains state isolation, and guarantees identical outputs across all nodes given the same inputs and world state. The execution model encompasses transaction ingestion, opcode interpretation, state transition application, event emission, and atomicity enforcement, with failed executions reverting all state changes. Smart contract execution underpins trustless multi-party agreements, decentralised finance protocols, non-fungible token operations, cross-chain messaging, and decentralised autonomous organisations without reliance on a central intermediary.
