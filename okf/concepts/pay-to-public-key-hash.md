---
okf_version: "0.2"
type: Class
title: Pay To Public Key Hash
resource: urn:ngm:class:pay-to-public-key-hash
domain: blockchain
description: Pay-to-Public-Key-Hash (P2PKH) is the classic Bitcoin transaction output script that locks funds to the hash of a recipient's public key rather than to the key itself. Spending requires the spender to supply both the matching public key, which is hashed and compared to the committed hash, and a valid signature over the transaction, providing privacy until spend time and shorter addresses. It is ex
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:bitcoin-script
requires:
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:transaction
dependsOn:
  - urn:ngm:class:digital-signature
implements:
  - urn:ngm:class:bitcoin-script
contrastsWith:
  - urn:ngm:class:pay-to-script-hash
  - urn:ngm:class:segregated-witness
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:stack-machine
supports:
  - urn:ngm:class:transaction
partOf:
  - urn:ngm:class:unspent-transaction-output
relatedTo:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:multisignature
---

# Pay To Public Key Hash

Pay-to-Public-Key-Hash (P2PKH) is the classic Bitcoin transaction output script that locks funds to the hash of a recipient's public key rather than to the key itself. Spending requires the spender to supply both the matching public key, which is hashed and compared to the committed hash, and a valid signature over the transaction, providing privacy until spend time and shorter addresses. It is expressed in Bitcoin Script as a fixed opcode sequence and contrasts with pay-to-script-hash and witness output types.
