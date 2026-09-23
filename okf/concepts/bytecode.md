---
okf_version: "0.2"
type: Class
title: Bytecode
resource: urn:ngm:class:bytecode
domain: blockchain
description: Bytecode is a compact, platform-independent instruction set produced by compiling source code, designed to be executed by a virtual machine rather than directly by hardware. In blockchain systems, smart contracts written in high-level languages such as Solidity are compiled to bytecode that the Ethereum Virtual Machine deterministically executes across every node. Bytecode strikes a balance betwee
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:smart-contract-execution
hasPart:
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:compiler
  - urn:ngm:class:runtime-environment
enables:
  - urn:ngm:class:smart-contract-execution
dependsOn:
  - urn:ngm:class:evm
bridgesTo:
  - urn:ngm:class:runtime-environment
uses:
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:compiler
supports:
  - urn:ngm:class:solidity
partOf:
  - urn:ngm:class:smart-contract-execution
relatedTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:evm
  - urn:ngm:class:compiler
---

# Bytecode

Bytecode is a compact, platform-independent instruction set produced by compiling source code, designed to be executed by a virtual machine rather than directly by hardware. In blockchain systems, smart contracts written in high-level languages such as Solidity are compiled to bytecode that the Ethereum Virtual Machine deterministically executes across every node. Bytecode strikes a balance between the portability of source code and the efficiency of native machine code.
