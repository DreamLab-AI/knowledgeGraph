public:: true

# ontology
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c205f711aa5d877300e2cdbcb5d060be2e0de276e525c020356210df8836e8e9",
  "@type": "Page",
  "vc:slug": "ontology",
  "title": "ontology",
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
  "@id": "urn:ngm:class:ontology",
  "@type": "Class",
  "label": "Ontology",
  "definition": "In computer science and knowledge engineering, an ontology is a formal, machine-readable specification of a shared conceptualisation within a domain: it explicitly defines the classes of entities that exist, the properties and attributes of those entities, the relationships (object properties) that may hold between them, and the logical axioms that constrain valid world states. Ontologies are expressed using languages such as OWL 2 (Web Ontology Language) built atop RDF, enabling automated reasoning engines to infer implicit knowledge and detect logical inconsistencies. They underpin knowledge graphs, linked data systems, semantic interoperability frameworks, and AI knowledge representation across scientific, industrial, and Web domains. Rooted in philosophical ontology (the study of being and categories of existence), the computational form translates that tradition into machine-processable schemas governed by Description Logics with decidable inference.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:owl-class-hierarchy",
        "label": "OWL Class Hierarchy"
      },
      {
        "@id": "urn:ngm:class:description-logic",
        "label": "Description Logics"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
      },
      {
        "@id": "urn:ngm:class:linked-open-data",
        "label": "Linked Open Data"
      },
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:formal-language",
        "label": "Formal Language"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:owl-class-hierarchy",
        "label": "Class Hierarchy"
      },
      {
        "@id": "urn:ngm:class:object-property",
        "label": "Object Property"
      },
      {
        "@id": "urn:ngm:class:data-property",
        "label": "Data Property"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:database-schema",
        "label": "Database Schema"
      },
      {
        "@id": "urn:ngm:class:corporate-tax-compliance-frameworkonomy",
        "label": "Taxonomy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:upper-ontology",
        "label": "Upper Ontology"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:formal-ontology",
      "label": "Formal Ontology"
    },
    {
      "@id": "urn:ngm:class:computational-ontology",
      "label": "Computational Ontology"
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

- ### Definition
  - An **ontology** is a formal, machine-readable specification of a shared conceptualisation within a domain, defining the classes of entities that exist, their properties, the [[Object Property]] relationships that may hold between them, and the logical axioms that constrain valid world states. Expressed using [[OWL Class Hierarchy]] (OWL 2) built atop [[RDF]], ontologies enable automated [[Automated Reasoning]] engines to infer implicit knowledge and detect inconsistencies. They serve as the semantic backbone of [[Knowledge Graph]] architectures, [[Linked Data]] systems, and AI knowledge representation pipelines including [[Retrieval-Augmented Generation]]. The term bridges philosophical ontology — the study of being and categories of existence — with the engineering discipline of building machine-processable world models.

- ### Overview
  - Ontologies formalise the vocabulary and logical structure of a domain in a way that both humans and machines can unambiguously interpret. Unlike a simple glossary or [[Taxonomy]], an ontology captures not just is-a hierarchies but also part-whole relationships, functional roles, cardinality constraints, and cross-domain axioms.
  - The motivating problem is **semantic heterogeneity**: when different systems use the same term to mean different things (or different terms for the same concept), data integration breaks. An ontology resolves this by providing a shared, unambiguous schema.
  - Ontologies are central to the [[Semantic Web]] vision articulated by Tim Berners-Lee: a Web of machine-readable data in which resources are linked by typed, semantically meaningful relationships, enabling global-scale inference.
  - In practice, ontologies range from lightweight controlled vocabularies (e.g. [[SKOS]]) through taxonomic class hierarchies (e.g. [[Schema.org]]) to expressive, axiom-rich Description Logic theories capable of supporting sophisticated automated reasoning.

- ### Key Components
  - **Classes** — sets of individuals sharing common characteristics; arranged in a [[Class Hierarchy]] via `rdfs:subClassOf` and `owl:equivalentClass` axioms.
  - **Object Properties** — typed binary relations between individuals (e.g. `hasPart`, `isLocatedIn`); governed by characteristics such as transitivity, symmetry, and inverse.
  - **Data Properties** — relations mapping individuals to literal values (strings, integers, dates).
  - **Individuals** — named instances of classes (the Abox in [[Description Logics]] terminology).
  - **Axioms** — logical statements constraining the model, including universal and existential restrictions, disjointness declarations, key axioms, and SWRL rules.
  - **Annotations** — non-logical metadata attached to ontology elements (labels, definitions, provenance); expressed via `rdfs:label`, `rdfs:comment`, or custom annotation properties.
  - **Imports** — ontologies can modularly reuse and extend other ontologies via `owl:imports`, supporting layered architectures.

- ### OWL 2 Profiles
  - OWL 2 defines several profiles trading expressivity for tractability:
    - **OWL 2 DL** — most expressive decidable profile; supports the full Description Logic SROIQ(D).
    - **OWL 2 EL** — polynomial-time reasoning; suited to large biomedical ontologies such as [[SNOMED CT]] and [[Gene Ontology]].
    - **OWL 2 QL** — rewriting-based query answering over relational databases; optimised for [[SPARQL]] integration.
    - **OWL 2 RL** — rule-based reasoning; compatible with RDF triple stores and rule engines.
  - The choice of profile determines which [[Automated Reasoning]] engines are applicable (HermiT, Pellet, ELK, RDFox) and what computational guarantees hold.

- ### Foundational and Upper Ontologies
  - **Upper ontologies** (also called top-level or foundational ontologies) define the most general categories applicable across all domains: entity, quality, process, role, relation, etc.
    - [[DOLCE]] (Descriptive Ontology for Linguistic and Cognitive Engineering) — cognitive-oriented, distinguishes endurants from perdurants.
    - [[BFO]] (Basic Formal Ontology) — used extensively in biomedical sciences as a realist upper ontology.
    - [[SUMO]] (Suggested Upper Merged Ontology) — broad coverage, linked to WordNet.
    - [[GFO]] (General Formal Ontology) — integrates both continuant and occurrent perspectives.
  - Domain ontologies extend upper ontologies with domain-specific classes and properties.
  - **Mid-level ontologies** bridge upper ontologies and domain ontologies (e.g. the Ontology for Biomedical Investigations, OBI).

- ### Well-Known Domain Ontologies
  - **[[FOAF]]** (Friend of a Friend) — models persons, social networks, and online identities.
  - **[[Schema.org]]** — lightweight structured data vocabulary for web pages, used by Google, Bing, and Yandex.
  - **[[PROV-O]]** — W3C provenance ontology; models agents, activities, and entities in data lineage chains.
  - **[[Gene Ontology]]** — biological processes, molecular functions, and cellular components; over 40,000 terms.
  - **[[SNOMED CT]]** — clinical healthcare terminology; one of the largest formal ontologies in production.
  - **[[Dublin Core]]** — metadata terms for digital resources; foundational to library and archival systems.
  - **[[OBO Foundry]]** — consortium of interoperable open biological and biomedical ontologies.

- ### Ontology Engineering Process
  - **Requirements elicitation** — competency questions that the ontology must answer, defining scope and granularity.
  - **Conceptual modelling** — identifying relevant classes, relations, and constraints using domain expert collaboration.
  - **Formalisation** — encoding the model in OWL/RDF using tools such as [[Protégé]], TopBraid Composer, or VocBench.
  - **Evaluation** — consistency checking with a [[Description Logics]] reasoner; coverage testing against competency questions; alignment testing against existing ontologies.
  - **Publication and versioning** — using persistent IRIs, `owl:versionIRI`, and change logs; following FAIR principles (Findable, Accessible, Interoperable, Reusable).
  - **Maintenance** — community governance, deprecation policies, and ontology evolution strategies.

- ### Applications
  - **[[Knowledge Graph]] construction** — ontologies provide the schema that structures nodes (entities) and edges (relations) in enterprise and public knowledge graphs (Wikidata, DBpedia, Google Knowledge Graph).
  - **Biomedical data integration** — [[SNOMED CT]], [[Gene Ontology]], and [[OBO Foundry]] ontologies harmonise heterogeneous clinical and genomic datasets.
  - **[[Semantic Interoperability]]** — e-government, defence, and cross-enterprise data exchange standards use ontologies to ensure consistent meaning across organisational boundaries.
  - **[[Retrieval-Augmented Generation]]** — ontologies structure the retrieval index and constrain LLM outputs to domain-accurate facts, improving precision in AI-generated content.
  - **[[Digital Twin]]** construction — ontologies (e.g. SAREF, BOT, REC) model smart building, manufacturing, and city systems enabling real-time semantic integration of sensor data.
  - **[[Semantic Search]]** — ontology-backed search engines expand queries with related terms and concepts, improving recall without sacrificing precision.
  - **Drug discovery and clinical decision support** — formal reasoning over drug–target–disease ontologies identifies candidate interactions and contraindications.
  - **Autonomous systems** — robotics and autonomous vehicle perception pipelines use ontologies for scene understanding and world modelling.

- ### Ontology Alignment and Matching
  - When two systems use different ontologies, **ontology alignment** (also called ontology matching) establishes correspondences between their classes and properties so that data from one ontology can be translated and consumed by the other.
  - Alignment techniques include:
    - **Lexical matching** — comparing class and property labels using string similarity metrics.
    - **Structural matching** — exploiting graph topology (e.g. common ancestors, property domains/ranges).
    - **Semantic matching** — using Description Logic reasoners to detect subsumption relationships.
    - **Instance-based matching** — comparing the populations of two classes to infer equivalence.
  - Tools such as AgreementMaker, LogMap, and LOOM automate alignment discovery; results are encoded using `owl:equivalentClass`, `owl:equivalentProperty`, and SKOS mapping properties.
  - **Ontology modularisation** — decomposing large ontologies into self-contained, independently maintained modules — reduces alignment complexity and improves scalability.

- ### Challenges and Limitations
  - **Ontology construction cost** — building a high-quality ontology requires sustained collaboration between domain experts and knowledge engineers; the process is labour-intensive.
  - **Knowledge acquisition bottleneck** — eliciting tacit expert knowledge and translating it into formal axioms remains difficult; errors propagate through downstream reasoning.
  - **Scalability of reasoning** — full OWL 2 DL reasoning on large ontologies (millions of axioms) can become computationally expensive; profile selection and modularisation mitigate this.
  - **Ontology evolution** — as domains change, ontologies must be updated; naive modifications can invalidate existing data and break downstream applications.
  - **Interoperability gaps** — despite standardisation, real-world ontologies often encode domain assumptions that make full automated alignment difficult.
  - **Closed-World vs. Open-World Assumption** — OWL adopts the Open-World Assumption (absence of information does not imply falsehood), which contrasts with relational databases and can surprise practitioners accustomed to closed-world systems.

- ### Relationships
  - uses:: [[RDF]]
  - uses:: [[OWL Class Hierarchy]]
  - uses:: [[Description Logics]]
  - uses:: [[SPARQL]]
  - enables:: [[Knowledge Graph]]
  - enables:: [[Semantic Search]]
  - enables:: [[Automated Reasoning]]
  - enables:: [[Linked Open Data]]
  - enables:: [[Semantic Interoperability]]
  - requires:: [[Formal Language]]
  - requires:: [[Axiom]]
  - partOf:: [[Semantic Web]]
  - hasPart:: [[Class Hierarchy]]
  - hasPart:: [[Object Property]]
  - hasPart:: [[Data Property]]
  - contrastsWith:: [[Database Schema]]
  - contrastsWith:: [[Taxonomy]]
  - relatedTo:: [[Linked Data]]
  - relatedTo:: [[Knowledge Representation]]
  - relatedTo:: [[Upper Ontology]]
  - bridges-to:: [[Retrieval-Augmented Generation]]
  - bridges-to:: [[Digital Twin]]

- ### Standards & Context
  - **W3C OWL 2** (2009, revised 2012) — primary language standard for expressive ontology encoding on the Web; maintained by the W3C Web Ontology Working Group.
  - **W3C RDF 1.1** (2014) — foundation data model; triples (subject–predicate–object) are the building block of all Semantic Web ontology serialisations.
  - **W3C RDFS** (RDF Schema) — lightweight vocabulary for class hierarchies and property domains/ranges; subset of OWL.
  - **W3C SPARQL 1.1** (2013) — query language for RDF and OWL knowledge bases; analogous to SQL for relational databases.
  - **W3C SKOS** (2009) — Simple Knowledge Organisation System; a lighter-weight alternative for thesauri and controlled vocabularies without full OWL expressivity.
  - **ISO/IEC 21838** — standard for top-level ontologies, including requirements for BFO.
  - **FAIR Data Principles** — community guidelines adopted widely in science and government; ontologies are a primary vehicle for achieving FAIRness in data publishing.
  - **OBO Foundry Principles** — open, collaborative, and interoperable ontology development standards for biomedical sciences.
  - Key authoring tool: **[[Protégé]]** (Stanford University, open-source), the de facto standard ontology IDE, with support for OWL 2, reasoner integration (HermiT, ELK), and SPARQL querying.

- ### Provenance
  - sources:: W3C OWL 2 Specification; Gruber 1993 "A translation approach to portable ontology specifications"; Noy & McGuinness "Ontology 101"; OBO Foundry; ISO/IEC 21838
  - updated:: 2026-06-13
