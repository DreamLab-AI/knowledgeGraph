---
okf_version: "0.2"
type: Class
title: EVM
resource: urn:ngm:class:evm
domain: blockchain
description: The Ethereum Virtual Machine (EVM) is a stack-based, sandboxed, quasi-Turing-complete virtual machine that executes smart contract bytecode on the Ethereum network and EVM-compatible blockchains. It defines a deterministic computation environment in which all nodes independently execute the same transactions to reach identical state transitions, using a gas metering system to bound computation and
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:virtual-machine
hasPart:
  - urn:ngm:class:evm-stack
  - urn:ngm:class:evm-memory
  - urn:ngm:class:gas-metering
requires:
  - urn:ngm:class:ethereum-node
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:smart-contract-execution
  - urn:ngm:class:smart-contract
  - urn:ngm:class:smart-contract-platform
  - urn:ngm:class:de-fi
  - urn:ngm:class:nft
implements:
  - urn:ngm:class:ethereum-yellow-paper
  - urn:ngm:class:eip
contrastsWith:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:wasm
  - urn:ngm:class:move-vm
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:formal-verification
uses:
  - urn:ngm:class:opcodes
  - urn:ngm:class:solidity
  - urn:ngm:class:bytecode
  - urn:ngm:class:gas
  - urn:ngm:class:merkle-patricia-trie
supports:
  - urn:ngm:class:rollup
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:rollup
standardizedBy:
  - urn:ngm:class:enterprise-ethereum-alliance
relatedTo:
  - urn:ngm:class:gas-optimization
  - urn:ngm:class:vyper
  - urn:ngm:class:evm-object-format
  - urn:ngm:class:solidity-abi
---

# EVM

The Ethereum Virtual Machine (EVM) is a stack-based, sandboxed, quasi-Turing-complete virtual machine that executes smart contract bytecode on the Ethereum network and EVM-compatible blockchains. It defines a deterministic computation environment in which all nodes independently execute the same transactions to reach identical state transitions, using a gas metering system to bound computation and prevent denial-of-service attacks. The EVM specification encompasses opcodes, memory model, call semantics, and the gas cost schedule governing the economic cost of each computational step. As an open industry standard maintained by the Enterprise Ethereum Alliance, the EVM has been adopted by hundreds of alternative blockchain networks, establishing it as the dominant cross-chain execution environment.
