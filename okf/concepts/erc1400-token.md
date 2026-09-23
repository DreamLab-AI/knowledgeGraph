---
okf_version: "0.2"
type: Class
title: ERC1400 Token
resource: urn:ngm:class:erc1400-token
domain: blockchain
description: An ERC1400 Token is an Ethereum-based security token standard that extends the ERC20 interface with partitioned token tranches, forced transfer capabilities, controller-initiated operations, and on-chain document management, enabling issuers to represent regulated financial securities on a public or permissioned blockchain. The standard enforces transfer restrictions through a canTransfer validati
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:security-token
hasPart:
  - urn:ngm:class:erc1400-standard
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:blockchain-compliance
enables:
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:security-token-offering
  - urn:ngm:class:digital-asset-trading
uses:
  - urn:ngm:class:erc20-token
  - urn:ngm:class:compliance-framework
relatedTo:
  - urn:ngm:class:erc3643-token
  - urn:ngm:class:digital-asset
  - urn:ngm:class:securities-regulation
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:token-standard
---

# ERC1400 Token

An ERC1400 Token is an Ethereum-based security token standard that extends the ERC20 interface with partitioned token tranches, forced transfer capabilities, controller-initiated operations, and on-chain document management, enabling issuers to represent regulated financial securities on a public or permissioned blockchain. The standard enforces transfer restrictions through a canTransfer validation hook that integrates with off-chain compliance logic — such as AML/KYC whitelists and jurisdictional eligibility rules — returning standardised EIP-1066 status codes rather than simple booleans. ERC1400 is positioned as an umbrella framework composing interoperability sub-standards (ERC1410 for partitions, ERC1594 for transfers, ERC1643 for documents, ERC1644 for controller operations), making it suitable for tokenising equities, bonds, real estate, and fund units subject to securities law.
