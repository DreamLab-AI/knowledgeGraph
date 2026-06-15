public:: true

# Apache Parquet
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:apache-parquet", "@type": "Page", "title": "Apache Parquet", "vc:slug": "apache-parquet", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:apache-parquet",
  "@type": "Class",
  "label": "Apache Parquet",
  "definition": "Apache Parquet is an open-source columnar storage file format designed for efficient analytical processing of large datasets. By storing values of the same column contiguously, it enables aggressive compression and encoding, predicate pushdown, and reading only the columns a query needs, dramatically reducing I/O for analytical workloads. It carries a self-describing schema and rich metadata, and is widely used as the on-disk format for data lakes and big-data engines.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:columnar-storage",
        "label": "Columnar Storage"
      },
      {
        "@id": "urn:ngm:class:data-serialization",
        "label": "Data Serialisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:apache-spark",
        "label": "Apache Spark"
      },
      {
        "@id": "urn:ngm:class:data-lake",
        "label": "Data Lake"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      },
      {
        "@id": "urn:ngm:class:big-data",
        "label": "Big Data"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-lake",
        "label": "Data Lake"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:olap",
        "label": "OLAP"
      },
      {
        "@id": "urn:ngm:class:big-data",
        "label": "Big Data"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:apache-spark",
        "label": "Apache Spark"
      },
      {
        "@id": "urn:ngm:class:schema-evolution",
        "label": "Schema Evolution"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:file-format",
        "label": "File Format"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:columnar-storage",
        "label": "Columnar Storage"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-serialization",
        "label": "Data Serialisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:file-format",
        "label": "File Format"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Apache Parquet]] is defined in relation to [[Columnar Storage]], [[Data Lake]], [[Apache Spark]], [[Data Warehouse]], building on [[Blockchain]].
  - Apache Parquet is an open-source columnar storage file format designed for efficient analytical processing of large datasets. By storing values of the same column contiguously, it enables aggressive compression and encoding, predicate pushdown, and reading only the columns a query needs, dramatically reducing I/O for analytical workloads. It carries a self-describing schema and rich metadata, and is widely used as the on-disk format for data lakes and big-data engines.

- ### Overview
  - Parquet organises data into row groups, each split into column chunks made of pages. Because a column's values share a type and often a distribution, Parquet applies encodings such as dictionary, run-length, and bit-packing, then general compression (Snappy, Zstandard, Gzip), achieving far smaller files than row-oriented formats.
  - Per-column statistics (min, max, null counts) stored in metadata let query engines skip row groups that cannot match a predicate. Combined with projection of only required columns, this makes Parquet highly efficient for scan-heavy analytical queries.

- ### Key aspects
  - Columnar layout with row groups, column chunks, and pages for parallel, partial reads.
  - Encoding and compression chosen per column, plus embedded statistics for predicate pushdown.
  - Self-describing nested schema supporting complex and evolving structures.

- ### Applications
  - Primary storage format for data lakes and lakehouse tables (Delta Lake, Iceberg, Hudi build on it).
  - Interchange between Spark, Trino, Hive, DuckDB, pandas, and Arrow-based tools.
  - Cost-efficient long-term storage of analytical and event data in object stores.

- ### Relationships
  - subClassOf:: [[Blockchain]]
  - uses:: [[Columnar Storage]]
  - uses:: [[Data Serialisation]]
  - relatedTo:: [[Apache Spark]]
  - relatedTo:: [[Data Lake]]
  - relatedTo:: [[Data Warehouse]]
  - relatedTo:: [[Big Data]]
  - partOf:: [[Data Lake]]
  - enables:: [[OLAP]]
  - enables:: [[Big Data]]
  - supports:: [[Apache Spark]]
  - supports:: [[Schema Evolution]]
  - requires:: [[File Format]]
  - implements:: [[Columnar Storage]]
  - dependsOn:: [[Data Serialisation]]
  - bridgesTo:: [[Data Warehouse]]
  - contrastsWith:: [[File Format]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
