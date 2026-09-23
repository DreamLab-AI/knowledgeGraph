---
okf_version: "0.2"
type: Class
title: Ethereum Virtual Machine
resource: urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
domain: blockchain
description: The Ethereum Virtual Machine (EVM) is a deterministic, quasi-Turing-complete, stack-based virtual machine that serves as the sandboxed runtime environment for executing compiled smart contract bytecode on the Ethereum blockchain. Every full node in the network independently executes the same sequence of EVM opcodes and must converge to an identical post-execution world state, enforcing global cons
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:virtual-machine
hasPart:
  - urn:ngm:class:evm-stack
  - urn:ngm:class:evm-memory
  - urn:ngm:class:world-state
requires:
  - urn:ngm:class:gas
  - urn:ngm:class:ethereum-account
  - urn:ngm:class:merkle-patricia-trie
enables:
  - urn:ngm:class:ethereum-smart-contract-platform-smart-contracts
  - urn:ngm:class:de-fi
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:decentralised-application
dependsOn:
  - urn:ngm:class:ethereum-consensus
  - urn:ngm:class:proof-of-stake
implements:
  - urn:ngm:class:smart-contract-platform
  - urn:ngm:class:ethereum-yellow-paper
contrastsWith:
  - urn:ngm:class:web-assembly
  - urn:ngm:class:move-virtual-machine
  - urn:ngm:class:solana-sealevel
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:formal-verification
uses:
  - urn:ngm:class:solidity
  - urn:ngm:class:keccak-256
  - urn:ngm:class:ethereum-bytecode
relatedTo:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:evm-compatible-blockchain
  - urn:ngm:class:evm-compatible-blockchain
---

# Ethereum Virtual Machine

The Ethereum Virtual Machine (EVM) is a deterministic, quasi-Turing-complete, stack-based virtual machine that serves as the sandboxed runtime environment for executing compiled smart contract bytecode on the Ethereum blockchain. Every full node in the network independently executes the same sequence of EVM opcodes and must converge to an identical post-execution world state, enforcing global consensus over account balances, contract storage, and transaction receipts. Execution is metered by a resource-accounting unit called Gas, which prevents denial-of-service attacks and prices computational work proportionally to its cost. The EVM's instruction set and state transition function have become a de-facto industry standard, with dozens of EVM-compatible chains and Layer 2 networks implementing the same specification to enable cross-chain portability of smart contracts.
