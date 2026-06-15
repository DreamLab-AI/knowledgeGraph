public:: true

# Raw Data

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:raw-data",
  "@type": "Page",
  "title": "Raw Data",
  "vc:slug": "raw-data",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:raw-data",
  "@type": "Class",
  "label": "Raw Data",
  "definition": "Raw data is unprocessed information as originally collected from a source, before cleaning, transformation, aggregation or annotation. It may be noisy, inconsistent, redundant or incomplete, and typically lacks the structure and quality guarantees of processed data. Raw data forms the input to data pipelines, where it is ingested, validated and transformed into usable, analysis-ready forms.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data",
      "label": "Data"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sensor-data",
        "label": "Sensor Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-processing",
        "label": "Data Processing"
      },
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-annotation",
        "label": "Data Annotation"
      },
      {
        "@id": "urn:ngm:class:information-extraction",
        "label": "Information Extraction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-ingestion",
        "label": "Data Ingestion"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-transformation",
        "label": "Data Transformation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Raw Data]] is unprocessed information from [[Data Collection]] and [[Sensor Data]], contrasted with [[Metadata]] and fed into the [[Data Pipeline]] for [[Data Processing]].
- ### Overview
  - Unprocessed information as originally captured from a source.
  - Often noisy, inconsistent and lacking structure or quality guarantees.
  - Serves as the input to ingestion and transformation pipelines.
- ### Key aspects
  - Source-fidelity capture without modification.
  - Heterogeneous formats and variable quality.
  - Provenance and lineage tracking from origin.
  - Distinction from processed, structured and annotated data.
- ### Applications
  - Input to data pipelines and ETL processes.
  - Source material for annotation and labelling.
  - Audit and reproducibility through original records.
  - Feature engineering and model training inputs.
- ### Relationships
  - contrastsWith:: [[Metadata]]
  - requires:: [[Data Collection]]
  - partOf:: [[Data]]
  - uses:: [[Sensor Data]]
  - enables:: [[Data Processing]]
  - enables:: [[Data Pipeline]]
  - supports:: [[Data Annotation]]
  - supports:: [[Information Extraction]]
  - relatedTo:: [[Data Quality]]
  - relatedTo:: [[Data Ingestion]]
  - dependsOn:: [[Data Collection]]
  - bridgesTo:: [[Data Transformation]]
  - implements:: [[Data Collection]]
- ### Provenance
  - updated:: 2026-06-15
