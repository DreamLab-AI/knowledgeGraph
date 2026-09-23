---
okf_version: "0.2"
type: Class
title: transaction fees
resource: urn:ngm:class:transaction-fees
domain: blockchain
description: Transaction fees are amounts paid by users to have their transactions included in a blockchain block. They compensate miners or validators and help prioritise transactions when capacity is limited.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
enables:
  - urn:ngm:class:transaction-validation
bridgesTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
---

# transaction fees

Transaction fees are amounts paid by users to have their transactions included in a blockchain block. They compensate miners or validators and help prioritise transactions when capacity is limited.
