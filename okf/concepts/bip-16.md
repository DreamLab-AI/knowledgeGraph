---
okf_version: "0.2"
type: Class
title: BIP-16
resource: urn:ngm:class:bip-16
domain: blockchain
description: "BIP-16 is the Bitcoin Improvement Proposal that introduced Pay-to-Script-Hash (P2SH), allowing funds to be sent to the hash of a redeem script rather than to a full script. The spender supplies the matching script and its satisfying inputs at redemption time, shifting the burden of specifying complex spending conditions from sender to recipient. P2SH made multi-signature and other complex scripts "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:technical-standard
relatedTo:
  - urn:ngm:class:multi-sig-governance
---

# BIP-16

BIP-16 is the Bitcoin Improvement Proposal that introduced Pay-to-Script-Hash (P2SH), allowing funds to be sent to the hash of a redeem script rather than to a full script. The spender supplies the matching script and its satisfying inputs at redemption time, shifting the burden of specifying complex spending conditions from sender to recipient. P2SH made multi-signature and other complex scripts practical and is the standard mechanism behind multi-sig wallet addresses.
