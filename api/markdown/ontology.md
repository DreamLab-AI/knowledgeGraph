- ### Definition
  - In computer science and knowledge engineering, an ontology is a formal, machine-readable specification of a shared conceptualisation within a domain: it explicitly defines the classes of entities that exist, the properties and attributes of those entities, the relationships (object properties) that may hold between them, and the logical axioms that constrain valid world states. Ontologies are expressed using languages such as OWL 2 (Web Ontology Language) built atop RDF, enabling automated reasoning engines to infer implicit knowledge and detect logical inconsistencies. They serve as the schema and semantic backbone of knowledge graphs, linked data systems, and interoperability frameworks across domains.

- ### Semantic Classification
  - owl-class:: ontology:Ontology
  - owl-role:: Concept

- ### Relationships
  - uses [[RDF]]
  - uses [[OWL Class Hierarchy]]
  - enables [[Knowledge Graph]]
  - enables [[Semantic Search]]
  - relatedTo [[Linked Data]]
  - relatedTo [[Knowledge Representation]]
  - relatedTo [[SPARQL]]

- ### Content
  - Ontology engineering draws on Description Logics (DL), a family of formal knowledge representation languages with well-defined computational properties. OWL 2 profiles—EL, QL, and RL—offer different trade-offs between expressive power and reasoning tractability, with OWL 2 DL being the most expressive profile that retains decidable reasoning. Ontology authoring tools such as Protégé (Stanford) and TopBraid Composer provide graphical and textual environments for defining classes, object properties, data properties, and axioms including subClassOf, equivalentClass, disjointWith, and hasValue restrictions.
  - The Semantic Web stack (RDF, RDFS, OWL, SPARQL) underpins the Linked Data initiative, which aims to expose and interconnect public datasets as a Web of Data. Well-known public ontologies include FOAF (Friend of a Friend) for social networks, Schema.org for structured web metadata, PROV-O for provenance, and SNOMED CT and Gene Ontology for biomedical domains. In enterprise contexts, ontologies provide the shared vocabulary for data integration, enabling systems built on different data models to exchange information through a common semantic layer.
  - Ontologies are central to AI knowledge representation: they provide the structured world model over which inference engines reason, the vocabulary for annotating training data, and the schema for knowledge graphs used in retrieval-augmented generation and semantic search systems. SKOS (Simple Knowledge Organisation System) offers a lighter-weight alternative for representing thesauri and controlled vocabularies where formal reasoning is not required.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z