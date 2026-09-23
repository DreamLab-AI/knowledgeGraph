---
okf_version: "0.2"
type: Class
title: Stealth Address
resource: urn:ngm:class:stealth-address
domain: blockchain
description: A stealth address is a privacy-enhancing technique that lets a recipient publish a single static address while every payment is sent to a unique, unlinkable one-time address derived on-chain. The sender combines the recipient's public scan and spend keys with ephemeral randomness, using elliptic-curve Diffie-Hellman to compute a destination only the recipient can detect and spend. Stealth addresse
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:privacy-preserving-blockchain
hasPart:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:key-exchange
requires:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:cryptography
  - urn:ngm:class:wallet
enables:
  - urn:ngm:class:unlinkability
  - urn:ngm:class:anonymity
  - urn:ngm:class:privacy
contrastsWith:
  - urn:ngm:class:ring-signature
  - urn:ngm:class:zero-knowledge-proof
bridgesTo:
  - urn:ngm:class:wallet
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:key-exchange
  - urn:ngm:class:public-key-cryptography
supports:
  - urn:ngm:class:anonymity
  - urn:ngm:class:privacy
partOf:
  - urn:ngm:class:privacy-preserving-blockchain
relatedTo:
  - urn:ngm:class:monero
  - urn:ngm:class:privacy-preserving-blockchain
  - urn:ngm:class:unlinkability
---

# Stealth Address

A stealth address is a privacy-enhancing technique that lets a recipient publish a single static address while every payment is sent to a unique, unlinkable one-time address derived on-chain. The sender combines the recipient's public scan and spend keys with ephemeral randomness, using elliptic-curve Diffie-Hellman to compute a destination only the recipient can detect and spend. Stealth addresses break the public linkage between a recipient's identity and their incoming transactions without requiring interaction or a shared secret beforehand.
