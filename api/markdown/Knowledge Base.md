public:: true

# knowledge base
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6684f6c66b56af3aee16ee130769ce8e3faa4e8aa23c55e3693e8bfd31d0ec2",
  "@type": "Page",
  "vc:slug": "knowledge-base",
  "title": "knowledge base",
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
  "@id": "urn:ngm:class:knowledge-base",
  "@type": "Class",
  "label": "Knowledge Base",
  "definition": "A knowledge base is a structured, machine-readable repository of domain-specific information, factual assertions, and inference rules that software systems—including expert systems, question-answering engines, and AI agents—can query, reason over, and update. Knowledge bases range from relational tables and document stores to formal ontologies expressed in OWL/RDF and property graphs, each offering different trade-offs between expressiveness, scalability, and reasoning complexity. They function as the long-term declarative memory layer in AI architectures, enabling systems to retrieve, validate, and integrate facts without embedding all knowledge in model parameters. In contemporary retrieval-augmented generation pipelines a knowledge base serves as the authoritative external store from which a retriever selects grounding context for a large language model.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:triple-store",
        "label": "Triple Store"
      },
      {
        "@id": "urn:ngm:class:production-rules",
        "label": "Production Rules"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:description-logic",
        "label": "Description Logic"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
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
        "@id": "urn:ngm:class:expert-systems",
        "label": "Expert Systems"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:database",
        "label": "Database"
      },
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:knowledge-repository",
      "label": "Knowledge Repository"
    },
    {
      "@id": "urn:ngm:class:knowledge-store",
      "label": "Knowledge Store"
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
  - A **knowledge base** is a structured, machine-readable repository of domain-specific information, factual assertions, and inference rules that software systems—including [[Expert Systems]], question-answering engines, and [[AI Agents]]—can query, reason over, and update. Knowledge bases range from relational tables and document stores to formal [[Ontology|ontologies]] expressed in [[OWL]] / [[RDF]] and property graphs, each offering different trade-offs between expressiveness, scalability, and reasoning complexity. They serve as the long-term declarative memory layer in AI architectures, enabling systems to retrieve and integrate facts without embedding all world knowledge in model parameters. In contemporary [[Retrieval-Augmented Generation]] pipelines a knowledge base is the authoritative external store from which a retriever fetches grounding context for a [[Large Language Model]].

- ### Overview
  - The concept of a knowledge base emerged from the field of [[Knowledge Representation]] in the 1970s, when researchers building early [[Expert Systems]] recognised the need to separate domain facts and rules from the reasoning mechanisms that operated over them. This canonical separation—knowledge base plus [[Inference Engine]]—remains architecturally important today.
  - Unlike a general-purpose [[Database]], a knowledge base is designed for semantic expressiveness: it can encode not only data but also structural and logical relationships, class hierarchies, integrity constraints, and inference rules. A database answers exact queries; a knowledge base enables derived conclusions.
  - The scope of knowledge bases has expanded considerably:
    - **Symbolic knowledge bases**: rule sets, [[Production Rules]], [[Description Logic]] axioms stored in ontologies.
    - **Associative / graph knowledge bases**: [[Knowledge Graph|knowledge graphs]] storing entity-relation-entity triples at web scale (Wikidata, Google Knowledge Graph).
    - **Distributional / neural knowledge bases**: [[Large Language Model|large language models]] whose weights implicitly encode statistical world knowledge—a form of parametric knowledge base.
    - **Hybrid architectures**: [[Retrieval-Augmented Generation]] and neurosymbolic systems combining explicit symbolic stores with neural readers.
  - Knowledge bases are mature technology (origins in 1970s AI) but remain an active area of research, especially around automated construction, maintenance, and integration with neural systems.

- ### Key Components
  - **Schema / Ontology layer** — defines the vocabulary: classes, properties, axioms, and cardinality constraints. Usually expressed in [[OWL 2]] or [[RDFS]]. See [[Ontology]].
  - **Fact store / ABox** — the ground assertions: individual entities, their types, and the relationships between them (in OWL terminology the Assertion Box). Stored in a [[Triple Store]] (Virtuoso, Stardog, Apache Jena) or a property-graph database (Neo4j, Amazon Neptune).
  - **Rule layer / TBox** — terminological axioms and [[Production Rules]] (IF-THEN patterns) that generalise over facts. Enables an [[Inference Engine]] (HermiT, Pellet, ELK) to derive new facts via deductive closure.
  - **Query interface** — [[SPARQL]] for RDF-native stores; Cypher/Gremlin for property graphs; SQL extensions for relational knowledge bases; vector-nearest-neighbour search for embedding-based retrieval.
  - **Inference engine** — a [[Automated Reasoning|reasoner]] that applies rules and axioms to derive entailed facts, classify instances, and detect inconsistencies using [[Description Logic]] tableau algorithms.
  - **Knowledge acquisition pipeline** — processes for populating and maintaining the knowledge base, including information extraction from text, [[Entity Linking]], schema mapping, and crowd or expert curation.
  - **Access control and provenance layer** — tracks the source, confidence, and temporal validity of assertions; critical for enterprise and scientific knowledge bases.

- ### Applications / Use Cases
  - **Conversational AI and question answering**: Systems such as IBM Watson, Apple Siri, and Google Assistant rely on knowledge bases to ground answers to factual queries. [[Question Answering]] over knowledge bases (KBQA) maps natural-language questions to structured queries.
  - **Retrieval-Augmented Generation (RAG)**: A [[Vector Database]] or symbolic knowledge base serves as the external memory that prevents hallucination in [[Large Language Model]] responses. The retriever fetches relevant passages; the LLM synthesises grounded output.
  - **Biomedical and scientific knowledge**: Resources such as the Gene Ontology, UniProt, and PubChem are large-scale knowledge bases enabling drug discovery, pathway analysis, and hypothesis generation. [[Semantic Search]] over these bases accelerates research.
  - **Enterprise knowledge management**: Knowledge bases underpin internal search, compliance checking, and decision support in finance, legal, and manufacturing sectors.
  - **Autonomous agents**: [[AI Agents]] use knowledge bases as long-term memory and world-model stores, querying them to plan actions, verify facts, and persist learned information between sessions.
  - **Semantic web and linked data**: Public knowledge bases (Wikidata, DBpedia, Freebase) form the Linked Open Data cloud, enabling federated [[SPARQL]] queries across heterogeneous datasets.
  - **Digital twins and spatial computing**: [[Digital Twin]] platforms integrate sensor streams with knowledge bases describing asset structure and behaviour, enabling anomaly detection and predictive maintenance. Bridges to [[Spatial Computing]].
  - **Legal and regulatory reasoning**: Knowledge bases encode statutes, regulations, and case law, enabling automated compliance checking and contract analysis using [[Automated Reasoning]].

- ### Relationships
  - hasPart:: [[Ontology]]
  - hasPart:: [[Inference Engine]]
  - hasPart:: [[Triple Store]]
  - hasPart:: [[Production Rules]]
  - uses:: [[Knowledge Representation]]
  - uses:: [[Description Logic]]
  - uses:: [[SPARQL]]
  - uses:: [[RDF]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Question Answering]]
  - enables:: [[Semantic Search]]
  - enables:: [[Automated Reasoning]]
  - enables:: [[Expert Systems]]
  - requires:: [[Knowledge Acquisition]]
  - requires:: [[Data Schema]]
  - dependsOn:: [[Ontology]]
  - dependsOn:: [[Data Model]]
  - contrastsWith:: [[Database]]
  - contrastsWith:: [[Vector Database]]
  - contrastsWith:: [[Large Language Model]]
  - relatedTo:: [[Knowledge Graph]]
  - relatedTo:: [[Semantic Web]]
  - relatedTo:: [[Natural Language Processing]]
  - bridges-to:: [[Decentralised Knowledge Graph]]
  - bridges-to:: [[Digital Twin]]

- ### Historical Context
  - **1970s – Expert systems era**: DENDRAL (Stanford, 1965–1969) and MYCIN (1972–1980) pioneered the production-rule knowledge base. The MYCIN knowledge base encoded ~600 IF-THEN rules for infectious disease diagnosis; its architecture influenced all subsequent expert-system shells including CLIPS and JESS.
  - **1980s–1990s – Knowledge representation formalisms**: CYC (Cycorp, 1984–) attempted to encode common-sense knowledge in first-order logic at scale. Frame-based systems and later [[Description Logic]] (AL, ALC, SHIQ, SROIQ) provided progressively richer schema languages.
  - **2000s – Semantic web and OWL**: The W3C [[Semantic Web]] stack (RDF 2004, OWL 2004, SPARQL 2008) standardised knowledge base interchange. DBpedia (2007) and Freebase (2006, acquired by Google 2010) demonstrated web-scale linked knowledge bases.
  - **2010s – Knowledge graphs at scale**: Google Knowledge Graph (2012), Microsoft Satori, Wikidata (2012), and Amazon Product Graph scaled symbolic knowledge bases to billions of triples with real-time serving.
  - **2020s – Neurosymbolic convergence**: [[Large Language Model|Large language models]] expose the limits of purely parametric knowledge (hallucination, staleness) and drive demand for hybrid architectures combining symbolic knowledge bases with neural components — the current state of the art in [[Retrieval-Augmented Generation]].

- ### Standards & Context
  - **W3C RDF 1.1** — standard graph data model for knowledge base interchange. See [[RDF]].
  - **W3C OWL 2** — ontology language with well-defined [[Description Logic]] semantics (OWL 2 DL = SROIQ(D)); the schema layer for formal knowledge bases. See [[OWL]].
  - **W3C SPARQL 1.1** — query and update language for RDF knowledge bases. See [[SPARQL]].
  - **ISO/IEC 13250 Topic Maps** — an alternative standard for knowledge base representation using topics, associations, and occurrences.
  - **IEEE 1872-2015 (SUMO)** — Suggested Upper Merged Ontology, a foundational upper ontology for cross-domain knowledge base alignment.
  - **FHIR and HL7 terminologies** (SNOMED CT, ICD-10, LOINC) — specialised medical knowledge bases standardised for clinical interoperability.
  - **Wikidata / Linked Open Data** — the largest openly accessible general knowledge base, governed by the Wikimedia Foundation.

- ### Provenance
  - sources:: W3C OWL/RDF specifications; Brachman & Levesque "Knowledge Representation and Reasoning" (2004); Nickel et al. "A Review of Relational Machine Learning for Knowledge Graphs" (2016); Lewis et al. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (2020)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
