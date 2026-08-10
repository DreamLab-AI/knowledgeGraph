public:: true

# Metadata Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c28390e09f329a0015903cd135b284749cd904b3a502b0b9482fc8fb53cbdc9c",
  "@type": "Page",
  "vc:slug": "metadata-registry",
  "title": "Metadata Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:enterprise-data-consistency",
      "vc:label": "Enterprise Data Consistency"
    },
    {
      "@id": "urn:visionflow:owl:class:data-governance",
      "vc:label": "Data Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9960"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Metadata Registry"
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
  "@id": "urn:ngm:class:metadata-registry",
  "@type": "Class",
  "label": "Metadata Registry",
  "definition": "Centralised systems for managing metadata according to standards like ISO/IEC 11179, providing authoritative definitions, usage rules, and data element descriptions to ensure consistency, interoperability, and governance across enterprise data systems.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-element",
        "label": "Data Element"
      },
      {
        "@id": "urn:ngm:class:controlled-vocabulary",
        "label": "Controlled Vocabulary"
      },
      {
        "@id": "urn:ngm:class:metadata-schema",
        "label": "Metadata Schema"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:enterprise-architecture",
        "label": "Enterprise Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-stewardship",
        "label": "Data Stewardship"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-consistency",
        "label": "Enterprise Data Consistency"
      },
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-catalog",
        "label": "Data Catalog"
      },
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:iso-11179",
        "label": "ISO/IEC 11179"
      },
      {
        "@id": "urn:ngm:class:dublin-core",
        "label": "Dublin Core"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-quality-management",
        "label": "Data Quality Management"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-11179",
        "label": "ISO/IEC 11179"
      },
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE P2957"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-dictionary",
        "label": "Data Dictionary"
      },
      {
        "@id": "urn:ngm:class:data-lake",
        "label": "Data Lake"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      },
      {
        "@id": "urn:ngm:class:feature-store",
        "label": "Feature Store"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:metadata-repository",
      "label": "Metadata Repository"
    },
    {
      "@id": "urn:ngm:class:data-registry",
      "label": "Data Registry"
    }
  ],
  "quality": 0.68,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:metadata-registry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c28390e09f329a0015903cd135b284749cd904b3a502b0b9482fc8fb53cbdc9c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Enterprise Data Consistency]]",
      "resolved": "urn:visionflow:linked:enterprise-data-consistency",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Governance]]",
      "resolved": "urn:visionflow:owl:class:data-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - Centralised systems for managing metadata according to standards like ISO/IEC 11179, providing authoritative definitions, usage rules, and data element descriptions to ensure consistency, interoperability, and governance across enterprise data systems.

- ### Semantic Classification
  - owl-class:: infrastructure:MetadataRegistry
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Data Governance]]
  - enables:: [[Enterprise Data Consistency]]

- ### Content

  ## ISO/IEC 11179 Standard

  ### Core Framework
  - Global data element registry
  - Definition guidelines
  - Management rules
  - International standard
  - Cross-industry application

  ### Key Functions
  - Data sharing support
  - Cataloguing capability
  - Integration enablement
  - Harmonised definitions
  - Business glossaries

  ## IEEE P2957 Standard

  ### Focus Areas
  - Machine-readable formats
  - Data discovery support
  - Data type registry
  - Machine-actionable structures
  - End-point services

  ### Value Conversion
  - Type transformation
  - Format translation
  - Interoperability
  - Data consumption
  - Standard compliance

  ## Industry Recognition

  ### 2024 Achievements
  - Gartner Market Guide inclusion
  - Data governance platform category
  - Government implementations
  - Award recognition
  - Enterprise adoption

  ### Notable Deployments
  - Metadata.NSW
  - NSW Government
  - ACT AIIA Award
  - Technology Platform recognition
  - Public sector leadership

  ## Registry Functions

  ### Primary Purposes
  - Consistency assurance
  - Interoperability support
  - Clarity provision
  - Authoritative definitions
  - Usage rule enforcement

  ### Data Element Management
  - Element registration
  - Definition storage
  - Relationship mapping
  - Version control
  - Deprecation tracking

  ## Enterprise Applications

  ### Domain Usage
  - Healthcare data
  - Financial services
  - Government systems
  - Data warehousing
  - Regulatory compliance

  ### Governance Support
  - Standard enforcement
  - Quality monitoring
  - Compliance tracking
  - Audit support
  - Policy management

  ## 2024 Trends

  ### AI Integration
  - New asset types
  - Versioning capabilities
  - Constant metadata production
  - AI supply chain tracking
  - Model registry

  ### Governance Evolution
  - Data and AI Asset Registry
  - Feature tracking
  - Prompt management
  - Function cataloguing
  - Real-time governance

  ## Quality Challenges

  ### Industry Statistics
  - 59% no quality measurement
  - Critical gap identified
  - Consistency issues
  - Control limitations
  - Improvement needs

  ### Best Practices
  - Unified framework
  - Standardised approaches
  - Automated discovery
  - Quality improvement
  - Compliance assurance

  ## Technical Architecture

  ### Core Components
  - Central repository
  - API services
  - Search interface
  - Admin console
  - Reporting tools

  ### Integration Points
  - Data catalogs
  - ETL tools
  - BI platforms
  - MDM systems
  - Governance tools

  ## Implementation Approach

  ### Setup Process
  - Standard selection
  - Scope definition
  - Stakeholder alignment
  - Tool selection
  - Governance framework

  ### Ongoing Management
  - Element registration
  - Definition updates
  - Quality monitoring
  - Usage tracking
  - Lifecycle management

  ## Benefits

  ### Consistency
  - Unified definitions
  - Standard terminology
  - Cross-system alignment
  - Reduced ambiguity
  - Clear communication

  ### Efficiency
  - Discovery acceleration
  - Integration simplification
  - Onboarding improvement
  - Maintenance reduction
  - Compliance automation

  #### Future Directions
  ### Emerging Capabilities
  - Active metadata
  - Real-time capture
  - AI orchestration
  - Automated application
  - Living asset approach

  ### Technology Evolution
  - Graph-based registries
  - Semantic capabilities
  - Machine learning
  - Automated discovery
  - Self-service access

- ### Current Landscape (2026)
  - The foundational ISO/IEC 11179 metadata registry standard completed a major generational refresh: the 4th edition of Part 3 (ISO/IEC 11179-3:2023) replaced the withdrawn 2013 edition, joined by new Parts 31 and 32 (2023) and Part 34:2024 for computable data registration, with ISO/IEC TR 19583-21:2025 providing a reference SQL instantiation of the metamodel.
  - In May 2026 ISO/IEC published 11179-3:2023/Amd 1, adding an explicit Item_Mapping class for typed crosswalks (same as, semantically equivalent, derived from, broader than), stronger provenance tracking, and a new shared Rules facility - modernising the registry for automated equivalence mapping across systems.
  - The market has bifurcated into a two-layer split: technical catalogues handling physical metadata (Databricks Unity Catalog, Apache Polaris, AWS Glue) versus governance catalogues handling business metadata (Collibra, Alation, Atlan, plus open-source OpenMetadata and DataHub).
  - Open source now leads at the infrastructure layer: Apache Gravitino graduated to an Apache Top-Level Project in June 2025 as a federating metadata lake, and Databricks-originated Unity Catalog was open-sourced in 2024 and donated to the LF AI and Data Foundation.
  - Leading open-source projects released rapidly through 2025-2026: DataHub hit 1.0 in January 2025 and v1.4.0.2 by February 2026 (11.6k+ GitHub stars, and can now itself act as an Iceberg REST catalogue in beta); OpenMetadata reached v1.11.8, introducing machine-readable data contracts in v1.8 (June 2025). Collate, backing OpenMetadata, raised a 10 million dollar Series A in July 2025.
  - AI-agent governance became the defining frontier: at Data + AI Summit 2026 Databricks introduced the Unity AI Gateway with runtime enforcement (hard spend caps, Contextual Service Policies, governed MCP services), and Google renamed Dataplex's catalogue to Universal/Knowledge Catalog in April 2026 - reflecting registries expanding to govern models, agents, tools and multimodal assets, not just tables.
  - Open challenges as of 2026 include reconciling the technical and governance catalogue layers (the "catalog wars"), giving AI agents trustworthy governed access to metadata via MCP, extending registries to unstructured and multimodal assets, and aligning documentation and lineage capabilities with regulatory demands such as the EU AI Act.

- ### References
  - 1. ISO/IEC JTC 1/SC 32 (2026). ISO/IEC 11179-3:2023/Amd 1:2026 - Metadata registries (MDR) - Part 3: Metamodel for registry common facilities - Amendment 1: Enhancements to Item Mapping. https://standards.iteh.ai/catalog/standards/iso/7b03b788-061f-473b-ae66-ff14cb0349e0/iso-iec-11179-3-2023-amd-1-2026
  - 2. ISO/IEC (2025). ISO/IEC TR 19583-21:2025 - Information technology - Concepts and usage of metadata - Part 21: 11179-3, -31, -32 Data model in SQL. https://webstore.iec.ch/en/publication/106059
  - 3. Nidhi Vichare (2026). The Other Catalog War: Governance Platforms and the Two-Layer Split. https://www.nidhivichare.com/blog/catalog-wars-part-3
  - 4. Bytebase (2026). Top Open Source Database Governance Tools in 2026. https://www.bytebase.com/blog/top-open-source-database-governance-tools/
  - 5. Databricks (2026). What's new with Unity Catalog at Data + AI Summit 2026. https://www.databricks.com/blog/whats-new-unity-catalog-data-ai-summit-2026
  - 6. Atlan (2026). Open Source Data Catalog Tools: Top 5 Software In 2026. https://atlan.com/open-source-data-catalog-tools/

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
