public:: true

# Social Network Graph
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b0cc9968822c7a172d586ddda8588870f9cf0f0b6065d40f8f9443faf6d9b40a",
  "@type": "Page",
  "vc:slug": "social-network-graph",
  "title": "Social Network Graph",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9686"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Network Graph"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:social-network-graph",
  "@type": "Class",
  "label": "Social Network Graph",
  "definition": "A graph-theoretic data structure in which nodes represent social actors (individuals, organisations, or automated agents) and edges encode directed or undirected social relations such as friendship, following, trust, or co-authorship. Social network graphs are analysed using network-science metrics including degree centrality, clustering coefficient, betweenness, and PageRank to reveal community structure, information diffusion pathways, and influential actors. They underpin decentralised identity federation protocols (ActivityPub, Nostr), recommendation engines, and adversarial analysis tasks such as Sybil detection. The formalism extends naturally to heterogeneous property graphs and hypergraphs when multi-typed relations or group memberships must be represented.",
  "domain": "data",
  "maturity": "established",
  "quality": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-graph",
      "label": "Knowledge Graph"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:social-graph", "label": "Social Graph"},
    {"@id": "urn:ngm:class:online-social-network", "label": "Online Social Network"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:graph-node", "label": "Graph Node"},
      {"@id": "urn:ngm:class:graph-edge", "label": "Graph Edge"},
      {"@id": "urn:ngm:class:community-structure", "label": "Community Structure"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:graph-database", "label": "Graph Database"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"},
      {"@id": "urn:ngm:class:graph-traversal-algorithm", "label": "Graph Traversal Algorithm"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:community-detection", "label": "Community Detection"},
      {"@id": "urn:ngm:class:influence-analysis", "label": "Influence Analysis"},
      {"@id": "urn:ngm:class:recommendation-system", "label": "Recommendation System"},
      {"@id": "urn:ngm:class:identity-federation", "label": "Identity Federation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:graph-theory", "label": "Graph Theory"},
      {"@id": "urn:ngm:class:network-topology", "label": "Network Topology"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:nostr-protocol", "label": "Nostr Protocol"},
      {"@id": "urn:ngm:class:activitypub", "label": "ActivityPub"},
      {"@id": "urn:ngm:class:pagerank", "label": "PageRank"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:sybil-resistance", "label": "Sybil Resistance"},
      {"@id": "urn:ngm:class:social-media-analytics", "label": "Social Media Analytics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:citation-network", "label": "Citation Network"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:graph-neural-network", "label": "Graph Neural Network"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:virtual-community-platform", "label": "Virtual Community Platform"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:federation-surface", "label": "Federation Surface"},
      {"@id": "urn:ngm:class:web-of-trust", "label": "Web of Trust"},
      {"@id": "urn:ngm:class:small-world-network", "label": "Small-World Network"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:social-network-graph:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b0cc9968822c7a172d586ddda8588870f9cf0f0b6065d40f8f9443faf6d9b40a"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A **Social Network Graph** is a [[Graph Theory]]-rooted data structure in which nodes represent social actors — people, organisations, bots, or pseudonymous accounts — and edges encode directed or undirected social relations such as friendship, following, trust, endorsement, or co-authorship. Analytical methods from [[Network Science]] including degree [[Centrality]], [[Clustering Coefficient]], [[Betweenness Centrality]], and [[PageRank]] are applied to surface community structure, information diffusion pathways, and influential actors. Social network graphs are the structural backbone of decentralised identity federation protocols ([[ActivityPub]], [[Nostr Protocol]]), collaborative filtering [[Recommendation System]]s, and adversarial tasks such as [[Sybil Resistance]].

- ### Overview
  - Social network graphs occupy the intersection of [[Graph Theory]], [[Social Network Analysis]], and large-scale distributed systems. Unlike generic [[Knowledge Graph]]s that encode world knowledge as typed triples, social network graphs are specifically concerned with relational ties between social agents and the dynamics of those ties over time.
  - The model was formalised in sociometry and sociology (Moreno, 1930s) before being adopted by computer science. Modern instantiations operate at web-scale (billions of nodes, trillions of edges) and are stored in specialised [[Graph Database]]s (e.g. Neo4j, Amazon Neptune, JanusGraph) or distributed graph processing engines (Apache Giraph, GraphX).
  - Edges may carry weights (interaction frequency, trust strength), timestamps (temporal graphs), and typed labels (multi-relational graphs). This richness supports nuanced analysis well beyond binary adjacency matrices.
  - The paradigm is foundational to [[Decentralised Identity]] efforts: protocols like [[Nostr Protocol]] represent the global follow-graph as a peer-propagated [[Social Network Graph]], while [[ActivityPub]] implements a federated variant across independent server instances.
  - Social network graphs exhibit well-documented structural properties: [[Small-World Network]] topology (short average path length), scale-free degree distributions following power laws, and strong community/cluster structure, all of which influence algorithm design and attack surface.

- ### Key Components
  - **Nodes (vertices)**
    - Represent individual actors: people, bots, organisations, or pseudonymous keypairs ([[Digital Identity]])
    - May carry attribute vectors: profile metadata, embedding representations for [[Graph Neural Network]] models
  - **Edges (links)**
    - Directed edges encode asymmetric relations (follow, mention, cite); undirected edges encode symmetric relations (friendship, co-authorship)
    - Weighted edges record interaction strength, frequency, or [[Web of Trust]] score
    - Temporal edges record timestamps, enabling dynamic network analysis
  - **[[Community Structure]]**
    - Clusters of densely connected nodes identified by algorithms such as Louvain, Leiden, Girvan–Newman, or spectral partitioning
    - Communities correspond to interest groups, organisations, or echo chambers
  - **[[Graph Traversal Algorithm]]s**
    - Breadth-first search (BFS) and depth-first search (DFS) for neighbourhood exploration
    - [[PageRank]] and HITS for authority/hub scoring
    - Personalised PageRank (PPR) for local community recommendation
  - **[[Network Topology]]**
    - Degree distribution, diameter, density, modularity score, and giant connected component characterise the macrostructure
  - **[[Graph Node]] attributes and [[Graph Edge]] attributes**
    - Property graphs extend the core model with key-value pairs on both nodes and edges, stored natively in [[Graph Database]]s

- ### Mechanisms
  - **[[Community Detection]]**
    - Partitions the graph into cohesive subgraphs using modularity optimisation (Louvain, Leiden) or random-walk methods (Walktrap, Infomap)
    - Output feeds content recommendation, ad targeting, and coordinated inauthentic behaviour detection
  - **[[Influence Analysis]]**
    - Ranks nodes by propagation potential using [[PageRank]], eigenvector centrality, or influence maximisation (Kempe–Kleinberg–Tardos greedy seeding)
    - Drives viral marketing, misinformation cascade prediction, and public health modelling
  - **[[Recommendation System]] via collaborative filtering**
    - Leverages the graph to recommend friends, content, or products based on neighbourhood overlap or random-walk proximity
    - Graph-based recommendations outperform matrix-factorisation baselines on cold-start problems
  - **[[Graph Neural Network]] (GNN) encoding**
    - Node2Vec, GraphSAGE, and GCN architectures learn low-dimensional embeddings by aggregating neighbourhood features, enabling link prediction, node classification, and anomaly detection
    - Bridges [[Social Network Graph]] to [[Machine Learning]] pipelines
  - **[[Sybil Resistance]] and trust propagation**
    - SybilGuard, SybilLimit, and [[Web of Trust]] protocols exploit the structural separation between honest-region and Sybil-region subgraphs
    - Nostr's [[Web of Trust]] score traverses the [[Social Network Graph]] hop by hop to compute per-user trust budgets
  - **Temporal and dynamic analysis**
    - Streaming graph frameworks (Apache Flink, GraphBolt) maintain incrementally updated statistics for evolving graphs
    - Detects emerging communities, link churn, and influence shifts in near real-time

- ### Applications
  - **Decentralised social media** — [[Nostr Protocol]] and [[ActivityPub]] represent the follow-graph as a distributed [[Social Network Graph]]; clients compute local [[Web of Trust]] scores to filter spam without central moderation
  - **[[Recommendation System]]s** — Pinterest's PinSage, Twitter's GraphJet, and LinkedIn's People You May Know are all graph-traversal engines over a [[Social Network Graph]]
  - **Public health epidemiology** — contact-tracing graphs model disease transmission; the same structural algorithms apply to information contagion modelling
  - **Corporate intelligence and [[Social Media Analytics]]** — analyst platforms ingest public social graphs to map influence networks, detect coordinated campaigns, and benchmark brand reach
  - **[[Decentralised Identity]] and [[Identity Federation]]** — W3C DIDs and Verifiable Credentials anchor to public key pairs whose social graph encodes the issuer–holder–verifier trust triangle
  - **[[Virtual Community Platform]]s in the metaverse** — social graphs inform avatar proximity, event invitation, and cross-realm reputation portability in persistent virtual worlds
  - **Fraud and [[Sybil Resistance]]** — payment networks (Stellar, Ripple) and distributed systems use trust-graph traversal to bound exposure to fraudulent actors
  - **Academic citation networks** — co-authorship graphs and citation graphs share the same structural formalism; [[Citation Network]] analysis identifies research fronts and gatekeepers

- ### Relationships
  - hasPart:: [[Graph Node]]
  - hasPart:: [[Graph Edge]]
  - hasPart:: [[Community Structure]]
  - partOf:: [[Graph Database]]
  - requires:: [[Digital Identity]]
  - requires:: [[Graph Traversal Algorithm]]
  - enables:: [[Community Detection]]
  - enables:: [[Influence Analysis]]
  - enables:: [[Recommendation System]]
  - enables:: [[Identity Federation]]
  - dependsOn:: [[Graph Theory]]
  - dependsOn:: [[Network Topology]]
  - uses:: [[Nostr Protocol]]
  - uses:: [[ActivityPub]]
  - uses:: [[PageRank]]
  - supports:: [[Sybil Resistance]]
  - supports:: [[Social Media Analytics]]
  - contrastsWith:: [[Knowledge Graph]]
  - contrastsWith:: [[Citation Network]]
  - bridges-to:: [[Graph Neural Network]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Virtual Community Platform]]
  - relatedTo:: [[Federation Surface]]
  - relatedTo:: [[Web of Trust]]
  - relatedTo:: [[Small-World Network]]

- ### Standards & Context
  - **ActivityStreams 2.0 / [[ActivityPub]]** — W3C Recommendation (2018) defining the actor–object–activity vocabulary used to serialise social graph state across federated servers (Mastodon, Misskey, Pixelfed)
  - **W3C Social Web Working Group** — produced ActivityPub, WebSub, and Micropub as the canonical open-standard social graph interchange layer
  - **[[Nostr Protocol]]** — NIP-01 through NIP-65 define kind-3 contact lists (follow-graph), kind-10002 relay lists, and NIP-65 outbox model for efficient graph propagation without a central server
  - **W3C Decentralised Identifiers (DIDs)** — provides the identity anchor for nodes in open social graphs; each DID resolves to a DID Document with public keys and service endpoints
  - **ISO/IEC 27001** — information security management principles apply to social graph data, which is personally identifiable and sensitive
  - **GDPR (EU) / UK GDPR** — social graph data constitutes personal data; controllers must establish a lawful basis, implement data minimisation, and honour right-to-erasure requests, which are technically complex on append-only graph stores
  - **IEEE P7006** — Personal Data AI Agents standard, relevant to agent-driven social graph traversal and automated relationship inference

- ### Provenance
  - sources:: Graph Theory (Diestel), Social Network Analysis (Wasserman & Faust), W3C ActivityPub Recommendation, Nostr NIPs repository, NetworkX documentation
  - updated:: 2026-06-13
