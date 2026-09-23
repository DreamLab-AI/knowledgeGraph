---
okf_version: "0.2"
type: Class
title: Foundry
resource: urn:ngm:class:foundry
domain: blockchain
description: "Foundry is a fast, modular, and portable Ethereum application development toolkit written in Rust, comprising four core tools: Forge (test framework), Cast (EVM interaction CLI), Anvil (local testnet node), and Chisel (Solidity REPL). It enables developers to write, compile, fuzz-test, and deploy Solidity and Vyper smart contracts entirely from the command line, with tests written directly in Soli"
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:forge
  - urn:ngm:class:cast
  - urn:ngm:class:anvil
  - urn:ngm:class:chisel
requires:
  - urn:ngm:class:solidity
  - urn:ngm:class:evm
  - urn:ngm:class:rust-systems-programming-language
  - urn:ngm:class:rust-systems-programming-language
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:fuzz-testing
  - urn:ngm:class:property-based-testing
  - urn:ngm:class:formal-verification
  - urn:ngm:class:deployment-scripting
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:evm
  - urn:ngm:class:evm
contrastsWith:
  - urn:ngm:class:hardhat
  - urn:ngm:class:truffle
  - urn:ngm:class:brownie
bridgesTo:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:static-analysis
  - urn:ngm:class:devops
uses:
  - urn:ngm:class:abi-encoding
  - urn:ngm:class:json-data-interchange-format-rpc
  - urn:ngm:class:cheatcodes
supports:
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:nft
  - urn:ngm:class:evm-compatible-blockchain
  - urn:ngm:class:evm-compatible-blockchain
relatedTo:
  - urn:ngm:class:smart-contract-development-framework
  - urn:ngm:class:vyper
  - urn:ngm:class:open-zeppelin
---

# Foundry

Foundry is a fast, modular, and portable Ethereum application development toolkit written in Rust, comprising four core tools: Forge (test framework), Cast (EVM interaction CLI), Anvil (local testnet node), and Chisel (Solidity REPL). It enables developers to write, compile, fuzz-test, and deploy Solidity and Vyper smart contracts entirely from the command line, with tests written directly in Solidity rather than JavaScript. Foundry has become the dominant professional-grade smart-contract development environment on Ethereum-compatible chains, replacing earlier JavaScript-based toolchains such as Hardhat and Truffle for many teams. Its architecture emphasises speed through native compilation and parallelised test execution, deterministic reproducibility via pinned dependencies, and deep EVM-level inspection through cheatcodes and traces.
