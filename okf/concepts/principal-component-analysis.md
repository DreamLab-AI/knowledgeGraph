---
okf_version: "0.2"
type: Class
title: Principal Component Analysis
resource: urn:ngm:class:principal-component-analysis
domain: machine-learning
description: Principal Component Analysis (PCA) is an unsupervised linear technique that transforms correlated variables into a smaller set of uncorrelated components ordered by the variance they capture. The components are the eigenvectors of the data's covariance matrix, and projecting onto the leading components yields a lower-dimensional representation that preserves as much variance as possible. PCA is wi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:dimensionality-reduction
hasPart:
  - urn:ngm:class:linear-algebra
requires:
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:data-quality
enables:
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:data-visualisation
contrastsWith:
  - urn:ngm:class:feature-engineering
uses:
  - urn:ngm:class:linear-algebra
supports:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:data-processing
  - urn:ngm:class:machine-learning-model
relatedTo:
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:data-preprocessing
---

# Principal Component Analysis

Principal Component Analysis (PCA) is an unsupervised linear technique that transforms correlated variables into a smaller set of uncorrelated components ordered by the variance they capture. The components are the eigenvectors of the data's covariance matrix, and projecting onto the leading components yields a lower-dimensional representation that preserves as much variance as possible. PCA is widely used for dimensionality reduction, noise reduction, visualisation, and feature decorrelation.
