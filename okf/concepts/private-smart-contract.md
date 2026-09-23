---
okf_version: "0.2"
type: Class
title: Private Smart Contract
resource: urn:ngm:class:private-smart-contract
domain: blockchain
description: A private smart contract is a smart contract whose inputs, state or logic are concealed from public view while still being verifiably executed and settled on a blockchain. It typically relies on zero-knowledge proofs or confidential computing so that correctness can be checked without revealing the underlying data. Private smart contracts let parties transact programmable agreements with confident
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:privacy-preserving-computation
enables:
  - urn:ngm:class:transaction-privacy
  - urn:ngm:class:de-fi
implements:
  - urn:ngm:class:zero-knowledge-rollup
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:homomorphic-encryption
standardizedBy:
  - urn:ngm:class:aztec-protocol
partOf:
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:privacy
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:smart-contracts
---

# Private Smart Contract

A private smart contract is a smart contract whose inputs, state or logic are concealed from public view while still being verifiably executed and settled on a blockchain. It typically relies on zero-knowledge proofs or confidential computing so that correctness can be checked without revealing the underlying data. Private smart contracts let parties transact programmable agreements with confidentiality comparable to traditional finance while retaining the auditability and finality of public ledgers.
