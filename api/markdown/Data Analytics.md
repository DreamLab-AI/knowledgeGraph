public:: true

# Data Analytics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0ef0d33c537beb4b31f463dff0069dcb839dc69a69b1020a3fa23b4163ea25af",
  "@type": "Page",
  "vc:slug": "data-analytics",
  "title": "Data Analytics",
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
      "vc:value": "MV-9549"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Analytics"
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
  "@id": "urn:ngm:class:data-analytics",
  "@type": "Class",
  "label": "Data Analytics",
  "definition": "Data Analytics is the systematic computational analysis of data sets to discover patterns, draw conclusions, and support decision-making. It encompasses descriptive analytics (summarising historical data), diagnostic analytics (root-cause analysis), predictive analytics (forecasting), and prescriptive analytics (recommending actions). Data analytics pipelines ingest data from multiple sources, apply statistical and machine learning methods, and deliver insights through dashboards and reports.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:data-lake", "label": "Data Lake"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:predictive-analytics", "label": "Predictive Analytics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-integration", "label": "Data Integration"},
      {"@id": "urn:ngm:class:data-processing", "label": "Data Processing"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-analytics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0ef0d33c537beb4b31f463dff0069dcb839dc69a69b1020a3fa23b4163ea25af"
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
  - Data Analytics is the systematic computational analysis of data sets to discover patterns, draw conclusions, and support decision-making. It encompasses descriptive analytics (summarising historical data), diagnostic analytics (root-cause analysis), predictive analytics (forecasting), and prescriptive analytics (recommending actions). Data analytics pipelines ingest data from multiple sources, apply statistical and machine learning methods, and deliver insights through dashboards and reports.

- ### Semantic Classification
  - owl-class:: infrastructure:DataAnalytics
  - owl-role:: concept

- ### Relationships
  - uses [[Machine Learning Discipline]]
  - uses [[Data Pipeline]]
  - uses [[Data Lake]]
  - enables [[Predictive Analytics]]
  - relatedTo [[Data Integration]]
  - relatedTo [[Data Processing]]

- ### Content

  ## Overview

  Data Analytics encompasses the full spectrum of techniques for extracting value from data. Descriptive analytics summarises historical records; diagnostic analytics traces cause-effect relationships in past events; predictive analytics applies machine learning to forecast future states; prescriptive analytics recommends optimised actions. Operationally, analytics pipelines extract and transform data from source systems into data lakes or warehouses, apply statistical models and ML algorithms, and surface results through interactive dashboards. In spatial computing, real-time analytics on sensor streams supports adaptive environment management and personalised user experiences. Data integration across heterogeneous sources — structured databases, semi-structured logs, unstructured text — is a persistent engineering challenge requiring schema harmonisation and data quality management.

- ### Provenance
  - bridges-to:: [[Computer Vision]] (ai)
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
