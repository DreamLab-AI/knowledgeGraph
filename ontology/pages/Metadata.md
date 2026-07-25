public:: true

# Metadata
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:metadata",
  "@type": "Page",
  "vc:slug": "metadata",
  "title": "Metadata",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:metadata",
  "@type": "Class",
  "label": "Metadata",
  "definition": "Metadata is structured information that describes, contextualises, or categorises other data, enabling its discovery, management, interpretation, and interoperability. Metadata encompasses descriptive attributes (title, author, date), structural information (format, schema, relationships), administrative records (access rights, provenance, lifecycle), and technical parameters (resolution, encoding, checksum) attached to or associated with a primary data object.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-schema",
      "label": "Data Schema"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:data-provenance",
        "label": "Data Provenance"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:data-discovery",
        "label": "Data Discovery"
      },
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      },
      {
        "@id": "urn:ngm:class:data-standards",
        "label": "Data Standards"
      },
      {
        "@id": "urn:ngm:class:controlled-vocabulary",
        "label": "Controlled Vocabulary"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:dublin-core",
        "label": "Dublin Core"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:raw-data",
        "label": "Raw Data"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      },
      {
        "@id": "urn:ngm:class:metadata-schema",
        "label": "Metadata Schema"
      },
      {
        "@id": "urn:ngm:class:data-catalog",
        "label": "Data Catalog"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-description",
      "label": "Data Description"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Metadata]] is data about data: structured descriptive, structural, administrative, or technical attributes that make a primary data object discoverable, interpretable, and manageable across systems and over time. Descriptive metadata (title, creator, subject, date) supports discovery and search; structural metadata (file format, schema version, relationships between parts) supports parsing and rendering; administrative metadata (access rights, retention policy, provenance chain) supports governance and lifecycle management; technical metadata (bit depth, encoding parameters, checksums) supports fidelity verification. Metadata schemas range from domain-agnostic standards like [[Dublin Core]] and Schema.org to specialised ontologies for scientific, cultural heritage, and digital media domains.

- ### Relationships
  - Metadata enables [[Data Provenance]] tracking, [[Knowledge Graph]] construction, and [[Linked Data]] publication by providing the structured context needed to relate data objects to one another and to real-world entities. It is expressed using [[Data Schema|data schemas]] conformant with [[Data Standards]] such as Dublin Core, EXIF, XMP, and MPEG-7. [[Metadata Management]] disciplines govern the creation, quality assurance, and lifecycle of metadata assets, whilst [[Metadata Schema|metadata schemas]] define the vocabularies and constraints applied.

- ### Content
  - The practice of describing recorded information with structured attributes predates computing, extending to library cataloguing systems formalised in the 19th century (Dewey Decimal, Cutter Classification, and later MARC bibliographic records). The term "metadata" entered widespread technical use in the late 1980s and early 1990s as digital information management became a distinct field. The Dublin Core Metadata Initiative (1994) produced a seminal 15-element vocabulary for resource description that became one of the most widely adopted metadata standards on the early Web, later incorporated into ISO 15836.

  - Technically, metadata is represented in a variety of encodings: EXIF and IPTC headers embedded within JPEG and TIFF image files; XMP (Extensible Metadata Platform) providing an XML/RDF-based extensible layer across Adobe formats; ID3 tags in MP3 audio; sidecar files for RAW camera formats; HTML meta elements for web pages; and JSON-LD, Turtle, or RDF/XML for semantic web linked data. Metadata quality is a persistent challenge: inconsistent vocabulary use, incomplete fields, and metadata drift (where descriptive data becomes detached from or inconsistent with the object it describes) reduce the utility of metadata for search, aggregation, and interoperability.

  - In enterprise and scientific contexts, metadata management has matured into a discipline supported by dedicated tools: data catalogues (Alation, Atlan, Collibra, OpenMetadata), metadata repositories, and data governance platforms that automate metadata extraction from operational systems and maintain lineage graphs. Search engines, recommendation systems, and [[Knowledge Graph|knowledge graphs]] depend critically on high-quality metadata. The Web Ontology Language (OWL) and SPARQL endpoint infrastructure allow metadata expressed as RDF triples to be queried and reasoned over at scale, forming the backbone of the [[Linked Data]] ecosystem.

  - In 2024–2025 AI training and deployment has elevated metadata to a first-class concern in data governance. [[Training Dataset Metadata|Training dataset metadata]] — provenance, consent records, data sources, demographic composition — is increasingly required by regulators (EU AI Act) and demanded by auditors assessing model bias and intellectual property exposure. Content provenance metadata standards (C2PA, IPTC Photo Metadata) are being embedded into generative AI toolchains to mark AI-generated content. Simultaneously, large-scale knowledge graph construction from web-scale metadata enables retrieval-augmented generation (RAG) systems that ground LLM outputs in structured factual context.

