---
okf_version: "0.2"
type: Class
title: Opcodes
resource: urn:ngm:class:opcodes
domain: blockchain
description: Opcodes (operation codes) are the atomic instruction primitives of a blockchain scripting language that define permissible computations within transaction scripts, smart contracts, or virtual machine execution environments. Each opcode specifies an operation — such as hash computation, signature verification, stack manipulation, or conditional branching — and the set of valid opcodes for a given b
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:script
  - urn:ngm:class:scripting-language
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-transaction
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:smart-contract-execution
  - urn:ngm:class:programmable-money
partOf:
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:virtual-machine
relatedTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:consensus-protocol
---

# Opcodes

Opcodes (operation codes) are the atomic instruction primitives of a blockchain scripting language that define permissible computations within transaction scripts, smart contracts, or virtual machine execution environments. Each opcode specifies an operation — such as hash computation, signature verification, stack manipulation, or conditional branching — and the set of valid opcodes for a given blockchain determines its scripting expressiveness and security surface. In Bitcoin, a deliberately restricted opcode set enforces non-Turing-completeness and predictable resource consumption, whereas Ethereum's EVM opcode set supports general computation within gas-metered bounds.
