---
okf_version: "0.2"
type: Class
title: Pay-to-Script-Hash
resource: urn:ngm:class:pay-to-script-hash
domain: blockchain
description: "Pay-to-Script-Hash (P2SH) is a Bitcoin transaction type, introduced in BIP 16, that locks funds to the hash of a redeem script rather than to a public key or full script. The spender must later provide both the original redeem script, whose hash matches the locking output, and the data that satisfies it. P2SH shifts the burden and storage cost of complex spending conditions from the sender to the "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:bitcoin-script
requires:
  - urn:ngm:class:script
enables:
  - urn:ngm:class:smart-contract
dependsOn:
  - urn:ngm:class:transaction
implements:
  - urn:ngm:class:bip-16
  - urn:ngm:class:multi-signature-wallet
contrastsWith:
  - urn:ngm:class:pay-to-public-key-hash
  - urn:ngm:class:segregated-witness
uses:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:script
supports:
  - urn:ngm:class:blockchain
standardizedBy:
  - urn:ngm:class:bip-16
partOf:
  - urn:ngm:class:bitcoin
relatedTo:
  - urn:ngm:class:address
---

# Pay-to-Script-Hash

Pay-to-Script-Hash (P2SH) is a Bitcoin transaction type, introduced in BIP 16, that locks funds to the hash of a redeem script rather than to a public key or full script. The spender must later provide both the original redeem script, whose hash matches the locking output, and the data that satisfies it. P2SH shifts the burden and storage cost of complex spending conditions from the sender to the recipient and underpins multi-signature and other advanced locking schemes.
