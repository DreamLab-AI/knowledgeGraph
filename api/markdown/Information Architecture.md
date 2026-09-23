
Information Architecture (IA) is the discipline of structuring, organising, labelling, and navigating shared information environments so that users and automated systems can find, understand, and act on content efficiently. It encompasses the design of taxonomies, controlled vocabularies, navigation schemas, metadata frameworks, and search systems that govern how information is classified and retrieved across digital products, knowledge bases, and interconnected platforms. IA bridges human cognitive models and machine-interpretable representations, drawing on ontologies, thesauri, and faceted classification to ensure content remains discoverable, reusable, and interoperable. In distributed and spatial contexts it extends to the semantic namespacing of assets, entities, and services that underpin cross-platform data exchange.

- ### Overview
  - Information Architecture emerged from library science and cognitive psychology in the 1970s–1990s, popularised by Wurman (1976) and systematised for the web era by Rosenfeld, Morville, and Arango in *Information Architecture for the Web and Beyond*. The discipline addresses four core problems:
    - **Organisation** — how content is grouped and categorised (hierarchical, faceted, sequential, matrix-based schemes)
    - **Labelling** — what language is used to name categories, links, and navigation elements consistently
    - **Navigation** — how users move through an information space (global, local, contextual, supplemental navigation systems)
    - **Search** — how users query the information space and how results are ranked, filtered, and presented
  - IA is domain-agnostic but critically underpins [[Content Management System]], enterprise intranets, [[E-Commerce]] catalogues, [[Knowledge Base]] systems, [[Spatial Computing]] environments, and AI-powered [[Information Retrieval]] pipelines.
  - The discipline is considered **mature**: ISO standards, professional associations (Information Architecture Institute), and decades of practitioner literature establish a stable body of knowledge.

- ### Key Components
  - **Organisation Systems**
    - Hierarchical classification — parent/child topic trees aligned to [[Taxonomy]] principles
    - [[Faceted Classification]] — multiple orthogonal attribute dimensions allowing flexible slicing (used heavily in e-commerce and library catalogues)
    - Associative structures — thesaural relationships (broader term, narrower term, related term) formalised in [[Thesaurus]] standards (ISO 25964)
    - Sequential and matrix schemes for task-oriented and comparison contexts
  - **Labelling Systems**
    - [[Controlled Vocabulary]] — authoritative term lists preventing synonym scatter and homonym ambiguity
    - Synonym rings and equivalency mappings connecting user language to preferred index terms
    - Consistent application of terminology across navigation, headings, metadata, and search index
  - **Navigation Systems**
    - Global navigation — persistent site-wide structural entry points
    - Local navigation — context-sensitive subsystem navigation
    - Contextual navigation — inline links and related-content recommendations (implemented via [[Knowledge Graph]] edges in modern systems)
    - Supplemental navigation — sitemaps, indexes, guides, wizards
  - **Search Systems**
    - Query parsing, stemming, and tokenisation pipeline
    - Relevance ranking (BM25, vector similarity via [[Semantic Search]])
    - Faceted filtering and refinement
    - Autocomplete and query suggestion (leveraging [[Natural Language Processing]])
  - **Metadata Frameworks**
    - [[Metadata Standard]] application: [[Dublin Core]], Schema.org, DCAT, domain-specific standards
    - Metadata schema design — element sets, cardinality, encoding schemes, value vocabularies
    - Relationship to [[Data Modelling]] and [[Ontology]] engineering

- ### Mechanisms & Design Process
  - **User Research** — card sorting, tree testing, and usability studies map mental models and navigation expectations; feeds directly into taxonomy structure
  - **Content Audit** — inventory and analysis of existing information assets prior to redesign; identifies gaps, redundancies, and inconsistencies in labelling
  - **Wireframing & Blueprints** — IA deliverables include site maps, wireframes, content models, and metadata schemas rather than visual designs
  - **Iterative Refinement** — IA is tested against real users through tree-jack tests, A/B navigation tests, and search-log analysis
  - **Governance** — sustaining IA requires [[Content Strategy]] ownership, editorial policies, and periodic audits to prevent [[Taxonomy]] drift

- ### Applications & Use Cases
  - **Enterprise Knowledge Bases** — structuring internal documentation, policies, and procedures so employees locate information without reliance on directory search alone; underpins [[Knowledge Management]] systems
  - **Digital Libraries & Archives** — applying [[Thesaurus]] and [[Controlled Vocabulary]] to describe artefacts; enables cross-collection discovery via shared metadata schemas
  - **E-Commerce Catalogues** — faceted navigation of product catalogues (size, colour, brand, price) drawing on [[Faceted Classification]]; critical UX differentiator for large assortments
  - **Healthcare Information Systems** — clinical terminology systems (SNOMED CT, LOINC) are specialised IAs for medical [[Controlled Vocabulary]]; patient portal navigation draws on IA principles
  - **Spatial Computing & Metaverse** — governing semantic namespacing of virtual assets, scenes, and avatar entities; ensures cross-platform [[Semantic Interoperability]] in [[XR]] environments
  - **AI Knowledge Pipelines** — IA structures the ingestion, chunking, and tagging layer before [[Retrieval-Augmented Generation]] or [[Knowledge Graph]] population; shapes what an LLM can discover
  - **Government Open Data Portals** — conformance to DCAT and [[Dublin Core]] metadata standards requires IA design to make datasets filterable and cross-referenceable
  - **Content Management Systems** — [[Content Management System]] taxonomies, custom fields, and URL slug schemas are concrete IA artefacts maintained by editorial teams

- ### Standards & Context
  - **ISO 25964** — international standard for thesauri and interoperability with other vocabularies; the primary normative reference for multilingual [[Thesaurus]] design in IA
  - **Dublin Core Metadata Initiative (DCMI)** — fifteen-element [[Metadata Standard]] widely used for resource description; foundational in library and open-data IA
  - **Schema.org** — collaborative vocabulary for structured data on the web; enables search-engine indexing of IA-tagged content via JSON-LD, Microdata, and RDFa
  - **DCAT (Data Catalogue Vocabulary)** — W3C recommendation for describing data catalogues and datasets; applied in government and scientific IA contexts
  - **WCAG / Accessibility** — Web Content Accessibility Guidelines impose navigational IA requirements (skip navigation, logical heading order, consistent labelling) that overlap with IA design
  - **Information Architecture Institute** — professional organisation maintaining the body-of-knowledge and certifications for IA practitioners
  - **Ontology Engineering** — OWL2, SKOS, and SPARQL extend IA into machine-reasoning territory; [[Semantic Web]] stack formalises controlled vocabularies into queryable [[Ontology]] artefacts
  - **SKOS (Simple Knowledge Organisation System)** — W3C standard for expressing [[Controlled Vocabulary]] and [[Thesaurus]] structures in RDF, bridging traditional IA and [[Linked Data]]

- ### Semantic Classification

- ### Provenance

