---
okf_version: "0.2"
type: Class
title: Bitcoin Script
resource: urn:ngm:class:bitcoin-script
domain: blockchain
description: Bitcoin Script is a non-Turing-complete, stack-based scripting language embedded in every Bitcoin transaction that defines the conditions under which unspent transaction outputs (UTXOs) may be spent. It consists of a constrained set of opcodes operating on a last-in-first-out (LIFO) stack, deliberately designed without loops or unbounded recursion to ensure guaranteed termination and predictable r
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:scripting-language
hasPart:
  - urn:ngm:class:witness-data
  - urn:ngm:class:scriptpubkey
  - urn:ngm:class:scriptsig
requires:
  - urn:ngm:class:bitcoin-transaction
  - urn:ngm:class:stack-machine
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-ordinals
  - urn:ngm:class:lightning-network
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:multisignature-wallets
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:bitcoin
  - urn:ngm:class:multisignature-wallets
  - urn:ngm:class:bitcoin
implements:
  - urn:ngm:class:pay-to-public-key-hash
  - urn:ngm:class:pay-to-script-hash
  - urn:ngm:class:taproot
contrastsWith:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:solidity
  - urn:ngm:class:turing-complete-language
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:formal-verification
uses:
  - urn:ngm:class:opcodes
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:schnorr-signature
standardizedBy:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
partOf:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
  - urn:ngm:class:utxo-model
relatedTo:
  - urn:ngm:class:programming-language
  - urn:ngm:class:merklised-abstract-syntax-tree
  - urn:ngm:class:segregated-witness
  - urn:ngm:class:programming-language
---

# Bitcoin Script

Bitcoin Script is a non-Turing-complete, stack-based scripting language embedded in every Bitcoin transaction that defines the conditions under which unspent transaction outputs (UTXOs) may be spent. It consists of a constrained set of opcodes operating on a last-in-first-out (LIFO) stack, deliberately designed without loops or unbounded recursion to ensure guaranteed termination and predictable resource consumption. Script programs are expressed as paired locking scripts (scriptPubKey) and unlocking scripts (scriptSig or SegWit witness data) that encode spending conditions including digital signature verification, multisignature requirements, hash pre-image revelation, and time locks. Standard output templates — P2PKH, P2SH, P2WPKH, P2WSH, and P2TR — formalise the most common spending patterns used across the Bitcoin network.
