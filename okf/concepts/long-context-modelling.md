---
okf_version: "0.2"
type: Class
title: Long Context Modelling
resource: urn:ngm:class:long-context-modelling
domain: artificial-intelligence
description: "Long context modelling refers to techniques that let a language model process, attend to and reason over input sequences substantially longer than the context windows of earlier architectures, extending from thousands to hundreds of thousands of tokens. It is enabled by memory- and compute-efficient attention implementations such as Flash Attention, and by position-encoding schemes such as rotary "
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:context-window
requires:
  - urn:ngm:class:context-window
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Long Context Modelling

Long context modelling refers to techniques that let a language model process, attend to and reason over input sequences substantially longer than the context windows of earlier architectures, extending from thousands to hundreds of thousands of tokens. It is enabled by memory- and compute-efficient attention implementations such as Flash Attention, and by position-encoding schemes such as rotary position embedding that generalise to sequence lengths beyond those seen during training. Long context modelling is essential for tasks such as whole-document summarisation, long-form retrieval-augmented generation and multi-turn agent memory.
