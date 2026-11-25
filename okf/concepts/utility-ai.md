---
okf_version: "0.2"
type: Class
title: Utility AI
resource: urn:ngm:class:utility-ai
domain: artificial-intelligence
description: A game artificial intelligence architecture in which an agent scores every available action by evaluating weighted utility functions over the current world state — factors such as health, distance, threat, ammunition, and needs — and selects the highest-scoring option. Response curves map raw game variables onto normalised utilities that are combined multiplicatively or additively, yielding nuance
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:game-ai
contrastsWith:
  - urn:ngm:class:behaviour-tree
  - urn:ngm:class:finite-state-machine
uses:
  - urn:ngm:class:decision-making
partOf:
  - urn:ngm:class:game-ai
relatedTo:
  - urn:ngm:class:ai-game-agent
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Utility AI

A game artificial intelligence architecture in which an agent scores every available action by evaluating weighted utility functions over the current world state — factors such as health, distance, threat, ammunition, and needs — and selects the highest-scoring option. Response curves map raw game variables onto normalised utilities that are combined multiplicatively or additively, yielding nuanced, context-sensitive behaviour that degrades gracefully and is easier to tune than rigid rule-based state machines or behaviour trees.
