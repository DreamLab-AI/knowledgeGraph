- ### Definition
  - The Resource Description Framework (RDF) is a W3C-standardised graph data model in which all statements are expressed as subject–predicate–object triples, where each component is identified by an IRI or, for literal values, a typed or language-tagged string. RDF triples compose into directed, labelled graphs that can be serialised in multiple syntaxes including Turtle, N-Triples, JSON-LD, and RDF/XML, and queried via the SPARQL query language. As the foundational layer of the Semantic Web and Linked Data ecosystems, RDF enables machine-readable knowledge representation that supports federated querying, ontological reasoning with OWL, and interoperability across heterogeneous data sources through shared vocabularies and namespace URIs.

- ### Semantic Classification
  - owl-class:: rdf:RDF
  - owl-role:: Concept

- ### Relationships
  - implements [[Web Standard]]
  - enables [[Semantic Web Linked Data Standard]]
  - enables [[Linked Data]]
  - enables [[Knowledge Graph]]
  - relatedTo [[SPARQL]]
  - relatedTo [[Ontology]]

- ### Content
  - RDF models the world as a set of statements (triples) of the form (subject, predicate, object). Subjects and predicates are IRIs; objects are either IRIs or RDF literals (typed values such as xsd:integer, xsd:dateTime, or plain strings with optional language tags). A collection of RDF triples forms an RDF graph; multiple named graphs constitute an RDF dataset. The abstract model is serialisation-agnostic: Turtle offers a compact, human-readable syntax; JSON-LD maps RDF to JSON for web-developer toolchains; N-Quads extends N-Triples with a fourth graph-name component.
  - RDF's open-world assumption distinguishes it from closed-world relational databases: the absence of a triple does not imply its negation, enabling merging of data from independent sources without schema conflicts. Vocabularies such as RDFS (RDF Schema) and OWL (Web Ontology Language) add class hierarchies, property domains and ranges, and logical constraints that enable automated reasoning over RDF graphs—inferring implicit facts from explicit ones.
  - Practical RDF infrastructure includes triple stores (graph databases optimised for RDF storage and SPARQL query processing), SPARQL endpoints exposing standardised query interfaces, and reasoning engines. RDF is used extensively in life sciences (Bio2RDF, UniProt), cultural heritage (Europeana), government linked open data (UK.gov), and enterprise knowledge graph applications. The JSON-LD serialisation has become the dominant RDF format for the web due to its compatibility with existing JSON toolchains and adoption by Schema.org for structured data mark-up on web pages.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z