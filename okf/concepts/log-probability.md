---
okf_version: "0.2"
type: Class
title: Log-Probability
resource: urn:ngm:class:log-probability
domain: ai
description: Log-probability is the natural logarithm of a probability value, used in place of raw probabilities to avoid numerical underflow when multiplying many small probabilities and to convert products into numerically stable sums. In sequence models it expresses the likelihood a model assigns to each candidate token or output, and is the quantity directly optimised during maximum-likelihood training. De
maturity: established
quality: 0
is-a:
  - urn:ngm:class:probability-theory
---

# Log-Probability

Log-probability is the natural logarithm of a probability value, used in place of raw probabilities to avoid numerical underflow when multiplying many small probabilities and to convert products into numerically stable sums. In sequence models it expresses the likelihood a model assigns to each candidate token or output, and is the quantity directly optimised during maximum-likelihood training. Decoding strategies such as beam search rank and prune candidate sequences by their accumulated log-probability.
