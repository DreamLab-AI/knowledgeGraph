---
okf_version: "0.2"
type: Class
title: One Hot Encoding
resource: urn:ngm:class:one-hot-encoding
domain: artificial-intelligence
description: One hot encoding is a representation technique that converts categorical variables into binary vectors, where each category is mapped to a vector containing a single high (1) value and all other positions set to zero. It removes any implied ordinal relationship between categories, allowing machine learning models that operate on numeric input to consume nominal data without inferring spurious magn
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:feature-engineering
requires:
  - urn:ngm:class:data-preprocessing
enables:
  - urn:ngm:class:neural-network
  - urn:ngm:class:recommendation-system
contrastsWith:
  - urn:ngm:class:token-embedding
  - urn:ngm:class:embedding
bridgesTo:
  - urn:ngm:class:embedding
uses:
  - urn:ngm:class:linear-algebra
supports:
  - urn:ngm:class:deep-learning
partOf:
  - urn:ngm:class:feature-engineering
relatedTo:
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:recommendation-system
---

# One Hot Encoding

One hot encoding is a representation technique that converts categorical variables into binary vectors, where each category is mapped to a vector containing a single high (1) value and all other positions set to zero. It removes any implied ordinal relationship between categories, allowing machine learning models that operate on numeric input to consume nominal data without inferring spurious magnitude. The dimensionality of the encoding equals the cardinality of the category set, which can become sparse and high-dimensional for variables with many levels.
