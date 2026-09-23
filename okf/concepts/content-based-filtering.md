---
okf_version: "0.2"
type: Class
title: Content-Based Filtering
resource: urn:ngm:class:content-based-filtering
domain: machine-learning
description: A recommendation technique that suggests items by matching the attributes of items a user has previously engaged with — such as text features, genres, tags, or learned embeddings — against the attributes of candidate items, building a per-user preference profile in feature space; it requires no data about other users, handles new items gracefully, and offers explainable suggestions, but tends to o
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:recommendation-systems
contrastsWith:
  - urn:ngm:class:collaborative-systems-modality-filtering
partOf:
  - urn:ngm:class:content-discovery
  - urn:ngm:class:hyper-personalisation
relatedTo:
  - urn:ngm:class:filter-bubble
---

# Content-Based Filtering

A recommendation technique that suggests items by matching the attributes of items a user has previously engaged with — such as text features, genres, tags, or learned embeddings — against the attributes of candidate items, building a per-user preference profile in feature space; it requires no data about other users, handles new items gracefully, and offers explainable suggestions, but tends to over-specialise, recommending only items similar to what the user already knows.
