---
okf_version: "0.2"
type: Class
title: Key-Value Cache
resource: urn:ngm:class:key-value-cache
domain: machine-learning
description: A key-value cache is a memory structure used in autoregressive transformer inference that stores the key and value projections computed for previously generated tokens, avoiding their recomputation on every new decoding step. By reusing cached keys and values, inference cost grows roughly linearly rather than quadratically with sequence length for the attention computation. Its memory footprint sc
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:attention-mechanism
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Key-Value Cache

A key-value cache is a memory structure used in autoregressive transformer inference that stores the key and value projections computed for previously generated tokens, avoiding their recomputation on every new decoding step. By reusing cached keys and values, inference cost grows roughly linearly rather than quadratically with sequence length for the attention computation. Its memory footprint scales with context window length, batch size and model depth, making it a primary constraint on serving throughput for large language models.
