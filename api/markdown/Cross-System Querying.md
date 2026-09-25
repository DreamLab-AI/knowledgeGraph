Cross-system querying is the ability to issue a single query that retrieves and joins data residing in multiple independent systems or data stores. It is achieved through federation surfaces, linked-data encoding, and query mediators that translate and route requests to heterogeneous sources. It enables unified access to distributed data without centralising or duplicating it.

### Content

- Federated query engines decompose a request, push sub-queries to each source, and merge results, often relying on shared schemas, ontologies, or RDF/SPARQL semantics for alignment. The approach avoids costly data duplication but must contend with source heterogeneity, latency, partial availability, and consistent identity resolution across systems.

