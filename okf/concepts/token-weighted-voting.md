---
okf_version: "0.2"
type: Class
title: Token-Weighted Voting
resource: urn:ngm:class:token-weighted-voting
domain: blockchain
description: Token-weighted voting is an on-chain governance mechanism in which each participant's voting power is directly proportional to the quantity of governance tokens they hold, lock, or stake. It is the dominant decision-making primitive in decentralised autonomous organisations and DeFi protocols, enabling transparent, programmable, and censorship-resistant governance of parameter changes, treasury al
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-governance-and-regulation
requires:
  - urn:ngm:class:erc-20-tokens
  - urn:ngm:class:quorum-threshold
  - urn:ngm:class:erc-20-tokens
  - urn:ngm:class:proposal-mechanism
enables:
  - urn:ngm:class:protocol-upgrades
  - urn:ngm:class:treasury-management
  - urn:ngm:class:parameter-governance
  - urn:ngm:class:decentralised-decision-making
  - urn:ngm:class:protocol-upgrade
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:token-economics
implements:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:on-chain-governance
contrastsWith:
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:conviction-voting
  - urn:ngm:class:one-person-one-vote
  - urn:ngm:class:reputation-based-voting
bridgesTo:
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:social-choice-theory
  - urn:ngm:class:sybil-resistance
uses:
  - urn:ngm:class:governance-token
  - urn:ngm:class:on-chain-voting
  - urn:ngm:class:smart-contract
  - urn:ngm:class:vote-escrow
  - urn:ngm:class:liquid-democracy
relatedTo:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:snapshot-voting
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:plutocracy
  - urn:ngm:class:governance-attack
  - urn:ngm:class:voter-turnout
---

# Token-Weighted Voting

Token-weighted voting is an on-chain governance mechanism in which each participant's voting power is directly proportional to the quantity of governance tokens they hold, lock, or stake. It is the dominant decision-making primitive in decentralised autonomous organisations and DeFi protocols, enabling transparent, programmable, and censorship-resistant governance of parameter changes, treasury allocations, and protocol upgrades. The mechanism exhibits plutocratic tendencies in which large token holders disproportionately control outcomes, motivating research into alternative weighting schemes such as quadratic voting, conviction voting, and vote-escrow models. Implementations range from fully on-chain execution via Governor Bravo and OpenZeppelin Governor to off-chain gasless signalling via platforms such as Snapshot.
