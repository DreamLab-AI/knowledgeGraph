---
okf_version: "0.2"
type: Class
title: Gas Metering
resource: urn:ngm:class:gas-metering
domain: blockchain
description: Gas metering is the mechanism by which a blockchain virtual machine accounts for the computational, storage and bandwidth resources consumed by executing a transaction or smart contract. Each low-level operation is assigned a gas cost, and execution proceeds only while the sender's prepaid gas budget remains, halting deterministically when the budget is exhausted. By pricing computation, gas meter
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:smart-contract-platform
  - urn:ngm:class:bc-protocol-and-consensus
hasPart:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:virtual-machine
requires:
  - urn:ngm:class:virtual-machine
enables:
  - urn:ngm:class:gas-fee
dependsOn:
  - urn:ngm:class:smart-contract-platform
implements:
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:virtual-machine
supports:
  - urn:ngm:class:gas-fee
  - urn:ngm:class:smart-contract
partOf:
  - urn:ngm:class:smart-contract-platform
relatedTo:
  - urn:ngm:class:gas-fee
  - urn:ngm:class:smart-contract-platform
---

# Gas Metering

Gas metering is the mechanism by which a blockchain virtual machine accounts for the computational, storage and bandwidth resources consumed by executing a transaction or smart contract. Each low-level operation is assigned a gas cost, and execution proceeds only while the sender's prepaid gas budget remains, halting deterministically when the budget is exhausted. By pricing computation, gas metering deters denial-of-service abuse, bounds execution and forms the basis of transaction fees.
