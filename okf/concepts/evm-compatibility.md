---
okf_version: "0.2"
type: Class
title: EVM Compatibility
resource: urn:ngm:class:evm-compatibility
domain: blockchain
description: EVM compatibility is the property of a blockchain or execution environment that allows it to run smart contracts compiled for the Ethereum Virtual Machine without modification, supporting the same bytecode, opcodes and account model. Compatible chains can reuse Ethereum tooling, wallets, contracts and developer skills, which lowers the cost of porting applications and bootstrapping liquidity. It i
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:smart-contract-platform
  - urn:ngm:class:bc-protocol-and-consensus
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:optimistic-rollup
dependsOn:
  - urn:ngm:class:evm
  - urn:ngm:class:solidity
implements:
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:ethereum
supports:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:rollup
relatedTo:
  - urn:ngm:class:zk-sync
  - urn:ngm:class:arbitrum
  - urn:ngm:class:bnb-chain
  - urn:ngm:class:polygon
  - urn:ngm:class:connext
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# EVM Compatibility

EVM compatibility is the property of a blockchain or execution environment that allows it to run smart contracts compiled for the Ethereum Virtual Machine without modification, supporting the same bytecode, opcodes and account model. Compatible chains can reuse Ethereum tooling, wallets, contracts and developer skills, which lowers the cost of porting applications and bootstrapping liquidity. It is the foundation of the wider EVM ecosystem spanning Layer-2 rollups, sidechains and alternative Layer-1 networks.
