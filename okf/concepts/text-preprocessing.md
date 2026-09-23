---
okf_version: "0.2"
type: Class
title: Text Preprocessing
resource: urn:ngm:class:text-preprocessing
domain: machine-learning
description: Text preprocessing is the stage of a natural language processing pipeline that transforms raw text into a normalised, structured form suitable for tokenisation and modelling, encompassing steps such as lowercasing, punctuation and whitespace normalisation, removal of unwanted characters, and segmentation into sentences or tokens. It precedes and feeds directly into tokenisation, which converts the
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:data-preprocessing
enables:
  - urn:ngm:class:tokeniser
partOf:
  - urn:ngm:class:natural-language-processing
---

# Text Preprocessing

Text preprocessing is the stage of a natural language processing pipeline that transforms raw text into a normalised, structured form suitable for tokenisation and modelling, encompassing steps such as lowercasing, punctuation and whitespace normalisation, removal of unwanted characters, and segmentation into sentences or tokens. It precedes and feeds directly into tokenisation, which converts the cleaned text into the discrete units a neural network consumes. Consistent text preprocessing reduces vocabulary sparsity and noise, materially affecting downstream model quality.
