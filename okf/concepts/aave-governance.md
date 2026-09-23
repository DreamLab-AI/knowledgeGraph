---
okf_version: "0.2"
type: Class
title: Aave Governance
resource: urn:ngm:class:aave-governance
domain: blockchain
description: Aave Governance is the on-chain decision-making system for the Aave decentralised lending protocol, enabling AAVE token holders and protocol delegates to propose, debate, and vote on parameter changes, new asset listings, risk adjustments, and smart contract upgrades. It operates through a tiered proposal mechanism where quorum and voting-power thresholds determine whether a proposal proceeds to e
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:on-chain-governance
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:collateral-management
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:aave
uses:
  - urn:ngm:class:governance-token
  - urn:ngm:class:voting-mechanism
relatedTo:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:token-economics
---

# Aave Governance

Aave Governance is the on-chain decision-making system for the Aave decentralised lending protocol, enabling AAVE token holders and protocol delegates to propose, debate, and vote on parameter changes, new asset listings, risk adjustments, and smart contract upgrades. It operates through a tiered proposal mechanism where quorum and voting-power thresholds determine whether a proposal proceeds to execution, with all outcomes enforced autonomously by smart contracts on Ethereum and affiliated networks.
