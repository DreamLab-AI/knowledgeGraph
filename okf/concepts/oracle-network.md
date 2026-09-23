---
okf_version: "0.2"
type: Class
title: Oracle Network
resource: urn:ngm:class:oracle-network
domain: blockchain
description: An oracle network is a decentralised infrastructure layer composed of independent node operators that collectively fetch, validate, aggregate, and deliver off-chain data — such as asset prices, weather readings, sports outcomes, or IoT sensor readings — to smart contracts executing on a blockchain. Because deterministic blockchain ledgers cannot natively make external HTTP requests or access off-c
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:off-chain-reporting
  - urn:ngm:class:slashing
  - urn:ngm:class:aggregation-contract
  - urn:ngm:class:slashing
requires:
  - urn:ngm:class:cryptoeconomic-incentive
  - urn:ngm:class:node-operator
  - urn:ngm:class:staking
  - urn:ngm:class:data-aggregation
enables:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:verifiable-random-function
  - urn:ngm:class:proof-of-reserve
  - urn:ngm:class:cross-chain-interoperability
dependsOn:
  - urn:ngm:class:blockchain-consensus
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:centralised-oracle
  - urn:ngm:class:tee
bridgesTo:
  - urn:ngm:class:io-t-sensor-network
  - urn:ngm:class:data-marketplace
  - urn:ngm:class:ai-agent
supports:
  - urn:ngm:class:smart-contract-execution
  - urn:ngm:class:de-fi
  - urn:ngm:class:prediction-markets
  - urn:ngm:class:real-world-asset-tokenisation
  - urn:ngm:class:prediction-markets
relatedTo:
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:decentralised-infrastructure
---

# Oracle Network

An oracle network is a decentralised infrastructure layer composed of independent node operators that collectively fetch, validate, aggregate, and deliver off-chain data — such as asset prices, weather readings, sports outcomes, or IoT sensor readings — to smart contracts executing on a blockchain. Because deterministic blockchain ledgers cannot natively make external HTTP requests or access off-chain databases, oracle networks serve as the cryptoeconomically-secured bridge between on-chain logic and real-world state. Node operators are aligned to honest reporting through staking, slashing, and reputation mechanisms, while aggregation techniques such as median computation and time-weighted average pricing reduce susceptibility to individual node manipulation. Oracle networks underpin critical decentralised finance primitives including lending protocols, synthetic assets, prediction markets, insurance products, cross-chain bridges, and real-world asset settlement.
