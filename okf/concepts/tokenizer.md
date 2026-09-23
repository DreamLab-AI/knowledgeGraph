---
okf_version: "0.2"
type: Class
title: Tokenizer
resource: urn:ngm:class:tokenizer
domain: ai
description: A tokenizer is the component that converts raw text into the discrete units (tokens) a language model processes, and back again. Modern tokenizers use subword algorithms such as byte-pair encoding, WordPiece, or unigram language models to balance vocabulary size against sequence length, representing common words as single tokens and rare words as compositions of smaller pieces. The tokenizer defin
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:tokenization
enables:
  - urn:ngm:class:natural-language-processing
supports:
  - urn:ngm:class:transformer
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-discipline
---

# Tokenizer

A tokenizer is the component that converts raw text into the discrete units (tokens) a language model processes, and back again. Modern tokenizers use subword algorithms such as byte-pair encoding, WordPiece, or unigram language models to balance vocabulary size against sequence length, representing common words as single tokens and rare words as compositions of smaller pieces. The tokenizer defines the model's vocabulary and directly affects context-window usage, multilingual fairness, handling of code and numbers, and ultimately the cost and capability of the system.
