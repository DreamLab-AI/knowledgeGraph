---
okf_version: "0.2"
type: Class
title: Social Network Graph
resource: urn:ngm:class:social-network-graph
domain: data
description: A graph-theoretic data structure in which nodes represent social actors (individuals, organisations, or automated agents) and edges encode directed or undirected social relations such as friendship, following, trust, or co-authorship. Social network graphs are analysed using network-science metrics including degree centrality, clustering coefficient, betweenness, and PageRank to reveal community s
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:graph-data-model
hasPart:
  - urn:ngm:class:graph-node
  - urn:ngm:class:graph-edge
  - urn:ngm:class:community-structure
requires:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:graph-algorithms
  - urn:ngm:class:graph-algorithms
enables:
  - urn:ngm:class:community-detection
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:identity-federation
  - urn:ngm:class:influence-analysis
dependsOn:
  - urn:ngm:class:graph-theory
  - urn:ngm:class:network-topology
contrastsWith:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:citation-network
bridgesTo:
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:virtual-community-platform
uses:
  - urn:ngm:class:nostr-protocol
  - urn:ngm:class:activity-pub
  - urn:ngm:class:pagerank
supports:
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:social-media-analytics
partOf:
  - urn:ngm:class:graph-database
relatedTo:
  - urn:ngm:class:federation-surface
  - urn:ngm:class:web-of-trust
  - urn:ngm:class:small-world-network
---

# Social Network Graph

A graph-theoretic data structure in which nodes represent social actors (individuals, organisations, or automated agents) and edges encode directed or undirected social relations such as friendship, following, trust, or co-authorship. Social network graphs are analysed using network-science metrics including degree centrality, clustering coefficient, betweenness, and PageRank to reveal community structure, information diffusion pathways, and influential actors. They underpin decentralised identity federation protocols (ActivityPub, Nostr), recommendation engines, and adversarial analysis tasks such as Sybil detection. The formalism extends naturally to heterogeneous property graphs and hypergraphs when multi-typed relations or group memberships must be represented.
