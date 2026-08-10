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
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
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
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:etl-pipeline",
        "label": "ETL Pipeline"
      },
      {
        "@id": "urn:ngm:class:batch-processing",
        "label": "Batch Processing"
      },
      {
        "@id": "urn:ngm:class:metadata-catalog",
        "label": "Metadata Catalog"
      },
      {
        "@id": "urn:ngm:class:object-storage",
        "label": "Object Storage"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-architecture",
        "label": "Data Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-file-system",
        "label": "Distributed File System"
      },
      {
        "@id": "urn:ngm:class:cloud-storage",
        "label": "Cloud Storage"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline-pipeline",
        "label": "Machine Learning Pipeline"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-infrastructure",
        "label": "Machine Learning Infrastructure"
      },
      {
        "@id": "urn:ngm:class:data-analytics",
        "label": "Big Data Analytics"
      },
      {
        "@id": "urn:ngm:class:exploratory-data-analysis",
        "label": "Exploratory Data Analysis"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      },
      {
        "@id": "urn:ngm:class:apache-parquet",
        "label": "Apache Parquet"
      },
      {
        "@id": "urn:ngm:class:apache-iceberg",
        "label": "Apache Iceberg"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:stream-processing",
        "label": "Stream Processing"
      },
      {
        "@id": "urn:ngm:class:real-time-analytics",
        "label": "Real-Time Analytics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      },
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:lakehouse-architecture",
        "label": "Data Lakehouse"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-fabric-architecture",
        "label": "Data Fabric Architecture"
      },
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      },
      {
        "@id": "urn:ngm:class:data-mesh",
        "label": "Data Mesh"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:enterprise-data-lake",
      "label": "Enterprise Data Lake"
    },
    {
      "@id": "urn:ngm:class:big-data-lake",
      "label": "Big Data Lake"
    }
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
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
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

- ### Current Landscape (2026)
  - The "table format war" has effectively ended with the industry converging on the open lakehouse: Apache Iceberg is now the de facto interoperability standard (roughly 78% adoption among data professionals), every major cloud ships managed Iceberg services, and both Snowflake and Databricks read and write it natively.
  - Databricks acquired Tabular — the company founded by Iceberg's original Netflix creators (Ryan Blue, Daniel Weeks, Jason Reid) — in June 2024 for a reported $1–2bn, bringing both leading formats under one roof; CEO Ali Ghodsi has since declared "Iceberg won the open format standard".
  - Iceberg's v3 specification was ratified in mid-2025 and delivered through the 1.10 (December 2025) and 1.11 (to May 2026) release line, adding deletion vectors, a VARIANT type with shredding for semi-structured data, row lineage for change tracking, and geospatial types.
  - Delta Lake reached 4.0 alongside Spark 4.0 in September 2025 and 4.1.0 in March 2026, centring on catalog-managed tables, coordinated commits for multi-engine writes, and restored UniForm Iceberg interoperability; Databricks now ships Iceberg v3 as a first-class format under Unity Catalog.
  - The battleground has shifted from format to catalog and governance: Apache Polaris graduated to an ASF Top-Level Project on 18 February 2026, Databricks open-sourced Unity Catalog (LF AI & Data) as a multi-format catalog, and Snowflake Horizon reached GA for Iceberg reads in February 2026 (external writes in preview from March 2026).
  - New entrants and interoperability moves proliferated: DuckDB and MotherDuck introduced DuckLake in 2025 (moving all table metadata into a SQL database), AWS shipped managed S3 Tables and Glue catalog federation (November 2025), and Google enabled BigQuery Iceberg read/write interoperability in April 2026.
  - Open challenges as of 2026 centre on cross-vendor governance: fine-grained policies (masking, row-access) do not automatically carry across catalog boundaries, so enterprises running Snowflake, Databricks and AWS together must still duplicate policies — driving interest in emerging standards such as the Open Semantic Interchange for portable semantic definitions.

- ### References
  - 1. AI Wire (2026). Databricks Acquires Tabular for $2B to Unify AI and Data Lakehouse. https://aiwire.ai/articles/databricks-acquires-tabular-iceberg-ai-lakehouse
  - 2. AM Data Lakehouse (2026). Lakehouse Table Formats in 2026: Iceberg, Delta Lake, Hudi, Paimon, DuckLake. https://amdatalakehouse.substack.com/p/lakehouse-table-formats-in-2026-iceberg
  - 3. BigData Boutique (2026). Apache Iceberg vs Delta Lake: Choosing the Right Table Format. https://bigdataboutique.com/blog/apache-iceberg-vs-delta-lake-choosing-the-right-table-format
  - 4. Snowflake Engineering Blog (2026). Apache Polaris: The End of Data Vendor Lock-In. https://www.snowflake.com/en/blog/engineering/apache-polaris-iceberg-rest-catalog/
  - 5. Data Lakehouse Hub (2026). Choosing the Right Iceberg Control Plane: Polaris vs. Unity Catalog. https://datalakehousehub.com/blog/2026-05-choosing-iceberg-control-plane

- ### Provenance
  - sources:: [[Data Engineering]], [[Big Data]]
  - migration-date:: 2026-04-26T00:00:00Z
