---
okf_version: "0.2"
type: Class
title: Vyper
resource: urn:ngm:class:vyper
domain: blockchain
description: Vyper is a contract-oriented, statically typed programming language for the Ethereum Virtual Machine (EVM) that prioritises security, simplicity, and auditability over expressive power. Inspired by Python syntax, it deliberately omits class inheritance, function overloading, recursive calling, and inline assembly to eliminate entire categories of smart-contract vulnerabilities. The language enforc
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:programming-language
requires:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:ethereum
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
  - urn:ngm:class:formal-verification
implements:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
contrastsWith:
  - urn:ngm:class:solidity
  - urn:ngm:class:yul
bridgesTo:
  - urn:ngm:class:formal-methods
  - urn:ngm:class:program-analysis
uses:
  - urn:ngm:class:evm
  - urn:ngm:class:static-typing
  - urn:ngm:class:abi-encoding
  - urn:ngm:class:evm
supports:
  - urn:ngm:class:security-audit
  - urn:ngm:class:decentralised-autonomous-organisation
relatedTo:
  - urn:ngm:class:curve-finance
  - urn:ngm:class:compound
  - urn:ngm:class:open-source-software
  - urn:ngm:class:compound
  - urn:ngm:class:python
---

# Vyper

Vyper is a contract-oriented, statically typed programming language for the Ethereum Virtual Machine (EVM) that prioritises security, simplicity, and auditability over expressive power. Inspired by Python syntax, it deliberately omits class inheritance, function overloading, recursive calling, and inline assembly to eliminate entire categories of smart-contract vulnerabilities. The language enforces bounds checking, explicit integer overflow handling, and strong typing so that the compiled EVM bytecode is tractable for formal verification and manual code review. Vyper was initially specified by Vitalik Buterin and the Ethereum Foundation team as a safer companion language to Solidity.
