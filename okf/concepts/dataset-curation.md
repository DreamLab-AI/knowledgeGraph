---
okf_version: "0.2"
type: Class
title: Dataset Curation
resource: urn:ngm:class:dataset-curation
domain: data
description: Dataset curation is the deliberate selection, cleaning, documentation, and maintenance of data collections used to train and evaluate machine learning models. It encompasses sourcing and licensing, de-duplication, filtering of low-quality or harmful content, labelling and label auditing, balancing for coverage and representation, and versioning with provenance records. Curation quality is a first-
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:data-curation
requires:
  - urn:ngm:class:data-quality
enables:
  - urn:ngm:class:supervised-learning
partOf:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:dataset
  - urn:ngm:class:training-data
  - urn:ngm:class:data-labelling
---

# Dataset Curation

Dataset curation is the deliberate selection, cleaning, documentation, and maintenance of data collections used to train and evaluate machine learning models. It encompasses sourcing and licensing, de-duplication, filtering of low-quality or harmful content, labelling and label auditing, balancing for coverage and representation, and versioning with provenance records. Curation quality is a first-order determinant of model behaviour: the same architecture trained on better-curated data is routinely more capable, safer, and easier to evaluate.
