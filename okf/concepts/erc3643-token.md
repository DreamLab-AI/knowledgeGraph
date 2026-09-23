---
okf_version: "0.2"
type: Class
title: ERC3643 Token
resource: urn:ngm:class:erc3643-token
domain: blockchain
description: The ERC-3643 (T-REX) standard is an Ethereum permissioned token framework designed for compliant security token issuance, embedding on-chain identity verification and transfer-restriction logic that enforces investor eligibility, jurisdiction rules, and AML/KYC requirements at the smart contract level. Transfer authorisation is governed by an on-chain identity registry and a modular compliance mod
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:security-token
requires:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:security-token-offering
  - urn:ngm:class:compliance-verification
  - urn:ngm:class:blockchain-compliance
standardizedBy:
  - urn:ngm:class:erc3643-standard
relatedTo:
  - urn:ngm:class:erc20-token
  - urn:ngm:class:erc1400-token
  - urn:ngm:class:identity-management
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:tokenomics-governance
---

# ERC3643 Token

The ERC-3643 (T-REX) standard is an Ethereum permissioned token framework designed for compliant security token issuance, embedding on-chain identity verification and transfer-restriction logic that enforces investor eligibility, jurisdiction rules, and AML/KYC requirements at the smart contract level. Transfer authorisation is governed by an on-chain identity registry and a modular compliance module, enabling automated regulatory enforcement.
