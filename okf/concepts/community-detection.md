---
okf_version: "0.2"
type: Class
title: Community Detection
resource: urn:ngm:class:community-detection
domain: machine-learning
description: Community detection is the computational task of identifying cohesive subgroups, or communities, within a network graph, where nodes within each group are more densely interconnected than they are with nodes in other groups. Algorithms such as the Louvain and Leiden methods optimise a modularity objective to partition the graph, whilst spectral clustering, label propagation, and stochastic block m
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:network-analysis
  - urn:ngm:class:clustering
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:graph-analysis
hasPart:
  - urn:ngm:class:louvain-algorithm
  - urn:ngm:class:leiden-algorithm
  - urn:ngm:class:spectral-clustering
  - urn:ngm:class:label-propagation
  - urn:ngm:class:stochastic-block-model
  - urn:ngm:class:modularity-optimisation
  - urn:ngm:class:infomap
  - urn:ngm:class:walktrap-algorithm
  - urn:ngm:class:clique-percolation-method
  - urn:ngm:class:bigclam
requires:
  - urn:ngm:class:graph-theory
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:adjacency-matrix
  - urn:ngm:class:probability-theory
enables:
  - urn:ngm:class:data-aggregation
  - urn:ngm:class:recommendation-systems
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:knowledge-graph-embedding
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:bioinformatics
  - urn:ngm:class:urban-mobility-analysis
  - urn:ngm:class:protein-interaction-network-analysis
  - urn:ngm:class:social-network-analysis
dependsOn:
  - urn:ngm:class:graph-theory
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:network-topology
implements:
  - urn:ngm:class:modularity-optimisation
  - urn:ngm:class:minimum-description-length
  - urn:ngm:class:stochastic-block-model
  - urn:ngm:class:constant-potts-model
contrastsWith:
  - urn:ngm:class:hierarchical-clustering
  - urn:ngm:class:graph-partitioning
  - urn:ngm:class:k-means-clustering
  - urn:ngm:class:density-based-clustering
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:bioinformatics
  - urn:ngm:class:cybersecurity
uses:
  - urn:ngm:class:graph-neural-networks
  - urn:ngm:class:matrix-factorisation
  - urn:ngm:class:random-walk
  - urn:ngm:class:information-theory
  - urn:ngm:class:node-embedding
  - urn:ngm:class:random-walk
  - urn:ngm:class:graph-convolutional-network
  - urn:ngm:class:graph-attention-network
  - urn:ngm:class:vae
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:temporal-graph-networks
  - urn:ngm:class:graph-database
  - urn:ngm:class:deep-learning
  - urn:ngm:class:contrastive-learning
supports:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:linked-data
  - urn:ngm:class:social-network-analysis
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:knowledge-graph-embedding
standardizedBy:
  - urn:ngm:class:network-analysis
relatedTo:
  - urn:ngm:class:social-network-analysis
  - urn:ngm:class:link-prediction
  - urn:ngm:class:clustering
  - urn:ngm:class:network-topology
  - urn:ngm:class:deep-learning
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:graph-database
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:ontology
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:complex-networks
  - urn:ngm:class:scale-free-networks
  - urn:ngm:class:small-world-networks
  - urn:ngm:class:community-governance-model
---

# Community Detection

Community detection is the computational task of identifying cohesive subgroups, or communities, within a network graph, where nodes within each group are more densely interconnected than they are with nodes in other groups. Algorithms such as the Louvain and Leiden methods optimise a modularity objective to partition the graph, whilst spectral clustering, label propagation, and stochastic block models offer alternative formulations. The problem is formally NP-hard in its general form, making approximation and heuristic approaches the practical norm. Applications span social-network analysis, bioinformatics, knowledge-graph organisation, recommendation systems, and cybersecurity anomaly detection.
