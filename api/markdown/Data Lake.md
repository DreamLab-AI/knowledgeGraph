public:: true

# Data Lake
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:61cfdf94f5a1641c0945dd1f1dd06c6d661049907b191d7a7b1ffe6a8cf09b0a",
  "@type": "Page",
  "vc:slug": "data-lake",
  "title": "Data Lake",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:big-data",
      "vc:label": "Big Data"
    },
    {
      "@id": "urn:visionflow:linked:data-engineering",
      "vc:label": "Data Engineering"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9009"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Lake"
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
  "@id": "urn:ngm:class:data-lake",
  "@type": "Class",
  "label": "Data Lake",
  "definition": "A centralized repository that stores structured, semi-structured, and unstructured data at any scale in its native format, deferring schema enforcement to query time (schema-on-read). Data lakes enable big-data analytics, machine learning pipelines, and exploratory analysis without upfront data modelling, serving as the foundational ingestion layer for modern data architectures.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:data-storage",
    "label": "Data Storage"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:etl-pipeline", "label": "ETL Pipeline"},
      {"@id": "urn:ngm:class:batch-processing", "label": "Batch Processing"},
      {"@id": "urn:ngm:class:metadata-catalog", "label": "Metadata Catalog"},
      {"@id": "urn:ngm:class:object-storage", "label": "Object Storage"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:data-architecture", "label": "Data Architecture"},
      {"@id": "urn:ngm:class:modern-data-stack", "label": "Modern Data Stack"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:distributed-file-system", "label": "Distributed File System"},
      {"@id": "urn:ngm:class:cloud-storage", "label": "Cloud Storage"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:machine-learning-discipline-pipeline", "label": "Machine Learning Pipeline"},
      {"@id": "urn:ngm:class:machine-learning-discipline-infrastructure", "label": "Machine Learning Infrastructure"},
      {"@id": "urn:ngm:class:big-data-analytics", "label": "Big Data Analytics"},
      {"@id": "urn:ngm:class:exploratory-data-analysis", "label": "Exploratory Data Analysis"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"},
      {"@id": "urn:ngm:class:apache-parquet", "label": "Apache Parquet"},
      {"@id": "urn:ngm:class:apache-iceberg", "label": "Apache Iceberg"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:stream-processing", "label": "Stream Processing"},
      {"@id": "urn:ngm:class:real-time-analytics", "label": "Real-Time Analytics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:data-warehouse", "label": "Data Warehouse"},
      {"@id": "urn:ngm:class:relational-database", "label": "Relational Database"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:data-lakehouse", "label": "Data Lakehouse"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-fabric-architecture", "label": "Data Fabric Architecture"},
      {"@id": "urn:ngm:class:graph-database", "label": "Graph Database"},
      {"@id": "urn:ngm:class:data-mesh", "label": "Data Mesh"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:enterprise-data-lake", "label": "Enterprise Data Lake"},
    {"@id": "urn:ngm:class:big-data-lake", "label": "Big Data Lake"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

Data lakes differ from traditional data warehouses in that they retain raw, unprocessed data and apply structure only at query time. This schema-on-read approach maximises flexibility for machine learning workloads where feature engineering requirements are not known in advance. Modern data lake architectures (lakehouses) increasingly blend the structure of warehouses with the flexibility of lakes, incorporating transactional metadata layers like Apache Iceberg or Delta Lake.

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-lake:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:61cfdf94f5a1641c0945dd1f1dd06c6d661049907b191d7a7b1ffe6a8cf09b0a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Big Data]]",
      "resolved": "urn:visionflow:linked:big-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Engineering]]",
      "resolved": "urn:visionflow:linked:data-engineering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
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
  - Centralized repository that stores structured and unstructured data at scale in its native format, enabling big data analytics and machine learning workloads.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataLake
  - owl-role:: Object
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]

- ### Content
  Data Lake — content pending enrichment.

- ### Provenance
  - sources:: [[Data Engineering]], [[Big Data]]
  - migration-date:: 2026-04-26T00:00:00Z
