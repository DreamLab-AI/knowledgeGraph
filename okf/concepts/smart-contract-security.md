---
okf_version: "0.2"
type: Class
title: Smart Contract Security
resource: urn:ngm:class:smart-contract-security
domain: blockchain
description: Smart contract security is the discipline of designing, reviewing, and verifying on-chain programs so they behave correctly and resist exploitation despite handling irreversible value transfers. Because deployed contracts are typically immutable and publicly visible, vulnerabilities such as reentrancy, access-control flaws, and arithmetic errors can lead to permanent loss of funds. The field combi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security-audit
requires:
  - urn:ngm:class:evm-compatibility
enables:
  - urn:ngm:class:liquidity
dependsOn:
  - urn:ngm:class:ethereum
contrastsWith:
  - urn:ngm:class:gas-optimization
bridgesTo:
  - urn:ngm:class:security
uses:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:audit
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:oracle
  - urn:ngm:class:blockchain
  - urn:ngm:class:slippage
---

# Smart Contract Security

Smart contract security is the discipline of designing, reviewing, and verifying on-chain programs so they behave correctly and resist exploitation despite handling irreversible value transfers. Because deployed contracts are typically immutable and publicly visible, vulnerabilities such as reentrancy, access-control flaws, and arithmetic errors can lead to permanent loss of funds. The field combines secure coding patterns, automated analysis, formal verification, audits, and economic safeguards.
