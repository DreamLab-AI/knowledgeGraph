public:: true

# Data Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:be1c0f24e042f1943d2c3ee3b4fb733c173a6481fcf8aa1a12e7b68f59dae44d",
  "@type": "Page",
  "vc:slug": "data-standards",
  "title": "Data Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9559"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Standards"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-standards",
  "@type": "Class",
  "label": "Data Standards",
  "definition": "Data Standards are formally agreed specifications, schemas, formats, vocabularies, and protocols that define how data is structured, encoded, exchanged, and interpreted across systems, organisations, and domains. They enable interoperability between heterogeneous systems by establishing shared semantics and syntactic conventions, reducing integration costs and data quality errors. Governed by bodies such as ISO, W3C, IETF, and NIST, data standards span a spectrum from de facto industry conventions (e.g., JSON, CSV) to de jure normative specifications (e.g., SQL:2023, OWL2, FHIR). They are foundational to data governance, metadata management, and the reliable operation of distributed data ecosystems.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-governance",
      "label": "Data Governance"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-specifications",
      "label": "Data Specifications"
    },
    {
      "@id": "urn:ngm:class:information-standards",
      "label": "Information Standards"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      },
      {
        "@id": "urn:ngm:class:metadata-standard",
        "label": "Metadata Standard"
      },
      {
        "@id": "urn:ngm:class:data-exchange-format",
        "label": "Data Exchange Format"
      },
      {
        "@id": "urn:ngm:class:controlled-vocabulary",
        "label": "Controlled Vocabulary"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      },
      {
        "@id": "urn:ngm:class:consensus-process",
        "label": "Consensus Process"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:fair-data-principles",
        "label": "FAIR Principles"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format",
        "label": "JSON"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      },
      {
        "@id": "urn:ngm:class:data-catalogue",
        "label": "Data Catalogue"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-silo",
        "label": "Data Silo"
      },
      {
        "@id": "urn:ngm:class:proprietary-format",
        "label": "Proprietary Format"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-architecture",
        "label": "Data Architecture"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-standards:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:be1c0f24e042f1943d2c3ee3b4fb733c173a6481fcf8aa1a12e7b68f59dae44d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Data Standards are formally agreed specifications, schemas, formats, vocabularies, and protocols governing how data is structured, encoded, exchanged, and interpreted. They underpin [[Data Interoperability]] by establishing shared semantics across heterogeneous systems, reducing integration friction and ensuring [[Data Quality]]. Governed by bodies such as [[ISO]], [[W3C]], and [[IETF]], data standards span from de facto industry conventions (e.g., [[JSON]], [[CSV]]) to de jure normative specifications (e.g., SQL:2023, [[OWL]], [[FHIR]]). They are the operational backbone of [[Data Governance]] and modern [[Data Architecture]].

- ### Overview
  - Data standards exist wherever multiple parties need to exchange or combine data reliably. Without agreed conventions a sender and receiver may use the same field name with entirely different meanings, types, or units — producing silent data corruption that is far harder to detect than a parse error.
  - Standards operate at multiple layers:
    - **Syntactic** — encoding and file format (e.g., [[JSON]], [[XML]], [[Parquet]], [[CSV]])
    - **Structural** — schema and data model conventions (e.g., SQL DDL, [[JSON Schema]], [[XML Schema]])
    - **Semantic** — shared meaning and terminology (e.g., [[Ontology]], [[Controlled Vocabulary]], [[RDF]])
    - **Process** — lifecycle, versioning, provenance (e.g., [[PROV-O]], [[DCAT]])
  - Standards reduce both the *N²* integration problem (every pair of systems needing a custom connector) and the long-term maintenance burden of proprietary formats that become [[Data Silo]] lock-in.
  - Why it matters:
    - Regulatory compliance (GDPR, DORA, Basel IV) increasingly mandates standard data representations
    - AI/ML pipelines require clean, consistently typed training data — enforced via [[Data Schema]] contracts
    - [[Open Data]] initiatives depend on standard formats for reusability and reproducibility
    - [[Knowledge Graph]] construction requires shared [[Ontology]] and URI conventions

- ### Key Components
  - **[[Data Schema]]** — formal description of data structure: field names, types, constraints, and cardinality. Examples: [[JSON Schema]], SQL DDL, Apache Avro schema, Protocol Buffers.
  - **[[Metadata Standard]]** — specifies descriptive, administrative, and structural metadata. Examples: [[Dublin Core]], [[DCAT]], [[Schema.org]], ISO 19115 (geospatial).
  - **[[Data Exchange Format]]** — serialisation syntax for transmission. Examples: [[JSON]], [[XML]], [[CSV]], [[Parquet]], [[ORC]], [[Arrow IPC]].
  - **[[Controlled Vocabulary]]** — curated list of authorised terms with defined meanings. Examples: SNOMED CT, MeSH, SKOS thesauri, ISO 4217 (currency codes).
  - **[[Ontology]]** — formal knowledge representation specifying classes, properties, and axioms. Examples: [[OWL2]], [[RDF]], [[RDFS]], FIBO (finance), SNOMED.
  - **Reference Data Models** — canonical entity models shared across an industry (e.g., HL7 FHIR for healthcare, FpML for finance, CIM for energy).
  - **API Standards** — conventions for data access interfaces: [[REST]], [[GraphQL]], [[OData]], [[SPARQL]].
  - **Identifier Standards** — globally unique, persistent identifiers: [[URI]], [[DOI]], [[ORCID]], [[ISBN]], [[ISIN]], [[LEI]] (Legal Entity Identifier).

- ### Mechanisms
  - **Standardisation lifecycle** — drafting by technical committee → public review → balloting → publication → maintenance. Bodies such as [[ISO]], [[W3C]], and [[IETF]] operate formal consensus processes.
  - **De facto vs de jure** — de facto standards emerge from dominant market adoption ([[JSON]], [[Markdown]]); de jure are formally ratified. Both coexist and often converge.
  - **Profiles and extensions** — a base standard (e.g., [[Dublin Core]]) is profiled for a domain (e.g., DCAT-AP for EU public sector) by restricting or extending permitted terms.
  - **Conformance testing** — reference implementations, validation schemas (e.g., [[SHACL]], [[JSON Schema]]), and certification programmes ensure standard compliance.
  - **Versioning and backward compatibility** — standards use semantic versioning or dated editions; migration paths and deprecation schedules manage evolution.
  - **[[FAIR Principles]]** — Findable, Accessible, Interoperable, Reusable — provide a meta-framework that motivates adoption of standards for scientific and open data.

- ### Applications / Use Cases
  - **Healthcare** — [[FHIR]] (HL7 Fast Healthcare Interoperability Resources) standardises clinical data exchange between EHRs, insurers, and apps. SNOMED CT provides a controlled clinical terminology.
  - **Finance** — ISO 20022 standardises payment messaging; XBRL enables structured financial reporting; LEI uniquely identifies legal entities.
  - **Geospatial** — OGC standards ([[GeoJSON]], WMS, WFS, OGC API Features) enable interoperable mapping and GIS data exchange.
  - **AI/ML pipelines** — [[Data Schema]] enforcement via Avro, Protobuf, or [[JSON Schema]] prevents training data drift; [[DCAT]] enables dataset discovery for [[Machine Learning]] experiments.
  - **[[Knowledge Graph]]** — [[RDF]], [[OWL2]], [[RDFS]], and [[SPARQL]] are W3C standards underpinning the [[Semantic Web]] and enterprise knowledge graphs.
  - **[[Open Data]]** — DCAT, [[CSV on the Web]] (CSVW), and [[Linked Data]] conventions make government and research datasets reusable across organisations.
  - **[[Federated Learning]]** — standardised model update formats (e.g., Flower framework conventions) and data schemas allow privacy-preserving cross-silo training without raw data sharing.
  - **Supply chain** — GS1 standards (EAN/UPC barcodes, EDI, GS1 Digital Link) uniquely identify products and communicate logistics data globally.
  - **[[Blockchain]] / distributed ledgers** — token standards (ERC-20, ERC-721) and DID/VC standards (W3C Decentralised Identifiers, Verifiable Credentials) define interoperable on-chain data structures.

- ### Relationships
  - partOf:: [[Data Governance]]
  - hasPart:: [[Data Schema]]
  - hasPart:: [[Metadata Standard]]
  - hasPart:: [[Data Exchange Format]]
  - hasPart:: [[Controlled Vocabulary]]
  - requires:: [[Semantic Interoperability]]
  - requires:: [[Data Quality]]
  - enables:: [[Data Interoperability]]
  - enables:: [[Data Integration]]
  - enables:: [[Linked Data]]
  - enables:: [[Open Data]]
  - dependsOn:: [[Standards Body]]
  - implements:: [[FAIR Principles]]
  - uses:: [[XML]]
  - uses:: [[JSON]]
  - uses:: [[RDF]]
  - supports:: [[Master Data Management]]
  - supports:: [[Data Catalogue]]
  - supports:: [[Regulatory Compliance]]
  - standardizedBy:: [[ISO]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[IETF]]
  - contrastsWith:: [[Data Silo]]
  - contrastsWith:: [[Proprietary Format]]
  - bridgesTo:: [[Knowledge Graph]]
  - bridgesTo:: [[Federated Learning]]
  - bridgesTo:: [[Semantic Web]]
  - relatedTo:: [[Data Architecture]]
  - relatedTo:: [[Ontology]]

- ### Standards & Context
  - **ISO/IEC JTC 1** — Joint Technical Committee covering IT standards including character sets (ISO 10646 / Unicode), SQL (ISO/IEC 9075), and data quality (ISO 8000).
  - **W3C** — World Wide Web Consortium publishes [[RDF]], [[OWL2]], [[SPARQL]], [[SHACL]], [[JSON-LD]], [[PROV-O]], [[DCAT]], [[CSVW]], [[Schema.org]] community group.
  - **IETF** — Internet Engineering Task Force defines [[JSON]] (RFC 8259), [[URI]] (RFC 3986), [[HTTP]] (RFC 9110), and [[MIME]] types.
  - **OGC** — Open Geospatial Consortium governs geospatial data standards: WMS, WFS, [[GeoJSON]] (also IETF RFC 7946), CityGML.
  - **HL7 / FHIR** — Health Level Seven publishes clinical data exchange standards; FHIR R5 (2023) is the current release.
  - **OASIS** — Organisation for the Advancement of Structured Information Standards governs MQTT, AMQP, OData, and SAML.
  - **IEEE** — Institute of Electrical and Electronics Engineers publishes standards for data formats in signal processing, networking (802.x), and robotics (ROS-I).
  - **NIST** — US National Institute of Standards and Technology publishes data-format guidance and cybersecurity standards (SP 800 series) with data classification implications.
  - **EU Regulatory context** — GDPR Article 20 (data portability) and the EU Data Act (2024) mandate interoperable formats; the European Interoperability Framework (EIF) drives adoption of open standards across public administrations.
  - **[[FAIR Principles]]** — Wilkinson et al. (2016) meta-framework for scientific data management, now embedded in EU Horizon funding requirements and OpenAIRE guidelines.

- ### Provenance
  - sources:: ISO/IEC JTC 1 publications; W3C standards track; IETF RFCs; HL7 FHIR documentation; NIST SP 800 series; EU Data Act (2024); FAIR Principles (Wilkinson et al. 2016)
  - domain-remap:: spatial-computing → data (Data Standards is a cross-domain foundational concept most precisely classified under the data domain)
  - updated:: 2026-06-13
