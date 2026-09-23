---
okf_version: "0.2"
type: Class
title: Application Specific Integrated Circuit
resource: urn:ngm:class:application-specific-integrated-circuit
domain: blockchain
description: An application-specific integrated circuit (ASIC) is a chip designed and fabricated to perform a single, fixed function with maximum efficiency rather than to run general-purpose programs. In blockchain, ASICs are built to compute a particular proof-of-work hash function at far higher speed and energy efficiency than general processors, making them dominant in mining for hashes such as SHA-256. Be
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:mining-hardware
requires:
  - urn:ngm:class:energy-consumption
enables:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:mining
  - urn:ngm:class:hardware-acceleration
implements:
  - urn:ngm:class:sha-256
  - urn:ngm:class:hardware-acceleration
contrastsWith:
  - urn:ngm:class:fpga
  - urn:ngm:class:gpu
  - urn:ngm:class:field-programmable-gate-array
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:sha-256
supports:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:block-reward
partOf:
  - urn:ngm:class:mining
relatedTo:
  - urn:ngm:class:mining-hardware
  - urn:ngm:class:gpu
---

# Application Specific Integrated Circuit

An application-specific integrated circuit (ASIC) is a chip designed and fabricated to perform a single, fixed function with maximum efficiency rather than to run general-purpose programs. In blockchain, ASICs are built to compute a particular proof-of-work hash function at far higher speed and energy efficiency than general processors, making them dominant in mining for hashes such as SHA-256. Because the silicon is customised for one task, ASICs offer superior performance per watt but cannot be repurposed for other workloads.
