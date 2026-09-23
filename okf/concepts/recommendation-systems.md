---
okf_version: "0.2"
type: Class
title: Recommendation Systems
resource: urn:ngm:class:recommendation-systems
domain: machine-learning
description: "Recommendation Systems are information filtering systems that predict a user's preference for items—products, content, services—and surface the most relevant items from a large catalogue. They are categorised into collaborative filtering (leveraging the behaviour of similar users), content-based filtering (matching item attributes to user profiles), and hybrid approaches that combine both. Modern "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-application
hasPart:
  - urn:ngm:class:collaborative-systems-modality-filtering
  - urn:ngm:class:content-based-filtering
  - urn:ngm:class:candidate-generation
requires:
  - urn:ngm:class:implicit-feedback
  - urn:ngm:class:feature-engineering
enables:
  - urn:ngm:class:hyper-personalisation
  - urn:ngm:class:predictive-personalization
  - urn:ngm:class:content-discovery
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:vector-database
contrastsWith:
  - urn:ngm:class:search-engine
  - urn:ngm:class:information-retrieval
bridgesTo:
  - urn:ngm:class:ai-governance-and-ethics
  - urn:ngm:class:digital-services-act
uses:
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:embedding-model
  - urn:ngm:class:two-tower-neural-network
  - urn:ngm:class:matrix-factorisation
  - urn:ngm:class:nearest-neighbor-search
relatedTo:
  - urn:ngm:class:recommendation-engine
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:filter-bubble
  - urn:ngm:class:algorithmic-amplification
---

# Recommendation Systems

Recommendation Systems are information filtering systems that predict a user's preference for items—products, content, services—and surface the most relevant items from a large catalogue. They are categorised into collaborative filtering (leveraging the behaviour of similar users), content-based filtering (matching item attributes to user profiles), and hybrid approaches that combine both. Modern large-scale recommendation systems employ deep learning architectures, embedding models, and two-tower neural networks trained on implicit feedback signals such as clicks, watch-time, and purchases. Recommendation systems are among the highest-impact machine learning applications in commercial technology, driving substantial fractions of revenue at platforms such as Netflix, Amazon, YouTube, and Spotify, while also raising significant concerns about filter bubbles, engagement maximisation harms, and algorithmic amplification of misinformation.
