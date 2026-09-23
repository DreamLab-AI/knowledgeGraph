---
okf_version: "0.2"
type: Class
title: Smart Contract Audit
resource: urn:ngm:class:smart-contract-audit
domain: blockchain
description: A smart contract audit is a structured security review of on-chain contract code that seeks to identify vulnerabilities, logic errors and economic flaws before deployment to an immutable ledger. Auditors combine manual code review with static analysis, automated scanners and, where warranted, formal verification to assess correctness against the intended specification. Because deployed contracts o
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security-audit
hasPart:
  - urn:ngm:class:code-review
  - urn:ngm:class:static-analysis
  - urn:ngm:class:formal-verification
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:solidity
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:blockchain-security
dependsOn:
  - urn:ngm:class:smart-contract
bridgesTo:
  - urn:ngm:class:security-audit
  - urn:ngm:class:formal-verification
uses:
  - urn:ngm:class:static-analysis
  - urn:ngm:class:formal-verification
supports:
  - urn:ngm:class:evm
partOf:
  - urn:ngm:class:blockchain-security
relatedTo:
  - urn:ngm:class:vulnerability
  - urn:ngm:class:reentrancy-attack
  - urn:ngm:class:ethereum
---

# Smart Contract Audit

A smart contract audit is a structured security review of on-chain contract code that seeks to identify vulnerabilities, logic errors and economic flaws before deployment to an immutable ledger. Auditors combine manual code review with static analysis, automated scanners and, where warranted, formal verification to assess correctness against the intended specification. Because deployed contracts often custody substantial value and cannot easily be patched, auditing is a critical control in the blockchain and decentralised finance lifecycle.
