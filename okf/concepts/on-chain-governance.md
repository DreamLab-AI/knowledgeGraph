---
okf_version: "0.2"
type: Class
title: On-chain Governance
resource: urn:ngm:class:on-chain-governance
domain: blockchain
description: On-chain governance is a blockchain coordination model in which protocol upgrade proposals, parameter changes, and treasury spending decisions are formally submitted, deliberated, voted on by token holders, and automatically enacted through the execution of smart contracts recorded on the distributed ledger. Governance logic is codified directly in the protocol layer, making all votes, quorum chec
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bc-governance-and-regulation
requires:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:quorum
enables:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:voting-mechanism
  - urn:ngm:class:protocol-upgrades
  - urn:ngm:class:treasury-management
  - urn:ngm:class:parameter-governance
  - urn:ngm:class:protocol-upgrade
dependsOn:
  - urn:ngm:class:token-economics
  - urn:ngm:class:voting-power
implements:
  - urn:ngm:class:decentralised-autonomous-organisation
contrastsWith:
  - urn:ngm:class:off-chain-governance
  - urn:ngm:class:plutocracy
  - urn:ngm:class:centralised-governance
bridgesTo:
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:collective-intelligence
  - urn:ngm:class:multi-stakeholder-governance
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:governance-token
  - urn:ngm:class:timelock-controller
  - urn:ngm:class:vote-delegation
relatedTo:
  - urn:ngm:class:open-zeppelin-governor
  - urn:ngm:class:proposal-system
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:conviction-voting
  - urn:ngm:class:tezos
  - urn:ngm:class:polkadot
  - urn:ngm:class:cosmos-governance
---

# On-chain Governance

On-chain governance is a blockchain coordination model in which protocol upgrade proposals, parameter changes, and treasury spending decisions are formally submitted, deliberated, voted on by token holders, and automatically enacted through the execution of smart contracts recorded on the distributed ledger. Governance logic is codified directly in the protocol layer, making all votes, quorum checks, and execution outcomes immutable, censorship-resistant, and publicly auditable on-chain records. It contrasts with off-chain governance, where decisions emerge from social consensus (forums, developer meetings, improvement-proposal repositories) and are implemented by core developers without cryptographic enforcement, creating reliance on trust in key actors.
