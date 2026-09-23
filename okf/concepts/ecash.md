---
okf_version: "0.2"
type: Class
title: ecash
resource: urn:ngm:class:ecash
domain: blockchain
description: A privacy-preserving digital cash system based on David Chaum's blind-signature cryptography, enabling bearer-token payments in which the issuing mint cannot link individual transactions to users. Modern implementations such as Cashu and Fedimint build Chaumian eCash on top of Bitcoin and the Lightning Network, enabling censorship-resistant micropayments for human and autonomous-agent use.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:bc-token-and-asset
requires:
  - urn:ngm:class:censorship-resistance
enables:
  - urn:ngm:class:privacy-preserving-blockchain
  - urn:ngm:class:identity-management
bridgesTo:
  - urn:ngm:class:payment-system
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:cashu
  - urn:ngm:class:smart-contracts
---

# ecash

A privacy-preserving digital cash system based on David Chaum's blind-signature cryptography, enabling bearer-token payments in which the issuing mint cannot link individual transactions to users. Modern implementations such as Cashu and Fedimint build Chaumian eCash on top of Bitcoin and the Lightning Network, enabling censorship-resistant micropayments for human and autonomous-agent use.
