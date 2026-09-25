Semantic mapping is the process of establishing correspondences between concepts, terms, or schema elements across different knowledge representations so that their meanings align. It links source vocabularies to target ontologies, enabling data expressed under one model to be interpreted consistently under another. Semantic mapping underpins interoperability across heterogeneous knowledge graphs, databases, and linked-data sources.

### Overview

- Semantic mapping addresses the heterogeneity problem: distinct systems describe the same real-world things with different terms, granularities, and structures.
- A mapping declares how an element in one schema relates to elements in another, using relations such as equivalence, subsumption, or partial overlap.
- Mappings may be one-to-one, one-to-many, or many-to-many, and can carry transformation logic for value conversion.
- The discipline spans manual curation, rule-based matching, and machine-learning approaches that exploit lexical and structural similarity.

### Mechanisms

- Lexical matching compares labels, synonyms, and definitions to propose candidate correspondences.
- Structural matching exploits the surrounding graph topology, hierarchy, and property usage to confirm alignments.
- Embedding-based matching represents concepts as vectors so that semantically near concepts cluster together.
- Logical validation checks proposed mappings for consistency against the axioms of the participating ontologies.

### Key aspects

- Provenance: each mapping should record who created it, by what method, and with what confidence.
- Confidence scoring lets downstream consumers filter low-certainty correspondences.
- Bidirectionality: mappings may be reversible or directional depending on the transformation involved.
- Maintenance: as source and target evolve, mappings must be re-validated to avoid drift.

### Applications

- Integrating enterprise data sources into a unified [[Knowledge Graph]].
- Aligning domain ontologies to a shared upper ontology for cross-domain queries.
- Migrating legacy schemas to modern [[Linked Data]] representations.
- Powering federated search across distributed [[Knowledge Base]] systems.

### Provenance

