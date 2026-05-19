schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#MetadataSchema
legacy_uri:: urn:visionclaw:concept:infrastructure:metadata-schema
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-673a9893641e"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#MetadataSchema"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-8001"
    },
    {
      "vc:key": "maturity",
      "vc:value": "reviewed"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Metadata Schema"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:metadata-schema"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:metadata-schema"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:52c1729e19ee61425d01c6bde48fc52a9fe72978bddb88b874f7e40ae85da0f1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:metadata-schema",
  "@type": "OntologyClass",
  "label": "Metadata Schema",
  "subClassOf": [
    {
      "@id": "urn:visionflow:linked:data-standard",
      "vc:label": "Data Standard"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "active",
  "vc:maturity": "reviewed",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:52c1729e19ee61425d01c6bde48fc52a9fe72978bddb88b874f7e40ae85da0f1"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:52c1729e19ee61425d01c6bde48fc52a9fe72978bddb88b874f7e40ae85da0f1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A structured specification defining metadata elements, their semantics, syntax, and relationships for describing and managing information resources. Metadata schemas establish standardized vocabularies and constraints that enable interoperability, discovery, and governance across data ecosystems through predefined sets of descriptive attributes tailored for specific domains or resource types.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:data-discovery",
      "vc:label": "Data Discovery"
    },
    {
      "@id": "urn:visionflow:linked:fair-data-principles",
      "vc:label": "FAIR Data Principles"
    },
    {
      "@id": "urn:visionflow:owl:class:data-interoperability",
      "vc:label": "Data Interoperability"
    }
  ],
  "vc:implements": [
    {
      "@id": "urn:visionflow:linked:dublin-core",
      "vc:label": "Dublin Core"
    },
    {
      "@id": "urn:visionflow:linked:json-ld",
      "vc:label": "JSON-LD"
    },
    {
      "@id": "urn:visionflow:linked:schema-org",
      "vc:label": "Schema.org"
    }
  ]
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:52c1729e19ee61425d01c6bde48fc52a9fe72978bddb88b874f7e40ae85da0f1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
