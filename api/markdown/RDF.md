public:: true

# rdf
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c5b040151cd9877a148b2fbf461e469a23dab6fe77f4dff99eb8ba23cb63260b",
  "@type": "Page",
  "vc:slug": "rdf",
  "title": "rdf",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rdf",
  "@type": "Class",
  "label": "RDF",
  "definition": "The Resource Description Framework (RDF) is a W3C-standardised graph data model in which all statements are expressed as subject–predicate–object triples, where each component is identified by an IRI (Internationalised Resource Identifier) or, for literal values, a typed or language-tagged string. RDF triples compose into directed, labelled graphs that can be serialised in multiple syntaxes including Turtle, N-Triples, JSON-LD, N-Quads, and RDF/XML, and queried via the SPARQL protocol and query language. As the foundational layer of the Semantic Web and Linked Data ecosystems, RDF enables machine-readable knowledge representation that supports federated querying, ontological reasoning with OWL2, and cross-source interoperability through shared vocabulary IRIs. The open-world assumption distinguishes RDF from closed-world relational models, allowing independent datasets to be merged without schema negotiation.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    }
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:web-standard", "label": "Web Standard"},
      {"@id": "urn:ngm:class:w3c-specification", "label": "W3C Specification"},
      {"@id": "urn:ngm:class:graph-data-model", "label": "Graph Data Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:semantic-web", "label": "Semantic Web"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:ontological-reasoning", "label": "Ontological Reasoning"},
      {"@id": "urn:ngm:class:federated-query", "label": "Federated Query"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:rdf-triple", "label": "RDF Triple"},
      {"@id": "urn:ngm:class:rdf-graph", "label": "RDF Graph"},
      {"@id": "urn:ngm:class:iri", "label": "IRI"},
      {"@id": "urn:ngm:class:rdf-literal", "label": "RDF Literal"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:iri", "label": "IRI"},
      {"@id": "urn:ngm:class:namespace", "label": "Namespace"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:turtle", "label": "Turtle"},
      {"@id": "urn:ngm:class:json-ld", "label": "JSON-LD"},
      {"@id": "urn:ngm:class:sparql", "label": "SPARQL"},
      {"@id": "urn:ngm:class:rdfs", "label": "RDFS"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:owl", "label": "OWL"},
      {"@id": "urn:ngm:class:shacl", "label": "SHACL"},
      {"@id": "urn:ngm:class:triple-store", "label": "Triple Store"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:w3c", "label": "W3C"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:relational-database", "label": "Relational Database"},
      {"@id": "urn:ngm:class:property-graph", "label": "Property Graph"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:schema-org", "label": "Schema.org"},
      {"@id": "urn:ngm:class:provenance", "label": "Provenance"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:decentralised-identifier", "label": "Decentralised Identifier"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:resource-description-framework", "label": "Resource Description Framework"}
  ],
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **Resource Description Framework (RDF)** is a W3C-standardised [[Graph Data Model]] in which all statements are expressed as subject–predicate–object [[RDF Triple]]s, where subjects and predicates are [[IRI]]s and objects are either IRIs or typed [[RDF Literal]]s. Triples compose into directed, labelled [[RDF Graph]]s that can be serialised in multiple syntaxes — [[Turtle]], [[JSON-LD]], N-Triples, N-Quads, and RDF/XML — and queried via the [[SPARQL]] protocol. As the foundational data layer of the [[Semantic Web]] and [[Linked Data]] ecosystems, RDF enables machine-readable [[Knowledge Representation]] supporting [[Ontological Reasoning]], federated querying, and interoperability across heterogeneous sources through shared vocabulary IRIs. Its open-world assumption, unlike closed-world [[Relational Database]] models, allows independent datasets to be merged without schema conflicts.

- ### Overview
  - RDF was first published as a W3C Recommendation in 1999 (as RDF 1.0) and substantially revised in 2004 and again in 2014 (RDF 1.1). It emerged from research on metadata for web resources and grew into the primary machine-readable knowledge representation standard for the open web.
  - The core insight of RDF is that any fact about the world can be decomposed into a binary relation between two named entities: *(subject, predicate, object)*. By naming both entities and the relation with globally unique [[IRI]]s, independent parties can publish data that is immediately interlinkable without prior coordination.
  - RDF underpins the [[Semantic Web]] vision — a web of data legible to machines — and is used in [[Knowledge Graph]] construction by organisations including Google, Wikidata, schema.org, and scientific data publishers such as UniProt and the European Bioinformatics Institute.
  - The open-world assumption means the absence of a triple does not imply falsity; this enables safe merging of data from independent sources and supports incremental knowledge accumulation, but requires care in query design compared to closed-world systems.

- ### Key Components
  - **RDF Triple**
    - The atomic unit of RDF: *(subject, predicate, object)*, also called an RDF statement.
    - Subject: an [[IRI]] or blank node identifying the resource being described.
    - Predicate: an [[IRI]] denoting the property or relation.
    - Object: an [[IRI]], blank node, or [[RDF Literal]] (typed or language-tagged string).
  - **IRI (Internationalised Resource Identifier)**
    - Globally unique identifier for subjects, predicates, and object-resources. Extends URIs to support Unicode characters. Prefixed forms (e.g. `rdf:type`, `foaf:name`) use [[Namespace]] declarations to abbreviate IRI prefixes.
  - **RDF Literal**
    - A data value with an optional XSD datatype (`xsd:integer`, `xsd:dateTime`, `xsd:boolean`) or BCP 47 language tag (e.g. `"hello"@en`). Typed literals enable semantic data validation and reasoning.
  - **Blank Node**
    - An anonymous resource node with no IRI, scoped to a single RDF document. Used to represent structured values or intermediate nodes without needing a global identifier.
  - **RDF Graph and Dataset**
    - A set of RDF triples forms an RDF graph. Multiple named graphs (each a set of triples associated with an IRI) plus a default graph form an RDF dataset, standardised for use with [[SPARQL]] 1.1.
  - **Serialisation Formats**
    - [[Turtle]]: compact, human-readable; the preferred format for hand-authoring and documentation.
    - [[JSON-LD]]: maps RDF to JSON; dominant on the web; adopted by [[Schema.org]] and widely used for structured data mark-up.
    - N-Triples / N-Quads: line-oriented, streaming-friendly; used for bulk data exchange and large-scale graph processing.
    - RDF/XML: the original W3C syntax; verbose but widely supported by legacy tooling.
    - TriG: extends [[Turtle]] with named graph syntax.
  - **Vocabularies and Ontologies**
    - [[RDFS]] (RDF Schema): adds `rdfs:Class`, `rdfs:subClassOf`, `rdfs:domain`, `rdfs:range` — basic class and property hierarchy.
    - [[OWL]] (Web Ontology Language): extends RDFS with description logic axioms enabling automated [[Ontological Reasoning]].
    - [[SHACL]] (Shapes Constraint Language): defines data shapes and validation rules over RDF graphs.
    - [[Schema.org]]: widely-used vocabulary for web structured data, serialised as JSON-LD on billions of web pages.
    - SKOS: Simple Knowledge Organisation System for thesauri and concept schemes.

- ### Applications and Use Cases
  - **Life Sciences and Biomedical Data**
    - UniProt, ChEMBL, and DrugBank publish data as RDF, enabling federated SPARQL queries across protein, compound, and disease datasets. The Bio2RDF project interlinking 35+ biomedical databases demonstrated large-scale linked data integration.
  - **Cultural Heritage and Libraries**
    - Europeana aggregates metadata from 3,000+ European cultural heritage institutions as RDF using the Europeana Data Model. The Library of Congress, British Library, and Deutsche Nationalbibliothek expose bibliographic records as Linked Data.
  - **Government Open Data**
    - UK government [[Linked Data]] programmes (data.gov.uk) publish statistical, geographic, and legislative data as RDF, enabling cross-dataset joining without schema mapping. Similar programmes exist across EU member states.
  - **Enterprise Knowledge Graphs**
    - Organisations use RDF triple stores (e.g. Stardog, GraphDB, Amazon Neptune, Virtuoso) to build enterprise [[Knowledge Graph]]s integrating heterogeneous data — product catalogues, HR records, supply-chain data — with reasoning and inference capabilities.
  - **Schema.org and Structured Web Data**
    - [[Schema.org]] vocabularies serialised as [[JSON-LD]] are embedded in hundreds of millions of web pages, enabling search engines and crawlers to extract structured facts about products, events, people, organisations, and reviews.
  - **Decentralised Identity and Verifiable Credentials**
    - The W3C DID (Decentralised Identifier) specification uses JSON-LD/RDF for credential documents, linking RDF's interoperability model to the [[Decentralised Identifier]] ecosystem.
  - **Knowledge Graph Embedding and Machine Learning**
    - RDF knowledge graphs serve as input to [[Machine Learning]] pipelines for knowledge graph embedding (TransE, DistMult, ComplEx), entity alignment, and link prediction. Large language models increasingly use RDF-backed knowledge graphs as structured memory and fact stores.
  - **Provenance and Data Lineage**
    - The W3C PROV-O ontology (built on RDF) provides a standard model for tracking [[Provenance]] of data transformations, enabling reproducible science and auditable data pipelines.

- ### Mechanisms
  - **Open-World Assumption (OWA)**
    - Absence of a triple does not imply falsity. This enables safe merging of independently-published datasets and supports incremental knowledge accumulation — but differs fundamentally from [[Relational Database]] semantics (closed-world assumption).
  - **Federated Query via SPARQL**
    - [[SPARQL]] 1.1 supports `SERVICE` clauses for federated querying across multiple remote SPARQL endpoints, a capability unique to the RDF ecosystem among standard graph data models.
  - **Reasoning and Inference**
    - [[RDFS]] and [[OWL]] axioms over RDF graphs enable automated inference: subclass propagation, property inheritance, equivalence reasoning, and consistency checking. Reasoners include HermiT, Pellet, and ELK.
  - **Namespace and Prefix Resolution**
    - IRIs are abbreviated using prefix declarations (Turtle `@prefix`, SPARQL `PREFIX`). Shared prefixes from prefix.cc and the LOV (Linked Open Vocabularies) catalogue promote reuse of well-known vocabularies.
  - **RDF Reification and Named Graphs**
    - RDF reification allows statements about statements (provenance, confidence). Named graphs (RDF 1.1) provide a cleaner alternative, enabling graph-level metadata such as source, timestamp, and authority.
  - **Blank Node Scoping**
    - Blank nodes are local identifiers scoped to a single RDF document or dataset. Skolemisation replaces blank nodes with IRIs to enable stable cross-document references and easier distributed processing.

- ### Relationships
  - implements:: [[Web Standard]]
  - implements:: [[W3C Specification]]
  - implements:: [[Graph Data Model]]
  - enables:: [[Semantic Web]]
  - enables:: [[Linked Data]]
  - enables:: [[Knowledge Graph]]
  - enables:: [[Ontological Reasoning]]
  - enables:: [[Federated Query]]
  - hasPart:: [[RDF Triple]]
  - hasPart:: [[RDF Graph]]
  - hasPart:: [[IRI]]
  - hasPart:: [[RDF Literal]]
  - requires:: [[IRI]]
  - requires:: [[Namespace]]
  - uses:: [[Turtle]]
  - uses:: [[JSON-LD]]
  - uses:: [[SPARQL]]
  - uses:: [[RDFS]]
  - supports:: [[OWL]]
  - supports:: [[SHACL]]
  - supports:: [[Triple Store]]
  - standardizedBy:: [[W3C]]
  - contrastsWith:: [[Relational Database]]
  - contrastsWith:: [[Property Graph]]
  - relatedTo:: [[Ontology]]
  - relatedTo:: [[Schema.org]]
  - relatedTo:: [[Provenance]]
  - bridges-to:: [[Machine Learning]]
  - bridges-to:: [[Decentralised Identifier]]

- ### Standards and Context
  - **W3C RDF Working Group**
    - [[W3C]] (World Wide Web Consortium) standardises RDF through dedicated working groups. Key specifications include RDF 1.1 Concepts and Abstract Syntax (2014), RDF 1.1 Turtle, RDF 1.1 JSON-LD 1.1 (2020), and SPARQL 1.1 (2013).
  - **Related W3C Specifications**
    - [[OWL]] 2 (Web Ontology Language 2.0, 2009/2012) — description logic ontology language built on RDF.
    - [[SHACL]] (Shapes Constraint Language, 2017) — validation and shape constraints for RDF graphs.
    - PROV-O (2013) — [[Provenance]] ontology for data lineage.
    - Linked Data Platform (LDP, 2015) — RESTful HTTP interface for reading and writing RDF resources.
    - RDF* / SPARQL* (proposed) — syntactic extension enabling statements about triples (similar to RDF reification, but cleaner).
  - **Namespace Registries**
    - prefix.cc and LOV (Linked Open Vocabularies) maintain registries of well-known RDF vocabulary namespaces and prefixes, promoting vocabulary reuse and discovery.
  - **Ecosystem Position**
    - RDF sits at the base of the Semantic Web technology stack: HTTP for transport, IRIs for naming, RDF for data, [[RDFS]]/[[OWL]] for schema and reasoning, [[SPARQL]] for querying, [[SHACL]] for validation, and application-specific vocabularies (Schema.org, FOAF, Dublin Core) for domain coverage.

- ### Provenance
  - sources:: W3C RDF 1.1 Concepts and Abstract Syntax (2014); W3C SPARQL 1.1 (2013); Linked Data: Evolving the Web into a Global Data Space (Heath & Bizer, 2011)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
