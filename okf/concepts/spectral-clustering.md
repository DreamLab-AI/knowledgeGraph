---
okf_version: "0.2"
type: Class
title: Spectral Clustering
resource: urn:ngm:class:spectral-clustering
domain: machine-learning
description: "A clustering technique that partitions data using the eigenvectors of a graph Laplacian built from a pairwise similarity matrix. By embedding points into the subspace spanned by the Laplacian's smallest eigenvectors and running a simple algorithm such as k-means in that spectral space, it relaxes NP-hard graph-cut objectives (ratio cut, normalised cut) into tractable eigenproblems, allowing it to "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:clustering
uses:
  - urn:ngm:class:graph-theory
  - urn:ngm:class:dimensionality-reduction
partOf:
  - urn:ngm:class:community-detection
  - urn:ngm:class:speaker-diarisation
relatedTo:
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:speaker-diarisation
---

# Spectral Clustering

A clustering technique that partitions data using the eigenvectors of a graph Laplacian built from a pairwise similarity matrix. By embedding points into the subspace spanned by the Laplacian's smallest eigenvectors and running a simple algorithm such as k-means in that spectral space, it relaxes NP-hard graph-cut objectives (ratio cut, normalised cut) into tractable eigenproblems, allowing it to recover non-convex, connectivity-defined clusters that centroid-based methods cannot separate.
