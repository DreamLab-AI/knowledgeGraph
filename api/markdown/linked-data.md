- ### Definition
  - Linked Data is a methodology and set of design principles for publishing structured data on the Web such that machines can discover, traverse, and aggregate information across organisational and domain boundaries. Formalised by Tim Berners-Lee in 2006, it requires that every entity be identified by an [[HTTP]]-resolvable [[URI]], that dereferencing that URI returns a meaningful [[RDF]] description, and that descriptions include typed outbound links to further URIs — creating a self-extending, decentralised [[Knowledge Graph]] of global scope. It extends the document-centric [[World Wide Web]] into a Web of Data in which nodes are real-world entities and edges are semantically typed predicates drawn from shared [[Ontology|ontologies]] such as [[Schema.org]] and [[Dublin Core]].

- ### Overview
  - Linked Data is the practical application layer of the [[Semantic Web]] stack, sitting above raw [[RDF]] syntax and below higher-level services such as [[SPARQL]] endpoints and reasoning engines.
  - Its core ambition is to dissolve data silos by making every dataset a first-class citizen on the Web, discoverable and traversable without proprietary adapters or bespoke ETL pipelines.
  - The approach scales from a single government dataset published as [[Turtle]] files to the billions of triples in the [[Wikidata]] open knowledge base, all interconnected through shared URI namespaces.
  - Linked Data is not inherently open (private enterprise graphs can follow the same principles behind authentication), though the term [[Linked Open Data]] specifically denotes publicly accessible datasets under open licences.
  - The W3C [[Linked Data Platform]] (LDP) Recommendation provides a RESTful HTTP API layer for reading, writing, and managing Linked Data containers, enabling CRUD operations over RDF resources without requiring a SPARQL update interface.

- ### Key Principles
  - Tim Berners-Lee's four Linked Data principles:
    - **Use URIs as names for things** — every resource, including real-world entities, should have a globally unique identifier.
    - **Use HTTP URIs** — identifiers should be resolvable over the standard Web protocol so agents can look them up without specialist software.
    - **Return useful information in [[RDF]] or [[JSON-LD]] when a URI is looked up** — dereferencing should yield structured, machine-readable metadata.
    - **Include links to other URIs** — descriptions should reference related resources, enabling graph traversal and discovery.
  - These principles collectively implement content negotiation: a browser request for a URI returns an HTML page while a machine request returns RDF data about the same entity.

- ### Core Components
  - **[[RDF]] (Resource Description Framework)** — the universal data model: subject–predicate–object triples that form the atomic unit of Linked Data. All Linked Data is expressible as an RDF graph.
  - **[[URI]] / IRI** — internationalised resource identifiers that globally name entities, properties, and classes. HTTP-based IRIs are preferred for dereferencability.
  - **[[SPARQL]]** — the W3C standard query language for RDF triple stores and Linked Data endpoints; supports federated queries spanning multiple remote endpoints via the SERVICE clause.
  - **[[JSON-LD]]** — a JSON-based serialisation of [[RDF]] that is the primary format for embedding Linked Data in web pages and REST APIs; used extensively in [[Schema.org]] markup.
  - **[[Turtle]]** — a concise, human-readable serialisation syntax for RDF; widely used for ontology authoring and dataset publication.
  - **[[OWL]] (Web Ontology Language)** — extends [[RDF Schema]] with richer axioms for class hierarchies, property constraints, and logical inference, underpinning formal ontologies published as Linked Data.
  - **[[RDF Schema]]** — a lightweight vocabulary extension to [[RDF]] providing class and property hierarchies; the minimal semantic layer above raw triples.
  - **[[Linked Data Platform]]** — W3C Recommendation defining HTTP interactions for reading and writing Linked Data containers; provides a RESTful API layer above raw RDF stores.
  - **[[Schema.org]]** — a collaborative vocabulary for structured data, widely used in web-page markup; its classes and properties are Linked Data IRIs resolvable via HTTP.
  - **[[Dublin Core]]** — a foundational metadata vocabulary for describing resources; one of the most widely deployed Linked Data schemas.

- ### The Five-Star Data Model
  - Tim Berners-Lee also articulated a [[Five-Star Data]] maturity scale for Linked Open Data:
    - ★ — Data available on the Web in any format, under an open licence.
    - ★★ — Available as machine-readable structured data (e.g. Excel rather than a scanned table).
    - ★★★ — Available in a non-proprietary open format (e.g. CSV).
    - ★★★★ — Uses W3C open standards (RDF and SPARQL) for identification.
    - ★★★★★ — Linked to other people's data to provide context; true Linked Open Data.
  - The five-star model is widely used to assess and incentivise open government data publication.

- ### Serialisation Formats
  - [[Turtle]] (`.ttl`) — most human-readable; preferred for hand-authored ontologies.
  - [[JSON-LD]] (`.jsonld`) — JSON-compatible; preferred for REST APIs and web-page embedding.
  - RDF/XML (`.rdf`) — original W3C format; verbose but widely supported by legacy tools.
  - N-Triples (`.nt`) — one triple per line; optimal for streaming and bulk load.
  - N-Quads (`.nq`) — N-Triples with a named graph component; used in datasets with multiple named graphs.
  - TriG — Turtle extended with named graphs; convenient for dataset bundles.

- ### Applications and Use Cases
  - **Open Government Data** — national portals (data.gov.uk, data.gov) publish statistics, geospatial data, and legislation as Linked Data, enabling cross-dataset analysis without data copying.
  - **Life Sciences and Bioinformatics** — [[Wikidata]], UniProt, ChEMBL, and the EBI RDF platform interconnect genes, proteins, diseases, and chemical compounds, enabling federated biomedical queries.
  - **Enterprise [[Knowledge Graph]] Construction** — organisations integrate CRM, ERP, and master data into a unified entity graph using Linked Data principles, enabling semantic search and recommendation.
  - **Cultural Heritage** — the Europeana portal and BBC programmes database publish collection metadata as Linked Data, enabling cross-institutional discovery.
  - **E-commerce and Search Engine Optimisation** — [[Schema.org]] annotations embedded via [[JSON-LD]] in HTML pages allow search engines to extract structured product, event, and organisation data.
  - **[[Retrieval-Augmented Generation]]** — Linked Data endpoints serve as structured external memory for large language models, grounding generation in verifiable entity graphs.
  - **Scientific Publishing** — nanopublications and research outputs are annotated with provenance-bearing Linked Data, enabling machine-readable citation networks.
  - **Smart Cities and IoT** — sensor observations modelled with the W3C SOSA/SSN ontology interoperate across city platforms using Linked Data identifiers.

- ### The Linked Open Data Cloud
  - The LOD cloud is the practical realisation of Linked Data at Web scale: a publicly browsable graph of hundreds of open datasets, visualised at lod-cloud.net, covering domains including government, geography, linguistics, life sciences, and media.
  - Key datasets include [[Wikidata]] (primary community-curated knowledge base), [[DBpedia]] (structured extraction from Wikipedia), GeoNames (geospatial names), and VIAF (authority file for persons and organisations).
  - Datasets are interlinked using `owl:sameAs` triples that declare entity co-reference across different datasets, enabling identity resolution and data fusion.
  - The cloud is managed through community conventions rather than central coordination; data quality and link freshness vary significantly by dataset.

- ### Federated Query and Integration Patterns
  - [[Federated Query]] via SPARQL SERVICE clauses allows a single query to retrieve data from multiple remote endpoints, joining across datasets without materialising a local copy.
  - The Linked Data Fragments specification (Ruben Verborgh et al.) provides a range of server interfaces trading off query expressiveness against server load, from raw dumps to full SPARQL endpoints.
  - Entity reconciliation using tools such as OpenRefine and the Wikidata Reconciliation API maps local identifiers to Linked Data URIs, bootstrapping integration with the LOD cloud.

- ### Relationships
  - requires:: [[RDF]]
  - requires:: [[HTTP]]
  - requires:: [[URI]]
  - uses:: [[JSON-LD]]
  - uses:: [[SPARQL]]
  - uses:: [[Turtle]]
  - uses:: [[OWL]]
  - uses:: [[Schema.org]]
  - enables:: [[Knowledge Graph]]
  - enables:: [[Knowledge Graph Construction]]
  - enables:: [[Federated Query]]
  - enables:: [[Open Data]]
  - implements:: [[Linked Data Platform]]
  - implements:: [[Five-Star Data]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[RDF Schema]]
  - contrastsWith:: [[Relational Database]]
  - contrastsWith:: [[Data Silo]]
  - bridges-to:: [[Knowledge Representation]]
  - bridges-to:: [[Entity Linking]]
  - bridges-to:: [[Retrieval-Augmented Generation]]
  - relatedTo:: [[Ontology]]
  - relatedTo:: [[Wikidata]]
  - relatedTo:: [[DBpedia]]
  - relatedTo:: [[Dublin Core]]

- ### Standards and Governance
  - All core Linked Data specifications are W3C Recommendations, maintained by the RDF Working Group and the JSON-LD Working Group.
  - Key specifications: RDF 1.1 (2014), SPARQL 1.1 (2013), JSON-LD 1.1 (2020), OWL 2 (2012), Linked Data Platform 1.0 (2015).
  - The W3C Data Activity coordinates ongoing development of Linked Data, [[SPARQL]], and related standards.
  - Schema.org is governed by a community group with participation from Google, Microsoft, Apple, and Yahoo, and publishes its vocabulary as Linked Data under a Creative Commons licence.
  - The LOD cloud dataset registry is community-maintained; there is no central standards body for dataset interoperability beyond the W3C technical specifications.

- ### Relationship to AI and Machine Learning
  - Linked Data knowledge graphs serve as structured world-knowledge sources for [[Knowledge Representation]] and reasoning systems, including those underpinning voice assistants and question-answering pipelines.
  - [[Entity Linking]] — identifying mentions of entities in text and resolving them to Linked Data URIs — is a foundational NLP task that bridges unstructured corpora and the Web of Data.
  - [[Retrieval-Augmented Generation]] architectures increasingly incorporate SPARQL queries against Linked Data endpoints to provide factual grounding for large language model outputs, reducing hallucination.
  - Graph Neural Networks trained on [[Knowledge Graph]] data encoded as Linked Data triples have demonstrated effectiveness in link prediction and entity classification tasks.

- ### Provenance
  - sources:: Tim Berners-Lee, "Linked Data", W3C Design Issues (2006); W3C RDF 1.1 Primer; W3C SPARQL 1.1 Recommendation; W3C JSON-LD 1.1 Recommendation; Linked Data Platform 1.0 W3C Recommendation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z