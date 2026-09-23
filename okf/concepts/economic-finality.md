---
okf_version: "0.2"
type: Class
title: Economic Finality
resource: urn:ngm:class:economic-finality
domain: blockchain
description: Economic finality is a guarantee in proof-of-stake blockchains that reverting a finalised block would require an attacker to forfeit an economically prohibitive amount of staked capital through slashing. Rather than relying on probabilistic confirmation depth, it makes reversal irrational by binding the cost of an attack to a large, destroyable bond. A block is economically final once enough valid
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:finality
hasPart:
  - urn:ngm:class:slashing
  - urn:ngm:class:staking
requires:
  - urn:ngm:class:validator
  - urn:ngm:class:staking
enables:
  - urn:ngm:class:settlement-finality
  - urn:ngm:class:economic-security
dependsOn:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:slashing
uses:
  - urn:ngm:class:cryptographic-proof
supports:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:cryptoeconomics
  - urn:ngm:class:consensus
  - urn:ngm:class:validator
  - urn:ngm:class:cryptoeconomics
---

# Economic Finality

Economic finality is a guarantee in proof-of-stake blockchains that reverting a finalised block would require an attacker to forfeit an economically prohibitive amount of staked capital through slashing. Rather than relying on probabilistic confirmation depth, it makes reversal irrational by binding the cost of an attack to a large, destroyable bond. A block is economically final once enough validators have attested to it that any conflicting chain would entail penalising at least a quantified fraction of the total stake. It is the cryptoeconomic foundation of settlement assurance in modern staking-based consensus.
