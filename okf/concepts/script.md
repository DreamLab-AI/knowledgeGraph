---
okf_version: "0.2"
type: Class
title: Script
resource: urn:ngm:class:script
domain: blockchain
description: Bitcoin's stack-based, non-Turing-complete scripting language used to encode spending conditions on transaction outputs and to provide the corresponding unlocking data in transaction inputs. Script programs define locking and unlocking conditions—such as pay-to-public-key-hash—that a validator executes to authorise fund transfer, making transaction validation a programmable process without full sm
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:locking-script
  - urn:ngm:class:unlocking-script
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:transaction-processing
  - urn:ngm:class:smart-contract
  - urn:ngm:class:multisignature
  - urn:ngm:class:time-locked-transaction
  - urn:ngm:class:payment-channel
implements:
  - urn:ngm:class:pay-to-public-key-hash
contrastsWith:
  - urn:ngm:class:turing-complete-language
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
bridgesTo:
  - urn:ngm:class:security
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:opcodes
  - urn:ngm:class:transaction
  - urn:ngm:class:utxo-model
  - urn:ngm:class:stack-machine
  - urn:ngm:class:cryptographic-hash
partOf:
  - urn:ngm:class:bitcoin-protocol
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:transaction-pool
  - urn:ngm:class:consensus-mechanism
---

# Script

Bitcoin's stack-based, non-Turing-complete scripting language used to encode spending conditions on transaction outputs and to provide the corresponding unlocking data in transaction inputs. Script programs define locking and unlocking conditions—such as pay-to-public-key-hash—that a validator executes to authorise fund transfer, making transaction validation a programmable process without full smart-contract complexity.
