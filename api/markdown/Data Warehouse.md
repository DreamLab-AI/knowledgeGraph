public:: true

# Data Warehouse
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-warehouse",
  "@type": "Page",
  "vc:slug": "data-warehouse",
  "title": "Data Warehouse",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-warehouse",
  "@type": "Class",
  "label": "Data Warehouse",
  "definition": "A data warehouse is a centralised analytical repository that integrates cleansed, structured data from multiple operational sources into a subject-oriented, historical model optimised for querying and reporting. It supports business intelligence through schemas such as star and snowflake and columnar storage for fast aggregation. It is a core data-engineering asset enabling consistent enterprise analytics.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Infrastructure Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"},
      {"@id": "urn:ngm:class:data-engineering", "label": "Data Engineering"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A data warehouse is a centralised analytical store integrating data from many sources for reporting, a core [[Data Engineering]] asset that depends on [[Metadata Management]] for trust and discovery.
- ### Content
  - Data is loaded through ETL or ELT into dimensional models that separate facts from descriptive dimensions, then served to BI tools. Modern cloud warehouses decouple storage from compute and use columnar formats to scale analytical queries elastically.
