---
okf_version: "0.2"
type: Class
title: Reentrancy Attack
resource: urn:ngm:class:reentrancy-attack
domain: blockchain
description: A reentrancy attack is a smart-contract exploit in which a malicious contract repeatedly re-enters a vulnerable function before its state is updated, draining funds or corrupting state. It arises when a contract makes an external call before completing its own bookkeeping, allowing the callee to recursively invoke the caller. The class of bug was made notorious by the DAO incident and is mitigated
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-security
requires:
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:vulnerability
dependsOn:
  - urn:ngm:class:solidity
implements:
  - urn:ngm:class:attack-vector
contrastsWith:
  - urn:ngm:class:security-audit
bridgesTo:
  - urn:ngm:class:security-audit
uses:
  - urn:ngm:class:state-change
supports:
  - urn:ngm:class:vulnerability
partOf:
  - urn:ngm:class:blockchain-security
relatedTo:
  - urn:ngm:class:ethereum
  - urn:ngm:class:gas
  - urn:ngm:class:solidity
  - urn:ngm:class:state-change
---

# Reentrancy Attack

A reentrancy attack is a smart-contract exploit in which a malicious contract repeatedly re-enters a vulnerable function before its state is updated, draining funds or corrupting state. It arises when a contract makes an external call before completing its own bookkeeping, allowing the callee to recursively invoke the caller. The class of bug was made notorious by the DAO incident and is mitigated by the checks-effects-interactions pattern and reentrancy guards.
