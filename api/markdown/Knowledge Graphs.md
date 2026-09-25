Structured representations of knowledge as entities and the typed relationships between them, expressed as a graph of nodes and labelled edges grounded in an ontology, enabling querying, reasoning, and inference over heterogeneous data.

### Semantic Classification

### Content

- Knowledge graphs model a domain as interconnected entities linked by typed relationships, often grounded in an ontology that defines the permitted classes and properties. They allow heterogeneous data to be integrated and queried in terms of meaningful connections rather than isolated records.
- Built on standards such as RDF and stored in graph databases or triplestores, knowledge graphs support reasoning, question answering and search, and they are used in semantic web applications, enterprise data integration and recommendation systems.

### Current Landscape (2026)

- GraphRAG has become the dominant enterprise pattern for grounding LLMs, popularised by Microsoft Research's April 2024 paper (arXiv:2404.16130); by 2026 vendors and analysts frame the knowledge graph as an "enterprise knowledge layer" that externalises knowledge for accuracy, explainability and governance rather than baking it into the model.
- Cost and latency of graph-backed retrieval have collapsed through 2025: Microsoft's LazyGraphRAG (June 2025) cut full-index cost to roughly 0.1%, its January 2026 Dynamic Community Selection reduced token usage by around 79%, and open-source HippoRAG 2 and LightRAG reach comparable quality at 10-30x lower cost via Personalised PageRank over LLM-extracted graphs.
- LLM-driven construction has removed the historic bottleneck of manual schema and entity extraction, with reported ~95% semantic alignment to human-crafted schemas; new entrants such as Lovelace AI's Elemental (led by former Google Cloud AI head Andrew Moore) pitch AI-assisted graph building directly against Palantir and Neo4j.
- Standards matured sharply: ISO/IEC 39075 (GQL), the first standardised property-graph query language, was published in April 2024, and the W3C RDF & SPARQL Working Group (2025-2027 charter) is advancing RDF 1.2 and SPARQL 1.2, folding in RDF-star statement-level annotations, with a SPARQL 1.2 Query working draft dated June 2026.
- Key players span Neo4j (dominant in enterprise but with licensing friction at scale), Amazon Neptune, FalkorDB, Graphwise/Ontotext GraphDB (versions 11/11.1 adding GraphRAG, broad LLM support and MCP integration), plus embedded engines Kuzu, Memgraph and DuckDB for lightweight and per-session ephemeral graphs.
- Regulation is a live driver: the EU AI Act's high-risk transparency, auditability and accuracy requirements taking effect through 2026 favour graph-based reasoning traces, and independent benchmarks (UK National Innovation Centre for Data; Diffbot KG-LM) report GraphRAG agents markedly more truthful than vector-only retrieval.
- Frontier and open challenges as of 2026 include the absence of stable benchmarks for evaluating LLM-generated graphs (GraphRAG-Bench at ICLR 2026 found only +4.5% on HotpotQA at 2.3x latency, i.e. it helps relational not factoid queries), real-time graph freshness, federated cross-departmental graphs, and multimodal graphs integrating image, video and audio nodes alongside triples.

### References

- 1. SiliconANGLE (2026). Enterprise knowledge layer powers modern gen AI. https://siliconangle.com/2026/07/29/enterprise-knowledge-layer-powers-modern-gen-ai-neo4jgraphtalk/
- 2. SigmaJunction (2026). GraphRAG in 2026: Why Knowledge Graphs Are the Missing Piece. https://sigmajunction.com/blog/graphrag-knowledge-graphs-enterprise-ai-2026
- 3. Tech with Colonel (2026). RAG in 2025-2026: State of the Art. https://www.techwithcolonel.com/artifact/rag-state-of-the-art-2026.html
- 4. ISO/IEC (2024). ISO/IEC 39075:2024 Information technology — Database languages — GQL. https://www.iso.org/standard/76120.html
- 5. W3C (2026). SPARQL 1.2 Query Language (Working Draft). https://www.w3.org/TR/sparql12-query/
- 6. Graphwise (2026). How GraphDB 11 & 11.1 Let Organizations Unlock AI-powered Knowledge Graphs. https://graphwise.ai/blog/how-graphdb-11-lets-organizations-unlock-ai-powerd-knowledge-graphs/

### Provenance

