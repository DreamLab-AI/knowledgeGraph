---
okf_version: "0.2"
type: Class
title: Virtual Machine
resource: urn:ngm:class:virtual-machine
domain: infrastructure
description: A sandboxed runtime environment that executes smart contract bytecode deterministically across distributed nodes, translating high-level contract code into low-level operations whilst metering computational resource consumption and enforcing state-transition rules. The Ethereum Virtual Machine is the canonical reference implementation, with alternatives including WebAssembly-based runtimes for imp
maturity: emerging
quality: 0.65
is-a:
  - urn:ngm:class:computing-infrastructure
requires:
  - urn:ngm:class:gas-metering
  - urn:ngm:class:deterministic-execution
  - urn:ngm:class:sandboxed-execution
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:blockchain
implements:
  - urn:ngm:class:architecture
  - urn:ngm:class:state-transition-function
contrastsWith:
  - urn:ngm:class:hypervisor
  - urn:ngm:class:container-runtime
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptography
  - urn:ngm:class:bytecode
  - urn:ngm:class:opcodes
supports:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:consensus-mechanism
partOf:
  - urn:ngm:class:blockchain-node
relatedTo:
  - urn:ngm:class:smart-contract-execution
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:web-assembly
---

# Virtual Machine

A sandboxed runtime environment that executes smart contract bytecode deterministically across distributed nodes, translating high-level contract code into low-level operations whilst metering computational resource consumption and enforcing state-transition rules. The Ethereum Virtual Machine is the canonical reference implementation, with alternatives including WebAssembly-based runtimes for improved performance.
