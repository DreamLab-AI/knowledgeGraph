---
okf_version: "0.2"
type: Class
title: Sequence To Sequence Learning
resource: urn:ngm:class:sequence-to-sequence-learning
domain: machine-learning
description: Sequence-to-sequence learning is a neural modelling framework that maps an input sequence to an output sequence of possibly different length, using an encoder to compress the input into a context representation and a decoder to generate the output token by token. Originally built on recurrent networks, it now predominantly uses the attention-based transformer architecture. It is the dominant parad
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:encoder-decoder
requires:
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:machine-translation
  - urn:ngm:class:natural-language-processing
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:lstm
implements:
  - urn:ngm:class:encoder-decoder
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
bridgesTo:
  - urn:ngm:class:transformer
uses:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:recurrent-neural-network
supports:
  - urn:ngm:class:machine-translation
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:deep-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Sequence To Sequence Learning

Sequence-to-sequence learning is a neural modelling framework that maps an input sequence to an output sequence of possibly different length, using an encoder to compress the input into a context representation and a decoder to generate the output token by token. Originally built on recurrent networks, it now predominantly uses the attention-based transformer architecture. It is the dominant paradigm for machine translation, summarisation and other transduction tasks.
