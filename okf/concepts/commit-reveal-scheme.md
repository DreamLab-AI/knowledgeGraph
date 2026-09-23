---
okf_version: "0.2"
type: Class
title: Commit-Reveal Scheme
resource: urn:ngm:class:commit-reveal-scheme
domain: blockchain
description: "A commit-reveal scheme is a two-phase cryptographic protocol in which a participant first publishes a binding, hiding commitment to a value (typically a hash of the value plus a nonce) and later reveals the value for verification. The commit phase prevents others from learning or altering the choice, while the reveal phase lets anyone check the value against the earlier commitment. It matters for "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-protocol
relatedTo:
  - urn:ngm:class:quadratic-voting
---

# Commit-Reveal Scheme

A commit-reveal scheme is a two-phase cryptographic protocol in which a participant first publishes a binding, hiding commitment to a value (typically a hash of the value plus a nonce) and later reveals the value for verification. The commit phase prevents others from learning or altering the choice, while the reveal phase lets anyone check the value against the earlier commitment. It matters for on-chain voting and auctions because it stops front-running and last-mover advantage by concealing inputs until all parties are bound.
