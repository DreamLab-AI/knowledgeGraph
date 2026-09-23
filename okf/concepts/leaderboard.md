---
okf_version: "0.2"
type: Class
title: Leaderboard
resource: urn:ngm:class:leaderboard
domain: artificial-intelligence
description: A leaderboard is a public, continuously updated ranking of systems or models against a shared benchmark dataset and fixed evaluation protocol, typically reporting standardised metrics on held-out test sets. Leaderboards make model comparison transparent and reproducible, drive competitive progress in machine learning and adjacent fields, and increasingly incorporate human preference voting — whils
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:benchmark-evaluation
enables:
  - urn:ngm:class:model-comparison
dependsOn:
  - urn:ngm:class:benchmark-dataset
relatedTo:
  - urn:ngm:class:model-evaluation
---

# Leaderboard

A leaderboard is a public, continuously updated ranking of systems or models against a shared benchmark dataset and fixed evaluation protocol, typically reporting standardised metrics on held-out test sets. Leaderboards make model comparison transparent and reproducible, drive competitive progress in machine learning and adjacent fields, and increasingly incorporate human preference voting — whilst also inviting over-fitting, benchmark gaming and metric myopia when rankings are treated as ends in themselves.
