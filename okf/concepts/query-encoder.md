---
okf_version: "0.2"
type: Class
title: Query Encoder
resource: urn:ngm:class:query-encoder
domain: ai
description: A query encoder is a neural model component that maps a search query into a dense vector embedding within a shared semantic space, enabling similarity comparison against encoded documents. In dual-encoder retrieval architectures it is paired with a document encoder, allowing fast approximate-nearest-neighbour search over precomputed passage embeddings. It is a core building block of dense retrieva
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:information-retrieval
relatedTo:
  - urn:ngm:class:retrieval-augmented-generation-rag
  - urn:ngm:class:semantic-search
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Query Encoder

A query encoder is a neural model component that maps a search query into a dense vector embedding within a shared semantic space, enabling similarity comparison against encoded documents. In dual-encoder retrieval architectures it is paired with a document encoder, allowing fast approximate-nearest-neighbour search over precomputed passage embeddings. It is a core building block of dense retrieval and retrieval-augmented generation pipelines.
