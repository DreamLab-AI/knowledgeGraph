---
okf_version: "0.2"
type: Class
title: PageRank
resource: urn:ngm:class:pagerank
domain: ai
description: PageRank is a link-analysis algorithm that assigns a numerical importance score to each node in a directed graph based on the structure of incoming links, modelling importance as the stationary distribution of a random walk that occasionally teleports to a random node. Originally devised to rank web pages by treating hyperlinks as votes whose weight depends on the ranking of the linking page, it g
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-analysis
enables:
  - urn:ngm:class:search-engine
  - urn:ngm:class:recommendation-system
dependsOn:
  - urn:ngm:class:graph-theory
bridgesTo:
  - urn:ngm:class:information-retrieval
uses:
  - urn:ngm:class:graph-theory
  - urn:ngm:class:markov-chain
supports:
  - urn:ngm:class:knowledge-graph
partOf:
  - urn:ngm:class:search-engine
  - urn:ngm:class:information-retrieval
relatedTo:
  - urn:ngm:class:network-analysis
  - urn:ngm:class:graph-theory
  - urn:ngm:class:recommendation-system
---

# PageRank

PageRank is a link-analysis algorithm that assigns a numerical importance score to each node in a directed graph based on the structure of incoming links, modelling importance as the stationary distribution of a random walk that occasionally teleports to a random node. Originally devised to rank web pages by treating hyperlinks as votes whose weight depends on the ranking of the linking page, it generalises to any graph where influence propagates along edges. The scores are computed iteratively until convergence and are robust to local manipulation because importance flows recursively from important neighbours.
