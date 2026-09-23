---
okf_version: "0.2"
type: Class
title: Taproot
resource: urn:ngm:class:taproot
domain: blockchain
description: Taproot is a soft-fork upgrade to the Bitcoin protocol, activated at block 709,632 in November 2021, comprising BIPs 340, 341, and 342. It introduces Schnorr signatures (BIP 340), Pay-to-Taproot (P2TR) outputs with Merkelised Abstract Syntax Tree (MAST) spending-condition commitments (BIP 341), and Tapscript — an updated Bitcoin Script dialect (BIP 342). Together these improvements enhance transac
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
hasPart:
  - urn:ngm:class:schnorr-signatures
  - urn:ngm:class:merkelised-abstract-syntax-tree
  - urn:ngm:class:bip-342-tapscript
  - urn:ngm:class:pay-to-taproot
  - urn:ngm:class:bip-342-tapscript
requires:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:soft-fork
enables:
  - urn:ngm:class:taproot-assets
  - urn:ngm:class:mu-sig-2
  - urn:ngm:class:bit-vm
  - urn:ngm:class:point-time-locked-contracts
  - urn:ngm:class:taproot-channels
implements:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
contrastsWith:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:pay-to-script-hash
  - urn:ngm:class:segregated-witness
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:hash-function
  - urn:ngm:class:secp256k1
supports:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:transaction-privacy
  - urn:ngm:class:signature-aggregation
standardizedBy:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
partOf:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview
relatedTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:multi-signature
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:bitcoin-proof-of-work-protocol
---

# Taproot

Taproot is a soft-fork upgrade to the Bitcoin protocol, activated at block 709,632 in November 2021, comprising BIPs 340, 341, and 342. It introduces Schnorr signatures (BIP 340), Pay-to-Taproot (P2TR) outputs with Merkelised Abstract Syntax Tree (MAST) spending-condition commitments (BIP 341), and Tapscript — an updated Bitcoin Script dialect (BIP 342). Together these improvements enhance transaction privacy by making complex multi-condition spends indistinguishable from simple key-path spends, improve efficiency via Schnorr signature aggregation, and expand smart-contract expressiveness on Bitcoin's base layer.
