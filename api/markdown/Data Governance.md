public:: true
alias:: DataGovernance

# Data Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b0bb6badb9b85089d5015bc2e8c29e29ebb0b2015c24f96056770446594fcb73",
  "@type": "Page",
  "vc:slug": "data-governance",
  "title": "Data Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
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
      "vc:value": "MV-9551"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Governance"
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
  "@id": "urn:ngm:class:data-governance",
  "@type": "Class",
  "label": "Data Governance",
  "definition": "Data Governance is a system of policies, processes, roles, and standards that establish accountability and control over an organisation's data assets throughout their lifecycle. It defines who may take what actions with which data, under what circumstances, and using what methods, ensuring data quality, consistency, security, and regulatory compliance. Effective data governance bridges technical data management practices with organisational strategy, aligning data stewardship with business objectives and legal obligations. It is foundational to trustworthy analytics, AI model training, and interoperability across enterprise systems.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-stewardship",
        "label": "Data Stewardship"
      },
      {
        "@id": "urn:ngm:class:data-quality-management",
        "label": "Data Quality Management"
      },
      {
        "@id": "urn:ngm:class:data-catalogue",
        "label": "Data Catalogue"
      },
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-ownership",
        "label": "Data Ownership"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:data-classification",
        "label": "Data Classification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      },
      {
        "@id": "urn:ngm:class:analytics",
        "label": "Analytics"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:organisational-policy",
        "label": "Organisational Policy"
      },
      {
        "@id": "urn:ngm:class:data-architecture",
        "label": "Data Architecture"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:dama-dmbok",
        "label": "DAMA DMBOK"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:iso-8000",
        "label": "ISO 8000"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      },
      {
        "@id": "urn:ngm:class:data-anarchy",
        "label": "Data Anarchy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:information-governance",
        "label": "Information Governance"
      },
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      },
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      },
      {
        "@id": "urn:ngm:class:data-security",
        "label": "Data Security"
      },
      {
        "@id": "urn:ngm:class:enterprise-architecture",
        "label": "Enterprise Architecture"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:ai-governance-and-ethics",
        "label": "AI Governance and Ethics"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:enterprise-data-governance",
      "label": "Enterprise Data Governance"
    }
  ],
  "quality": 0.74,
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-governance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b0bb6badb9b85089d5015bc2e8c29e29ebb0b2015c24f96056770446594fcb73"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - Data Governance is a system of policies, processes, roles, and standards that establish accountability and control over an organisation's [[Data Asset]] portfolio throughout the data lifecycle. It defines authority structures — who owns data, who may access or transform it, and under what conditions — ensuring [[Data Quality Management]], consistency, [[Data Security]], and adherence to regulatory frameworks such as [[GDPR]]. Unlike purely technical disciplines such as [[Data Management]] or [[Data Architecture]], data governance is fundamentally an organisational and strategic function that aligns data stewardship with business objectives, risk tolerance, and legal obligations. It is a prerequisite for trustworthy [[Analytics]], responsible [[Machine Learning]], and cross-system [[Data Interoperability]].

- ### Overview
  - Data Governance emerged as a formal discipline in the early 2000s as organisations recognised that ungoverned data assets created risks — duplicated records, conflicting definitions, privacy breaches, and regulatory penalties. The proliferation of data warehouses, big-data platforms, and cloud storage made the problem acute.
  - A governance framework specifies three interlocking concerns:
    - **Authority**: who is accountable for a dataset — [[Data Ownership]], [[Data Stewardship]], data custodianship
    - **Policy**: what rules apply — retention schedules, [[Data Classification]], privacy constraints, [[Access Control]]
    - **Process**: how rules are enforced — change management, issue escalation, audit trails, [[Data Lineage]] tracking
  - Modern governance programmes operate at multiple levels:
    - **Strategic** — board-level data strategy and risk appetite
    - **Tactical** — data governance councils and working groups
    - **Operational** — tooling, automation, and day-to-day stewardship tasks
  - The discipline has been substantially codified by the [[DAMA DMBOK]] (Data Management Body of Knowledge), which places data governance as the overarching management function encompassing all other data management disciplines.

- ### Key Components
  - **Data Stewardship**
    - [[Data Stewardship]] assigns named individuals (stewards) responsibility for specific datasets or domains
    - Stewards define business glossary terms, resolve data quality issues, and mediate access requests
  - **Data Catalogue and Metadata Management**
    - A [[Data Catalogue]] provides a searchable inventory of data assets with [[Metadata Management]] — schemas, ownership, sensitivity labels, usage statistics
    - Enables discovery, impact analysis, and lineage visualisation
  - **Data Quality Management**
    - [[Data Quality Management]] defines fitness-for-purpose dimensions: accuracy, completeness, timeliness, consistency, uniqueness, validity
    - Quality rules are encoded in profiling and monitoring tools; violations trigger stewardship workflows
  - **Data Lineage**
    - [[Data Lineage]] traces data from origin through transformations to consumption, supporting auditability and root-cause analysis
    - Critical for regulatory reporting (e.g. BCBS 239 in banking) and AI model provenance
  - **Data Classification**
    - [[Data Classification]] assigns sensitivity tiers (public, internal, confidential, restricted) to guide [[Access Control]], encryption, and handling procedures
  - **Master Data Management**
    - [[Master Data Management]] (MDM) is the operational complement to governance: it creates and maintains authoritative "golden records" for key entities (customers, products, locations) consistent with governance policies
  - **Policy and Standards**
    - Written policies translate governance intent into enforceable rules — retention schedules, anonymisation requirements, cross-border transfer restrictions
    - Standards bodies such as [[DAMA International]], [[ISO]], and regulators provide reference frameworks

- ### Mechanisms and Tooling
  - **Data Governance Councils** — cross-functional bodies with representatives from IT, Legal, Compliance, Finance, and business domains that set policy and resolve disputes
  - **Business Glossary** — a controlled vocabulary defining canonical business terms and their authoritative owners, reducing definitional ambiguity across [[Enterprise Architecture]] boundaries
  - **Automated Data Profiling** — continuous scanning of datasets for anomalies, nulls, outliers, and schema drift
  - **Access Control and Entitlement Management** — role-based and attribute-based [[Access Control]] enforced at the data platform layer, aligned with governance policies
  - **Audit Logging** — immutable logs of data access and modification, essential for [[Regulatory Compliance]] and forensics
  - **Data Contracts** — emerging practice (popularised in data mesh architectures) in which producers and consumers agree on schema, SLAs, and quality guarantees, formalising governance at the pipeline level

- ### Applications and Use Cases
  - **Regulatory Compliance**
    - [[GDPR]], CCPA, HIPAA, and sector-specific regulations (BCBS 239, MiFID II) impose data residency, consent, retention, and breach-notification obligations; governance programmes operationalise compliance
  - **AI and Machine Learning Governance**
    - Training data provenance, bias audits, and model cards require governance-grade [[Data Lineage]] and [[Data Quality Management]] — a requirement codified in the EU [[AI Act]]
    - [[Federated Learning]] architectures distribute training without centralising raw data, but still require governance frameworks to manage model updates and data access agreements
  - **Cloud Data Platforms**
    - Migration to cloud data lakes and lakehouses (Databricks, Snowflake, BigQuery) requires governance tooling (e.g. Apache Atlas, Collibra, Alation) to maintain control across distributed storage
  - **Data Mesh**
    - [[Data Mesh]] architectures delegate data product ownership to domain teams; governance shifts from centralised control to federated governance with global standards — sometimes called "governance at scale"
  - **Blockchain-anchored Provenance**
    - [[Blockchain]] immutable ledgers are used to anchor data lineage records and consent audit trails, providing tamper-evident provenance in supply-chain and healthcare contexts
  - **Master Data in ERP Systems**
    - Enterprise resource planning deployments rely on [[Master Data Management]] backed by governance policies to maintain consistent product codes, supplier identities, and financial hierarchies across global subsidiaries

- ### Relationships
  - hasPart:: [[Data Stewardship]]
  - hasPart:: [[Data Quality Management]]
  - hasPart:: [[Data Catalogue]]
  - hasPart:: [[Metadata Management]]
  - hasPart:: [[Data Lineage]]
  - requires:: [[Data Ownership]]
  - requires:: [[Access Control]]
  - requires:: [[Data Classification]]
  - enables:: [[Regulatory Compliance]]
  - enables:: [[Data Interoperability]]
  - enables:: [[Analytics]]
  - enables:: [[Machine Learning]]
  - dependsOn:: [[Organisational Policy]]
  - dependsOn:: [[Data Architecture]]
  - standardizedBy:: [[DAMA DMBOK]]
  - standardizedBy:: [[GDPR]]
  - standardizedBy:: [[ISO 8000]]
  - contrastsWith:: [[Data Management]]
  - relatedTo:: [[Master Data Management]]
  - relatedTo:: [[Data Privacy]]
  - relatedTo:: [[Data Security]]
  - relatedTo:: [[Enterprise Architecture]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[AI Governance and Ethics]]
  - bridges-to:: [[Federated Learning]]

- ### Standards and Context
  - **DAMA DMBOK** ([[DAMA DMBOK]]) — The Data Management Body of Knowledge is the canonical reference for data governance practice, published by DAMA International. Version 2 (2017) defines 11 data management knowledge areas with governance as the apex function.
  - **ISO 8000** ([[ISO 8000]]) — International standard for data quality, providing a framework for specifying and measuring quality of master data.
  - **ISO/IEC 38505** — IT governance standard specifically addressing data governance for organisations, published by ISO/IEC JTC 1.
  - **GDPR (EU 2016/679)** ([[GDPR]]) — Imposes data protection by design and default, data subject rights, lawful basis for processing, and cross-border transfer restrictions — all of which require governance infrastructure to operationalise.
  - **CCPA / CPRA** — California Consumer Privacy Act and its successor impose similar obligations in the US context.
  - **BCBS 239** — Basel Committee principles for effective risk data aggregation and reporting; the most demanding data governance standard in banking.
  - **EU AI Act** — Requires documentation of training data provenance, bias assessments, and quality management for high-risk AI systems, directly linking data governance to [[AI Governance and Ethics]].
  - **DAMA International** — Professional body that maintains DMBOK, certifies data management professionals (CDMP), and publishes best practices for [[Data Stewardship]] and governance programme design.
  - **The Open Group TOGAF** — [[Enterprise Architecture]] framework that incorporates data governance as part of the data architecture domain.

- ### Challenges and Limitations
  - **Organisational resistance** — Governance imposes accountability and constraints; data producers often resist stewardship obligations without executive sponsorship
  - **Tooling fragmentation** — The governance tooling ecosystem is fragmented across catalogue vendors, quality platforms, and lineage trackers, creating integration overhead
  - **Federated vs. centralised tension** — Centralised governance councils can become bottlenecks; federated models risk inconsistency; [[Data Mesh]] seeks a middle path
  - **Shadow IT and dark data** — Ungoverned data stores outside official platforms undermine governance coverage
  - **AI amplification of risk** — [[Machine Learning]] models trained on poorly governed data propagate errors and biases at scale, raising the stakes for governance failures

- ### Provenance
  - sources:: DAMA DMBOK v2 (2017); ISO/IEC 38505-1:2017; GDPR (EU 2016/679); BCBS 239 (2013); EU AI Act (2024)
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
