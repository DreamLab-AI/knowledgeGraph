public:: true

# Data Interoperability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:706cc9bbc057d8fe0a9a95bd53174d84b99b01689057464814e97d046eab2853",
  "@type": "Page",
  "vc:slug": "data-interoperability",
  "title": "Data Interoperability",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
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
      "vc:value": "MV-9553"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Interoperability"
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
  "@id": "urn:ngm:class:data-interoperability",
  "@type": "Class",
  "label": "Data Interoperability",
  "definition": "Data Interoperability is the capability of heterogeneous systems, applications, and data sources to exchange, interpret, and act upon shared data without loss of meaning across organisational and technical boundaries. It encompasses syntactic interoperability (shared formats and wire protocols), semantic interoperability (common vocabularies, ontologies, and data models), and pragmatic interoperability (agreed processes, policies, and trust frameworks). Achieving full data interoperability requires alignment across API contracts, schema registries, identity frameworks, and data governance regimes. It is a foundational property enabling federated analytics, cross-domain knowledge graphs, and open ecosystem integration.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-standards",
        "label": "Data Standards"
      },
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      },
      {
        "@id": "urn:ngm:class:schema-registry",
        "label": "Schema Registry"
      },
      {
        "@id": "urn:ngm:class:api-contract",
        "label": "API Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:graph-ql",
        "label": "GraphQL"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      },
      {
        "@id": "urn:ngm:class:syntactic-interoperability",
        "label": "Syntactic Interoperability"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:data-mesh",
        "label": "Data Mesh"
      },
      {
        "@id": "urn:ngm:class:data-fabric",
        "label": "Data Fabric"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:oasis",
        "label": "OASIS"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-silo",
        "label": "Data Silos"
      },
      {
        "@id": "urn:ngm:class:vendor-lock-in",
        "label": "Vendor Lock-in"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:information-interoperability",
      "label": "Information Interoperability"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-interoperability:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:706cc9bbc057d8fe0a9a95bd53174d84b99b01689057464814e97d046eab2853"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - Data Interoperability is the capability of heterogeneous systems, applications, and data sources to exchange, interpret, and act upon shared data without loss of meaning. It operates across three layers: syntactic interoperability (shared wire formats and protocols such as [[JSON]], [[XML]], and [[Protocol Buffers]]), [[Semantic Interoperability]] (common vocabularies, [[Ontology|ontologies]], and [[Linked Data]] models), and pragmatic interoperability (agreed processes, policies, and trust frameworks). Achieving robust data interoperability requires alignment of [[Data Standards]], [[Schema Registry|schema registries]], [[API Contract|API contracts]], and [[Data Governance]] regimes, and is a prerequisite for federated analytics, cross-domain [[Knowledge Graph|knowledge graphs]], and open digital ecosystems.

- ### Overview
  - Data Interoperability has become a central engineering and policy challenge as organisations increasingly operate across heterogeneous clouds, legacy systems, and partner networks. Without it, data becomes trapped in [[Data Silos]], duplicated inconsistently, or lost in translation between incompatible systems.
  - The concept applies at multiple levels:
    - **Syntactic** — machines can parse the data (shared grammar, encoding, file format).
    - **Structural** — data elements are organised consistently (schema alignment, [[Data Model]] compatibility).
    - **Semantic** — the meaning of terms is agreed upon (shared [[Controlled Vocabulary|controlled vocabularies]], [[Ontology|ontologies]], [[Linked Data]] namespaces).
    - **Pragmatic** — the context and intended use are shared (workflow agreements, trust frameworks, provenance chains).
    - **Organisational** — governance, legal, and policy alignment enables actual data exchange in practice.
  - The FAIR principles (Findable, Accessible, Interoperable, Reusable) codified by the research data community represent a widely adopted framework for operationalising data interoperability across institutional boundaries.

- ### Key Mechanisms
  - **[[Data Standards]]** — Foundational specifications (ISO, W3C, OASIS) that define common formats, encodings, and exchange protocols.
  - **[[Schema Registry]]** — Centralised stores of [[Data Schema|data schemas]] (e.g., Apache Avro Schema Registry, AWS Glue) that enforce structural consistency across producers and consumers.
  - **[[Ontology]] and [[Controlled Vocabulary]]** — Shared concept definitions (e.g., [[OWL]], [[SKOS]], [[RDF]]) that resolve semantic ambiguity between heterogeneous systems.
  - **[[Linked Data]]** — A set of best practices for publishing structured data on the web using URIs and [[RDF]] triples, enabling graph-level interoperability.
  - **[[API Contract]]** — Explicit interface agreements (OpenAPI, AsyncAPI, GraphQL schemas) that define how systems exchange data programmatically via [[REST API]] or [[GraphQL]].
  - **[[Metadata Management]]** — Systematic capture of provenance, lineage, and descriptive metadata that allows consumers to correctly interpret received data.
  - **[[Identity Management]]** — Stable, resolvable identifiers for entities (persons, organisations, datasets) that allow data about the same real-world object to be joined across systems. [[Decentralised Identifier|Decentralised Identifiers (DIDs)]] extend this to self-sovereign contexts.
  - **[[Data Mapping]] and [[Schema Alignment]]** — Transformation rules and crosswalks that translate between differing structures (e.g., XSLT, JSON-LD framing, SPARQL CONSTRUCT queries).
  - **[[Data Catalogue]]** — Discoverable inventories of available datasets with associated metadata, enabling consumers to find interoperable data assets.

- ### Applications and Use Cases
  - **Healthcare** — Patient records exchanged between hospital systems, insurers, and research platforms via [[HL7 FHIR]] (Fast Healthcare Interoperability Resources), enabling care coordination without costly bespoke integrations.
  - **Open Government and [[Open Data]]** — Governments publish datasets using common vocabularies (schema.org, DCAT, CSV on the Web) enabling civic technologists and journalists to combine datasets across jurisdictions.
  - **Financial Services** — Cross-border payment systems and regulatory reporting use ISO 20022 message schemas to ensure that settlement data is machine-readable end-to-end.
  - **[[Data Mesh]] Architectures** — Distributed ownership of domain data products requires interoperability contracts so that downstream consumers can reliably join data from multiple domain teams without central coordination.
  - **[[Federated Learning]]** — Training machine-learning models across distributed data partitions requires that feature schemas and label encodings be interoperable even when the raw data cannot leave its custodian.
  - **[[Supply Chain]] Visibility** — Trading partners across a supply chain use shared EDI standards (X12, EDIFACT) and emerging [[Blockchain]]-based data-sharing platforms to track provenance of goods.
  - **[[Metaverse]] and [[Spatial Computing]]** — Avatar identity, virtual-asset ownership, and cross-platform scene graphs require interoperable data formats (glTF, USD/USDZ, WebXR Device API) to allow experiences to move between virtual worlds.
  - **[[Knowledge Graph]] Federation** — Enterprise and public knowledge graphs (Wikidata, schema.org) interoperate via [[Linked Data]] standards to power search, AI reasoning, and [[Question Answering]] systems.
  - **Scientific Data Sharing** — Research consortia (e.g., CERN, genomics databases) implement FAIR data principles and discipline-specific ontologies to enable reproducible, cross-study analyses.
  - **[[Internet of Things]] (IoT)** — Sensor streams from heterogeneous devices are harmonised through semantic models (W3C SSN/SOSA, NGSI-LD) enabling unified analytics across smart city and industrial deployments.

- ### Relationships
  - requires:: [[Data Standards]]
  - requires:: [[Data Format]]
  - requires:: [[Schema Registry]]
  - requires:: [[API Contract]]
  - enables:: [[Interoperability]]
  - enables:: [[Data Pipeline]]
  - enables:: [[Federated Learning]]
  - enables:: [[Knowledge Graph]]
  - enables:: [[Open Data]]
  - dependsOn:: [[Data Governance]]
  - dependsOn:: [[Identity Management]]
  - dependsOn:: [[Metadata Management]]
  - implements:: [[Linked Data]]
  - implements:: [[REST API]]
  - implements:: [[GraphQL]]
  - relatedTo:: [[Semantic Interoperability]]
  - relatedTo:: [[Syntactic Interoperability]]
  - relatedTo:: [[Data Integration]]
  - relatedTo:: [[Data Mesh]]
  - relatedTo:: [[Data Fabric]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[ISO]]
  - standardizedBy:: [[OASIS]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Decentralised Identifier]]
  - bridges-to:: [[Verifiable Credential]]
  - contrastsWith:: [[Data Silos]]
  - contrastsWith:: [[Vendor Lock-in]]

- ### Standards and Context
  - **W3C** — Publishes the core [[Linked Data]] stack: [[RDF]], [[OWL]], [[SPARQL]], [[JSON-LD]], [[SPARQL]], [[SHACL]], and schema.org. The W3C Data on the Web Best Practices Working Group produced formal guidance on dataset publication for interoperability.
  - **ISO** — ISO 11179 (Metadata Registries) and ISO 8000 (Data Quality) provide foundational standards for data element definition and quality management. ISO 19115 governs geographic metadata.
  - **OASIS** — Produces [[MQTT]], AMQP, OData, and SAML standards relevant to messaging and identity interoperability.
  - **FAIR Principles** — Wilkinson et al. (2016) codified Findable, Accessible, Interoperable, Reusable as a cross-disciplinary framework now widely adopted in research data management and adopted by the EU Open Science Cloud.
  - **DCAT (Data Catalogue Vocabulary)** — W3C recommendation for describing datasets and data services in catalogues, enabling cross-catalogue discovery and machine-readable metadata.
  - **HL7 FHIR** — Health Level Seven Fast Healthcare Interoperability Resources standard defines RESTful APIs and resource types for healthcare data exchange, now mandated by US CMS rules.
  - **ISO 20022** — Universal financial industry message schema adopted by SWIFT, TARGET2, and major central bank payment systems for rich, structured payment data.
  - **OpenAPI / AsyncAPI** — De facto industry standards for describing synchronous REST and asynchronous event-driven API contracts, ensuring interoperability between service producers and consumers.
  - **W3C Verifiable Credentials** — Provides a standard data model for cryptographically verifiable digital credentials, interoperating with [[Decentralised Identifier]] infrastructure.
  - **EU Data Act and Data Governance Act** — Regulatory frameworks requiring portability and interoperability for data held by gatekeeper platforms and public sector data holders, creating legal mandates for technical interoperability standards.
  - **NGSI-LD** — ETSI standard extending JSON-LD for context-information management in smart city and IoT settings, adopted by the EU FIWARE ecosystem.

- ### Challenges and Limitations
  - **Semantic Drift** — Shared vocabularies evolve independently across organisations, causing silent incompatibilities even when syntactic formats match.
  - **Governance Asymmetry** — Interoperability requires multi-party agreements on data ownership, liability, and access control that are often harder than the technical problems.
  - **Scalability of Mapping** — Maintaining point-to-point [[Data Mapping|data mappings]] between N systems grows as O(N²); hub-and-spoke canonical models or [[Knowledge Graph]] approaches reduce this burden.
  - **Privacy and Confidentiality** — Interoperable data flows create privacy risks if data minimisation, purpose-limitation, and consent mechanisms are not built into the interoperability architecture.
  - **Legacy System Constraints** — Many enterprise systems were designed without interoperability in mind; retrofitting requires expensive middleware, API gateways, or [[ETL]] pipelines.
  - **Quality Propagation** — Poor [[Data Quality]] in a source system propagates through interoperable pipelines, potentially corrupting downstream analytics.

- ### Semantic Classification
  - owl-class:: data:DataInteroperability
  - owl-role:: concept

- ### Provenance
  - sources:: W3C Data on the Web Best Practices; FAIR Data Principles (Wilkinson et al.); HL7 FHIR specification; ISO 11179; EU Data Governance Act
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
