public:: true

# Data Quality
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e47bd45c8a61fe23a1eca640d215cef57ecf5ebf550f8f0c63d5563df0283a2f",
  "@type": "Page",
  "vc:slug": "data-quality",
  "title": "Data Quality",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-governance",
      "vc:label": "Data Governance"
    },
    {
      "@id": "urn:visionflow:linked:master-data-management",
      "vc:label": "Master Data Management"
    },
    {
      "@id": "urn:visionflow:linked:data-integration",
      "vc:label": "Data Integration"
    },
    {
      "@id": "urn:visionflow:linked:data-management",
      "vc:label": "Data Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Quality"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-quality",
  "@type": "Class",
  "label": "Data Quality",
  "definition": "Data Quality is the degree to which a dataset is fit for its intended purpose, evaluated across multiple dimensions including accuracy, completeness, consistency, timeliness, uniqueness, and validity. It encompasses the processes, standards, and metrics used to assess, monitor, cleanse, and continuously improve the reliability and trustworthiness of data assets. High data quality is a foundational prerequisite for sound analytics, machine learning model performance, regulatory compliance, and effective decision-making across all data-driven disciplines. Its absence propagates errors through downstream systems, undermining the value of even sophisticated analytical and AI pipelines.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-profiling",
        "label": "Data Profiling"
      },
      {
        "@id": "urn:ngm:class:data-cleansing",
        "label": "Data Cleansing"
      },
      {
        "@id": "urn:ngm:class:data-validation",
        "label": "Data Validation"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      },
      {
        "@id": "urn:ngm:class:data-cataloguing",
        "label": "Data Cataloguing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      },
      {
        "@id": "urn:ngm:class:business-intelligence",
        "label": "Business Intelligence"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:etl",
        "label": "ETL"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:statistical-process-control",
        "label": "Statistical Process Control"
      },
      {
        "@id": "urn:ngm:class:entity-resolution",
        "label": "Entity Resolution"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decision-support-systems",
        "label": "Decision Support Systems"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-8000",
        "label": "ISO 8000"
      },
      {
        "@id": "urn:ngm:class:dama-dmbok",
        "label": "DAMA DMBOK"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-debt",
        "label": "Data Debt"
      },
      {
        "@id": "urn:ngm:class:dark-data",
        "label": "Dark Data"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-observability",
        "label": "Data Observability"
      },
      {
        "@id": "urn:ngm:class:data-mesh",
        "label": "Data Mesh"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:information-quality",
      "label": "Information Quality"
    },
    {
      "@id": "urn:ngm:class:data-integrity",
      "label": "Data Integrity"
    }
  ],
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-quality:87e600d3def6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e47bd45c8a61fe23a1eca640d215cef57ecf5ebf550f8f0c63d5563df0283a2f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Governance]]",
      "resolved": "urn:visionflow:linked:data-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Master Data Management]]",
      "resolved": "urn:visionflow:linked:master-data-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Integration]]",
      "resolved": "urn:visionflow:linked:data-integration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management]]",
      "resolved": "urn:visionflow:linked:data-management",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Data Quality denotes the degree to which data assets satisfy the requirements and expectations of their intended use, measured across multiple dimensions that collectively determine fitness for purpose. It is a sub-discipline of [[Data Management]] that spans assessment, monitoring, remediation, and prevention of defects across the full [[Data Lifecycle]]. The field draws on [[Statistical Process Control]], [[Metadata Management]], and [[Data Governance]] frameworks to operationalise quality standards, and its outcomes directly condition the reliability of [[Business Intelligence]], [[Machine Learning]], and [[Regulatory Compliance]] pipelines.

- ### Overview
  - Data Quality is one of the most foundational concerns in modern data practice. Irrespective of how sophisticated an analytical or AI system is, its outputs are only as trustworthy as the data fed into it — a principle often summarised as "garbage in, garbage out."
  - Quality is not a single property but a multidimensional profile of a dataset assessed relative to a specific use context. A dataset may be high-quality for one purpose (e.g. historical trend analysis) and inadequate for another (e.g. real-time fraud detection) due to latency characteristics.
  - Organisations formally manage data quality through programmes that combine technology (profiling tools, cleansing engines, monitoring dashboards) with organisational processes (stewardship, issue management, root-cause analysis) and policy (standards, ownership, SLAs).
  - The discipline has matured significantly since the 1990s, with formal bodies such as [[DAMA International]] codifying best practice in the [[DAMA DMBOK]], and the [[ISO 8000]] standard series providing internationally recognised data quality requirements.

- ### Key Dimensions
  - **Accuracy** — the degree to which data correctly represents the real-world entity or event it describes. Inaccurate records may arise from erroneous data entry, sensor faults, or stale lookups against [[Reference Data]].
  - **Completeness** — whether all required fields and records are present. Missingness may be structural (always absent) or incidental (sporadically missing), each requiring different remediation strategies.
  - **Consistency** — the absence of contradictions within a dataset or across multiple data sources. Inconsistencies frequently surface at [[Data Integration]] boundaries where different source systems use different conventions, codes, or update cadences.
  - **Timeliness** — whether data is current enough for its intended use. In event-driven and streaming architectures ([[Event Streaming]], [[Apache Kafka]]) timeliness is managed at the infrastructure level, whereas in batch [[ETL]] pipelines it is governed by scheduling.
  - **Uniqueness** — the absence of duplicate records for the same real-world entity. Deduplication and [[Entity Resolution]] are primary mechanisms for enforcing uniqueness.
  - **Validity** — conformance of values to defined business rules, formats, and reference domains. Validity checks are typically encoded as constraints in [[Data Validation]] frameworks or enforced by database schemas.
  - **Accessibility** — whether authorised users can reliably retrieve data when needed, encompassing availability, discoverability through [[Data Cataloguing]], and appropriate access control.

- ### Mechanisms & Processes
  - **[[Data Profiling]]** — systematic statistical analysis of a dataset to characterise its content, structure, and quality. Profiling reveals null rates, value distributions, uniqueness ratios, pattern frequencies, and referential integrity violations. Tools such as Apache Griffin, Great Expectations, and Talend Data Quality automate this process.
  - **[[Data Cleansing]]** — the detection and correction (or removal) of corrupt, inaccurate, or irrelevant records. Cleansing operations range from simple format normalisation and whitespace removal to complex fuzzy matching and [[Entity Resolution]] for deduplication.
  - **[[Data Validation]]** — the enforcement of business rules and constraints at point of ingestion or transformation. Validation gates in [[ETL]] or [[ELT]] pipelines prevent defective data from propagating downstream; schema-on-write approaches in relational systems provide a baseline layer.
  - **[[Data Lineage]]** tracking — recording the provenance and transformation history of data from source to consumption. Lineage is essential for root-cause analysis when quality issues surface, enabling teams to identify where in the pipeline a defect was introduced.
  - **[[Data Observability]]** — the continuous monitoring of data pipelines for anomalies in freshness, volume, schema, and distribution. Modern observability platforms (Monte Carlo, Bigeye, Acceldata) apply ML-based anomaly detection to identify quality degradation without pre-defining every rule.
  - **Root-cause analysis and remediation** — structured investigation of quality defects to identify systemic causes (upstream process failures, schema changes, API contract drift) and implement fixes at source rather than compensating downstream.
  - **[[Master Data Management]] (MDM)** — the discipline of creating and maintaining a single authoritative version of key business entities (customers, products, locations). MDM directly depends on data quality processes to ensure the master record is trustworthy.

- ### Applications & Use Cases
  - **[[Machine Learning]] model training** — training data quality directly determines model accuracy and fairness. Label noise, feature missingness, and distributional inconsistency in training sets propagate into model bias and degraded generalisation. [[Feature Engineering]] pipelines increasingly embed quality gates.
  - **[[Business Intelligence]] and reporting** — KPI dashboards and executive reports require accurate, consistent, timely data. Quality failures in BI contexts erode stakeholder trust and lead to "spreadsheet wars" as business units maintain conflicting local copies.
  - **[[Regulatory Compliance]]** — regulations such as GDPR, BCBS 239 (banking data risk management), Solvency II, and HIPAA impose explicit obligations on data accuracy, completeness, and provenance. Non-compliance arising from poor quality can attract significant penalties.
  - **[[Supply Chain]] management** — product master data accuracy (GTINs, dimensions, weights, hazard classifications) directly affects procurement, logistics routing, and regulatory reporting. A single incorrect field can delay shipments or trigger safety recalls.
  - **Healthcare and clinical systems** — patient record quality (accuracy of diagnoses, medication codes, allergy flags) has direct safety implications. [[HL7 FHIR]] and clinical terminologies such as SNOMED CT provide standardised vocabularies that constrain value domains and improve interoperability quality.
  - **[[Data Mesh]] architectures** — in decentralised data product paradigms, each domain team takes explicit ownership of the quality of data products it publishes, enforced through contractual SLAs and automated quality metrics embedded in [[Data Cataloguing]] tools.
  - **Financial services** — trade data accuracy and reconciliation integrity are mandated by regulators. Post-trade processing, risk aggregation (BCBS 239), and AML screening all depend on high-quality reference and transaction data.

- ### Relationships
  - partOf:: [[Data Management]]
  - requires:: [[Data Governance]]
  - requires:: [[Metadata Management]]
  - requires:: [[Data Cataloguing]]
  - hasPart:: [[Data Profiling]]
  - hasPart:: [[Data Cleansing]]
  - hasPart:: [[Data Validation]]
  - hasPart:: [[Data Lineage]]
  - enables:: [[Master Data Management]]
  - enables:: [[Business Intelligence]]
  - enables:: [[Regulatory Compliance]]
  - dependsOn:: [[Data Integration]]
  - dependsOn:: [[ETL]]
  - uses:: [[Statistical Process Control]]
  - uses:: [[Entity Resolution]]
  - supports:: [[Decision Support Systems]]
  - supports:: [[Data Warehouse]]
  - standardizedBy:: [[ISO 8000]]
  - standardizedBy:: [[DAMA DMBOK]]
  - contrastsWith:: [[Data Debt]]
  - contrastsWith:: [[Dark Data]]
  - bridgesTo:: [[Machine Learning]]
  - bridgesTo:: [[Feature Engineering]]
  - relatedTo:: [[Data Observability]]
  - relatedTo:: [[Data Mesh]]

- ### Standards & Context
  - **[[ISO 8000]]** — the ISO standard series dedicated to data quality, covering concepts and vocabulary (ISO 8000-1), master data quality (ISO 8000-110), data quality management (ISO 8000-61), and exchange of quality information. Provides internationally recognised definitions and requirements.
  - **[[DAMA DMBOK]]** — the Data Management Body of Knowledge published by [[DAMA International]], treating Data Quality as one of eleven knowledge areas. The DMBOK framework defines the data quality lifecycle and establishes governance integration points.
  - **TDQM Framework** — the Total Data Quality Management framework developed at MIT, analogous to Total Quality Management in manufacturing, emphasising continuous improvement cycles and root-cause elimination rather than purely reactive cleansing.
  - **Great Expectations** — a widely adopted open-source Python framework for defining, documenting, and validating data quality expectations as executable tests, enabling quality-as-code practices in modern data pipelines.
  - **[[GDPR]] and data accuracy obligations** — Article 5(1)(d) of the EU General Data Protection Regulation requires that personal data be "accurate and, where necessary, kept up to date," establishing a legal dimension to data quality for personal data controllers.
  - **BCBS 239** — Basel Committee on Banking Supervision Principles for effective risk data aggregation and risk reporting, imposing stringent accuracy, completeness, and timeliness requirements on risk data in systemically important banks.
  - **DQAF (Data Quality Assessment Framework)** — published by the IMF, used for assessing the quality of official statistics, covering integrity, methodological soundness, accuracy, serviceability, and accessibility dimensions.
  - **[[Apache Atlas]] and [[Apache Griffin]]** — open-source tools from the Hadoop ecosystem addressing metadata management and data quality measurement respectively, widely used in enterprise data lakes.

- ### Provenance
  - sources:: ISO 8000 standard series; DAMA DMBOK 2nd ed.; TDQM Framework (MIT CISR); Great Expectations documentation; BCBS 239; GDPR Article 5
  - updated:: 2026-06-13
