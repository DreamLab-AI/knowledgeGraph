public:: true

# Community Detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4f39a66cd234dfa92e58cfd3ebda12c768818d4c033f809a1060be202c0a1460",
  "@type": "Page",
  "vc:slug": "community-detection",
  "title": "Community Detection",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:graph-theory",
      "vc:label": "Graph Theory"
    },
    {
      "@id": "urn:visionflow:linked:data-aggregation",
      "vc:label": "Data Aggregation"
    },
    {
      "@id": "urn:visionflow:linked:network-analysis",
      "vc:label": "Network Analysis"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Community Detection"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:community-detection",
  "@type": "Class",
  "label": "Community Detection",
  "definition": "Community detection is the computational task of identifying cohesive subgroups, or communities, within a network graph, where nodes within each group are more densely interconnected than they are with nodes in other groups. Algorithms such as the Louvain and Leiden methods optimise a modularity objective to partition the graph, whilst spectral clustering, label propagation, and stochastic block models offer alternative formulations. The problem is formally NP-hard in its general form, making approximation and heuristic approaches the practical norm. Applications span social-network analysis, bioinformatics, knowledge-graph organisation, recommendation systems, and cybersecurity anomaly detection.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-analysis",
      "label": "Network Analysis"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:louvain-algorithm",
        "label": "Louvain Algorithm"
      },
      {
        "@id": "urn:ngm:class:leiden-algorithm",
        "label": "Leiden Algorithm"
      },
      {
        "@id": "urn:ngm:class:spectral-clustering",
        "label": "Spectral Clustering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-aggregation",
        "label": "Data Aggregation"
      },
      {
        "@id": "urn:ngm:class:recommendation-systems",
        "label": "Recommendation Systems"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-embedding",
        "label": "Knowledge Graph Embedding"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:graph-neural-networks",
        "label": "Graph Neural Networks"
      },
      {
        "@id": "urn:ngm:class:matrix-factorisation",
        "label": "Matrix Factorisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:hierarchical-clustering",
        "label": "Hierarchical Clustering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:social-network-analysis",
        "label": "Social Network Analysis"
      },
      {
        "@id": "urn:ngm:class:link-prediction",
        "label": "Link Prediction"
      },
      {
        "@id": "urn:ngm:class:clustering",
        "label": "Clustering"
      },
      {
        "@id": "urn:ngm:class:network-topology",
        "label": "Network Topology"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:blockchain-governance",
        "label": "Blockchain Governance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:graph-clustering",
      "label": "Graph Clustering"
    },
    {
      "@id": "urn:ngm:class:network-partitioning",
      "label": "Network Partitioning"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:community-detection:9cdc7f1820e4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4f39a66cd234dfa92e58cfd3ebda12c768818d4c033f809a1060be202c0a1460"
  },
  "vc:resolutions": [
    {
      "raw": "[[Graph Theory]]",
      "resolved": "urn:visionflow:linked:graph-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Aggregation]]",
      "resolved": "urn:visionflow:linked:data-aggregation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Network Analysis]]",
      "resolved": "urn:visionflow:linked:network-analysis",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Community detection is the task of partitioning a [[Network Analysis]] graph into cohesive subgroups — called communities or clusters — where nodes within a group share significantly more edges internally than with the rest of the network. It is a fundamental problem in [[Graph Theory]], bridging [[Clustering]] in machine learning with structural analysis of real-world networked systems including social platforms, biological pathways, and knowledge graphs. Core algorithmic families include modularity-optimisation methods (e.g. [[Louvain Algorithm]], [[Leiden Algorithm]]), [[Spectral Clustering]], [[Label Propagation]], and probabilistic generative approaches such as the [[Stochastic Block Model]].

- ### Overview
  - Community detection reveals the latent modular organisation of complex networks. Real-world graphs — from citation networks and protein-interaction maps to the web and peer-to-peer overlays — exhibit a pronounced tendency for densely connected local subgraphs separated by sparser inter-group links. Identifying these groups is critical for:
    - Reducing the dimensionality of large graphs for downstream [[Machine Learning]] tasks.
    - Guiding personalised [[Recommendation Systems]] by grouping users or items with shared structural neighbourhood.
    - Detecting coordinated manipulation or fraud clusters via [[Anomaly Detection]].
    - Organising [[Knowledge Graph Embedding]] spaces to improve entity disambiguation.
  - The problem is NP-hard in its fully general formulation; practical algorithms use greedy optimisation, spectral decomposition, or random-process simulation to achieve tractable approximate solutions.
  - A distinguishing property of community detection — relative to hard [[Graph Partitioning]] — is that it is typically unsupervised: the number of communities and their sizes emerge from the data rather than being fixed in advance.

- ### Key Algorithmic Families
  - **Modularity Optimisation**
    - Modularity (Q) measures the fraction of edges within communities minus the expected fraction under a random null model. The [[Louvain Algorithm]] maximises Q greedily in two phases (node moves and community merging), achieving near-linear time complexity. The [[Leiden Algorithm]] refines Louvain to guarantee community connectivity and avoid arbitrarily badly connected communities.
    - Limitation: modularity exhibits a resolution limit — very small communities in large graphs may be merged artificially.
  - **Spectral Methods**
    - [[Spectral Clustering]] computes the eigenvectors of the graph Laplacian (or normalised variants) and embeds nodes in a low-dimensional eigenspace before applying k-means. The Fiedler vector (second eigenvector) bisects the graph and can be applied recursively for hierarchical decomposition.
    - Strongly related to [[Matrix Factorisation]] approaches such as NMF on the adjacency or modularity matrix.
  - **Label Propagation**
    - Each node adopts the label most common among its neighbours, iterated until convergence. Near-linear complexity makes it suitable for very large graphs; stochastic tie-breaking introduces variation exploited by ensemble variants.
  - **Stochastic Block Model (SBM)**
    - The [[Stochastic Block Model]] is a probabilistic generative model where connection probability depends only on which blocks (communities) two nodes belong to. Inference via belief propagation or MCMC recovers planted block structure, and extensions (degree-corrected SBM, nested SBM) handle heterogeneous degree distributions.
  - **Deep / Graph Neural Network Methods**
    - [[Graph Neural Networks]] (GNNs) — in particular graph auto-encoders and variational graph auto-encoders — learn node embeddings capturing structural proximity. Community assignment is then obtained via clustering in the embedding space, enabling end-to-end training when partial community labels are available. Related to [[Node Embedding]] and [[Self-Supervised Learning]].
  - **Overlapping and Hierarchical Detection**
    - Most classical algorithms assign each node to exactly one community. Overlapping methods (e.g. BIGCLAM, CPM) allow nodes to belong to multiple communities, important in social and biological settings.
    - [[Hierarchical Clustering]] dendrograms such as Girvan–Newman (edge betweenness removal) reveal multi-scale structure at the cost of higher computational complexity.
  - **[[Random Walks]]**
    - Algorithms such as Walktrap and Infomap encode community structure through the statistics of [[Random Walks]] on the graph. Infomap minimises the description length (MDL) of a random walk using the map equation, providing information-theoretic grounding.

- ### Quality Metrics and Evaluation
  - **Modularity (Q)**: the most widely used intrinsic quality measure; ranges from −0.5 to 1 (higher is better), though susceptible to resolution-limit artefacts.
  - **Normalised Mutual Information (NMI)** and **Adjusted Rand Index (ARI)**: external metrics comparing detected communities to a ground-truth partition; require labelled benchmarks such as the LFR benchmark graphs.
  - **Conductance**: ratio of cut edges to internal edges; lower values indicate more tightly bound communities. Often used in practice for evaluating real-world graph partitions.
  - **Coverage and Performance**: fraction of intra-community edges (coverage) versus fraction of inter-community non-edges (performance) offer complementary views.
  - Benchmark datasets include Zachary's Karate Club (toy), LFR synthetic benchmarks, SNAP social-network datasets, and OpenStreetMap road-network graphs.

- ### Applications and Use Cases
  - **Social Network Analysis**: identifying interest groups, influence clusters, or echo chambers in platforms such as Twitter/X, Reddit, or LinkedIn feeds into content moderation and targeted advertising.
  - **Bioinformatics**: clustering protein-protein interaction (PPI) networks reveals functional modules and candidate disease genes; RNA co-expression networks expose pathway structure.
  - **Cybersecurity**: detecting botnets, coordinated inauthentic accounts, or insider-threat clusters via [[Anomaly Detection]] on network traffic or access-log graphs.
  - **Recommendation Systems**: collaborative-filtering graphs benefit from community-aware neighbourhood restriction, improving both accuracy and scalability of [[Recommendation Systems]].
  - **Knowledge Graphs**: partitioning large [[Knowledge Graph Embedding]] spaces accelerates distributed query execution and enables topic-modelling over entity clusters.
  - **Urban and Transport Networks**: community structure in road or transit graphs (using [[Network Topology]]) supports zone delineation, traffic management, and resilience planning.
  - **Finance**: detecting clusters of correlated assets or suspicious transaction networks for [[Fraud Detection]] and systemic-risk analysis.
  - **Distributed Systems**: partitioning a communication or dependency graph into communities minimises cross-partition traffic, guiding [[Distributed Systems]] placement and microservice decomposition.
  - **Blockchain Governance**: community structure in blockchain transaction graphs reveals wallet clusters and governance-participant coalitions, bridging to [[Blockchain Governance]] analysis.

- ### Relationships
  - subClassOf:: [[Network Analysis]]
  - requires:: [[Graph Theory]]
  - requires:: [[Modularity Optimisation]]
  - hasPart:: [[Louvain Algorithm]]
  - hasPart:: [[Leiden Algorithm]]
  - hasPart:: [[Spectral Clustering]]
  - hasPart:: [[Label Propagation]]
  - hasPart:: [[Stochastic Block Model]]
  - uses:: [[Graph Neural Networks]]
  - uses:: [[Matrix Factorisation]]
  - uses:: [[Random Walks]]
  - enables:: [[Data Aggregation]]
  - enables:: [[Recommendation Systems]]
  - enables:: [[Anomaly Detection]]
  - enables:: [[Knowledge Graph Embedding]]
  - contrastsWith:: [[Graph Partitioning]]
  - contrastsWith:: [[Hierarchical Clustering]]
  - relatedTo:: [[Social Network Analysis]]
  - relatedTo:: [[Link Prediction]]
  - relatedTo:: [[Clustering]]
  - relatedTo:: [[Network Topology]]
  - bridges-to:: [[Distributed Systems]]
  - bridges-to:: [[Blockchain Governance]]

- ### Semantic Classification
  - owl-class:: graph-theory:CommunityDetection
  - owl-role:: Class
  - sameAs:: [[Graph Clustering]]
  - sameAs:: [[Network Partitioning]]

- ### Standards & Context
  - No single formal ISO/IEEE standard governs community detection; however, the field draws on:
    - **NetworkX** (Python): de-facto reference implementation supporting Louvain, Girvan–Newman, and greedy modularity algorithms.
    - **igraph** (R/Python/C): widely used across bioinformatics and social-science research.
    - **SNAP (Stanford Network Analysis Project)**: provides large-scale benchmark datasets and reference implementations.
    - The **Graph500** and **LDBC Social Network Benchmark (SNB)** include community-detection workloads for evaluating graph-processing systems at scale.
    - **W3C RDF/OWL**: community detection algorithms are applied to RDF knowledge graphs within the Semantic Web stack, aligning with [[Linked Data]] and [[Ontology]] management practices.
  - The [[Louvain Algorithm]] and [[Leiden Algorithm]] are reference algorithms in many graph database products (Neo4j Graph Data Science Library, TigerGraph, AWS Neptune Analytics).

- ### Provenance
  - sources:: Newman & Girvan (2004) modularity definition; Blondel et al. (2008) Louvain algorithm; Traag et al. (2019) Leiden algorithm; Fortunato (2010) community detection review; Rosvall & Bergstrom (2008) Infomap
  - updated:: 2026-06-13
