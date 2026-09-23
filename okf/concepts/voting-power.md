---
okf_version: "0.2"
type: Class
title: Voting Power
resource: urn:ngm:class:voting-power
domain: governance
description: Voting power is the quantified influence a participant can exert over a collective decision, expressed as the weight their ballot carries relative to all eligible ballots. In token-based governance systems it is typically proportional to the number of governance tokens held, delegated, or staked at a given snapshot block, though alternative schemes such as quadratic voting, reputation weighting, a
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:governance
dependsOn:
  - urn:ngm:class:token
partOf:
  - urn:ngm:class:governance-token
relatedTo:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:snapshot-governance
  - urn:ngm:class:quorum
  - urn:ngm:class:dao
---

# Voting Power

Voting power is the quantified influence a participant can exert over a collective decision, expressed as the weight their ballot carries relative to all eligible ballots. In token-based governance systems it is typically proportional to the number of governance tokens held, delegated, or staked at a given snapshot block, though alternative schemes such as quadratic voting, reputation weighting, and one-person-one-vote deliberately decouple influence from raw holdings to resist plutocratic capture.
