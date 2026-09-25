An adjacency matrix is a square matrix representation of a graph in which the entry at row i and column j records whether, or how strongly, vertex i is connected to vertex j. For a graph of n vertices it is an n-by-n matrix, symmetric for undirected graphs and potentially weighted to encode edge costs. It is a foundational data structure for graph algorithms, spectral analysis and graph neural networks.

### Overview

- For a graph with n vertices, the adjacency matrix A is n-by-n; A[i][j] is non-zero when an edge connects vertex i to vertex j.
- Undirected graphs yield symmetric matrices, directed graphs need not be symmetric, and weighted graphs store edge weights rather than binary indicators.
- Matrix powers reveal connectivity: the (i,j) entry of A^k counts walks of length k between vertices, linking the structure to combinatorial path counts.
- The eigenvalues and eigenvectors of the adjacency or related Laplacian matrix expose spectral properties used in clustering, ranking and embedding.

### Key aspects

- Symmetry: undirected graphs produce symmetric matrices.
- Weighting: entries may be binary or carry edge costs.
- Density trade-off: dense storage costs O(n squared) memory, favouring sparse representations for large, sparse graphs.
- Spectral structure: eigen-decomposition underpins spectral graph methods.

### Applications

- Computing connectivity and reachability in networks.
- Spectral clustering and community detection.
- Message passing in graph neural networks.
- Ranking via PageRank and related eigenvector centralities.

### Provenance

