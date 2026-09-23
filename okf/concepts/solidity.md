---
okf_version: "0.2"
type: Class
title: Solidity
resource: urn:ngm:class:solidity
domain: blockchain
description: Solidity is a statically-typed, curly-brace, contract-oriented programming language designed for writing smart contracts that execute on the Ethereum Virtual Machine (EVM) and EVM-compatible blockchain platforms. Released in 2014 by the Ethereum Foundation, it compiles to EVM bytecode and provides constructs including inheritance, interfaces, libraries, events, function modifiers, and custom error
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:programming-language
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:gas
  - urn:ngm:class:compiler
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
  - urn:ngm:class:dao
  - urn:ngm:class:nft
  - urn:ngm:class:token
dependsOn:
  - urn:ngm:class:evm
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:evm
implements:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:erc-1155
contrastsWith:
  - urn:ngm:class:vyper
  - urn:ngm:class:rust-systems-programming-language
  - urn:ngm:class:vulnerability
  - urn:ngm:class:rust-systems-programming-language
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:oracle
uses:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:opcodes
  - urn:ngm:class:ethereum
  - urn:ngm:class:application-binary-interface
  - urn:ngm:class:opcodes
supports:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:security-audit
  - urn:ngm:class:unit-testing
relatedTo:
  - urn:ngm:class:reentrancy-attack
  - urn:ngm:class:access-control
  - urn:ngm:class:proxy-pattern
---

# Solidity

Solidity is a statically-typed, curly-brace, contract-oriented programming language designed for writing smart contracts that execute on the Ethereum Virtual Machine (EVM) and EVM-compatible blockchain platforms. Released in 2014 by the Ethereum Foundation, it compiles to EVM bytecode and provides constructs including inheritance, interfaces, libraries, events, function modifiers, and custom error types. The language's semantics are shaped by on-chain execution constraints: every opcode costs gas, state is globally persistent, and deployed code is immutable absent explicit upgrade patterns. Solidity is the dominant language for decentralised finance, non-fungible tokens, and decentralised autonomous organisations, and its security vulnerability surface has driven a parallel industry of formal verification, auditing frameworks, and defensive programming libraries.
