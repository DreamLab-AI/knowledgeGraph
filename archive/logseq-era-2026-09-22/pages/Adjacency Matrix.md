public:: true

# Adjacency Matrix

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:adjacency-matrix", "@type":"Page", "title":"Adjacency Matrix", "vc:slug":"adjacency-matrix", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:adjacency-matrix",
  "@type":"Class",
  "label":"Adjacency Matrix",
  "definition":"An adjacency matrix is a square matrix representation of a graph in which the entry at row i and column j records whether, or how strongly, vertex i is connected to vertex j. For a graph of n vertices it is an n-by-n matrix, symmetric for undirected graphs and potentially weighted to encode edge costs. It is a foundational data structure for graph algorithms, spectral analysis and graph neural networks.",
  "domain":"data",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:graph-representation","label":"Graph Representation"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:matrix","label":"Matrix"},
      {"@id":"urn:ngm:class:linear-algebra","label":"Linear Algebra"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:graph-theory","label":"Graph Theory"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:network-analysis","label":"Network Analysis"},
      {"@id":"urn:ngm:class:graph-neural-network","label":"Graph Neural Network"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:pagerank","label":"PageRank"},
      {"@id":"urn:ngm:class:shortest-path","label":"Shortest Path"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:graph-representation","label":"Graph Representation"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:graph-theory","label":"Graph Theory"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:sparse-matrix","label":"Sparse Matrix"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:linear-algebra","label":"Linear Algebra"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:graph-neural-network","label":"Graph Neural Network"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:sparse-matrix","label":"Sparse Matrix"},
      {"@id":"urn:ngm:class:network-analysis","label":"Network Analysis"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- An [[Adjacency Matrix]] is a square matrix encoding the connections of a graph, with each entry recording whether or how strongly two vertices are linked.
	- It is a concrete [[Graph Representation]] built from a [[Matrix]] and grounded in [[Graph Theory]].
	- It enables [[Network Analysis]] and serves as input to a [[Graph Neural Network]].
- ### Overview
	- For a graph with n vertices, the adjacency matrix A is n-by-n; A[i][j] is non-zero when an edge connects vertex i to vertex j.
	- Undirected graphs yield symmetric matrices, directed graphs need not be symmetric, and weighted graphs store edge weights rather than binary indicators.
	- Matrix powers reveal connectivity: the (i,j) entry of A^k counts walks of length k between vertices, linking the structure to combinatorial path counts.
	- The eigenvalues and eigenvectors of the adjacency or related Laplacian matrix expose spectral properties used in clustering, ranking and embedding.
- ### Key aspects
	- Symmetry: undirected graphs produce symmetric matrices.
	- Weighting: entries may be binary or carry edge costs.
	- Density trade-off: dense storage costs O(n squared) memory, favouring sparse representations for large, sparse graphs.
	- Spectral structure: eigen-decomposition underpins spectral graph methods.
- ### Applications
	- Computing connectivity and reachability in networks.
	- Spectral clustering and community detection.
	- Message passing in graph neural networks.
	- Ranking via PageRank and related eigenvector centralities.
- ### Relationships
	- uses:: [[Matrix]]
	- uses:: [[Linear Algebra]]
	- requires:: [[Graph Theory]]
	- enables:: [[Network Analysis]]
	- enables:: [[Graph Neural Network]]
	- supports:: [[PageRank]]
	- supports:: [[Shortest Path]]
	- implements:: [[Graph Representation]]
	- partOf:: [[Graph Theory]]
	- contrastsWith:: [[Sparse Matrix]]
	- dependsOn:: [[Linear Algebra]]
	- bridgesTo:: [[Graph Neural Network]]
	- relatedTo:: [[Sparse Matrix]]
	- relatedTo:: [[Network Analysis]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
