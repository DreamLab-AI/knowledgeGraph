public:: true

# Metadata Schema
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:52c1729e19ee61425d01c6bde48fc52a9fe72978bddb88b874f7e40ae85da0f1",
  "@type": "Page",
  "vc:slug": "metadata-schema",
  "title": "Metadata Schema",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-discovery",
      "vc:label": "Data Discovery"
    },
    {
      "@id": "urn:visionflow:linked:data-standard",
      "vc:label": "Data Standard"
    },
    {
      "@id": "urn:visionflow:linked:dublin-core",
      "vc:label": "Dublin Core"
    },
    {
      "@id": "urn:visionflow:linked:fair-data-principles",
      "vc:label": "FAIR Data Principles"
    },
    {
      "@id": "urn:visionflow:linked:json-ld",
      "vc:label": "JSON-LD"
    },
    {
      "@id": "urn:visionflow:linked:schema-org",
      "vc:label": "Schema.org"
    },
    {
      "@id": "urn:visionflow:owl:class:data-governance",
      "vc:label": "Data Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:data-interoperability",
      "vc:label": "Data Interoperability"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-8001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Metadata Schema"
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
  "@id": "urn:ngm:class:metadata-schema",
  "@type": "Class",
  "label": "Metadata Schema",
  "definition": "A structured specification defining metadata elements, their semantics, syntax, and relationships for describing and managing information resources. Metadata schemas establish standardised vocabularies and constraints that enable interoperability, discovery, and governance across data ecosystems through predefined sets of descriptive attributes tailored for specific domains or resource types.",
  "domain": "data",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:infra-data-management",
    "label": "Infra Data Management"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:controlled-vocabulary",
        "label": "Controlled Vocabulary"
      },
      {
        "@id": "urn:ngm:class:data-element",
        "label": "Data Element"
      },
      {
        "@id": "urn:ngm:class:schema-validation-rule",
        "label": "Schema Validation Rule"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:knowledge-management",
        "label": "Knowledge Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-discovery",
        "label": "Data Discovery"
      },
      {
        "@id": "urn:ngm:class:fair-data-principles",
        "label": "FAIR Data Principles"
      },
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      },
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:rdf-schema",
        "label": "RDF Schema"
      },
      {
        "@id": "urn:ngm:class:xml-schema",
        "label": "XML Schema"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:dublin-core",
        "label": "Dublin Core"
      },
      {
        "@id": "urn:ngm:class:json-ld",
        "label": "JSON-LD"
      },
      {
        "@id": "urn:ngm:class:schema-org",
        "label": "Schema.org"
      },
      {
        "@id": "urn:ngm:class:web-ontology-language",
        "label": "Web Ontology Language"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:data-catalog",
        "label": "Data Catalog"
      },
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:dublin-core-metadata-initiative",
        "label": "Dublin Core Metadata Initiative"
      },
      {
        "@id": "urn:ngm:class:iso-19115",
        "label": "ISO 19115"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-dictionary",
        "label": "Data Dictionary"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-standards",
        "label": "Data Standard"
      },
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:shacl",
        "label": "SHACL"
      },
      {
        "@id": "urn:ngm:class:open-metadata",
        "label": "Open Metadata"
      },
      {
        "@id": "urn:ngm:class:data-standard",
        "label": "Data Standard"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:metadata-standard",
      "label": "Metadata Standard"
    },
    {
      "@id": "urn:ngm:class:metadata-specification",
      "label": "Metadata Specification"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:metadata-schema:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:52c1729e19ee61425d01c6bde48fc52a9fe72978bddb88b874f7e40ae85da0f1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Discovery]]",
      "resolved": "urn:visionflow:linked:data-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Standard]]",
      "resolved": "urn:visionflow:linked:data-standard",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dublin Core]]",
      "resolved": "urn:visionflow:linked:dublin-core",
      "kind": "StubLink"
    },
    {
      "raw": "[[FAIR Data Principles]]",
      "resolved": "urn:visionflow:linked:fair-data-principles",
      "kind": "StubLink"
    },
    {
      "raw": "[[JSON-LD]]",
      "resolved": "urn:visionflow:linked:json-ld",
      "kind": "StubLink"
    },
    {
      "raw": "[[Schema.org]]",
      "resolved": "urn:visionflow:linked:schema-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Governance]]",
      "resolved": "urn:visionflow:owl:class:data-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Interoperability]]",
      "resolved": "urn:visionflow:owl:class:data-interoperability",
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
  - A structured specification defining metadata elements, their semantics, syntax, and relationships for describing and managing information resources. Metadata schemas establish standardized vocabularies and constraints that enable interoperability, discovery, and governance across data ecosystems through predefined sets of descriptive attributes tailored for specific domains or resource types.

- ### Semantic Classification
  - owl-class:: infrastructure:MetadataSchema
  - owl-role:: InformationStandard
  - belongs-to-domain:: [[Data Governance]]

- ### Relationships
  - is-subclass-of:: [[Data Standard]]
  - enables:: [[Data Interoperability]], [[FAIR Data Principles]], [[Data Discovery]]
  - implements:: [[Dublin Core]], [[Schema.org]], [[JSON-LD]]

- ### Content

  ## Definition

  A **Metadata Schema** is a formal specification that defines the structure, semantics, and constraints for metadata elements used to describe information resources. It establishes standardised vocabularies enabling consistent documentation of data assets across systems and organisations.

  ## Core Components

  ### Schema Elements
  - **Element Name**: Unique identifier for the metadata attribute
  - **Semantics**: Formal meaning and interpretation rules
  - **Syntax**: Data type, format, and encoding constraints
  - **Cardinality**: Required, optional, or repeatable designations
  - **Controlled Vocabularies**: Permitted value sets or taxonomies

  ### Schema Types
  1. **Descriptive Schemas**: Resource discovery and identification (Dublin Core)
  2. **Structural Schemas**: Data organisation and relationships (XML Schema)
  3. **Administrative Schemas**: Management and provenance tracking
  4. **Technical Schemas**: Format, encoding, and processing specifications

  ## Standards and Frameworks

  ### Core Standards
  - **Dublin Core Metadata Initiative**: 15 core elements for resource description
  - **Schema.org**: Web content structured data vocabulary
  - **Data Documentation Initiative (DDI)**: Survey and observational data
  - **ISO 19115**: Geographic information metadata

  ### Semantic Web Standards
  - **RDF Schema (RDFS)**: Vocabulary definition framework
  - **Web Ontology Language (OWL)**: Complex ontology specification
  - **SHACL**: Validation constraints and data quality rules
  - **JSON-LD**: Semantic contexts for linked data

  ## Applications

  ### Data Governance
  - Asset inventory and cataloguing
  - Lineage and provenance tracking
  - Quality assessment and compliance
  - Access control and classification

  ### Knowledge Management
  - Semantic search and discovery
  - Cross-system interoperability
  - Knowledge graph construction
  - Automated metadata generation

  #### References
  - [OpenMetadata Standards](https://openmetadatastandards.org/)
  - [Metadata Standard - Wikipedia](https://en.wikipedia.org/wiki/Metadata_standard)
  - [How to FAIR - Metadata](https://www.howtofair.dk/how-to-fair/metadata/)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
