---
okf_version: "0.2"
type: Class
title: Constrained Decoding
resource: urn:ngm:class:constrained-decoding
domain: machine-learning
description: A family of inference-time techniques that restrict the token choices of a language model during generation so that output is guaranteed to satisfy formal constraints — a JSON schema, a context-free grammar, a regular expression, or required lexical content. At each decoding step the sampler masks tokens that would violate the constraint, typically by intersecting the model's next-token distributi
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:text-generation
enables:
  - urn:ngm:class:structured-output
uses:
  - urn:ngm:class:finite-state-machine
  - urn:ngm:class:sampling
relatedTo:
  - urn:ngm:class:beam-search
  - urn:ngm:class:large-language-model
---

# Constrained Decoding

A family of inference-time techniques that restrict the token choices of a language model during generation so that output is guaranteed to satisfy formal constraints — a JSON schema, a context-free grammar, a regular expression, or required lexical content. At each decoding step the sampler masks tokens that would violate the constraint, typically by intersecting the model's next-token distribution with the valid transitions of a compiled automaton, yielding syntactically valid structured output without retraining the model.
