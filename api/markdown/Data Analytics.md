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
  "definition": "Data Analytics is the systematic computational examination of raw data sets to uncover patterns, correlations, and actionable insights that support organisational decision-making. It spans four analytical tiers: descriptive analytics (summarising historical state), diagnostic analytics (identifying causes of past events), predictive analytics (forecasting future outcomes via statistical and machine learning models), and prescriptive analytics (recommending optimal actions). Analytics pipelines ingest data from heterogeneous sources, apply transformation and enrichment steps, execute statistical or ML algorithms, and surface results through visualisations, dashboards, and automated alerts. As a discipline, data analytics integrates elements of statistics, computer science, domain knowledge, and data engineering to create measurable business and scientific value.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-science",
      "label": "Data Science"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:descriptive-analytics", "label": "Descriptive Analytics"},
      {"@id": "urn:ngm:class:predictive-analytics", "label": "Predictive Analytics"},
      {"@id": "urn:ngm:class:prescriptive-analytics", "label": "Prescriptive Analytics"},
      {"@id": "urn:ngm:class:diagnostic-analytics", "label": "Diagnostic Analytics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:data-lake", "label": "Data Lake"},
      {"@id": "urn:ngm:class:data-warehouse", "label": "Data Warehouse"},
      {"@id": "urn:ngm:class:statistical-modelling", "label": "Statistical Modelling"},
      {"@id": "urn:ngm:class:data-visualisation", "label": "Data Visualisation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-integration", "label": "Data Integration"},
      {"@id": "urn:ngm:class:data-quality-management", "label": "Data Quality Management"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:business-intelligence", "label": "Business Intelligence"},
      {"@id": "urn:ngm:class:decision-support-system", "label": "Decision Support System"},
      {"@id": "urn:ngm:class:real-time-analytics", "label": "Real-Time Analytics"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:data-processing", "label": "Data Processing"},
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:big-data", "label": "Big Data"},
      {"@id": "urn:ngm:class:etl", "label": "ETL"},
      {"@id": "urn:ngm:class:data-engineering", "label": "Data Engineering"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:data-analysis", "label": "Data Analysis"}
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
  - Data Analytics is the systematic computational examination of raw data to uncover patterns, correlations, and actionable insights that drive decision-making across industry, science, and government. It integrates [[Statistical Modelling]], [[Machine Learning]], [[Data Visualisation]], and domain expertise across a four-tier analytical hierarchy — descriptive, diagnostic, predictive, and prescriptive — operating on data ingested from heterogeneous sources through structured [[Data Pipeline]] and [[ETL]] processes. Modern analytics platforms leverage [[Cloud Computing]] and distributed architectures to handle [[Big Data]] at scale, bridging into adjacent disciplines including [[Business Intelligence]], [[Data Science]], and [[Artificial Intelligence]].

- ### Overview
  - Data Analytics emerged as a formalised discipline from the convergence of statistics, computer science, and database management, accelerated by the proliferation of digital data sources and affordable computing power. Its core value proposition is transforming raw, unstructured, or semi-structured data into structured knowledge that reduces uncertainty for decision-makers.
  - The four canonical analytical modes define a progression from retrospective to proactive:
    - **Descriptive analytics** aggregates historical records to answer "what happened?" — the foundation of [[Business Intelligence]] dashboards and reporting.
    - **Diagnostic analytics** drills into historical data to answer "why did it happen?" using root-cause analysis, drill-down, and correlation techniques.
    - **Predictive analytics** applies [[Statistical Modelling]] and [[Machine Learning]] to answer "what is likely to happen?" — encompassing regression, classification, time-series forecasting, and survival analysis.
    - **Prescriptive analytics** combines predictions with optimisation to answer "what should we do?" — integrating simulation, linear programming, and reinforcement learning.
  - Analytics operates within a broader [[Data Engineering]] ecosystem: raw data is ingested via [[ETL]] or ELT processes into [[Data Lake]] or [[Data Warehouse]] stores, cleansed and enriched by [[Data Quality Management]] processes, governed by [[Data Governance]] policies, and finally analysed and surfaced through [[Data Visualisation]] and reporting layers.

- ### Key Components
  - **Data Ingestion and Storage**
    - [[Data Pipeline]] — orchestrated workflows that extract, transform, and load data from source systems
    - [[ETL]] (Extract, Transform, Load) — the classical batch pattern for moving data between systems
    - [[Data Lake]] — schema-on-read stores for raw, heterogeneous data at scale (e.g. Apache Hadoop, Amazon S3)
    - [[Data Warehouse]] — schema-on-write columnar stores optimised for analytical queries (e.g. Snowflake, BigQuery, Redshift)
    - [[Data Integration]] — combining data from disparate sources into a coherent analytical view
  - **Analysis and Modelling**
    - [[Statistical Modelling]] — regression, hypothesis testing, Bayesian inference, time-series analysis
    - [[Machine Learning]] — supervised, unsupervised, and reinforcement learning applied to prediction and clustering
    - [[Descriptive Analytics]] — aggregations, pivot tables, cohort analysis, summary statistics
    - [[Predictive Analytics]] — forecasting models, propensity scoring, anomaly detection
    - [[Prescriptive Analytics]] — optimisation, simulation, recommendation engines
    - [[Diagnostic Analytics]] — root-cause analysis, funnel analysis, attribution modelling
  - **Infrastructure and Tooling**
    - [[Data Processing]] — batch (Apache Spark, Flink) and stream processing (Apache Kafka) frameworks
    - [[Cloud Computing]] — elastic compute and managed analytics services (AWS, Azure, GCP)
    - [[Real-Time Analytics]] — low-latency analytical queries on streaming data (Apache Druid, ClickHouse)
    - [[Big Data]] — distributed storage and compute frameworks handling petabyte-scale data volumes
  - **Governance and Quality**
    - [[Data Governance]] — policies, standards, and accountability for data assets
    - [[Data Quality Management]] — profiling, cleansing, validation, and monitoring of data accuracy and completeness
    - [[Data Lineage]] — tracking provenance of data from origin through transformations to consumption

- ### Applications and Use Cases
  - **Financial Services** — credit scoring, fraud detection, algorithmic trading, risk modelling, customer lifetime value analysis using [[Machine Learning]] and [[Predictive Analytics]]
  - **Healthcare** — patient outcome prediction, clinical trial analysis, genomic data interpretation, population health management
  - **Retail and E-commerce** — demand forecasting, recommendation engines, churn prediction, personalisation pipelines
  - **Manufacturing** — predictive maintenance using sensor telemetry, supply chain optimisation, quality control analytics
  - **Spatial and Extended Reality** — [[Spatial Computing]] applications combining real-time sensor streams with analytics for adaptive environment management; [[Computer Vision]] pipelines feeding into analytics for scene understanding
  - **Telecommunications** — network performance analytics, subscriber churn modelling, capacity planning
  - **Government and Public Sector** — policy impact evaluation, tax compliance analytics, epidemiological surveillance
  - **Marketing** — multi-touch attribution, A/B testing at scale, audience segmentation, customer journey analytics
  - **Science and Research** — high-energy physics event selection, genomics pipelines, climate modelling output analysis
  - **Federated and Privacy-Preserving Analytics** — applying [[Federated Learning]] and differential privacy to enable analytics across distributed, sensitive data without centralising raw records

- ### Relationships
  - hasPart:: [[Descriptive Analytics]]
  - hasPart:: [[Predictive Analytics]]
  - hasPart:: [[Prescriptive Analytics]]
  - hasPart:: [[Diagnostic Analytics]]
  - uses:: [[Machine Learning]]
  - uses:: [[Data Pipeline]]
  - uses:: [[Data Lake]]
  - uses:: [[Data Warehouse]]
  - uses:: [[Statistical Modelling]]
  - uses:: [[Data Visualisation]]
  - requires:: [[Data Integration]]
  - requires:: [[Data Quality Management]]
  - requires:: [[Data Governance]]
  - enables:: [[Business Intelligence]]
  - enables:: [[Decision Support System]]
  - enables:: [[Real-Time Analytics]]
  - dependsOn:: [[Data Processing]]
  - dependsOn:: [[Cloud Computing]]
  - relatedTo:: [[Big Data]]
  - relatedTo:: [[ETL]]
  - relatedTo:: [[Data Engineering]]
  - bridges-to:: [[Computer Vision]]
  - bridges-to:: [[Spatial Computing]]
  - bridges-to:: [[Federated Learning]]

- ### Standards and Context
  - **Industry Frameworks**
    - CRISP-DM (Cross-Industry Standard Process for Data Mining) — the dominant lifecycle model for analytics projects, defining phases from business understanding through deployment
    - TDSP (Team Data Science Process) — Microsoft's agile analytics project methodology
    - DMBoK (Data Management Body of Knowledge) — DAMA International's reference framework covering [[Data Governance]], [[Data Quality Management]], and analytics
  - **Open Standards and Specifications**
    - SQL:2016 and extensions — the foundational query language for [[Data Warehouse]] and analytical database systems
    - Apache Arrow — columnar in-memory format enabling zero-copy analytics across languages and systems
    - Apache Parquet and ORC — columnar storage formats optimised for analytical workloads on [[Data Lake]] platforms
    - Delta Lake / Apache Iceberg / Apache Hudi — open table formats providing ACID transactions on [[Data Lake]] stores
  - **Regulatory Context**
    - GDPR (EU General Data Protection Regulation) — governs how personal data may be collected, processed, and analysed, requiring privacy-by-design in analytics pipelines
    - CCPA (California Consumer Privacy Act) — US state-level analogue imposing data rights constraints on analytics
    - AI Act (EU, 2024) — imposes conformity and transparency requirements on high-risk AI systems, which intersects with [[Predictive Analytics]] models used in consequential decisions
  - **Key Organisations**
    - DAMA International — custodian of DMBoK, the professional body for data management and analytics practitioners
    - The Open Group — publishes standards relevant to enterprise data architecture
    - IEEE — standards activity in data provenance, [[Data Quality Management]], and analytics interoperability

- ### Semantic Classification
  - owl-class:: data:DataAnalytics
  - owl-role:: concept

- ### Provenance
  - sources:: DAMA DMBoK v2; CRISP-DM reference model; Apache Software Foundation documentation; GDPR text; EU AI Act 2024
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
