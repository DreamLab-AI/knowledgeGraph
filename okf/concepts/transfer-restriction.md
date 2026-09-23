---
okf_version: "0.2"
type: Class
title: Transfer Restriction
resource: urn:ngm:class:transfer-restriction
domain: blockchain
description: A transfer restriction is logic embedded in a tokenised asset that conditions or blocks transfers based on the identity, eligibility, lock-up status or jurisdiction of the parties involved. It allows regulated securities to be represented on a blockchain while enforcing legal constraints automatically at the protocol level. Security token standards such as ERC-1400 expose a check function that ret
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:security-token
hasPart:
  - urn:ngm:class:kyc
  - urn:ngm:class:kyc
enables:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:compliance
dependsOn:
  - urn:ngm:class:ethereum
implements:
  - urn:ngm:class:erc-1400
  - urn:ngm:class:token-standard
contrastsWith:
  - urn:ngm:class:erc-20-token-standard
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:access-control
partOf:
  - urn:ngm:class:security-token
  - urn:ngm:class:enterprise-token-standards
relatedTo:
  - urn:ngm:class:tokenization
  - urn:ngm:class:on-chain-governance
---

# Transfer Restriction

A transfer restriction is logic embedded in a tokenised asset that conditions or blocks transfers based on the identity, eligibility, lock-up status or jurisdiction of the parties involved. It allows regulated securities to be represented on a blockchain while enforcing legal constraints automatically at the protocol level. Security token standards such as ERC-1400 expose a check function that returns whether a proposed transfer is permitted, with reason codes for rejected transfers to support auditability.
