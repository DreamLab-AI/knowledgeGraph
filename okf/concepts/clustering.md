---
okf_version: "0.2"
type: Class
title: Clustering
resource: urn:ngm:class:clustering
domain: machine-learning
description: Clustering is an unsupervised machine learning task that partitions a set of objects into groups, or clusters, such that objects within a group are more similar to one another than to those in other groups, according to a chosen distance or similarity metric. Unlike classification it operates without predefined labels, discovering latent structure directly from the data. Algorithms differ in their
maturity: mature
quality: 0.9
is-a:
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-technique
  - urn:ngm:class:data-mining
  - urn:ngm:class:statistical-learning-theory
hasPart:
  - urn:ngm:class:distance-metric
  - urn:ngm:class:hierarchical-clustering
  - urn:ngm:class:k-means
  - urn:ngm:class:dbscan
  - urn:ngm:class:spectral-clustering
  - urn:ngm:class:gaussian-mixture-model
  - urn:ngm:class:silhouette-score
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:hdbscan
requires:
  - urn:ngm:class:distance-metric
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:embedding
  - urn:ngm:class:embedding-space
  - urn:ngm:class:similarity-function
enables:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:community-detection
  - urn:ngm:class:customer-segmentation
  - urn:ngm:class:exploratory-data-analysis
  - urn:ngm:class:topic-modelling
  - urn:ngm:class:cell-type-identification
  - urn:ngm:class:image-retrieval
  - urn:ngm:class:document-organisation
dependsOn:
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:density-estimation
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:probability-theory
implements:
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:k-means
  - urn:ngm:class:graph-laplacian
  - urn:ngm:class:manifold-hypothesis
contrastsWith:
  - urn:ngm:class:classification
  - urn:ngm:class:regression
  - urn:ngm:class:semi-supervised-learning
uses:
  - urn:ngm:class:embedding
  - urn:ngm:class:embedding-space
  - urn:ngm:class:gaussian-mixture-model
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:neural-network
  - urn:ngm:class:autoencoder
  - urn:ngm:class:t-sne
  - urn:ngm:class:umap
  - urn:ngm:class:principal-component-analysis
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:vector-database
  - urn:ngm:class:large-language-model
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:hdbscan
supports:
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:predictive-analytics
  - urn:ngm:class:representation-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:graph-analytics
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:bioinformatics
standardizedBy:
  - urn:ngm:class:scikit-learn
  - urn:ngm:class:ieee-tpami
partOf:
  - urn:ngm:class:unsupervised-learning
relatedTo:
  - urn:ngm:class:graph-analytics
  - urn:ngm:class:data-mining
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:bioinformatics
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:representation-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:density-estimation
  - urn:ngm:class:bayesian-nonparametrics
  - urn:ngm:class:information-theory
  - urn:ngm:class:combinatorial-optimisation
---

# Clustering

Clustering is an unsupervised machine learning task that partitions a set of objects into groups, or clusters, such that objects within a group are more similar to one another than to those in other groups, according to a chosen distance or similarity metric. Unlike classification it operates without predefined labels, discovering latent structure directly from the data. Algorithms differ in their cluster model, ranging from centroid-based and density-based to hierarchical and probabilistic approaches. Clustering is widely used for exploratory analysis, segmentation, anomaly detection, and as a preprocessing step for downstream learning.
