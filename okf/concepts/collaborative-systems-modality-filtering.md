---
okf_version: "0.2"
type: Class
title: Collaborative Filtering
resource: urn:ngm:class:collaborative-systems-modality-filtering
domain: ai
description: Collaborative filtering is a machine learning technique for building recommendation systems that generates predictions about user preferences by aggregating the behaviour or ratings of many users, without requiring explicit knowledge of item content. Memory-based approaches compute similarity between users (user-based) or items (item-based) using rating vectors; model-based approaches such as matr
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:matrix-factorisation
  - urn:ngm:class:user-item-interaction-matrix
  - urn:ngm:class:latent-factor-model
  - urn:ngm:class:neighbourhood-method
  - urn:ngm:class:user-behaviour-data
  - urn:ngm:class:embeddings
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:vae
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:stochastic-gradient-descent
requires:
  - urn:ngm:class:user-behaviour-data
  - urn:ngm:class:embeddings
  - urn:ngm:class:sparse-data
  - urn:ngm:class:loss-function
  - urn:ngm:class:regularisation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:machine-learning-model
enables:
  - urn:ngm:class:recommendation-engine
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:hyper-personalisation
  - urn:ngm:class:e-commerce
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:drug-discovery
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:large-language-model
  - urn:ngm:class:vector-database
implements:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:alternating-least-squares
  - urn:ngm:class:matrix-factorisation
  - urn:ngm:class:attention-mechanism
contrastsWith:
  - urn:ngm:class:content-based-filtering
  - urn:ngm:class:search-engine
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:approximate-nearest-neighbour-search
  - urn:ngm:class:embeddings
  - urn:ngm:class:vector-database
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:large-language-model
  - urn:ngm:class:vae
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:data-pipeline
supports:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:privacy-preserving-data-mining
  - urn:ngm:class:a-b-testing
  - urn:ngm:class:data-privacy
  - urn:ngm:class:gdpr
standardizedBy:
  - urn:ngm:class:recommendation-systems
relatedTo:
  - urn:ngm:class:recommendation-systems
  - urn:ngm:class:data-privacy
  - urn:ngm:class:privacy-preserving-data-mining
  - urn:ngm:class:filter-bubble
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:gdpr
  - urn:ngm:class:social-media-platform-infrastructure
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:cold-start-problem
---

# Collaborative Filtering

Collaborative filtering is a machine learning technique for building recommendation systems that generates predictions about user preferences by aggregating the behaviour or ratings of many users, without requiring explicit knowledge of item content. Memory-based approaches compute similarity between users (user-based) or items (item-based) using rating vectors; model-based approaches such as matrix factorisation decompose the user-item interaction matrix into latent factor spaces. The method operates on the assumption that users who agreed in the past will agree in the future, and is the foundational algorithm behind recommendation engines at Netflix, Spotify, and Amazon.
